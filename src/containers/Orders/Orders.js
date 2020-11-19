import React from "react";
import { Button, Grid, Header, Card } from "semantic-ui-react";
const Orders = () => {
  return (
    <>
      <Grid container columns={2} doubling>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Orders List</Header>
          </Grid.Column>
          <Grid.Column>
            <Button color="green" floated="right">
              New Order
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container columns={4} doubling>
        <Grid.Row>
          <Grid.Column>
            <Card color="blue">
              <Card.Content>
                <Card.Header>213,214</Card.Header>
                <Card.Meta>
                  <span className="date">Active Orders</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="red">
              <Card.Content>
                <Card.Header>24</Card.Header>
                <Card.Meta>
                  <span className="date">Unfulfilled</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="yellow">
              <Card.Content>
                <Card.Header>10,100</Card.Header>
                <Card.Meta>
                  <span className="date">Pending</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="green">
              <Card.Content>
                <Card.Header>213</Card.Header>
                <Card.Meta>
                  <span className="date">Fulfilled</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>table</Grid.Row>
      </Grid>
    </>
  );
};

export default Orders;
