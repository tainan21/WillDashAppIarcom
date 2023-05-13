import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';

import Logo from '../assets/logo.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Signin() {
  const { signIn, isUserLoading } = useAuth();

  return (
    <Center flex={1} bgColor="#040c2c" padding={7}>
      <Logo width={320} height={50} />
      <Button
        title="Entrar com Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        backgroundColor={"#ff5f00"}
        type="SECONDARY"
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
}

/* cores 
#000000 preto
#ffffff branco
#002AFB azul roxo
#040C2C azul secundario
#4562ef roxo 
#d5ddff cinza
#11f89c verde
#ff5f00 laranja
*/
