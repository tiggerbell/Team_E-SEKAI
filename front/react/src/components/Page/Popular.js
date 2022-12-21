import React, {useEffect, useState} from 'react'
import axios from 'axios'



const Popular = (props) =>{

    useEffect(()=>{
        axios.get('/')
    })
    return(
        <>

        <Text>nft들</Text>
        <Text></Text>

        </>
    )
}