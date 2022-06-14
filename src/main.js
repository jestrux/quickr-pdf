import { h, render } from 'preact';
import ContractPDF from './ContractPDF';
import './main.css';

function QuickrPdf(containerId, contract){
    render(<ContractPDF contract={contract} />, document.querySelector(containerId));
}

export default QuickrPdf;