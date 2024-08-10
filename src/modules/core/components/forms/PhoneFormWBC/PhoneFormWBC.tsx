import * as React from "react";
import PhoneInputWBC from "../../inputs/PhoneInputWBC";

const PhoneFormWBC: React.FC<any> = () => {
	return (
		<div className="flex flex-col w-full">
			<label className="text-sm font-semibold text-gray-500 pb-1 w-full">{/* label */}</label>
			<PhoneInputWBC />
			{/* <p className="text-red-500 text-sm">{errors?.gender}</p> */}
		</div>
	);
};

export default PhoneFormWBC;
