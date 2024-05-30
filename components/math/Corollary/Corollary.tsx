import styles from './Corollary.module.scss'
import { Box } from '../Box/Box'

export function Corollary({ id, withName = false, children, number }: { id?: string, withName?: boolean, children: React.ReactNode, number?: string }) {
    return (
        <Box id={id ?? id}>
            {!withName && <CorollaryName number={number ?? number} />}
            {children}
        </Box>
    )
}

export function CorollaryName({ children, number }: { children?: React.ReactNode, number?: string }) {
    return (
        <div className={styles.name}>
            <div>Corollary{number ? ` ${number}` : ""}{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function CorollaryContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}