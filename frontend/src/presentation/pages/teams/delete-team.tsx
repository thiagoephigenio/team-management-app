import * as S from './delete-team.styles';
import { Team } from './teams-list';

type DeleteCoworkerProps = {
  onCloseModal: () => void;
  team?: Team;
};

export function DeleteTeam({ onCloseModal, team }: DeleteCoworkerProps) {
  async function handleDeleteCoworker() {
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
