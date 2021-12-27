import Header from "./Components/header"
import Kontrib from "./Components/kontrib"
import Roadmap from "./Components/roadmap"
import './index.css';

function App() {
  return (
    <>
    <div>
      <header className="App-header">
        <Header />
      </header>
    </div>
    <div>
      <Kontrib />
    </div>
    <div>
      <Roadmap />
    </div>
    </>
  );
}

export default App;
