import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form303Props {}

const StyledForm303 = styled.div`
  color: pink;
`;

export function Form303(props: Form303Props) {
  return (
    <StyledForm303>
      <h1>Welcome to Form303!</h1>
    </StyledForm303>
  );
}

export default Form303;
