import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useConsultPhotos } from '../../hooks/useConsultPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useConsultPhotos(categoryId)
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
