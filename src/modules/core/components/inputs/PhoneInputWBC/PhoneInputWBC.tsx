import * as React from "react";
import PhoneInput from "react-phone-number-input/input";

const PhoneInputWBC: React.FC<any> = () => {
	return (
		<PhoneInput
			id="PhoneInputInput"
			placeholder="Enter Mobile number"
			name="contactNo"
			international={true}
			countryCallingCodeEditable={false}
			// value={formValues.contactNo}
			onChange={() => {}}
			className={"PhoneInputInput-force-custom border border-gray-500"}
		/>
	);
};

export default PhoneInputWBC;
