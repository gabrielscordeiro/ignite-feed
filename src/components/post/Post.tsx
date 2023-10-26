import { useState } from "react";
import { faker } from "@faker-js/faker";

import ptBR from 'date-fns/locale/pt-BR'

import { format, formatDistanceToNow } from 'date-fns'
import { Comment } from "../comment/Comment.tsx";
import { Avatar } from "../avatar/Avatar.tsx";

import { ChangeEvent, FormEvent, InvalidEvent } from "react";

import styles from './Post.module.css'

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

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                        return <p key={faker.string.nanoid()}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={faker.string.nanoid()}><a href="#">{line.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={faker.string.nanoid()}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}