
import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import WineFilter from "../../components/WineFilter/WineFilter";
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
      <WineFilter/>
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
