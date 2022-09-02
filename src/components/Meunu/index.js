import classNames from "classnames/bind";

import styles from './Menu.module.scss'
import { Items } from '~/data/Items'
import Heart_icon from '../../img/hearticon.png'
import Button from "../Button";

const cx = classNames.bind(styles);

function Menu() {

    return (<div className={cx('wrapper')}>
        <div className={cx('inner')}>
            {Items?.map((item) => (
                <div
                    key={item.id}
                    className={cx('content')}>
                    <img
                        src={item.image}
                        alt=""
                        className={cx('product-image')}
                    />
                    <div className={cx('product-name')}>
                        <p>
                            {item.product_name}
                        </p>
                    </div>
                    <div className={cx('price_and_like')}>
                        <p className={cx('price')}>{item.price} won</p>
                        <p className={cx('like')}>
                            <img
                                src={Heart_icon}
                                alt=""
                            />
                            {item.like}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className={cx('button')}>
            <Button name={'SEE MORE'} />
        </div>
    </div>);
}

export default Menu;