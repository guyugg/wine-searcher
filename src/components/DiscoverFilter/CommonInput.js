import React from "react";
import { Form, Button } from 'react-bootstrap';

function CommonInput({ title }) {
    return (
        <div className="d-flex flex-column text-start p-3 border-bottom">
            <span>{title}</span>
            <div className="mt-2 d-flex">
                <Form.Control type="text" placeholder="Type..." className="me-3" />
                <Button variant="success">Add</Button>
            </div>
        </div>
    )
}

export default CommonInput;