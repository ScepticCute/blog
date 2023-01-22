const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
        return res.status(400).json({
          message: "Данная электронная почта уже зарегистрирована в системе.",
        });
      }

      const passwordHash = bcrypt.hashSync(password, 3);
      const user = new UserModel({
        username,
        password: passwordHash,
      });

      await user.save();

      return res.status(200).json({
        message: "Пользователь успешно зарегистрирован.",
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Не удалось создать пользователя.",
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = UserModel.findOne({ email });

      if (!candidate) {
        res.status(400).json({
          message: "Логин или пароль введены неправильно.",
        });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res
          .status(400)
          .json({ message: "Логин или пароль введены неправильно." });
      }

      res.json({
        message: "Успешная авторизация.",
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Не удалось создать пользователя.",
      });
    }
  }
  async func(req, res) {}
  async func(req, res) {}
}

module.exports = new UserController();
