import { WBCDateInputType } from "@/model/DVM/components.dvm";
import { INPUT_TYPE } from "@/modules/core/models/constants/constants";
import React, { FC } from "react";

const DateInputWBC: FC<WBCDateInputType> = (props: WBCDateInputType) => {
	return <input type={INPUT_TYPE.DATE} {...props} />;
};

export default DateInputWBC;
