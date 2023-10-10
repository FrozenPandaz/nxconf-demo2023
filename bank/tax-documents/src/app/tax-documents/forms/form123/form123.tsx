import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form123Props {}

const StyledForm123 = styled.div`
  color: pink;
`;

export function Form123(props: Form123Props) {
  return (
    <StyledForm123>
      <h1>Welcome to Form123!</h1>
    </StyledForm123>
  );
}

export default Form123;
