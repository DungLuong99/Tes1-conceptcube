import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.scss"
import Logo from '~/img/logo.png'
import Logo2x from '~/img/logo@2x.png'
// import images from '~/img/index.js'

const cx = classNames.bind(styles);
function Header() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../../img', false, /.(png|jpe?g|svg)$/));


    console.log(images);
    return (<div className={cx("wrapper")}>
        <div className={cx("what_main")}>
            <img src={images['logo.png']}
                alt=''
            />
        </div>
        <div className={cx("inner")}>
            <div className={cx('nav-bar')}>
                <p>INTRODUCTION</p>
                <p>SOLUTION</p>
                <p>RATE PLAN</p>
                <div className={cx('rectangle')}>
                    <p></p>
                </div>
                <p>LOGIN</p>
                <p>APPLY FOR FREE USE</p>
            </div>
        </div>

        <div className={cx("mobile")}>
            <div className={cx("what_main-mobile")}>
                <img src={images['logo.png']}
                    alt=''
                />
            </div>
            <div className={cx('nav-bar-mobile')}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>


    </div>);
}

export default Header;