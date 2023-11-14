import React from "react";
import "./agent.css";
import agents from "./agentcard";




const Agent = () => {
  return (
    <div className="main-agent">
      <div className="head-agent">
        <div>
          <h4>View All Agents</h4>
          <h1>Meet Properties Agents</h1>
        </div>
        <div>
          <button>See All Agents</button>
        </div>
      </div>
      <div className="main-card">
      {agents.map( agent => (

      <div className="agent-card">
        <div className="img-wrap">
          <img src={agent.imagePath} alt="agent" />
          <div className="hover-icon">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="img-content">
          <h2>vengadesh</h2>
          <p>Finance Expert</p>
        </div>
      </div>
      
      ))}
      </div>
    </div>
  );
};

export default Agent;
