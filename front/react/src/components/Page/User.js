import React, {useEffect, useState} from 'react'
import axios from 'axios'



const User = (props) =>{

    useEffect(()=>{
        axios.get('/')
    })

    return(
        <>
        <Text>{props.name}</Text>
        </>
    )
}