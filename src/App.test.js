import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Gameplay from "./gameplay";
import leaderboardPage from "./leaderboardPage";
import skinsPage from "./skinsPage";
import { Route } from "react-router-dom";
import Home from "./Home";
import settingsPage from "./settingsPage";
import upgradesPage from "./upgradesPage";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show Home component for / router (getting array of routes)", () => {
    expect(pathMap["/"]).toBe(Home);
  });
  it("should show Gameplay component for /gameplay router", () => {
    expect(pathMap["/gameplay"]).toBe(Gameplay);
  });
  it("should show skinsPage component for /skins router", () => {
    expect(pathMap["/skins"]).toBe(skinsPage);
  });
  it("should show leaderboardPage component for /leaderboard router", () => {
    expect(pathMap["/leaderboard"]).toBe(leaderboardPage);
  });
  it("should show settingPage component for /settings router", () => {
    expect(pathMap["/settings"]).toBe(settingsPage);
  });
  it("should show upgradesPage component for /upgrades router", () => {
    expect(pathMap["/upgrades"]).toBe(upgradesPage);
  });
});
