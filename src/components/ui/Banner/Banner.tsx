import classes from './Banner.module.scss';
import bannerImg from '@assets/banner.jpg';

function Banner() {
  return (
    <div className={classes.banner}>
      <img src={bannerImg} alt="Аксессуары для Iphone 13 Pro Max" />
    </div>
  );
};

export default Banner;