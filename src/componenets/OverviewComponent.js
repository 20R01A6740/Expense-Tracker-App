import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-weight: bold;
  align-items: center;
  width: 100%;
`;

const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
`;
const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  margin: 20px;
  width: 100%;
  &input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  &input {
    width: unset;
    margin: 0 10px;
  }
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 135px;
  font-size: 14px;

  span {
    font-weight: bold;
    font-size: 25px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
  }
`;
 
const OverviewComponent = (props) => {
  const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");
    const addTransaction = () => {
      props.addTransaction({
        amount: Number(amount),
        desc,
        type,
        id: Date.now(),
      });
      console.log({ amount, desc, type });
      props.setisAddTxnVisible();
    };
    return (
      <TransactionContainer>
        <input
          placeholder="Amount"
          value={amount || ""}
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <input
          placeholder="Description"
          value={desc || ""}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <RadioBox>
          <input
            type="radio"
            name="type"
            id="Expense"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="type"
            id="Income"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <label htmlFor="Income">Income</label>
        </RadioBox>
        <AddTransaction onClick={addTransaction}>
          Add Transaction
        </AddTransaction>
      </TransactionContainer>
    );
  };

  const [isAddTxnVisible, setisAddTxnVisible] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance: {props.Income-props.Expense}
        <AddTransaction onClick={() => setisAddTxnVisible(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "Add"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          setisAddTxnVisible={setisAddTxnVisible}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>{props.Expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>{props.Income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
