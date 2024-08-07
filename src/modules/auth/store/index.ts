import WBC_API from "@/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import API_ROUTES from "../model/constants/constants";

// TODO remove any type
interface AuthProps {
	auth: any;
	storeAuthDetails: (data: any) => void;
	fetchAuthApi?: () => void;
}

const fetchAuthApi = async (set: any) => {
	const { data, status } = await WBC_API.get(API_ROUTES.PROTECTED_TOKEN);
	if (status === 200) {
		return set({
			auth: data,
		});
	}
};

export const authStore = create<AuthProps>()(
	persist(
		(set) => ({
			auth: {},
			storeAuthDetails: (data) => set({ auth: { ...data } }),
			fetchAuthApi: () => fetchAuthApi(set),
		}),
		{
			name: "auth",
		}
	)
);
