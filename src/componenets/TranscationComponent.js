import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  padding: 10px 22px;
  width: 100%;
  gap: 10px;

  & input {
    border-radius: 1px solid #e6e8e9;
    background-color: #e6e8e9;
    padding: 10px 20px;
    border-radius: 12px;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
  width: 100%;
`;

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>{props.payload.amount}</span>
    </Cell>
  );
};

const TransactionComponent = (props) => {
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredTransactions = props.Transactions.filter((transaction) => {
      return transaction.desc.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterData(filteredTransactions);
  }, [props.Transactions, searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <h2>Transactions</h2>
      <input
        type="text"
        placeholder="Search Transaction"
        value={searchText}
        onChange={handleChange}
      />
      {filterData.map((payload) => (
        <TransactionCell key={payload.id} payload={payload} />
      ))}
    </Container>
  );
};

export default TransactionComponent;
