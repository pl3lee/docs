import styles from './Problem.module.scss'
import { Box } from '../Box/Box'

export function Problem({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Problem: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}