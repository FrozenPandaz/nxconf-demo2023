import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Form400Props {}

const StyledForm400 = styled.div`
  color: pink;
`;

export function Form400(props: Form400Props) {
  return (
    <StyledForm400>
      <h1>Welcome to Form400!</h1>
    </StyledForm400>
  );
}

export default Form400;
