import React from 'react';
import Hero from '../components/Hero';

function HomePage(props){
let prop = props.info
return <Hero info= {prop}/>
}

export default HomePage;