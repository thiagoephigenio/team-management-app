import { Outlet } from 'react-router-dom';
import { Header } from './components/header/header';
import * as S from './app.styles';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <SnackbarProvider />
      <S.GlobalStyle />
    </>
  );
}

export default App;
