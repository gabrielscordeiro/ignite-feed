import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "../avatar/Avatar.tsx";

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export const Comment = ({
    content,
    onDeleteComment
}: CommentProps) => {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrielscordeiro.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel S. Cordeiro</strong>
                            <time title="17 de outubro às 22:15h" dateTime="2023-10-17 22:15:30">Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}