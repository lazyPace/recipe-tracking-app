import React, { useState } from 'react'
import RecipeData from './RecipeData'

function RecipeView ({ recipes }) {
  return (
    <>
      {recipes.map((recipe, index) => (
        <tr key={index}>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td>
            <img alt={recipe.photo} src={recipe.photo} />
          </td>
          <td className='content_td'>
            <p>{recipe.ingredients}</p>
          </td>
          <td className='content_id'>
            <p>{recipe.preparation}</p>
          </td>
        </tr>
      ))}
    </>
  )
}

export default RecipeView
