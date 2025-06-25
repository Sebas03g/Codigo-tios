export const baseService = (repository) => ({
  create: async (data) => repository.create(data),
  delete: async (id) => repository.delete(id, data),
  update: async (id, data) => repository.update(id, data),
  findById: async (id) => repository.findById(id),
  findAll: async () => repository.findAll(), 
  extraData: async () => repository.extraData(id, relation),
  allExtraData: async () => repository.allExtraData(relation),
});
