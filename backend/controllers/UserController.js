const UserService = require("../services/UserService");

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserService.registration(email, password);

      return res.json({
        message: "Пользователь успешно зарегистрирован.",
        user,
      });
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "Не удалось создать пользователя.",
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserService.login(email, password);

      res.json({
        message: "Успешная авторизация.",
        user,
      });
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "Неудачная авторизация.",
      });
    }
  }
  async func(req, res) {}
  async func(req, res) {}
}

module.exports = new UserController();
