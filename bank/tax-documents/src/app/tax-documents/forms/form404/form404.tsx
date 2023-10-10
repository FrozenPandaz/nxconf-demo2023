import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form404Props {}

const StyledForm404 = styled.div`
  color: pink;
`;

export function Form404(props: Form404Props) {
  return (
    <StyledForm404>
      <h1>Welcome to Form404!</h1>
    </StyledForm404>
  );
}

export default Form404;
