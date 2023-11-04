// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract Proposal {
    string public title;
    string public description;
    address public creator;
    bool public executed;
    uint256 public yesVotes;
    uint256 public noVotes;

    constructor(string memory _title, string memory _description) {
        title = _title;
        description = _description;
        creator = msg.sender;
        executed = false;
    }

    function vote(bool _voteYes) public {
        require(!executed, "Proposal has already been executed");
        if (_voteYes) {
            yesVotes++;
        } else {
            noVotes++;
        }
    }
}

