import styles from './Box.module.scss'

export function Box({ id, children }: { id?: string, children: React.ReactNode }) {
    return (
        <div className={styles.root} id={id ?? id}>
            {children}
        </div>
    )
}