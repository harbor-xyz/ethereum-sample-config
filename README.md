# Harbor Testnet with Ethereum and GraphQL

This is to demonstrate configuring, building and running a sample Testnet with an Ethereum chain and a GraphQL Node. Clone this repo and follow along.

## Copy credentials

### User Key
On your home page, you should be able to copy your User Key which is found on the top right of the page.

### Project Key
In your projects page, each project has a Project Key that you can copy.

## Configure your credentials

Run the command:

```bash
harbor configure keys
```

This will ask you to add in your credentials, which includes your User Key and Project Key. Find them in the app and paste them here.

## Start Testnet

To run the Testnet, execute the following command in the same directory as this project:

```bash
harbor apply <testnet-name>
```
Where `<testnet-name>` is a Testnet name of your choosing.

You should see this:

```bash
Checking ~/.harbor.key for your credentials
Validating testnet name...
Configuring chain...
Configuring off-chain actor graphQLNode
```

At the end of the logs, you should see your chain and off-chain actors with endpoints:

```bash
These are your running processes and their ports
ethereum
3.91.12.13:4000

graphQLNode
3.91.12.13:5432
```

You can now interact with them using the endpoints.
