module.exports = (app, db) => {
    const users = require("./controllers/users")(db);
    // const data = require("./controllers/data")(db);

    app.get("/", users.home);
    // app.get("/register", users.registerUser);
};
