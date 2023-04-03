import React from 'react';
import { Logo } from '../components/React_logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Button, FormControl, Nav, Navbar, Container, NavbarBrand, NavLink, Form } from 'react-bootstrap';

function Header() {
   return (
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
         <Container>
            <NavbarBrand href='/'>
               <img src={Logo}
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
               <Form inline>
                  <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                  <Button variant='outline-info'>Search</Button>
               </Form>
            </NavbarCollapse>
         </Container>
      </Navbar>
   )
}

export default Header