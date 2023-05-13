import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { PlusCircle, SoccerBall, Barcode, Wallet, House } from 'phosphor-react-native';
import { Platform } from 'react-native';
import { Details } from '../screens/Details';

import { Find } from '../screens/Find';

import { Money } from '../screens/Money';
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const size = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: 87,
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0,
        },
        tabBarLabelPosition: 'beside-icon',
      }}
    >
 
      <Screen
        name='exercicios'
        component={New}
        options={{
          tabBarIcon: ({ color }) => <House weight="thin" color={color} size={size} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name='camera'
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <Wallet  color={color} size={size} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name='qr'
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <Barcode  color={color} size={size} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name='Money'
        component={Money}
        options={{
          tabBarIcon: ({ color }) => <Barcode  color={color} size={size} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name='find'
        component={Find}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='details'
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
