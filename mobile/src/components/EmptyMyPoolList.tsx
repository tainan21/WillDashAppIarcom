import { Row, Text, Pressable } from 'native-base';

interface Props {
  code: string;
  onShare: () => Promise<void>;
}

export function EmptyMyPoolList({ code, onShare }: Props) {
  return (
    <Row flexWrap='wrap' justifyContent='center' p={4}>
      <Text color='gray.200' fontSize='sm'>
        Esse WILLDASH ainda não tem participantes, que tal
      </Text>

      <Pressable onPress={onShare}>
        <Text
          textDecorationLine='underline'
          color='yellow.500'
          textDecoration='underline'
        >
          compartilhar o código
        </Text>
      </Pressable>

      <Text color='gray.200' fontSize='sm' mx={1}>
        do WILLDASH com alguém?
      </Text>

      <Text color='gray.200' mr={1}>
        Use o código
      </Text>

      <Text
        color='gray.200'
        fontSize='sm'
        textAlign='center'
        fontFamily='heading'
      >
        {code}
      </Text>
    </Row>
  );
}
