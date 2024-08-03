"use client";
import * as React from "react";
import { authenticate } from "@/app/lib/action";
import { useFormState, useFormStatus } from "react-dom";
import WbcButton from "@/modules/core/components/WbcButton";
type LoginViewProps = {
	handleLoginClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginView: React.FC<LoginViewProps> = (props: LoginViewProps) => {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const { pending } = useFormStatus();
	const { handleLoginClick } = props;
	return (
		<div className="basis-full md:basis-3/4 lg:basis-1/2">
			<div className="max-w-md items-center w-full flex justify-center flex-col gap-5 p-5">
				<form action={dispatch}>
					<input type="email" name="email" placeholder="Email" required />
					<input type="password" name="password" placeholder="Password" required />
					<div>{errorMessage && <p>{errorMessage}</p>}</div>
					<WbcButton aria-disabled={pending} type="submit" onClick={handleLoginClick}>
						Login
					</WbcButton>
				</form>
			</div>
		</div>
	);
};

export default LoginView;
