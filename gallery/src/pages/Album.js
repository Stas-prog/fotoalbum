import React, { useContext, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YearBar from "../components/YearBar";
import PlaceBar from "../components/PlaceBar";
import FotoList from "../components/FotoList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchPlaces, fetchFotos, fetchYears } from "../http/fotoAPI";
import Pages from "../components/Pages";

const Album = observer(() => {
    const { foto } = useContext(Context)

    useEffect(() => {
        fetchPlaces().then(data => foto.setPlaces(data))
        fetchYears().then(data => foto.setYears(data))
        fetchFotos(null, null, 0, 18).then(data => {
            foto.setFotos(data)
            // foto.setTotalCount(data.count)
        })
    }, [foto])

    useEffect(() => {
        fetchFotos(foto.selectedYear._id, foto.selectedPlace._id, foto.page, 18).then(data => {
            foto.setFotos(data)
            // foto.setTotalCount(data.count)
        })
    }, [foto.page, foto.selectedYear, foto.selectedPlace, foto])

    return (
        <Container className="ml-auto" style={{ height: window.innerHeight - 54 }}>
            <Row className="mt-2">
                <Col md={1}>
                    <YearBar />
                </Col>
                <Col md={11}>
                    <PlaceBar />
                    <FotoList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Album;
