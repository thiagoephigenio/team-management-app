import React, { createContext, useContext, useEffect, useState } from 'react';
import { Team } from '../pages/teams/teams-list';
import { Coworker } from '../pages/coworkers/coworkers-list';
import { fetchCoworkersRequest, fetchTeamsRequest } from '../../services/api';

type AppContextProps = {
  teams?: Team[];
  coworkers?: Coworker[];
  isLoadingData: boolean;
  addTeam: (team: Team) => void;
  deleteTeam: (teamId: string) => void;
  addCoworker: (coworker: Coworker) => void;
  updateCoworker: (coworker: Coworker) => void;
  deleteCoworker: (coworkerId: string) => void;
};

const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>();
  const [coworkers, setCoworkers] = useState<Coworker[]>();
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingData(true);
      try {
        const [teamsResponse, coworkersResponse] = await Promise.allSettled([
          fetchTeamsRequest(),
          fetchCoworkersRequest(),
        ]);
        setTeams(
          teamsResponse.status === 'fulfilled' ? teamsResponse?.value : [],
        );
        setCoworkers(
          coworkersResponse.status === 'fulfilled'
            ? coworkersResponse?.value
            : [],
        );
      } catch (error) {
        console.error(error);
      }
      setIsLoadingData(false);
    }
    fetchData();
  }, []);

  function addTeam(team: Team) {
    setTeams((prev) => [...(prev as []), team]);
  }
  function deleteTeam(teamId: string) {
    setTeams((prev) => prev?.filter((team) => team.id !== teamId));
  }
  function addCoworker(coworker: Coworker) {
    setCoworkers((prev) => [...(prev as []), coworker]);
  }
  function updateCoworker(coworker: Coworker) {
    setCoworkers((prev) =>
      prev?.map((currentCoworker) =>
        currentCoworker.id === coworker.id ? coworker : currentCoworker,
      ),
    );
  }
  function deleteCoworker(coworkerId: string) {
    setCoworkers((prev) =>
      prev?.filter((coworker) => coworker.id !== coworkerId),
    );
  }

  return (
    <AppContext.Provider
      value={{
        teams,
        coworkers,
        addTeam,
        deleteTeam,
        addCoworker,
        updateCoworker,
        deleteCoworker,
        isLoadingData,
      }}
    >
      <>{children}</>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { useAppContext, AppProvider };
