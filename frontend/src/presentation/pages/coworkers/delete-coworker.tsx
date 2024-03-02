import { Coworker } from './coworkers-list';
import * as S from './delete-coworker.styles';

type DeleteCoworkerProps = {
  onCloseModal: () => void;
  coworker?: Coworker;
};

export function DeleteCoworker({
  onCloseModal,
  coworker,
}: DeleteCoworkerProps) {
  async function handleDeleteCoworker() {
    console.log(coworker?.id);
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
