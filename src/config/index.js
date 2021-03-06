module.exports = {
    app: {
        port : process.env.PORT,
    },
    db : {
        production : process.env.DB_URL_PROD,
        develop: process.env.DB_URL_DEV,
    },
    salt_rounds: process.env.SALT_ROUNDS,
};