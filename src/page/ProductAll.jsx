import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = 'https://my-json-server.typicode.com/noitca9704/noonaproject3/products'
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="carc_cont">
      <Container>
        <Row className="g-4 justify-content-center">
          {productList.map((menu) => (
            <Col key={menu.id} lg={3} md={4} sm={6} xs={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll