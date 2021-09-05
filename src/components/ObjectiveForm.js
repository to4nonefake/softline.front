import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { DeleteObjective, EditObjective, NewObjective } from '../services/objectives';
import { useDispatch, useSelector } from 'react-redux';

export default ({ objective, setIsEditing }) => {
    const status_names = useSelector(state => state.objectivesReducer.statuses);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status_id, setStatus_Name] = useState(1);
    const [isNewObjective, setIsNewObjective] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (objective !== undefined) {
            setIsNewObjective(false);
            setName(objective.name)
            setDescription(objective.description);
            setStatus_Name(objective.status_id);
        } else {
            setIsNewObjective(true);
        }
    }, [objective]);

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if (isNewObjective) {
                //Create new Task
                NewObjective(dispatch, { name: name, description: description, status_id: Number(status_id) });
            } else {
                //Edit Task
                EditObjective(dispatch, { id: objective.id, name: name, description: description, status_id: Number(status_id) });
                setIsEditing(false);
            }
        }}
    >
        <Row>
            <Col md={2}>
                <Form.Label>Статус</Form.Label>
                <Form.Select as='select'
                    onChange={event => setStatus_Name(event.target.value)}>
                    {status_names.map(e => <option value={e.status_id}>{e.status_name}</option>)}
                </Form.Select >
            </Col>
            <Col md={3}>
                <Form.Label>Название</Form.Label>
                <Form.Control type='text' value={name} required
                    onChange={event => setName(event.target.value)} />
            </Col>
            <Col>
                <Form.Label>Описание</Form.Label>
                <Form.Control type='text' as='textarea' value={description} required
                    onChange={event => setDescription(event.target.value)}
                />
            </Col>
            {isNewObjective
                ? <Col md="auto" style={{ marginTop: 'auto' }} >
                    <div style={{ textAlign: 'right' }}>
                        <Button variant='primary' type='submit'>Добавить</Button>
                    </div>
                </Col>
                : <div />
            }
        </Row>
        {isNewObjective
            ? <div />
            : <div style={{ textAlign: 'right' }}>
                <br />
                <Button style={{ marginLeft: '1rem' }} variant='outline-success' type='submit'>Сохранить</Button>
                <Button style={{ marginLeft: '1rem' }} variant='outline-danger' onClick={() => DeleteObjective(dispatch, objective)}>Удалить</Button>
                <Button style={{ marginLeft: '1rem' }} variant='outline-secondary' onClick={() => setIsEditing(false)}>Отмена</Button>
            </div>
        }
    </Form>
}