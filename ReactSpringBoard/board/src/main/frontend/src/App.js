import {Link} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
        <h1>Member Service</h1>
        <nav>
            <Link to="/enroll_member">회원등록</Link>
            <Link to="/search_member">회원검색</Link>
            <Link to="/list_member">회원목록</Link>
        </nav>
    </div>
  );
}

export default App;
