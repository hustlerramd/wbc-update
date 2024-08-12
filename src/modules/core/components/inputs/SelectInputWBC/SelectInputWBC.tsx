import { WBCSelectInputType, WBCSelectOptionType } from "@/model/DVM/components.dvm";
import React from "react";
import SelectInputOtionWBC from "../SelectInputOtionWBC";

const SelectInputWBC: React.FC<WBCSelectInputType> = (props: WBCSelectInputType) => {
	const { selectOptions, defaultOptionProps, selectProps } = props;
	const { hasDefault = false, children, ...restOptionProps } = defaultOptionProps;
	const { value, ...restSelectProps } = selectProps;
	return hasDefault === true ? (
		<select value={value} {...restSelectProps}>
			<option key={0} {...restOptionProps}>
				{children}
			</option>
			{selectOptions.map((option: WBCSelectOptionType) => (
				<SelectInputOtionWBC {...option} />
			))}
		</select>
	) : (
		<select value={value} {...restSelectProps}>
			{selectOptions.map((option: WBCSelectOptionType, index: number) => (
				<SelectInputOtionWBC {...option} key={index + 1} />
			))}
		</select>
	);
};

export default SelectInputWBC;
