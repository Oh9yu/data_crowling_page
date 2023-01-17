import React from 'react';
import styled from 'styled-components';

const Content = props => {
  const { data } = props;
  const url = data.imagesCSV ? data.imagesCSV.split(',') : [];

  return (
    <Container>
      <TitleSection>{data.title}</TitleSection>
      <ImgSection>
        {url.map((e, i) => {
          return (
            <AsinImg
              src={'https://images-na.ssl-images-amazon.com/images/I/' + url[i]}
              alt="img"
              key={i}
            />
          );
        })}
      </ImgSection>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 1050px;
  border: 3px solid #ddd;
  margin-top: 50px;
  margin-left: 50px;
  padding-bottom: 20px;
  border-radius: 8px;
`;

const TitleSection = styled.div`
  display: flex;
  margin: 0 20px 20px;
  padding: 20px;
  border-bottom: 2px solid #ddd;
  align-items: center;
  font-size: 24px;
  height: 80px;
`;

const ImgSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  background-color: #fff;
`;

const AsinImg = styled.img`
  height: 150px;
`;
