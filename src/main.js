import { h, render } from "preact";
import renderString from "preact-render-to-string";
import ContractPDF from "./ContractPDF";
import "./main.css";

/** @jsx h */

function QuickrPdf(contract, lang) {
	return renderString(<ContractPDF contract={contract} lang={lang} />);
}

export default QuickrPdf;
