const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} существует.`);
    }

    const passwordHash = bcrypt.hashSync(password, 3);
    const user = new UserModel({
      email,
      password: passwordHash,
    });

    await user.save();

    return {
      user,
    };
  }
  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error(`Пользователь с ${email} не существует.`);
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Логин или пароль введены неправильно.");
    }
  }
}

module.exports = new UserService();
