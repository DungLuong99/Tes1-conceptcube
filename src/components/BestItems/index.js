import classNames from "classnames/bind";

import styles from './BestItems.module.scss'
import { bestItems } from '~/data/bestItems'
import BG from '../../img/bes-bg.png'
import Menu from "../Meunu";
const cx = classNames.bind(styles);

function BestItems() {
    console.log(bestItems);
    return (<div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={BG}
                alt=''
                className={cx('background')}
            />
            <div className={cx('title')}>
                <p>Best Product</p>
            </div>
            <div className={cx('slogan')}>
                <p>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </p>
            </div>
            <div className={cx('product')}>
                {bestItems?.map((item) => (
                    <div key={item.id}
                        className={cx('product-content')}
                    >
                        <img
                            src={item.image}
                            alt="best_product"
                            className={cx('product-image')}
                        />
                        <img
                            src={item.order}
                            alt=""
                            className={cx('order')}
                        />
                        <div className={cx('icon')}>
                            <p>{item.content}</p>
                            <img
                                src={item.icon}
                                alt=""
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
        <Menu />
    </div>);
}

export default BestItems;