import classNames from "classnames/bind";

import styles from './BrandStory.module.scss'
import Window from '../../img/window.png'
import obj01 from '../../img/object-01.png'
import obj02 from '../../img/object-02.png'
import obj03 from '../../img/object-03.png'
import obj04 from '../../img/object-04.png'
import obj05 from '../../img/object-05.png'
import obj06 from '../../img/object-06.png'
import obj07 from '../../img/object-07.png'
import Button from "../Button";

const cx = classNames.bind(styles);

function BrandStory() {
    return (<div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('title')}>
                <p>Brand Story</p>
                <p className={cx('title-content')}>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>
            </div>

            <div className={cx('window')}>
                <img
                    src={Window}
                    alt=""
                />
                <div className={cx('window-content')}>
                    <p className={cx('window-content-title')} >
                        What Happened's Brand story
                    </p>
                    <p className={cx('window-content-detail')}>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                    </p>
                    <div className={cx('window-button')}>
                        <Button name={'SEE MORE'} />
                    </div>
                </div>
            </div>
            <img
                src={obj01}
                alt=""
                className={cx('object1')}
            />
            <img
                src={obj02}
                alt=""
                className={cx('object2')}
            />
            <img
                src={obj03}
                alt=""
                className={cx('object3')}
            />
            <img
                src={obj04}
                alt=""
                className={cx('object4')}
            />
            <img
                src={obj05}
                alt=""
                className={cx('object5')}
            />
            <img
                src={obj06}
                alt=""
                className={cx('object6')}
            />
            <img
                src={obj07}
                alt=""
                className={cx('object7')}
            />
        </div>
    </div>);
}

export default BrandStory;