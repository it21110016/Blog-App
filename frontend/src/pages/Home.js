import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from '../styles/home.module.css';
import { InputText } from 'primereact/inputtext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getBlogs() {
      try {

        const res = await fetch("https://blogapp11.azurewebsites.net/api/v1/blogs");

        const data = await res.json();

        if (data) {
          setBlogs(data);
          setIsLoading(false); // Set loading to false when data is fetched
        }

      } catch (error) {
        console.log(error.toString());
        setIsLoading(false); // Set loading to false even if there's an error
      }
    }

    getBlogs();

  }, [])

  async function deleteBlog(id) {
    try {
      const response = await fetch(
        `https://blogapp11.azurewebsites.net/api/v1/blogs/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Blog deleted successfully
        alert("Blog deleted!");

        // Remove the deleted blog from the state
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));

      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.log(error.toString());
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const GenerateReport = () => {
    const input = document.getElementById('page'); // Provide an ID to the table element

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('report.pdf');
      });
  };

  return (
    <>
      <div id="page">

        <NavBar />

        <div className={styles.container}>
          <h1 className={styles.header} >Blogs</h1>

          <div className={styles.searchContainer}>
            <span className="p-input-icon-left" >
              <i className="pi pi-search" />
              <InputText placeholder="Search" value={searchQuery} onChange={handleSearch} />
            </span>
          </div>

          <button className={styles.pdfButton} onClick={GenerateReport}>Generate PDF</button>

          <div className={styles.tableContainer}>
            {isLoading ? (
              <h1 style={{ fontSize: "40px" }}>🌀 Loading...</h1>
            ) : (
              <table>

                <thead>
                  <tr>
                    <th>Blog Name</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>{blog.name}</td>
                      <td className={styles.actionButtons}>
                        <button id={styles.view} onClick={() => { window.location.href = `/viewBlog/${blog._id}` }}>View Blog</button>
                        <button onClick={() => { window.location.href = `/updateBlog/${blog._id}` }}>Update</button>
                        <button id={styles.delete} onClick={() => deleteBlog(blog._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            )}
          </div>

          <div>
            <button className={styles.addButton} onClick={() => { window.location.href = `/AddBlog` }}>Add a new Blog</button>
          </div>

        </div>

        <Footer />

      </div>
    </>
  )
}

export default Home;