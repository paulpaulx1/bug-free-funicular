import {
  SearchRepositoriesAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction,
} from './SearchRepositoriesAction';

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
