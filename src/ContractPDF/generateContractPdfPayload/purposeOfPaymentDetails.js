import { getCurrentCurrency } from "./utils";

export default function purposeOfPaymentDetails(details, t) {
  const lessThan = t('less-than');
  const moreThan = t('more-than');

  const averageTransactionValueOptions = {
    "l-100": lessThan + " 100",
    "101-300": "101 - 300",
    "301-600": "301 - 600",
    "601-1000": "601 - 1000",
    "1001-2000": "1001 - 2000",
    "g-2000": moreThan + " 2000",
  };
  
  const annualturnoverOptions = {
    "0-50.000": "0 - 50.000",
    "50.001-500.000": "50.001 - 500.000",
    "500.001-1.000.000": "500.001 - 1.000.000",
    "1.000.001-5.000.000": "1.000.001 - 5.000.000",
    "g-5.000.000": moreThan + " 5.000.000",
  };

  const giftCardPercentage = details.commercialInformation.giftcards
    ? [
        {
          type: "Column",
          content: {
            label: {
              en: t('giftcards-revenue-percent'),
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
              en: t('subscriptions-revenue-percent'),
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
              en: t('do-you-pay-taxes-internationally'),
            },
            value: {
              en: details.commercialInformation.internationalTax ? t('yes') : t('no'),
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
          en: t('purpose-of-payment-details'),
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
                  en: t('do-you-offer-giftcards'),
                },
                value: {
                  en: details.commercialInformation.giftcards ? t('yes') : t('no'),
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
                  en: t('do-you-offer-subscriptions'),
                },
                value: {
                  en: details.commercialInformation.subscriptions
                    ? t('yes')
                    : t('no'),
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
                  en: t('average-transaction-value', {currency: getCurrentCurrency()}),
                },
                value: {
                  en:
                    averageTransactionValueOptions[
                      details.commercialInformation.averageTransactionValue
                    ] + " " + getCurrentCurrency(),
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('projected-sales', {currency: getCurrentCurrency()}),
                },
                value: {
                  en:
                    annualturnoverOptions[
                      details.commercialInformation.annualturnover
                    ] + " " + getCurrentCurrency(),
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('most-expensive-product', {currency: getCurrentCurrency()}),
                },
                value: {
                  en:
                    Number(
                      details.commercialInformation.mostExpensiveProduct
                    ).toLocaleString() + " " + getCurrentCurrency(),
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
                  en: t('will-you-sell-internationally'),
                },
                value: {
                  en: details.commercialInformation.internationalSales
                    ? t('yes')
                    : t('no')
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
