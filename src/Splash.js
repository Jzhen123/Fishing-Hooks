import React from 'react';
import Image from './Image.png';
function Splash() {
    return (
        <img style={{position:'relative', left:'15vw', top:'8vh', width: "70vw", height: '70vh'}} src={Image} alt={"Logo"}></img>
    )
}

export default Splash;