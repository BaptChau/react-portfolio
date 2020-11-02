import React from 'react';
import Hero from '../components/Hero';
function AboutPage(props){
    let prop = props.info
    return <Hero info= {prop}/>
}

export default AboutPage;