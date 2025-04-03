"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
class Store {
    constructor() {
        this.users = [];
    }
    find(id) {
        const user = this.users.find(el => el.id === id);
        if (!user) {
            return false;
        }
        return user;
    }
    push(user) {
        this.users.push(user);
    }
    remove(id) {
        this.users = this.users.filter(el => el.id !== id);
    }
    update(id, states) {
        const user = this.find(id);
        this.remove(id);
        if (user) {
            this.push({ ...user, ...states });
        }
    }
}
exports.store = new Store();
