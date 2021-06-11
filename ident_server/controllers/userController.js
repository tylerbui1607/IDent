// promisify help to convert callback base to promise base
// with that u can use await
const { promisify } = require("util");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { create } = require("lodash");

const { User } = require("../models/userModel");
const base = require("./baseController");
const c = require("../constants");
const { sendEmail } = require("../middleware/mailService");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_TIME,
  });
};

exports.signup = async (req, res, next) => {
  console.log("Signup data: ", req.body);
  const doc = await User.findOne({ email: req.body.email });
  if (doc) {
    res.status(400).json({
      status: c.STATUS_FAILURE,
      message: c.MAIL_ALREADY_TAKEN_MSG,
    });
  } else {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.googleID ? "" : req.body.password,
        googleID: req.body.googleID,
        resetPass: req.body.resetPass,
        role: req.body.role,
      });
      const token = createToken(_.pick(user, ["_id", "role", "email"]));

      //remove password before send response to client
      user.password = undefined;
      res.status(201).json({
        status: "success",
        token,
        user,
      });
    } catch (err) {
      res.status(500).json({
        status: c.STATUS_FAILURE,
        message: c.UNKNOWN_ERROR_MSG,
      });
      console.log("userController line 43 fail to create new user");
      console.log(err);
      next(err);
    }
  }
};

exports.login = async (req, res, next) => {
  if (req.body.googleID) {
    let user = await User.findOne({ googleID: req.body.googleID });
    if (!user) {
      try {
        user = await User.findOne({ email: req.body.email }).select(
          "-resetPass"
        );
        if (!user) this.signup(req, res, next);
        else {
          user.googleID = req.body.googleID;
          await user.save();

          user.password = undefined;
          const token = createToken(_.pick(user, ["_id", "role", "email"]));

          res.status(200).json({
            status: c.STATUS_SUCCESS,
            token,
            user,
          });
        }
      } catch (err) {
        res.status(500).json({
          status: c.STATUS_FAILURE,
          message: c,
          UNKNOWN_ERROR_MSG,
        });
        console.log(err);
      }
    } else {
      user.password = undefined;

      const token = createToken(_.pick(user, ["_id", "role", "email"]));

      res.status(200).json({
        status: c.STATUS_SUCCESS,
        token,
        data: user,
      });
    }
  } else {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({
          status: c.STATUS_FAILURE,
          message: "Email and password are required!",
        });
        return;
      }

      const user = await User.findOne({ email }).select("+password -resetPass");

      if (!user || !(await user.comparePassword(password, user.password))) {
        res.status(401).json({
          status: "fail",
          message: "Email or password is incorrect!",
        });
        return;
      }

      user.password = undefined;
      const token = createToken(_.pick(user, ["_id", "role", "email"]));

      res.status(200).json({
        status: "success",
        token,
        user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: c.STATUS_FAILURE,
        message: c.UNKNOWN_ERROR_MSG,
      });
      next(err);
    }
  }
};

exports.forgorPassword = async (req, res) => {
  console.log("Signup request data: ", req.body);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "User with this email does not exist",
    });
  } else {
    console.log(user);

    let code = await bcrypt.genSalt(10);
    const data = {
      subject: "iDent - reset password.",
      to: user.email,
      from: `Nha khoa iDent <${process.env.IDENT_EMAIL}>`,
      html: `<h2 style="color:#777;font-size:20px;font-weight:300">Use this verify code to reset your password</h2>
                <p>Verify code: ${code}</p>`,
    };
    user.updateOne({ resetPass: code }, (err, success) => {
      if (err) {
        return res.status(400).json({ error: "reset link error" });
      } else {
        sendEmail(data);
        return res
          .status(201)
          .json({ success: "Verify code was sent to your email" });
      }
    });
  }
};

exports.resetPassword = async (req, res) => {
  const { resetPass, newPass } = req.body;
  if (resetPass) {
    let user = await User.findOne({ resetPass: resetPass });
    if (!user) {
      res.status(400).json({
        status: c.STATUS_FAILURE,
        message: "Verify code invalid",
      });
    } else {
      user.password = newPass;
      try {
        await user.save();
        res.status(200).json({
          status: c.STATUS_SUCCESS,
          message: "Password reset successfully",
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          status: c.STATUS_FAILURE,
          message: c.UNKNOWN_ERROR_MSG,
        });
      }
    }
  } else {
    res.status(400).json({
      status: c.STATUS_FAILURE,
      message: "Verify code invalid",
    });
  }
};

exports.getOne = base.getOne(User);

exports.getAll = base.getAll(User);

exports.update = base.updateOne(User);

exports.delete = base.deleteOne(User);
