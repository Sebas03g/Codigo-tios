export const baseService = (repository, dataValidate) => ({
  create: async (data) => {
    return repository.create(data);
  },

  update: async (id, data) => {
    return repository.update(id, data);
  },

  delete: async (id, data) => {

    return repository.delete(id, data);
  },

  findById: async (id) => {
    return repository.findById(id);
  },

  findAll: async () => {
    return repository.findAll();
  },
  findAllFilter: async (filter) => {
    return repository.findAllFilter(filter);
  },
  
  findAllDeleted: async () => {
    return repository.findAllDeleted();
  },

  extraData: async (id, relation) => {
    return repository.extraData(id, relation);
  },

  allExtraData: async (relation) => {
    return repository.allExtraData(relation);
  },

  dataAllRelations: async (id, includes) => {
    return repository.dataAllRelations(id, includes);
  },
  allDataAllRelations: async (includes) => {
    return repository.allDataAllRelations(includes);
  }
});
