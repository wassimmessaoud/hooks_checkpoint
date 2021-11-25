import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({movieList, match}) => {
    return (
       
       <div className='test1'> <p>description:</p>
{movieList.map(el=> (el.id == match.params.id)?<div className='test2'>
   <p>{el.description}</p>
    <div className='trailer'>{el.trailerSrc}</div>
   <Link to='/'>
   <button>return to home page</button>
   </Link>
</div> :null )}
       </div>
    )
}

export default Details