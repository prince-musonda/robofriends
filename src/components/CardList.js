import React from 'react'
import { Card } from './Card'

const CardList = (props) =>{
    const cardsArray = props.robots.map((user,index) => {
        return(
                <Card id={props.robots[index].id} key = {props.robots[index].id} name={props.robots[index].name} email={props.robots[index].email}/>
                );
    })

    return(
        cardsArray
    )
}

export default CardList