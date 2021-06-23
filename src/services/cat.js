import defaultAxios from './axios';

const catServices = {
  async getTags() {
    return await defaultAxios.get('/tags');
  },
  async getIds(tag) {
    const resp = await defaultAxios.get('/cats');
    const gatos = resp.data.filter((gato) => {
      for (let i = 0; i < gato.tags.length; i++) {
        if (tag === gato.tags[i]) {
          return true;
        }
      }
      return false;
    });
    return gatos;
  },
};

export default catServices;
