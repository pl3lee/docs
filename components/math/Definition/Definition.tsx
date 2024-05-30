import styles from './Definition.module.scss'
import { Box } from '../Box/Box'

export function Definition({ id, withName = true, children, number }: { id?: string, withName?: boolean, children: React.ReactNode, number?: string }) {
    return (
        <Box id={id ?? id}>
            {!withName && <DefinitionName number={number ?? number} />}
            {children}
        </Box>
    )
}

export function DefinitionName({ children, number }: { children?: React.ReactNode, number?: string }) {
    return (
        <div className={styles.name}>
            <div>Definition{number ? ` ${number}` : ""}{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function DefinitionContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}