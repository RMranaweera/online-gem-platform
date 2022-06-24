import React from 'react';
import Navbar from '../Navbar/Nav';
import SideNavbar from '../SideBar/SideNavbar';

function Seller() {
  const getRows = () => {
    let content = []
    for (let i = 0; i < 10; i++){
      content.push(
        <tr key={i}>
          <th scope='row'>1001</th>
          <td>Blue gem</td>
          <td>1000</td>
          <td>2500</td>
          <td>25 min</td>
          <td>Approved</td>
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
          <p className='lead my-2'>Total Sellers: ##</p>
          <div className='buyer-table'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Seller ID</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Starting Price</th>
                  <th scope='col'>Max bid</th>
                  <th scope='col'>Time Duration</th>
                  <th scope='col'>Approve Status</th>
                  <th scope='col'>Remove or Edit</th>
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

export default Seller
