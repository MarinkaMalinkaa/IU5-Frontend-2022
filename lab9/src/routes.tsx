import { UserInfo } from "./components/UserInfo/UserInfo"
import { Search } from "./components/Search/Search"
import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  export const Rout: React.FC = () => (
    <div>
      <Router >
        <Routes >
            <Route
                path="/"
                element={<Search/>}
            />
            <Route
                path="/info"
                element={<UserInfo/>}
                // render={() => (
                //     <UserInfo/>                    
                // )}
            />
        </Routes >
      </Router>
    </div>
);

