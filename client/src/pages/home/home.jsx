import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the external CSS file
import Axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";


function Home() {
  // State to manage the value of the search input
  const [searchInput, setSearchInput] = useState('');
  const [apiData, setApiData] = useState(null);// State variable to store API data
  const [dishOneName, setdishOneName] = useState('')
  const [dishOneImage, setdishOneImage] = useState('https://picsum.photos/200')


  const [dishTwoName, setdishTwoName] = useState('')
  const [dishTwoImage, setdishTwoImage] = useState('https://picsum.photos/200')
  const [dishThreeName, setdishThreeName] = useState('')
  const [dishThreeImage, setdishThreeImage] = useState('https://picsum.photos/200')
  const [dishFourName, setdishFourName] = useState('')
  const [dishFourImage, setdishFourImage] = useState('https://picsum.photos/200')

  // Ingredients
  let [rowOneDishOneIngredients, setrowOneDishOneIngredients] = useState();
  let [rowOneDishTwoIngredients, setrowOneDishTwoIngredients] = useState();
  let [rowOneDishThreeIngredients, setrowOneDishThreeIngredients] = useState();
  let [rowOneDishFourIngredients, setrowOneDishFourIngredients] = useState();
  // let [rowThreeDishOneIngredients, setrowThreeDishOneIngredients] = useState();

  // Dessert Ingredients
  let [rowTwoDishOneIngredients, setrowTwoDishOneIngredients] = useState();
  let [rowTwoDishTwoIngredients, setrowTwoDishTwoIngredients] = useState();
  let [rowTwoDishThreeIngredients, setrowTwoDishThreeIngredients] = useState();
  let [rowTwoDishFourIngredients, setrowTwoDishFourIngredients] = useState();

  // Dessert Instructions
  let [rowTwoDishOneInstructions, setrowTwoDishOneInstructions] = useState();
  let [rowTwoDishTwoInstructions, setrowTwoDishTwoInstructions] = useState();
  let [rowTwoDishThreeInstructions, setrowTwoDishThreeInstructions] = useState();
  let [rowTwoDishFourInstructions, setrowTwoDishFourInstructions] = useState();

  // Seafood Ingredients
  let [rowThreeDishOneIngredients, setrowThreeDishOneIngredients] = useState();
  let [rowThreeDishTwoIngredients, setrowThreeDishTwoIngredients] = useState();
  let [rowThreeDishThreeIngredients, setrowThreeDishThreeIngredients] = useState();
  let [rowThreeDishFourIngredients, setrowThreeDishFourIngredients] = useState();

  // Seafood Instructions
  let [rowThreeDishOneInstructions, setrowThreeDishOneInstructions] = useState();
  let [rowThreeDishTwoInstructions, setrowThreeDishTwoInstructions] = useState();
  let [rowThreeDishThreeInstructions, setrowThreeDishThreeInstructions] = useState();
  let [rowThreeDishFourInstructions, setrowThreeDishFourInstructions] = useState();



  const ApiKey = '1'

  // Function to handle changes in the search input
  const handleInputChange = (e) => {
    // Update the searchInput state with the new value from the input field
    setSearchInput(e.target.value);
  };

  // Function to handle the click event of the search button
  const handleSearchClick = () => {
    // Check if the search input is not empty before making the API request
    if (searchInput.trim() === '') {
      // If the search input is empty, do nothing
      return;
    }
    
    // Axios GET request to fetch data from the meal database API
    Axios.get(`https://www.themealdb.com/api/json/v1/${ApiKey}/search.php?s=${searchInput}`)
      .then((res) => {
        // Log the API data to the console
        console.log(res.data);
        // console.log(res.data.meals);

        // Update dishOneName using setDishOneName
        setdishOneName(res.data.meals[0].strMeal);
        setdishOneImage(res.data.meals[0].strMealThumb);
        setdishTwoImage(res.data.meals[1].strMealThumb);
        setdishThreeImage(res.data.meals[2].strMealThumb);
        setdishFourImage(res.data.meals[3].strMealThumb);


        setdishTwoName(res.data.meals[1].strMeal);
        setdishThreeName(res.data.meals[2].strMeal);
        setdishFourName(res.data.meals[3].strMeal);

        // console.log(res.data.meals[0].strMeal);
        // console.log(res.data.meals[1].strMeal);
        // console.log(res.data.meals[2].strMeal);
        // console.log(dishOneImage)
        // mealOnetitle = (res.data.meals[0].strMeal);
        // Loop all keys
        // setApiData(res.data);
        // var keys =Object.keys(res.data.meals[0])
        // console.log(keys)

        setApiData(res.data);

        if (res.data.meals[0]) {
          var meal = res.data.meals[0];
          var keys = Object.keys(meal);
        
          // Filter keys that start with "strIngredient" and have non-null, non-empty values
          var strIngredientKeys = keys.filter(key => key.startsWith('strIngredient') && meal[key]);
        
          var ingredientList = [];
        
          // Loop over strIngredientKeys and append li elements to the ul
          strIngredientKeys.forEach(strIngredientKey => {
            var mealIngredient = meal[strIngredientKey];
            ingredientList.push(mealIngredient);
          });
        
          rowOneDishOneIngredients = ingredientList;
          setrowOneDishOneIngredients(rowOneDishOneIngredients);
          // console.log(rowOneDishOneIngredients);
        } else {
          console.error('No meal data available in res.data.meals[0]');
        }
        
        // Ingredient Meal Two
        if (res.data.meals[1]) {
          var meal = res.data.meals[1];
          var keys = Object.keys(meal);
        
          // Filter keys that start with "strIngredient"
          var strIngredientKeys = keys.filter(key => key.startsWith('strIngredient') && meal[key]);
        
          
          var ingredientList = []
        
          // Loop over strIngredientKeys and append li elements to the ul
          strIngredientKeys.forEach(strIngredientKey => {
            var mealIngredient = meal[strIngredientKey];
            ingredientList.push(mealIngredient)
          });

          rowOneDishTwoIngredients = (ingredientList);
          setrowOneDishTwoIngredients(rowOneDishTwoIngredients)
          // console.log(rowOneDishTwoIngredients);
        } else {
          console.error('No meal data available in res.data.meals[1]');
        }

        // Ingredient Meal Three
        if (res.data.meals[2]) {
          var meal = res.data.meals[2];
          var keys = Object.keys(meal);
        
          // Filter keys that start with "strIngredient"
          var strIngredientKeys = keys.filter(key => key.startsWith('strIngredient') && meal[key]);
        
          
          var ingredientList = []
        
          // Loop over strIngredientKeys and append li elements to the ul
          strIngredientKeys.forEach(strIngredientKey => {
            var mealIngredient = meal[strIngredientKey];
            ingredientList.push(mealIngredient)
          });

          rowOneDishThreeIngredients = (ingredientList);
          setrowOneDishThreeIngredients(rowOneDishThreeIngredients)
          console.log(rowOneDishThreeIngredients);
        } else {
          console.error('No meal data available in res.data.meals[2]');
        }



        // Ingredient Meal Four
        if (res.data.meals[3]) {
          var meal = res.data.meals[3];
          var keys = Object.keys(meal);
        
          // Filter keys that start with "strIngredient"
          var strIngredientKeys = keys.filter(key => key.startsWith('strIngredient') && meal[key]);
          
          var ingredientList = []
        
          // Loop over strIngredientKeys and append li elements to the ul
          strIngredientKeys.forEach(strIngredientKey => {
            var mealIngredient = meal[strIngredientKey];
            ingredientList.push(mealIngredient)
          });
          rowOneDishFourIngredients = (ingredientList);
          setrowOneDishFourIngredients(rowOneDishFourIngredients)
          // console.log(rowOneDishFourIngredients);
        } else {
          console.error('No meal data available in res.data.meals[0]');
        }
        
        
        

      })
      .catch((error) => {
        // Log an error message if there's an issue fetching data
        console.error("Error fetching data:", error);
      });
  };

  

  // store name state
  const [rowTwoDishOneName, setrowTwoDishOneName] = useState('')
  const [rowTwoDishTwoName, setrowTwoDishTwoName] = useState('')
  const [rowTwoDishThreeName, setrowTwoDishThreeName] = useState('')
  const [rowTwoDishFourName, setrowTwoDishFourName] = useState('')
  // store image state 
  const [rowTwoDishOneImage, setrowTwoDishOneImage] = useState('https://picsum.photos/200')
  const [rowTwoDishTwoImage, setrowTwoDishTwoImage] = useState('https://picsum.photos/200')
  const [rowTwoDishThreeImage, setrowTwoDishThreeImage] = useState('https://picsum.photos/200')
  const [rowTwoDishFourImage, setrowTwoDishFourImage] = useState('https://picsum.photos/200')

  
// Desert Section
Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
  .then((res) => {
    // console.log(res.data.meals);
    let dessertMeals;
    dessertMeals = res.data.meals;
    console.log(dessertMeals);

    // Update rowTwoDishOneName
    setrowTwoDishOneName(res.data.meals[4].strMeal)
    setrowTwoDishTwoName(res.data.meals[36].strMeal)
    setrowTwoDishThreeName(res.data.meals[10].strMeal)
    setrowTwoDishFourName(res.data.meals[20].strMeal)
    // Update rowTwoDishOneImage
    setrowTwoDishOneImage(res.data.meals[4].strMealThumb);
    setrowTwoDishTwoImage(res.data.meals[36].strMealThumb);
    setrowTwoDishThreeImage(res.data.meals[10].strMealThumb);
    setrowTwoDishFourImage(res.data.meals[20].strMealThumb);
  })
  .catch((error) => {
    // Log any errors
    console.error('Error fetching data:', error);
  });

// Dessert Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Banana%20Pancakes`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowTwoDishOneIngredients(ingredientList);
    setrowTwoDishOneInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

//========================
// Dessert Two Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=New%20York%20cheesecake`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowTwoDishTwoIngredients(ingredientList);
    setrowTwoDishTwoInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});



