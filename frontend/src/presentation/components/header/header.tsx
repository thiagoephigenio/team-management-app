import { Link } from 'react-router-dom';
import * as S from './header.styles';

export function Header() {
  return (
    <S.Container>
      <h2>Team Manager</h2>
      <S.Actions>
        <Link to="teams">Equipes</Link>
        <Link to="coworkers">Membros</Link>
      </S.Actions>
    </S.Container>
  );
}
