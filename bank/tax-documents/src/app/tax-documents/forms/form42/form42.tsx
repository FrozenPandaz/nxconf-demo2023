import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form42Props {}

const StyledForm42 = styled.div`
  color: pink;
`;

export function Form42(props: Form42Props) {
  return (
    <StyledForm42>
      <h1>Welcome to Form42!</h1>
    </StyledForm42>
  );
}

export default Form42;
