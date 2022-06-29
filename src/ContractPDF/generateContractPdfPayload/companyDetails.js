export default function companyDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('company-details'),
        },
      },
      body: [
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: t('business-name'),
                },
                value: {
                  en: details.companyName,
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('organisation-number'),
                },
                value: {
                  en: details.organizationNumber,
                },
              },
            },
          ],
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: t('business-trading-name'),
                },
                value: {
                  en: details.commercialInformation.tradingName,
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('business-trading-address'),
                },
                value: {
                  en: details.postalAddress.streetAddress,
                },
              },
            },
          ],
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: t('post-code'),
                },
                value: {
                  en: details.postalAddress.postalCode,
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('city'),
                },
                value: {
                  en: details.postalAddress.city,
                },
              },
            },
          ],
        },
      ],
    },
  };
}
