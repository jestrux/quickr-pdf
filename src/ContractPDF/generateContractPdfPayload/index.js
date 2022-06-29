import { customDescription } from "./utils";
import bankAccountDetails from "./bankAccountDetials";
import companyDetails from "./companyDetails";
import companyManagementAndSignatoryRules from "./companyManagementAndSignatoryRules";
import pepDetails from "./pepDetails";
import pricingDetails from "./pricingDetails";
import purposeOfPaymentDetails from "./purposeOfPaymentDetails";
import requiredDocumentationAndAttachments from "./requiredDocumentationAndAttachments";
import termsOfServiceDetails from "./termsOfServiceDetails";
import ultimateBeneficialOwnershipDetails from "./ultimateBeneficialOwnershipDetails";

import i18n from "i18next";
import { englishTranslation, swedishTranslation, norwegianTranslation } from "./translations";

const i18stance = i18n.createInstance();

export default function generateContractPdfPayload(details, lng = "en") {
  console.log("Translator language: ", lng);

  i18stance.init({
    resources: {
      en: { translation: englishTranslation },
      se: { translation: swedishTranslation },
      no: { translation: norwegianTranslation },
    },
    lng,
    fallbackLng: "en"
  });

  const introDescription =
    details?.companyProfile?.description || customDescription(lng);
  const logo = details?.companyProfile?.logo;

  return [
    {
      type: "Logo",
      content: logo,
    },
    {
      type: "Paragraph",
      content: {
        en: introDescription,
      },
    },
    companyDetails(details, i18stance.t),
    bankAccountDetails(details, i18stance.t),
    purposeOfPaymentDetails(details, i18stance.t),
    ...(details.shareholders?.length > 0
      ? [ultimateBeneficialOwnershipDetails(details, i18stance.t)]
      : []),
    companyManagementAndSignatoryRules(details, i18stance.t),
    requiredDocumentationAndAttachments(details, i18stance.t),
    pepDetails(details, i18stance.t),
    ...(details?.pricing?.length > 0 ? [pricingDetails(details, i18stance.t)] : []),
    ...(details?.terms?.length > 0 ? [termsOfServiceDetails(details, i18stance.t)] : []),
  ];
}
