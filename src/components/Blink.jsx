import React, { useEffect, useState } from 'react';

export const Blink = (props) => {

    const [hide, setHide] = useState(true);

    useEffect(()=>{
        setInterval(()=>{
            setHide(hide? false: true);
        },250);
    }, [])
   
    return(
    <div className={hide ? 'hide': ''}>{props.name}</div>
    )
}