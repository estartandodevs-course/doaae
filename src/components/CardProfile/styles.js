import styled from "styled-components";

export const Card = styled.div`
  width: 146px;
  height: ${({ small }) => (small ? "52px" : "270px")};
  background-color: ${({ backgroundColor }) => backgroundColor || "#898989"};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  font-family: "Poppins";
  color: #fff;
  overflow: ${({ small }) => (small ? "visible" : "hidden")};
  transition: height 0.4s ease;
  user-select: none;
  cursor: pointer;
  @media (min-width: 900px) {
    width: ${({ small }) => (small ? "146px" : "225px")};
  }

  .badge {
    position: absolute;
    top: -11px;
    left: -11px;
  }

  &::before {
    display: ${({ small }) => (small ? "none" : "block")};
    position: absolute;
    left: -40px;
    top: 13px;
    content: "";
    width: 142px;
    height: 16px;
    border: 4px solid rgba(255, 255, 255, 0.25);
    transform: matrix(0.71, -0.71, 0.7, 0.71, 0, 0);
  }


  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    height: ${({ small }) => (small ? "100%" : "auto")};
    justify-content: ${({ small }) => (small ? "center" : "flex-start")};

    .name {
      align-self: flex-start;
      font-size: 14px;
      font-weight: 700;
      margin-left: 11px;

      @media (min-width: 900px) {
        font-size: ${({ small }) => (small ? "14px" : "21px")};
      }
    }

    .description-list {
      width: 102px;
      height: auto;
      margin-left: 7px;
      @media (min-width: 900px) {
        width: 195px;
        margin-left: 28px;
      }
      li {
        font-size: 10px;
        line-height: 18px;

        @media (min-width: 900px) {
          font-size: 14px;
        }
      }
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: flex-end;
  height: 108px;
  margin-top: 22px;
  margin: 22px 0 15px 0;

  img {
    margin-left: auto;
    @media (min-width: 900px) {
      width: 128px;
      height: 100%;
    }
  }
`;
