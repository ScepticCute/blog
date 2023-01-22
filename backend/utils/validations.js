const { check, validationResult } = require("express-validator");

exports.validateRegistrationAndLogin = [
  // Email Validation
  check("email").isEmail().withMessage("Please enter a valid email address."),

  // Password Validation
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain a number."),
];

exports.validateError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
