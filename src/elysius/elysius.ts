import { Resource } from "../resource";
import { Store } from "../store/store.interface";

export class Elysius {
  constructor(private readonly id: string, private readonly store: Store) {
    store.initialize(id);
  }

  register(resource: Resource): Resource {
    return resource.register(this.store);
  }

  getResources() {
    return this.store.getResources();
  }

  getResourceActions() {
    return this.store.getResourceActions();
  }

  search(query: string) {
    return this.store.search(query);
  }
}
