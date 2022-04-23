import UserStore from "./UserStore";
import { configure } from "mobx";

configure({ enforceActions: "always" });

export const user = new UserStore();
