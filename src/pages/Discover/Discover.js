
import React from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import WineFilter from "../../components/WineFilter/WineFilter";
import DiscoverFilter from "../../components/DiscoverFilter/DiscoverFilter";
import "./Discover.css"

function TitleSection() {
  return (
    <Container fluid className="title-section" id="">
      <Container className="">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/Discover" active>
            Discover
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-start">Discover</h1>
        <p className="text-start">
          Explore our recommendations the way you like - refine your search by price, popularity, critic score and value to discover the best local wines and spirits in your location for your budget.
        </p>
      </Container>
    </Container>
  )
}

function ContentSection() {
  return (
    <Container fluid className="content-section" id="">
      <WineFilter />
      <ContentSection2 />
    </Container>
  )
}

function ContentSection2() {
  return (
    <Container>
      <Row>
        <Col md={4} lg={3} className="p-0">
          <Container className="filter-section p-3">
            <DiscoverFilter />
          </Container>
        </Col>
        <Col md={8} lg={9} className="ps-0 ps-md-2 pe-0">
          <Container className="filter-section">
            商品列表
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

function Discover() {
  return (
    <section>
      <TitleSection />
      <ContentSection />
    </section>
  );
}

export default Discover;
