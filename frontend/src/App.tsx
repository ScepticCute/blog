import styles from './App.module.sass';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Auth } from './pages/Auth/Auth';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
