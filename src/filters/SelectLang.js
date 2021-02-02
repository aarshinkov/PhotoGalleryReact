import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { getImages } from '../redux/actions';
import { useDispatch } from 'react-redux';

const SelectLang = (props) => {

    const dispatch = useDispatch();

    const loadImages = () => {
        dispatch(getImages({
            lang: 'en'
        }));
    }

    useEffect(() => {
        loadImages();
    }, [loadImages]);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Език</Form.Label>
                <Form.Control as="select">
                    <option value="en">English</option>
                    <option value="bg">Български</option>
                    <option value="es">Español</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default SelectLang;