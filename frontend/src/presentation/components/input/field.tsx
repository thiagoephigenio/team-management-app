import { InputHTMLAttributes, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import * as S from './field.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  mask?: (value?: string) => string;
};

export function Field({ name = '', mask = undefined, ...props }: InputProps) {
  const { register, setValue } = useFormContext();
  const inputValue = useWatch({ name });

  useEffect(() => {
    if (mask) {
      setValue(name, mask(inputValue));
    }
  }, [inputValue]);

  return <S.Input id={name} {...register(name)} {...props} />;
}
