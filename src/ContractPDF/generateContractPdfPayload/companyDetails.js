export default function companyDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Company details",
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
                  en: "Business name",
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
                  en: "Organization number",
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
                  en: "Business trading name",
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
                  en: "Business trading address",
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
                  en: "Post code",
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
                  en: "City",
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
