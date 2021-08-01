import React from 'react';
import { Container, Form, FormControl, Button, Row, Col, InputGroup } from 'react-bootstrap';
const StaffDirectory = () => {
	return(
		<section id="staff-details" >
			<section id="staff-heading" >
				<Container>
					<Row>
				    <Col md="8" xs="10">
							<h2>Staff Directory</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aenean euismod bibendum laoreet.</p>
						</Col>
					</Row>
				</Container>
			</section>
			<section id="staff-filter" >
			
			</section>
			<section id="staff-members" >
				<Container>
				  <Row>
				  	<Col md={3}>
						</Col>
					</Row>
		   </Container>
			</section>
		</section>
		)
}

export default StaffDirectory;


