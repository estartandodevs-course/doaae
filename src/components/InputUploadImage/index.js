import * as S from "./styles";
import MoreIcon from "../../assets/icons/more-icon.svg";

const InputUploadImage = () => {
  return (
    <S.Container>
      <S.Text>Upload de Imagem</S.Text>
      <S.InputContainer htmlFor="file">
        <S.InputImage src={MoreIcon} />
        <S.InputFile
          type="file"
          name="image-upload"
          id="file"
          accept="image/*"
        />
      </S.InputContainer>
    </S.Container>
  );
};

export { InputUploadImage };
