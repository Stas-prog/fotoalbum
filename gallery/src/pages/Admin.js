import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreatePlace from "../components/modals/CreatePlace";
import CreateYear from "../components/modals/CreateYear";
import CreateFoto from "../components/modals/CreateFoto";

const Admin = () => {
    const [placeVisible, setPlaceVisible] = useState(false)
    const [yearVisible, setYearVisible] = useState(false)
    const [fotoVisible, setFotoVisible] = useState(false)

    return (
        <Container className="d-flex flex-column" style={{ height: window.innerHeight - 54 }}
        >
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setYearVisible(true)}
            >
                Додати рік
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPlaceVisible(true)}
            >
                Додати місце
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setFotoVisible(true)}
            >
                Додати фото
            </Button>

            <CreatePlace show={placeVisible} onHide={() => setPlaceVisible(false)} />
            <CreateFoto show={fotoVisible} onHide={() => setFotoVisible(false)} />
            <CreateYear show={yearVisible} onHide={() => setYearVisible(false)} />
        </Container>
    );
};

export default Admin;