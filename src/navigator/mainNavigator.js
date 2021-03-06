import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile36831Navigator from '../features/UserProfile36831/navigator';
import Maps36812Navigator from '../features/Maps36812/navigator';
import Settings36790Navigator from '../features/Settings36790/navigator';
import Settings36775Navigator from '../features/Settings36775/navigator';
import NotificationList36774Navigator from '../features/NotificationList36774/navigator';
import Maps36773Navigator from '../features/Maps36773/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile36831: { screen: UserProfile36831Navigator },
Maps36812: { screen: Maps36812Navigator },
Settings36790: { screen: Settings36790Navigator },
Settings36775: { screen: Settings36775Navigator },
NotificationList36774: { screen: NotificationList36774Navigator },
Maps36773: { screen: Maps36773Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
