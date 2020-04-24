import React, { Component  } from 'react';
import {Card, Button} from 'react-bootstrap';
import './Footer.css';


class Footer extends Component{
    render(){
        return(
<Card className="Card">
  <Card.Header className="cardHeader" as="h5">Designed By</Card.Header>
  <Card.Body>
    <Card.Title className="Title">Web site Designed by</Card.Title>
    <Card.Text>
     Alejandro Correa by FlyCode Barcelona Web Design. 
    </Card.Text>
    <Button variant="light">FlyCodeBcn.com</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Footer;