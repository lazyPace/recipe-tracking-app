import React, { useState } from 'react'
import './RecipeCreate.css'

function RecipeCreate ({ formData, setFormData, setRecipes, photo, setPhoto }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    rating: '',
    ingredients: '',
    preparation: ''
  }

  const photoChange = e => {
    const { value } = e.target

    setPhoto(value) // update photo URL immediately
    console.log('Photo has changed')
    console.log(value)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const saveRecipe = e => {
    e.preventDefault()
    setRecipes(currentRecipes => [
      { ...formData, photo: photo },
      ...currentRecipes
    ])

    setFormData(initialFormState)
  }

  return (
    <form name='create' onSubmit={saveRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name='name'
                id='name'
                placeholder='Name'
                onChange={handleChange}
                value={formData.name}
                required={true}
              ></input>
            </td>
            <td>
              <input
                name='cuisine'
                id='cuisine'
                placeholder='Cuisine'
                onChange={handleChange}
                value={formData.cuisine}
                required={true}
              ></input>
            </td>
            <td>
              <input
                name='photo'
                id='photo'
                placeholder='URL'
                onChange={photoChange}
                required={true}
              ></input>
            </td>
            <td>
              <textarea
                name='ingredients'
                id='ingredients'
                placeholder='Ingredients'
                onChange={handleChange}
                value={formData.ingredients}
                required={true}
              ></textarea>
            </td>
            <td>
              <textarea
                name='preparation'
                id='preparation'
                placeholder='Preparation'
                onChange={handleChange}
                value={formData.preparation}
                required={true}
              ></textarea>
            </td>
            <td>
              <button type='submit' name='create'>
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default RecipeCreate
