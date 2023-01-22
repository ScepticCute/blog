class UserService {
  registration() {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Ошибка сервера.",
      });
    }
  }
  login() {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Ошибка сервера.",
      });
    }
  }
}

module.exports = new UserService();
