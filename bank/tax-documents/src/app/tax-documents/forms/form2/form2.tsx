import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form2Props {}

const StyledForm2 = styled.div`
  color: pink;
`;

export function Form2(props: Form2Props) {
  return (
    <StyledForm2>
      <h1>Welcome to Form2!</h1>
    </StyledForm2>
  );
}

export default Form2;
