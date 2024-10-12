import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: whitesmoke;
  :hover {
    background: lightgrey;
  }
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
`;

const CommentDiv = styled.div`
  margin: 4px;
  flex-direction: column;
`;

const CommentId = styled.p`
  margin: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const CommentText = styled.p`
  margin: 4px;
  font-size: 16px;
`;

const CommentIcon = styled.img`
  margin-right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <CommentIcon src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
      <CommentDiv>
        <CommentId>{comment.id}</CommentId>
        <CommentText>{comment.content}</CommentText>
      </CommentDiv>
    </Wrapper>
  );
}

export default CommentListItem;
