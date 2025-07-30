import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";

function CreatePost() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});

    const user = getUser();

    const handleSubmit = (event) => {
        event.preventDefault();
        const createPostForm = event.currentTarget;

        if (createPostForm.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true)

        const data = {
            author: user.id,
            body: form.body,
        };

        axiosService
            .post("/post/", data)
            .then(() => {
                handleClose();
                setForm({});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
        <Form.Group>
            <Form.Control
                className="py-2 rounded-pill border-primary text-primary"
                type="text"
                placeholder="Write a post"
                onClick={handleShow}
            />
        </Form.Group>

        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton className="border-0" >
                <Modal.Title>CreatePost</Modal.Title>
            </Modal.Header>
            <Modal.Body className="border=0">
                <Form noValidate validated={validated}
                    onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control 
                            name="body"
                            value={form.body}
                            onChange={(e) => setShow({...form, body: e.target.value })}
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={handleSubmit}
                    disabled={form.body === underined}>
                    Post
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default CreatePost;