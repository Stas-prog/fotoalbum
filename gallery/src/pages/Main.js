import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { ALBUM_ROUTE } from '../utils/consts';
import { Context } from '../index';


const Main = observer(() => {
    const [password, setPassword] = useState('')
    document.body.className = 'fine';
    const navigate = useNavigate()
    const user = useContext(Context)

    const click = () => {
        if (password === 'zxcvbnmlkjhgfdsa') {
            user.user.setOpen(false)
            navigate(ALBUM_ROUTE)
        } else {
            setPassword('')
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center fine"
            style={{ height: window.innerHeight }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <Form className="d-flex">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <Button
                        variant={"outline-success"}
                        style={{ width: 120, hight: 5, marginLeft: 15 }}
                        onClick={click}
                    >Enter
                    </Button>
                </Form>
            </Card>
        </Container >
    );
});

export default Main;
