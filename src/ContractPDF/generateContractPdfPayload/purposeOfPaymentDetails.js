export default function purposeOfPaymentDetails(details) {
  const averageTransactionValueOptions = {
    "l-100": "Less than 100",
    "101-300": "101 - 300",
    "301-600": "301 - 600",
    "601-1000": "601 - 1000",
    "1001-2000": "1001 - 2000",
    "g-2000": "More than 2000",
  };

  const annualturnoverOptions = {
    "0-50.000": "0 - 50.000",
    "50.001-500.000": "50.001 - 500.000",
    "500.001-1.000.000": "500.001 - 1.000.000",
    "1.000.001-5.000.000": "1.000.001 - 5.000.000",
    "g-5.000.000": "More than 5.000.000",
  };

  const giftCardPercentage = details.commercialInformation.giftcards
    ? [
        {
          type: "Column",
          content: {
            label: {
              en: "What % of total revenue is gift cards?",
            },
            value: {
              en: details.commercialInformation.giftcardsPercentage + "%",
            },
          },
        },
      ]
    : [];

  const subscriptionsPercentage = details.commercialInformation.subscriptions
    ? [
        {
          type: "Column",
          content: {
            label: {
              en: "What % of total revenue is subscriptions?",
            },
            value: {
              en: details.commercialInformation.subscriptionsPercentage + "%",
            },
          },
        },
      ]
    : [];

  const internationalTaxes = details.commercialInformation.internationalSales
    ? [
        {
          type: "Column",
          content: {
            label: {
              en: "Do you pay taxes internationally?",
            },
            value: {
              en: details.commercialInformation.internationalTax ? "Yes" : "No",
            },
          },
        },
      ]
    : [];

  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Purpose of payment details",
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
                  en: "Do you offer gift cards to your customers?",
                },
                value: {
                  en: details.commercialInformation.giftcards ? "Yes" : "No",
                },
              },
            },
            ...giftCardPercentage,
          ],
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: "Do you offer subscriptions to your customers?",
                },
                value: {
                  en: details.commercialInformation.subscriptions
                    ? "Yes"
                    : "No",
                },
              },
            },
            ...subscriptionsPercentage,
          ],
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: "Average transaction value",
                },
                value: {
                  en:
                    averageTransactionValueOptions[
                      details.commercialInformation.averageTransactionValue
                    ] + " NOK",
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: "Projected 12 month sales",
                },
                value: {
                  en:
                    annualturnoverOptions[
                      details.commercialInformation.annualturnover
                    ] + " NOK",
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: "Your most expensive product",
                },
                value: {
                  en:
                    Number(
                      details.commercialInformation.mostExpensiveProduct
                    ).toLocaleString() + " NOK",
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
                  en: "Will you sell internationally?",
                },
                value: {
                  en: details.commercialInformation.internationalSales
                    ? "Yes"
                    : "No",
                },
              },
            },
            ...internationalTaxes,
          ],
        },
      ],
    },
  };
}
