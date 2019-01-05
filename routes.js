module.exports = (app, db) => {
    const users = require("./controllers/users")(db);
    const data = require("./controllers/data")(db);

    app.get("/", users.home);

    app.get("/register", users.registerUser);
    app.get("/login", users.loginForm);

    app.post("/logout", users.logout);

    app.post("/login", users.loginSuccess);
    app.post("/register", users.registerSuccess);

    app.get("/data", data.data);
    app.get("/data/:id", data.getFromId);
};
