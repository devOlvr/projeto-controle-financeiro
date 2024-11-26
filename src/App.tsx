import React from "react";
import {
  GlobalStyles,
  Header,
  Navbar,
  Navitem,
  NavList,
  Title,
} from "./Styles/GlobalStyles";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import TransactionForm from "./Components/Transaction/TransactionForm";
import DashboardPage from "./Components/Dashboard/DashboardPage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <BrowserRouter>
          <Navbar>
            <Title>Controle Financeiro</Title>
            <NavList>
              <Navitem to="/TransactionForm">Cadastro de Transações</Navitem>
              <Navitem to="/DashboardPage">Registro de Transações</Navitem>
            </NavList>
          </Navbar>

          <Routes>
            <Route
              path="/TransactionForm"
              element={<TransactionForm />}
            ></Route>
            <Route path="/DashboardPage" element={<DashboardPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Header>
    </>
  );
};

export default App;
