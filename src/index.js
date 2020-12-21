import HomeScreen from "./Home";
import DescriptionScreen from "./Description";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createAppContainer } from "react-navigation";

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: HomeScreen,
    Description: DescriptionScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gestureEnabled: false,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          opacity: progress,
        },
      }),
    },
  }
);

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
