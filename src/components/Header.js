import React from 'react'
import '../styles/App.css'


export const Header = ({ filter, setFiltering }) => {
    return (
        <nav className='navbar orange navbar-expand-lg navbar-light bg-light'>
            <a href='' className='navbar-brand crimson'>
                <i className='fas fa-shopping-cart'> My-SHop</i>
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            onChange={(e)=> {
                                setFiltering(e.target.value.length > 0)
                                filter(e.target.value)}}
                            />
        
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>

        </nav>
    )
}

export default Header