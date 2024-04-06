import { Store } from "../store/store.interface";
import { ResourceAction, ResourceOptions } from "./resource.interface";

export class Resource {
  private readonly name: string;
  private readonly id: string;
  private readonly description: string;
  private store: Store;

  constructor(options: ResourceOptions) {
    this.name = options.name.trim();
    this.id = this.resolveId(options.id, this.name);
    this.description = options.description;
  }

  private resolveId(id: string, name: string): string {
    if (id) return id;

    return name
      .split(" ")
      .filter((w) => w.length)
      .join("");
  }

  private ensureRegistration() {
    if (!this.store) {
      throw new Error(
        "You must register your resource with Elysius before using it."
      );
    }
  }

  register(store: Store) {
    this.store = store;

    store.registerResource({
      id: this.id,
      name: this.name,
      description: this.description,
      actions: {},
    });

    return this;
  }

  defineAction(action: ResourceAction): void {
    this.ensureRegistration();

    const name = action.name.trim();
    action.id = this.resolveId(action.id, action.name);
    this.store.updateResourceAction(this.id, action);
  }
}
