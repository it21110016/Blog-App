import { useEffect, useState } from "react";

const Home = () => {

   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
    async function getBlogs() {
        try {
        
            const res = await fetch("http://localhost:5000/api/v1/blogs");
    
            const data = await res.json();

            if(data){
                setBlogs(data);
            }
    
        } catch (error) {
            console.log(error.toString());
        }
    }

    getBlogs();
    
   },[])

    return(
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
                    {blogs.map((blog)=>(
                        <tr key={blog._id}>  
                            <td>{blog.name}</td>
                            <td><button onClick={()=> {window.location.href=`/ViewBlog/${blog._id}`}}>View Blog</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><button onClick={()=> {window.location.href=`/AddBlog`}}>Add a new Blog</button></div>
        </>
    )
}

export default Home;