import { h, render } from 'preact';
import ContractPDF from './ContractPDF';

function QuickrPdf(containerId, contract){
    render(<ContractPDF contract={contract} />, document.querySelector(containerId));
}

export default QuickrPdf;