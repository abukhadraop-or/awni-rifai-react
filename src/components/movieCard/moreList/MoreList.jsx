import React from 'react';
import {
  StyledMoreList,
  UpperSection,
  LowerSection,
  H6,
  Chevron,
  A,
} from 'components/movieCard/moreList/moreList.styled';

function MoreList() {
  return (
    <StyledMoreList>
      <UpperSection>
        <H6>Want to rate or add this item to a list?</H6>
        <A>
          Login <Chevron className="fa solid fa-chevron-right" />
        </A>
      </UpperSection>
      <LowerSection>
        <H6>Not a member?</H6>
        <A>
          Signup and join the community{' '}
          <Chevron className="fa solid fa-chevron-right" />
        </A>
      </LowerSection>
    </StyledMoreList>
  );
}
export default MoreList;
