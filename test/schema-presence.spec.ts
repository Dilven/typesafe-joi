import * as Joi from '../src'
import { type, testInvariant } from './util';

// Schema.required() should transform to the corresponding required schema
testInvariant(Joi.any().required(), type<Joi.RequiredAnySchema>(), true)
testInvariant(Joi.array().required(), type<Joi.RequiredArraySchema>(), true)
testInvariant(Joi.array().sparse(true).required(), type<Joi.RequiredSparseArraySchema>(), true)
testInvariant(Joi.boolean().required(), type<Joi.RequiredBooleanSchema>(), true)
testInvariant(Joi.binary().required(), type<Joi.RequiredBinarySchema>(), true)
testInvariant(Joi.date().required(), type<Joi.RequiredDateSchema>(), true)
testInvariant(Joi.func().required(), type<Joi.RequiredFunctionSchema>(), true)
testInvariant(Joi.number().required(), type<Joi.RequiredNumberSchema>(), true)
testInvariant(Joi.object().required(), type<Joi.RequiredObjectSchema>(), true)
testInvariant(Joi.string().required(), type<Joi.RequiredStringSchema>(), true)
testInvariant(Joi.alternatives().required(), type<Joi.RequiredAlternativesSchema>(), true)
testInvariant(Joi.lazy(() => Joi.string()).required(), type<Joi.RequiredLazySchema<string>>(), true)

// Calling required() on RequiredSchema should be safe
testInvariant(Joi.any().required().required(), type<Joi.RequiredAnySchema>(), true)
testInvariant(Joi.array().required().required(), type<Joi.RequiredArraySchema>(), true)
testInvariant(Joi.array().sparse(true).required().required(), type<Joi.RequiredSparseArraySchema>(), true)
testInvariant(Joi.boolean().required().required(), type<Joi.RequiredBooleanSchema>(), true)
testInvariant(Joi.binary().required().required(), type<Joi.RequiredBinarySchema>(), true)
testInvariant(Joi.date().required().required(), type<Joi.RequiredDateSchema>(), true)
testInvariant(Joi.func().required().required(), type<Joi.RequiredFunctionSchema>(), true)
testInvariant(Joi.number().required().required(), type<Joi.RequiredNumberSchema>(), true)
testInvariant(Joi.object().required().required(), type<Joi.RequiredObjectSchema>(), true)
testInvariant(Joi.string().required().required(), type<Joi.RequiredStringSchema>(), true)
testInvariant(Joi.alternatives().required().required(), type<Joi.RequiredAlternativesSchema>(), true)
testInvariant(Joi.lazy(() => Joi.string()).required().required(), type<Joi.RequiredLazySchema<string>>(), true)

// Schema.optional() should transform required schemas back to optional schemas
testInvariant(Joi.any().required().optional(), type<Joi.AnySchema>(), true)
testInvariant(Joi.array().required().optional(), type<Joi.ArraySchema>(), true)
testInvariant(Joi.array().sparse(true).required().optional(), type<Joi.SparseArraySchema>(), true)
testInvariant(Joi.boolean().required().optional(), type<Joi.BooleanSchema>(), true)
testInvariant(Joi.binary().required().optional(), type<Joi.BinarySchema>(), true)
testInvariant(Joi.date().required().optional(), type<Joi.DateSchema>(), true)
testInvariant(Joi.func().required().optional(), type<Joi.FunctionSchema>(), true)
testInvariant(Joi.number().required().optional(), type<Joi.NumberSchema>(), true)
testInvariant(Joi.object().required().optional(), type<Joi.ObjectSchema>(), true)
testInvariant(Joi.string().required().optional(), type<Joi.StringSchema>(), true)
testInvariant(Joi.alternatives().required().optional(), type<Joi.AlternativesSchema>(), true)
testInvariant(Joi.lazy(() => Joi.string()).required().optional(), type<Joi.LazySchema<string | undefined>>(), true)

// Calling optional() on OptionalSchema should be safe
testInvariant(Joi.any().optional(), type<Joi.AnySchema>(), true)
testInvariant(Joi.array().optional(), type<Joi.ArraySchema>(), true)
testInvariant(Joi.array().sparse(true).optional(), type<Joi.SparseArraySchema>(), true)
testInvariant(Joi.boolean().optional(), type<Joi.BooleanSchema>(), true)
testInvariant(Joi.binary().optional(), type<Joi.BinarySchema>(), true)
testInvariant(Joi.date().optional(), type<Joi.DateSchema>(), true)
testInvariant(Joi.func().optional(), type<Joi.FunctionSchema>(), true)
testInvariant(Joi.number().optional(), type<Joi.NumberSchema>(), true)
testInvariant(Joi.object().optional(), type<Joi.ObjectSchema>(), true)
testInvariant(Joi.string().optional(), type<Joi.StringSchema>(), true)
testInvariant(Joi.alternatives().optional(), type<Joi.AlternativesSchema>(), true)
testInvariant(Joi.lazy(() => Joi.string()).optional(), type<Joi.LazySchema<string | undefined>>(), true)