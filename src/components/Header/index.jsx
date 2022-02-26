import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              className='header__link header__title'
              href='https://youtube.com/easyfrontend'
              target='_blank'
              rel='noopener noreferrer'
            >
              Easy Frontend
            </a>
          </Col>

          <Col xs='auto'>
            <NavLink className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')} to='/photos' end>
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
