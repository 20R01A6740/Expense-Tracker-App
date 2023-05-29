import styled from "styled-components";
import HomeComponent from "./componenets/HomeComponent";

const Container=styled.div`
display:flex;
flex-direction:column;
margin: 70px 0 10px;
font-weight: bold;
align-items: center;
font-family: 'Poppins', sans-serif;
font-family: 'Source Sans Pro', sans-serif;
`
const Header=styled.span`
color:black;
font-size:25px;


`
function App() {
  return (
    <Container className="App">
    <Header>Expense Tracker</Header>
    <HomeComponent/>
    </Container>
  );
}

export default App;
