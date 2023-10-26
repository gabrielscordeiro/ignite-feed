import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "../avatar/Avatar.tsx";
import { useState } from "react";

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export const Comment = ({
    content,
    onDeleteComment
}: CommentProps) => {

    const [likeCount, setLikeCount] = useState<number>(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}