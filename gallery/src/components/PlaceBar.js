import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const PlaceBar = observer(() => {
    const { foto } = useContext(Context)

    return (
        <Row className="d-flex">
            {foto.places.map(place =>
                <Card
                    style={{ cursor: 'pointer', width: 100, margin: 2 }}
                    key={place._id}
                    className="p-3 d-flex justify-content-center align-items-center place"
                    onClick={() => foto.setSelectedPlace(place)}
                    border={place._id === foto.selectedPlace._id ? 'danger' : 'light'}
                >
                    {place.name}
                </Card>
            )
            }
        </Row >
    );
});

export default PlaceBar;