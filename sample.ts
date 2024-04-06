import { Elysius } from "./src";
import { Resource } from "./src/resource";
import { ElysiusStore } from "./src/store";

const store = new ElysiusStore.LocalStore();
const controlId = Date.now().toString();
const elysius = new Elysius(controlId, store);

const userResource = new Resource({
  name: "User",
  id: "UserExc",
  description: "This is some random stuff",
});
elysius.register(userResource);

userResource.defineAction({ name: "Create User" });
userResource.defineAction({ name: "Update User" });
userResource.defineAction({ name: "Get Users" });
userResource.defineAction({ name: "Get User" });
userResource.defineAction({ name: "Delete User" });
userResource.defineAction({ name: "Suspend User" });
userResource.defineAction({ name: "Unsuspend User" });
userResource.defineAction({ name: "Approve User KYC" });

// List resources from store
const result = elysius.search("UserExc.UpdateUser");
console.log(result);
