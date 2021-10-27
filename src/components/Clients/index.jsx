import React from 'react';
import faker from 'faker';
import ClientData from 'components/ClientData';
import Row from 'react-bootstrap/Row';


const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
    cellphone: faker.phone.phoneNumber(),
  }));

  return (
    <Row>
      {clientsList.map((clientData) => (
        <ClientData data={clientData} key={clientData.id} />
      ))}
    </Row>
  );
};



export default Clients;