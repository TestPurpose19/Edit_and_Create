import axios from "axios";
import React, { useState, useEffect } from "react";
import Headers from "../Heders/Headers";
import { useNavigate } from "react-router-dom";

const Get = () => {
  const navigate = useNavigate();
  const [getData, setGetData] = useState([]);
  const screenData = async () => {
    const response = await axios.get(
      "https://63209503e3bdd81d8efdb0f9.mockapi.io/student"
    );
    // console.log(response.data);
    setGetData(response.data);
  };
  useEffect(() => {
    screenData();
  }, []);
  const handleEdit = (id) => {
    //console.log(id);
    navigate(`/edit/${id}`);
  };
  return (
    <div>
      <Headers />
      {getData.map((row) => (
        <div
          key={row.id}
          className="card"
          style={{
            width: "18rem",
            display: "flex",
            flexDirection: "row",
            float: "left",
          }}
        >
          {/* <div className="container">
            <div className="row">
              <div className="col-md-4,col-lg-12,col-sm-6"> */}
              <div className="card-body">
                <h5 className="card-title">{row.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  name : {row.name}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Email : {row.email}
                </h6>
                <button onClick={(id) => handleEdit(row.id)}>Edit</button>&nbsp;
                <button>delete</button>
              </div>
            </div>
          /* </div>
        </div>
        </div> */
      ))}
    </div>
  );
};

export default Get;
