import { useState } from 'react';
import { Heading, VStack, Text, useToast } from 'native-base';

import { Header } from '../components/Header';
import Logo from '../assets/logo.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { api } from '../services/api';

export function New() {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
  
    async function handlePoolCreate() {
      if (!title.trim()) {
        return toast.show({
          title: 'Informe um nome para o seu WillDash!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      try {
        setIsLoading(true);
        await api.post('/pools', { title });
        toast.show({
          title: 'WillDash criado com sucesso!',
          placement: 'top',
          bgColor: 'green.500',
        });
      } catch (error) {
        console.log(error);
        toast.show({
          title: 'Não foi possível criar um WillDash!',
          placement: 'top',
          bgColor: 'red.500',
        });
      } finally {
        setIsLoading(false);
        setTitle('');
      }
    }
  
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Olá'  />
      <VStack mt={8} mx={5} alignItems='center'>
        <Logo />
        <Heading
          fontFamily='heading'
          color='white'
          fontSize='xl'
          my={8}
          textAlign='center'
        >
          Crie seu próprio WillDash da copa e compartilhe entre amigos!
        </Heading>
        <Input
          mb={2}
          placeholder='Qual nome do seu WillDash?'
          onChangeText={setTitle}
          value={title}
        />
        <Button
          title='Criar meu WillDash'
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />
        <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
          Após criar seu WillDash, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
  
}

