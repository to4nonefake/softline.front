import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetObjectives, GetStatuses } from "../services/objectives";
import { Button, Row, Col } from "react-bootstrap";
import ExpenseForm from "./ObjectiveForm";

export default () => {
    const dispatch = useDispatch();
    const statuses = useSelector(state => state.objectivesReducer.statuses);
    const objectives = useSelector(state => state.objectivesReducer.objectives);

    useEffect(() => {
        GetStatuses(dispatch);
        GetObjectives(dispatch);
    }, []);

    return objectives.map(e =>
        <div key={e.id} style={{ marginBottom: '1rem' }}>
            <ListRow objective={e} status={statuses.find(status => status.status_id === e.status_id)} />
            <hr />
        </div>
    );
}

const ListRow = ({ objective, status }) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing
        ? <ExpenseForm objective={objective} setIsEditing={setIsEditing} />
        : <div>
            <Row>
                <Col xs={2}>{status.status_name}</Col>
                <Col xs={3}>{objective.name}</Col>
                <Col ><textarea disabled style={{width:'100%', border: 'none', backgroundColor: 'white', textDecorationColor: 'black'}} value={objective.description}></textarea></Col>
                <Col md="auto" style={{ textAlign: 'right' }}><Button variant='warning' onClick={() => setIsEditing(!isEditing)}>Изменить</Button></Col>
            </Row>
        </div>
}