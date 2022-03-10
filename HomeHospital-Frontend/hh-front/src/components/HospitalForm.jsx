import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { renderMatches, useNavigate } from "react-router-dom";
import { HomeHospitalContext } from "./HomeHospitalContext";
import "../styles/HospitalSelectionStyles.css";

function SelectHospital() {
  //useContext here
  const { _id } = useContext(HomeHospitalContext);

  const [posts, setPosts] = useState([]);
  //grab the states of use context for the _id
  const [_idValue, set_idValue] = _id;
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:4000/api/medicalFacility/viewFacilities").then(
      (response) => {
        console.log(response.data);
        setPosts(response.data);
      }
    );
  }, []);

  // onChange={(event) => setEmail(event.target.value)}

  function test(e) {
    //set_idValue(e.target.value);
    alert("test + " + _idValue);
    navigate("/symptoms");
  }
  return (
    <>
      <Container className="hospitalList-container">
        <Row>
          <div className="hospitalList-title">
            <p>Select Hospital</p>
          </div>
        </Row>
        <Row>
          {posts.hospitalList?.map((post) => (
            <Form key={post._id}>
              <div className="listOfHospitals">
                <h2>{post.hospitalName}</h2>
                <p>{post.waitTime}</p>
                <p>
                  {post.address.streetAddress}, {post.address.cityName}
                </p>
                <input
                  type="hidden"
                  id="hospital"
                  value={post.hospitalName}
                ></input>
                <Button
                  id="btn"
                  onClick={(event) => set_idValue(event.target.value)}
                  value={post._id}
                >
                  Select
                </Button>
              </div>
              <Button onClick={test}>Submit</Button>
            </Form>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SelectHospital;
