import { useState, useEffect } from 'react';
import { FlatList, useToast } from 'native-base';

import { api } from '../services/api';
import { Game, GameProps } from './Game';
import { Loading } from './Loading';
import { EmptyMyPoolList } from './EmptyMyPoolList';

interface Props {
  poolId: string;
  code: string;
  onShare: () => Promise<void>;
}

export function Guesses({ poolId, code, onShare }: Props) {
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState('');
  const [secondTeamPoints, setSecondTeamPoints] = useState('');
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  async function fetchGames() {
    try {
      setLoading(true);
      const response = await api.get(`/pools/${poolId}/games`);
      setGames(response.data.games);
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possível carregar os palpites do bolão!',
        placement: 'top',
        bgColor: 'red.500',
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleGuessConfirm(gameId: string) {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          title: 'Informe o placar do palpite!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints),
      });
      toast.show({
        title: 'Palpite criado com sucesso!',
        placement: 'top',
        bgColor: 'green.500',
      });
      fetchGames();
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possível criar o palpite!',
        placement: 'top',
        bgColor: 'red.500',
      });
    }
  }

  useEffect(() => {
    fetchGames();
  }, [poolId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Game
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.id)}
        />
      )}
      ListEmptyComponent={() => (
        <EmptyMyPoolList code={code} onShare={onShare} />
      )}
    />
  );
}
