import React from 'react';
import './Profile.css'; // Import the external CSS file
import Header from "../../components/header";
import Footer from "../../components/footer";

function Profile() {
  return (
    <>

<Header />
      
      <a href='home'>Home</a>
     
  <div className='profile-pic'>
        <img src="https://picsum.photos/200" alt="Dish" style={{ width: '10%' }} />
        <h2 className='user'>username</h2>
      </div>
        <div>


        <h3 className='add'>Add your recipe here </h3>
<textarea id="recipe" name="recipe"
rows="4" cols="50">
  Enter Text Here ...
</textarea>
<button className='search'>Search</button>

       
        
        </div>
 <div className='recipie-div'>
          
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '20%', height: "70%" }} />
            <div>
                <h4>Recipe Title</h4>
                <p>Quisque et nisl nec ante euismod viverra faucibus vitae neque. Etiam eget tincidunt lorem. Nulla facilisi. Quisque laoreet a mi at egestas. Mauris eleifend eu odio ut ultrices. Integer tincidunt vestibulum neque vitae congue. Donec sit amet odio eget mauris tincidunt porta non vitae nibh.</p></div>
            <div className='btns'>
                <button className='edit-btn'>Edit</button>
                <button className='del-btn'>Delete</button>
            </div>
          </div>
          <Footer />

         
    </>
  );
}

export default Profile;