export default function pepDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('pep-details.title'),
        },
        subtitle: {
          en: t('pep-details.description'),
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
                  en: t('are-you-a-pep'),
                },
                value: {
                  en: details.declaration.isPEP ? t('yes') : t('no'),
                },
              },
            },
            {
              type: "Column",
              content: {
                label: {
                  en: t('are-you-affiliated-with-a-pep'),
                },
                value: {
                  en: details.declaration.isAffiliatedPEP ? t('yes') : t('no'),
                },
              },
            },
          ],
        },
      ],
    },
  };
}
