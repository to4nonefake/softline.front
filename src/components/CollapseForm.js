import ObjectiveForm from "./ObjectiveForm";
import { useState } from "react";
import { Button, Collapse, Row, Col } from "react-bootstrap";

export default () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Row>
            <Col md="auto"><h3>Ваши задачи</h3></Col>
            <Col md="auto" style={{ textAlign: 'right' }}>
                <Button
                    style={{ textAlign: "right" }}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    +
                </Button>
            </Col>
        </Row>

        <Collapse in={open}>
            <div id="example-collapse-text">
                <br />
                <ObjectiveForm />
                <hr style={{ border: '1px solid grey' }} />
            </div>
        </Collapse>

    </div>
}