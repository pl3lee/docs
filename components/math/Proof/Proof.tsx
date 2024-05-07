import styles from './Proof.module.scss'
import { Box } from '../Box/Box'

export function Proof({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <ProofName />}
            {children}
        </Box>
    )
}

export function ProofName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Proof{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function ProofContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>
            {children}
            <div className={styles.qedContainer}>
                <div className={styles.qed}></div>
            </div>
        </div>
    )
}