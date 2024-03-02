import { SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './select-styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ name = '', children, ...props }: SelectProps) {
  const { register } = useFormContext();

  return (
    <S.Select id={name} {...register(name)} {...props}>
      {children}
    </S.Select>
  );
}
