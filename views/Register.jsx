import {Text, Button} from "react-native"

const Register = () => {
    return (
        <View>
        <Text>Hola, soy un register</Text>
        <Button
        title="Inicia Sesion"
        onPress={() => navigation.navigate('Login')}
      />
        </View>
    )
}

export default Register