/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MoveAnimation from './Animations/MoveAnimation';
import FadeAnimation from './Animations/FadeAnimation';
import SplashAnimation from './Animations/SplashAnimation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MoveAnimation);
