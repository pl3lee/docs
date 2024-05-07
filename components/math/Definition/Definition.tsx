import styles from './Definition.module.scss'
import { Box } from '../Box/Box'

export function Definition({ id, name, children }: { id?: string, name?: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Definition{name ? `: ${name}` : ""}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}