import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewBlog = () => {

    const {id} = useParams();

    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        async function getBlog() {
            try {

                const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`)

                const data = await res.json();

                if(data){
                    setBlogs(data);
                }
                
            } catch (error) {
                console.log(error.message);
            }
        }

        getBlog();

    },[id])

    return(
        <>
            <h1>View Blog</h1>
            <div>
                <p>{blog.name}</p>
                <p>{blog.author}</p>
                <p>{blog.description}</p>
            </div>
        </>
    )
}

export default ViewBlog;