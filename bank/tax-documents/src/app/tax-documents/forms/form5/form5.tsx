import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form5Props {}

const StyledForm5 = styled.div`
  color: pink;
`;

export function Form5(props: Form5Props) {
  return (
    <StyledForm5>
      <h1>Welcome to Form5!</h1>
    </StyledForm5>
  );
}

export default Form5;
