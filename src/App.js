import React, { Fragment } from 'react'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './hooks/detailPhoto'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </Fragment>
      }
    </div>
  )
}
