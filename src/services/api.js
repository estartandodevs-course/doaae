import { instituicoes } from "../mock/ongs";

const getAllInstituicoes = (page = 1, perPage = 10) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return instituicoes.slice(start, end);
};

export default getAllInstituicoes;
