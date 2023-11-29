import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 0.5rem;
  background-color: rgb(243, 187, 3);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  .icon {
    color: rgb(243, 187, 3);
    background-color: black;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

`;
export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}