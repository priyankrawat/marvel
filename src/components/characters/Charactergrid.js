import React from 'react'
import Spinner from '../ui/Spinner'
import Characteritem from './Characteritem'

const Charactergrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />) : (
        (
            <section className='cards'>
            {items.map(item => (
                <Characteritem key={item.id} item={item}/>
                ))}
                </section>
                
        ) 
    )
}

export default Charactergrid
