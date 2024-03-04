import { useState } from 'react';
import { DataTable } from '../../components/data-table/data-table';
import { CoworkerForm } from './coworker-form';
import DeleteIcon from '../../../assets/delete-filled.svg?react';
import EditIcon from '../../../assets/edit.svg?react';
import * as S from './coworkers-list.styles';
import { DeleteCoworker } from './delete-coworker';
import { useModal } from '../../hooks/useModal';
import { useAppContext } from '../../hooks/useAppContext';
import { Team } from '../teams/teams-list';

export interface Coworker {
  id: string;
  name: string;
  email: string;
  phone: string;
  team: Team;
}
type CoworkerRow = Omit<Coworker, 'team'> & {
  team: string;
};

const columns = [
  { name: 'id', title: '#ID' },
  { name: 'name', title: 'Nome' },
  { name: 'team', title: 'Equipe' },
  { name: 'phone', title: 'Telefone' },
  { name: 'email', title: 'E-mail' },
];

export function CoworkersList() {
  const { handleOpenModal, handleCloseModal, Modal } = useModal();
  const { coworkers } = useAppContext();
  const coworkerRows = coworkers.map((coworker) => ({
    ...coworker,
    team: coworker.team.name,
  }));
  const [currentRow, setCurrentRow] = useState<Coworker>();
  const [action, setAction] = useState<'add' | 'edit' | 'delete'>('add');
  const title = {
    add: 'Adicionar colega de trabalho',
    edit: 'Editar colega de trabalho',
    delete: `Remover "${currentRow?.name}"`,
  };

  function handleAddCoworker() {
    setAction('add');
    handleOpenModal();
  }
  function handleEditCoworker(event: CoworkerRow) {
    const coworker = coworkers.find((item) => item.id === event.id);
    setAction('edit');
    setCurrentRow(coworker);
    handleOpenModal();
  }
  function handleDeleteTeam(event: CoworkerRow) {
    const coworker = coworkers.find((item) => item.id === event.id);
    setAction('delete');
    setCurrentRow(coworker);
    handleOpenModal();
  }

  return (
    <S.Container>
      <S.Button onClick={handleAddCoworker}>Adicionar colega</S.Button>
      <DataTable
        columns={columns}
        rows={coworkerRows}
        actions={[
          {
            icon: <EditIcon fill="#4b5563" />,
            callback: (value) => handleEditCoworker(value as CoworkerRow),
          },
          {
            icon: <DeleteIcon fill="#e52e54" />,
            callback: (value) => handleDeleteTeam(value as CoworkerRow),
          },
        ]}
      />
      <Modal title={title[action]}>
        {action !== 'delete' ? (
          <CoworkerForm
            action={action}
            coworker={action === 'edit' ? currentRow : undefined}
            onCloseModal={handleCloseModal}
          />
        ) : (
          <DeleteCoworker
            coworker={currentRow}
            onCloseModal={handleCloseModal}
          />
        )}
      </Modal>
    </S.Container>
  );
}
