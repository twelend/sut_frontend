import React from 'react'
import s from './main.module.css'
import About from './About'

const Main = () => {
  return (
    <div className={s.main + ' ' + s.section__padding}>
      <div id='about' className={s.card}>
        <div className={s.about_container}>
          <div className={s.about__text}>
            <h1>Дополнительное образование для всех</h1>
          </div>
          {/* Технический дизайн */}
          <About 
            title='Технический дизайн' 
            text='Работа с фанерой, бумагой, электрификация. Изучение изобразительных техник: papercraft, нитяная графика, декупаж старинных изделий и многое другое' 
            img='../../../assets/rechdesign.jpg' />

          {/* робототехника */}
          <About 
            reverse={true}
            title='Робототехника 4+' 
            text="Lego wedo 1.0, 2.0, Lego Spike Prime, Ev 3" 
            img='../../../assets/lego.jpg' />

          {/* Начальное техническое моделирование */}
          <About 
            title='Начальное техническое моделирование' 
            text='Работа с фанерой, бумагой, фоамираном, конструктором Сuboro' 
            img='../../../assets/pilit.jpg' />
          
          {/* Программирование */}
          <About 
            reverse={true}
            title='Программирование 7+' 
            text='Scratch, Kodu Game Lab, Arduino, Python, Сайтостроение - (HTML, CSS, JavaScript)' 
            img='../../../assets/progr.jpg' />
          
          {/* Основы дизайна */}
          <About 
            title='Основы дизайна' 
            text='Рисунок, декоративно-прикладное творчество' 
            img='../../../assets/design.jpg' />
          
          {/* Проектная деятельность */}
          <About 
            reverse={true}
            title='Проектная деятельность' 
            text='Робототехника и исследовательская работа' 
            img='../../../assets/techde9telnost.jpg' />
          
        </div>
      </div>
      <div id='contests' className={s.card}>
        
      </div>
      <div id='contacts' className={s.card}>
        <h1>Контакты</h1>
      </div>
    </div>
  )
}

export default Main