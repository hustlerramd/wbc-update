import { WBCLinkType } from "@/model/DVM/components.dvm";
import Link from "next/link";
import React from "react";

const WbcLink: React.FC<WBCLinkType> = (props: WBCLinkType) => {
	const { openInNewTab, children, ...restLinkProps } = props;
	return openInNewTab ? (
		<Link passHref {...restLinkProps}>
			<a target="_blank">{children}</a>
		</Link>
	) : (
		<Link {...restLinkProps}>{children}</Link>
	);
};

export default WbcLink;
