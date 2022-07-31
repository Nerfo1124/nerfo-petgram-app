import { gql, useQuery } from '@apollo/client'

const consultPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useConsultPhotos = categoryId => {
  const { loading, data, error } = useQuery(consultPhotos, { variables: { categoryId } })
  return { loading, data, error }
}
