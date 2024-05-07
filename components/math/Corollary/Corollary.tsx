import styles from './Corollary.module.scss'
import { Box } from '../Box/Box'

export function Corollary({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <CorollaryName />}
            {children}
        </Box>
    )
}

export function CorollaryName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Corollary{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function CorollaryContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}