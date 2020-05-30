import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='PetAwesome - share your pets awesome photos' subtitle='With PetAwesome you can find the best pets photos on the web'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}