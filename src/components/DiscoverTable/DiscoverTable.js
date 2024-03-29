import React from 'react';
import TopSection from './TopSection';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';
import './DiscoverTable.css';

function DiscoverTable() {
    return (
        <Container className="d-flex flex-column">
            <TopSection />
            {[...Array(12).keys()].map((idx) => (
                <ProductCard key={idx} />
            ))}
        </Container>
    )
}

export default DiscoverTable;