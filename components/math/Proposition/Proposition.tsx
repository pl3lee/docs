import styles from './Proposition.module.scss'
import { Box } from '../Box/Box'

export function Proposition({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <PropositionName />}
            {children}
        </Box>
    )
}

export function PropositionName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Proposition{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function PropositionContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}