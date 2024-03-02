import React, { createContext, useContext, useState } from 'react';
import { Team } from '../pages/teams/teams-list';
import { Coworker } from '../pages/coworkers/coworkers-list';

type AppContextProps = {
  teams: Team[];
  coworkers: Coworker[];
  addTeam: (team: Team) => void;
  deleteTeam: (teamId: string) => void;
  addCoworker: (coworker: Coworker) => void;
  updateCoworker: () => void;
  deleteCoworker: () => void;
};

const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [coworkers, setCoworkers] = useState<Coworker[]>([]);

  function addTeam(team: Team) {
    setTeams((prev) => [...prev, team]);
  }
  function deleteTeam(teamId: string) {
    console.log(teamId);
  }
  function addCoworker(coworker: Coworker) {
    setCoworkers((prev) => [...prev, coworker]);
  }
  function updateCoworker() {}
  function deleteCoworker() {}

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

export { AppProvider, useAppContext };
