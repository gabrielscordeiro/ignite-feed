import styles from './Post.module.css'
import { Comment } from "../comment/Comment.tsx";
import { Avatar } from "../avatar/Avatar.tsx";

interface PostProps {
    author: {
        avatarUrl: string
        name: string
        role: string
    }
    publishedAt: Date
    content: {
      type: string,
      content: string
    }[]

}

export const Post = ({
    author,
    publishedAt,
    content
}: PostProps) => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="17 de outubro às 22:15h" dateTime="2023-10-17 22:15:30">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>
                    Fala galeraa 👋
                </p>

                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
                    Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>

                <p>
                    👉{' '} <a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#"> #novoprojeto </a> {' '}
                    <a href="#"> #nlw </a> {' '}
                    <a href="#"> #rocketseat </a> {' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}