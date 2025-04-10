import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import { useSearchParams } from 'react-router'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q")||"";
    let url = `https://my-json-server.typicode.com/noitca9704/noonaproject3/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div className="card_cont">
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