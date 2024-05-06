import styles from './Definition.module.scss'
import { Box } from '../Box/Box'

export function Definition({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Definition: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}