import classNames from "classnames/bind";

import styles from './DefaultLayout.module.scss'
import Header from '~/components/Header';
import MainBanner from '~/components/MainBanner';
import Menu from "../Meunu";
import BrandStory from "../BrandStory";
import Issue from "../Issue";
import VideoComponent from "../VideoComponent";
import BestItems from "../BestItems";


const cx = classNames.bind(styles);

function DefaultLayout() {
    return (<div className={cx("wrapper")}>
        <Header />
        <MainBanner />
        <BestItems />
        <BrandStory />
        <Issue />
        <VideoComponent />
    </div>);
}

export default DefaultLayout;