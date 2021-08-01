import React from 'react';
import { Container, Form, FormControl, Row, Col } from 'react-bootstrap';
const SearchBar = ({input,onChange}) => {
  return (
    <Container>
      <Row>
        <Col md="12" xs="12" className="text-left">
          <span>Filter Colleagues</span>
        </Col>
        <Col md="4" xs="10">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 custom-search"
              aria-label="Search"
              value={input}
              onChange={(e) => onChange(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
   </Container>
   );
}




export default SearchBar