import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
  color: #363637;
`;

const TodayDate = styled.p`
  color: #858585;
  font-size: 0.85rem;
  margin: 5px 0 20px 0;
`;

const getTodayDate = () => {
  const date = new Date();

  return `오늘은 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다.`;
};

const Header = ({ title }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <TodayDate>{getTodayDate()}</TodayDate>
      </TitleWrapper>
    </Container>
  );
};

export default Header;
