import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'

const ProductDetail = () => {

  let { id } = useParams()

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/noitca9704/noonaproject3/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col className='d_area2'>
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div>
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              {selectedSize ? `선택된 사이즈: ${selectedSize}` : '사이즈 선택'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item key={item} onClick={() => setSelectedSize(item)}>
                    {item}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="add_button">
          <Button variant="dark">
            추가
          </Button>
          <Button variant="dark">
            주문
          </Button>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail