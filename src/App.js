import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses.js";
import TransactionList from "./components/TransactionList.js";
import AddTransaction from "./components/AddTransaction.js";
import { GlobalProvider } from "./components/context/GlobalState.js";
import AOS from "aos";
import "aos/dist/aos.css";
import react, { useEffect } from "react";
import { motion } from "framer-motion";
// import { motion } from "framer-motion/dist/framer-motion";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Type of easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <GlobalProvider className="App">
      <Header />
      <div className="container">
        <div data-aos="fade-up">
          <Balance />
        </div>
        <div data-aos="fade-left">
          <IncomeExpenses />
        </div>
        <div data-aos="fade-right">
          <TransactionList />
        </div>
        <div data-aos="fade-up-right">
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
