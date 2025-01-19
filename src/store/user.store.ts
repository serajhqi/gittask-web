import { createStore, select, withProps } from "@ngneat/elf";
import {
  persistState,
  localStorageStrategy,
  excludeKeys,
} from "@ngneat/elf-persist-state";
import { GetApi } from "../api/api";

interface UserState {
  isLogin: boolean;
  loginLoading: boolean;
  token?: string;
}

const defaultState: UserState = {
  isLogin: false,
  loginLoading: false,
};

const store = createStore({ name: "user" }, withProps<UserState>(defaultState));

export const persist = persistState(store, {
  key: "user",
  storage: localStorageStrategy,
  source: () => store.pipe(excludeKeys(["isLogin", "loginLoading"])),
});
// ---------------------------------------------

class UserRepo {
  isLogin$ = store.pipe(select((state) => state.isLogin));
  loginLoading$ = store.pipe(select((state) => state.loginLoading));

  GetIsLogin = () => store.query((state) => state.isLogin);
  GetToken = () => store.query((state) => state.token);

  constructor() {
    const initialState = store.getValue();
    if (initialState.token) {
      store.update((state) => ({ ...state, isLogin: true }));
    } else {
      store.update((state) => ({ ...state, isLogin: false }));
    }
  }

  async Login(email: string, password: string) {
    store.update((state) => ({ ...state, loginLoading: true }));
    try {
      const { data } = await GetApi().POST("/user/login", {
        body: {
          email,
          password,
        },
      });
      store.update((state) => ({
        ...state,
        token: data?.token,
        isLogin: true,
      }));
    } finally {
      store.update((state) => ({ ...state, loginLoading: false }));
    }
  }

  Logout() {
    store.next(defaultState);
  }
}

// ---------------------------------------------

let userRepo: UserRepo;
export function GetUserRepo(): UserRepo {
  if (!userRepo) {
    userRepo = new UserRepo();
  }
  return userRepo;
}
