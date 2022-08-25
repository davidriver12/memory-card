import React, {useState} from 'react';
import axe from '../images/axe.png';
import broadsword from '../images/broadsword.png';
import claymore from '../images/claymore.png';
import crossbow from '../images/crossbow.png';
import dagger from '../images/dagger.png';
import greatsword from '../images/greatsword.png';
import longbow from '../images/longbow.png';
import longsword from '../images/longsword.png';
import shortbow from '../images/shortbow.png';
import shortsword from '../images/shortsword.png';
import starscourge from '../images/starscourge.png';
import zweihander from '../images/zweihander.png';
import '../styles/Card.css';

export default function Card(props){

    const images = {
        axe,
        broadsword,
        claymore,
        crossbow,
        dagger,
        greatsword,
        longbow,
        longsword,
        shortbow,
        shortsword,
        starscourge,
        zweihander
    }

    return(
        <div className='card' onClick={props.handler}>
            <img src={images[props.weapon]} alt={props.weapon}></img>
            <p>{props.weapon}</p>
        </div>
    );
};