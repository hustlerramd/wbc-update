import { AutoCompleteInputType } from "@/model/DVM/components.dvm";
import React, { FC, useState, useCallback } from "react";

const AutoCompleteInputWBC: FC<AutoCompleteInputType<any>> = (props: AutoCompleteInputType<any>) => {
	const { items, onSelect, inputProps, itemToString, name } = props;
	const [filteredItems, setFilteredItems] = useState<any[]>([]);
	const [selectedText, setSelectedText] = useState<string>("");
	const [isOpen, setIsOpen] = useState(false);

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			setSelectedText(value);
			if (value) {
				setFilteredItems(items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
				setIsOpen(true);
			} else {
				setIsOpen(false);
			}
		},
		[items]
	);

	const handleSelect = (item: any) => {
		setSelectedText(item.name);
		onSelect(name, item.iso2);
		setIsOpen(false);
	};

	const handleInputBlur = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 100); // Delay closing to allow click on suggestion
	};

	return (
		<div className="relative">
			<input type="text" onChange={handleInputChange} onBlur={handleInputBlur} value={selectedText} {...inputProps} />
			{isOpen && filteredItems.length > 0 && (
				<ul className="border-2 max-h-72 border-gray-500 border-solid w-full bg-white rounded-md rounded-t-none p-1 absolute top-[40px] overflow-y-auto z-10">
					{filteredItems.map((item, index) => (
						<li
							className="hover:bg-slate-200 cursor-pointer"
							key={index}
							onMouseDown={(e) => e.preventDefault()} // Prevent blur when clicking item
							onClick={() => handleSelect(item)}
						>
							{itemToString(item)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoCompleteInputWBC;
