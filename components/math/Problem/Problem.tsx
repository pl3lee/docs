import styles from './Problem.module.scss'
import { Box } from '../Box/Box'

export function Problem({ id, withName = false, children, number }: { id?: string, withName?: boolean, children: React.ReactNode, number?: string }) {
    return (
        <Box id={id ?? id}>
            {!withName && <ProblemName />}
            {children}
        </Box>
    )
}

export function ProblemName({ children, number }: { children?: React.ReactNode, number?: string }) {
    return (
        <div className={styles.name}>
            <div>Problem{number ? ` ${number}` : ""}{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function ProblemContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}