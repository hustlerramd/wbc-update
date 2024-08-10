export interface FieldErrors {
	[key: string]: string | null;
}

export interface UseActionStateResult<T, R> {
	state: T;
	isLoading: boolean;
	error: Error | null;
	fieldErrors: FieldErrors;
	execute: (formData: T, validate: (formData: T) => FieldErrors, action: string) => void;
	clearFieldError: (field: string) => void;
	response: R | null;
}
export const SITE = {
	S3BUCKET: process.env.NEXT_PUBLIC_S3_BUCKET,
	S3REGION: process.env.NEXT_PUBLIC_S3_REGION,
	YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
	S3_ACCESSKEYID: process.env.NEXT_PUBLIC_S3_ACCESSKEYID,
	S3_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
	SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
	LINKEDIN_ID: process.env.NEXT_PUBLIC_LINKEDIN_ID,
	MANYCHAT_ID: process.env.NEXT_PUBLIC_MANYCHAT_ID,
	FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
	STATCOUNTER_SECURITY: process.env.NEXT_PUBLIC_STATCOUNTER_SECURITY,
	STATCOUNTER_PROJECT: process.env.NEXT_PUBLIC_STATCOUNTER_PROJECT,
	GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
	GOOGLE_MAP_API: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
	STRIP_PK_KEY: process.env.NEXT_PUBLIC_STRIP_PK_KEY,
	SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
	CHATBOT_ID: process.env.NEXT_PUBLIC_CHATBOT_ID,
};
export const allowedChars = ["Alt", "Control", "Backspace", "Tab", "Shift", "CapsLock", "ContextMenu", "Enter"];

export const smallChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export const capitalChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
export const digitChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
