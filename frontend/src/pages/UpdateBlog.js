import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from '../styles/update.module.css';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const UpdateBlog = () => {

    const { id } = useParams();
    const navigate = useNavigate(); // Initialize the navigate function

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState('');

    const token = localStorage.getItem('token'); //get token from local storage

    useEffect(() => {
        async function getBlog() {

            try {
                const res = await fetch(`https://blog-app-6vki.onrender.com/api/v1/blogs/${id}`, {
                    headers: {
                        Authorization: `${token}`, // I've removed the "Bearer" prefix here and backend as well
                    },
                });
                const data = await res.json();
                // console.log(data)

                if (res.status === 401) {
                    // If token is not valid, show an alert and navigate to the login page
                    console.log("Invalid Token, login again");
                    navigate("/login");
                    return;
                }

                if (data) {
                    setName(data.name);
                    setAuthor(data.author);
                    setDescription(data.description);

                } else {
                    console.error("Failed to fetch blog");
                }

            } catch (error) {
                console.error(error.message);
            }
        }

        getBlog();

    }, [id, navigate, token]); // Include navigateand token in the dependency array

    async function handleSubmit(e) {

        e.preventDefault();

        const formData = {
            name: name,
            author: author,
            description: description,
        };

        try {

            const response = await fetch(
                `https://blog-app-6vki.onrender.com/api/v1/blogs/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.status === 401) {
                // If token is not valid, show an alert and navigate to the login page
                console.log("Invalid Token, login again");
                navigate("/login");
                return;
            }

            if (response.ok) {
                // Blog updated successfully
                // alert("Blog updated!");
                setSuccessMessage("Blog updated successfully");

                setName("");
                setAuthor("");
                setDescription("");

                // Redirect to home page after 1 seconds
                setTimeout(() => {
                    window.location.href = '/';
                }, 1500);

            } else {
                console.error("Failed to update blog");
            }

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <NavBar />

            <h1 className={styles.header}>Update Blog</h1>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>

                    {/* Render the Tailwind CSS success alert */}
                    {successMessage && (
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 ml-2 mr-3 md:ml-7">
                            <p>{successMessage}</p>
                        </div>
                    )}

                    <label className={styles.label}>Name:</label>
                    <InputText
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br /><br />

                    <label className={styles.label}>Author:</label>
                    <InputText
                        className={styles.input}
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <br /><br />
                    <label className={styles.label} >Description:</label>
                    <br /><br />

                    <InputTextarea
                        className={styles.text}
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5} cols={30}
                    />

                    <br /><br />

                    <Button className={styles.button} type="submit" label="Update" />

                </form>
            </div>

            <Footer />
        </>
    );
};

export default UpdateBlog;
