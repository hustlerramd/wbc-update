import React, { ChangeEvent } from "react";
import SelectInputWBC from "../../inputs/SelectInputWBC";
import { WBCSelectFormType } from "@/model/DVM/components.dvm";

const SelectFormWBC: React.FC<WBCSelectFormType> = (props: WBCSelectFormType) => {
	const { label, SelectInputProps, handleChange, name, placeholder, required, value } = props;
	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		handleChange(name, e.target.value);
	};
	return (
		<div className="flex flex-col w-full">
			<label className="text-sm font-semibold text-gray-500 pb-1 w-full">{label}</label>
			<SelectInputWBC
				defaultOptionProps={{
					...SelectInputProps.defaultOptionProps,
					hasDefault: placeholder !== undefined ? true : false,
					children: placeholder !== undefined ? placeholder : false,
					disabled: placeholder !== undefined ? true : false,
					hidden: placeholder !== undefined ? true : false,
					value: "",
				}}
				selectOptions={SelectInputProps.selectOptions}
				selectProps={{
					className: "border text-sm border-gray-500 focus:outline-none rounded-md",
					...SelectInputProps.selectProps,
					name: name,
					required: required,
					value: value,
					onChange: handleSelectChange,
				}}
			/>
			{/* <p className="text-red-500 text-sm">{errors?.gender}</p> */}
		</div>
	);
};

export default SelectFormWBC;
