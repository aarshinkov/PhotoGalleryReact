import React from 'react';
import { Form } from 'react-bootstrap';

import { setSelectedLang } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const LangFilter = (props) => {

    const selectedLang = useSelector(state => state.selectedLang);
    const dispatch = useDispatch();

    const changeSelectedLang = (event) => {
        dispatch(setSelectedLang(event.target.value));
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Език</Form.Label>
                <Form.Control as="select"
                    onChange={changeSelectedLang} value={selectedLang}>
                    <option value="en">English</option>
                    <option value="bg">Български</option>
                    <option value="es">Español</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default LangFilter;