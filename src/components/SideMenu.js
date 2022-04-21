import React from 'react'

const SideMenu = ({ loadCategory }) => {
    const links = ['Oranges', 'Mangues', 'Goyaves', 'Ananas', 'Citrons']
    return (
        <div className='col-sm-2 sidebar'>
            <ul>
                {links.map((link, index) => {
                    return (<li key={index} onClick={()=>loadCategory(index)}>{link}</li>)
                })}
            </ul>
        </div>
    )
}

export default SideMenu