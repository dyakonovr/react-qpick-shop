import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootType } from '../store/store';

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;