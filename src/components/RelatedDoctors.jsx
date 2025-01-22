import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({sspeciality,docId}) => {

    const {doctor} = useContext(AppContext)
    
    const [relDoc,setRelDocs] = useState([])

    useEffect (()=>{
        
    })


  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
