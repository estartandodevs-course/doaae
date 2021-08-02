import styled from "styled-components";

const Card = styled.div`
  width: 146px;
  height: ${({ select }) => (select ? "52px" : "270px")};
  background-color: ${({ backgroundColor }) => backgroundColor || "#898989"};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  font-family: "Poppins";
  color: #fff;
  overflow: ${({ select }) => (select ? "visible" : "hidden")};
  transition: height 0.4s ease;
  user-select: none;
  cursor: pointer;

  .badge {
    display: ${(select) => (select ? "block" : "none")};
    position: absolute;
    top: -11px;
    left: -11px;
  }

  &::before {
    display: ${({ select }) => (select ? "none" : "block")};
    position: absolute;
    left: -40px;
    top: 13px;
    content: "";
    width: 142px;
    height: 16px;
    border: 4px solid rgba(255, 255, 255, 0.25);
    transform: matrix(0.71, -0.71, 0.7, 0.71, 0, 0);
  }

  .card-icon {
    margin-bottom: 7px;
    img {
      margin-left: 48px;
      margin-top: ${({ margin }) => margin}px;
    }
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    height: ${({ select }) => (select ? "100%" : "auto")};
    justify-content: ${({ select }) => (select ? "center" : "flex-start")};

    .name {
      align-self: flex-start;
      font-size: 14px;
      font-weight: 700;
      margin-left: 11px;
    }

    .description-list {
      width: 102px;
      height: auto;
      margin-left: 7px;
      .description-item {
        font-size: 10px;
        line-height: 18px;
      }
    }
  }
`;

export { Card };
