import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmationModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de Suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Voulez-vous vraiment supprimer cet article ? Cette action est irréversible.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onConfirm}>
          Supprimer
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;