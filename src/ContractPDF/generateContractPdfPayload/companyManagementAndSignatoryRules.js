export default function companyManagementAndSignatoryRules(details, t) {
  const signatories = details.personRoles.filter(
    ({ isSignatory }) => isSignatory
  );

  const translatedRole = (role) =>
    !role
      ? ""
      : t(
          role
            .toString()
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("_", "-")
        );

  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: t("company-signatory-rules.title"),
        },
        subtitle: {
          en: t("company-signatory-rules.description"),
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: t("name-and-role"),
              },
              {
                en: t("email"),
              },
              {
                en: t("date-of-birth"),
              },
            ],
            body: [
              ...signatories.map((owner, i) => {
                return [
                  {
                    en: `${owner.name} - ${translatedRole(owner.title)}`,
                  },
                  { en: owner.email },
                  { en: owner.birthDate },
                ];
              }),
            ],
          },
        },
      ],
    },
  };
}
