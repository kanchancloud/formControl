import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import "./HeaderPage.css";
import LoginPageBtn from "./LoginPageBtn";
import TrialBtn from "./TrialBtn";
import DashboardImg from "../DashboardImage/DashboardImg";
import LoginPage from "../login/LoginPage";


const {Header} = Layout;

const NavPage = () => {
    return (
        <div className="navWrapper">
            <Header className="header_Wrapper" style={{backgroundColor: "white"}}>
                <span className="Web_Icon">ATools<span className="Web_Icon_dot">.</span></span>
                <div className="ButtonWrap">
                    <TrialBtn/>
                    <LoginPageBtn/>
                </div>
            </Header>

            <div className="ImageWrapper">
                <div className="login_form">
                    <LoginPage/>
                </div>
                <div>
                    <DashboardImg/>
                </div>
            </div>
        </div>
    );
};

export default NavPage;