import { FormProvider, useForm } from 'react-hook-form';
import * as S from './team-form.styles';
import { Input } from '../../components/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppContext } from '../../hooks/useAppContext';
import { createTeamRequest } from '../../../services/api';
import { AxiosError } from 'axios';

type TeamFormProps = {
  onCloseModal: () => void;
};

const teamFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
});

export type TeamData = z.infer<typeof teamFormSchema>;

export function TeamForm({ onCloseModal }: TeamFormProps) {
  const { addTeam } = useAppContext();
  const teamForm = useForm<TeamData>({
    resolver: zodResolver(teamFormSchema),
  });
  const { handleSubmit } = teamForm;

  async function handleSubmitTeam(data: TeamData) {
    try {
      const createdTeam = await createTeamRequest(data);
      addTeam(createdTeam);
    } catch (error) {
      console.error((error as AxiosError).response?.data);
    }
    onCloseModal();
  }

  return (
    <FormProvider {...teamForm}>
      <S.FormContainer onSubmit={handleSubmit(handleSubmitTeam)}>
        <Input.Root>
          <Input.Label>Nome</Input.Label>
          <Input.Field name="name" maxLength={55} />
          <Input.ErrorMessage field="name" />
        </Input.Root>

        <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
      </S.FormContainer>
    </FormProvider>
  );
}
