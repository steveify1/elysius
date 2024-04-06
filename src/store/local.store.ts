import { Store } from "./store.interface";

export class LocalStore implements Store {
  private controlId: string;
  private resources: { [T: string]: {} };
  private resourceActions: { [T: string]: {} };

  constructor() {}

  initialize(controlId: string) {
    this.controlId = controlId;
  }

  update(resourceActionDefinition: any) {}
}
