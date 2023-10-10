import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form365Props {}

const StyledForm365 = styled.div`
  color: pink;
`;

export function Form365(props: Form365Props) {
  return (
    <StyledForm365>
      <h1>Welcome to Form365!</h1>
    </StyledForm365>
  );
}

export default Form365;
