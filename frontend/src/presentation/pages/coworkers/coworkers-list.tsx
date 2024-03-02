import { useState } from 'react';
import { DataTable } from '../../components/data-table/data-table';
import { CoworkerForm } from './coworker-form';
import DeleteIcon from '../../../assets/delete-filled.svg?react';
import EditIcon from '../../../assets/edit.svg?react';
import * as S from './coworkers-list.styles';
import { DeleteCoworker } from './delete-coworker';
import { useModal } from '../../hooks/useModal';

export interface Coworker {
  id: string;
  name: string;
  email: string;
  phone: string;
  teamId: string;
}

const columns = ['#ID', 'Nome', 'Equipe', 'Telefone', 'E-mail'];
const rows = [
  {
    id: '1',
    name: 'Thiago Ephigenio',
    teamId: '12',
    phone: '(41) 3423-7903',
    email: 'thiagocosta130@gmail.com',
  },
  {
    id: '2',
    name: 'João da Silva',
    teamId: '13',
    phone: '(41) 3423-7903',
    email: 'thiagocosta130@gmail.com',
  },
];

type Teste = {
  id: string;
};

export function CoworkersList() {
  const { handleOpenModal, handleCloseModal, Modal } = useModal();
  const [currentRow, setCurrentRow] = useState<(typeof rows)[0] | undefined>();
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
  function handleEditCoworker(event: Teste) {
    setAction('edit');
    setCurrentRow(event as unknown as (typeof rows)[0]);
    handleOpenModal();
  }
  function handleDeleteTeam(event: Teste) {
    setAction('delete');
    setCurrentRow(event as unknown as (typeof rows)[0]);
    handleOpenModal();
  }

  return (
    <S.Container>
      <S.Button onClick={handleAddCoworker}>Adicionar colega</S.Button>
      <DataTable
        columns={columns}
        rows={rows}
        actions={[
          {
            icon: <EditIcon fill="#4b5563" />,
            callback: (value) => handleEditCoworker(value as Teste),
          },
          {
            icon: <DeleteIcon fill="#e52e54" />,
            callback: (value) => handleDeleteTeam(value as Teste),
          },
        ]}
      />
      <Modal title={title[action]}>
        {action !== 'delete' ? (
          <CoworkerForm coworker={action === 'edit' ? currentRow : undefined} />
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
