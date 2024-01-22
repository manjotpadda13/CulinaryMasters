import React from 'react';

const profilePage = () => {
  return (
    <div>
      <h1> Culinary Master </h1>
      <div className='card'>
            <img src=""style={{ width: '100%' }} />
            <div className="container">
              <p>BIO picture</p>
            </div>
          </div>

          <div className='BIO'>
          <div className="container">
         <p>Username</p>
            </div>
          </div>


<label for = "recipe">
  Enter Your Recipe Here 
</label>
<textarea id="recipe" name="recipe"
rows="4" cols="50">
  Enter Text Here ...
</textarea>
<input type="submit" value="submit"></input>

<div className='card'>
            <img src="" alt="recipe" />
            <div className="container">
              <h4><b>Recipe One</b></h4>
              <p> </p>
              <div class="box">Ingredients</div>
              <button type="button">edit</button>
              <button type="button">delete</button>
            </div>
          </div>

          <div className='card'>
            <img src="" alt="recipe" />
            <div className="container">
              <h4><b>Recipe two</b></h4>
              <p> </p>
              <div class="box">Ingredients</div>
              <button type="button">edit</button>
              <button type="button">delete</button>
            </div>
          </div>

          <div className='card'>
            <img src="" alt="recipe" />
            <div className="container">
              <h4><b>Recipe three</b></h4>
              <p> </p>
              <div class="box">Ingredients</div>
              <button type="button">edit</button>
              <button type="button">delete</button>
            </div>
          </div>
           </div>
  );
};

export default profilePage;

