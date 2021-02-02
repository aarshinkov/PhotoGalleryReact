import React from 'react';
import { Form } from 'react-bootstrap';

const SelectLang = (props) => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Език</Form.Label>
                <Form.Control as="select">
                    <option value="en">English</option>
                    <option value="bg" selected>Български</option>
                    <option value="es">Español</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default SelectLang;