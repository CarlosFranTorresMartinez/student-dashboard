import {Tutor} from "./Tutor";
import {Student} from "./Student";
import {Career} from "./Career";

export interface Assing {
  ID_ASSIGMENT: string,
  TUTOR: Tutor,
  STUDENT: Student,
  CAREER: Career,
  SEMESTRE: string,
  STATUS: string
}
