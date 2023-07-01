import { useState } from "react";

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
        const response = await fetch('http://localhost:5000/api/v1/blogs', {
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

      } else {
        // Handle error case
        console.error('Failed to add blog');
      }
  }  catch (error) {
    console.log(error.message);
  }
  
}
  return (
    <>
      <h1>add blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Blog Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Enter Blog Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        <label>Enter Blog Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddBlog;
