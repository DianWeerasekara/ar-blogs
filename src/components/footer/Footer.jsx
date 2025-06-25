import { Card } from "react-bootstrap";
import './footer.css';

function Footer() {
    return(
        <>
            <Card bg="primary">
                <Card.Body className="footer-body">This is the footer section</Card.Body>
            </Card>
        </>
    )
}

export default Footer;