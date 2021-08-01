import { Container, Row, Col,  Modal} from 'react-bootstrap';
import staffImg from './staff.png';
import Moment from 'react-moment';
import 'moment-timezone';
const IndividualData = ({isOpen, closeModal,selectdIdNo, allStaffData}) =>{
  return(
    <Modal size="lg" show={isOpen} className="staff-modal">
      <Modal.Body style={{padding:0}}>
      {
         allStaffData.map((item,index) => {
            if(item.id === selectdIdNo) {
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
              return (
                <Container>
                <Row key={item.id}>
                  <button onClick={closeModal} >X</button>
                  <Col md={5} xs={12} style={{padding:0}} className={"staff-member-pic"}>
                  <div className={`heading ${addCls}`}>{addText}</div>
                      <img src={staffImg} className="" alt="Staff" width="100%"/>
                  </Col>
                  <Col md={7} xs={12} style={{padding:0}}>
                  <br/>
                    <h4>{allStaffData[index].name}</h4>
                    <h6>{allStaffData[index].jobTitle}</h6>
                    <div className="total-exp">
                      <span> Joined <Moment fromNow >{allStaffData[index].hireDate}</Moment></span>
                      </div>
                    <div className="birth-day"><span>Birthday: </span><span className="bday">Turning <Moment fromNow ago>{allStaffData[index].birthday}</Moment> on <Moment format="MMMM DD">{allStaffData[index].birthday}</Moment></span></div>
                    <div className="contact-details">
                      <span>Email: </span><span>{allStaffData[index].email}</span><br/>
                      <span>Ph: </span><span>{allStaffData[index].mobile}</span>
                    </div>
                    <div className="desc">{allStaffData[index].jobDescription}</div>
                  </Col>
                </Row>
                </Container>
              )
            }
          
        })
      }
      </Modal.Body>
    </Modal>
    );
}

export default IndividualData;