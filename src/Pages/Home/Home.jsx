import React, {useState} from 'react'
import Hero from '../../Components/Hero/Hero'
import Champs from '../../Components/Champs/Champs'
import Pod from '../../Components/Pod/Pod'
import Sweet from '../../Components/Sweet/Sweet'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import SideDrawer from  '../../Components/SideDrawer/SideDrawer'
import MainContext from '../../context'
import './Home.css'

let Home = () => {
    let [drawerOpen, setDrawerOpen] = useState(false)

    let drawerClickHandler = (drawerOpenValue) => {
      setDrawerOpen(drawerOpenValue)
    } 

    const MainInfo = React.useContext(MainContext) //{lang: .., setLang, user_info: {name..,token..}, setuser_info..}
    console.log('home rendered')
    
    
    return(
        <React.Fragment>
            < Navbar drawerClickHandler={drawerClickHandler} MainInfo={MainInfo}/>
            {drawerOpen && < SideDrawer drawerClickHandler={drawerClickHandler} />}    
            <div className='main-section'>  
                < Hero MainInfo={MainInfo}/>
            </div>
            <Champs MainInfo={MainInfo}/>
            <Pod MainInfo={MainInfo}/>
            <Sweet MainInfo={MainInfo}/>
            <Footer MainInfo={MainInfo}/>
        </React.Fragment>    
        )
    }



export default Home




