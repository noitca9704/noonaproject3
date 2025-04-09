import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); // foam 사용시 새로고침 방지
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="이메일 아이디" />
          <Form.Text className="text-muted">
            이메일 형식의 아이디를 입력해주세요.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login