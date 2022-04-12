import {Monitor} from "../Monitor";
import {Student} from "../Student";
import {Career} from "../Career";

export interface Assing {
  id: string;
  monitor: Monitor;
  stundet: Student;
  semestre: number;
  career: Career;
  status: string;
}
