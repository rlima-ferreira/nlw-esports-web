import api from '../services/api';

export interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const gameApi = {
  findAll: async () => api.get('/games'),
};
