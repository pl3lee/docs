import styles from './Lemma.module.scss'
import { Box } from '../Box/Box'

export function Lemma({ id, withName = false, children }: { id?: string, withName?: boolean, children: React.ReactNode }) {
    return (
        <Box id={id ?? id}>
            {!withName && <LemmaName />}
            {children}
        </Box>
    )
}

export function LemmaName({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.name}>
            <div>Lemma{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function LemmaContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}