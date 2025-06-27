export const baseService = (repository, dataValidate) => ({
  create: async (data) => {
    if (dataValidate) await dataValidate(data);
    return repository.create(data);
  },

  update: async (id, data) => {
    if (dataValidate) await dataValidate(data);
    return repository.update(id, data);
  },

  delete: async (id) => {
    return repository.delete(id);
  },

  findById: async (id) => {
    return repository.findById(id);
  },

  findAll: async () => {
    return repository.findAll();
  },

  extraData: async (id, relation) => {
    return repository.extraData(id, relation);
  },

  allExtraData: async (relation) => {
    return repository.allExtraData(relation);
  }
});
