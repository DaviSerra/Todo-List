import Header from './components/Header';
import { Input } from './components/Input';
import styles from './App.module.css';
import './global.css';
import { Button } from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.tasksGroup}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={20} color='#F2F2F2' weight='bold'/>
          </Button>
        </div>
      </section>
    </main>
  )

}

export default App;