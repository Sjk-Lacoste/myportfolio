import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { IContext, IUser } from '@utils/interfaces';

const AppContext = createContext<IContext | null>(null);

export default function AppProvider(props: {
  children: ReactNode;
}): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (() => {
      setUser(null);
    })();
  }, [user]);

  useEffect(() => {
    (() => {
      setIsAuthenticated(false);
    })();
  }, [isAuthenticated]);

  return (
    <AppContext.Provider value={{ user, isAuthenticated }}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
