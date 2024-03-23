import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { REACT_APP_API_URL } from '../utils/consts';
import { deleteFoto } from '../http/fotoAPI';
// import { useContext } from "react";
// import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const FotoItem = observer(({ onClick, foto }) => {
    // const { foto } = useContext(Context)
    const removeFoto = async () => { await deleteFoto(foto._id) }
    return (
        <Col md={2} className={"mt-3"} >
            <Card style={{ width: 150, cursor: 'pointer', backgroundColor: 'pink' }} border={"light"}>
                <Image style={{ objectFit: 'contain' }} onClick={onClick} width={150} height={130} src={REACT_APP_API_URL + foto.img} />
                <Button style={{ width: 2, height: 2, backgroundColor: 'lightpink', border: 'none' }} onClick={removeFoto}></Button>
            </Card>
        </Col>
    );
});

export default FotoItem;
