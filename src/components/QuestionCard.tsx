import React from "react";
import type { FC } from "react";
import "./QuestionCard.css";

interface Props {
	id: string;
	title: string;
	isPublished: boolean;
	publishQuestion: (id: string) => void;
	deleteQuestion: (id: string) => void;
}

const QuestionCard: FC<Props> = (props) => {
	const { id, title, isPublished, publishQuestion, deleteQuestion } = props;

	return (
		<div key={id} className="list-item">
			<strong>{title}</strong>
			&nbsp;
			{isPublished ? <span style={{ color: "green" }}>已发布</span> : <span>未发布</span>}
			&nbsp;
			<button onClick={() => publishQuestion(id)}>发布问卷</button>
			&nbsp;
			<button onClick={() => deleteQuestion(id)}>删除问卷</button>
		</div>
	);
};

export default QuestionCard;
