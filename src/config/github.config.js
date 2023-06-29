require("dotenv").config({
    path:`./.env.${process.env.NODE_ENV}`
});

module.exports = {
    clientIDGithub: process.env.CLIENT_ID_GITHUB,
    clientSecretGithub: process.env.CLIENT_SECRET_GITHUB,
    callBackUrl: process.env.CLIENT_CALLBACK_URL
}