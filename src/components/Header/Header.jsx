import React from 'react'
import s from './header.module.css'

const Header = () => {
  return (
    <div id='home'>
      {/* header main  */}
      <main className={s.main}>
        <section className={s.intro}>

          {/* header follow  */}
          <div className={s.contacts + ' ' + s.section__padding}>
            <div className={s.item}>

              <ul>
                <li className={s.rotate}>
                  following us
                </li>
                <li className={s.fab__link}><a href="https://vk.com/sut18"><img src="../../../assets/vk.svg" className={s.fab} alt='VK' /></a></li>
              </ul>
            </div>
          </div>

          {/* header content  */}
          <div className={s.item__content}>
            <div className={s.content__container}>
              <div className={s.linetext}>
                <div className={s.line}></div>
                <div className={s.title__text}>
                  <span>Станция Юных Техников</span>
                </div>
              </div>
              <div className={s.content__text}>
                <h1><span>Раскрой</span><br />свой талант</h1>
              </div>
            </div>
          </div>

          {/* header scroll down */}

          <div className={s.scroll_button}>
            <div className={s.scroll__link}>
              <a href="#about">Узнать больше</a>
            </div>
          </div>

          {/* Header Shadow */}
          <div className={s.header__shadow}>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Header