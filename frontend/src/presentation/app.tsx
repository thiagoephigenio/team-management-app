import { Outlet } from 'react-router-dom';
import { Header } from './components/header/header';
import * as S from './app.styles';

function App() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <S.GlobalStyle />
    </>
  );
}

export default App;
