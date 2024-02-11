import React, { useEffect, useState } from "react";
import "./Profile.css"; // Import the external CSS file
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useUser } from "../../UserContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/recipe/user", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data.user);
          setUser(data.user);
          setRecipes(data.recipes);
        } else {
          console.error("Failed to fetch recipes");
        }
      } catch (error) {
        console.error("Error during recipe fetch:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Will fetch the recipe users");
      const response = await fetch("http://localhost:3000/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const data = await response.json();
        console.error("Recipe submission failed:", data.error);
      }
    } catch (error) {
      console.error("Error during recipe submission:", error);
    }
  };

  const handleDelete = (recipeId) => {
    fetch(`http://localhost:3000/api/recipe/${recipeId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
        } else {
          console.error("Failed to delete recipe");
        }
      })
      .catch((error) => {
        console.error("Error during recipe deletion:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <a href='home' class="home-link">Home</a>
      <div className="profile-pic">
        <img
          src="https://picsum.photos/200"
          alt="Dish"
          style={{ width: "10%" }}
        />
        <h2 className="user">
          {user ? <p>Welcome, {user.username}!</p> : <p>Please log in</p>}
        </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="add">Recipe Title </h3>
          <textarea
            id="title"
            name="title"
            placeholder="Title"
            rows="4"
            cols="50"
            value={formData.title}
            onChange={handleInputChange}
          />

          <h3 className="add">Recipe </h3>
          <textarea
            id="content"
            name="content"
            placeholder="Recipe"
            rows="4"
            cols="50"
            value={formData.content}
            onChange={handleInputChange}
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-div">
            <div>
              <h4>{recipe.title}</h4>
              <p>{recipe.content}</p>
            </div>
            <div className="btns">
              <Link to={`/edit/${recipe.id}`}>
                <button className="edit-btn">Edit</button>
              </Link>{" "}
              <button
                className="del-btn"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
