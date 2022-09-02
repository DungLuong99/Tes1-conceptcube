import classNames from "classnames/bind";

import styles from './Button.module.scss'
const cx = classNames.bind(styles);

function Button({ name }) {
    return (<button className={cx('wrapper')}>
        <p className={cx('name')}>{name}</p>
    </button>);
}

export default Button;