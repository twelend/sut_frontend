import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Drop from "../../components/Header/Drop"
import Header from "../../components/Header/Header"
import Nav from "../../components/Header/Nav"
import Main from "../../components/Main/Main"


const Home = ({isForm}) => {
    const [dropActive, setDropActive] = useState(false)
    const items = [{title: "Главная", url: "/"}, {title: "О нас", url: "#about"}, {title: "Контакты", url: "#contact"}, {title: "Отправить заявку", url: "/form"}]
    return (
        <div>
            <Nav isForm={!isForm} setActive={setDropActive} active={dropActive}/>
            <Header />
            <Drop active={dropActive} setActive={setDropActive} header={"СЮТ - Навигация"} items={items}/>
            <Main />
            <Footer />
        </div>
    )
}

export default Home