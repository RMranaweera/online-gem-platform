import React from 'react';
import Navbar from '../Navbar/Nav';
import SideNavbar from '../SideBar/SideNavbar';

function Driver() {
  const getRows = () => {
    let content = []
    for (let i = 0; i < 10; i++){
      content.push(
        <tr key={i}>
          <th scope='row'>401</th>
          <td>Blue gem</td>
          <td>25000</td>
          <td>08/02/2022 08.46 p.m</td>
          <td>Now Driving</td>
          <td>No. 05, Matara</td>
          <td>LK3257R (By Van)</td>
          <td>1001</td>
          <td>5001</td>
          <td>
            <i className="fa fa-undo mx-2"></i>
            <i className="fa fa-trash mx-2"></i>
          </td>
          <td>
            <i className="fa fa-undo mx-2"></i>
            <i className="fa fa-trash mx-2"></i>
          </td>
          <td>
            <i className="fa fa-undo mx-2"></i>
            <i className="fa fa-trash mx-2"></i>
          </td>
        </tr>
      );
    }

    return content;
  }

  return (
    <div>
      <Navbar />
      <div className='sideNavBar-container'>
        <SideNavbar/>
      </div>
      <div className='container'>
        <div className='col-10 mx-auto my-4'>
          <p className='lead my-2'>Total Drivers: ##</p>
          <div className='buyer-table'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Driver ID</th>
                  <th scope='col'>Gem Type</th>
                  <th scope='col'>Gem Amount</th>
                  <th scope='col'>Start date/time</th>
                  <th scope='col'>Driving status</th>
                  <th scope='col'>Destination</th>
                  <th scope='col'>Tracking Details</th>
                  <th scope='col'>Seller ID</th>
                  <th scope='col'>Buyer ID</th>
                  <th scope='col'>Remove or Edit Bid</th>
                  <th scope='col'>Remove or Edit Buyer</th>
                  <th scope='col'>Registration Approval Status</th>
                </tr>
              </thead>
              <tbody>
                {getRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Driver
