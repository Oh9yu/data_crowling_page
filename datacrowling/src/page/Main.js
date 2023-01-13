import React, { useState } from 'react';
import Content from './content/Content';
import Tab from './tab/Tab';
import styled from 'styled-components';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [asinData, setAsinDate] = useState('');

  // const AsinProducts = asinData?.products[0];

  const KEEPA_KEY = process.env.REACT_APP_KEEPA_KEY;

  const handleSelect = e => {
    // onChangeAmount(cart.id, Number(e.target.value));
  };

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    if (!inputValue || inputValue.includes(' ')) {
      alert('Check AsinCode');
      setInputValue('');
      return;
    }
    fetch(
      // domain, stats, days, ra
      `http://api.keepa.com/product?key=${KEEPA_KEY}&domain=1&asin=${inputValue}&stats=180&days=180&rating=1&history=1&only-live-offers=0&rental=0&buybox=0`
    )
      .then(res => res.json())
      .then(data => setAsinDate(data.products[0].imagesCSV.split(',')));
  };

  console.log('data : ', asinData);

  return (
    <div>
      <SearchNav>
        <Select>
          <SelectOption>
            onChange={handleSelect}
            <option value="1">com</option>
            <option value="2">uk</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
          <SelectOption>
            onChange={handleSelect}
            <option value="1">com</option>
            <option value="2">uk</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
          <SelectOption>
            onChange={handleSelect}
            <option value="1">com</option>
            <option value="2">uk</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
          <SelectOption>
            onChange={handleSelect}
            <option value="1">com</option>
            <option value="2">uk</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
          <SelectOption>
            onChange={handleSelect}
            <option value="1">com</option>
            <option value="2">uk</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
        </Select>
        <SearchWrapper>
          <Search
            type="text"
            value={inputValue}
            // value={search}
            onChange={onChangeHandler}
            // onKeyDown={e => onKeyDown(e)}
            placeholder="Asin code"
          />
          <ClickButton onClick={submitHandler}>Submit</ClickButton>
        </SearchWrapper>
      </SearchNav>
      <Tab />
      <Content />
    </div>
  );
};

export default Main;
const SearchNav = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 30px;
  background-color: lightgray;
`;

const SearchWrapper = styled.div`
  margin-left: 80px;
`;
const Search = styled.input`
  padding: 10px 25px;
  margin-right: 10px;
  width: 280px;
  border: none;
`;
const ClickButton = styled.button`
  padding: 10px 25px;
  border: none;
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
const SelectOption = styled.select`
  margin-left: 14px;
  padding: 10px 25px;
  border: none;
  border: 1.5px solid rgba(255, 254, 242, 0.1);
  border-radius: 8px;
  /* color: #fff; */
  background-color: transparent;
  font-size: 15px;
  text-align-last: center;
  cursor: pointer;

  &:hover {
    border-color: rgba(255, 254, 242, 0.8);
  }
`;
