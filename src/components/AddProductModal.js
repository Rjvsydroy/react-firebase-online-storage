// src/components/AddProductModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddProductModal = ({ show, onHide, onAdd }) => {
  const [formData, setFormData] = useState({
    referenceNumber: '',
    name: '',
    price: '',
    quantity: 0,
    category: '',
    location: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onAdd(formData);
    setFormData({
      referenceNumber: '',
      name: '',
      price: '',
      quantity: 0,
      category: '',
      location: '',
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="referenceNumber">
            <Form.Label>Numéro de référence</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le numéro de référence"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Prix</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le prix"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantité</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez la quantité"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez la catégorie"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Emplacement</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez l'emplacement"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Ajouter
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Annuler
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
