import './App.css';
import Footer from './containers/Footer';
import LeftPanel from './containers/LeftPanel';
import RightPanel from './containers/RightPanel';
import RouteMain from './containers/RouteMain';

function App() {
  return (
    <div id="outerContainer">
      <LeftPanel />
      <RouteMain />
      <RightPanel />
      <Footer />
    </div>
  );
}

export default App;
