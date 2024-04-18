import '@ubits/ubits-lxp-assets/src/styles/scss/components-styles.scss';
import Routes from "./routes";
import { StoreProvider } from './Context'

function App() {
  return (
      <StoreProvider>
        <Routes/>
      </StoreProvider>
  );
}

export default App;
