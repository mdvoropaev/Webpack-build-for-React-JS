import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.scss';

export function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Hello React</h1>
            <p className={styles.example__text}>assembly ReactJS 14.02.2022</p>
        </header>
    );
}

export const Header = hot(HeaderComponent);