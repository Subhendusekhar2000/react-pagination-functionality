import { Routes, Route } from "react-router-dom";
import Navb from "./component/Navb";
import Pagination1 from "./component/Pagination1";
function App() {
  return (
    <div>
      <Navb />
      <Routes>
        <Route path="/" element={<Pagination1 />} />
      </Routes>
    </div>
  );
}

export default App;
