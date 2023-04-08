import React, { useState } from "react";
import type { FC } from "react";
import QuestionCard from "./components/QuestionCard";

const List1: FC = () => {
	// 问卷列表数据
	const questionList = [
		{ id: "q1", title: "问卷1", isPublished: true },
		{ id: "q2", title: "问卷2", isPublished: true },
		{ id: "q3", title: "问卷3", isPublished: false },
		{ id: "q4", title: "问卷4", isPublished: false },
	];

	// 编辑事件
	const edit = (id: string) => {
		console.log("id", id);
	};

	return (
		<div>
			<h1>问卷列表页1</h1>
			<div>
				{/* {questionList.map(({ id, title, isPublished }) => (
					<QuestionCard id={id} title={title} isPublished={isPublished} edit={edit} />
				))} */}
			</div>
		</div>
	);
};
export default List1;
