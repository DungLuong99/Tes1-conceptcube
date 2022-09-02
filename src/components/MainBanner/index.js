import classNames from 'classnames/bind'

import styles from "./MainBanner.module.scss"
import Banner from '~/img/main-banner.png'
import Intro from '~/img/introduction-bg.png'
import BestItems from '~/components/BestItems';

const cx = classNames.bind(styles);


function MainBanner() {
    return (<div className={cx("wrapper")}>
        <img
            src={Banner}
            alt='main-banner'
        />
        <div className={cx('intro')}>
            <img src={Intro}
                alt=''
            />
            <div className={cx('intro-inner')}>
                <p className={cx('intro-title')}> What Happened!</p>

                <p className={cx('intro-content')}>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.</p>
            </div>

        </div>
    </div>);
}

export default MainBanner;