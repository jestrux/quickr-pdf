export default function ultimateBeneficialOwnershipDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('ultimate-beneficial-ownership.title'),
        },
        subtitle: {
          en: t('ultimate-beneficial-ownership.description'),
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: t('name-of-ultimate-owner'),
              },
              {
                en: t('ownership-stake'),
              },
              {
                en: t('date-of-birth'),
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
                  en: t('other-company-control-factors'),
                },
                value: {
                  en: details.declaration.influencingFactors ? t('yes') : t('no'),
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
                  en: t('ownership-confirmation'),
                },
                value: {
                  en: details.declaration.ownershipChanged
                    ? t('tenant-confirmed')
                    : t('pending-confirmation'),
                },
              },
            },
          ],
        },
      ],
    },
  };
}
