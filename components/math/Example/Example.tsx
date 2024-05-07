import styles from './Example.module.scss'
import { Box } from '../Box/Box'

export function Example({ id, name, children }: { id?: string, name?: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Example{name ? `: ${name}` : ""}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}