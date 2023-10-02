import './collapse.scss'
import arrow from '../../assets/arrow.png'
import React, { useState } from 'react';


export default function Collapse({content, title}) {
    const [open, setOpen] = useState(false)
    const toggleCollapse = () => {
        setOpen(!open)
    }
    return (
        <div className={`collapse ${open ? 'open' : ''}`}>
            <h3 className='collapse_title' onClick={toggleCollapse}>
                {title}
            <img className={`arrow ${open ? 'open' : ''}`} src={arrow} alt="flèche" />
            </h3>
            <div className={`collapse_content ${open ? 'open' : ''}`}>
            {Array.isArray(content) ? ( // show equipments by list
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    content
                )}
            </div>
        </div>
    );
}