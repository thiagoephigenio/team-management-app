import { deleteCoworkerRequest } from '../../../services/api';
import { useAppContext } from '../../hooks/useAppContext';
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
  const { deleteCoworker } = useAppContext();
  async function handleDeleteCoworker() {
    if (coworker) {
      try {
        await deleteCoworkerRequest(coworker.id);
        deleteCoworker(coworker.id);
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
