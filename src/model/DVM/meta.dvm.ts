export type MetaDVM = {
	key: string;
	property: string;
	content: string;
};
export type HeadCombinedData = {
	title: string;
	metaNames: Array<MetaDVM>;
	metaProperties: Array<MetaDVM>;
};
