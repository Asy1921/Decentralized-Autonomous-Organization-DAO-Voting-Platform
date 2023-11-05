// test/Proposal.test.js
const Proposal = artifacts.require("Proposal");

contract("Proposal", (accounts) => {
  let proposal;

  before(async () => {
    proposal = await Proposal.new(
      "Sample Proposal",
      "This is a sample proposal",
      {
        from: accounts[0],
      }
    );
  });
  it("should have the correct initial properties", async () => {
    const title = await proposal.title();
    const description = await proposal.description();
    const creator = await proposal.creator();

    assert.equal(title, "Sample Proposal", "Title does not match");
    assert.equal(
      description,
      "This is a sample proposal",
      "Description does not match"
    );
    assert.equal(creator, accounts[0], "Creator does not match");
  });

  it("should allow voting and update vote counts", async () => {
    await proposal.vote(true, { from: accounts[1] });
    await proposal.vote(false, { from: accounts[2] });

    const yesVotes = (await proposal.yesVotes()).toNumber();
    const noVotes = (await proposal.noVotes()).toNumber();

    assert.equal(yesVotes, 1, "Yes votes count is incorrect");
    assert.equal(noVotes, 1, "No votes count is incorrect");
  });

  it("should not allow voting on executed proposals", async () => {
    await proposal.executeProposal();

    try {
      await proposal.vote(true, { from: accounts[3] });
      assert.fail("Voting on an executed proposal should fail");
    } catch (error) {
      assert.include(
        error.message,
        "Proposal has already been executed",
        "Expected 'Proposal has already been executed' error"
      );
    }
  });
});
