import React from 'react';
import Image from './Image.png';
function Splash() {
    return (
        <>
        <h1 className="mt-3">Welcome to Discount Tackle!</h1>
        <img style={{position:'relative', left:'15vw', top:'8vh', width: "70vw", height: '65vh'}} src={Image} alt={"Logo"}></img>
        </>
    )
}

export default Splash;