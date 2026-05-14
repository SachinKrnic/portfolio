import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Project/skills";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Connect from "./components/Connect/connect";


function App(){
    return(
        <div className="App">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Education/>
            <Contact/>
            <Connect/>
            <Footer/>
        </div>
    )
}
export default App;