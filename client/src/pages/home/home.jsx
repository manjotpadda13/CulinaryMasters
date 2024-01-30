import React, { useEffect } from 'react';
import './Home.css'; // Import the external CSS file
import Axios from "axios"
import Header from "../../components/header";
import Footer from "../../components/footer";

// Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata").then((res) => {
//   console.log(res.data);
// });

function Home() {
  
  useEffect(() => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
         
        <Header />
        <input className='srch' type="text" placeholder="Search Dish" />
        
        <input type="srch-btn" value="Search"></input>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Beef</a>
            <a href="#">Chicken</a>
            <a href="#">Vegan</a>
            <a href="#">Dessert</a>
          </div>

          <a href=''>Profile</a>

        
        </div>
        <div className='row-one'>
          <h3>Healthy</h3>
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
  
  