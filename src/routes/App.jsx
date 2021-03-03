import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../components/Home";
import { Checkout } from "../components/Checkout";
import { Information } from "../components/Information";
import { Payment } from "../components/Payment";
import { Success } from "../components/Success";
import { NotFound } from "../components/NotFound";
import { Layout } from "../components/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
