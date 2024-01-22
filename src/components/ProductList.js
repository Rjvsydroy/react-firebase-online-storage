import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ProductList = ({ products, onUpdate, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Numéro de référence</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Catégorie</th>
          <th>Emplacement</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.referenceNumber}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.category}</td>
            <td>{product.location}</td>
            <td>
              <Button variant="primary" onClick={() => onUpdate(product.id)}>
                Modifier
              </Button>
              <Button variant="danger" onClick={() => onDelete(product.id)}>
                Supprimer
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
