import { h } from 'preact';
import generateContractPdfPayload from "./generateContractPdfPayload";
import Section from "./Section";

function ContractPDF({ contract }) {
	const data = generateContractPdfPayload(contract);

	const themeColorSet =
		contract?.companyProfile?.color?.length &&
		contract.companyProfile.color != "373737";

	return (
		<div id="pdfPreview">
			<style>
				{
					/*css*/ `
						#pdfPreview h1, 
						#pdfPreview h2, 
						#pdfPreview h3, 
						#pdfPreview h4, 
						#pdfPreview h5, 
						#pdfPreview h6 {
							font-family: "Roboto Flex", sans-serif;
						}

						#pdfPreview {
							font-family: system-ui;
							font-size: 1rem;
							font-weight: 350;
							line-height: 1.45;
							color: #000;
						}

						${
							themeColorSet &&
							/*css*/ `
								#pdfPreview .border-primary {
									border-color: #${contract.companyProfile.color};
								}
							`
						}
					`
				}
			</style>
			<div className="p-8 text-left">
				<header className="App-header">
					{data[0].content ? (
						<img src={data[0].content} alt="" className="h-12" />
					) : (
						<svg
							className="h-8"
							viewBox="0 0 103 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M61.4617 9.83481V11.9734H74.2184C74.5756 6.73496 71.2253 3.81435 67.0979 3.81435C62.9705 3.81435 59.9775 6.77179 59.9775 10.8685C59.9775 15.002 63.0773 17.9951 67.3177 17.9951C70.7748 17.9951 73.375 15.8565 74.087 13.3987H71.3272C70.6508 14.5748 69.2599 15.5717 67.3005 15.5717C64.5579 15.5717 62.5249 13.5411 62.5249 10.8685C62.5249 8.23148 64.4892 6.2353 67.0857 6.2353C69.6822 6.2353 71.6513 8.22534 71.6513 10.8685L72.6482 9.83481H61.4617ZM25.1229 2.85063H27.9748V0H25.118L25.1229 2.85063ZM19.5591 17.6378H31.1741V15.2869H19.5591V17.6378ZM25.474 6.52135V17.6378H27.9674V7.37703C27.9674 5.31087 27.0086 4.17406 24.7251 4.17406H19.5591V6.52258H25.474V6.52135ZM81.5942 4.17406H75.8941V6.52135H79.1008L79.1364 17.6378H81.631L81.5942 10.1565C81.5942 7.87546 83.1275 6.52258 85.2637 6.52258H87.5091V4.17406H85.7277C83.2331 4.17406 82.0214 5.06534 81.345 6.7411L80.989 7.63116L81.5942 7.73796V4.17406ZM47.1423 4.17406H50.7025V0.962488H53.1959V4.17406H58.7535V6.52135H53.1959V15.2869H58.7535V17.6378H54.2995C52.0186 17.6378 50.7 16.1413 50.7 14.0776V6.52135H47.1423V4.17406ZM75.8929 17.6378H87.5078V15.2869H75.8929V17.6378ZM17.6366 8.79866C17.6366 3.70754 13.8603 0 8.65748 0H0V17.6403H8.65748C13.8591 17.6403 17.6366 13.9328 17.6366 8.80112V8.79866ZM40.4712 3.81312C38.2614 3.81312 36.5168 5.16355 35.8748 6.73373V4.17406H33.3851V17.6378H35.8785V10.7961C35.8785 8.62311 36.6629 6.30651 39.7628 6.30651C42.3286 6.30651 43.6471 7.80303 43.6471 10.9716V17.6354H46.1417V10.5149C46.1417 5.67058 43.3967 3.81926 40.4748 3.81926L40.4712 3.81312ZM95.8425 18C99.9392 18 102.963 15.007 102.963 10.909C102.963 6.81108 99.9355 3.81926 95.8425 3.81926C91.7089 3.81926 88.7159 6.8123 88.7159 10.909C88.7159 15.0057 91.7089 18 95.8425 18ZM95.8425 15.5766C93.2423 15.5766 91.2817 13.5816 91.2817 10.9115C91.2817 8.2413 93.2459 6.24635 95.8425 6.24635C98.439 6.24635 100.403 8.24008 100.403 10.9115C100.403 13.5829 98.439 15.5766 95.8425 15.5766ZM2.63457 15.1445V2.49952H8.33461C12.1833 2.49952 14.9259 5.17215 14.9259 8.88337C14.9259 12.5173 12.1833 15.1555 8.33461 15.1555H2.63457V15.1445Z"
								fill="#0000FF"
							/>
						</svg>
					)}

					<div className="mt-5 text-base opacity-80">
						{data[1].content.en
							.split("\n\n")
							.map((section, index) => (
								<p key={index} className="mb-3 leading-loose">
									{section}
								</p>
							))}
					</div>
				</header>

				<main className="mt-6">
					{data?.length > 2 &&
						[...data.slice(2, data.length)].map(
							(section, index) => (
								<Section key={index} data={section} />
							)
						)}
				</main>
			</div>
		</div>
	);
}

export default ContractPDF;
