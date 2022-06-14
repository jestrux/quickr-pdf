export default function requiredDocumentationAndAttachments(details) {
	return {
		type: "Section",
		content: {
			header: {
				title: {
					en: "Required documentation and attachments",
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
											en: "No attachments added.",
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
											en: `Attachment ${i + 1}`,
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
