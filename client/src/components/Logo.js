import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 25px;
  margin-left: 10px;
`;

const LogoImage = styled.img`
  width: 35px;
  height: 35px;
`;

const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  /* color: #363637; */
  color: #659df6;
`;

const Logo = () => {
  return (
    <Container>
      <LogoImage src={require('../img/logo.png')} alt="" />
      <LogoText>Task Manager</LogoText>
    </Container>
  );
};

export default Logo;
