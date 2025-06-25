import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./searchbar.css"

function SearchBar() {
    return(
        <>
            <Container className="searchbar-container">
                <Form>
                    <Row className="align-items-center">
                        <Col xs={8} md={10}>
                            <Form.Control type="text" placeholder="Search..." />
                        </Col>
                        <Col xs={4} md={2}>
                            <Button variant="primary" type="submit">
                                <i className="bi bi-search me-2"></i> Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default SearchBar;