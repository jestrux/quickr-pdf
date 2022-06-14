import bankAccountDetails from "./bankAccountDetials";
import companyDetails from "./companyDetails";
import companyManagementAndSignatoryRules from "./companyManagementAndSignatoryRules";
import pepDetails from "./pepDetails";
import pricingDetails from "./pricingDetails";
import purposeOfPaymentDetails from "./purposeOfPaymentDetails";
import requiredDocumentationAndAttachments from "./requiredDocumentationAndAttachments";
import termsOfServiceDetails from "./termsOfServiceDetails";
import ultimateBeneficialOwnershipDetails from "./ultimateBeneficialOwnershipDetails";

export const customDescription = `Please confirm that the following information is accurate. Dintero
pre-fills some information from a variety of public sources, but it
is your responsibility to verify the information in this sign-up
form is true and timely. Please update any details where necessary.
In order to meet regulatory requirements and to provide you with the
best service possible, we need the following information to know the
intent and nature of your business. Should have any questions,
please let us know please via onboarding@dintero.com.
`;

export default function generateContractPdfPayload(details) {
  const introDescription =
    details?.companyProfile?.description || customDescription;
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
    companyDetails(details),
    bankAccountDetails(details),
    purposeOfPaymentDetails(details),
    ...(details.shareholders?.length > 0
      ? [ultimateBeneficialOwnershipDetails(details)]
      : []),
    companyManagementAndSignatoryRules(details),
    requiredDocumentationAndAttachments(details),
    pepDetails(details),
    ...(details?.pricing?.length > 0 ? [pricingDetails(details)] : []),
    ...(details?.terms?.length > 0 ? [termsOfServiceDetails(details)] : []),
  ];
}
