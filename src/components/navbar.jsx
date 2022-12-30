import React from 'react'
import "./navbar.css"
import { useState, useEffect } from 'react'
import { List } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const [loged_in_css, set_loged_in_css] = useState("log-in");
    const [loged_in, set_loged_in] = useState("log in");
    const [nav_state, set_nav_state] = useState(<List/>);
    const [state, setstate] = useState("off");

    const [nav_active, set_nav_active] = useState("navbar");
    const navigate = useNavigate();
    const [blockPage,setBlockPage] = useState(false);

    function noScroll(){
        window.scrollTo(0, 0);
    }


    function change_nav_state(){
        if(state === "off"){
            set_nav_state(<X/>);
            set_nav_active("navbar-active");
            setstate("on");
            setBlockPage(true);
            document.body.style.overflow = "hidden";
        }else{
            set_nav_state(<List/>);
            set_nav_active("navbar");
            setstate("off");
            setBlockPage(false);
            document.body.style.overflow = "scroll";
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("loged in") !== null){
            set_loged_in_css("log-out");
            set_loged_in("log out");
        }else{
            set_loged_in_css("log-in");
            set_loged_in("log in");
        }
    },[]);



    function navigateTo(text){
        if(text !== "log in"){
        navigate("/" + text);
        set_nav_active("navbar");
        setstate("off");
        setBlockPage(false);
        set_nav_state(<List/>);
        }else{
            if(loged_in == "log in"){
                navigate("/login");
                set_nav_active("navbar");
                setstate("off");
                set_nav_state(<List/>);
            }else{
                localStorage.removeItem("loged in");
                setstate("off");
                setBlockPage(false);
                set_nav_state(<List/>);

                set_loged_in_css("log-in");
            set_loged_in("log in");
            }
        }
    }

  return (
    <>
    <div className="nav-btn-background">
    <button onClick={change_nav_state} className='navbtn nav'>{nav_state}</button>
    </div>

    <div className={nav_active}>
    <div className={`${loged_in_css} nav`} onClick={()=>{
        navigateTo("log in");
      }}>{loged_in}</div>
    <div className="home nav" onClick={()=>{
        navigateTo("");
      }}>home</div>
      <div className="contact nav" onClick={()=>{
        navigateTo("contact");
      }}>contact</div>

      {loged_in === "log out" && <div className="dashboard nav" onClick={()=>{
        navigateTo("dashboard");
      }}>dashboard</div>
}
    </div>
    {blockPage == true && <div className="blocker"></div>}
    </>
  )
}

export default Navbar
