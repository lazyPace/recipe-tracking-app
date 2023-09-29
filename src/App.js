import React, { useState } from 'react'
import './App.css'
import RecipeCreate from './RecipeCreate'
import RecipeList from './RecipeList'
import RecipeData from './RecipeData'
import RecipeView from './RecipeView'

function App () {
  const [recipes, setRecipes] = useState(RecipeData)
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    rating: '',
    ingredients: '',
    preparation: ''
  })
  const [photo, setPhoto] = useState('')
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const deleteRecipe = indexToDelete =>
    setRecipes(currentRecipes =>
      currentRecipes.filter((recipe, index) => index != indexToDelete)
    )

  return (
    <div className='App'>
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        formData={formData}
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate
        formData={formData}
        setFormData={setFormData}
        setRecipes={setRecipes}
        photo={photo}
        setPhoto={setPhoto}
      />
    </div>
  )
}

export default App
