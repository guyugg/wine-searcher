import React from "react";
import { Button } from 'react-bootstrap';

function ResetButton() {
    return (
        <div className="d-flex justify-content-center pt-3">
            <Button variant="success" className="w-100">Reset all</Button>
        </div>
    )
}

export default ResetButton;
