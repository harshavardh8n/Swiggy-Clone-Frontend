import React,{useState} from 'react'
import logo from "../img/swiggylogo.png" 
import "./Navbar.css"
function Navbar() {

  const [toggle,settoggle]=useState(false);

  const showslider=()=>{
    settoggle(true);
  }

  return (
  <>
  <div className="blacko" style={{opacity: toggle?1:0}}>
    </div>

    <div id="Navbar">
    <div className="centernav">
        <div className="logospace">
            <img src={logo} alt="" id="logo" />
            <div className="other navbox">
                <div id='other1' style={{"cursor":"pointer"}}>Other</div>
                
            </div>



        </div>
        <i class="fa fa-chevron-down navbox" aria-hidden="true" id="v"></i>
        <div className="searchbox navbox">
        <i class="fa fa-search" aria-hidden="true"></i>
            <div className="search">
                Search
            </div>

        </div>
        <div className="offerbox navbox">
        <i class="fa fa-cog" aria-hidden="true"></i>
            <div className="search">
                Offers
            </div>

        </div>
        <div className="Helpbox navbox">
        <i class="fa fa-yelp" aria-hidden="true"></i>

            <div className="search">
                Help
            </div>

        </div>
        <div className="signinbox navbox">
        <i class="fa fa-user" aria-hidden="true"></i>

            <div className="search">
                Sign In
     
            </div>

        </div>
        <div className="Helpbox navbox">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>

            <div className="search">
                Cart
            </div>

        </div>
    </div>
        </div>
  </>
  )
}

export default Navbar