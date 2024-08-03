import * as React from "react";
import LoginView from "../../components/loginView";
import { useFormStatus } from "react-dom";
import { PureComponentType } from "@/model/DVM/components.dvm";

const LoginController: React.FC<PureComponentType> = () => {
	const { pending } = useFormStatus();

	const handleLoginClick = (event: any) => {
		if (pending) {
			event.preventDefault();
		}
	};
	return <LoginView handleLoginClick={handleLoginClick} />;
};

export default LoginController;
