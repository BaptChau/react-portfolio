import React from 'react';
import {Card} from 'react-bootstrap';
import Modals from './Modals';
function Cards(props){
    
    return [
        <Card>
            <Card.Img holder="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.children}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Modals title={props.title}> {props.more} </Modals>
            </Card.Footer>
        </Card>

    ]
}

export default Cards;