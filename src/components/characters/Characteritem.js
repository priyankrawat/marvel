import React from 'react'

const Characteritem = ({item}) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
          <img src={item.thumbnail.path + "/portrait_uncanny.jpg"} alt=''/>
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>{item.description}</strong> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Characteritem
