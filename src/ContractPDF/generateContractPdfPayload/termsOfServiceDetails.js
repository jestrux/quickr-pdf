export default function termsOfServiceDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('terms-of-service'),
        },
        subtitle: {
          en: t('i-have-read-and-accept'),
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: t('agreement'),
              },
              {
                en: t('url'),
              },
            ],
            body: [
              ...details.terms.map((term, i) => {
                return [{ en: term.name }, { en: term.url }];
              }),
            ],
          },
        },
      ],
    },
  };
}
