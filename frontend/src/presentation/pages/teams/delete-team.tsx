import { AxiosError } from 'axios';
import { deleteTeamRequest } from '../../../services/api';
import { useAppContext } from '../../hooks/useAppContext';
import * as S from './delete-team.styles';
import { Team } from './teams-list';

type DeleteCoworkerProps = {
  onCloseModal: () => void;
  team?: Team;
};

export function DeleteTeam({ onCloseModal, team }: DeleteCoworkerProps) {
  const { deleteTeam } = useAppContext();
  async function handleDeleteCoworker() {
    if (team) {
      try {
        await deleteTeamRequest(team.id);
        deleteTeam(team.id);
      } catch (error) {
        console.error(error);
      }
    }
    onCloseModal();
  }

  return (
    <div>
      <p>Deseja realmente realizar esta ação?</p>
      <S.Actions>
        <S.Button onClick={onCloseModal}>Cancelar</S.Button>
        <S.Button $primary onClick={handleDeleteCoworker}>
          Continuar
        </S.Button>
      </S.Actions>
    </div>
  );
}
