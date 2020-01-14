import { Subject } from "./subject";

export interface Observer {
    subject: Subject;
    update(): void;
}