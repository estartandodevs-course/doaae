import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 315px;
  height: 137px;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
`;

export const ContainerInfo = styled.div`
  padding: 12px 10px 9px 13px;
`;

export const ContainerAvatar = styled.div``;

export const Avatar = styled.img`
  width: 88px;
  height: 100%;
  object-fit: contain;
  border-radius: 10px 0 0 10px;
`;

export const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
  display: block;
`;

export const CategorysList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

export const Categorys = styled.li`
  font-size: 10px;
  color: #646464;
`;

export const Location = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const ContainerDays = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Semana = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #389674;
`;

export const CalendarioIcon = styled.img``;

export const Verificado = styled.img`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 34px;
  height: 33px;
`;
