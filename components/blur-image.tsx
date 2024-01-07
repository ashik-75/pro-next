"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
type BlurImageProps = {
	url: string;
	alt?: string | number;
};
const BlurImage = ({ url, alt }: BlurImageProps) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div className="relative rounded-3xl aspect-w-16 aspect-h-9 overflow-hidden">
			<Image
				fill
				src={url}
				alt={`${alt}`}
				onLoadingComplete={() => setLoaded(true)}
				className={clsx("object-cover duration-700 hover:scale-110", {
					"grayscale blur-xl scale-125": !loaded,
					"grayscale-0 blur-0 scale-100": loaded,
				})}
			/>
		</div>
	);
};

export default BlurImage;
