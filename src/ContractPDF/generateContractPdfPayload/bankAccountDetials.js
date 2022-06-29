export default function bankAccountDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('bank-account-details'),
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
                  en: t('business-bank-provider'),
                },
                value: {
                  en: details.bankAccount.bankName,
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('bank-account-number'),
                },
                value: {
                  en: details.bankAccount.bankAccountNumber,
                },
              },
            },
          ],
        },
      ],
    },
  };
}
