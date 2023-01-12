import React, { useState } from 'react';
import Content from './content/Content';
import Tab from './tab/Tab';
import styled from 'styled-components';
import Asinitem from './asinitem/Asinitem';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [asinData, setAsinData] = useState([]); // fetch response
  const [asinInput, setAsinInput] = useState([]); // fetch request => forloop
  const KEEPA_KEY = process.env.REACT_APP_KEEPA_KEY;

  const handleSelect = e => {};

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const addHandler = () => {
    if (
      !inputValue ||
      inputValue.includes(' ') ||
      (asinInput.length > 0 && inputValue.includes(asinInput))
    ) {
      alert('Check AsinCode');
      setInputValue('');
      return;
    } else {
      setAsinInput([...asinInput, inputValue]);
      setInputValue('');
    }
  };

  const submitHandler = async () => {
    if (!asinInput) return;
    setAsinData([]);
    for (let i = 0; i < asinInput.length; i++) {
      await fetch(
        `http://api.keepa.com/product?key=${KEEPA_KEY}&domain=1&asin=${asinInput[i]}&stats=180&days=180&rating=1&history=1&only-live-offers=0&rental=0&buybox=0`
      )
        .then(res => res.json())
        .then(data =>
          setAsinData(prevAsinData => [...prevAsinData, data.products[0]])
        );
    }
    setAsinInput([]);
  };

  console.log('asin Data :', asinData);

  return (
    <div>
      <SearchNav>
        <SearchWrapper>
          <Select>
            <SelectOption>
              onChange={handleSelect}
              <option value="1">com</option>
              <option value="2">uk</option>
            </SelectOption>
          </Select>
          <Search
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
            placeholder="Asin code"
          />
          <ClickButton onClick={addHandler}>ADD ASIN CODE</ClickButton>
        </SearchWrapper>
      </SearchNav>
      <FillterSection>
        <AsinItems>
          {asinInput.map((data, i) => {
            return (
              <Asinitem
                key={i}
                data={data}
                setAsinInput={setAsinInput}
                asinInput={asinInput}
              />
            );
          })}
        </AsinItems>
        <ClickButton onClick={submitHandler}>Submit</ClickButton>
      </FillterSection>
      <Body>
        <Tab />
        <ContentSection>
          {asinData &&
            asinData.map((data, idx) => {
              return <Content key={idx} data={data} />;
            })}
        </ContentSection>
      </Body>
    </div>
  );
};

export default Main;
const SearchNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  border-bottom: 2px #ddd solid;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-right: 50px;
`;
const Search = styled.input`
  padding: 10px 25px;
  margin-right: 10px;
  width: 280px;
  border: 2px #ddd solid;
  border-radius: 8px;
`;
const ClickButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px 25px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  border: 2px #ddd solid;
  border-radius: 8px;
`;
const SelectOption = styled.select`
  margin-left: 14px;
  padding: 10px 25px;
  border: none;
  border: 1.5px solid rgba(255, 254, 242, 0.1);
  border-radius: 8px;

  background-color: transparent;
  font-size: 15px;
  text-align-last: center;
  cursor: pointer;

  &:hover {
    border-color: rgba(255, 254, 242, 0.8);
  }
`;

const FillterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const AsinItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
`;

const Body = styled.div`
  display: flex;

  margin-top: 20px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
