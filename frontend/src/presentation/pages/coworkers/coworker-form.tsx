import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import * as S from './coworker-form.styles';
import { Input } from '../../components/input';
import { normalizePhoneNumber } from '../../../helpers/masks';
import { phoneNumberValidation } from '../../../helpers/validations';
import {
  createCoworkerRequest,
  updateCoworkerRequest,
} from '../../../services/api';
import { useAppContext } from '../../hooks/useAppContext';
import { AxiosError } from 'axios';
import { Team } from '../teams/teams-list';
import { Coworker } from './coworkers-list';

const coworkerFormSchema = z.object({
  id: z.union([z.string(), z.undefined()]),
  name: z.string().min(1, 'O nome é obrigatório.'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),
  phone: z
    .string()
    .min(1, 'O telefone é obrigatório.')
    .refine(phoneNumberValidation, 'Formato de telefone inválido.'),
  teamId: z.union([z.string(), z.undefined()]),
});

export type CoworkerData = z.infer<typeof coworkerFormSchema>;
type CoworkerFormProps = {
  action: 'add' | 'edit';
  coworker?: Coworker;
  onCloseModal: () => void;
};

export function CoworkerForm({
  action,
  coworker,
  onCloseModal,
}: CoworkerFormProps) {
  const { addCoworker, updateCoworker, teams, coworkers } = useAppContext();
  const defaultValues =
    action === 'edit' && coworker
      ? coworkers.find((item) => item.id === coworker.id)
      : undefined;
  const coworkerForm = useForm<CoworkerData>({
    resolver: zodResolver(coworkerFormSchema),
    defaultValues: { ...defaultValues, teamId: defaultValues?.team.id },
  });
  const { handleSubmit } = coworkerForm;

  async function handleSubmitCoworker(data: CoworkerData) {
    try {
      if (action === 'add') {
        const createdCoworker = await createCoworkerRequest(data);
        addCoworker(createdCoworker);
      } else {
        await updateCoworkerRequest(data);
        const { teamId, ...rest } = data;
        const team = teams.find((item) => item.id === teamId) ?? ({} as Team);
        if (coworker) {
          updateCoworker({
            ...rest,
            id: coworker.id,
            team,
          });
        }
      }
      onCloseModal();
    } catch (error) {
      console.error((error as AxiosError).response?.data);
    }
  }

  return (
    <FormProvider {...coworkerForm}>
      <S.FormContainer onSubmit={handleSubmit(handleSubmitCoworker)}>
        <Input.Root>
          <Input.Label>Nome</Input.Label>
          <Input.Field name="name" maxLength={55} />
          <Input.ErrorMessage field="name" />
        </Input.Root>
        <Input.Root>
          <Input.Label>E-mail</Input.Label>
          <Input.Field name="email" maxLength={55} />
          <Input.ErrorMessage field="email" />
        </Input.Root>
        <Input.Root>
          <Input.Label>Telefone</Input.Label>
          <Input.Field name="phone" mask={normalizePhoneNumber} />
          <Input.ErrorMessage field="phone" />
        </Input.Root>
        <Input.Root>
          <Input.Label>Equipe</Input.Label>
          <Input.Select name="teamId">
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </Input.Select>
          <Input.ErrorMessage field="teamId" />
        </Input.Root>

        <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
      </S.FormContainer>
    </FormProvider>
  );
}
