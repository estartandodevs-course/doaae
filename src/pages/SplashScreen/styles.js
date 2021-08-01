import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;

  .container-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;

    .info {
      display: flex;
      width: 285px;
      height: 70px;
      align-items: center;
      gap: 17px;

      .map-icon {
        width: 39px;
        height: 50px;
      }

      .box-icon {
        width: 42px;
        height: 45px;
      }
    }
  }

  .container-spin {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

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
  }

  .footer {
    text-align: center;
    font-size: 11px;
    color: #666;
    padding: 17px 0px;
  }
`;

const HeaderBackground = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: -56px;
  }
`;
export { Container, HeaderBackground };
