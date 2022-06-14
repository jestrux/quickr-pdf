export default function ultimateBeneficialOwnershipDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Ultimate benefical ownership details",
        },
        subtitle: {
          en: "Complete list of all known ultimate beneficial owners of the company that owns 25% shares or more.",
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: "Name of ultimate owner",
              },
              {
                en: "Ownership stake in %",
              },
              {
                en: "Date of birth (DD/MM/YYYY)",
              },
            ],
            body: [
              ...details.shareholders.map((owner, i) => {
                return [
                  { en: owner.name },
                  { en: owner.stakes + "%" },
                  { en: owner.birthDate },
                ];
              }),
            ],
          },
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: "Are there other factors influencing control of the company?",
                },
                value: {
                  en: details.declaration.influencingFactors ? "Yes" : "No",
                },
              },
            },
            // {
            // 	type: "Column",
            // 	content: {
            // 		label: {
            // 			en: "Description",
            // 		},
            // 		value: {
            // 			en: "Herein lie the factors, all factors that influence the direction of the compoany.",
            // 		},
            // 	},
            // },
          ],
        },
        {
          type: "Row",
          content: [
            {
              type: "Column",
              content: {
                label: {
                  en: "I have confirmed that the company ownership is correct and up to date.",
                },
                value: {
                  en: details.declaration.ownershipChanged
                    ? "Tenant confirmed"
                    : "Pending confirmation",
                },
              },
            },
          ],
        },
      ],
    },
  };
}
