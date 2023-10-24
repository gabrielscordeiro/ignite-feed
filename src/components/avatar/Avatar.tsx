import styles from "./Avatar.module.css";

interface AvatarProps {
    src: string
    hasBorder?: boolean
}
export const Avatar = ({
    src,
    hasBorder = true
}: AvatarProps) => {
    return (
        <div>
            <img
                className={hasBorder ? styles.avatarWithBorder: styles.avatar}
                src="https://github.com/gabrielscordeiro.png" alt={src}
            />
        </div>
    )
}