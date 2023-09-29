import React, { useState } from 'react'
import RecipeData from './RecipeData'

function RecipeView ({ recipes, deleteRecipe }) {
  return (
    <>
      <table>
        <tbody>
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
              <td className='content_td'>
                <p>{recipe.preparation}</p>
              </td>
              <td>
                <button
                  type='button'
                  name='delete'
                  onClick={() => deleteRecipe(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default RecipeView
