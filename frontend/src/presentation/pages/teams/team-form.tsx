import { FormProvider, useForm } from 'react-hook-form';
import * as S from './team-form.styles';
import { Input } from '../../components/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type TeamFormProps = {
  onCloseModal: () => void;
};

const teamFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
});

type TeamData = z.infer<typeof teamFormSchema>;

export function TeamForm({ onCloseModal }: TeamFormProps) {
  const coworkerForm = useForm<TeamData>({
    resolver: zodResolver(teamFormSchema),
  });
  const { handleSubmit } = coworkerForm;

  function handleSubmitCoworker(data: TeamData) {
    console.log('oi', data);
    onCloseModal();
  }

  return (
    <FormProvider {...coworkerForm}>
      <S.FormContainer onSubmit={handleSubmit(handleSubmitCoworker)}>
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
