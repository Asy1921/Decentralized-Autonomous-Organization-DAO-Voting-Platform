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

    const [aliceInfo, bobInfo] = await Promise.all([
      userContract.users(accounts[1]),
      userContract.users(accounts[2]),
    ]);

    assert.equal(
      aliceInfo.username,
      "alice",
      "Username of the first user is incorrect"
    );
    assert.equal(
      bobInfo.username,
      "bob",
      "Username of the second user is incorrect"
    );
    assert.equal(
      aliceInfo.hasVoted,
      false,
      "User's voting status is incorrect"
    );
    assert.equal(bobInfo.hasVoted, false, "User's voting status is incorrect");
  });

  it("should prevent registering users with the same username", async () => {
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
    await userContract.markVoted({ from: accounts[5] });

    const daveInfo = await userContract.users(accounts[5]);
    assert.equal(
      daveInfo.hasVoted,
      true,
      "User's voting status should be true after marking as voted"
    );
  });

  it("should not allow marking users as voted more than once", async () => {
    try {
      await userContract.markVoted({ from: accounts[5] });
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
