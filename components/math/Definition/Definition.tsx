import styles from './Definition.module.scss'
import { Box } from '../Box/Box'

export function Definition({ id, withName = true, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <DefinitionName />}
            {children}
        </Box>
    )
}

export function DefinitionName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Definition{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function DefinitionContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}