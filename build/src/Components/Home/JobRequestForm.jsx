import React from "react";
import "./JobRequestForm.css";

const JobRequestForm = () => {
  return (
    <section className="job-request">
      <h2>Post a Job Request</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Location" />
        </div>
        <textarea placeholder="Job Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default JobRequestForm;
