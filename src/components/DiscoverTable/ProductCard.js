import React from "react";
import { Container, Button, Badge, Row, Col, Image } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";

function ProductCard() {
    const data = {
        imgSrc: "https://www.wine-searcher.com/images/labels/16/28/10571628.jpg?height=160&width=120&fit=bounds",
        wineName: "2018 Weingut Ernst Triebaumer Ried Mariental Blaufrankisch",
        country: "Burgenland, Austria",
        type: "Red Wine – Light and Perfumed",
        variety: "Blaufränkisch",
        shopName: "Wein.Depot Noitz",
        price: "2,590.97NT$",
        volume: "Bottle (750ml)"
    };
    const toProduct = () => {};
    const toShop = () => {};

    return (
        <Row className="product mb-3 bg-white rounded">
            <Col
                lg={9}
                className="product-border radius1"
                onClick={toProduct}
            >
                <Row xs={2} className="text-start p-3">
                    <Col xs={3} className="d-flex justify-content-center align-items-center border rounded">
                        <Container className="d-flex justify-content-center align-items-center h-100">
                            <Image src={data.imgSrc} />
                        </Container>
                    </Col>
                    <Col xs={9} className="d-flex flex-column justify-content-evenly">
                        <div className="fw-bold fs-6">{data.wineName}</div>
                        <div className="product-text">{data.country}</div>
                        <div className="product-text">{data.type}</div>
                        <div className="product-text">{data.variety}</div>
                        <div className="d-flex align-items-center">
                            <Badge pill bg="" className="badge-rating me-1">100/100</Badge>
                            <div className="d-flex align-items-center">
                                <FaStar color="#f8b10c" />
                                <FaStar color="#f8b10c" />
                                <FaStar color="#f8b10c" />
                                <FaStar color="#f8b10c" />
                                <FaStar color="#f8b10c" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col
                lg={3}
                className="product-border radius2 text-end d-flex flex-column justify-content-evenly p-3"
                onClick={toShop}
            >
                <div className="fw-bold fs-6 mb-1">{data.shopName}</div>
                <div className="product-text mb-1">{data.price}</div>
                <div className="product-text mb-1">ex. sales tax</div>
                <div className="product-text mb-2">
                    <Badge pill>{data.volume}</Badge>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="success" className="w-100">Go to shop</Button>
                </div>
            </Col>
        </Row>
    )
}

export default ProductCard;