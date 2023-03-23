import React from 'react'
import './SearchBox.css'

function SearchBox({onSearch}){
    return(
        <div className='pa2 tc center'>
        <input type='search' onChange = {onSearch} placeholder='search robots'  className='db bg-lightest-blue pa3 ba b-green'/>
        </div>
    )
}

export default SearchBox