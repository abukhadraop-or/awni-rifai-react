import React from 'react';
import {
  StyledMoreList,
  UpperSection,
  LowerSection,
  Title,
  Chevron,
  Link,
} from 'components/MoreList/more-list.styled';

/**
 * Render More List in the movie card.
 * 
 * @return {JSX.Element}
 */
function MoreList() {
  return (
    <StyledMoreList role="tooltip">
      <UpperSection>
        <Title>Want to rate or add this item to a list?</Title>
        <Link>
          Login <Chevron className="fa solid fa-chevron-right" />
        </Link>
      </UpperSection>
      <LowerSection>
        <Title>Not a member?</Title>
        <Link>
          Signup and join the community{' '}
          <Chevron className="fa solid fa-chevron-right" />
        </Link>
      </LowerSection>
    </StyledMoreList>
  );
}
export default MoreList;
