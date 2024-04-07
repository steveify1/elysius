import { Resource } from "../resource";
import { ResourceAction } from "../resource/resource.interface";

export const ActionDefinition = (
  resource: Resource,
  action: ResourceAction
) => {
  return (_parent: any, name: string, _meta: any) => {
    action.name = action.name;
    resource.defineAction(action);
  };
};
