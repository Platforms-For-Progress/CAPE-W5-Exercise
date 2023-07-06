import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      alert(`Submission successful:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
