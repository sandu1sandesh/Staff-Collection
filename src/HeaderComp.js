import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
const HeaderComp = () =>{
	return(
	  <section id="header">
      <Container>
      	<Row>
				  <Col>
					  <Navbar expand="md" bg="dark" variant="dark" fixed="top">
					    <Container>
					    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    						<Navbar.Collapse id="basic-navbar-nav">
						      <Nav className="me-auto">
							      <Nav.Link >Dashboard</Nav.Link>
							      <Nav.Link >Our Agency</Nav.Link>
							      <Nav.Link active>Our Staff</Nav.Link>
							      <Nav.Link >Locations</Nav.Link>
							      <Nav.Link >Latest</Nav.Link>
							      <Nav.Link >Upcoming</Nav.Link>
							      <Nav.Link >Resources</Nav.Link>
							      <Nav.Link >Your Stein IAS</Nav.Link>
							    </Nav>
							  </Navbar.Collapse>
					    </Container>
					  </Navbar>
					</Col>
				</Row>
			</Container>
    </section>
	  )
};



export default HeaderComp;
