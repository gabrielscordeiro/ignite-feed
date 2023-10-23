import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/gabrielscordeiro.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel S. Cordeiro</strong>
                            <time title="17 de outubro às 22:15h" dateTime="2023-10-17 22:15:30">Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabéns!!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}