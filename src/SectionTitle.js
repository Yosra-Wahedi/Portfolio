import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 1.5rem;
    color:rgb(243, 187, 3);
    margin-top: 1rem;
  }
  h2 {
    font-size: 3.5rem;
    margin-top: 0.5rem;
    color:rgb(243, 187, 3);
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 3.3rem;
    }
  }
`;
export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}