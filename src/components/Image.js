import React from 'react'

function Image(props){

    return <img src={props.source} width={props.width || 'auto'} height={props.height || 'auto'} alt={props.alt} />

}

export default Image;