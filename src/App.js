import React, { useState } from 'react'
import './App.css'
import RecipeCreate from './RecipeCreate'
import RecipeList from './RecipeList'
import RecipeData from './RecipeData'

function App () {
  const [recipes, setRecipes] = useState(RecipeData)
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    rating: '',
    ingredients: '',
    preparation: ''
  })
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const postRecipe = newRecipe =>
    setRecipes(currentRecipes => [newRecipe, ...currentRecipes])

  return (
    <div className='App'>
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList formData={formData} />
      <RecipeCreate
        formData={formData}
        setFormData={setFormData}
        postRecipe={postRecipe}
      />
    </div>
  )
}

export default App
