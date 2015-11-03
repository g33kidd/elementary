'use strict';

export class Route {
  constructor(name, path, action, verb) {
    this._name = name;
    this._path = path;
    this._action = action;
    this._verb = verb;
  }

  set name(name) { this._name = name; }
  get name() { return this._name; }

  set path(path) { this._path = path; }
  get path() { return this._path; }

  set verb(verb) { this._verb = verb; }
  get verb() { return this._verb; }

  // no getter because we don't want anyone to modify the action
  set action(action) { this._action = action; }

  handleRequest(req, res) {
    // return new Promise((resolve, reject) => {
    this._action(req, res);
    // });
    // this._action(req, res);
  }
}