// Dessert Three Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Canadian%20Butter%20Tarts`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowTwoDishThreeIngredients(ingredientList);
    setrowTwoDishThreeInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

//==========================
// Dessert Four Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Chocolate%20Souffle`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowTwoDishFourIngredients(ingredientList);
    setrowTwoDishFourInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});
  


// Store seafood
// store name state
const [rowThreeDishOneName, setrowThreeDishOneName] = useState('')
const [rowThreeDishTwoName, setrowThreeDishTwoName] = useState('')
const [rowThreeDishThreeName, setrowThreeDishThreeName] = useState('')
const [rowThreeDishFourName, setrowThreeDishFourName] = useState('')
// // store image state 
const [rowThreeDishOneImage, setrowThreeDishOneImage] = useState('https://picsum.photos/200')
const [rowThreeDishTwoImage, setrowThreeDishTwoImage] = useState('https://picsum.photos/200')
const [rowThreeDishThreeImage, setrowThreeDishThreeImage] = useState('https://picsum.photos/200')
const [rowThreeDishFourImage, setrowThreeDishFourImage] = useState('https://picsum.photos/200')
// Seafood Section
Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
  .then((res) => {
    // console.log(res.data.meals);
    let seafoodMeals;
    seafoodMeals = res.data.meals;
    // console.log(seafoodMeals);

    // Update rowThreeDishOneName
    setrowThreeDishOneName(res.data.meals[18].strMeal)
    setrowThreeDishTwoName(res.data.meals[25].strMeal)
    setrowThreeDishThreeName(res.data.meals[27].strMeal)
    setrowThreeDishFourName(res.data.meals[24].strMeal)
    // Update rowThreeDishOneImage
    setrowThreeDishOneImage(res.data.meals[18].strMealThumb);
    setrowThreeDishTwoImage(res.data.meals[25].strMealThumb);
    setrowThreeDishThreeImage(res.data.meals[27].strMealThumb);
    setrowThreeDishFourImage(res.data.meals[24].strMealThumb);
  // })
  // .catch((error) => {
  //   // Log any errors
  //   console.error('Error fetching data:', error);
  });

