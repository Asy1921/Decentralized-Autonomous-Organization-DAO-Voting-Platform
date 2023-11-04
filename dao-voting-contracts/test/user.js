// test/User.test.js
const User = artifacts.require("User");

contract("User", (accounts) => {
  let userContract;

  before(async () => {
    userContract = await User.new({ from: accounts[0] });
  });

  it("should register users with unique usernames", async () => {
    await userContract.registerUser("alice", { from: accounts[1] });
    await userContract.registerUser("bob", { from: accounts[2] });

    const [username1, hasVoted1] = await userContract.getUserInfo(accounts[1]);
    const [username2, hasVoted2] = await userContract.getUserInfo(accounts[2]);

    assert.equal(username1, "alice", "Username of the first user is incorrect");
    assert.equal(username2, "bob", "Username of the second user is incorrect");
    assert.equal(hasVoted1, false, "User's voting status is incorrect");
    assert.equal(hasVoted2, false, "User's voting status is incorrect");
  });

  it("should prevent registering users with the same username", async () => {
    await userContract.registerUser("charlie", { from: accounts[3] });

    try {
      await userContract.registerUser("alice", { from: accounts[4] });
      assert.fail("Registering with the same username should fail");
    } catch (error) {
      assert.include(
        error.message,
        "User already registered",
        "Expected 'User already registered' error"
      );
    }
  });

  it("should mark users as voted", async () => {
    await userContract.registerUser("dave", { from: accounts[5] });
    await userContract.markVoted(accounts[5]);

    const [username, hasVoted] = await userContract.getUserInfo(accounts[5]);
    assert.equal(
      hasVoted,
      true,
      "User's voting status should be true after marking as voted"
    );
  });

  it("should not allow marking users as voted more than once", async () => {
    await userContract.registerUser("eve", { from: accounts[6] });
    await userContract.markVoted(accounts[6]);

    try {
      await userContract.markVoted(accounts[6]);
      assert.fail("Marking as voted more than once should fail");
    } catch (error) {
      assert.include(
        error.message,
        "User has already voted",
        "Expected 'User has already voted' error"
      );
    }
  });
});
