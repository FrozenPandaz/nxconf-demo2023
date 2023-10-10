import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form4Props {}

const StyledForm4 = styled.div`
  color: pink;
`;

export function Form4(props: Form4Props) {
  return (
    <StyledForm4>
      <h1>Welcome to Form4!</h1>
    </StyledForm4>
  );
}

export default Form4;
