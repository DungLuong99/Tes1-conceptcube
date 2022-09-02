import classNames from "classnames/bind";

import styles from './VideoComponent.module.scss'
import Button from "../Button";
import Footer from "../Footer";
import Video from '../../img/video.png'
import Video1 from '../../img/video-object-01.png'
import Video2 from '../../img/video-object-02.png'
import Video3 from '../../img/video-object-03.png'
import Video4 from '../../img/video-object-04.png'
import Video5 from '../../img/video-object-05.png'
import Video6 from '../../img/video-object-06.png'
import Video7 from '../../img/video-object-07.png'
import Video8 from '../../img/video-object-08.png'
import Video9 from '../../img/video-object-09.png'

const cx = classNames.bind(styles);

function VideoComponent() {
    return (<div className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("title")}>
                <p className={cx("title-name")}>what happened</p>
                <p className={cx("title-content")}>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                <Button name={'see more'} />
            </div>
            <div className={cx("content")}>
                <img
                    src={Video}
                    alt=""
                />

            </div>
            <img
                className={cx("video1")}
                src={Video1}
                alt=""
            />
            <img
                className={cx("video2")}
                src={Video2}
                alt=""
            />
            <img
                className={cx("video3")}
                src={Video3}
                alt=""
            />
            <img
                className={cx("video4")}
                src={Video4}
                alt=""
            />
            <img
                className={cx("video5")}
                src={Video5}
                alt=""
            />
            <img
                className={cx("video6")}
                src={Video6}
                alt=""
            />
            <img
                className={cx("video7")}
                src={Video7}
                alt=""
            />
            <img
                className={cx("video8")}
                src={Video8}
                alt=""
            />
            <img
                className={cx("video9")}
                src={Video9}
                alt=""
            />

        </div>
        <div className={cx("outer")}>
            <Footer />
        </div>
    </div>);
}

export default VideoComponent;