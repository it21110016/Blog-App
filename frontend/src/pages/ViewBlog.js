import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from '../styles/view.module.css';

const ViewBlog = () => {

    const { id } = useParams();

    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        async function getBlog() {
            try {

                const res = await fetch(`https://blog-app-6vki.onrender.com/api/v1/blogs/${id}`)

                const data = await res.json();

                if (data) {
                    setBlogs(data);
                }

            } catch (error) {
                console.log(error.message);
            }
        }

        getBlog();

    }, [id])

    return (
        <>
            <NavBar />

            <h1 className={styles.header} style={{ fontSize: "40px" }}>View Blog</h1>

            <hr />

            <div className={styles.container}>
                <p className={styles.name}>{blog.name}</p>
                <p className={styles.author}>By: {blog.author}</p>
                <p className={styles.description}>{blog.description}</p>
            </div>

            <Footer />
        </>
    )
}

export default ViewBlog;