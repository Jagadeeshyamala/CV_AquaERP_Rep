import * as React from 'react';
import styles from './footer.module.scss';
import footerBg from '../assets/footer-bg.svg';
import { ReactComponent as ProgressLogo } from '../assets/progress-logo.svg'
//import footerBg from '../../images/footer-bg.svg';
//import { ReactComponent as ProgressLogo } from '../../icons/progress-logo.svg';

export const Footer = () => {
    return (
        <footer
            className={styles.footer}
            style={{ background: `url(${footerBg}) no-repeat`, backgroundSize: 'cover' }}
        >
            <div className="container-fluid">
                <p className="text-center m-0">
                    Copyright © 2022 Progress Software Corporation and/or its subsidiaries or affiliates. <ProgressLogo />
                </p>
            </div>
        </footer>
    )
}
