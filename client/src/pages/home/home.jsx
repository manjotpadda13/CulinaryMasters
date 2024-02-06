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
        // console.log(res.data);
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

        console.log(res.data.meals[0].strMeal);
        console.log(res.data.meals[1].strMeal);
        console.log(res.data.meals[2].strMeal);
        console.log(dishOneImage)
        // mealOnetitle = (res.data.meals[0].strMeal);
        // Loop all keys
        // setApiData(res.data);
        // var keys =Object.keys(res.data.meals[0])
        // console.log(keys)

        setApiData(res.data);

// Assuming res.data.meals[0] exists
if (res.data.meals[0]) {
  var meal = res.data.meals[0];
  var keys = Object.keys(meal);

  // Filter keys that start with "strIngredient"
  var strIngredientKeys = keys.filter(key => key.startsWith('strIngredient'));

  // Get the ul element to append li elements
  var ulElement = document.querySelector('.ingredientOneList');

  // Loop over strIngredientKeys and append li elements to the ul
  strIngredientKeys.forEach(strIngredientKey => {
    var mealIngredient = meal[strIngredientKey];
    
    // Check if the ingredient exists before appending
    if (mealIngredient) {
      var liElement = document.createElement('li');
      liElement.textContent = mealIngredient;
      ulElement.appendChild(liElement);
    }
  });
} else {
  console.error('No meal data available in res.data.meals[0]');
}
// Ingredient Meal Two
if (res.data.meals[1]) {
  var meal = res.data.meals[1];
  var keys = Object.keys(meal);

  // Filter keys that start with "strIngredient"
  var strIngredientKeysTwo = keys.filter(key => key.startsWith('strIngredient'));

  // Get the ul element to append li elements
  var ulElementTwo = document.querySelector('.ingredientTwoList');

  // Loop over strIngredientKeys and append li elements to the ul
  strIngredientKeysTwo.forEach(strIngredientKey => {
    var mealIngredient = meal[strIngredientKey];
    
    // Check if the ingredient exists before appending
    if (mealIngredient) {
      var liElementTwo = document.createElement('li');
      liElementTwo.textContent = mealIngredient;
      ulElementTwo.appendChild(liElementTwo);
    }
  });
} else {
  console.error('No meal data available in res.data.meals[1]');
}
// Ingredient meal Three
if (res.data.meals[2]) {
  var meal = res.data.meals[2];
  var keys = Object.keys(meal);

  // Filter keys that start with "strIngredient"
  var strIngredientKeysThree = keys.filter(key => key.startsWith('strIngredient'));

  // Get the ul element to append li elements
  var ulElementThree = document.querySelector('.ingredientThreeList');

  // Loop over strIngredientKeys and append li elements to the ul
  strIngredientKeysThree.forEach(strIngredientKey => {
    var mealIngredient = meal[strIngredientKey];
    
    // Check if the ingredient exists before appending
    if (mealIngredient) {
      var liElementThree = document.createElement('li');
      liElementThree.textContent = mealIngredient;
      ulElementThree.appendChild(liElementThree);
    }
  });
} else {
  console.error('No meal data available in res.data.meals[2]');
}


// Ingredient meal Four
if (res.data.meals[2]) {
  var meal = res.data.meals[2];
  var keys = Object.keys(meal);

  // Filter keys that start with "strIngredient"
  var strIngredientKeysFour = keys.filter(key => key.startsWith('strIngredient'));

  // Get the ul element to append li elements
  var ulElementFour = document.querySelector('.ingredientFourList');

  // Loop over strIngredientKeys and append li elements to the ul
  strIngredientKeysFour.forEach(strIngredientKey => {
    var mealIngredient = meal[strIngredientKey];
    
    // Check if the ingredient exists before appending
    if (mealIngredient) {
      var liElementFour = document.createElement('li');
      liElementFour.textContent = mealIngredient;
      ulElementFour.appendChild(liElementFour);
    }
  });
} else {
  console.error('No meal data available in res.data.meals[2]');
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
    setrowTwoDishTwoName(res.data.meals[6].strMeal)
    setrowTwoDishThreeName(res.data.meals[10].strMeal)
    setrowTwoDishFourName(res.data.meals[20].strMeal)
    // Update rowTwoDishOneImage
    setrowTwoDishOneImage(res.data.meals[4].strMealThumb);
    setrowTwoDishTwoImage(res.data.meals[6].strMealThumb);
    setrowTwoDishThreeImage(res.data.meals[10].strMealThumb);
    setrowTwoDishFourImage(res.data.meals[20].strMealThumb);
  })
  .catch((error) => {
    // Log any errors
    console.error('Error fetching data:', error);
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
    console.log(seafoodMeals);

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




  
  return (
    <>
         
        <Header />

        <a href=''>Profile</a>
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
          <h3>Healthy</h3>
          <div className='card'>
            <img src={dishOneImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{dishOneName}</b></h4>
              <p>Ingredients:</p>
              <ul className='ingredientOneList'>
                
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
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src={rowTwoDishTwoImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishTwoName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src={rowTwoDishThreeImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishThreeName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src={rowTwoDishFourImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowTwoDishFourName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>

        </div>
        {/* row three */}
        <div className='row-three'>
          <h3>Seadfood</h3>
          <div className='card'>
            <img src={rowThreeDishOneImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishOneName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src={rowThreeDishTwoImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishTwoName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src={rowThreeDishThreeImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishThreeName}</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src={rowThreeDishFourImage} alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>{rowThreeDishFourName}</b></h4>
              <p>Ingredients:</p>
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
            render={() => (isLoggedIn ? <h2>Home Content Goes Here</h2> : null)}
            />
          <Route
            path="/signup"
            render={() => (!isLoggedIn ? <SignUpPage /> : null)}
            />
          <Route
            path="/login"
            render={() => (!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : null)}
            />
        </div>
      </Router>
    );
  };
  
  