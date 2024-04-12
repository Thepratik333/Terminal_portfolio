import React from 'react';

function Contact() {
  return (
    <div className="contactContainer">
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">Contact Me</h1>
      <div className="terminal bg-black text-white font-mono p-4 rounded-lg">
        <div className="contact">
          <div className="flex items-center mb-2">
            <i className="mr-2 fas fa-phone-square-alt text-yellow-500"></i>
            <h1 className="text-yellow-500">Phone Number:</h1>
          </div>
          <a href="tel:+91 8000318833" className="text-white hover:underline">+91 8000318833</a>
          <div className="flex items-center mt-4">
            <i className="mr-2 fas fa-envelope text-yellow-500"></i>
            <h1 className="text-yellow-500">Email:</h1>
          </div>
          <a href="mailto:pratikpanchal858@gmail.com" className="text-white hover:underline">pratikpanchal858@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
