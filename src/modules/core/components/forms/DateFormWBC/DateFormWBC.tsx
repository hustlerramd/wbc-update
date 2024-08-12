import React, { FC, useEffect, useState } from "react";
import DateInputWBC from "../../inputs/DateInputWBC";
import { WBCDateFormInputType, WBCDateInputType } from "@/model/DVM/components.dvm";

const DateFormWBC: FC<WBCDateFormInputType> = (props: WBCDateFormInputType) => {
	const [dateInputWBCProps, setDateInputWBCProps] = useState<WBCDateInputType>({});
	const { label, name, handleChange, value, placeholder, inputProps, required } = props;
	useEffect(() => {
		let dateInputProps: WBCDateInputType = {};
		dateInputProps = { ...inputProps };
		dateInputProps.name = name;
		dateInputProps.placeholder = placeholder;
		dateInputProps.required = required;
		if (value) {
			dateInputProps.value = value;
		}
		setDateInputWBCProps(dateInputProps);
	}, [props]);
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (handleChange !== undefined) {
			handleChange(name as string, event.target.value);
		}
	};
	return (
		<div className="flex flex-col w-full">
			<label className="text-sm font-semibold text-gray-500 pb-1 w-full">{label}</label>
			<DateInputWBC onChange={handleOnChange} {...dateInputWBCProps} />
			{/* <p className="text-red-500 text-sm">{errors?.gender}</p> */}
		</div>
	);
};

export default DateFormWBC;
