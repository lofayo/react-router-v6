import React from 'react'
import {
  useParams,
  useNavigate
} from 'react-router-dom'
import {deleteInvoice, getInvoice} from './data';

const Invoice = () => {
  let {invoiceId} = useParams() || {};
  invoiceId = parseInt(invoiceId);
  const {name, amount, due} = getInvoice(invoiceId) || {};
  const navigate = useNavigate();
  const onDeleteInvoice = () => {
    deleteInvoice(invoiceId);
    navigate('/invoices');
  }
  return <div>
    <em>{name}</em> {amount} <i>{due}</i>
    <button onClick={onDeleteInvoice}>delete</button>
  </div>
};

export default Invoice;
