// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract User {
    struct UserInfo {
        string username;
        bool hasVoted;
    }

    mapping(address => UserInfo) public users;
    mapping(string => bool) public usernameExists;

    function registerUser(string memory _username) public {
        require(!usernameExists[_username], "User already registered");
        users[msg.sender] = UserInfo(_username, false);
        usernameExists[_username] = true;
    }

    function markVoted() public {
        require(users[msg.sender].hasVoted == false, "User has already voted");
        users[msg.sender].hasVoted = true;
    }
}
