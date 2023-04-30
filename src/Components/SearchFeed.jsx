import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchFromApi from './Fetching/FetchFromApi'
import Vidios from './Vidios/Vidios'
import classes from './SearchFeed.module.css'
function SearchFeed() {

    const {searchTerm}  = useParams()
    const [vidios , setVidios] = useState([])
    useEffect(()=>{
        FetchFromApi(`search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`).then((data)=>{
            setVidios(data.data.items)
        })
    }, [searchTerm])
    return (
        <div>  
            <h2 style={{color: 'white' , textAlign: 'center' , display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
                Search Results for: 
                <p style={{color: 'red' }}> &nbsp; {searchTerm} <span style={{color: 'white'}}>Vidios</span> 
                </p>
                </h2>
                <div className={classes.vidios}>
                    <Vidios Vidios={vidios} />
                </div>
                
        </div>
    )
}

export default SearchFeed