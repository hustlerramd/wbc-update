import { AutoCompleteInputType } from "@/model/DVM/components.dvm";
import React, { FC, useState } from "react";

const AutoCompleteInputWBC: FC<AutoCompleteInputType<any>> = (props: AutoCompleteInputType<any>) => {
	const { items, onSelect, inputProps, itemToString, name } = props;
	const [filteredItems, setFilteredItems] = useState<any[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value) {
			setFilteredItems(items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};

	const handleSelect = (item: any) => {
		setIsOpen(false);
		onSelect(name, item.iso2);
	};
	return (
		<div className="relative">
			<input type="text" onChange={handleInputChange} {...inputProps} />
			{filteredItems.length > 0 && (
				<ul className="border-2 max-h-72 border-gray-500 bdiaorder-solid w-full bg-white rounded-md rounded-t-none p-1 absolute top-[40px] overflow-y-auto z-10">
					{filteredItems.map((item, index) => (
						<li className="hover:bg-slate-200" key={index} onClick={() => handleSelect(item)}>
							{itemToString(item)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoCompleteInputWBC;
