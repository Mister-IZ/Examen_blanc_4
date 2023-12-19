import Model from './Model.js';

export default class Task extends Model {

  static table = "task.task";
  static primary = ["idtask"];
}
