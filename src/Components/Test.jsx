import { Button } from "@mui/material";
import React from "react";
import "../App.css";

function Test() {
  return (
    <div className="container">
      <div className="mb-3 shadow-lg p-5 border-4 container mt-4" id="form">
        <label htmlFor="name" className="form-label" id="emailLabel">
          Full Name
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          aria-describedby="emailHelpId"
          placeholder="Enter full name"
          id="demo"
        />
        <br />
        <label htmlFor="email" className="form-label" id="emailLabel">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelpId"
          placeholder="Enter a valid email address"
          id="demo"
        />
        <br />
        <label htmlFor="phone" className="form-label" id="emailLabel">
          Phone
        </label>
        <input
          type="phone"
          className="form-control"
          name="phone"
          aria-describedby="emailHelpId"
          placeholder="Enter a valid phone number"
          id="demo"
        />
        <br />
        <Button variant="contained">Register</Button>
      </div>
    </div>
  );
}

export default Test;
