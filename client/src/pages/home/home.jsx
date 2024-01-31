import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the external CSS file
import Axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Home() {
  // State to manage the value of the search input
  const [searchInput, setSearchInput] = useState('');
  const [apiData, setApiData] = useState(null);// State variable to store API data
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
        console.log(res.data.meals);
        console.log(res.data.meals[0].strMeal);
        console.log(res.data.meals[1].strMeal);
        console.log(res.data.meals[2].strMeal);
        // mealOnetitle = (res.data.meals[0].strMeal);
        setApiData(res.data);
      })
      .catch((error) => {
        // Log an error message if there's an issue fetching data
        console.error("Error fetching data:", error);
      });
  };

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
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            {/* <img src="{meal.strMealThumb}" alt="Dish" style={{ width: '100%' }} /> */}
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>

        </div>
          {/* row two */}
          <div className='row-two'>
          <h3>Desserts</h3>
          <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>

        </div>
        {/* row three */}
        <div className='row-three'>
          <h3>Appetizers</h3>
          <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
          {/* card 2 */}
          <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 3 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
              <p>Ingredients:</p>
            </div>
          </div>
        {/* card 4 */}
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '100%' }} />
            <div className="container">
              <h4><b>Dish One</b></h4>
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
  
  