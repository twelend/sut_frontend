import React from 'react'
import s from './main.module.css'

const About = ({title, img, text, reverse}) => {
  return (
    <div>
        {
            reverse ? (
            <div className={s.about_item_container_reversed + ' ' + s.reverse}>
                <div className={s.about_img}>
                  <img src={img} alt="png" />
                </div>
                <div className={s.about_title}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
                <hr id='reversed' />
                <a id='reversed_link' href="/form">Подать заявку</a>
            </div>
            ) : 
            <div className={s.about_item_container_default}>
                <div className={s.about_img}>
                <img src={img} alt="png" />
                </div>
                <div className={s.about_title}>
                <h2>{title}</h2>
                <p>{text}</p>
                </div>
                <hr id='default'/>
                <a id ='default_link' href="/form">Подать заявку</a>
            </div>
        }
    </div>
  )
}

export default About