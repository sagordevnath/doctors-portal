import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-primary">Contact Us</h1>
          <p className="mb-5 text-3xl">Stay connected with us</p>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <div className="form-control">                
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">                
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />                
              </div>
              <div className="form-control">                
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                />                
              </div>
              <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
