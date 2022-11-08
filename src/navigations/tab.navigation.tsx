import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  VideoAudioScreen, AcelerometroScreen, PedometroScreen, MagnetoScreen, GiroscopioScreen} from "../screens";
import {  MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
     <Tab.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="video" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="car" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="Magneto"
        component={MagnetoScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="magnet" size={24} color={colors.white} />
          ),
        }}
      />
          <Tab.Screen
        name="Gyroscopio"
        component={GiroscopioScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name= "balance-scale" size={24} color={colors.white} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}