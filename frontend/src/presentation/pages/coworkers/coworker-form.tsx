import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import * as S from './coworker-form.styles';
import { Input } from '../../components/input';
import { normalizePhoneNumber } from '../../../helpers/masks';
import { phoneNumberValidation } from '../../../helpers/validations';

const coworkerFormSchema = z.object({
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

type CoworkerData = z.infer<typeof coworkerFormSchema>;
type CoworkerFormProps = {
  coworker?: CoworkerData;
};

export function CoworkerForm({ coworker }: CoworkerFormProps) {
  const coworkerForm = useForm<CoworkerData>({
    resolver: zodResolver(coworkerFormSchema),
    defaultValues: coworker,
  });
  const { handleSubmit } = coworkerForm;

  function handleSubmitCoworker(data: CoworkerData) {
    console.log('oi', data);
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
            <option value="12">asdasd</option>
            <option value="13">ateste</option>
          </Input.Select>
          <Input.ErrorMessage field="teamId" />
        </Input.Root>

        <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
      </S.FormContainer>
    </FormProvider>
  );
}
