
import classes from './Navpar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Navpar () {
    const [searchTerm , setSearchTerm] = useState('')
    const navigate = useNavigate()
    const submitSearchHandler = (e) => {
        e.preventDefault()
        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }

    return (
        
        <header className={classes.header}>
            <div className='container'>
                <nav className={classes.nav}>
                    <Link to='/'>
                        <img src='https://i.ibb.co/s9Qys2j/logo.png' alt='Logo' />
                    </Link>
                        <form className={classes.search} onSubmit={submitSearchHandler}>
                            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }  placeholder='Search...' />
                            <SearchIcon />                            
                        </form>
                </nav>                         
            </div>    
        </header>
    )
}
export default Navpar