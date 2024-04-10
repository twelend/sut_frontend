import React from 'react'
import s from './header.module.css'
import { Link } from 'react-router-dom'

const Nav = ({ isForm, setActive, active }) => {
  return (
    <div>
      <header className={s.header + ' ' + s.section__padding}>
        <div className={s.header__container}>
          <div className={s.header__logo}>
            <a href="#home">
              <Link to="/">
                <img src="../../../assets/logo.png" alt="" className="logo" />
              </Link>
            </a>
          </div>
          {/* Menu */}

          {
            isForm ?
              <>
                <div className={s.header__menu}>
                  <div className={s.menu__item}>
                    <a className={s.links} href="#contacts">Контакты</a>
                  </div>
                  <div className={s.menu__item}>
                    <a className={s.links} href="#contests">Конкурсы</a>
                  </div>
                  <div className={s.menu__item}>
                    <a className={s.links} href="#about">О нас</a>
                  </div>
                </div>
                {/* Button */}
                <div className={s.header__button}>
                  <button><Link to="/form">Отправить заявку</Link></button>
                </div>
                <div className={s.burger_menu} onClick={() => setActive(!active)}>
                  <span />
                </div>
              </>
              : null
          }
        </div>
      </header>
    </div>
  )
}

export default Nav