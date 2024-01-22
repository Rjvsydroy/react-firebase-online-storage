import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SideMenu from '../../components/SideMenu';
import ProductList from '../../components/ProductList';
import AddProductModal from '../../components/AddProductModal';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';
import EditProductModal from '../../components/EditProductModal';

const Home = () => {
    const [products, setProducts] = useState([
        // ... (les produits existants)
      ]);
    
      const [editingProduct, setEditingProduct] = useState(null);
      const [showAddModal, setShowAddModal] = useState(false);
      const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
      const [selectedProductId, setSelectedProductId] = useState(null);
      const [showEditModal, setShowEditModal] = useState(false);
    
      const handleAddProduct = newProduct => {
        setProducts([...products, { ...newProduct, id: new Date().getTime() }]);
        setShowAddModal(false);
      };
    
      const handleUpdateProduct = updatedProduct => {
        setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
        setEditingProduct(null);
      };
    
      const handleDeleteProduct = productId => {
        setSelectedProductId(productId);
        setShowDeleteConfirmation(true);
      };
    
      const handleConfirmDelete = () => {
        setProducts(products.filter(product => product.id !== selectedProductId));
        setSelectedProductId(null);
        setShowDeleteConfirmation(false);
      };
    
      const handleCancelDelete = () => {
        setSelectedProductId(null);
        setShowDeleteConfirmation(false);
      };
    
      const handleEditProduct = productId => {
        const productToEdit = products.find(product => product.id === productId);
        setEditingProduct(productToEdit);
        setShowEditModal(true);
      };
    
      const handleCancelEdit = () => {
        setEditingProduct(null);
        setShowEditModal(false);
      };
    
      const handleSaveEdit = updatedProduct => {
        setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
        setEditingProduct(null);
        setShowEditModal(false);
      };
    
    return(
        <div>
      <style>
        {`
          body {
            background-color: #E8EDE9;
          }

          .content-container {
            background-color: #ffff;
            min-height: 100vh;
          }

          .navbar-container {
            background-color: #975C12;
            color: white;
          }

          .footer-container {
            background-color: #975C12;
            color: white;
            padding: 20px;
            text-align: center;
            font-family: Eczar;
            font-size: 1.3rem;
          }

          .footer-logo {
            width: 30px;
            height: 30px;
            margin: 0 10px;
            cursor: pointer;
          }

          .underline {
            text-decoration: underline;
          }
        `}
      </style>

      <Navbar className="navbar-container" expand="lg" fixed="top">
        <Navbar.Brand style={{ fontFamily: 'Eczar', fontSize: '2rem', fontWeight: 'bold', color: 'white' }} href="#home">
          <img
            src="/JV-Unity-logo-no-bg.png"
            width="70"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' JV Unity'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
        </Navbar.Collapse>
      </Navbar>

      <div className="container-fluid mt-9 content-container">
        <div className="row">
          <div className="col-md-2 bg-light" >
            <SideMenu onAddClick={() => setShowAddModal(true)} />
          </div>
          <div className="col-md-10">
            <h1>Gestion des Produits</h1>
            <ProductList
              products={products}
              onUpdate={handleEditProduct}
              onDelete={handleDeleteProduct}
              
            />
          </div>
        </div>
        
        <AddProductModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onAdd={handleAddProduct}
        />
        <DeleteConfirmationModal
          show={showDeleteConfirmation}
          onHide={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
        <EditProductModal
          show={showEditModal}
          onHide={handleCancelEdit}
          onSave={handleSaveEdit}
          product={editingProduct}
        />

        <div className="footer-container">
        <p className="underline">1-343-262-3146</p>
          <p>travailmon497@gmail.com</p>
          <p>
            129 rue de Londres <br/>
            Gatineau, J9J 0G5 </p>

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-logo.png" alt="Facebook" className="footer-logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-logo.png" alt="Instagram" className="footer-logo" />
          </a>
        </div>
      </div>
    </div>
    );
};

export default Home;