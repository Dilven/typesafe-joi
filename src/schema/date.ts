import { OptionalSchema, RequiredSchema } from ".";
import { AbstractSchema } from "./base";
import { Reference } from "../lib/joi";
import { OPTIONAL_SCHEMA_TYPE, REQUIRED_SCHEMA_TYPE } from "../lib/symbols";

export interface DateSchema<Value = Date | undefined> extends OptionalSchema, DateSchemaType<DateSchema, Value> {}
export interface RequiredDateSchema<Value = Date> extends RequiredSchema, DateSchemaType<RequiredDateSchema, Value> {}

export interface DateSchemaType<Schema extends AbstractSchema, Value> extends AbstractSchema<Schema, Value> {
  schemaType: 'date'
  [OPTIONAL_SCHEMA_TYPE]: DateSchema
  [REQUIRED_SCHEMA_TYPE]: RequiredDateSchema

  /**
   * Specifies that the value must be greater than date.
   * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
   * allowing to explicitly ensure a date is either in the past or in the future.
   * It can also be a reference to another field.
   */
  greater (date: 'now' | Date | number | string | Reference): this

  /**
   * Specifies that the value must be less than date.
   * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
   * allowing to explicitly ensure a date is either in the past or in the future.
   * It can also be a reference to another field.
   */
  less (date: 'now' | Date | number | string | Reference): this

  /**
   * Specifies the oldest date allowed.
   * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
   * allowing to explicitly ensure a date is either in the past or in the future.
   * It can also be a reference to another field.
   */
  min (date: 'now' | Date | number | string | Reference): this

  /**
   * Specifies the latest date allowed.
   * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
   * allowing to explicitly ensure a date is either in the past or in the future.
   * It can also be a reference to another field.
   */
  max (date: 'now' | Date | number | string | Reference): this

  /**
   * Specifies the allowed date format:
   * @param format - string or array of strings that follow the moment.js format.
   */
  format (format: string | string[]): this

  /**
   * Requires the string value to be in valid ISO 8601 date format.
   */
  iso (): this

  /**
   * Requires the value to be a timestamp interval from Unix Time.
   * @param type - the type of timestamp (allowed values are unix or javascript [default])
   */
  timestamp (type?: 'javascript' | 'unix'): this
}
