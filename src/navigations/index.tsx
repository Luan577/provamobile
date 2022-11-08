import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./drawer.navigation";
import TabNavigation from "./tab.navigation"

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigation /> 
    
    </NavigationContainer>
  );
}