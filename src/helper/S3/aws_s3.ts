import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { SITE } from "@/model/DVM/core.dvm";
import { S3 } from "aws-sdk";
import WbcToaster from "@/modules/core/components/WbcToaster";
const accessKeyId: string = process.env.NEXT_PUBLIC_S3_ACCESSKEYID || "";
const secretAccessKey: string = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY || "";

export const bucket = new S3({
	accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESSKEYID,
	secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
	region: SITE.S3REGION,
});

export const S3ClientInstance = () => {
	return new S3Client({
		credentials: {
			accessKeyId: accessKeyId,
			secretAccessKey: secretAccessKey,
		},
		region: SITE.S3REGION,
	});
};

export const S3GetObject = async (Key: string) => {
	try {
		const client = S3ClientInstance();
		const command = new GetObjectCommand({ Bucket: SITE.S3BUCKET, Key });
		return await getSignedUrl(client, command);
	} catch (error) {
		throw error;
	}
};

export const getKeyFromUrl = (url: string) => {
	const urlParts = url.split("/");
	const eventIndex = urlParts.indexOf("event");
	let key = urlParts.slice(eventIndex).join("/");
	key = key.split("?")[0];
	return key;
};

export default async function s3uploadCore(bucketProps: any) {
	const { file, successResponse, errorResponse } = bucketProps ?? {};
	const contentType = file.type;

	const command = new PutObjectCommand({
		Bucket: SITE.S3BUCKET,
		Key: file.name,
		Body: file,
		ACL: "public-read",
		ContentType: contentType,
	});

	await S3ClientInstance().send(command);

	const { status, url } = await fetch(` https://${SITE.S3BUCKET}.s3.amazonaws.com/${file.name}`, {
		method: "GET",
	});

	if (status === 200) return successResponse(url);
	else return errorResponse();
}
export async function s3upload(file: File, callBack: Function) {
	if (file) {
		s3uploadCore({
			file: file,
			successResponse: (url: string) => {
				callBack(url);
			},
			errorResponse: () => {
				WbcToaster({ timer: 5000, icon: "info", message: "Failed to upload" });
				return callBack();
			},
		});
	} else {
		return callBack();
	}
}
