import React,{Fragment, useState} from 'react';
import { Row, Col} from 'react-bootstrap';

import staffImg from './staff.png';
import IndividualData from './IndividualData';

const StaffInitData = ({staffData=[]}) => {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [selectedId,setselectedId] = useState('');
  const setModalIsOpenToTrue =(event)=>{
      setModalIsOpen(true)
      setselectedId(parseInt(event.currentTarget.dataset.id))
  }
  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  return (
    <Fragment>
    { staffData.map((item,index) => {
        let addCls;
        let addText;
        if(index%4 === 0) {
          addCls = "firstChild"
          addText = "San"
        } else if(index%4 === 1) {
          addCls = "secondChild"
          addText = "NYC"
        } else if(index%4 === 2) {
          addCls = "thirdChild"
          addText = "Lond"
        } else if(index%4 === 3) {
          addCls = "fourthChild"
          addText = "Man"
        }
        if (item) {
          return (
            <Col md={3} xs={12} key={item.id}>
              <Row className ="staff-data" >
                <Col md={12} xs={4} className={`staff-member-pic ${addCls}`}>
                  <div className={`heading ${addCls}`}>{addText}</div>
                  <img src={staffImg} className="" alt="Staff" width="100%"/>
                </Col >
                <Col md={12} xs={8} className="staff-member-details">
                  <h4>{item.name}</h4>
                  <h6>{item.jobTitle}</h6>
                  <button onClick={setModalIsOpenToTrue} data-id={item.id} className ={`staff-more-info ${addCls}`} ><span>...</span></button>
                  
                </Col>
              </Row>
            </Col>
    	   )	
    	 }
    	 return null
    }) }
      <IndividualData isOpen={modalIsOpen} closeModal={setModalIsOpenToFalse} selectdIdNo={selectedId} allStaffData = {staffData}/>
    </Fragment>
  );
}

export default StaffInitData