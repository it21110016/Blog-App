import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from '../styles/update.module.css';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const UpdateBlog = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function getBlog() {

            try {
                const res = await fetch(`https://blog-app-6vki.onrender.com/api/v1/blogs/${id}`);
                const data = await res.json();
                console.log(data)

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

    }, [id]);

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
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                // Blog updated successfully
                alert("Blog updated!");

                setName("");
                setAuthor("");
                setDescription("");
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
