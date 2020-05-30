import React, { useState, useEffect } from 'react'
import { Category } from '../category/index'
import { List, Item } from './styles'
import Skeleton from 'react-loading-skeleton'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://petawesome-server.now.sh/categories')
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
    {
      loading
        ? [1, 2, 3, 4].map(id => <Skeleton key={id} circle={true} height={50} width={50} />)
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`}/>
          </Item>)
    }
  </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}