import React from 'react'

export const Button = (props) => {
    const {childern}=props;
    console.log(childern)
  return (
    <div>
      <button>{childern}</button>
    </div>
  )
}


