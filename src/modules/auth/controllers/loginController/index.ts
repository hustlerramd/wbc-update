import dynamic from "next/dynamic";

const LoginController = dynamic(() => import("./LoginController"), {
	ssr: false,
});
export default LoginController;
