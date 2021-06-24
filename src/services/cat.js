import defaultAxios from './axios';

let cats = [];
const catServices = {
  async getTags() {
    return await defaultAxios.get('/tags');
  },
  async getIds(tag) {
    if(cats.length === 0) {
      const { data = [] } = await defaultAxios.get('/cats');
      cats = data;
    } 
    return cats.filter((gato) => gato.tags.includes((tag)));
  },
};

export default catServices;
