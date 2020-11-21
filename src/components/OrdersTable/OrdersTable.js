import React from "react";
import { Header, Table, Rating } from "semantic-ui-react";

const OrdersTable = () => {
  return (
    <>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Order ID</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Fulfillment</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Updated</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                A
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default OrdersTable;
