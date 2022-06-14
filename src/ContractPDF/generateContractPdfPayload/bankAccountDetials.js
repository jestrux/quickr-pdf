export default function bankAccountDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Bank account details",
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
                  en: "Business bank provider",
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
                  en: "Bank account number",
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
