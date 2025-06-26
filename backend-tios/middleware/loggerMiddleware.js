import logger from '../utils/logger.js';

export const logRequest = (req, res, next) => {
  logger.info(`${req.method} ${req.url} ${parseInt(req.params.id)}`);
  next();
};
