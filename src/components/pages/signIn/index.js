import React from 'react'
import { Form, Button,Col,Row,Card,Container } from 'react-bootstrap'
import { userLogin } from '../../../redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import Input from '../../ui/input'
import { Redirect, useHistory, useLocation } from 'react-router'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.loading) {
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignIn = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  };
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(from,'k')
  if(user.authenticate){ 
      history.push(from)
  }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignIn}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>


  )
}
