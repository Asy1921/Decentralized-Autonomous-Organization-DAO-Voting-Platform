// Proposal.sol
pragma solidity ^0.8.0;

contract Proposal {
    string public title;
    string public description;
    address public creator;
    bool public executed;
    uint256 public yesVotes;
    uint256 public noVotes;
    mapping(address => bool) public hasVoted;

    constructor(string memory _title, string memory _description) public {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        title = _title;
        description = _description;
        creator = msg.sender;
        executed = false;
    }

    function vote(bool _voteYes) public {
        require(!executed, "Proposal has already been executed");
        require(!hasVoted[msg.sender], "You have already voted");

        if (_voteYes) {
            yesVotes++;
        } else {
            noVotes++;
        }

        hasVoted[msg.sender] = true;
    }

    function executeProposal() public {
        require(!executed, "Proposal has already been executed");
        executed = true;
    }

    function getProposalData()
        public
        view
        returns (string memory, string memory, address, bool, uint256, uint256)
    {
        return (title, description, creator, executed, yesVotes, noVotes);
    }
}
