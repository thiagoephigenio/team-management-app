import ReactModal from 'react-modal';
import * as S from './modal.styles';
import { ReactNode } from 'react';
import CloseIcon from '../../../assets/close.svg?react';

export type ModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onCloseModal: () => void;
};

const customStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: '100%',
    maxWidth: '576px',
    background: '#f0f2f5',
    padding: '3rem',
    borderRadius: '3px',
    inset: '50% auto auto 50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export function Modal({ isOpen, onCloseModal, title, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onCloseModal}
    >
      <S.ModalContainer>
        <S.Header>
          <S.CloseButton
            type="button"
            className="react-modal-close"
            onClick={onCloseModal}
          >
            <CloseIcon fill="#52525b" />
          </S.CloseButton>
          <h2>{title}</h2>
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.ModalContainer>
    </ReactModal>
  );
}
