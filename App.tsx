import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import Dashboard from "./src/screens/Dashboard";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
};

export default App;
