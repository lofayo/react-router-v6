import React from 'react'
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom'
import Invoice from './invoice';
import IndexInvoice from './indexInvoice';
import {getInvoices} from './data';
const Invoices = () => {
  const invoiceList = getInvoices();
  return <div style={{display: 'flex'}}>
    <ul style={{borderRight: '1px solid #ccc'}}>
      {
        invoiceList.map(item => {
          const {name, number} = item || {};
          return <li key={number}><Link to={`${number}`}>{name}</Link></li>
        })
      }
    </ul>
    <Routes>
      <Route index element={<IndexInvoice />}></Route>
      <Route path=':invoiceId' element={<Invoice />}></Route>
    </Routes>
  </div>
};

export default Invoices;