import styles from './Problem.module.scss'
import { Box } from '../Box/Box'

export function Problem({ id, name, children }: { id?: string, name?: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Problem{name ? `: ${name}` : ""}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}