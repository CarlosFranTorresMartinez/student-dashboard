import {Monitor} from "./Monitor";
import {Student} from "./Student";

export interface Assing {
  _id: string;
  monitor: Monitor;
  career: string | undefined;
  semestre: string;
  studentList: Student[];
  status: string;
}

