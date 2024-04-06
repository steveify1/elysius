import { ResourceAction } from "../resource/resource.interface";

export interface StoreResource {
  id: string;
  name: string;
  description?: string;
  actions: Record<string, ResourceAction>;
}

export interface Store {
  initialize(id: string): void;
  registerResource(resource: StoreResource): void;
  updateResourceAction(resourceId: string, action: ResourceAction): void;
  getResources(): StoreResource[] | Promise<StoreResource[]>;
  getResourceActions(): ResourceAction[] | Promise<ResourceAction[]>;
}
