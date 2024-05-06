import styles from './Lemma.module.scss'
import { Box } from '../Box/Box'

export function Lemma({ id, name, children }: { id?: string, name: string, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            <div className={styles.name}>Lemma{name ? ":" : ""} {name}</div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}