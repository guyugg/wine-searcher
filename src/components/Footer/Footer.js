import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdPhoneAndroid } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import Cards from "./Cards";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </>
  );
}

function Footer1() {
  return (
    <Container fluid className="footer mt-6">
      <Container className="py-3 p-md-4A px-0 mb-0 d-flex flex-wrap">
        <Container className="col-12 col-lg-4 py-3">
          <MdPhoneAndroid size={32} />
          <span> Download App</span>
        </Container>
        <Container className="col-12 col-lg-4 py-3">
          <GrUpgrade size={32} />
          <span> Get Wine-Searcher PRO</span>
        </Container>
        <Container className="col-12 col-lg-4 py-3">
          <IoMdMail size={32} />
          <span> Sign up to the Newsletter</span>
        </Container>
      </Container>
    </Container>
  )
}

function Footer2() {
  return (
    <Container fluid>
      <Container className="px-0 page-footer_content d-none d-md-block">
        <Cards />
      </Container>
    </Container>
  );
}

function Footer3() {
  return (
    <Container fluid>
      <Container className="px-0 py-4">
        <Row className="px-0">
          <Col md className="px-0 text-center text-md-start">© 2024 Wine-Searcher Limited</Col>
          <Col md className="px-0 text-center text-md-end">
            <li className="legal-footer__li">
              <a className="legal-footer__link" href="/">Site Map</a>
            </li>
            <li className="legal-footer__li">
              <a className="legal-footer__link" href="/">Privacy</a>
            </li>
            <li className="legal-footer__li">
              <a className="legal-footer__link" href="/">Policy</a>
            </li>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;