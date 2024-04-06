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

  /**
   * Queries the store for a resource or a resource action associated with the current control definition.
   *
   * @param query - A resource/action query that takes the pattern: "resourceId.resourceActionId".
   * The resource action Id is optional.
   */
  search(query: string): StoreResource | ResourceAction | null {
    if (!query) return null;

    const [resourceId, resourceActionId] = query.split(".");

    const resource = this.resources[resourceId];

    if (!resource) return null;

    if (!resourceActionId) return resource;

    return resource.actions[resourceActionId] || null;
  }
}
