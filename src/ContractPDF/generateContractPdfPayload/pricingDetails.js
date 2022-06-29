import { numberWithCommas } from "./utils";

export default function pricingDetails(details, t) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t('pricing'),
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: t('product-name'),
              },
              {
                en: t('description'),
              },
              {
                en: t('price'),
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
