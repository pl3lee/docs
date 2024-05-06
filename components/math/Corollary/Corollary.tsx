import styles from './Corollary.module.scss'
import { Box } from '../Box/Box'

export function Corollary({ id, name, children }: { id?: string, name: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Corollary{name ? ":" : ""} {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}