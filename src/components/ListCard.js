import React from 'react'
import Card from './Card'

const ListCard = props => {
    const {data, category} = props
    const fruits = data[category]
    return (
        <div className='col-sm'>
            <div className='row'>
                {fruits.map(fruit => <Card key={fruit.ref} fruit={fruit} />)}

            </div>
        </div>
    )
}
export default ListCard