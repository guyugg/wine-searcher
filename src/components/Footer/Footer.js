import React from "react";
import { Container, Card, Row, Col, Form } from "react-bootstrap";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { MdPhoneAndroid } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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

function CardSection({ title, links }) {
  return (
    <Card className="border-0 m-0 p-0">
      <div className="page-footer__ul">
        <div className="page-footer__li text-start">
          <h6 className="page-footer__heading_text d-block">{title}</h6>
        </div>
        <div className="row d-block text-start">
          <ul className="page-footer__sub_ul col">
            {links.map((link, index) => (
              <li key={index} className="page-footer__li">
                <a className="page-footer__link text-black" href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

function Cards() {
  const sections = [
    {
      title: "About Us",
      links: [
        { label: 'About Wine-Searcher', url: '/wine-searcher' },
        { label: 'Work at Wine-Searcher', url: '/job' },
        { label: 'Our Technology', url: '/technology' },
        { label: 'Writers', url: '/bios' },
        { label: 'Contact Us', url: '/contact-general' }
      ]
    },
    {
      title: "How Wine-Searcher Works",
      links: [
        { label: 'Wine Scores', url: '/wine-scores' },
        { label: 'Average Prices', url: '/average-prices' },
        { label: 'Wine Label Overview', url: '/wine-label-overview' },
        { label: 'Wine Terms', url: '/wine-terms' },
        { label: 'Retailer Awards', url: '/retailer-awards' },
        { label: 'Shop Star Ratings', url: '/shop-star-ratings' }
      ]
    },
    {
      title: "For Collectors",
      links: [
        { label: "Advice for Collectors", url: "/advice-for-collectors" },
        { label: "Popular Investment Wines", url: "/popular-investment-wines" },
        { label: "Shipping", url: "/shipping" },
        { label: "Buying Wine at Auction", url: "/buying-wine-at-auction" }
      ]
    },
    {
      title: "Wine Encyclopedia",
      links: [
        { label: "Regions", url: "/regions" },
        { label: "Grapes", url: "/grapes" },
        { label: "Spirits", url: "/spirits" },
        { label: "Vintages", url: "/vintages" },
        { label: "Styles", url: "/styles" },
        { label: "Food Pairing", url: "/food-pairing" },
        { label: "Critics", url: "/critics" },
        { label: "Awards", url: "/awards" },
        { label: "Latest News and Features", url: "/latest-news-and-features" }
      ]
    },
    {
      title: "Useful Tools",
      links: [
        { label: "Create Free Account", url: "/create-free-account" },
        { label: "Discover - Recommendations", url: "/discover-recommendations" },
        { label: "Special Offers", url: "/special-offers" },
        { label: "Best Vintages Chart", url: "/best-vintages-chart" },
        { label: "100 Most Searched For", url: "/100-most-searched-for" },
        { label: "World's Top 10 Best Value Wines", url: "/worlds-top-10-best-value-wines" },
        { label: "Best Wines & Whiskeys Near You", url: "/best-wines-whiskeys-near-you" },
        { label: "Find a Store or Producer", url: "/find-a-store-or-producer" }
      ]
    },
    {
      title: "Wine & Spirit Industry",
      links: [
        { label: "List on Wine-Searcher", url: "/list-on-wine-searcher" },
        { label: "Use Wine-Searcher Data", url: "/use-wine-searcher-data" },
        { label: "For Winery, Brewery, Distillery", url: "/for-winery-brewery-distillery" },
        { label: "All Industry Services", url: "/all-industry-services" }
      ]
    }
  ];

  return (
    <div className="card-columns">
      {sections.map((section, index) => (
        <CardSection key={index} title={section.title} links={section.links} />
      ))}
      <Card className="border-0 m-0 p-0">
        <div className="page-footer__ul">
          <div className="page-footer__li text-start">
            <h6 className="page-footer__heading_text d-block">Search Entire Site</h6>
            <Form className="w-100">
              <ReactSearchAutocomplete
                  placeholder={"Enter Keyword"}
              />
            </Form>
          </div>
        </div>
      </Card>
      <Card className="border-0 m-0 p-0">
        <div className="page-footer__ul">
          <div className="page-footer__li text-start">
            <h6 className="page-footer__heading_text d-block">Follow Us</h6>
            <Row>
              <Col>
                <FaFacebookF className="me-3" size={24} color="green"/>
                <FaTwitter className="me-3" size={24} color="green" />
                <FaInstagram className="me-3" size={24} color="green" />
                <FaLinkedinIn className="me-3" size={24} color="green" />
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Footer;