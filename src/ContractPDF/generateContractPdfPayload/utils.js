export const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getCurrentCurrency = (lng = "en") => {
	return { en: "NOK", se: "SEK", no: "NOK" }[lng] || "NOK";
};

export const customDescription = (locale = "en") => {
	const customDescriptionEn = `Please confirm that the following information is accurate. Dintero
pre-fills some information from a variety of public sources, but it
is your responsibility to verify the information in this sign-up
form is true and timely. Please update any details where necessary.
In order to meet regulatory requirements and to provide you with the
best service possible, we need the following information to know the
intent and nature of your business. Should have any questions,
please let us know please via onboarding@dintero.com.
`;

	const description = {
		en: customDescriptionEn,
		se: "Swed: " + customDescriptionEn,
		no: "Norwe: " + customDescriptionEn,
	};

	return description[locale];
};
