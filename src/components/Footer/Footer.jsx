import React from 'react'
import s from './footer.module.css'

const Footer = () => {
  return (
    <div className={s.footer + ' ' + s.section__padding}>
      <div className={s.footer_container}>
        <div className={s.footer_map}>
          <h2>Адрес:</h2>
          <div className={s.map}>
            <div className={s.footer_map_link}>
              <a href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps">Ижевск </a>
              <a href="https://yandex.ru/maps/44/izhevsk/house/ulitsa_40_let_pobedy_62/YUoYdA9jQUIAQFtsfXR0cH1hYg==/?ll=53.284509%2C56.851127&utm_medium=mapframe&utm_source=maps&z=17.86">Улица 40 лет Победы, 62</a>
            </div>
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?ll=53.284509%2C56.851127&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjIxMTY5NxJs0KDQvtGB0YHQuNGPLCDQo9C00LzRg9GA0YLRgdC60LDRjyDQoNC10YHQv9GD0LHQu9C40LrQsCwg0JjQttC10LLRgdC6LCDRg9C70LjRhtCwIDQwINC70LXRgiDQn9C-0LHQtdC00YssIDYyIgoNsiJVQhWOZ2NC&z=17.86" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe></div>
          </div>
        <div>
          <div className={s.footer_links}>
            <ul className={s.footer_list}>
              <li><h2>Связь:</h2></li>
              <li><a href="tel:+73412776165">Администрация: <span className='tel'>77-61-65</span></a></li>
              <li><a href="tel:+73412776162">Директор: <span className='tel'>+7 (3412) 77-61-62</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer