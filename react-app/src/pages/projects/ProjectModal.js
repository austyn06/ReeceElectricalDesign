import React from "react";
import { Modal } from "reactstrap";
import "./projects.css";

export default function ProjectModal({ isOpen, toggle, title, description, images }) {
    return (
        <Modal isOpen={isOpen} toggle={toggle} className="modal">
            <div className="modal-header">
                <h2>{title}</h2>
                <button onClick={toggle}>&times;</button>
            </div>
            <div className="modal-body">
                <p>{description}</p>
            </div>
        </Modal>
    );
}