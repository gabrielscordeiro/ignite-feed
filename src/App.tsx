import { Post } from "./components/post/Post.tsx";
import { Header } from "./components/header/Header.tsx";
import { Sidebar } from "./components/sidebar/Sidebar.tsx";

import styles from './App.module.css'
import { posts } from "./utils/posts.ts";

function App() {

    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            publishedAt={post.publishedAt}
                            content={post.content}
                            author={post.author}
                        />
                    ))}
                </main>
            </div>
        </>
    )
}

export default App
