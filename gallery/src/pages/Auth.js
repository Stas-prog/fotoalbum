import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ALBUM_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                // eslint-disable-next-line no-unused-vars
                data = await registration(email, password, role);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(ALBUM_ROUTE)
        } catch (e) {
            alert(e.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : "Реєстрація"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш нік...                 не обов'язково!"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div style={{ width: 250 }}>
                                Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
                            </div>
                            :
                            <div style={{ width: 250 }}>
                                Є акаунт? <NavLink to={LOGIN_ROUTE}>Заходьте!</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}
                            style={{ width: 120, marginRight: 15 }}
                            onClick={click}
                        >
                            {isLogin ? 'Вхід' : 'Реєстрація'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
