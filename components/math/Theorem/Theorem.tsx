import styles from './Theorem.module.scss'
import { Box } from '../Box/Box'

export function Theorem({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Theorem: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}