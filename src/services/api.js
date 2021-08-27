import { instituicoes } from "../mock/ongs";
import { user } from "../mock/userData";

const getAllInstituicoes = (page = 1, perPage = 10) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return instituicoes.slice(start, end);
};

const getUser = () => {
  return user;
};

export { getAllInstituicoes, getUser };
