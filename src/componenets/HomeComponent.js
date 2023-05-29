import React, { useState,useEffect } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TranscationComponent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 10px;
  font-weight: bold;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  width: 360px;
`;

const HomeComponent = (props) => {
  const [Transactions, setTransaction] = useState([]);
  const [Expense, upadateExpense] = useState(0)
  const [Income, upadateIncome] = useState(0)
  const addTransaction = (payload) => {
    const TransactionArray = [...Transactions];
    TransactionArray.push(payload);
    setTransaction(TransactionArray);
  };
  const CalculateBalance = (props) => {
    let exp = 0;
    let inc = 0;
    Transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    });
    upadateExpense(exp)
    upadateIncome(inc)
  };
  
  useEffect(() => CalculateBalance(),[Transactions])
  
  return (
    <Container>
      <OverviewComponent addTransaction={addTransaction} 
      Expense={Expense} Income={Income}/>
      <TransactionComponent Transactions={Transactions} />
    </Container>
  );
};

export default HomeComponent;
