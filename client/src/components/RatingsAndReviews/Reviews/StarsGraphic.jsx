import React from 'react';
import styled from 'styled-components';

const Filled = styled.span`
  color: black;
`

const Empty = styled.span`
  color: #dedede;
`

export default function StarsGraphic({review}) {
  return (
    <>
      <span>
        <Filled>{'★'.repeat(review.rating)}</Filled>
        <Empty>{'★'.repeat(5 - review.rating)}</Empty>
      </span>
    </>
  )
}