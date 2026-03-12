const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthEjsController {

    async CheckAuth(req, res, next) {
        try {
            if (req.user) {
                next()
            } else {
                res.redirect('/login/view');
            }
        } catch (err) {
            console.log(err)
        }
    }
  register(req, res) {
    res.render("register");
  }

  async registercreate(req, res) {
    try {
      const users = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      });
      const result = await users.save();
      console.log("data", result);

      if (result) {
        console.log("register successfully");

       return res.redirect("/login/view");
      } else {
        console.log("register failed");

       return res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  login(req, res) {
    res.render("login");
  }

  async logincreate(req, res) {
    try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
        console.log("All input is required");
       return res.redirect("/login/view");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });

      if ( user && user.is_admin === "user" && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          process.env.JWT_SECRET_KEY || 'secret',
          {
            expiresIn: "2h",
          },
        );
        if (token) {
          res.cookie("token", token);
         return res.redirect("/user/dashboard");
        } else {
          console.log("login failed");
        }
      }
      console.log("login failed");
     return res.redirect("/login/view");
    } catch (error) {
      console.log(error);
    }
  }
  dashboard(req, res) {
    res.render("userdashboard",{
        title:"user dashboard",
        data:req.user
    });
  }
  logout(req, res) {
    res.clearCookie("token");
    return res.redirect("/login/view");
  }
}

module.exports = new AuthEjsController();
