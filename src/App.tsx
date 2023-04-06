import React from "react";
import "./App.css";

// 列表页
function App() {
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
			<h1>问卷列表页</h1>
			<div>
				{questionList.map(({ id, title, isPublished }) => (
					<div key={id} className="list-item">
						<strong>{title}</strong>
						&nbsp;
						{/* 条件判断 */}
						{isPublished ? <span style={{ color: "green" }}>已发布</span> : <span>未发布</span>}
						&nbsp;
						<button onClick={() => edit(id)}>编辑事件</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
