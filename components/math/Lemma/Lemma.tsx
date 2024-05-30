import styles from './Lemma.module.scss'
import { Box } from '../Box/Box'

export function Lemma({ id, withName = false, children, number }: { id?: string, withName?: boolean, children: React.ReactNode, number?: string }) {
    return (
        <Box id={id ?? id}>
            {!withName && <LemmaName number={number ?? number} />}
            {children}
        </Box>
    )
}

export function LemmaName({ children, number }: { children?: React.ReactNode, number?: string }) {
    return (
        <div className={styles.name}>
            <div>Lemma{number ? ` ${number}` : ""}{children && ":"}</div>
            <div>{children}</div>
        </div>
    )
}

export function LemmaContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}