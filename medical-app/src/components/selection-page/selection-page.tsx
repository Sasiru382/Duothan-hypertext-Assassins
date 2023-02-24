import styles from './selection-page.module.scss';
import classNames from 'classnames';
import img1 from './images/admin.jpg';
import img2 from './images/patient.jpg';
import img3 from './images/p.jpg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export interface SelectionPageProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-selection-pages-and-templates
 */
export const SelectionPage = ({ className, children = 'SelectionPage' }: SelectionPageProps) => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.tile, styles.circle)}>
                <img src={img1} alt="Admin" className={styles.circle} />
            </div>
            <div className={classNames(styles.tile, styles.circle)}>
                <img src={img2} alt="User" className={styles.circle} />
            </div>
            <div className={classNames(styles.tile, styles.circle)}>
                <img src={img3} alt="Phamacy" className={styles.circle} />
            </div>
        </div>
    );
};
