// EditRecipePage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './editPage.css';


const EditRecipePage = ({ match }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/recipe/${id}`);
        if (response.ok) {
          const recipeData = await response.json();
          console.log("GETS RECIPE!", recipeData);

          setTitle(recipeData.title);
          setContent(recipeData.content);
        } else {
          console.error("Failed to fetch recipe");
        }
      } catch (error) {
        console.error("Error during recipe fetch:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/recipe/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: title,
          content: content,
        }),
      });

      if (response.ok) {
        navigate(-1);
      } else {
        console.error("Failed to update recipe");
      }
    } catch (error) {
      console.error("Error during recipe update:", error);
    }
  };

  return (


    <div>
          <Header />

      <h6>Edit Recipe</h6>
      <label className="title">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label className="content">Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <button className="onclick" onClick={handleUpdate}>Submit</button>
      <Footer />
    </div>
    
  );
};

export default EditRecipePage;
