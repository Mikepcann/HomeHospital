import React, { Component, useState, useEffect, useContext } from "react";
import logo from "../images/heartbeat.png";
import profile from "../images/profilepicture.png";
import hbar from "../images/hb2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/SymptomForm.css";
import "../styles/PractionerStyles.css";
import axios from "axios";
import { HomeHospitalContext } from "./HomeHospitalContext";


export class PractitionerPatientInfo extends Component {
  render() {
	  //   const { patient_id } = useContext(HomeHospitalContext);
//   const [patientID] = patient_id;

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [HCNumber, setHCNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [emergFirstName, setEmergFirstName] = useState("");
//   const [emergLastName, setEmergLastName] = useState("");
//   const [emergPhoneNumber, setEmergPhoneNumber] = useState("");

//   useEffect(() => {
//     axios
//       .post("http://localhost:4000/api/users/PatientInfoVisitRequest", {
//         patientId: patientID,
//       })
//       .then((response) => {
//         setFirstName(response.data.data.user.firstName);
//         setLastName(response.data.data.user.lastName);
//         setPhoneNumber(response.data.data.user.phoneNumber);
//         setHCNumber(response.data.data.HCnumber);
//         setEmergFirstName(response.data.data.emergencyContact.firstName);
//         setEmergLastName(response.data.data.emergencyContact.lastName);
//         setEmergPhoneNumber(response.data.data.emergencyContact.phoneNumber);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const timeElapsed = Date.now();
//   const today = new Date(timeElapsed);

//   const formatDate = today.toDateString();
return (
    <>
      <Container className="patient-container">
        <Row>
          <Col></Col>
          <Col>
            <img src={profile} alt="profilePic" className="profilepic" />
          </Col>
          <Col md={8}>
            <div className="practitioner-patientRequestDetails">
              <h3>
				  Kanye West
                {/* {firstName} {lastName} */}
              </h3>
              {/* <p>Visit request #45</p> */}
              {/* <p>{formatDate}</p> */}
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div className="practitioner-patientDetails">
				<h4>Patient Details</h4>
              {/* <h4>Confirmed Patient Details </h4> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="patient-contactDetails">
			  <p>Address: 123 MyHouse</p>
			  <p>Contact Number: (403) 223-2311</p>
			  <p>Emergency Contact Name:Pete Davidson</p>
			  <p>Emergency Contact No:(403) 443-2312</p>
			  <p>Alberta Health Care no: 12345-0000</p>
			  <p>Symptoms: Broken Leg (Severity: 3)</p>
			  <p>Place in queue: 1</p>
            {/* <p>Contact number: {phoneNumber}</p>
            <p>Alberta Health Care no: {HCNumber}</p> */}
            {/* <p>
              Emergency contact name: {emergFirstName} {emergLastName}
            </p>
            <p>Contact contanct number: {emergPhoneNumber}</p> */}
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div className="hbar-div">
              <img src={hbar} alt="heartbeat bar" className="hb-bar" />
            </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
  }
}

export default PractitionerPatientInfo;

