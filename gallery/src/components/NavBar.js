import React, { useContext, useState } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, ALBUM_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom'


const NavBar = observer(() => {
    const [value, setValue] = useState('dark')
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const chengeTheme = () => {
        value === 'dark' ? setValue('light') : setValue('dark')
    }
    document.body.className = value;

    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <NavLink style={{ color: '#0000CD', fontSize: '25px', fontWeight: 'bold' }} to={ALBUM_ROUTE}>FOTO ALBUM</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: '#9ACD32' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            className='m-1 batt'
                        >
                            Адмін панель
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className='m-1 batt'
                        >
                            Вийти
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={chengeTheme}
                            className='m-1 batt'
                        >
                            Тема
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar >

    );
});

export default NavBar;