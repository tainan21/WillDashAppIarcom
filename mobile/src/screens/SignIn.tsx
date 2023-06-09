import { Center, Text } from 'native-base';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/logo.svg';


export function Signin() {
  const { signIn, isUserLoading } = useAuth();

  return (
    <Center flex={1} bgColor="#040c2c" padding={7}>
      <Logo width={320} height={50} />

      <Button
        title="Entrar com Google"
        mt={12}
        backgroundColor="#ff5f00"
        type="SECONDARY"
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />

      <Button
        title="Entrar com WillDash"
        mt={3}
        backgroundColor="#4562ef"
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
