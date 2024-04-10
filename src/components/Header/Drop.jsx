import React from 'react'
import s from './header.module.css'
const Drop = ({header, items, active, setActive}) => {
  return (
    <div className={active ? s.drop + ' ' + s.active : s.drop} onClick={() => setActive(!active)}>
        <div className={s.blur}/>

        <div className={s.drop_content} onClick={(e) => e.stopPropagation()}>
            <div className={s.drop_header}>
                <h2>{header}</h2>
            </div>
            <div className={s.drop_body}>
                <ul>
                    {
                        items.map((item, index) => 
                            <li key={index}>
                                <a href={item.url}>{item.title}</a>
                            </li>    
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Drop