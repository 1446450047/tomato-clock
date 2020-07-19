import React from "react";
import axios from "../../config/axios";
import {Button} from "antd";

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

    logout = ()=> {
        localStorage.removeItem('x-token')
        window.open("/signIn",'_self');
    }

    render() {
        return (
            <div>
                <p>欢迎,{this.state.user && this.state.user.account}</p>
                <Button onClick={this.logout}>退出登录</Button>
            </div>
        );
    }
}

export {Home};