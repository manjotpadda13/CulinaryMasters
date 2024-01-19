import React from 'react';
import './Home.css'; // Import the external CSS file

function Home() {
  return (
    <>
      <div className='header-sec'>
        <h1>Culinary Masters</h1>
        <input type="text" placeholder="Search.." />
        <button className='srch-btn'>search</button>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Vegan</a>
            <a href="#">Desserts</a>
            <a href="#">Appetizers</a>
          </div>
        </div>
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
        
      
    </>
  );
}

export default Home;

const Home = () => {
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
  
  