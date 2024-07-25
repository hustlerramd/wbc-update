import { HeadCombinedData } from "@/model/DVM/meta.dvm";
import { setTitle } from "./SEOHead";
import { setNameMeta, setPropertyMeta } from "./SEOmeta";

export function setSEO(seo: HeadCombinedData) {
	return seo ? (
		<>
			{setTitle(seo.title)}
			{seo.metaNames.map(setNameMeta)}
			{seo.metaProperties.map(setPropertyMeta)}
		</>
	) : null;
}
