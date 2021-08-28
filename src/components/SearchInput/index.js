import * as S from "./styles";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchInput = () => {
  return (
    <S.SearchStyled>
      <S.Input placeholder="Faça uma busca avançada..." />
      <S.SearchIcon src={SearchIcon} />
    </S.SearchStyled>
  );
};

export { SearchInput };
