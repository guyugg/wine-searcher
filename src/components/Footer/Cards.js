import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const sections = [
    {
        title: "About Us",
        links: [
            { label: 'About Wine-Searcher', url: '/' },
            { label: 'Work at Wine-Searcher', url: '/' },
            { label: 'Our Technology', url: '/' },
            { label: 'Writers', url: '/' },
            { label: 'Contact Us', url: '/' }
        ]
    },
    {
        title: "How Wine-Searcher Works",
        links: [
            { label: 'How Wine-Searcher Works', url: '/' },
            { label: 'Wine Scores', url: '/' },
            { label: 'Average Prices', url: '/' },
            { label: 'Wine Label Overview', url: '/' },
            { label: 'Wine Terms', url: '/' },
            { label: 'Retailer Awards', url: '/' },
            { label: 'Shop Star Ratings', url: '/' }
        ]
    },
    {
        title: "For Collectors",
        links: [
            { label: "Advice for Collectors", url: "/" },
            { label: "Popular Investment Wines", url: "/" },
            { label: "Shipping", url: "/" },
            { label: "Buying Wine at Auction", url: "/" }
        ]
    },
    {
        title: "Wine Encyclopedia",
        links: [
            { label: "Regions", url: "/" },
            { label: "Grapes", url: "/" },
            { label: "Spirits", url: "/" },
            { label: "Vintages", url: "/" },
            { label: "Styles", url: "/" },
            { label: "Food Pairing", url: "/" },
            { label: "Critics", url: "/" },
            { label: "Awards", url: "/" },
            { label: "Latest News and Features", url: "/" }
        ]
    },
    {
        title: "Useful Tools",
        links: [
            { label: "Create Free Account", url: "/" },
            { label: "Discover - Recommendations", url: "/" },
            { label: "Special Offers", url: "/" },
            { label: "Best Vintages Chart", url: "/" },
            { label: "100 Most Searched For", url: "/" },
            { label: "World's Top 10 Best Value Wines", url: "/" },
            { label: "Best Wines & Whiskeys Near You", url: "/" },
            { label: "Find a Store or Producer", url: "/" }
        ]
    },
    {
        title: "Wine & Spirit Industry",
        links: [
            { label: "List on Wine-Searcher", url: "/" },
            { label: "Use Wine-Searcher Data", url: "/" },
            { label: "For Winery, Brewery, Distillery", url: "/" },
            { label: "All Industry Services", url: "/" }
        ]
    }
];

function CommonCard({ title, links }) {
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

function SearchCard() {
    return (
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
    )
}

function SocialCard() {
    return (
        <Card className="border-0 m-0 p-0">
            <div className="page-footer__ul">
                <div className="page-footer__li text-start">
                    <h6 className="page-footer__heading_text d-block">Follow Us</h6>
                    <Row>
                        <Col>
                            <FaFacebookF className="me-3" size={24} color="green" />
                            <FaTwitter className="me-3" size={24} color="green" />
                            <FaInstagram className="me-3" size={24} color="green" />
                            <FaLinkedinIn className="me-3" size={24} color="green" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Card>
    )
}

function Cards() {
    return (
        <div className="card-columns">
            {sections.map((section, index) => (
                <CommonCard key={index} title={section.title} links={section.links} />
            ))}
            <SearchCard />
            <SocialCard />
        </div>
    );
}

export default Cards;