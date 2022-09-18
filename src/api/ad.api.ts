import api from '../services/api';

export interface IAd {}

export const adApi = {
  create: async (data: any) => api.post(`/games/${''}/ads`, data),
};
