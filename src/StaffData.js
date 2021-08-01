import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import StaffInitData from './StaffInitData';

const StaffData = (props) => {
  const [input, setInput] = useState('');
  const [defaultData, setdefaultData] = useState();
  const [data,setData]=useState([]);


  const handleSearch = (input) => {
     const filtered = defaultData.filter(item => {
      return item.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input)
     setData(filtered)
  }


  const getData= ()=>{
    fetch('../data/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);
        setdefaultData(myJson)
      });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <section id="staff-details" >
			<section id="staff-heading" >
				<Container>
					<Row>
				    <Col md="5" xs="12">
							<h2>Staff Directory</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
						</Col>
					</Row>
				</Container>
			</section>
			<section id="staff-filter" >
				<SearchBar 
	       input={input} 
	       onChange={handleSearch}
	      />
			</section>
			<section id="staff-members" >
				<Container>
					<Row>
						<Col>
						  `<h3>Showing {data.length} colleague(s)</h3>`
						</Col>
					</Row>
				  <Row>
				  		<StaffInitData  staffData={data} />
					</Row>
		   </Container>
			</section>
		</section>
  );
}

export default StaffData;