import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelCard from '../components/cards/HotelCard';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Container>
        <Row>
            {
                [...Array(8)].map((hotel, index) => {
                    return (
                        <Col md={3} key={index}>
                            <Link to={`/hotels/${index}`} className='text-decoration-none text-dark'>
                                <HotelCard />
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}

export default Home