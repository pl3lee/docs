import styles from './Proof.module.scss'
import { Box } from '../Box/Box'

export function Proof({ id, name, children }: { id?: string, name: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Proof{name ? ":" : ""} {name}</div>
            <div className={styles.content}>
                {children}
                <div className={styles.qedContainer}>
                    <div className={styles.qed}></div>
                </div>
            </div>
        </Box>
    )
}