import { Container } from "react-bootstrap";
import { FaWineGlass } from 'react-icons/fa';
import React from "react";

const winesTypes = [
    'Red',
    'White',
    'Rose',
    'Sparkling',
    'Dessert'
];
const spiritsTypes = [
    'Whiskey',
    'Rum',
    'Brandy',
    'Gin',
    'Vodka',
    'Other'
];

function TypeSection(props) {
    const { typeIdx } = props;
    const typenames = typeIdx === '0' ? winesTypes : spiritsTypes;

    return (
        <Container
            fluid
            className="type-section d-flex justify-content-center p-3"
        >
            {typenames.map((typename, idx) => (
                <Container
                    key={idx}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <FaWineGlass className="type-icon" size={30} />
                    <p>{typename}</p>
                </Container>
            ))}
        </Container>
    )
}

export default TypeSection;