import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [proposals, setProposals] = useState([]);
  const [user, setUser] = useState(null);

  // Simulated data for proposal list
  const sampleProposals = [
    { id: 1, title: "Proposal 1", description: "Description for Proposal 1" },
    { id: 2, title: "Proposal 2", description: "Description for Proposal 2" },
  ];

  // Simulated user data
  const sampleUser = {
    username: "john_doe",
    address: "0x1234abcd5678efgh",
    // Add more user data here
  };

  useEffect(() => {
    // Fetch proposals from the blockchain or API
    // web3.js to interact with smart contracts
    setProposals(sampleProposals);

    // Fetch user data or check user authentication
    // Metamask for Ethereum authentication
    setUser(sampleUser);
  }, []);

  return (
    <div className="home-page">
      <header>
        <h1> Welcome to the DAO Voting Platform</h1>
      </header>

      <section className="user-section">
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>
            <p> Your Ethereum address: {user.address}</p>
          </div>
        ) : (
          <p>
            {" "}
            Please log in using Metamask or your preferred Ethereum wallet.
          </p>
        )}
      </section>

      <section className="proposals-section">
        <h2> Proposals </h2>
        <ul>
          {proposals.map((proposal) => (
            <li key={proposal.id}>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
            </li>
          ))}
        </ul>
        {user && (
          <button onClick={() => console.log("Creating proposal")}>
            Create a New Proposal
          </button>
        )}
      </section>
    </div>
  );
};

export default HomePage;
