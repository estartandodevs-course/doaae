import styled from "styled-components";

const SpinElement = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .spin {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 100px;
    border-top: solid 5px #389674;
    border-right: solid 5px #389674;
    border-bottom: solid 5px #389674;
    border-left: solid 5px transparent;
    animation: 1s infinite linear spin;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export { SpinElement };
