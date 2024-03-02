import { LabelHTMLAttributes } from 'react';
import * as S from './label.styles';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <S.Label {...props} />;
}
