/**
 * Subject (Observable) for managing likes count and notifying observers.
 * @class
 */
export class LikesCounter {
  /**
   * Create a LikesCounter subject.
   * @constructor
   * @param {number} likes - The initial likes count value.
   */
  constructor(likes) {
    // The current likes count
    this.count = likes;
    this.observers = [];
  }

  /**
   * Add an observer to the list of observers.
   * @param {Object} observer - The observer to be added.
   */
  subscribe(observer) {
    this.observers.push(observer);
  }

  /**
   * Notify all observers about an action, triggering their update methods.
   * @param {string} action - The action to notify observers about ("INC" or "DEC").
   */
  notifyObservers(action) {
    this.observers.forEach((observer) => observer.update(action));
  }
}
