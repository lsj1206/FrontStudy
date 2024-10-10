import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
	width: calc(100% - 32px);
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;
	& > *:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const BoxLabel = styled.p`
	margin-top: 4px;
	font-size: 24px;
	font-weight: 500;
`;

function PostWritePage(props) {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<Wrapper>
			<Container>
				<BoxLabel>제목</BoxLabel>
				<TextInput
					height={20}
					value={title}
					onChange={(event) => { setTitle(event.target.value); }}
				/>
				<BoxLabel>본문</BoxLabel>
				<TextInput
					height={300}
					value={content}
					onChange={(event) => { setContent(event.target.value); }}
				/>
				<Button
					title="글쓰기"
					onClick={() => { navigate("/"); }}
				/>
			</Container>
		</Wrapper>
	);
}

export default PostWritePage;
