import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Card,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);

    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      isNavOpen: false,
      isLoginOpen: false,
      isRegisterOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  toggleRegister() {
    this.setState({
      isRegisterOpen: !this.state.isRegisterOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();
  }

  handleRegister(event) {
    this.toggleRegister();
    alert("Username: " + this.username.value + " Email: " + this.email.value
      + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container-fluid  m-2">
            
              <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="fa fa-diner fa-md mx-3" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /> </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='col-10' navbar>
               <NavItem>
                  <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
              </Nav>
              <Nav className='col-2' navbar>
                
                <NavItem className='mx-1 my-2'>
                  <Button onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </NavItem>
                <NavItem className=' my-2'>
                  <Button onClick={this.toggleRegister}><span className="fa fa-user-plus fa-lg"></span> Register </Button>
                </NavItem>
                
              </Nav>
            </Collapse>
            
          </div>
        </Navbar>
        <Card className='Highlighter'>
          <div className="container-fluid">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.isRegisterOpen} toggle={this.toggleRegister}>
          <ModalHeader toggle={this.toggleRegister}>Register</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleRegister}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" name="email"
                  innerRef={(input) => this.email = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Register</Button>
            </Form>
          </ModalBody>
        </Modal>

      </React.Fragment>
    );
  }
}

export default Header;
