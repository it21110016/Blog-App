import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import styles from '../styles/add.module.css';

const AddBlog = () => {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

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
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Blog added successfully
        alert('Blog added!');

        setName("");
        setAuthor("");
        setDescription("");

        // Redirect to home page after 1 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);

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