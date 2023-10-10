import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form401Props {}

const StyledForm401 = styled.div`
  color: pink;
`;

export function Form401(props: Form401Props) {
  return (
    <StyledForm401>
      <h1>Welcome to Form401!</h1>
    </StyledForm401>
  );
}

export default Form401;
