import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import styles from '../styles/add.module.css';
import { useNavigate } from "react-router-dom";


const AddBlog = () => {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function
  const token = localStorage.getItem('token'); //get token from local storage

  async function handleSubmit(e) {

    e.preventDefault();

    const formData = {
      name: name,
      author: author,
      description: description
    };

    try {

      const response = await fetch('https://blog-app-6vki.onrender.com/api/v1/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 401) {
        // If token is not valid, show an alert and navigate to the login page
        alert("Invalid Token, login again");
        navigate("/login");
        return;
      }

      if (response.ok) {
        // Blog added successfully
        // alert('Blog added!');
        setSuccessMessage("Blog added successfully");
        setName("");
        setAuthor("");
        setDescription("");

        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);

      } else {
        // Handle error case
        console.error('Failed to add blog');
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <NavBar />

      <h1 className={styles.header}>Add New Blog</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

          {/* Render the Tailwind CSS success alert */}
          {successMessage && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4">
              <p>{successMessage}</p>
            </div>
          )}

          <span className="p-float-label">
            <InputText id="name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="name" className={styles.input}>Enter Blog Name:</label>
          </span>

          <br />

          <span className="p-float-label">
            <InputText id="author" className={styles.input} value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <label htmlFor="author" className={styles.input}>Enter Blog Author:</label>
          </span>

          <br />

          <span className="p-float-label">
            <InputTextarea id="description" className={styles.text} value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} required />
            <label htmlFor="description" className={styles.input}>Enter Blog Description:</label>
          </span>

          <br />

          <Button className={styles.button} type="submit" label="Submit" />

        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddBlog;