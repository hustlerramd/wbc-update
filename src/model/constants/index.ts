import ENV from "./env";
import { fileExt, fileTypes } from "./files";
import LocalStore from "./localStorage";
import { server } from "./server";
const siteConstants = {
	ENV: ENV,
	fileTypes: fileTypes,
	fileExt: fileExt,
	server: server,
	LocalStore: LocalStore,
};
export default siteConstants;
