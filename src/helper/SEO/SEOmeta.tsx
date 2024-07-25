import { MetaDVM } from "@/model/DVM/meta.dvm";

export function setNameMeta(metadata: MetaDVM) {
	return <meta key={metadata.key} name={metadata.property} content={metadata.content} />;
}
export function setPropertyMeta(metadata: MetaDVM) {
	return <meta key={metadata.key} property={metadata.property} content={metadata.content} />;
}
