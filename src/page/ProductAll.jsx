import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = 'http://localhost:5000/products'
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Container>
        <Row className="g-4">
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