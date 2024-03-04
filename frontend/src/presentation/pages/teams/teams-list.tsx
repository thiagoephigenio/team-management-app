import { DataTable } from '../../components/data-table/data-table';
import * as S from './teams-list.styles';
import DeleteIcon from '../../../assets/delete-filled.svg?react';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { DeleteTeam } from './delete-team';
import { TeamForm } from './team-form';
import { useAppContext } from '../../hooks/useAppContext';

export type Team = {
  id: string;
  name: string;
};

const columns = [
  { name: 'id', title: '#ID' },
  { name: 'name', title: 'Nome da Equipe' },
];

export function TeamsList() {
  const { handleOpenModal, handleCloseModal, Modal } = useModal();
  const { teams } = useAppContext();
  const [currentRow, setCurrentRow] = useState<Team | undefined>();
  const [action, setAction] = useState<'add' | 'delete'>('add');
  const title = {
    add: 'Adicionar Equipe',
    delete: `Deletar "${currentRow?.name}"`,
  };

  function handleAddTeam() {
    setAction('add');
    handleOpenModal();
  }
  function handleDeleteTeam(event: Team) {
    setAction('delete');
    setCurrentRow(event as Team);
    handleOpenModal();
  }

  return (
    <S.Container>
      <S.Button onClick={handleAddTeam}>Adicionar equipe</S.Button>
      <DataTable
        columns={columns}
        rows={teams}
        actions={[
          {
            icon: <DeleteIcon fill="#e52e54" />,
            callback: (value) => handleDeleteTeam(value as Team),
          },
        ]}
      />
      <Modal title={title[action]}>
        {action === 'add' ? (
          <TeamForm onCloseModal={handleCloseModal} />
        ) : (
          <DeleteTeam team={currentRow} onCloseModal={handleCloseModal} />
        )}
      </Modal>
    </S.Container>
  );
}
