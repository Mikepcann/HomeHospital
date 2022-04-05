import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import moment from "moment";
import axios from "axios";
import hb1 from "../images/heartbeat-bg.png";
import profile from "../images/img_avatar.png";
import "../styles/UserHomepage.css";

axios.defaults.withCredentials = true;

function UserHomeDisplay() {
  moment.locale("en");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/users/PatientInfoVisitRequest", {
        withCredentials: true,
      })
      .then((response) => {
        setFirstName(response.data.data.user.firstName);
        setLastName(response.data.data.user.lastName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container className="container-display">
        <Row>
          <Col>
            <img
              src={hb1}
              alt="heartbeat-logo-1"
              className="img-fluid heartbeat-logo-1"
            />
            <img
              src={profile}
              alt="profile_photo"
              className="user-profile-photo"
            />
            <span className="greetings">
              <h1>
                {firstName} {lastName}
              </h1>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserHomeDisplay;
