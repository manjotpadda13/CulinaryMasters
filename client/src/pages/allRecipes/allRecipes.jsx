import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useUser } from "../../UserContext";
import { Link } from "react-router-dom";

// import './components/login/login.css';

const AllRecipesPage = () => {
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    fetch("http://localhost:3000/api/recipe", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch recipes");
        }
      })
      .then((data) => { 
        console.log(data)
        setUser(data.user);
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error("Error during recipe fetch:", error);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

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

  return (
    <div>
      <Header />
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-div">
            <strong>User:</strong> {recipe?.User?.username}
            <div>
              <h4>{recipe.title}</h4>
              <p>{recipe.content}</p>
            </div>
            {user && user.username === recipe?.User?.username && (
              <div className="btns">
                <Link to={`/edit/${recipe.id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(recipe.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllRecipesPage;
