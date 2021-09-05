import { ActionCreators } from "../app/objectivesReducer";
import * as axios from 'axios';

const axiosStatuses = axios.create({
    baseURL: 'https://localhost:44357/Statuses',
});

const axiosObjectives = axios.create({
    baseURL: 'https://localhost:44357/Objectives',
});

export const GetStatuses = async (dispatch) => {
    try {
        /*
        const statuses = [
            { status_id: 1, status_name: 'Создана' },
            { status_id: 2, status_name: 'В работе' },
            { status_id: 3, status_name: 'Завершена' },
        ]
        dispatch(ActionCreators.setStatuses(statuses));
        */

        //api call
        const { data } = await axiosStatuses.get();
        dispatch(ActionCreators.setStatuses(data));

    } catch {
        console.log('Get statuses Error');
    }
}

export const GetObjectives = async (dispatch) => {
    try {
        /*
        const objectives = [
            { id: 1, name: 'task', description: 'Some text for description here', status_id: 2 },
            { id: 2, name: 'Имя', description: 'Описание\nс\nпереносом\nстрок', status_id: 3 },
            { id: 3, name: 'Сходить за молоком', description: 'Купить бутылку молока 2.5%', status_id: 1 },
            { id: 4, name: 'Заглушка', description: 'Реализовать заглушку с известными параметрами для тестов на фронте. Тут описание побольше, кто знает какой длинны оно вообще может быть?', status_id: 3 },
        ];
        dispatch(ActionCreators.setObjectives(objectives));
        */

        //api call
        await GetStatuses(dispatch);
        const { data } = await axiosObjectives.get();
        dispatch(ActionCreators.setObjectives(data));

    } catch {
        console.log('Get objectives Error');
    }
}

export const NewObjective = async (dispatch, obj) => {
    try {
        //dispatch(ActionCreators.newObjective({ id: 10, name: obj.name, description: obj.description, status_id: obj.status_id }));

        //api call
        const { data } = await axiosObjectives.post('', obj);
        dispatch(ActionCreators.newObjective(data));

    } catch {
        console.log('Create objective error');
    }
}

export const EditObjective = async (dispatch, obj) => {
    try {
        //dispatch(ActionCreators.editObjective(obj));

        //api call
        await axiosObjectives.put('', obj);
        dispatch(ActionCreators.editObjective(obj));

    } catch {
        console.log('Edit objective error');
    }
}

export const DeleteObjective = async (dispatch, obj) => {
    try {
        //dispatch(ActionCreators.deleteObjective(obj));

        //api call
        await axiosObjectives.delete('', { data: { ...obj } });
        dispatch(ActionCreators.deleteObjective(obj));

    } catch {
        console.log('Delete objective error');
    }
}