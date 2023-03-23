import React from 'react'

export const Card = ({name,id,email})=>{
    return(
        <div className= 'tc bg-dark-blue silver dib ma3 pa3 grow br4 shadow-5 bodoni'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

