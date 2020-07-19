import React from "react";
import axios from "../../config/axios";
import {Button} from "antd";
import "./Home.css";
import logo from "../../images/logo.png";
import {Todos} from "../Todos/Todos";

interface HomeState {
    user: any
}

class Home extends React.Component <any, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {}
        };
    }

    async componentWillMount() {
        await this.getMe();
    }

    async getMe() {
        try {
            const response = await axios.get("me");
            this.setState({user: response.data});
        } catch (e) {

        }
    }

    logout = () => {
        localStorage.removeItem("x-token");
        window.open("/signIn", "_self");
    };

    render() {
        return (
            <div id='index'>
                <header>
                    <img src={logo} alt="logo" id='logo' height={"40px"}/>
                    <span id='username'>欢迎,{this.state.user && this.state.user.account}</span>
                    <Button onClick={this.logout}>退出登录</Button>
                </header>
                <main>
                    <Todos/>
                </main>
            </div>
        );
    }
}

export {Home};