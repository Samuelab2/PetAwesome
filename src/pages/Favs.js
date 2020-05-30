import React from 'react'
import { FavsWithQuery } from '../container/GetFavorite'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='PetAwesome - Favorites photos' subtitle='Here are your most liked photos'>
    <FavsWithQuery />
  </Layout>
)