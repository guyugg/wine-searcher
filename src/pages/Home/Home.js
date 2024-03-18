import { Container } from "react-bootstrap";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import WineFilter from "../../components/WineFilter/WineFilter";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-title p-5">
          <h4 className="mb-5 text-white fw-bold">wine-seracher</h4>
          <Container className="d-flex">
            <SearchBar />
          </Container>
          <h2 className="mt-5 text-white fw-bold">
            Find the best price for wines, beers and spirits.
            <br/>
            Search thousands of online stores
          </h2>
        </Container>
      </Container>
      <Container fluid className="home-content p-5" id="home">
        <Container className="">
          <WineFilter />
        </Container>
      </Container>
    </section>
  );
}

export default Home;