import React from 'react'
import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = () => {
//   const { id } = props.match.params
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
