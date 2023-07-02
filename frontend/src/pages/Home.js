import { useEffect, useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function getBlogs() {
            try {

                const res = await fetch("http://localhost:5000/api/v1/blogs");

                const data = await res.json();

                if (data) {
                    setBlogs(data);
                }

            } catch (error) {
                console.log(error.toString());
            }
        }

        getBlogs();

    }, [])

    async function deleteBlog(id) {
        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/blogs/${id}`,
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

    return (
        <>
            <h1>Home</h1>
            <table>
                <thead>
                    <tr>
                        <th>Blog Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.name}</td>
                            <td><button onClick={() => { window.location.href = `/viewBlog/${blog._id}` }}>View Blog</button></td>
                            <td><button onClick={() => { window.location.href = `/updateBlog/${blog._id}` }}>Update</button></td>
                            <td><button onClick={() => deleteBlog(blog._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><button onClick={() => { window.location.href = `/AddBlog` }}>Add a new Blog</button></div>
        </>
    )
}

export default Home;