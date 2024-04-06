import { ControlOptions } from "./control.interface";

export class Control {
  private store: any;

  constructor(private readonly id: string, options: ControlOptions) {
    this.store = options.store;
  }

  private async initializeStore() {
    await this.store.initialize(this.id);
  }
}
