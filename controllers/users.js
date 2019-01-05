const sha256 = require("js-sha256");
const Salt = "hypeno";

module.exports = db => {
  const home = (req, res) => {
    // db.users.home (req.params, (err, result) => {
    res.render("home");
    // })
  };

  const registerUser = (req, res) => {
    res.render("users/register");
  };

  const registerSuccess = (req, res) => {
    db.users.registerSuccess(req.body, (error, result, check) => {
      if (error) {
        console.log("Error in registering:", error.message);
        res.status(500).render("error/error500");
      }

      if (!check) {
        res.cookie(
          "loginStatus",
          sha256(Salt + result.username + "loggedin")
        );
        res.cookie("userId", result.id);
        res.cookie("username", result.username);
        res.redirect("/");
      } else {
        res.render("users/register", { check: "true" });
      }
    });
  };

  const loginForm = (req, res) => {
    res.render("users/login");
  };

  const loginSuccess = (req, res) => {
    db.users.loginSuccess(req.body, (error, result) => {
      if (error) {
        console.log("Error logging in", error.message);
          res.status(500).render("error/error500");
      }

      if (result) {
        res.cookie("loginStatus", sha256(Salt + result.username + "loggedIn"));
        res.cookie("userId", result.id);
        res.cookie("username", result.username);
        res.redirect("/data");
      } else {
        res.render("users/login", { check: "true" });
      }
    });
  };

  const logout = (req, res) => {
    res.clearCookie("loginStatus");
    res.clearCookie("userId");
    res.clearCookie("username");
    res.redirect("/");
  };

  return {
    home,
    registerUser,
    registerSuccess,
    loginForm,
    loginSuccess,
    logout
  };
};
