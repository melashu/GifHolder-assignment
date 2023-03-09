import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Gif from "./Gif";
import Saved from "./Saved";

const Container = styled.div`
  margin-top: 65px;
`;
const RouterConfig = () => {
    return (
      <Container>
        <Switch>
          <Route path="/" exact>
            <Gif />
          </Route>
          <Route path="/saved" exact>
            <Saved />
          </Route>
        </Switch>
        ;
      </Container>
    );
}
export default RouterConfig;