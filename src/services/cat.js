import defaultAxios from './axios';

const catServices = {
  async getTags() {
    return await defaultAxios.get('/tags');
  },
  async getIds(tag) {
    const { data = [] } = await defaultAxios.get('/cats');
    return data.filter((gato) => gato.tags.includes((tag)));
  },
};

export default catServices;
