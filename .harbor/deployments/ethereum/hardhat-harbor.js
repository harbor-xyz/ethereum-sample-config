
require("hardhat/config");
require("hardhat/builtin-tasks/task-names");
module.exports = task("custom").setAction(async (args, hre, runSuper) => {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  let { exec } = require("child_process");
  const server = await hre.run("node", {
    launch: true,
	hostname: "0.0.0.0",
    port: 4000,
  });
  console.log("OUTSIDE SERVER");
  console.log(server._anvil);

  server._server._anvil.on("spawn", async (data) => {
    await sleep(2000);
    exec("npx hardhat deploy --reset", async (data) => {
	  let script

      console.log("RUNNING DEPLOY");
      console.log(data);
		require("./afterDeploy/afterDeploy1.js");
require("./afterDeploy/afterDeploy2.js");

script = exec('sh ./afterDeploy/afterDeploy3.sh');
script.stdout.on('data', (data)=>{
    console.log(data); 
});
script.stderr.on('data', (data)=>{
    console.error(data);
});



script = exec('sh ./afterDeploy/afterDeploy4.sh');
script.stdout.on('data', (data)=>{
    console.log(data); 
});
script.stderr.on('data', (data)=>{
    console.error(data);
});



    });
  });
  await server.waitUntilClosed();
});

