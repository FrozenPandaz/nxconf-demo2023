import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form500Props {}

const StyledForm500 = styled.div`
  color: pink;
`;

export function Form500(props: Form500Props) {
  return (
    <StyledForm500>
      <h1>Welcome to Form500!</h1>
    </StyledForm500>
  );
}

export default Form500;
