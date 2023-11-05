// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract User {
    struct UserInfo {
        string username;
        bool hasVoted;
    }

    mapping(address => UserInfo) public users;  

    event UserRegistered(address indexed user, string username);

    constructor() {
        // Constructor can be used to set initial configuration.
    }

    function registerUser(string memory _username) public {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(users[msg.sender].username).length == 0, "User already registered");
        
        users[msg.sender] = UserInfo({username: _username, hasVoted: false});
        emit UserRegistered(msg.sender, _username);
    }

    function getUserInfo(address _userAddress) public view returns (string memory, bool) {
        return (users[_userAddress].username, users[_userAddress].hasVoted);
    }
}

