import { useQuery } from '@tanstack/react-query';
import * as api from 'lib/getData';

export const usePost = () => {
    return useQuery(['characters'], () => api.getImages());
}