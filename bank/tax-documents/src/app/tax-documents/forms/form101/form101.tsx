import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form101Props {}

const StyledForm101 = styled.div`
  color: pink;
`;

export function Form101(props: Form101Props) {
  return (
    <StyledForm101>
      <h1>Welcome to Form101!</h1>
    </StyledForm101>
  );
}

export default Form101;
