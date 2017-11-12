declare class MongoDB$ObjectID {
  /**
   * Create a new ObjectID instance
   * @param {(string|number|ongoDB$ObjectID)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
   */
  constructor(id?: string | number | MongoDB$ObjectID): this;

  /** The generation time of this ObjectID instance */
  generationTime: number;

  /**
   * Creates an ObjectID from a hex string representation of an ObjectID.
   * @param {string} hexString create a ObjectID from a passed in 24 byte hexstring.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromHexString(hexString: string): MongoDB$ObjectID;

  /**
   * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
   * @param {number} time an integer number representing a number of seconds.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromTime(time: number): MongoDB$ObjectID;

  /**
   * Checks if a value is a valid bson ObjectID
   *
   * @return {boolean} return true if the value is a valid bson ObjectID, return false otherwise.
   */
  static isValid(id: string | number | MongoDB$ObjectID): boolean;

  /**
   * Compares the equality of this ObjectID with `otherID`.
   * @param {object} otherID ObjectID instance to compare against.
   * @return {boolean} the result of comparing two ObjectID's
   */
  equals(otherID: MongoDB$ObjectID): boolean;

  /**
   * Generate a 12 byte id string used in ObjectID's
   * @param {number} time optional parameter allowing to pass in a second based timestamp.
   * @return {string} return the 12 byte id binary string.
   */
  generate(time?: number): string;

  /**
   * Returns the generation date (accurate up to the second) that this ID was generated.
   * @return {date} the generation date
   */
  getTimestamp(): Date;

  /**
   * Return the ObjectID id as a 24 byte hex string representation
   * @return {string} return the 24 byte hex string representation.
   */
  toHexString(): string;
}

declare module "mongodb" {
  declare module.exports: {
    ObjectId: Class<MongoDB$ObjectID>
  };
}
