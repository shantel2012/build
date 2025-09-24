import React from "react";
import "./Contact.css";

export default function JobPost() {
  return (
    <section className="jobpost">
      <div className="jobpost-header">
        <span className="tag">Job post</span>
        <h2>
          Post a <span className="highlight">Job Request</span>
        </h2>
      </div>

      <div className="jobpost-body">
        {/* Left side form */}
        <form className="jobpost-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Age" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Location" />
          </div>
          <div className="form-row">
            <textarea placeholder="Detailed Description"></textarea>
          </div>
          <button type="submit" className="btn-post">Post now</button>
        </form>

        {/* Right side job details */}
        <div className="jobpost-details">
          <h3>Job Details</h3>
          <ul>
            <li>Department</li>
            <li>Job Type</li>
            <li>Offered Salary</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
