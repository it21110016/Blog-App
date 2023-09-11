import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from '../styles/view.module.css';

const ViewBlog = () => {

    const { id } = useParams();
    const navigate = useNavigate(); // Initialize the navigate function

    const [blog, setBlogs] = useState([]);

    useEffect(() => {

        async function getBlog() {
            
            const token = localStorage.getItem('token'); //get token from local storage

            if (!token) {
                // If token is not present, show an alert and navigate to the login page
                console.log("Invalid Token");
                navigate("/login");
                return;
            }

            try {
                const res = await fetch(`https://blog-app-6vki.onrender.com/api/v1/blogs/${id}`, {
                    headers: {
                        Authorization: `${token}`, // I've removed the "Bearer" prefix here and backend as well
                    },
                });

                if (res.status === 401) {
                    // If token is not valid, show an alert and navigate to the login page
                    console.log("Invalid Token, login again");
                    navigate("/login");
                    return;
                }

                const data = await res.json();

                if (data) {
                    setBlogs(data);
                }

            } catch (error) {
                console.log(error.message);
            }
        }

        getBlog();

    }, [id, navigate]); // Include navigate in the dependency array

    return (
        <>
            <NavBar />

            <h1 className={styles.header} >View Blog</h1>

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
