import { HtmlHTMLAttributes } from 'react';
import * as S from './spinner.styles';

type SpinnerProps = HtmlHTMLAttributes<HTMLElement> & {
  size?: string | number;
  color?: 'primary' | 'secondary';
};

export function Spinner({
  size = 32,
  color = 'primary',
  ...rest
}: SpinnerProps) {
  return <S.Loader $size={size} $variant={color} {...rest} />;
}
