export default function companyManagementAndSignatoryRules(details) {
  const signatories = details.personRoles.filter(
    ({ isSignatory }) => isSignatory
  );

  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Company managment and signatory rules",
        },
        subtitle: {
          en: "List of required signatures by signatory / signatories of the Customer",
        },
      },
      body: [
        {
          type: "Table",
          content: {
            header: [
              {
                en: "Name & role of signatory",
              },
              {
                en: "Email address",
              },
              {
                en: "Date of birth (DD/MM/YYYY)",
              },
            ],
            body: [
              ...signatories.map((owner, i) => {
                return [
                  { en: `${owner.name} - ${owner.title}` },
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
