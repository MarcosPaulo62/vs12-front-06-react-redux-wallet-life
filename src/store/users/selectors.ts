import { RootState } from "..";

export const selectCreatingUser = (state: RootState) => state.users.creatingUser;

export const selectErrorOnCreate = (state: RootState) => state.users.errorOnCreate;

export const selectCreateSuccess = (state: RootState) => state.users.createSuccess;
