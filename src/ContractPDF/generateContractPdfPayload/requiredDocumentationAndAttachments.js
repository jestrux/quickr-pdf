export default function requiredDocumentationAndAttachments(details, t) {
	return {
		type: "Section",
		content: {
			header: {
				title: {
					en: t('required-documents.title'),
				},
			},
			body: !details.attachments?.length
				? [
						{
							type: "Row",
							content: [
								{
									type: "Column",
									content: {
										label: {
											en: t('required-documents.empty-state'),
										},
										value: {
											en: " ",
										},
									},
								},
							],
						},
				  ]
				: details.attachments.map((attachment, i) => {
						return {
							type: "Row",
							content: [
								{
									type: "Column",
									content: {
										label: {
											en: `${t('attachment')} ${i + 1}`,
										},
										value: {
											en: attachment,
										},
									},
								},
							],
						};
				  }),
		},
	};
}
