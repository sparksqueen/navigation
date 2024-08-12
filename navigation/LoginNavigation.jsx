import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../views/Login"
import RegisterScreen from "../views/Register"


const LoginNavigation = () => {
    const LoginStack = createNativeStackNavigator() 

    return(
        <LoginStack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        </LoginStack.Navigator>
    )
}

