import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from "../../index";
import { createFoto, fetchPlaces, fetchYears } from "../../http/fotoAPI";
import { observer } from "mobx-react-lite";

const CreateFoto = observer(({ show, onHide }) => {
    const { foto } = useContext(Context)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchYears().then(data => foto.setYears(data))
        fetchPlaces().then(data => foto.setPlaces(data))
    }, [foto])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addFoto = () => {
        const formData = new FormData()
        formData.append('img', file)
        formData.append('placeId', foto.selectedPlace._id)
        formData.append('yearId', foto.selectedYear._id)
        createFoto(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати фото
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{foto.selectedPlace.name || "Виберіть місце"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {foto.places.map(place =>
                                <Dropdown.Item
                                    onClick={() => foto.setSelectedPlace(place)}
                                    key={place._id}
                                >
                                    {place.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{foto.selectedYear.date || "Виберіть рік"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {foto.years.map(year =>
                                <Dropdown.Item
                                    onClick={() => foto.setSelectedYear(year)}
                                    key={year._id}
                                >
                                    {year.date}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addFoto}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFoto;