import styles from './Proposition.module.scss'
import { Box } from '../Box/Box'

export function Proposition({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <Box>
            <div className={styles.name}>Proposition: {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}