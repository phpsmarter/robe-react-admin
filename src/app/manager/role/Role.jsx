import BaseCrudPage from "app/common/BaseCrudPage";
import RoleModel from "./RoleModel.json";

export default class Role extends BaseCrudPage {
    constructor() {
        let state = {};
        state.url = "http://localhost:3000/roles";
        state.idField = "id";
        state.fields = RoleModel.fields;
        state.description = "Description of Role";
        state.header = "Role Management";
        super(state);
    }
}