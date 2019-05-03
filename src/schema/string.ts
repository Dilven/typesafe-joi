import { Value } from "../lib/value";
import { BaseSchema } from ".";
import * as JoiLib from "../lib/joi";

export interface StringSchema<TValue extends Value.AnyValue = Value<string>> extends BaseSchema<'string', TValue> {
  /**
   * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
   */
  insensitive (): this

  /**
   * Specifies the minimum number string characters.
   * @param limit - the minimum number of string characters required. It can also be a reference to another field.
   * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
   */
  min (limit: number | JoiLib.Reference, encoding?: string): this

  /**
   * Specifies the maximum number of string characters.
   * @param limit - the maximum number of string characters allowed. It can also be a reference to another field.
   * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
   */
  max (limit: number | JoiLib.Reference, encoding?: string): this

  /**
   * Specifies whether the string.max() limit should be used as a truncation.
   * @param enabled - optional parameter defaulting to true which allows you to reset the behavior of truncate by providing a falsy value.
   */
  truncate (enabled?: boolean): this

  /**
   * Requires the string value to be in a unicode normalized form. If the validation convert option is on (enabled by default), the string will be normalized.
   * @param form - The unicode normalization form to use. Valid values: NFC [default], NFD, NFKC, NFKD
   */
  normalize (form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): this

  /**
   * Requires the string value to be a valid base64 string; does not check the decoded value.
   * @param options - optional settings: The unicode normalization options to use. Valid values: NFC [default], NFD, NFKC, NFKD
   */
  base64 (options?: JoiLib.Base64Options): this

  /**
   * Requires the number to be a credit card number (Using Lunh Algorithm).
   */
  creditCard (): this

  /**
   * Specifies the exact string length required
   * @param limit - the required string length. It can also be a reference to another field.
   * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
   */
  length (limit: number | JoiLib.Reference, encoding?: string): this

  /**
   * Defines a regular expression rule.
   * @param pattern - a regular expression object the string value must match against.
   * @param options - optional, can be:
   *   Name for patterns (useful with multiple patterns). Defaults to 'required'.
   *   An optional configuration object with the following supported properties:
   *     name - optional pattern name.
   *     invert - optional boolean flag. Defaults to false behavior. If specified as true, the provided pattern will be disallowed instead of required.
   */
  regex (pattern: RegExp, options?: string | JoiLib.StringRegexOptions): this

  /**
   * Replace characters matching the given pattern with the specified replacement string where:
   * @param pattern - a regular expression object to match against, or a string of which all occurrences will be replaced.
   * @param replacement - the string that will replace the pattern.
   */
  replace (pattern: RegExp | string, replacement: string): this

  /**
   * Requires the string value to only contain a-z, A-Z, and 0-9.
   */
  alphanum (): this

  /**
   * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
   */
  token (): this

  /**
   * Requires the string value to be a valid email address.
   */
  email (options?: JoiLib.EmailOptions): this

  /**
   * Requires the string value to be a valid ip address.
   */
  ip (options?: JoiLib.IpOptions): this

  /**
   * Requires the string value to be a valid RFC 3986 URI.
   */
  uri (options?: JoiLib.UriOptions): this

  /**
   * Requires the string value to be a valid data URI string.
   */
  dataUri (options?: JoiLib.DataUriOptions): this

  /**
   * Requires the string value to be a valid GUID.
   */
  guid (options?: JoiLib.GuidOptions): this

  /**
   * Alias for `guid` -- Requires the string value to be a valid GUID
   */
  uuid (options?: JoiLib.GuidOptions): this

  /**
   * Requires the string value to be a valid hexadecimal string.
   */
  hex (options?: JoiLib.HexOptions): this

  /**
   * Requires the string value to be a valid hostname as per RFC1123.
   */
  hostname (): this

  /**
   * Requires the string value to be in valid ISO 8601 date format.
   */
  isoDate (): this

  /**
   * Requires the string value to be all lowercase. If the validation convert option is on (enabled by default), the string will be forced to lowercase.
   */
  lowercase (): this

  /**
   * Requires the string value to be all uppercase. If the validation convert option is on (enabled by default), the string will be forced to uppercase.
   */
  uppercase (): this

  /**
   * Requires the string value to contain no whitespace before or after. If the validation convert option is on (enabled by default), the string will be trimmed.
   */
  trim (): this
}
