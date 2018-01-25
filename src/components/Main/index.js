import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Filter from './Filter'
import List from './List'
import Photo from './Photo'

import './Main.css'

const Main = () => (
  <section className='cocktails'>
    <Container fluid>
      <Row>
        <Col xs='12' sm='5' md='5' lg='3'>
          <Filter />
        </Col>
        <Col xs='12' sm='7' md='7' lg='5'>
          <List />
        </Col>
        <Col xs='12' sm='12' md='12' lg='4' className='pr-0'>
          <Photo />
        </Col>
      </Row>
    </Container>
  </section>
)

export default Main
