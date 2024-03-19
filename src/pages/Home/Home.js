import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Nav from "../../components/Header/Nav"
import Main from "../../components/Main/Main"


const Home = ({isForm}) => {
    return (
        <div>
            <Nav isForm={!isForm} />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home