import React from 'react';
import { Dropdown } from 'react-bootstrap';  // Importa il componente Dropdown
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa il CSS di Bootstrap

function MyHeader() {
  return (
    <div className="d-flex justify-content-between">
      {/* Sezione "TV Shows" con dropdown */}
      <div className="d-flex">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <div className="btn-group" role="group">
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle 
              variant="secondary" 
              size="sm" 
              className="rounded-0"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
