const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
    it("has been deployed successfully",async()=>{
        const greeter = await GreeterContract.deployed();
        assert(greeter,"Contract was not deployed");
    });
});

/**
 * Every interaction with the block chain is asynchronous, hence the use of the async/await syntax
 */