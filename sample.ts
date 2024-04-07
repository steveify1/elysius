import { Elysius } from "./src";
import { ActionDefinition } from "./src/decorators";
import { Resource } from "./src/resource";
import { ElysiusStore } from "./src/store";

const store = new ElysiusStore.LocalStore();
const controlId = Date.now().toString();
const elysius = new Elysius(controlId, store);

const userResource = new Resource({
  name: "User",
  id: "User",
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

class UserController {
  @ActionDefinition(userResource, { name: "SearchUserList" })
  searchUserList(body: any) {
    console.log(body);
  }
}

const userController = new UserController();
userController.searchUserList("timeless is the name of the album");
// List resources from store
const result = store.search("User.SearchUserList");
console.log(result);
