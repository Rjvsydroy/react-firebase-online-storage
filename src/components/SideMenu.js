import React from 'react';
import { Nav } from 'react-bootstrap';

const SideMenu = ({ onAddClick }) => {
  return (
    <div style={{ minHeight: '100vh'}}>
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link onClick={onAddClick}>Ajouter</Nav.Link>
        </Nav>
    </div>
  );
};

export default SideMenu;