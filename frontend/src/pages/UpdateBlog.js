import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function getBlog() {

            try {
                const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
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
                `http://localhost:5000/api/v1/blogs/${id}`,
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
            <h1>Update Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </>
    );
};

export default UpdateBlog;
