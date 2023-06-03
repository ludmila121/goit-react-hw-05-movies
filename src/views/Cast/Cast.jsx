import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorList } from 'services/api';
import { Actor, ActorsInfo, ActorsList, Foto, InfoTitle } from './Cast.styled';
import notFound from 'images/notFound.png';

export default function Cast() {
  const [actorsList, setActorsList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchActors() {
      try {
        const response = await fetchActorList(movieId);
        setActorsList(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);
  return (
    <>
      <h3>Actors</h3>
      <ActorsList>
        {actorsList &&
          actorsList.map(({ id, profile_path, name, character }) => (
            <Actor key={id}>
              <Foto
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : notFound
                }
                alt={name}
              />
              <ActorsInfo>
                <InfoTitle>Name:</InfoTitle>
                <span>{name}</span>
                <InfoTitle>Character:</InfoTitle>
                <span>{character}</span>
              </ActorsInfo>
            </Actor>
          ))}
      </ActorsList>
    </>
  );
}
