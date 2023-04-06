import React from 'react';
import logo from '../components/React_logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, FormControl, NavbarBrand, NavLink, Form } from 'react-bootstrap';
import './header.css';

function Header() {
   return (
      <>
         <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Container>
               <NavbarBrand href='/'>
                  <img src={logo}
                     height='30'
                     width='30'
                     className='d-inline-block align-top'
                     alt='Logo'
                  />
               </NavbarBrand>
               <NavbarToggle aria-controls='responsive-navbar-nav' />
               <NavbarCollapse id='responsive-navbar-nav'>
                  <Nav className='mr-auto'>
                     <NavLink href='/'>Home</NavLink>
                     <NavLink href='/about'>About Us</NavLink>
                     <NavLink href='/contacts'>Contacts</NavLink>
                     <NavLink href='/blog'>Blog</NavLink>
                  </Nav>
                  <Form className='form'>
                     <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                     <Button variant='outline-info'>Search</Button>
                  </Form>
               </NavbarCollapse>
            </Container>
         </Navbar>
      </>
   )
}

export default Header