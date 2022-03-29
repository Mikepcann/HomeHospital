import React, { useState, createContext } from "react";

export const HomeHospitalContext = createContext();

export const HomeHospitalProvider = (props) => {
  const [_id, set_id] = useState();
  const [newRequest, setNewRequest] = useState(false);
  const [isCurrentRequest, setIsCurrentRequest] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [requestId, setRequestId] = useState();
  const [regSuccess, setRegSuccess] = useState(false);

  return (
    <HomeHospitalContext.Provider
      value={{
        _id: [_id, set_id],
        newRequest: [newRequest, setNewRequest],
        latitude: [latitude, setLatitude],
        longitude: [longitude, setLongitude],
        requestId: [requestId, setRequestId],
        isCurrentRequest: [isCurrentRequest, setIsCurrentRequest],
        regSuccess: [regSuccess, setRegSuccess],
      }}
    >
      {props.children}
    </HomeHospitalContext.Provider>
  );
};
