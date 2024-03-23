import React, { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import FotoItem from './FotoItem';
import FotoModal from './modals/FotoModal';

const FotoList = observer(() => {
    const { foto } = useContext(Context)
    const [fotoVisible, setFotoVisible] = useState(false)

    const click = (imgo) => {
        setFotoVisible(true)
        foto.setSelectedFoto(imgo)
    }
    return (
        <>

            <Row className="d-flex">
                {foto.fotos.map(foto =>
                    <FotoItem key={foto._id} foto={foto} onClick={() => click(foto)} />
                )}

            </Row>
            <FotoModal show={fotoVisible} onHide={() => setFotoVisible(false)} />
        </>
    );
});

export default FotoList;