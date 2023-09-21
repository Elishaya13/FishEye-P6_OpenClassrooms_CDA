/**
 * Observer for updating and displaying likes count in the DOM.
 */
export class LikesDisplay {
  /**
   * Create a LikesDisplay observer.
   * @constructor
   * @param {number} likesCount - The initial likes count value.
   * @param {HTMLElement} domElm - The DOM element where the likes count will be displayed.
   */
  constructor(likesCount, domElm) {
    /**
     * The current likes count.
     * @type {number}
     */
    this.count = likesCount;
    /**
     * The DOM element where the likes count will be displayed.
     * @type {HTMLElement}
     */
    this.$countDisplay = domElm;
  }

  /**
   * Update the likes count and display it in the DOM.
   * @param {string} action - The action to perform ("INC" for increment, "DEC" for decrement).
   * @throws {string} Throws an error if the action is unknown.
   */
  update(action) {
    if (action === 'INC') {
      this.count += 1;
    } else if (action === 'DEC') {
      this.count -= 1;
    } else {
      throw 'Unknow action';
    }

    // Update the displayed likes count in the DOM element
    this.$countDisplay.textContent = this.count;
  }
}
