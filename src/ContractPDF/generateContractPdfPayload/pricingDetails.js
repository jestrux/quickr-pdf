import numberWithCommas from "./numberWithCommas";

export default function pricingDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Pricing",
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: "Product name",
              },
              {
                en: "Description",
              },
              {
                en: "Price",
              },
            ],
            body: [
              ...details.pricing.map((entry, i) => {
                return [
                  { en: entry.product },
                  { en: entry.description },
                  { en: numberWithCommas(entry.price) },
                ];
              }),
            ],
          },
        },
      ],
    },
  };
}
