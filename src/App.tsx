import { Header } from "./components/header/Header.tsx";
import { Sidebar } from "./components/sidebar/Sidebar.tsx";

import styles from './App.module.css'

function App() {

    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>

                </main>
            </div>
        </>
    )
}

export default App
