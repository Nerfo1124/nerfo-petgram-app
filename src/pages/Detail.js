import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../hooks/detailPhoto'

export const Detail = () => {
  return (
    <PhotoCardWithQuery id={useParams().detailId} />
  )
}
