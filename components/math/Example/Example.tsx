import styles from './Example.module.scss'
import { Box } from '../Box/Box'

export function Example({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <ExampleName />}
            {children}
        </Box>
    )
}

export function ExampleName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Example{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function ExampleContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}