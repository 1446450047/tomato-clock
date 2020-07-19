import React, {InputHTMLAttributes} from "react";
import {Button, Input, Tooltip} from "antd";
import {InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../../src/config/axios";
import {Link} from "react-router-dom";
import "./SignIn.css"
interface SignInInfo {
    username: string,
    password: string,
}

class SignIn extends React.Component<any, SignInInfo> {
    constructor(props: SignInInfo) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    usernameChange = (e: any) => {
        this.setState({username: e.target.value});
    };
    passwordChange = (e: any) => {
        this.setState({password: e.target.value});
    };
    submit = async () => {
        const {username, password}: SignInInfo = this.state;

        try {
            await axios.post("sign_in/user", {
                account: username,
                password: password,
            });
            window.open("/", '_self')
        } catch (e) {
            alert("用户名或密码错误");
        }

    };

    render() {
        const {username, password}: SignInInfo = this.state;
        return (
            <div className="signUpWrapper">
                <h1>欢迎使用番茄闹钟</h1>
                <Input
                    className="input"
                    placeholder="请输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    suffix={
                        <Tooltip title="Extra information">
                            <InfoCircleOutlined
                                value={username}
                                style={{color: "rgba(0,0,0,.45)"}}/>
                        </Tooltip>
                    }
                    onChange={this.usernameChange}
                />
                <Input.Password placeholder="请输入密码" value={password} onChange={this.passwordChange}
                                className="input"

                />
                <p>没有账户? <Link to="/signUp">马上注册</Link></p>
                <Button type="primary" className='button' onClick={this.submit}>登录</Button>
            </div>
        );
    }
}

export {SignIn};