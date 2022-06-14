export default function pepDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Politically exposed persons",
        },
        subtitle: {
          en: "Declaration if any immediate or affiliated persons of the company are considered to be a politically exposed persons (PEP):",
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
                  en: "Are you, any manager or owner considered to be PEP?",
                },
                value: {
                  en: details.declaration.isPEP ? "Yes" : "No",
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: "Are you or any owner affiliated with a known PEP?",
                },
                value: {
                  en: details.declaration.isAffiliatedPEP ? "Yes" : "No",
                },
              },
            },
          ],
        },
      ],
    },
  };
}
