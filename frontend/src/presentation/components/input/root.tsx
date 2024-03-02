import { HTMLAttributes } from 'react';
import * as S from './root.styles';

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Root(props: FieldProps) {
  return <S.RootContainer className="flex flex-col gap-1" {...props} />;
}
