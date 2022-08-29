const configFile = require("../../configFile.json");

const environmentList = ["local", "staging", "production"];
const environment = environmentList[0];

const configuration = {
  local: {
    env: "local",
    port: 3001,
    url: "http://localhost:3000",
    mongoose: {
      url: "mongodb://localhost/whizlabs", // url to connect mongodb locally
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: "local!@#",
      accessExpirationMinutes: 30,
      refreshExpirationDays: 30,
      resetPasswordExpirationMinutes: 10,
    },
    email: {
      smtp: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: configFile.email.Email,
          pass: configFile.email.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: configFile.email.Email,
    },
  },
  staging: {
    env: "staging",
    port: 3030,
    url: "",
    mongoose: {
      url: "",
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: "test!@#",
      accessExpirationMinutes: 30,
      refreshExpirationDays: 30,
      resetPasswordExpirationMinutes: 10,
    },
    email: {
      smtp: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: configFile.email.Email,
          pass: configFile.email.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: configFile.email.Email,
    },
  },
  production: {
    env: "production",
    port: 3030,
    callbackURL: "",
    url: "",
    mongoose: {
      url: "",
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: "production!@#",
      accessExpirationMinutes: 30,
      refreshExpirationDays: 30,
      resetPasswordExpirationMinutes: 10,
    },
    email: {
      smtp: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: configFile.email.Email,
          pass: configFile.email.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: configFile.email.Email,
    },
  },
};

module.exports = configuration[environment];
