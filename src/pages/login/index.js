/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import jwt_decode, { jwtDecode } from "jwt-decode";
import { baseUrl } from "@/api/baseUrl";
import { useRouter } from "next/router";
const { Title } = Typography;

const LoginForm = () => {
    // const [username, setUserName ] = useState('');
    // const [password, setPassword ] = useState('');  
    const router = useRouter()
    const onFinish = (values) => {
        try {
            fetch(baseUrl+'api/Account/Auth', {
                method: 'POST',
                body: JSON.stringify({
                    "userName": values.username,
                    "password": values.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.status === 'Success') {
                        localStorage.setItem("token", data.result.token);
                        localStorage.setItem("userId",data.result.accountId)
                        router.push('/')
                    }
                });
        }
        catch (e) {
            console.log('Sending message failed.', e);
        }
        // console.log(values.password);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log("Handle password recovery logic here");
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card style={{ width: 500 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Title level={2}>OTT APP </Title>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please input your Username!" }]}
                    >
                        <Input
                            //onChange={(e) =>{setUserName(e.target.value)} }
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your Password!" }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />

                    </Form.Item>
                    <a
                        style={{ float: "right" }}
                        className="login-form-forgot"
                        href=""
                        onClick={handleForgotPassword}
                    >
                        Forgot password
                    </a>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                        >
                            Log in
                        </Button>
                        Don't have an account{" "}
                        <a href="" >
                            sign up
                        </a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginForm;