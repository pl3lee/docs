import styles from './Theorem.module.scss'
import { Box } from '../Box/Box'

export function Theorem({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <TheoremName />}
            {children}
        </Box>
    )
}

export function TheoremName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Theorem{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function TheoremContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}