import styles from './Problem.module.scss'
import { Box } from '../Box/Box'

export function Problem({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <ProblemName />}
            {children}
        </Box>
    )
}

export function ProblemName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Problem{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function ProblemContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}