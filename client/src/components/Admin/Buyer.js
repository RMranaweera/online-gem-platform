import React from 'react';
import Navbar from '../Navbar/Nav';
import SideNavbar from '../SideBar/SideNavbar';

function Buyer() {

  const getRows = () => {
    let content = []
    for (let i = 0; i < 10; i++){
      content.push(
        <tr key={i}>
          <th scope='row'>5001</th>
          <td>Blue gem</td>
          <td>25000</td>
          <td>08/02/2022 08.46 p.m</td>
          <td>Win</td>
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
          <p className='lead my-2'>Total Buyers: ##</p>
          <div className='buyer-table'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Buyer ID</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Input Bid</th>
                  <th scope='col'>Bidding date/time</th>
                  <th scope='col'>Winner status</th>
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

export default Buyer