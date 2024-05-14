import React from 'react';
import styles from './PseudoCode.module.scss';

let lineNumber = 1;

const PseudoCodeLine = ({ children }) => {
    return (
        <div className={styles.line}>
            <div className={styles.lineNumber}>{lineNumber++}</div>
            <div>{children}</div>
        </div>
    );
}

const processChildren = (children, level = 0) => {
    return React.Children.map(children, child => {
        if (child.type) {
            return React.cloneElement(child, { level });
        } else {
            return child;
        }
    });
}

export const PseudoCode = ({ children }) => {
    lineNumber = 1;
    return (
        <div className={styles.root}>
            {processChildren(children)}
        </div>
    );
}

export const PseudoCodeName = ({ children }) => {
    return (
        <div className={styles.name}>
            <div>Algorithm:</div>
            <div>{children}</div>
        </div>
    );
}

export const PseudoCodeInput = ({ children }) => {
    return (
        <div className={styles.input}>
            <div>Input:</div>
            <div>{children}</div>
        </div>
    );
}

export const PseudoCodeOutput = ({ children }) => {
    return (
        <div className={styles.output}>
            <div>Output:</div>
            <div>{children}</div>
        </div>
    );
}

export const PseudoCodeStatement = ({ children }) => {
    return (
        <PseudoCodeLine>
            <div className={styles.statement}>
                {children}
            </div>
        </PseudoCodeLine>
    );
}

export const PseudoCodeIf = ({ children, level = 0 }) => {
    const [condition, ...statements] = React.Children.toArray(children);
    return (
        <>
            <PseudoCodeLine>
                <div className={styles.controlStructureHeader}>
                    <div>If </div>
                    <div>{condition}</div>
                    <div>:</div>
                </div>
            </PseudoCodeLine>
            <div className={`${styles.controlStructureContent} ${styles[`level${level}`]}`}>
                {processChildren(statements, level + 1)}
            </div>
        </>
    );
}

export const PseudoCodeWhile = ({ children, level = 0 }) => {
    const [condition, ...statements] = React.Children.toArray(children);
    return (
        <>
            <PseudoCodeLine>
                <div className={styles.controlStructureHeader}>
                    <div>While </div>
                    <div>{condition}</div>
                    <div>:</div>
                </div>
            </PseudoCodeLine>
            <div className={`${styles.controlStructureContent} ${styles[`level${level}`]}`}>
                {processChildren(statements, level + 1)}
            </div>
        </>
    );
}

export const PseudoCodeElse = ({ children, level = 0 }) => {
    return (
        <>
            <PseudoCodeLine>
                <div>Else:</div>
            </PseudoCodeLine>
            <div className={`${styles.controlStructureContent} ${styles[`level${level}`]}`}>
                {processChildren(children, level + 1)}
            </div>
        </>
    );
}

export const PseudoCodeFor = ({ children, level = 0 }) => {
    const [condition, ...statements] = React.Children.toArray(children);
    return (
        <>
            <PseudoCodeLine>
                <div className={styles.controlStructureHeader}>
                    <div>For </div>
                    <div>{condition}</div>
                    <div>:</div>
                </div>
            </PseudoCodeLine>
            <div className={`${styles.controlStructureContent} ${styles[`level${level}`]}`}>
                {processChildren(statements, level + 1)}
            </div>
        </>
    );
}

export const PseudoCodeCondition = ({ children }) => {
    return (
        <span>{children}</span>
    );
}
