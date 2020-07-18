import React, {InputHTMLAttributes} from "react";
import {Button, Input, Tooltip} from "antd";
import {InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../../src/config/axios";
import {Link} from "react-router-dom";
import "./SignUp.css"
interface SignUpInfo {
    username: string,
    password: string,
    configPassword: string
}

class SignUp extends React.Component<any, SignUpInfo> {
    constructor(props: SignUpInfo) {
        super(props);
        this.state = {
            username: "",
            password: "",
            configPassword: "",
        };
    }

    usernameChange = (e: any) => {
        this.setState({username: e.target.value});
    };
    passwordChange = (e: any) => {
        this.setState({password: e.target.value});
    };
    configPassword = (e: any) => {
        this.setState({configPassword: e.target.value});
    };
    submit = async () => {
        const {username, password, configPassword}: SignUpInfo = this.state;
        if(password !== configPassword){
            alert("两次密码不相同");
            return;
        }
        try {
            await axios.post("sign_up/user", {
                account: username,
                password: password,
                password_confirmation: configPassword
            });
            window.open("/", '_self')

        } catch (e) {
            alert("用户名已存在或用户名不能为空");
        }

    };

    render() {
        const {username, password, configPassword}: SignUpInfo = this.state;
        return (
            <div className="signUpWrapper">
                <h1>欢迎注册番茄闹钟</h1>
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
                <Input.Password placeholder="确认密码" value={configPassword} onChange={this.configPassword}
                                className="input"

                />
                <p>已有账户? <Link to="/signIn">前往登录</Link></p>
                <Button type="primary" onClick={this.submit}>注册</Button>
            </div>
        );
    }
}

export {SignUp};