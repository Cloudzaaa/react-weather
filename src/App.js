import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import 'bootswatch/dist/solar/bootstrap.css';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const PLACES = [
    { name: "Mexico City", zip: "94303" },
    { name: "Sunnyvale", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];

const headerStyle = {
    color: '#839496',
};

class App extends Component {
    constructor() {
        super();
        this.state = {
          activePlace: 0,
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Container>
                    <Navbar className="justify-content-center">
                        <Navbar.Brand style={headerStyle}>
                            React Simple Weather App
                        </Navbar.Brand>
                    </Navbar>

                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                variant="pills"
                                className="flex-column"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <Nav.Link key={index} eventKey={index}>{place.name}</Nav.Link>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
