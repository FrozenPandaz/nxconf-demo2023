import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form360Props {}

const StyledForm360 = styled.div`
  color: pink;
`;

export function Form360(props: Form360Props) {
  return (
    <StyledForm360>
      <h1>Welcome to Form360!</h1>
    </StyledForm360>
  );
}

export default Form360;
