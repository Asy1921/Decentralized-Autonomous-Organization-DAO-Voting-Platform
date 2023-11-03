# Decentralized Autonomous Organization (DAO) Voting Platform

**Project Overview:**

A web-based decentralized voting platform for DAOs, where members can propose, discuss, and vote on decisions in a secure and transparent manner.

**Key Features:**

- User registration and authentication.
- Smart contracts for secure voting and proposal management.
- Discussion boards for each proposal.
- Real-time voting results and proposal status.
- Notification system for important updates.

**Tech Stack:**

- Frontend: React.js, Redux, React Router.
- Backend: Node.js, Express.js, MongoDB.
- Smart Contracts: Ethereum.
- Authentication: OAuth.

**Note** This is a work in progress, please reach out if you wish to collaborate!

<!--
**Installation:**

1. Clone the repository:

```
git clone https://github.com/your-username/dao-voting-platform.git
```

2. Install dependencies for the frontend and backend:

```
cd dao-voting-frontend
npm install
cd ..
cd dao-voting-backend
npm install
```

**Usage:**

1. Start the backend server:

```
cd dao-voting-backend
npm start
```

2. Start the frontend development server:

```
cd dao-voting-frontend
npm start
```

The application should now be accessible at `http://localhost:3000`.

**How to Contribute:**

We welcome contributions from the open-source community. If you'd like to contribute to the project, please follow these steps:

1. Fork the project on GitHub.
2. Create a new branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push them to your fork:
   ```
   git commit -m "Add your message here"
   git push origin feature/your-feature-name
   ```
4. Create a pull request on the main repository, explaining the changes you made.

**Contributors:**

- Your Name (GitHub Profile Link)

**License:**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Acknowledgments:**

- Mention any libraries, tutorials, or resources that you found helpful.

**Contact:**

- If you have any questions or need assistance, please contact [your email address].

--- -->

Data Storing
Data to Store on the Blockchain:

Proposal Data: Core data related to proposals, including:

Proposal title and description.
Proposal creator (user's Ethereum address).
Number of "yes" and "no" votes.
Proposal status (e.g., pending, approved, rejected).
Proposal execution status.
Voting Data: Information about individual votes, such as:

User's Ethereum address.
Proposal being voted on.
Vote choice ("yes" or "no").
Timestamp of the vote.
User Authentication: Storing user identities, which are represented by their Ethereum addresses, is a common use of the blockchain. However, sensitive user data is typically not stored on the blockchain but is instead verified and linked to blockchain identities.

Data to Store in MongoDB (or a Traditional Database):

User Profiles: Sensitive user data and additional profile information should be stored in MongoDB. This data can include:

Username.
Email.
Password hashes (for authentication).
User roles (e.g., member, admin).
Profile information (e.g., full name, profile picture, contact information).
Historical Voting Data: A record of all votes cast in the past, including details such as:

User's Ethereum address.
Proposal voted on.
Vote choice ("yes" or "no").
Timestamp of the vote.
Proposal Descriptions and Additional Information: Proposal descriptions and any additional metadata about proposals that are too large or dynamic to store on the blockchain, such as:

Detailed descriptions of proposals.
Attachments or files related to proposals.
Tags or categories for proposals.
Proposal comments or discussions.
System Logs and Application State: Information about the application's state, logs, and other non-critical data related to system operations and user interactions.

In summary, the blockchain is primarily used for managing the core DAO operations, such as proposal creation, voting, and execution, as well as user authentication through Ethereum addresses. MongoDB or a traditional database complements the blockchain by storing sensitive user data, historical voting data, rich proposal descriptions, and other non-essential application data. This hybrid approach ensures data security, scalability, and optimal use of resources in your DAO Voting Platform.
