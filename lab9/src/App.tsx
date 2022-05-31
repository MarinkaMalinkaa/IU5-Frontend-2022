import './App.css';
import { Header } from "./components/Header/Header"
import { Rout } from "./routes"

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Rout/>
    </div>
  );
}