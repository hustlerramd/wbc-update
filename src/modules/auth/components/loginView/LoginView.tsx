"use client";
import * as React from "react";
import { authenticate } from "@/app/lib/action";
import { useFormState, useFormStatus } from "react-dom";
import WbcButton from "@/modules/core/components/WbcButton";
import WbcImage from "@/modules/core/components/WbcImage";
import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
type LoginViewProps = {
	handleLoginClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginView: React.FC<LoginViewProps> = (props: LoginViewProps) => {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const { pending } = useFormStatus();
	const { handleLoginClick } = props;
	return (
		<div className="basis-full md:basis-3/4 lg:basis-1/2 !w-full !min-w-full content-center	">
			<div className="items-center max-w-[28.75rem] w-full flex justify-center flex-col gap-5 p-5 mx-auto">
				<WbcImage src="/img/header-logo.svg" alt="logo" height={130} width={130} />
				<form action={dispatch} className="w-full flex flex-col gap-5 p-5 ">
					{/* <input type="email" name="email" placeholder="Email" required /> */}
					<EmailFormWBC
						label="Email"
						name="email"
						placeholder="Email"
						required
						inputProps={{
							className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
						}}
					/>
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
