import React, {useState} from 'react';
import CV from '../assets/baptiste_cv-1.png';
import Image from '../components/Image';

function CVShow(){

  return(
    <div className="text-center">
    <Image source={CV} alt={"CV Baptiste Chaudron"} 
          width="1024"
    />
    </div>
  )
}

export default CVShow;