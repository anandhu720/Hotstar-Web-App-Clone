import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import firstlogo from '../images/cta-logo-one.svg';
import secondlogo from '../images/cta-logo-two.png';
import bg from '../images/login-background.jpg';
const Login = () =>{
    return(
        <>
            <div className="container-fluid">
            <div className="login-body">
                <Background>
                <img alt="..." src={bg}/>
                </Background>
                <div className="center" id="mydiv">
                    <img src={firstlogo} alt="" className="firstlogo"/>
                    <NavLink className="login-btn btn btn-primary" to='/home'><h4>Explore</h4></NavLink>
                    <p className="login-dis">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As
                    of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                    <img src={secondlogo} alt="" className="secondlogo"/>
                </div>
            </div>
            </div>
        </>
    )
}


const Background = styled.div`
  left: 0px;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;


export default Login;