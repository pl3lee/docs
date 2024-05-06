import styles from './Corollary.module.scss'
import { Box } from '../Box/Box'

export function Corollary({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Corollary: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}