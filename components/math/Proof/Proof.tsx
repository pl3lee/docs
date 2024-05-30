import styles from './Proof.module.scss'
import { Box } from '../Box/Box'

export function Proof({ id, withName = false, children, number }: { id?: string, withName?: boolean, children: React.ReactNode, number?: string }) {
    return (
        <Box id={id ?? id}>
            {!withName && <ProofName />}
            {children}
        </Box>
    )
}

export function ProofName({ children, number }: { children?: React.ReactNode, number?: string }) {
    return (
        <div className={styles.name}>
            <div>Proof{number ? ` ${number}` : ""}{children && ":"}</div>
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