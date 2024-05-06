import styles from './Example.module.scss'
import { Box } from '../Box/Box'

export function Example({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Example: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}