import { useRef } from 'react';
import classes from './LikeButton.module.scss';
// @ts-ignore
import { ReactComponent as IconHeart } from '@/assets/img/svg/icon-heart.svg';
import { useProfile } from '@/hooks/useProfile';
import UserService from '@/services/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface ILikeButtonProps {
  productId: number;
}

function LikeButton({ productId }: ILikeButtonProps) {
  const { profile } = useProfile();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['toggle favourite'],
    mutationFn: () => UserService.toggleFavourite(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
  });

  const btnRef = useRef<HTMLButtonElement>(null);

  const buttonClasses = profile?.favourites.some((fp) => fp.id === productId)
    ? `${classes.btn_like} ${classes['btn_like--active']}`
    : classes.btn_like;

  return (
    <button
      ref={btnRef}
      className={buttonClasses}
      onClick={() => mutate()}
      data-product-id={productId}
    >
      <IconHeart />
    </button>
  );
}

export default LikeButton;
