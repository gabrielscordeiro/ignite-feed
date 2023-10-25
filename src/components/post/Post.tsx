import styles from './Post.module.css'
import { Comment } from "../comment/Comment.tsx";
import { Avatar } from "../avatar/Avatar.tsx";


import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";

export interface PostProps {
    id?: string
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

    const [comments, setComments] = useState<string[]>([]);
    const [newCommentText, setNewCommentText] = useState<string>('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange()
    {
        //@ts-expect-error
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {
        //@ts-ignore
        event.preventDefault();

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment content={comment}/>
                ))}
            </div>
        </article>
    )
}