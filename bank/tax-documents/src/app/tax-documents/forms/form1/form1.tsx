import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form1Props {}

const StyledForm1 = styled.div`
  color: pink;
`;

export function Form1(props: Form1Props) {
  return (
    <StyledForm1>
      <h1>Welcome to Form1!</h1>
    </StyledForm1>
  );
}

export default Form1;
