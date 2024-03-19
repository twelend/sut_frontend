import React, { useState } from 'react'
import Nav from '../../components/Header/Nav'
import s from './form.module.css'
import header from '../../components/Header/header.module.css'
import axios from 'axios'

const Form = ({ isForm }) => {
    const PORT = 4257

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [parentName, setParentName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [spetification, setSpetification] = useState('')

    const [phoneError, setPhoneError] = useState('Поле обязательно для заполнения')

    const pattern = /\D/g;

    const sendMail = () => {
        axios.get(`http://localhost:${PORT}/sendForm`, {
            params: {
                phone,
                email,
                name,
                parentName,
                date,
                time
            }
        }).then((response) => {
            console.log(`Seccess\n${response.data.message}`)
        }).catch((err) => {
            console.warn(`Error: ${err}`)
        })
        console.log(`Phone: ${phone}\nEmail: ${email}\nName: ${name}\nParentName: ${parentName}\nDate: ${date}\nTime: ${time}`)
    }

    const handleClick = async () => {
        try {
          await fetch(`http://localhost:${PORT}/createrequest`, {
            method: 'POST',
            body: JSON.stringify({ parentName, name, date, phone, email, time }),
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => {
            if (res.ok) {
                sendMail()
                alert('Заявка успешно отправлена!')
                setPhone('')
                setEmail('')
                setName('')
                setParentName('')
                setDate('')
                setTime('')
            }
          }).catch((err) => {
            console.warn(err)
          });
        } 
        catch (error) {
          console.warn(error)
        } 
    }  
    
    const handleChangePhone = (e) => {
        let inputNumbersValue = onPhoneInput(e)
        setPhone(inputNumbersValue)

        if (!inputNumbersValue) {
            setPhone('')
            setPhoneError('Поле обязательно для заполнения')
            return
        }

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] === '9') inputNumbersValue = '+' + inputNumbersValue
            let firstSymbols = (inputNumbersValue[0] === '8') ? '+7' : '+7'
            let formattedInputValue = firstSymbols + ' '
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
            }
            setPhone(formattedInputValue)
        }

        function onPhoneInput (e) {
            return e.target.value.replace(pattern, '')
        }

        let regV = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,15}(\s*)?$/;
        !regV.test(e.target.value) ? setPhoneError('Некорректный номер') : setPhoneError('')
        onPhoneInput(e)
    }

    return (
        <div className={s.wrapper}>
            <Nav isForm={isForm} />
            <div className={s.container + ' ' + s.section__padding}>
                <div className={s.form__block}>
                    <div className={s.title}>
                        <div className={header.line}></div>
                        <h1>Заполните форму</h1>
                    </div>
                    <div className={s.form}>
                        <form>
                            <div className={s.form__item}>
                                <h5>Введите ФИО ребенка</h5>
                                <input
                                    type="text"
                                    placeholder="ФИО Ребенка"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className={s.form__item}>
                                <h5>Введите ФИО представителя</h5>
                                <input
                                    type="text"
                                    placeholder="ФИО Родителя"
                                    value={parentName}
                                    onChange={e => setParentName(e.target.value)}
                                />
                            </div>
                            <div className={s.form__item}>
                                <h5>Введите номер телефона</h5>
                                <input
                                    name='phone'
                                    type="tel"
                                    placeholder="+7 (999) 999-99-99"
                                    value={phone}
                                    onChange={e => handleChangePhone(e)}
                                />
                                {
                                    phoneError && <span className={s.error}>{phoneError}</span>
                                }
                            </div>
                            <div className={s.form__item}>
                                <h5>Введите Email</h5>
                                <input
                                    type="email"
                                    placeholder="example@example.ru"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={s.form__item}>
                                <h5>Введите дату рождения ребенка</h5>
                                <input
                                    type="date"
                                    placeholder="01.01.2010"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div className={s.form__item}>
                                <h5>Выберите напрваление</h5>
                                <select onChange={e => setSpetification(e.target.value)} value={spetification}>
                                    <option value='' disabled selected>
                                        --Выберите Направление--
                                    </option>
                                    <option value={'Робототехника 4+'}>
                                        Робототехника 4+
                                    </option>
                                    <option value={'Программирование 7+'}>
                                        Программирование 7+
                                    </option>
                                    <option value={'Программирование 8+'}>
                                        Программирование 8+
                                    </option>
                                    <option value={'Технический дизайн'}>
                                        Технический дизайн  
                                    </option>
                                    <option value={'Начальное техническое моделирование'}>
                                        Начальное техническое моделирование
                                    </option>
                                    <option value={'Основы дизайна'}>
                                        Основы дизайна
                                    </option>
                                    <option value={'Проектная деятельность'}>
                                        Проектная деятельность
                                    </option>
                                </select>
                            </div>
                            <div className={s.form__item}>
                                <h5>Выберите половину дня</h5>
                                <select onChange={e => setTime(e.target.value)} value={time}>
                                    <option value='' disabled selected>
                                        --Выберите время--
                                    </option>
                                    <option value={'Утреннее'}>
                                        Дневное
                                    </option>
                                    <option value={'Вечернее'}>
                                        Вечернее
                                    </option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={!name || !parentName || !email || !phone || !spetification ? s.disable : s.send__btn}>
                    <button onClick={handleClick} disabled={ !name || !parentName || !email || !phone || !spetification}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Form