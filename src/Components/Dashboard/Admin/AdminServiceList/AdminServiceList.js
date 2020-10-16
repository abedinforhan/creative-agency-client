import React,{ useState,useEffect} from 'react';
import { Container } from 'reactstrap';
import './AdminServicelist.css';
import { Table } from 'reactstrap';
import TableRow from '../TableRow/TableRow';

const AdminServiceList = () => {

   const [services, setServices] = useState([])

   useEffect(() => {
    fetch('https://polar-dawn-52722.herokuapp.com/findServicesForAdmin')
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])
  return (
    <Container className='adminServiceList' >
      <Table borderless responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
       {
         services.map((service)=>
         <TableRow 
         name={service.name}
         email={service.email}
         service={service.catagory}
         projectDetails={service.details}

         />
         )
       }
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminServiceList;