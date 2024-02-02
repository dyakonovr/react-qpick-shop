import classes from './styles.module.scss';
// @ts-ignore
import { ReactComponent as IconHeart } from '@/assets/img/svg/icon-heart.svg';

function LikeButtonSkeleton() {
  return (
    <button className={[classes.btn_like, 'opacity-50'].join(' ')}>
      <IconHeart />
    </button>
  );
}

export default LikeButtonSkeleton;
