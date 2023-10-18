import { Post } from "./components/post/Post.tsx";
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
                    <Post />
                </main>
            </div>
        </>
    )
}

export default App
