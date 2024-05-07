import styles from './Proposition.module.scss'
import { Box } from '../Box/Box'

export function Proposition({ id, name, children }: { id?: string, name?: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Proposition{name ? `: ${name}` : ""}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}