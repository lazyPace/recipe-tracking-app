import React, { useState } from 'react'
import './RecipeCreate.css'

function RecipeCreate ({ formData, setFormData, postRecipe }) {
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

  const [name, setName] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [photo, setPhoto] = useState('')
  const [rating, setRating] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [preparation, setPreparation] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(value)
  }

  const saveRecipe = e => {
    e.preventDefault()
    postRecipe(formData)
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
                onChange={handleChange}
                value={formData.photo}
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
