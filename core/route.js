export class Route {
  constructor(name, path, action) {
    this._name = name;
    this._path = path;
    this._action = action;
  }

  set name(name) { this._name = name; }
  get name() { return this._name; }

  set path(path) { this._path = path; }
  get path() { return this._path; }

  // no getter because we don't want anyone to modify the action
  set action(action) { this._action = action; }

  handleRequest(request, response) {
    return new Promise((resolve, reject) => {
      this._action(request, response);
    });
  }
}
