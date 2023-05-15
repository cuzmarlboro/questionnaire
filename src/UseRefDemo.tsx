import React, { memo, useRef } from "react";

const UseRefDemo: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const selectInput = () => {
		const inputElem = inputRef.current;
		if (inputElem) inputElem.select();
	};

	return (
		<div>
			<input ref={inputRef} defaultValue="hello world" />
			<button onClick={selectInput}>选中input</button>
		</div>
	);
};

export default memo(UseRefDemo);
