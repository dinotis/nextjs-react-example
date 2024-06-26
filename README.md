# Sinié Nextjs Sample

To use this sample Apps, you need to [create an account](#create-your-sinié-account) and then upgrade your Sinié account to Corporate first.
To Upgrade your account, please navigate to this [link](https://dashboard.sinie.io/app/billing/upgrade/corporate).

To see our documentation for the REST APIs you can check out our official [documentation](https://sinie.docs.apiary.io/#reference).

If you have any questions please kindly check our [FAQ](https://sinie.io/faq)


## Prerequisites

1. [Node JS](https://nodejs.org/en/)
2. [Sinié Account](https://dashboard.sinie.io/auth/login)
3. [Sinié Credentials](#setup-your-api-key) (Instructions below)
    1. User ID
    2. API Key


## Getting started

Open your terminal:

```bash
# Clone this repository
git clone git@github.com:dinotis/nextjs-react-example.git

# navigate into the cloned project directory
cd nextjs-react-example

# run NPM to install the app dependencies
npm install
```


### Create your Sinié Account

In your web browser, navigate to your [Sinié Account](https://dashboard.sinie.io/auth/login) and register/log into your account.

For this sample app to work, you need an API Key, then if you want to generate an API Key you need to upgrade your account to Corporate.


### Setup your API Key

In your web browser, navigate to [API Key section](https://dashboard.sinie.io/app/api-keys)

If you don't have an API Key, create an API Key first by clicking "Create Key".

1. Name your API Key
2. Click "Reveal" to see your API Key that already created
3. Copy you API Key to use it


### Setup Other Config

After obtaining the API Key, don't forget to copy and use the `User ID` and the `Base URL` to the `.env` file.

You can check the instructions below.


### Setup the .env file

Open the `.env` file in your text editor and enter the following information

```ini
NEXT_PUBLIC_API_URL=[base-url]

# User ID from the API Keys page
BASIC_AUTH_USERNAME=[user-id]

# Your API Key
BASIC_AUTH_PASSWORD=[api-key]
```


## Start the App

### Development

Run the `dev` npm script to start in development mode.

```shell
npm run dev
```
