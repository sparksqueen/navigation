import {Text, Button} from "react-native"

const Login = () => {
    return (
        <View>
        <Text>Hola, soy un login</Text>
        <Button
        title="Registrate"
        onPress={() => navigation.navigate('Register')}
      />
        </View>
    )
}

export default Login