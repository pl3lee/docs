import styles from './Theorem.module.scss'
import { Box } from '../Box/Box'

export function Theorem({ id, name, children }: { id?: string, name?: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Theorem{name ? `: ${name}` : ""}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}