export default function termsOfServiceDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Terms of service",
        },
        subtitle: {
          en: "I have read and agreed to the following Supplier terms as listed below",
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: "Terms of service",
              },
              {
                en: "Description",
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
