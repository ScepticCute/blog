import { Avatar } from '../../components/Avatar/Avatar';
import styles from './Registration.module.scss';

export const Registration = () => {
  return (
    <main>
      <div>Создание аккаунта</div>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <label>
        E-mail
        <input className={styles.field} />
      </label>
      <label>
        Полное имя
        <input className={styles.field} />
      </label>
      <label>
        Пароль
        <input className={styles.field} />
      </label>
      <button>Зарегистрироваться</button>
    </main>
  );
};
