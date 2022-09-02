import classNames from "classnames/bind";

import styles from './Issue.module.scss'
import Button from "../Button";
import New1 from '../../img/news-img-01.png'
import New3 from '../../img/news-img-03.png'
import New4 from '../../img/news-img-04.png'
import New5 from '../../img/news-img-05.png'
import Icon1 from '../../img/news-object-02.png'
import Icon2 from '../../img/news-object-03.png'
import Icon3 from '../../img/news-object-03_2.png'
import Icon4 from '../../img/news-object-04.png'
import Icon5 from '../../img/news-object-05.png'


const cx = classNames.bind(styles);

function Issue() {
    return (<div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('title')}>
                <div className={cx('title-name')}>
                    <p>Happened's issue</p>
                </div>
                <div className={cx('title-content')}>
                    <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                </div>
                <div className={cx('title-button')}>
                    <Button name={'see more'} />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('brand-a')}>
                    <p>whpn issue
                    </p>
                    <img
                        src={New1}
                        alt="" />
                    <img
                        className={cx('icon2')}
                        src={Icon2}
                        alt="" />
                </div>
                <div className={cx('brand-b')}>
                    <p>b brand</p>
                    <img
                        src={New3}
                        alt="" />
                    <img
                        className={cx('icon4')}
                        src={Icon4}
                        alt="" />
                </div>
                <div className={cx('brand-c')}>
                    <p>c brand</p>
                    <img
                        src={New3}
                        alt="" />
                </div>
                <div className={cx('brand-d')}>
                    <p>d brand</p>
                    <img
                        src={New4}
                        alt="" />
                </div>
                <div className={cx('brand-e')}>
                    <p>e brand</p>
                    <img
                        src={New5}
                        alt="" />
                    <img
                        className={cx('icon5')}
                        src={Icon5}
                        alt="" />
                </div>
            </div>

            <img
                className={cx('icon1')}
                src={Icon1}
                alt="" />
            <img
                className={cx('icon3')}
                src={Icon3}
                alt="" />
        </div>

    </div>);
}

export default Issue;