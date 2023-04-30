import React, { useEffect, useState } from 'react'
import classes from './Feed.module.css'
import {SidePar, Vidios} from './index'
import {FetchFromApi} from './Fetching/FetchFromApi'

function Feed() {
    const [selectedCategory , setSelectedCategory] = useState('Home')
    const [vidios , setVidios] = useState([])
    useEffect(()=>{
        FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
            setVidios(data.data.items)
        })
    },[selectedCategory])
    return (
        <div className={classes.content}>
            <SidePar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <h1>{selectedCategory} <span>Vidios</span> </h1>
            <Vidios Vidios={vidios} />
        </div>
    )
}

export default Feed