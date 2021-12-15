import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {

const {title,urlToImage}=props.news;

    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default News;