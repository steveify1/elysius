export interface ResourceOptions {
  name: string;
  id?: string;
  description?: string;
}

export interface ResourceAction {
  name: string;
  id?: string;
  description?: string;
}

export type ResourceActions = Record<string, ResourceAction>;
