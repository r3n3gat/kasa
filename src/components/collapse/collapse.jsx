import './collapse.scss'
import arrow from '../../assets/arrow.png'
import React, { useState } from 'react';


export default function Collapse({data}) {
    const [open, setOpen] = useState(false)
    const toggleCollapse = () => {
        setOpen(!open)
    }
    return (
        <div className={`collapse ${open ? 'open' : ''}`} onClick={toggleCollapse}>
            <h3 className='collapse_title'>{data.title}
            <img className='arrow' src={arrow} alt="flèche"/></h3>

            {open && <div className='collapse_content'>{data.content}</div>}
        </div>
    );
}