//==================================================
// Seafood One Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Salmon%20Avocado%20Salad`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }
    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowThreeDishOneIngredients(ingredientList);
    setrowThreeDishOneInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

//==================================================
// Seafood Two Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Sushi`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowThreeDishTwoIngredients(ingredientList);
    setrowThreeDishTwoInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

//==================================================
// Seafood Three Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Tuna%20and%20Egg%20Briks`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowThreeDishThreeIngredients(ingredientList);
    setrowThreeDishThreeInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

//==================================================
// Seafood Four Ingredients
Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Spring%20onion%20and%20prawn%20empanadas`)
.then((res) => {
  if (res.data.meals && res.data.meals.length > 0) {
    var meal = res.data.meals[0]; // Access the first meal object
    var ingredientList = [];
    var directions = [];

    // Iterate over all keys in the meal object
    for (const key in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (key.startsWith('strIngredient') && meal[key] && meal[key].trim() !== '') {
        ingredientList.push(meal[key]); // Add the ingredient to the list
      }
    }
    // Get Instructions
    for (const keytwo in meal) {
      // Check if the key starts with "strIngredient" and if the value is not null or empty
      if (keytwo.startsWith('strInstructions') && meal[keytwo] && meal[keytwo].trim() !== '') {
        directions.push(meal[keytwo]); // Add the ingredient to the list
        // console.log(directions);
      }
    }

    // Now ingredientList contains all ingredients
    // console.log(ingredientList);
    // You can set it to your state or use it wherever you need
    setrowThreeDishFourIngredients(ingredientList);
    setrowThreeDishFourInstructions(directions);
    
  } else {
    console.error('No meal data available in res.data.meals');
  }
})
.catch((error) => {
  console.error('Error fetching meal data:', error);
});

  
  return (
    <>
         
        <Header />

        <a href='profile' class="profile-link">Profile</a>
        {/* Input field for searching dishes */}
        <input className='srch' type="text" placeholder="Search Dish" value={searchInput} onChange={handleInputChange} />
        {/* Search button with click event handler */}
        <button className='srch-btn' onClick={handleSearchClick}>search</button>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Beef</a>
            <a href="#">Chicken</a>
            <a href="#">Vegan</a>
            <a href="#">Dessert</a>
          </div>

     

        
        </div>
        <div className='row-one'>
          <h3>Search Results</h3>
          <div className='card'>
            <img src={dishOneImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{dishOneName}</b></h4>
              <p>Ingredients:</p>
              <ul className='ingredientOneList'>
                {rowOneDishOneIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
                
              </ul>
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src={dishTwoImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{dishTwoName}</b></h4>
              <p>Ingredients:</p>
              <ul className='ingredientTwoList'>
              {rowOneDishTwoIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}

              </ul>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src={dishThreeImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{dishThreeName}</b></h4>
              <p>Ingredients:</p>
              <ul className='ingredientThreeList'>
              {rowOneDishThreeIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}

              </ul>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src={dishFourImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{dishFourName}</b></h4>
              <p>Ingredients:</p>
              <ul className='ingredientFourList'>
              {rowOneDishFourIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}

              </ul>
            </div>
          </div>

        </div>
          {/* row two */}
          <div className='row-two'>
          <h3>Desserts</h3>
          <div className='card'>
            <img src={rowTwoDishOneImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishOneName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowTwoDishOneIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowTwoDishOneInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src={rowTwoDishTwoImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishTwoName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowTwoDishTwoIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowTwoDishTwoInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src={rowTwoDishThreeImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishThreeName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowTwoDishThreeIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowTwoDishThreeInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src={rowTwoDishFourImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishFourName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowTwoDishFourIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowTwoDishFourInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>

        </div>
        {/* row three */}
        <div className='row-three'>
          <h3>Seafood</h3>
          <div className='card'>
            <img src={rowThreeDishOneImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishOneName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowThreeDishOneIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowThreeDishOneInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src={rowThreeDishTwoImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishTwoName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowThreeDishTwoIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowThreeDishTwoInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src={rowThreeDishThreeImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishThreeName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowThreeDishThreeIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowThreeDishThreeInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src={rowThreeDishFourImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishFourName}</b></h4>
              <p>Ingredients:</p>
              <ul>
              {rowThreeDishFourIngredients?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>

              <ol>
              {rowThreeDishFourInstructions?.map((item)=> {
                  return(
                    <li>{item}</li>
                  )
                  })}
                  </ol>

            </div>
          </div>

        </div>
        
      <Footer />
    </>
  );
}

export default Home;

const userLogin = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    
    const handleLogin = () => {
      setLoggedIn(true);
    };
    
    const handleLogout = () => {
      setLoggedIn(false);
    };
    
    return (
      <Router>
        <div>
          <h1>Culinary Masters</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              )}
            </ul>
          </nav>
  
          <hr />
  
          <Route
            exact
            path="/"
            // render={() => (isLoggedIn ? <h2>Home Content Goes Here</h2> : null)}
            />
          <Route
            path="/signup"
            // render={() => (!isLoggedIn ? <SignUpPage /> : null)}
            />
          <Route
            path="/login"
            // render={() => (!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : null)}
            />
        </div>
      </Router>
    );
  };
  
  