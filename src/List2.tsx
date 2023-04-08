import React, { useState } from "react";
import type { FC } from "react";
import produce from "immer";
import QuestionCard from "./components/QuestionCard";

const List2: FC = () => {
	// 问卷列表数据
	const [questionList, setQuestionList] = useState([
		{ id: "q1", title: "问卷1", isPublished: true },
		{ id: "q2", title: "问卷2", isPublished: true },
		{ id: "q3", title: "问卷3", isPublished: false },
		{ id: "q4", title: "问卷4", isPublished: false },
	]);

	// 发布问卷
	const publishQuestion = (id: string) => {
		// setQuestionList(
		// 	questionList.map((q) => {
		// 		if (q.id !== id) return q;
		// 		return { ...q, isPublished: true };
		// 	})
		// );

		// immer 方式
		setQuestionList(
			produce((draft) => {
				const index = questionList.findIndex((q) => q.id === id);
				draft[index].isPublished = true;
			})
		);
	};

	// 新增问卷
	const add = () => {
		const r = questionList.length + 1;
		// setQuestionList(questionList.concat({ id: `q${r}`, title: `问卷${r}`, isPublished: false }));

		// immer 方式
		setQuestionList(
			produce((draft) => {
				draft.push({ id: `q${r}`, title: `问卷${r}`, isPublished: false });
			})
		);
	};

	// 删除问卷
	const deleteQuestion = (id: string) => {
		// setQuestionList(questionList.filter((q) => q.id !== id));

		// immer 方式
		setQuestionList(
			produce((draft) => {
				const index = draft.findIndex((q) => q.id === id);
				draft.splice(index, 1);
			})
		);
	};

	return (
		<div>
			<h1>问卷列表页2</h1>
			<div>
				{questionList.map(({ id, title, isPublished }) => (
					<QuestionCard
						id={id}
						title={title}
						isPublished={isPublished}
						publishQuestion={publishQuestion}
						deleteQuestion={deleteQuestion}
					/>
				))}
			</div>
			<button onClick={add}>新增问卷</button>
		</div>
	);
};
export default List2;
