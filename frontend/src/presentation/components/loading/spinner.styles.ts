import styled from 'styled-components';

export const Loader = styled.span<{
  $size: string | number;
  $variant: 'primary' | 'secondary';
}>`
  width: ${(props) =>
    typeof props.$size === 'number' ? `${props.$size}px` : props.$size};
  height: ${(props) =>
    typeof props.$size === 'number' ? `${props.$size}px` : props.$size};
  border: 4px solid
    ${(props) => (props.$variant === 'primary' ? '#969cb3' : '#fff')};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
