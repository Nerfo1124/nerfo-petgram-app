import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <li>
      {[1, 2, 3, 4, 5, 6, 7].map(id => <PhotoCard key='id' />)}
    </li>
  )
}
