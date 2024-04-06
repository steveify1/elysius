import {
  ResourceAction,
  ResourceActions,
} from "../resource/resource.interface";
import { Store, StoreResource } from "./store.interface";

export class LocalStore implements Store {
  private controlId: string;
  private resources: { [T: string]: StoreResource } = {};

  initialize(controlId: string) {
    this.controlId = controlId;
  }

  registerResource(resource: StoreResource): void {
    this.resources[resource.id] = resource;
  }

  updateResourceAction(resourceId: string, action: ResourceAction) {
    const storeResource = this.resources[resourceId];

    if (storeResource) {
      storeResource.actions[action.id] = action;
    }
  }

  getResources(): StoreResource[] | Promise<StoreResource[]> {
    return Object.values(this.resources);
  }

  getResourceActions(): ResourceAction[] | Promise<ResourceAction[]> {
    let actions: ResourceAction[] = [];

    Object.values(this.resources).forEach((resource) => {
      actions = [...actions, ...Object.values(resource.actions)];
    });

    return actions;
  }
}
