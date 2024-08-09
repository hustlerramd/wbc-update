import ENV from "./env";
import { fileExt, fileTypes } from "./files";
import LocalStore from "./localStorage";
import { RoutesConst } from "./routes";
import { server } from "./server";
const siteConstants = {
	ENV: ENV,
	fileTypes: fileTypes,
	fileExt: fileExt,
	server: server,
	LocalStore: LocalStore,
	RoutesConst: RoutesConst,
};
export default siteConstants;
