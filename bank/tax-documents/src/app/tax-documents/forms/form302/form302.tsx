import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form302Props {}

const StyledForm302 = styled.div`
  color: pink;
`;

export function Form302(props: Form302Props) {
  return (
    <StyledForm302>
      <h1>Welcome to Form302!</h1>
    </StyledForm302>
  );
}

export default Form302;
