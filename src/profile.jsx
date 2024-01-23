import React from 'react';
import './Profile.css'; // Import the external CSS file

function Profile() {
  return (
    <>
      <div className='profile-header'>
        <h1>Culinary Masters</h1>
        <div className='profile-pic'>
        <img src="https://picsum.photos/200" alt="Dish" style={{ width: '10%' }} />
        <h2 className='user'>username</h2>
        </div>
        <div></div>
        <button className='create-btn'>Create Recipe</button>
            <a href=''>Home</a>
        </div>


        <div className='recipie-div'>
          
            <img src="https://picsum.photos/200" alt="Dish" style={{ width: '20%', height: "70%" }} />
            <div>
                <h3>Recipie Title</h3>
                <p>Quisque et nisl nec ante euismod viverra faucibus vitae neque. Etiam eget tincidunt lorem. Nulla facilisi. Quisque laoreet a mi at egestas. Mauris eleifend eu odio ut ultrices. Integer tincidunt vestibulum neque vitae congue. Donec sit amet odio eget mauris tincidunt porta non vitae nibh.</p></div>
            <div className='btns'>
                <button className='edit-btn'>Edit</button>
                <button className='del-btn'>Delete</button>
            </div>
          </div>
        
    </>
  );
}

export default Profile;