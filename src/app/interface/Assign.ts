import {Tutor} from "./Tutor";
import {Student} from "./Student";

export interface Assign {
  id: string;
  tutor?: string;
  student: string;
  career: string | undefined;
  semester: string | undefined;
  status: string;
}

