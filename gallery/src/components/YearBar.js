import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const YearBar = observer(() => {
    const { foto } = useContext(Context)
    return (
        <ListGroup>
            {foto.years.map(year =>
                <ListGroup.Item
                    style={{ cursor: 'pointer', backgroundColor: '#8B4513', color: '#FF4500' }}
                    active={year._id === foto.selectedYear._id}
                    onClick={() => foto.setSelectedYear(year)}
                    className='mt-1'
                    key={year._id}
                >
                    {year.date}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default YearBar;