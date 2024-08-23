import * as React from "react";
import AutoCompleteInputWBC from "../../inputs/AutoCompleteInputWBC";
import { AutoCompleteFormInputType } from "@/model/DVM/components.dvm";

const AutoCompleteFormWBC: React.FC<AutoCompleteFormInputType<any>> = (props: AutoCompleteFormInputType<any>) => {
	const { label, inputProps } = props;

	return (
		<div className="flex flex-col w-full">
			<label className="text-sm font-semibold text-gray-500 pb-1 w-full">{label}</label>
			<AutoCompleteInputWBC {...inputProps} />
		</div>
	);
};

export default AutoCompleteFormWBC;
