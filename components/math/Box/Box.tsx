import styles from './Box.module.scss'

export function Box({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.root}>
            {children}
        </div>
    )
}