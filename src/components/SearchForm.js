import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchForm = ({ params, onParamChange }) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Check onChange={onParamChange} value={params.location} name="location" type="text" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default SearchForm;