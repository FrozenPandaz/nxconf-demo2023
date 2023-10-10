import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form3Props {}

const StyledForm3 = styled.div`
  color: pink;
`;

export function Form3(props: Form3Props) {
  return (
    <StyledForm3>
      <h1>Welcome to Form3!</h1>
    </StyledForm3>
  );
}

export default Form3;
