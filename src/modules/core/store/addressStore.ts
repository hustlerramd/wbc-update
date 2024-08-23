import WBC_OLD_API from "@/api/apiService_old";
import { createWithEqualityFn } from "zustand/traditional";

interface AddressProps {
	countryList: [];
	newCountryList: [];
	stateList: [];
	cityList: [];
	languageList: [];
	// storeUserEPWS: (data: any) => void
	fetchCountry: () => void;
	fetchLanguage: () => void;
	fetchNewCountry: () => Promise<any>;
	fetchState: (country_id: string) => void;
	fetchCity: (country_id: string, state_id: string) => void;
	updateStateList: (newStateList: any[]) => void;
	updateCityList: (newCityList: any[]) => void;
}

export const fetchCountry = async (set: any) => {
	const { data } = await WBC_OLD_API.get("/auth/getcountryname");
	return set({
		countryList: data ?? [],
	});
};
export const fetchLanguage = async (set: any) => {
	const { data } = await WBC_OLD_API.get<any>("/v2/miscellaneous/languages");
	return set({
		languageList: data.payload ?? [],
	});
};

export const fetchState = async (set: any, selectedCountry: string) => {
	const { data } = await WBC_OLD_API.get(`/auth/getstatename?country=${selectedCountry}`);
	return set({
		stateList: data ?? [],
	});
};

export const fetchCity = async (set: any, selectedCountry: string, selectedState: string) => {
	const { data } = await WBC_OLD_API.get(`/auth/getcityname?country=${selectedCountry}&state=${selectedState}`);
	return set({
		cityList: data ?? [],
	});
};

export const fetchNewCountry = async (set: any): Promise<any> => {
	const { data } = await WBC_OLD_API.get<any>("/v2/miscellaneous/countries");
	return set({
		newCountryList: data?.payload ?? [],
	});
};

export const updateStateList = (set: any, newStateList: any[]) => {
	set({ stateList: newStateList });
};

export const updateCityList = (set: any, newCityList: any[]) => {
	set({ cityList: newCityList });
};

export const addressStore = createWithEqualityFn<AddressProps>()((set) => ({
	countryList: [],
	newCountryList: [],
	stateList: [],
	cityList: [],
	languageList: [],
	// storeUserEPWS: data => set({ userWS: data }),
	fetchCountry: () => fetchCountry(set),
	fetchLanguage: () => fetchLanguage(set),
	fetchNewCountry: (): Promise<any> => fetchNewCountry(set),
	fetchState: (selectedCountry: string) => fetchState(set, selectedCountry),
	fetchCity: (selectedCountry: string, selectedState: string) => fetchCity(set, selectedCountry, selectedState),
	updateStateList: (newStateList: any[]) => updateStateList(set, newStateList),
	updateCityList: (newCityList: any[]) => updateCityList(set, newCityList),
}));
