import styled from 'styled-components';

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;

  .about {
    display: flex;
    align-items: center;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  max-width: 1200px;
`;

export const Stacks = styled.ul`
  display: inline-flex;
  align-self: flex-start;
  li {
    &:not(:last-child) {
      margin-right: 8px;
    }
    svg {
      width: 35px;
      height: 35px;
      color: ${props => props.theme.colors.light.stacksColor};
    }
  }
`;
