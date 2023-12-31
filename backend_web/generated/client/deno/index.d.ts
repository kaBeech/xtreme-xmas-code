
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PublicProfile
 * 
 */
export type PublicProfile = $Result.DefaultSelection<Prisma.$PublicProfilePayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Title
 * 
 */
export type Title = $Result.DefaultSelection<Prisma.$TitlePayload>
/**
 * Model Day
 * 
 */
export type Day = $Result.DefaultSelection<Prisma.$DayPayload>
/**
 * Model ChallengeModifier
 * 
 */
export type ChallengeModifier = $Result.DefaultSelection<Prisma.$ChallengeModifierPayload>
/**
 * Model ModifierOption
 * 
 */
export type ModifierOption = $Result.DefaultSelection<Prisma.$ModifierOptionPayload>
/**
 * Model ModifierPack
 * 
 */
export type ModifierPack = $Result.DefaultSelection<Prisma.$ModifierPackPayload>
/**
 * Model Upvote
 * 
 */
export type Upvote = $Result.DefaultSelection<Prisma.$UpvotePayload>
/**
 * Model Downvote
 * 
 */
export type Downvote = $Result.DefaultSelection<Prisma.$DownvotePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.publicProfile`: Exposes CRUD operations for the **PublicProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicProfiles
    * const publicProfiles = await prisma.publicProfile.findMany()
    * ```
    */
  get publicProfile(): Prisma.PublicProfileDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.title`: Exposes CRUD operations for the **Title** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Titles
    * const titles = await prisma.title.findMany()
    * ```
    */
  get title(): Prisma.TitleDelegate<ExtArgs>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<ExtArgs>;

  /**
   * `prisma.challengeModifier`: Exposes CRUD operations for the **ChallengeModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeModifiers
    * const challengeModifiers = await prisma.challengeModifier.findMany()
    * ```
    */
  get challengeModifier(): Prisma.ChallengeModifierDelegate<ExtArgs>;

  /**
   * `prisma.modifierOption`: Exposes CRUD operations for the **ModifierOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModifierOptions
    * const modifierOptions = await prisma.modifierOption.findMany()
    * ```
    */
  get modifierOption(): Prisma.ModifierOptionDelegate<ExtArgs>;

  /**
   * `prisma.modifierPack`: Exposes CRUD operations for the **ModifierPack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModifierPacks
    * const modifierPacks = await prisma.modifierPack.findMany()
    * ```
    */
  get modifierPack(): Prisma.ModifierPackDelegate<ExtArgs>;

  /**
   * `prisma.upvote`: Exposes CRUD operations for the **Upvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upvotes
    * const upvotes = await prisma.upvote.findMany()
    * ```
    */
  get upvote(): Prisma.UpvoteDelegate<ExtArgs>;

  /**
   * `prisma.downvote`: Exposes CRUD operations for the **Downvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Downvotes
    * const downvotes = await prisma.downvote.findMany()
    * ```
    */
  get downvote(): Prisma.DownvoteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PublicProfile: 'PublicProfile',
    Game: 'Game',
    Title: 'Title',
    Day: 'Day',
    ChallengeModifier: 'ChallengeModifier',
    ModifierOption: 'ModifierOption',
    ModifierPack: 'ModifierPack',
    Upvote: 'Upvote',
    Downvote: 'Downvote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'publicProfile' | 'game' | 'title' | 'day' | 'challengeModifier' | 'modifierOption' | 'modifierPack' | 'upvote' | 'downvote'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PublicProfile: {
        payload: Prisma.$PublicProfilePayload<ExtArgs>
        fields: Prisma.PublicProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          findFirst: {
            args: Prisma.PublicProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          findMany: {
            args: Prisma.PublicProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>[]
          }
          create: {
            args: Prisma.PublicProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          createMany: {
            args: Prisma.PublicProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PublicProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          update: {
            args: Prisma.PublicProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          deleteMany: {
            args: Prisma.PublicProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicProfilePayload>
          }
          aggregate: {
            args: Prisma.PublicProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublicProfile>
          }
          groupBy: {
            args: Prisma.PublicProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublicProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<PublicProfileCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>,
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Title: {
        payload: Prisma.$TitlePayload<ExtArgs>
        fields: Prisma.TitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TitleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TitleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          findFirst: {
            args: Prisma.TitleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TitleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          findMany: {
            args: Prisma.TitleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>[]
          }
          create: {
            args: Prisma.TitleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          createMany: {
            args: Prisma.TitleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TitleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          update: {
            args: Prisma.TitleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          deleteMany: {
            args: Prisma.TitleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TitleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TitleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitlePayload>
          }
          aggregate: {
            args: Prisma.TitleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTitle>
          }
          groupBy: {
            args: Prisma.TitleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TitleCountArgs<ExtArgs>,
            result: $Utils.Optional<TitleCountAggregateOutputType> | number
          }
        }
      }
      Day: {
        payload: Prisma.$DayPayload<ExtArgs>
        fields: Prisma.DayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findFirst: {
            args: Prisma.DayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findMany: {
            args: Prisma.DayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>[]
          }
          create: {
            args: Prisma.DayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          createMany: {
            args: Prisma.DayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          update: {
            args: Prisma.DayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          deleteMany: {
            args: Prisma.DayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          aggregate: {
            args: Prisma.DayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDay>
          }
          groupBy: {
            args: Prisma.DayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DayGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayCountArgs<ExtArgs>,
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
      ChallengeModifier: {
        payload: Prisma.$ChallengeModifierPayload<ExtArgs>
        fields: Prisma.ChallengeModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeModifierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          findFirst: {
            args: Prisma.ChallengeModifierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeModifierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          findMany: {
            args: Prisma.ChallengeModifierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>[]
          }
          create: {
            args: Prisma.ChallengeModifierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          createMany: {
            args: Prisma.ChallengeModifierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChallengeModifierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          update: {
            args: Prisma.ChallengeModifierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeModifierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeModifierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeModifierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeModifierPayload>
          }
          aggregate: {
            args: Prisma.ChallengeModifierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChallengeModifier>
          }
          groupBy: {
            args: Prisma.ChallengeModifierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeModifierCountArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeModifierCountAggregateOutputType> | number
          }
        }
      }
      ModifierOption: {
        payload: Prisma.$ModifierOptionPayload<ExtArgs>
        fields: Prisma.ModifierOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModifierOptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierOptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          findFirst: {
            args: Prisma.ModifierOptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierOptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          findMany: {
            args: Prisma.ModifierOptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>[]
          }
          create: {
            args: Prisma.ModifierOptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          createMany: {
            args: Prisma.ModifierOptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModifierOptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          update: {
            args: Prisma.ModifierOptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          deleteMany: {
            args: Prisma.ModifierOptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierOptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModifierOptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierOptionPayload>
          }
          aggregate: {
            args: Prisma.ModifierOptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModifierOption>
          }
          groupBy: {
            args: Prisma.ModifierOptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModifierOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierOptionCountArgs<ExtArgs>,
            result: $Utils.Optional<ModifierOptionCountAggregateOutputType> | number
          }
        }
      }
      ModifierPack: {
        payload: Prisma.$ModifierPackPayload<ExtArgs>
        fields: Prisma.ModifierPackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModifierPackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierPackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          findFirst: {
            args: Prisma.ModifierPackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierPackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          findMany: {
            args: Prisma.ModifierPackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>[]
          }
          create: {
            args: Prisma.ModifierPackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          createMany: {
            args: Prisma.ModifierPackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModifierPackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          update: {
            args: Prisma.ModifierPackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          deleteMany: {
            args: Prisma.ModifierPackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierPackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModifierPackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModifierPackPayload>
          }
          aggregate: {
            args: Prisma.ModifierPackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModifierPack>
          }
          groupBy: {
            args: Prisma.ModifierPackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModifierPackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierPackCountArgs<ExtArgs>,
            result: $Utils.Optional<ModifierPackCountAggregateOutputType> | number
          }
        }
      }
      Upvote: {
        payload: Prisma.$UpvotePayload<ExtArgs>
        fields: Prisma.UpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpvoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpvoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findFirst: {
            args: Prisma.UpvoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpvoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findMany: {
            args: Prisma.UpvoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          create: {
            args: Prisma.UpvoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          createMany: {
            args: Prisma.UpvoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UpvoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          update: {
            args: Prisma.UpvoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          deleteMany: {
            args: Prisma.UpvoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UpvoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UpvoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          aggregate: {
            args: Prisma.UpvoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUpvote>
          }
          groupBy: {
            args: Prisma.UpvoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpvoteCountArgs<ExtArgs>,
            result: $Utils.Optional<UpvoteCountAggregateOutputType> | number
          }
        }
      }
      Downvote: {
        payload: Prisma.$DownvotePayload<ExtArgs>
        fields: Prisma.DownvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DownvoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DownvoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          findFirst: {
            args: Prisma.DownvoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DownvoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          findMany: {
            args: Prisma.DownvoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>[]
          }
          create: {
            args: Prisma.DownvoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          createMany: {
            args: Prisma.DownvoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DownvoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          update: {
            args: Prisma.DownvoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          deleteMany: {
            args: Prisma.DownvoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DownvoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DownvoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DownvotePayload>
          }
          aggregate: {
            args: Prisma.DownvoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDownvote>
          }
          groupBy: {
            args: Prisma.DownvoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DownvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DownvoteCountArgs<ExtArgs>,
            result: $Utils.Optional<DownvoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ChallengeModifier: number
    Downvote: number
    Game: number
    ModifierOption: number
    ModifierPack: number
    PublicProfile: number
    Upvote: number
    DefaultExcludedChallengeModifiers: number
    DefaultExcludedModifierOptions: number
    DefaultIncludedCustomChallengeModifiers: number
    DefaultIncludedCustomModifierOptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | UserCountOutputTypeCountChallengeModifierArgs
    Downvote?: boolean | UserCountOutputTypeCountDownvoteArgs
    Game?: boolean | UserCountOutputTypeCountGameArgs
    ModifierOption?: boolean | UserCountOutputTypeCountModifierOptionArgs
    ModifierPack?: boolean | UserCountOutputTypeCountModifierPackArgs
    PublicProfile?: boolean | UserCountOutputTypeCountPublicProfileArgs
    Upvote?: boolean | UserCountOutputTypeCountUpvoteArgs
    DefaultExcludedChallengeModifiers?: boolean | UserCountOutputTypeCountDefaultExcludedChallengeModifiersArgs
    DefaultExcludedModifierOptions?: boolean | UserCountOutputTypeCountDefaultExcludedModifierOptionsArgs
    DefaultIncludedCustomChallengeModifiers?: boolean | UserCountOutputTypeCountDefaultIncludedCustomChallengeModifiersArgs
    DefaultIncludedCustomModifierOptions?: boolean | UserCountOutputTypeCountDefaultIncludedCustomModifierOptionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengeModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDownvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownvoteWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModifierPackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicProfileWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultExcludedModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultIncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }



  /**
   * Count Type PublicProfileCountOutputType
   */

  export type PublicProfileCountOutputType = {
    Game: number
  }

  export type PublicProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | PublicProfileCountOutputTypeCountGameArgs
  }

  // Custom InputTypes

  /**
   * PublicProfileCountOutputType without action
   */
  export type PublicProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfileCountOutputType
     */
    select?: PublicProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PublicProfileCountOutputType without action
   */
  export type PublicProfileCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }



  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    Day: number
    Downvote: number
    Upvote: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Day?: boolean | GameCountOutputTypeCountDayArgs
    Downvote?: boolean | GameCountOutputTypeCountDownvoteArgs
    Upvote?: boolean | GameCountOutputTypeCountUpvoteArgs
  }

  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountDownvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownvoteWhereInput
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
  }



  /**
   * Count Type TitleCountOutputType
   */

  export type TitleCountOutputType = {
    Game: number
  }

  export type TitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | TitleCountOutputTypeCountGameArgs
  }

  // Custom InputTypes

  /**
   * TitleCountOutputType without action
   */
  export type TitleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleCountOutputType
     */
    select?: TitleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TitleCountOutputType without action
   */
  export type TitleCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }



  /**
   * Count Type DayCountOutputType
   */

  export type DayCountOutputType = {
    ExcludedChallengeModifiers: number
    EncludedCustomChallengeModifiers: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ExcludedChallengeModifiers?: boolean | DayCountOutputTypeCountExcludedChallengeModifiersArgs
    EncludedCustomChallengeModifiers?: boolean | DayCountOutputTypeCountEncludedCustomChallengeModifiersArgs
  }

  // Custom InputTypes

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountEncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }



  /**
   * Count Type ChallengeModifierCountOutputType
   */

  export type ChallengeModifierCountOutputType = {
    Day: number
    DayCompletedInPart1: number
    ModifierOption: number
    UserExcluded: number
    UserIncluded: number
    ModifierPackExcluded: number
    ModifierPackIncluded: number
  }

  export type ChallengeModifierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Day?: boolean | ChallengeModifierCountOutputTypeCountDayArgs
    DayCompletedInPart1?: boolean | ChallengeModifierCountOutputTypeCountDayCompletedInPart1Args
    ModifierOption?: boolean | ChallengeModifierCountOutputTypeCountModifierOptionArgs
    UserExcluded?: boolean | ChallengeModifierCountOutputTypeCountUserExcludedArgs
    UserIncluded?: boolean | ChallengeModifierCountOutputTypeCountUserIncludedArgs
    ModifierPackExcluded?: boolean | ChallengeModifierCountOutputTypeCountModifierPackExcludedArgs
    ModifierPackIncluded?: boolean | ChallengeModifierCountOutputTypeCountModifierPackIncludedArgs
  }

  // Custom InputTypes

  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifierCountOutputType
     */
    select?: ChallengeModifierCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountDayCompletedInPart1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountUserExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountUserIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierPackExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierPackIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }



  /**
   * Count Type ModifierOptionCountOutputType
   */

  export type ModifierOptionCountOutputType = {
    Day: number
    DayCompletedInPart1: number
    UserExcluded: number
    UserIncluded: number
    ExcludedModifierOptions: number
    IncludedCustomModifierOptions: number
  }

  export type ModifierOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Day?: boolean | ModifierOptionCountOutputTypeCountDayArgs
    DayCompletedInPart1?: boolean | ModifierOptionCountOutputTypeCountDayCompletedInPart1Args
    UserExcluded?: boolean | ModifierOptionCountOutputTypeCountUserExcludedArgs
    UserIncluded?: boolean | ModifierOptionCountOutputTypeCountUserIncludedArgs
    ExcludedModifierOptions?: boolean | ModifierOptionCountOutputTypeCountExcludedModifierOptionsArgs
    IncludedCustomModifierOptions?: boolean | ModifierOptionCountOutputTypeCountIncludedCustomModifierOptionsArgs
  }

  // Custom InputTypes

  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOptionCountOutputType
     */
    select?: ModifierOptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountDayCompletedInPart1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountUserExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountUserIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountExcludedModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }



  /**
   * Count Type ModifierPackCountOutputType
   */

  export type ModifierPackCountOutputType = {
    ExcludedFromDay: number
    IncludedInDay: number
  }

  export type ModifierPackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ExcludedFromDay?: boolean | ModifierPackCountOutputTypeCountExcludedFromDayArgs
    IncludedInDay?: boolean | ModifierPackCountOutputTypeCountIncludedInDayArgs
  }

  // Custom InputTypes

  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPackCountOutputType
     */
    select?: ModifierPackCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountExcludedFromDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountIncludedInDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    numberOfGames: number | null
  }

  export type UserSumAggregateOutputType = {
    numberOfGames: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    serializedId: string | null
    username: string | null
    oauthUrl: string | null
    oauthUsername: string | null
    oauthName: string | null
    oauthAvatarUrl: string | null
    dateCreated: Date | null
    numberOfGames: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    serializedId: string | null
    username: string | null
    oauthUrl: string | null
    oauthUsername: string | null
    oauthName: string | null
    oauthAvatarUrl: string | null
    dateCreated: Date | null
    numberOfGames: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    serializedId: number
    username: number
    oauthUrl: number
    oauthUsername: number
    oauthName: number
    oauthAvatarUrl: number
    dateCreated: number
    numberOfGames: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    numberOfGames?: true
  }

  export type UserSumAggregateInputType = {
    numberOfGames?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    oauthUrl?: true
    oauthUsername?: true
    oauthName?: true
    oauthAvatarUrl?: true
    dateCreated?: true
    numberOfGames?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    oauthUrl?: true
    oauthUsername?: true
    oauthName?: true
    oauthAvatarUrl?: true
    dateCreated?: true
    numberOfGames?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    oauthUrl?: true
    oauthUsername?: true
    oauthName?: true
    oauthAvatarUrl?: true
    dateCreated?: true
    numberOfGames?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    serializedId: string | null
    username: string | null
    oauthUrl: string | null
    oauthUsername: string | null
    oauthName: string | null
    oauthAvatarUrl: string | null
    dateCreated: Date
    numberOfGames: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serializedId?: boolean
    username?: boolean
    oauthUrl?: boolean
    oauthUsername?: boolean
    oauthName?: boolean
    oauthAvatarUrl?: boolean
    dateCreated?: boolean
    numberOfGames?: boolean
    ChallengeModifier?: boolean | User$ChallengeModifierArgs<ExtArgs>
    Downvote?: boolean | User$DownvoteArgs<ExtArgs>
    Game?: boolean | User$GameArgs<ExtArgs>
    ModifierOption?: boolean | User$ModifierOptionArgs<ExtArgs>
    ModifierPack?: boolean | User$ModifierPackArgs<ExtArgs>
    PublicProfile?: boolean | User$PublicProfileArgs<ExtArgs>
    Upvote?: boolean | User$UpvoteArgs<ExtArgs>
    DefaultExcludedChallengeModifiers?: boolean | User$DefaultExcludedChallengeModifiersArgs<ExtArgs>
    DefaultExcludedModifierOptions?: boolean | User$DefaultExcludedModifierOptionsArgs<ExtArgs>
    DefaultIncludedCustomChallengeModifiers?: boolean | User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>
    DefaultIncludedCustomModifierOptions?: boolean | User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    serializedId?: boolean
    username?: boolean
    oauthUrl?: boolean
    oauthUsername?: boolean
    oauthName?: boolean
    oauthAvatarUrl?: boolean
    dateCreated?: boolean
    numberOfGames?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | User$ChallengeModifierArgs<ExtArgs>
    Downvote?: boolean | User$DownvoteArgs<ExtArgs>
    Game?: boolean | User$GameArgs<ExtArgs>
    ModifierOption?: boolean | User$ModifierOptionArgs<ExtArgs>
    ModifierPack?: boolean | User$ModifierPackArgs<ExtArgs>
    PublicProfile?: boolean | User$PublicProfileArgs<ExtArgs>
    Upvote?: boolean | User$UpvoteArgs<ExtArgs>
    DefaultExcludedChallengeModifiers?: boolean | User$DefaultExcludedChallengeModifiersArgs<ExtArgs>
    DefaultExcludedModifierOptions?: boolean | User$DefaultExcludedModifierOptionsArgs<ExtArgs>
    DefaultIncludedCustomChallengeModifiers?: boolean | User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>
    DefaultIncludedCustomModifierOptions?: boolean | User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ChallengeModifier: Prisma.$ChallengeModifierPayload<ExtArgs>[]
      Downvote: Prisma.$DownvotePayload<ExtArgs>[]
      Game: Prisma.$GamePayload<ExtArgs>[]
      ModifierOption: Prisma.$ModifierOptionPayload<ExtArgs>[]
      ModifierPack: Prisma.$ModifierPackPayload<ExtArgs>[]
      PublicProfile: Prisma.$PublicProfilePayload<ExtArgs>[]
      Upvote: Prisma.$UpvotePayload<ExtArgs>[]
      DefaultExcludedChallengeModifiers: Prisma.$ChallengeModifierPayload<ExtArgs>[]
      DefaultExcludedModifierOptions: Prisma.$ModifierOptionPayload<ExtArgs>[]
      DefaultIncludedCustomChallengeModifiers: Prisma.$ChallengeModifierPayload<ExtArgs>[]
      DefaultIncludedCustomModifierOptions: Prisma.$ModifierOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serializedId: string | null
      username: string | null
      oauthUrl: string | null
      oauthUsername: string | null
      oauthName: string | null
      oauthAvatarUrl: string | null
      dateCreated: Date
      numberOfGames: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ChallengeModifier<T extends User$ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, User$ChallengeModifierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'> | Null>;

    Downvote<T extends User$DownvoteArgs<ExtArgs> = {}>(args?: Subset<T, User$DownvoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findMany'> | Null>;

    Game<T extends User$GameArgs<ExtArgs> = {}>(args?: Subset<T, User$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findMany'> | Null>;

    ModifierOption<T extends User$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, User$ModifierOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    ModifierPack<T extends User$ModifierPackArgs<ExtArgs> = {}>(args?: Subset<T, User$ModifierPackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findMany'> | Null>;

    PublicProfile<T extends User$PublicProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$PublicProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

    Upvote<T extends User$UpvoteArgs<ExtArgs> = {}>(args?: Subset<T, User$UpvoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findMany'> | Null>;

    DefaultExcludedChallengeModifiers<T extends User$DefaultExcludedChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultExcludedChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'> | Null>;

    DefaultExcludedModifierOptions<T extends User$DefaultExcludedModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultExcludedModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    DefaultIncludedCustomChallengeModifiers<T extends User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'> | Null>;

    DefaultIncludedCustomModifierOptions<T extends User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly serializedId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly oauthUrl: FieldRef<"User", 'String'>
    readonly oauthUsername: FieldRef<"User", 'String'>
    readonly oauthName: FieldRef<"User", 'String'>
    readonly oauthAvatarUrl: FieldRef<"User", 'String'>
    readonly dateCreated: FieldRef<"User", 'DateTime'>
    readonly numberOfGames: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ChallengeModifier
   */
  export type User$ChallengeModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * User.Downvote
   */
  export type User$DownvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    where?: DownvoteWhereInput
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    cursor?: DownvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DownvoteScalarFieldEnum | DownvoteScalarFieldEnum[]
  }


  /**
   * User.Game
   */
  export type User$GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * User.ModifierOption
   */
  export type User$ModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * User.ModifierPack
   */
  export type User$ModifierPackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * User.PublicProfile
   */
  export type User$PublicProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    where?: PublicProfileWhereInput
    orderBy?: PublicProfileOrderByWithRelationInput | PublicProfileOrderByWithRelationInput[]
    cursor?: PublicProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicProfileScalarFieldEnum | PublicProfileScalarFieldEnum[]
  }


  /**
   * User.Upvote
   */
  export type User$UpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    cursor?: UpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }


  /**
   * User.DefaultExcludedChallengeModifiers
   */
  export type User$DefaultExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * User.DefaultExcludedModifierOptions
   */
  export type User$DefaultExcludedModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * User.DefaultIncludedCustomChallengeModifiers
   */
  export type User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * User.DefaultIncludedCustomModifierOptions
   */
  export type User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model PublicProfile
   */

  export type AggregatePublicProfile = {
    _count: PublicProfileCountAggregateOutputType | null
    _avg: PublicProfileAvgAggregateOutputType | null
    _sum: PublicProfileSumAggregateOutputType | null
    _min: PublicProfileMinAggregateOutputType | null
    _max: PublicProfileMaxAggregateOutputType | null
  }

  export type PublicProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicProfileSumAggregateOutputType = {
    id: number | null
  }

  export type PublicProfileMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    userId: string | null
  }

  export type PublicProfileMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    userId: string | null
  }

  export type PublicProfileCountAggregateOutputType = {
    id: number
    dateCreated: number
    name: number
    userId: number
    _all: number
  }


  export type PublicProfileAvgAggregateInputType = {
    id?: true
  }

  export type PublicProfileSumAggregateInputType = {
    id?: true
  }

  export type PublicProfileMinAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
  }

  export type PublicProfileMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
  }

  export type PublicProfileCountAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type PublicProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicProfile to aggregate.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: PublicProfileOrderByWithRelationInput | PublicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicProfiles
    **/
    _count?: true | PublicProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicProfileMaxAggregateInputType
  }

  export type GetPublicProfileAggregateType<T extends PublicProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicProfile[P]>
      : GetScalarType<T[P], AggregatePublicProfile[P]>
  }




  export type PublicProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicProfileWhereInput
    orderBy?: PublicProfileOrderByWithAggregationInput | PublicProfileOrderByWithAggregationInput[]
    by: PublicProfileScalarFieldEnum[] | PublicProfileScalarFieldEnum
    having?: PublicProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicProfileCountAggregateInputType | true
    _avg?: PublicProfileAvgAggregateInputType
    _sum?: PublicProfileSumAggregateInputType
    _min?: PublicProfileMinAggregateInputType
    _max?: PublicProfileMaxAggregateInputType
  }

  export type PublicProfileGroupByOutputType = {
    id: number
    dateCreated: Date
    name: string
    userId: string
    _count: PublicProfileCountAggregateOutputType | null
    _avg: PublicProfileAvgAggregateOutputType | null
    _sum: PublicProfileSumAggregateOutputType | null
    _min: PublicProfileMinAggregateOutputType | null
    _max: PublicProfileMaxAggregateOutputType | null
  }

  type GetPublicProfileGroupByPayload<T extends PublicProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PublicProfileGroupByOutputType[P]>
        }
      >
    >


  export type PublicProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    userId?: boolean
    Game?: boolean | PublicProfile$GameArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PublicProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicProfile"]>

  export type PublicProfileSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    userId?: boolean
  }

  export type PublicProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | PublicProfile$GameArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PublicProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PublicProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicProfile"
    objects: {
      Game: Prisma.$GamePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      name: string
      userId: string
    }, ExtArgs["result"]["publicProfile"]>
    composites: {}
  }


  type PublicProfileGetPayload<S extends boolean | null | undefined | PublicProfileDefaultArgs> = $Result.GetResult<Prisma.$PublicProfilePayload, S>

  type PublicProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicProfileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PublicProfileCountAggregateInputType | true
    }

  export interface PublicProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicProfile'], meta: { name: 'PublicProfile' } }
    /**
     * Find zero or one PublicProfile that matches the filter.
     * @param {PublicProfileFindUniqueArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PublicProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicProfileFindUniqueOrThrowArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PublicProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindFirstArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindFirstArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PublicProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindFirstOrThrowArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PublicProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicProfiles
     * const publicProfiles = await prisma.publicProfile.findMany()
     * 
     * // Get first 10 PublicProfiles
     * const publicProfiles = await prisma.publicProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicProfileWithIdOnly = await prisma.publicProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PublicProfile.
     * @param {PublicProfileCreateArgs} args - Arguments to create a PublicProfile.
     * @example
     * // Create one PublicProfile
     * const PublicProfile = await prisma.publicProfile.create({
     *   data: {
     *     // ... data to create a PublicProfile
     *   }
     * })
     * 
    **/
    create<T extends PublicProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileCreateArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PublicProfiles.
     *     @param {PublicProfileCreateManyArgs} args - Arguments to create many PublicProfiles.
     *     @example
     *     // Create many PublicProfiles
     *     const publicProfile = await prisma.publicProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PublicProfile.
     * @param {PublicProfileDeleteArgs} args - Arguments to delete one PublicProfile.
     * @example
     * // Delete one PublicProfile
     * const PublicProfile = await prisma.publicProfile.delete({
     *   where: {
     *     // ... filter to delete one PublicProfile
     *   }
     * })
     * 
    **/
    delete<T extends PublicProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileDeleteArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PublicProfile.
     * @param {PublicProfileUpdateArgs} args - Arguments to update one PublicProfile.
     * @example
     * // Update one PublicProfile
     * const publicProfile = await prisma.publicProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpdateArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PublicProfiles.
     * @param {PublicProfileDeleteManyArgs} args - Arguments to filter PublicProfiles to delete.
     * @example
     * // Delete a few PublicProfiles
     * const { count } = await prisma.publicProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicProfiles
     * const publicProfile = await prisma.publicProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicProfile.
     * @param {PublicProfileUpsertArgs} args - Arguments to update or create a PublicProfile.
     * @example
     * // Update or create a PublicProfile
     * const publicProfile = await prisma.publicProfile.upsert({
     *   create: {
     *     // ... data to create a PublicProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicProfile we want to update
     *   }
     * })
    **/
    upsert<T extends PublicProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpsertArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PublicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileCountArgs} args - Arguments to filter PublicProfiles to count.
     * @example
     * // Count the number of PublicProfiles
     * const count = await prisma.publicProfile.count({
     *   where: {
     *     // ... the filter for the PublicProfiles we want to count
     *   }
     * })
    **/
    count<T extends PublicProfileCountArgs>(
      args?: Subset<T, PublicProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicProfileAggregateArgs>(args: Subset<T, PublicProfileAggregateArgs>): Prisma.PrismaPromise<GetPublicProfileAggregateType<T>>

    /**
     * Group by PublicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicProfileGroupByArgs['orderBy'] }
        : { orderBy?: PublicProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicProfile model
   */
  readonly fields: PublicProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Game<T extends PublicProfile$GameArgs<ExtArgs> = {}>(args?: Subset<T, PublicProfile$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PublicProfile model
   */ 
  interface PublicProfileFieldRefs {
    readonly id: FieldRef<"PublicProfile", 'Int'>
    readonly dateCreated: FieldRef<"PublicProfile", 'DateTime'>
    readonly name: FieldRef<"PublicProfile", 'String'>
    readonly userId: FieldRef<"PublicProfile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PublicProfile findUnique
   */
  export type PublicProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile findUniqueOrThrow
   */
  export type PublicProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile findFirst
   */
  export type PublicProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: PublicProfileOrderByWithRelationInput | PublicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicProfiles.
     */
    distinct?: PublicProfileScalarFieldEnum | PublicProfileScalarFieldEnum[]
  }


  /**
   * PublicProfile findFirstOrThrow
   */
  export type PublicProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: PublicProfileOrderByWithRelationInput | PublicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicProfiles.
     */
    distinct?: PublicProfileScalarFieldEnum | PublicProfileScalarFieldEnum[]
  }


  /**
   * PublicProfile findMany
   */
  export type PublicProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfiles to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: PublicProfileOrderByWithRelationInput | PublicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    distinct?: PublicProfileScalarFieldEnum | PublicProfileScalarFieldEnum[]
  }


  /**
   * PublicProfile create
   */
  export type PublicProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicProfile.
     */
    data: XOR<PublicProfileCreateInput, PublicProfileUncheckedCreateInput>
  }


  /**
   * PublicProfile createMany
   */
  export type PublicProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicProfiles.
     */
    data: PublicProfileCreateManyInput | PublicProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PublicProfile update
   */
  export type PublicProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicProfile.
     */
    data: XOR<PublicProfileUpdateInput, PublicProfileUncheckedUpdateInput>
    /**
     * Choose, which PublicProfile to update.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile updateMany
   */
  export type PublicProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicProfiles.
     */
    data: XOR<PublicProfileUpdateManyMutationInput, PublicProfileUncheckedUpdateManyInput>
    /**
     * Filter which PublicProfiles to update
     */
    where?: PublicProfileWhereInput
  }


  /**
   * PublicProfile upsert
   */
  export type PublicProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicProfile to update in case it exists.
     */
    where: PublicProfileWhereUniqueInput
    /**
     * In case the PublicProfile found by the `where` argument doesn't exist, create a new PublicProfile with this data.
     */
    create: XOR<PublicProfileCreateInput, PublicProfileUncheckedCreateInput>
    /**
     * In case the PublicProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicProfileUpdateInput, PublicProfileUncheckedUpdateInput>
  }


  /**
   * PublicProfile delete
   */
  export type PublicProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter which PublicProfile to delete.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile deleteMany
   */
  export type PublicProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicProfiles to delete
     */
    where?: PublicProfileWhereInput
  }


  /**
   * PublicProfile.Game
   */
  export type PublicProfile$GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * PublicProfile without action
   */
  export type PublicProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
  }



  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    rerollTokensSpentDuringPart2Raw: number | null
    part2RerollBonus: number | null
    publicProfileId: number | null
    score: number | null
    titleId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    rerollTokensSpentDuringPart2Raw: number | null
    part2RerollBonus: number | null
    publicProfileId: number | null
    score: number | null
    titleId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    userId: string | null
    number: number | null
    year: number | null
    name: string | null
    playerName: string | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    rerollTokensSpentDuringPart2Raw: number | null
    part2RerollBonus: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
    isPublic: boolean | null
    publicProfileId: number | null
    score: number | null
    titleId: number | null
    dateCompleted: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    userId: string | null
    number: number | null
    year: number | null
    name: string | null
    playerName: string | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    rerollTokensSpentDuringPart2Raw: number | null
    part2RerollBonus: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
    isPublic: boolean | null
    publicProfileId: number | null
    score: number | null
    titleId: number | null
    dateCompleted: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    dateCreated: number
    userId: number
    number: number
    year: number
    name: number
    playerName: number
    currentDay: number
    currentDayCompleted: number
    currentRerollTokens: number
    rerollTokensSpent: number
    rerollTokensSpentDuringPart2Raw: number
    part2RerollBonus: number
    repositoryLink: number
    progressSheetLink: number
    isPublic: number
    publicProfileId: number
    score: number
    titleId: number
    dateCompleted: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    number?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    rerollTokensSpentDuringPart2Raw?: true
    part2RerollBonus?: true
    publicProfileId?: true
    score?: true
    titleId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    number?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    rerollTokensSpentDuringPart2Raw?: true
    part2RerollBonus?: true
    publicProfileId?: true
    score?: true
    titleId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    rerollTokensSpentDuringPart2Raw?: true
    part2RerollBonus?: true
    repositoryLink?: true
    progressSheetLink?: true
    isPublic?: true
    publicProfileId?: true
    score?: true
    titleId?: true
    dateCompleted?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    rerollTokensSpentDuringPart2Raw?: true
    part2RerollBonus?: true
    repositoryLink?: true
    progressSheetLink?: true
    isPublic?: true
    publicProfileId?: true
    score?: true
    titleId?: true
    dateCompleted?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    rerollTokensSpentDuringPart2Raw?: true
    part2RerollBonus?: true
    repositoryLink?: true
    progressSheetLink?: true
    isPublic?: true
    publicProfileId?: true
    score?: true
    titleId?: true
    dateCompleted?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    dateCreated: Date
    userId: string
    number: number
    year: number
    name: string
    playerName: string | null
    currentDay: number
    currentDayCompleted: boolean
    currentRerollTokens: number
    rerollTokensSpent: number
    rerollTokensSpentDuringPart2Raw: number
    part2RerollBonus: number
    repositoryLink: string | null
    progressSheetLink: string
    isPublic: boolean
    publicProfileId: number | null
    score: number
    titleId: number | null
    dateCompleted: Date | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    userId?: boolean
    number?: boolean
    year?: boolean
    name?: boolean
    playerName?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensSpent?: boolean
    rerollTokensSpentDuringPart2Raw?: boolean
    part2RerollBonus?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
    isPublic?: boolean
    publicProfileId?: boolean
    score?: boolean
    titleId?: boolean
    dateCompleted?: boolean
    Day?: boolean | Game$DayArgs<ExtArgs>
    Downvote?: boolean | Game$DownvoteArgs<ExtArgs>
    PublicProfile?: boolean | Game$PublicProfileArgs<ExtArgs>
    Title?: boolean | Game$TitleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Upvote?: boolean | Game$UpvoteArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    userId?: boolean
    number?: boolean
    year?: boolean
    name?: boolean
    playerName?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensSpent?: boolean
    rerollTokensSpentDuringPart2Raw?: boolean
    part2RerollBonus?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
    isPublic?: boolean
    publicProfileId?: boolean
    score?: boolean
    titleId?: boolean
    dateCompleted?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Day?: boolean | Game$DayArgs<ExtArgs>
    Downvote?: boolean | Game$DownvoteArgs<ExtArgs>
    PublicProfile?: boolean | Game$PublicProfileArgs<ExtArgs>
    Title?: boolean | Game$TitleArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Upvote?: boolean | Game$UpvoteArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      Day: Prisma.$DayPayload<ExtArgs>[]
      Downvote: Prisma.$DownvotePayload<ExtArgs>[]
      PublicProfile: Prisma.$PublicProfilePayload<ExtArgs> | null
      Title: Prisma.$TitlePayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>
      Upvote: Prisma.$UpvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      userId: string
      number: number
      year: number
      name: string
      playerName: string | null
      currentDay: number
      currentDayCompleted: boolean
      currentRerollTokens: number
      rerollTokensSpent: number
      rerollTokensSpentDuringPart2Raw: number
      part2RerollBonus: number
      repositoryLink: string | null
      progressSheetLink: string
      isPublic: boolean
      publicProfileId: number | null
      score: number
      titleId: number | null
      dateCompleted: Date | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }


  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GameCreateArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GameDeleteArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpsertArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Day<T extends Game$DayArgs<ExtArgs> = {}>(args?: Subset<T, Game$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    Downvote<T extends Game$DownvoteArgs<ExtArgs> = {}>(args?: Subset<T, Game$DownvoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findMany'> | Null>;

    PublicProfile<T extends Game$PublicProfileArgs<ExtArgs> = {}>(args?: Subset<T, Game$PublicProfileArgs<ExtArgs>>): Prisma__PublicProfileClient<$Result.GetResult<Prisma.$PublicProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Title<T extends Game$TitleArgs<ExtArgs> = {}>(args?: Subset<T, Game$TitleArgs<ExtArgs>>): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Upvote<T extends Game$UpvoteArgs<ExtArgs> = {}>(args?: Subset<T, Game$UpvoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly dateCreated: FieldRef<"Game", 'DateTime'>
    readonly userId: FieldRef<"Game", 'String'>
    readonly number: FieldRef<"Game", 'Int'>
    readonly year: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly playerName: FieldRef<"Game", 'String'>
    readonly currentDay: FieldRef<"Game", 'Int'>
    readonly currentDayCompleted: FieldRef<"Game", 'Boolean'>
    readonly currentRerollTokens: FieldRef<"Game", 'Int'>
    readonly rerollTokensSpent: FieldRef<"Game", 'Int'>
    readonly rerollTokensSpentDuringPart2Raw: FieldRef<"Game", 'Int'>
    readonly part2RerollBonus: FieldRef<"Game", 'Int'>
    readonly repositoryLink: FieldRef<"Game", 'String'>
    readonly progressSheetLink: FieldRef<"Game", 'String'>
    readonly isPublic: FieldRef<"Game", 'Boolean'>
    readonly publicProfileId: FieldRef<"Game", 'Int'>
    readonly score: FieldRef<"Game", 'Int'>
    readonly titleId: FieldRef<"Game", 'Int'>
    readonly dateCompleted: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }


  /**
   * Game.Day
   */
  export type Game$DayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Game.Downvote
   */
  export type Game$DownvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    where?: DownvoteWhereInput
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    cursor?: DownvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DownvoteScalarFieldEnum | DownvoteScalarFieldEnum[]
  }


  /**
   * Game.PublicProfile
   */
  export type Game$PublicProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    where?: PublicProfileWhereInput
  }


  /**
   * Game.Title
   */
  export type Game$TitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    where?: TitleWhereInput
  }


  /**
   * Game.Upvote
   */
  export type Game$UpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    cursor?: UpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }


  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
  }



  /**
   * Model Title
   */

  export type AggregateTitle = {
    _count: TitleCountAggregateOutputType | null
    _avg: TitleAvgAggregateOutputType | null
    _sum: TitleSumAggregateOutputType | null
    _min: TitleMinAggregateOutputType | null
    _max: TitleMaxAggregateOutputType | null
  }

  export type TitleAvgAggregateOutputType = {
    id: number | null
    minimumScore: number | null
  }

  export type TitleSumAggregateOutputType = {
    id: number | null
    minimumScore: number | null
  }

  export type TitleMinAggregateOutputType = {
    id: number | null
    name: string | null
    minimumScore: number | null
  }

  export type TitleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    minimumScore: number | null
  }

  export type TitleCountAggregateOutputType = {
    id: number
    name: number
    minimumScore: number
    _all: number
  }


  export type TitleAvgAggregateInputType = {
    id?: true
    minimumScore?: true
  }

  export type TitleSumAggregateInputType = {
    id?: true
    minimumScore?: true
  }

  export type TitleMinAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
  }

  export type TitleMaxAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
  }

  export type TitleCountAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
    _all?: true
  }

  export type TitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Title to aggregate.
     */
    where?: TitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titles to fetch.
     */
    orderBy?: TitleOrderByWithRelationInput | TitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Titles
    **/
    _count?: true | TitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TitleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TitleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TitleMaxAggregateInputType
  }

  export type GetTitleAggregateType<T extends TitleAggregateArgs> = {
        [P in keyof T & keyof AggregateTitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitle[P]>
      : GetScalarType<T[P], AggregateTitle[P]>
  }




  export type TitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TitleWhereInput
    orderBy?: TitleOrderByWithAggregationInput | TitleOrderByWithAggregationInput[]
    by: TitleScalarFieldEnum[] | TitleScalarFieldEnum
    having?: TitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TitleCountAggregateInputType | true
    _avg?: TitleAvgAggregateInputType
    _sum?: TitleSumAggregateInputType
    _min?: TitleMinAggregateInputType
    _max?: TitleMaxAggregateInputType
  }

  export type TitleGroupByOutputType = {
    id: number
    name: string
    minimumScore: number
    _count: TitleCountAggregateOutputType | null
    _avg: TitleAvgAggregateOutputType | null
    _sum: TitleSumAggregateOutputType | null
    _min: TitleMinAggregateOutputType | null
    _max: TitleMaxAggregateOutputType | null
  }

  type GetTitleGroupByPayload<T extends TitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TitleGroupByOutputType[P]>
            : GetScalarType<T[P], TitleGroupByOutputType[P]>
        }
      >
    >


  export type TitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minimumScore?: boolean
    Game?: boolean | Title$GameArgs<ExtArgs>
    _count?: boolean | TitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["title"]>

  export type TitleSelectScalar = {
    id?: boolean
    name?: boolean
    minimumScore?: boolean
  }

  export type TitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | Title$GameArgs<ExtArgs>
    _count?: boolean | TitleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Title"
    objects: {
      Game: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      minimumScore: number
    }, ExtArgs["result"]["title"]>
    composites: {}
  }


  type TitleGetPayload<S extends boolean | null | undefined | TitleDefaultArgs> = $Result.GetResult<Prisma.$TitlePayload, S>

  type TitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TitleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TitleCountAggregateInputType | true
    }

  export interface TitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Title'], meta: { name: 'Title' } }
    /**
     * Find zero or one Title that matches the filter.
     * @param {TitleFindUniqueArgs} args - Arguments to find a Title
     * @example
     * // Get one Title
     * const title = await prisma.title.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TitleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TitleFindUniqueArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Title that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TitleFindUniqueOrThrowArgs} args - Arguments to find a Title
     * @example
     * // Get one Title
     * const title = await prisma.title.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TitleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Title that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleFindFirstArgs} args - Arguments to find a Title
     * @example
     * // Get one Title
     * const title = await prisma.title.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TitleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleFindFirstArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Title that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleFindFirstOrThrowArgs} args - Arguments to find a Title
     * @example
     * // Get one Title
     * const title = await prisma.title.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TitleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Titles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Titles
     * const titles = await prisma.title.findMany()
     * 
     * // Get first 10 Titles
     * const titles = await prisma.title.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const titleWithIdOnly = await prisma.title.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TitleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Title.
     * @param {TitleCreateArgs} args - Arguments to create a Title.
     * @example
     * // Create one Title
     * const Title = await prisma.title.create({
     *   data: {
     *     // ... data to create a Title
     *   }
     * })
     * 
    **/
    create<T extends TitleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleCreateArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Titles.
     *     @param {TitleCreateManyArgs} args - Arguments to create many Titles.
     *     @example
     *     // Create many Titles
     *     const title = await prisma.title.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TitleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Title.
     * @param {TitleDeleteArgs} args - Arguments to delete one Title.
     * @example
     * // Delete one Title
     * const Title = await prisma.title.delete({
     *   where: {
     *     // ... filter to delete one Title
     *   }
     * })
     * 
    **/
    delete<T extends TitleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TitleDeleteArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Title.
     * @param {TitleUpdateArgs} args - Arguments to update one Title.
     * @example
     * // Update one Title
     * const title = await prisma.title.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TitleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleUpdateArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Titles.
     * @param {TitleDeleteManyArgs} args - Arguments to filter Titles to delete.
     * @example
     * // Delete a few Titles
     * const { count } = await prisma.title.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TitleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Titles
     * const title = await prisma.title.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TitleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TitleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Title.
     * @param {TitleUpsertArgs} args - Arguments to update or create a Title.
     * @example
     * // Update or create a Title
     * const title = await prisma.title.upsert({
     *   create: {
     *     // ... data to create a Title
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Title we want to update
     *   }
     * })
    **/
    upsert<T extends TitleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TitleUpsertArgs<ExtArgs>>
    ): Prisma__TitleClient<$Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleCountArgs} args - Arguments to filter Titles to count.
     * @example
     * // Count the number of Titles
     * const count = await prisma.title.count({
     *   where: {
     *     // ... the filter for the Titles we want to count
     *   }
     * })
    **/
    count<T extends TitleCountArgs>(
      args?: Subset<T, TitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Title.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TitleAggregateArgs>(args: Subset<T, TitleAggregateArgs>): Prisma.PrismaPromise<GetTitleAggregateType<T>>

    /**
     * Group by Title.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TitleGroupByArgs['orderBy'] }
        : { orderBy?: TitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Title model
   */
  readonly fields: TitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Title.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Game<T extends Title$GameArgs<ExtArgs> = {}>(args?: Subset<T, Title$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Title model
   */ 
  interface TitleFieldRefs {
    readonly id: FieldRef<"Title", 'Int'>
    readonly name: FieldRef<"Title", 'String'>
    readonly minimumScore: FieldRef<"Title", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Title findUnique
   */
  export type TitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter, which Title to fetch.
     */
    where: TitleWhereUniqueInput
  }


  /**
   * Title findUniqueOrThrow
   */
  export type TitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter, which Title to fetch.
     */
    where: TitleWhereUniqueInput
  }


  /**
   * Title findFirst
   */
  export type TitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter, which Title to fetch.
     */
    where?: TitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titles to fetch.
     */
    orderBy?: TitleOrderByWithRelationInput | TitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titles.
     */
    cursor?: TitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titles.
     */
    distinct?: TitleScalarFieldEnum | TitleScalarFieldEnum[]
  }


  /**
   * Title findFirstOrThrow
   */
  export type TitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter, which Title to fetch.
     */
    where?: TitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titles to fetch.
     */
    orderBy?: TitleOrderByWithRelationInput | TitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titles.
     */
    cursor?: TitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titles.
     */
    distinct?: TitleScalarFieldEnum | TitleScalarFieldEnum[]
  }


  /**
   * Title findMany
   */
  export type TitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter, which Titles to fetch.
     */
    where?: TitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titles to fetch.
     */
    orderBy?: TitleOrderByWithRelationInput | TitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Titles.
     */
    cursor?: TitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titles.
     */
    skip?: number
    distinct?: TitleScalarFieldEnum | TitleScalarFieldEnum[]
  }


  /**
   * Title create
   */
  export type TitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * The data needed to create a Title.
     */
    data: XOR<TitleCreateInput, TitleUncheckedCreateInput>
  }


  /**
   * Title createMany
   */
  export type TitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Titles.
     */
    data: TitleCreateManyInput | TitleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Title update
   */
  export type TitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * The data needed to update a Title.
     */
    data: XOR<TitleUpdateInput, TitleUncheckedUpdateInput>
    /**
     * Choose, which Title to update.
     */
    where: TitleWhereUniqueInput
  }


  /**
   * Title updateMany
   */
  export type TitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Titles.
     */
    data: XOR<TitleUpdateManyMutationInput, TitleUncheckedUpdateManyInput>
    /**
     * Filter which Titles to update
     */
    where?: TitleWhereInput
  }


  /**
   * Title upsert
   */
  export type TitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * The filter to search for the Title to update in case it exists.
     */
    where: TitleWhereUniqueInput
    /**
     * In case the Title found by the `where` argument doesn't exist, create a new Title with this data.
     */
    create: XOR<TitleCreateInput, TitleUncheckedCreateInput>
    /**
     * In case the Title was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TitleUpdateInput, TitleUncheckedUpdateInput>
  }


  /**
   * Title delete
   */
  export type TitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
    /**
     * Filter which Title to delete.
     */
    where: TitleWhereUniqueInput
  }


  /**
   * Title deleteMany
   */
  export type TitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Titles to delete
     */
    where?: TitleWhereInput
  }


  /**
   * Title.Game
   */
  export type Title$GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Title without action
   */
  export type TitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: TitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleInclude<ExtArgs> | null
  }



  /**
   * Model Day
   */

  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    score: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    gameId: number | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    score: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    gameId: number | null
    userId: string | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    score: number | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    gameId: number | null
    userId: string | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    score: number | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    dateCreated: number
    gameId: number
    userId: number
    gameNumber: number
    number: number
    challengeModifierId: number
    modifierOptionId: number
    dateFirstRolled: number
    part1Completed: number
    modifierWhenPart1CompletedId: number
    optionWhenPart1CompletedId: number
    part2Completed: number
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    rerollTokensSpentDuringPart2: number
    score: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    gameId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    score?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    gameId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    score?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    score?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    score?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    score?: true
    _all?: true
  }

  export type DayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
    orderBy?: DayOrderByWithAggregationInput | DayOrderByWithAggregationInput[]
    by: DayScalarFieldEnum[] | DayScalarFieldEnum
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _avg?: DayAvgAggregateInputType
    _sum?: DaySumAggregateInputType
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }

  export type DayGroupByOutputType = {
    id: number
    dateCreated: Date
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    rerollTokensSpentDuringPart2: number
    score: number
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    gameId?: boolean
    userId?: boolean
    gameNumber?: boolean
    number?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    dateFirstRolled?: boolean
    part1Completed?: boolean
    modifierWhenPart1CompletedId?: boolean
    optionWhenPart1CompletedId?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    rerollTokensSpentDuringPart2?: boolean
    score?: boolean
    ChallengeModifier?: boolean | Day$ChallengeModifierArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
    ModifierOption?: boolean | Day$ModifierOptionArgs<ExtArgs>
    ModifierWhenPart1Completed?: boolean | Day$ModifierWhenPart1CompletedArgs<ExtArgs>
    OptionWhenPart1Completed?: boolean | Day$OptionWhenPart1CompletedArgs<ExtArgs>
    ExcludedChallengeModifiers?: boolean | Day$ExcludedChallengeModifiersArgs<ExtArgs>
    EncludedCustomChallengeModifiers?: boolean | Day$EncludedCustomChallengeModifiersArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    dateCreated?: boolean
    gameId?: boolean
    userId?: boolean
    gameNumber?: boolean
    number?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    dateFirstRolled?: boolean
    part1Completed?: boolean
    modifierWhenPart1CompletedId?: boolean
    optionWhenPart1CompletedId?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    rerollTokensSpentDuringPart2?: boolean
    score?: boolean
  }

  export type DayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | Day$ChallengeModifierArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
    ModifierOption?: boolean | Day$ModifierOptionArgs<ExtArgs>
    ModifierWhenPart1Completed?: boolean | Day$ModifierWhenPart1CompletedArgs<ExtArgs>
    OptionWhenPart1Completed?: boolean | Day$OptionWhenPart1CompletedArgs<ExtArgs>
    ExcludedChallengeModifiers?: boolean | Day$ExcludedChallengeModifiersArgs<ExtArgs>
    EncludedCustomChallengeModifiers?: boolean | Day$EncludedCustomChallengeModifiersArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Day"
    objects: {
      ChallengeModifier: Prisma.$ChallengeModifierPayload<ExtArgs> | null
      Game: Prisma.$GamePayload<ExtArgs>
      ModifierOption: Prisma.$ModifierOptionPayload<ExtArgs> | null
      ModifierWhenPart1Completed: Prisma.$ChallengeModifierPayload<ExtArgs> | null
      OptionWhenPart1Completed: Prisma.$ModifierOptionPayload<ExtArgs> | null
      ExcludedChallengeModifiers: Prisma.$ChallengeModifierPayload<ExtArgs>[]
      EncludedCustomChallengeModifiers: Prisma.$ChallengeModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      gameId: number
      userId: string
      gameNumber: number
      number: number
      challengeModifierId: number | null
      modifierOptionId: number | null
      dateFirstRolled: Date | null
      part1Completed: Date | null
      modifierWhenPart1CompletedId: number | null
      optionWhenPart1CompletedId: number | null
      part2Completed: Date | null
      challengeModifierRerollsUsed: number
      modifierOptionRerollsUsed: number
      rerollTokensSpentDuringPart2: number
      score: number
    }, ExtArgs["result"]["day"]>
    composites: {}
  }


  type DayGetPayload<S extends boolean | null | undefined | DayDefaultArgs> = $Result.GetResult<Prisma.$DayPayload, S>

  type DayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DayFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Day'], meta: { name: 'Day' } }
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DayFindUniqueArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Day that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Day that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DayCreateArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Days.
     *     @param {DayCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const day = await prisma.day.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DayDeleteArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpsertArgs<ExtArgs>>
    ): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Day model
   */
  readonly fields: DayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ChallengeModifier<T extends Day$ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, Day$ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ModifierOption<T extends Day$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, Day$ModifierOptionArgs<ExtArgs>>): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ModifierWhenPart1Completed<T extends Day$ModifierWhenPart1CompletedArgs<ExtArgs> = {}>(args?: Subset<T, Day$ModifierWhenPart1CompletedArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    OptionWhenPart1Completed<T extends Day$OptionWhenPart1CompletedArgs<ExtArgs> = {}>(args?: Subset<T, Day$OptionWhenPart1CompletedArgs<ExtArgs>>): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ExcludedChallengeModifiers<T extends Day$ExcludedChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, Day$ExcludedChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'> | Null>;

    EncludedCustomChallengeModifiers<T extends Day$EncludedCustomChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, Day$EncludedCustomChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Day model
   */ 
  interface DayFieldRefs {
    readonly id: FieldRef<"Day", 'Int'>
    readonly dateCreated: FieldRef<"Day", 'DateTime'>
    readonly gameId: FieldRef<"Day", 'Int'>
    readonly userId: FieldRef<"Day", 'String'>
    readonly gameNumber: FieldRef<"Day", 'Int'>
    readonly number: FieldRef<"Day", 'Int'>
    readonly challengeModifierId: FieldRef<"Day", 'Int'>
    readonly modifierOptionId: FieldRef<"Day", 'Int'>
    readonly dateFirstRolled: FieldRef<"Day", 'DateTime'>
    readonly part1Completed: FieldRef<"Day", 'DateTime'>
    readonly modifierWhenPart1CompletedId: FieldRef<"Day", 'Int'>
    readonly optionWhenPart1CompletedId: FieldRef<"Day", 'Int'>
    readonly part2Completed: FieldRef<"Day", 'DateTime'>
    readonly challengeModifierRerollsUsed: FieldRef<"Day", 'Int'>
    readonly modifierOptionRerollsUsed: FieldRef<"Day", 'Int'>
    readonly rerollTokensSpentDuringPart2: FieldRef<"Day", 'Int'>
    readonly score: FieldRef<"Day", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Day findUnique
   */
  export type DayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findFirst
   */
  export type DayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day create
   */
  export type DayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day createMany
   */
  export type DayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: DayCreateManyInput | DayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Day update
   */
  export type DayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
  }


  /**
   * Day.ChallengeModifier
   */
  export type Day$ChallengeModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
  }


  /**
   * Day.ModifierOption
   */
  export type Day$ModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
  }


  /**
   * Day.ModifierWhenPart1Completed
   */
  export type Day$ModifierWhenPart1CompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
  }


  /**
   * Day.OptionWhenPart1Completed
   */
  export type Day$OptionWhenPart1CompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
  }


  /**
   * Day.ExcludedChallengeModifiers
   */
  export type Day$ExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * Day.EncludedCustomChallengeModifiers
   */
  export type Day$EncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * Day without action
   */
  export type DayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
  }



  /**
   * Model ChallengeModifier
   */

  export type AggregateChallengeModifier = {
    _count: ChallengeModifierCountAggregateOutputType | null
    _avg: ChallengeModifierAvgAggregateOutputType | null
    _sum: ChallengeModifierSumAggregateOutputType | null
    _min: ChallengeModifierMinAggregateOutputType | null
    _max: ChallengeModifierMaxAggregateOutputType | null
  }

  export type ChallengeModifierAvgAggregateOutputType = {
    id: number | null
  }

  export type ChallengeModifierSumAggregateOutputType = {
    id: number | null
  }

  export type ChallengeModifierMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    text: string | null
    hasOptions: boolean | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ChallengeModifierMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    text: string | null
    hasOptions: boolean | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ChallengeModifierCountAggregateOutputType = {
    id: number
    dateCreated: number
    name: number
    text: number
    hasOptions: number
    explanatoryUrl: number
    standard: number
    createdById: number
    isPublic: number
    _all: number
  }


  export type ChallengeModifierAvgAggregateInputType = {
    id?: true
  }

  export type ChallengeModifierSumAggregateInputType = {
    id?: true
  }

  export type ChallengeModifierMinAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
  }

  export type ChallengeModifierMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
  }

  export type ChallengeModifierCountAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
    _all?: true
  }

  export type ChallengeModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeModifier to aggregate.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeModifiers
    **/
    _count?: true | ChallengeModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeModifierMaxAggregateInputType
  }

  export type GetChallengeModifierAggregateType<T extends ChallengeModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeModifier[P]>
      : GetScalarType<T[P], AggregateChallengeModifier[P]>
  }




  export type ChallengeModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
    orderBy?: ChallengeModifierOrderByWithAggregationInput | ChallengeModifierOrderByWithAggregationInput[]
    by: ChallengeModifierScalarFieldEnum[] | ChallengeModifierScalarFieldEnum
    having?: ChallengeModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeModifierCountAggregateInputType | true
    _avg?: ChallengeModifierAvgAggregateInputType
    _sum?: ChallengeModifierSumAggregateInputType
    _min?: ChallengeModifierMinAggregateInputType
    _max?: ChallengeModifierMaxAggregateInputType
  }

  export type ChallengeModifierGroupByOutputType = {
    id: number
    dateCreated: Date
    name: string
    text: string
    hasOptions: boolean
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    isPublic: boolean
    _count: ChallengeModifierCountAggregateOutputType | null
    _avg: ChallengeModifierAvgAggregateOutputType | null
    _sum: ChallengeModifierSumAggregateOutputType | null
    _min: ChallengeModifierMinAggregateOutputType | null
    _max: ChallengeModifierMaxAggregateOutputType | null
  }

  type GetChallengeModifierGroupByPayload<T extends ChallengeModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeModifierGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    text?: boolean
    hasOptions?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    isPublic?: boolean
    CreatedBy?: boolean | ChallengeModifier$CreatedByArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ChallengeModifier$DayCompletedInPart1Args<ExtArgs>
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    UserExcluded?: boolean | ChallengeModifier$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ChallengeModifier$UserIncludedArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>
    _count?: boolean | ChallengeModifierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeModifier"]>

  export type ChallengeModifierSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    text?: boolean
    hasOptions?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    isPublic?: boolean
  }

  export type ChallengeModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | ChallengeModifier$CreatedByArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ChallengeModifier$DayCompletedInPart1Args<ExtArgs>
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    UserExcluded?: boolean | ChallengeModifier$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ChallengeModifier$UserIncludedArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>
    _count?: boolean | ChallengeModifierCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChallengeModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeModifier"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs> | null
      Day: Prisma.$DayPayload<ExtArgs>[]
      DayCompletedInPart1: Prisma.$DayPayload<ExtArgs>[]
      ModifierOption: Prisma.$ModifierOptionPayload<ExtArgs>[]
      UserExcluded: Prisma.$UserPayload<ExtArgs>[]
      UserIncluded: Prisma.$UserPayload<ExtArgs>[]
      ModifierPackExcluded: Prisma.$DayPayload<ExtArgs>[]
      ModifierPackIncluded: Prisma.$DayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      name: string
      text: string
      hasOptions: boolean
      explanatoryUrl: string | null
      standard: boolean
      createdById: string | null
      isPublic: boolean
    }, ExtArgs["result"]["challengeModifier"]>
    composites: {}
  }


  type ChallengeModifierGetPayload<S extends boolean | null | undefined | ChallengeModifierDefaultArgs> = $Result.GetResult<Prisma.$ChallengeModifierPayload, S>

  type ChallengeModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChallengeModifierFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChallengeModifierCountAggregateInputType | true
    }

  export interface ChallengeModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeModifier'], meta: { name: 'ChallengeModifier' } }
    /**
     * Find zero or one ChallengeModifier that matches the filter.
     * @param {ChallengeModifierFindUniqueArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChallengeModifierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierFindUniqueArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChallengeModifier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChallengeModifierFindUniqueOrThrowArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChallengeModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindFirstArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeModifierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindFirstArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChallengeModifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindFirstOrThrowArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChallengeModifierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChallengeModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeModifiers
     * const challengeModifiers = await prisma.challengeModifier.findMany()
     * 
     * // Get first 10 ChallengeModifiers
     * const challengeModifiers = await prisma.challengeModifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeModifierWithIdOnly = await prisma.challengeModifier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChallengeModifierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChallengeModifier.
     * @param {ChallengeModifierCreateArgs} args - Arguments to create a ChallengeModifier.
     * @example
     * // Create one ChallengeModifier
     * const ChallengeModifier = await prisma.challengeModifier.create({
     *   data: {
     *     // ... data to create a ChallengeModifier
     *   }
     * })
     * 
    **/
    create<T extends ChallengeModifierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierCreateArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChallengeModifiers.
     *     @param {ChallengeModifierCreateManyArgs} args - Arguments to create many ChallengeModifiers.
     *     @example
     *     // Create many ChallengeModifiers
     *     const challengeModifier = await prisma.challengeModifier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChallengeModifierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChallengeModifier.
     * @param {ChallengeModifierDeleteArgs} args - Arguments to delete one ChallengeModifier.
     * @example
     * // Delete one ChallengeModifier
     * const ChallengeModifier = await prisma.challengeModifier.delete({
     *   where: {
     *     // ... filter to delete one ChallengeModifier
     *   }
     * })
     * 
    **/
    delete<T extends ChallengeModifierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierDeleteArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChallengeModifier.
     * @param {ChallengeModifierUpdateArgs} args - Arguments to update one ChallengeModifier.
     * @example
     * // Update one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChallengeModifierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpdateArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChallengeModifiers.
     * @param {ChallengeModifierDeleteManyArgs} args - Arguments to filter ChallengeModifiers to delete.
     * @example
     * // Delete a few ChallengeModifiers
     * const { count } = await prisma.challengeModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChallengeModifierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeModifiers
     * const challengeModifier = await prisma.challengeModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChallengeModifierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChallengeModifier.
     * @param {ChallengeModifierUpsertArgs} args - Arguments to update or create a ChallengeModifier.
     * @example
     * // Update or create a ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.upsert({
     *   create: {
     *     // ... data to create a ChallengeModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeModifier we want to update
     *   }
     * })
    **/
    upsert<T extends ChallengeModifierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpsertArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChallengeModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierCountArgs} args - Arguments to filter ChallengeModifiers to count.
     * @example
     * // Count the number of ChallengeModifiers
     * const count = await prisma.challengeModifier.count({
     *   where: {
     *     // ... the filter for the ChallengeModifiers we want to count
     *   }
     * })
    **/
    count<T extends ChallengeModifierCountArgs>(
      args?: Subset<T, ChallengeModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeModifierAggregateArgs>(args: Subset<T, ChallengeModifierAggregateArgs>): Prisma.PrismaPromise<GetChallengeModifierAggregateType<T>>

    /**
     * Group by ChallengeModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeModifierGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeModifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeModifier model
   */
  readonly fields: ChallengeModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CreatedBy<T extends ChallengeModifier$CreatedByArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$CreatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Day<T extends ChallengeModifier$DayArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    DayCompletedInPart1<T extends ChallengeModifier$DayCompletedInPart1Args<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$DayCompletedInPart1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    ModifierOption<T extends ChallengeModifier$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserExcluded<T extends ChallengeModifier$UserExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$UserExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserIncluded<T extends ChallengeModifier$UserIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$UserIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    ModifierPackExcluded<T extends ChallengeModifier$ModifierPackExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    ModifierPackIncluded<T extends ChallengeModifier$ModifierPackIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChallengeModifier model
   */ 
  interface ChallengeModifierFieldRefs {
    readonly id: FieldRef<"ChallengeModifier", 'Int'>
    readonly dateCreated: FieldRef<"ChallengeModifier", 'DateTime'>
    readonly name: FieldRef<"ChallengeModifier", 'String'>
    readonly text: FieldRef<"ChallengeModifier", 'String'>
    readonly hasOptions: FieldRef<"ChallengeModifier", 'Boolean'>
    readonly explanatoryUrl: FieldRef<"ChallengeModifier", 'String'>
    readonly standard: FieldRef<"ChallengeModifier", 'Boolean'>
    readonly createdById: FieldRef<"ChallengeModifier", 'String'>
    readonly isPublic: FieldRef<"ChallengeModifier", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ChallengeModifier findUnique
   */
  export type ChallengeModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier findUniqueOrThrow
   */
  export type ChallengeModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier findFirst
   */
  export type ChallengeModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeModifiers.
     */
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * ChallengeModifier findFirstOrThrow
   */
  export type ChallengeModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeModifiers.
     */
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * ChallengeModifier findMany
   */
  export type ChallengeModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifiers to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: ChallengeModifierOrderByWithRelationInput | ChallengeModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    distinct?: ChallengeModifierScalarFieldEnum | ChallengeModifierScalarFieldEnum[]
  }


  /**
   * ChallengeModifier create
   */
  export type ChallengeModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeModifier.
     */
    data: XOR<ChallengeModifierCreateInput, ChallengeModifierUncheckedCreateInput>
  }


  /**
   * ChallengeModifier createMany
   */
  export type ChallengeModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeModifiers.
     */
    data: ChallengeModifierCreateManyInput | ChallengeModifierCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChallengeModifier update
   */
  export type ChallengeModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeModifier.
     */
    data: XOR<ChallengeModifierUpdateInput, ChallengeModifierUncheckedUpdateInput>
    /**
     * Choose, which ChallengeModifier to update.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier updateMany
   */
  export type ChallengeModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeModifiers.
     */
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeModifiers to update
     */
    where?: ChallengeModifierWhereInput
  }


  /**
   * ChallengeModifier upsert
   */
  export type ChallengeModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeModifier to update in case it exists.
     */
    where: ChallengeModifierWhereUniqueInput
    /**
     * In case the ChallengeModifier found by the `where` argument doesn't exist, create a new ChallengeModifier with this data.
     */
    create: XOR<ChallengeModifierCreateInput, ChallengeModifierUncheckedCreateInput>
    /**
     * In case the ChallengeModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeModifierUpdateInput, ChallengeModifierUncheckedUpdateInput>
  }


  /**
   * ChallengeModifier delete
   */
  export type ChallengeModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter which ChallengeModifier to delete.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier deleteMany
   */
  export type ChallengeModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeModifiers to delete
     */
    where?: ChallengeModifierWhereInput
  }


  /**
   * ChallengeModifier.CreatedBy
   */
  export type ChallengeModifier$CreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ChallengeModifier.Day
   */
  export type ChallengeModifier$DayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.DayCompletedInPart1
   */
  export type ChallengeModifier$DayCompletedInPart1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.ModifierOption
   */
  export type ChallengeModifier$ModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.UserExcluded
   */
  export type ChallengeModifier$UserExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.UserIncluded
   */
  export type ChallengeModifier$UserIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.ModifierPackExcluded
   */
  export type ChallengeModifier$ModifierPackExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ChallengeModifier.ModifierPackIncluded
   */
  export type ChallengeModifier$ModifierPackIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ChallengeModifier without action
   */
  export type ChallengeModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
  }



  /**
   * Model ModifierOption
   */

  export type AggregateModifierOption = {
    _count: ModifierOptionCountAggregateOutputType | null
    _avg: ModifierOptionAvgAggregateOutputType | null
    _sum: ModifierOptionSumAggregateOutputType | null
    _min: ModifierOptionMinAggregateOutputType | null
    _max: ModifierOptionMaxAggregateOutputType | null
  }

  export type ModifierOptionAvgAggregateOutputType = {
    id: number | null
    challengeModifierId: number | null
  }

  export type ModifierOptionSumAggregateOutputType = {
    id: number | null
    challengeModifierId: number | null
  }

  export type ModifierOptionMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    challengeModifierId: number | null
    name: string | null
    text: string | null
    shortText: string | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ModifierOptionMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    challengeModifierId: number | null
    name: string | null
    text: string | null
    shortText: string | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ModifierOptionCountAggregateOutputType = {
    id: number
    dateCreated: number
    challengeModifierId: number
    name: number
    text: number
    shortText: number
    explanatoryUrl: number
    standard: number
    createdById: number
    isPublic: number
    _all: number
  }


  export type ModifierOptionAvgAggregateInputType = {
    id?: true
    challengeModifierId?: true
  }

  export type ModifierOptionSumAggregateInputType = {
    id?: true
    challengeModifierId?: true
  }

  export type ModifierOptionMinAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    shortText?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
  }

  export type ModifierOptionMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    shortText?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
  }

  export type ModifierOptionCountAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    shortText?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    isPublic?: true
    _all?: true
  }

  export type ModifierOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierOption to aggregate.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModifierOptions
    **/
    _count?: true | ModifierOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierOptionMaxAggregateInputType
  }

  export type GetModifierOptionAggregateType<T extends ModifierOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateModifierOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifierOption[P]>
      : GetScalarType<T[P], AggregateModifierOption[P]>
  }




  export type ModifierOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithAggregationInput | ModifierOptionOrderByWithAggregationInput[]
    by: ModifierOptionScalarFieldEnum[] | ModifierOptionScalarFieldEnum
    having?: ModifierOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierOptionCountAggregateInputType | true
    _avg?: ModifierOptionAvgAggregateInputType
    _sum?: ModifierOptionSumAggregateInputType
    _min?: ModifierOptionMinAggregateInputType
    _max?: ModifierOptionMaxAggregateInputType
  }

  export type ModifierOptionGroupByOutputType = {
    id: number
    dateCreated: Date
    challengeModifierId: number
    name: string
    text: string
    shortText: string | null
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    isPublic: boolean
    _count: ModifierOptionCountAggregateOutputType | null
    _avg: ModifierOptionAvgAggregateOutputType | null
    _sum: ModifierOptionSumAggregateOutputType | null
    _min: ModifierOptionMinAggregateOutputType | null
    _max: ModifierOptionMaxAggregateOutputType | null
  }

  type GetModifierOptionGroupByPayload<T extends ModifierOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModifierOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierOptionGroupByOutputType[P]>
        }
      >
    >


  export type ModifierOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    challengeModifierId?: boolean
    name?: boolean
    text?: boolean
    shortText?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    isPublic?: boolean
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ModifierOption$DayCompletedInPart1Args<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierDefaultArgs<ExtArgs>
    CreatedBy?: boolean | ModifierOption$CreatedByArgs<ExtArgs>
    UserExcluded?: boolean | ModifierOption$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ModifierOption$UserIncludedArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | ModifierOption$ExcludedModifierOptionsArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | ModifierOption$IncludedCustomModifierOptionsArgs<ExtArgs>
    _count?: boolean | ModifierOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifierOption"]>

  export type ModifierOptionSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    challengeModifierId?: boolean
    name?: boolean
    text?: boolean
    shortText?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    isPublic?: boolean
  }

  export type ModifierOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ModifierOption$DayCompletedInPart1Args<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierDefaultArgs<ExtArgs>
    CreatedBy?: boolean | ModifierOption$CreatedByArgs<ExtArgs>
    UserExcluded?: boolean | ModifierOption$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ModifierOption$UserIncludedArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | ModifierOption$ExcludedModifierOptionsArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | ModifierOption$IncludedCustomModifierOptionsArgs<ExtArgs>
    _count?: boolean | ModifierOptionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModifierOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModifierOption"
    objects: {
      Day: Prisma.$DayPayload<ExtArgs>[]
      DayCompletedInPart1: Prisma.$DayPayload<ExtArgs>[]
      ChallengeModifier: Prisma.$ChallengeModifierPayload<ExtArgs>
      CreatedBy: Prisma.$UserPayload<ExtArgs> | null
      UserExcluded: Prisma.$UserPayload<ExtArgs>[]
      UserIncluded: Prisma.$UserPayload<ExtArgs>[]
      ExcludedModifierOptions: Prisma.$ModifierPackPayload<ExtArgs>[]
      IncludedCustomModifierOptions: Prisma.$ModifierPackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      challengeModifierId: number
      name: string
      text: string
      shortText: string | null
      explanatoryUrl: string | null
      standard: boolean
      createdById: string | null
      isPublic: boolean
    }, ExtArgs["result"]["modifierOption"]>
    composites: {}
  }


  type ModifierOptionGetPayload<S extends boolean | null | undefined | ModifierOptionDefaultArgs> = $Result.GetResult<Prisma.$ModifierOptionPayload, S>

  type ModifierOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModifierOptionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModifierOptionCountAggregateInputType | true
    }

  export interface ModifierOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModifierOption'], meta: { name: 'ModifierOption' } }
    /**
     * Find zero or one ModifierOption that matches the filter.
     * @param {ModifierOptionFindUniqueArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModifierOptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionFindUniqueArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ModifierOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModifierOptionFindUniqueOrThrowArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModifierOptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ModifierOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindFirstArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModifierOptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindFirstArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ModifierOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindFirstOrThrowArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModifierOptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ModifierOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModifierOptions
     * const modifierOptions = await prisma.modifierOption.findMany()
     * 
     * // Get first 10 ModifierOptions
     * const modifierOptions = await prisma.modifierOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierOptionWithIdOnly = await prisma.modifierOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModifierOptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ModifierOption.
     * @param {ModifierOptionCreateArgs} args - Arguments to create a ModifierOption.
     * @example
     * // Create one ModifierOption
     * const ModifierOption = await prisma.modifierOption.create({
     *   data: {
     *     // ... data to create a ModifierOption
     *   }
     * })
     * 
    **/
    create<T extends ModifierOptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionCreateArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ModifierOptions.
     *     @param {ModifierOptionCreateManyArgs} args - Arguments to create many ModifierOptions.
     *     @example
     *     // Create many ModifierOptions
     *     const modifierOption = await prisma.modifierOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModifierOptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModifierOption.
     * @param {ModifierOptionDeleteArgs} args - Arguments to delete one ModifierOption.
     * @example
     * // Delete one ModifierOption
     * const ModifierOption = await prisma.modifierOption.delete({
     *   where: {
     *     // ... filter to delete one ModifierOption
     *   }
     * })
     * 
    **/
    delete<T extends ModifierOptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionDeleteArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ModifierOption.
     * @param {ModifierOptionUpdateArgs} args - Arguments to update one ModifierOption.
     * @example
     * // Update one ModifierOption
     * const modifierOption = await prisma.modifierOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModifierOptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpdateArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ModifierOptions.
     * @param {ModifierOptionDeleteManyArgs} args - Arguments to filter ModifierOptions to delete.
     * @example
     * // Delete a few ModifierOptions
     * const { count } = await prisma.modifierOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModifierOptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModifierOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModifierOptions
     * const modifierOption = await prisma.modifierOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModifierOptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModifierOption.
     * @param {ModifierOptionUpsertArgs} args - Arguments to update or create a ModifierOption.
     * @example
     * // Update or create a ModifierOption
     * const modifierOption = await prisma.modifierOption.upsert({
     *   create: {
     *     // ... data to create a ModifierOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModifierOption we want to update
     *   }
     * })
    **/
    upsert<T extends ModifierOptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpsertArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ModifierOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionCountArgs} args - Arguments to filter ModifierOptions to count.
     * @example
     * // Count the number of ModifierOptions
     * const count = await prisma.modifierOption.count({
     *   where: {
     *     // ... the filter for the ModifierOptions we want to count
     *   }
     * })
    **/
    count<T extends ModifierOptionCountArgs>(
      args?: Subset<T, ModifierOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModifierOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierOptionAggregateArgs>(args: Subset<T, ModifierOptionAggregateArgs>): Prisma.PrismaPromise<GetModifierOptionAggregateType<T>>

    /**
     * Group by ModifierOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierOptionGroupByArgs['orderBy'] }
        : { orderBy?: ModifierOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModifierOption model
   */
  readonly fields: ModifierOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModifierOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModifierOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Day<T extends ModifierOption$DayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    DayCompletedInPart1<T extends ModifierOption$DayCompletedInPart1Args<ExtArgs> = {}>(args?: Subset<T, ModifierOption$DayCompletedInPart1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, 'findMany'> | Null>;

    ChallengeModifier<T extends ChallengeModifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierDefaultArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Result.GetResult<Prisma.$ChallengeModifierPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    CreatedBy<T extends ModifierOption$CreatedByArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$CreatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserExcluded<T extends ModifierOption$UserExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$UserExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserIncluded<T extends ModifierOption$UserIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$UserIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    ExcludedModifierOptions<T extends ModifierOption$ExcludedModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$ExcludedModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findMany'> | Null>;

    IncludedCustomModifierOptions<T extends ModifierOption$IncludedCustomModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$IncludedCustomModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ModifierOption model
   */ 
  interface ModifierOptionFieldRefs {
    readonly id: FieldRef<"ModifierOption", 'Int'>
    readonly dateCreated: FieldRef<"ModifierOption", 'DateTime'>
    readonly challengeModifierId: FieldRef<"ModifierOption", 'Int'>
    readonly name: FieldRef<"ModifierOption", 'String'>
    readonly text: FieldRef<"ModifierOption", 'String'>
    readonly shortText: FieldRef<"ModifierOption", 'String'>
    readonly explanatoryUrl: FieldRef<"ModifierOption", 'String'>
    readonly standard: FieldRef<"ModifierOption", 'Boolean'>
    readonly createdById: FieldRef<"ModifierOption", 'String'>
    readonly isPublic: FieldRef<"ModifierOption", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ModifierOption findUnique
   */
  export type ModifierOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption findUniqueOrThrow
   */
  export type ModifierOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption findFirst
   */
  export type ModifierOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierOptions.
     */
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ModifierOption findFirstOrThrow
   */
  export type ModifierOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierOptions.
     */
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ModifierOption findMany
   */
  export type ModifierOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOptions to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ModifierOption create
   */
  export type ModifierOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModifierOption.
     */
    data: XOR<ModifierOptionCreateInput, ModifierOptionUncheckedCreateInput>
  }


  /**
   * ModifierOption createMany
   */
  export type ModifierOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModifierOptions.
     */
    data: ModifierOptionCreateManyInput | ModifierOptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ModifierOption update
   */
  export type ModifierOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModifierOption.
     */
    data: XOR<ModifierOptionUpdateInput, ModifierOptionUncheckedUpdateInput>
    /**
     * Choose, which ModifierOption to update.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption updateMany
   */
  export type ModifierOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModifierOptions.
     */
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyInput>
    /**
     * Filter which ModifierOptions to update
     */
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierOption upsert
   */
  export type ModifierOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModifierOption to update in case it exists.
     */
    where: ModifierOptionWhereUniqueInput
    /**
     * In case the ModifierOption found by the `where` argument doesn't exist, create a new ModifierOption with this data.
     */
    create: XOR<ModifierOptionCreateInput, ModifierOptionUncheckedCreateInput>
    /**
     * In case the ModifierOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierOptionUpdateInput, ModifierOptionUncheckedUpdateInput>
  }


  /**
   * ModifierOption delete
   */
  export type ModifierOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter which ModifierOption to delete.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption deleteMany
   */
  export type ModifierOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierOptions to delete
     */
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierOption.Day
   */
  export type ModifierOption$DayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ModifierOption.DayCompletedInPart1
   */
  export type ModifierOption$DayCompletedInPart1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * ModifierOption.CreatedBy
   */
  export type ModifierOption$CreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ModifierOption.UserExcluded
   */
  export type ModifierOption$UserExcludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ModifierOption.UserIncluded
   */
  export type ModifierOption$UserIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ModifierOption.ExcludedModifierOptions
   */
  export type ModifierOption$ExcludedModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * ModifierOption.IncludedCustomModifierOptions
   */
  export type ModifierOption$IncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * ModifierOption without action
   */
  export type ModifierOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
  }



  /**
   * Model ModifierPack
   */

  export type AggregateModifierPack = {
    _count: ModifierPackCountAggregateOutputType | null
    _avg: ModifierPackAvgAggregateOutputType | null
    _sum: ModifierPackSumAggregateOutputType | null
    _min: ModifierPackMinAggregateOutputType | null
    _max: ModifierPackMaxAggregateOutputType | null
  }

  export type ModifierPackAvgAggregateOutputType = {
    id: number | null
  }

  export type ModifierPackSumAggregateOutputType = {
    id: number | null
  }

  export type ModifierPackMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ModifierPackMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    createdById: string | null
    isPublic: boolean | null
  }

  export type ModifierPackCountAggregateOutputType = {
    id: number
    dateCreated: number
    createdById: number
    isPublic: number
    _all: number
  }


  export type ModifierPackAvgAggregateInputType = {
    id?: true
  }

  export type ModifierPackSumAggregateInputType = {
    id?: true
  }

  export type ModifierPackMinAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    isPublic?: true
  }

  export type ModifierPackMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    isPublic?: true
  }

  export type ModifierPackCountAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    isPublic?: true
    _all?: true
  }

  export type ModifierPackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierPack to aggregate.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModifierPacks
    **/
    _count?: true | ModifierPackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierPackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierPackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierPackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierPackMaxAggregateInputType
  }

  export type GetModifierPackAggregateType<T extends ModifierPackAggregateArgs> = {
        [P in keyof T & keyof AggregateModifierPack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifierPack[P]>
      : GetScalarType<T[P], AggregateModifierPack[P]>
  }




  export type ModifierPackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
    orderBy?: ModifierPackOrderByWithAggregationInput | ModifierPackOrderByWithAggregationInput[]
    by: ModifierPackScalarFieldEnum[] | ModifierPackScalarFieldEnum
    having?: ModifierPackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierPackCountAggregateInputType | true
    _avg?: ModifierPackAvgAggregateInputType
    _sum?: ModifierPackSumAggregateInputType
    _min?: ModifierPackMinAggregateInputType
    _max?: ModifierPackMaxAggregateInputType
  }

  export type ModifierPackGroupByOutputType = {
    id: number
    dateCreated: Date
    createdById: string | null
    isPublic: boolean
    _count: ModifierPackCountAggregateOutputType | null
    _avg: ModifierPackAvgAggregateOutputType | null
    _sum: ModifierPackSumAggregateOutputType | null
    _min: ModifierPackMinAggregateOutputType | null
    _max: ModifierPackMaxAggregateOutputType | null
  }

  type GetModifierPackGroupByPayload<T extends ModifierPackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModifierPackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierPackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierPackGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierPackGroupByOutputType[P]>
        }
      >
    >


  export type ModifierPackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    createdById?: boolean
    isPublic?: boolean
    CreatedBy?: boolean | ModifierPack$CreatedByArgs<ExtArgs>
    ExcludedFromDay?: boolean | ModifierPack$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ModifierPack$IncludedInDayArgs<ExtArgs>
    _count?: boolean | ModifierPackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifierPack"]>

  export type ModifierPackSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    createdById?: boolean
    isPublic?: boolean
  }

  export type ModifierPackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | ModifierPack$CreatedByArgs<ExtArgs>
    ExcludedFromDay?: boolean | ModifierPack$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ModifierPack$IncludedInDayArgs<ExtArgs>
    _count?: boolean | ModifierPackCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModifierPackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModifierPack"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs> | null
      ExcludedFromDay: Prisma.$ModifierOptionPayload<ExtArgs>[]
      IncludedInDay: Prisma.$ModifierOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateCreated: Date
      createdById: string | null
      isPublic: boolean
    }, ExtArgs["result"]["modifierPack"]>
    composites: {}
  }


  type ModifierPackGetPayload<S extends boolean | null | undefined | ModifierPackDefaultArgs> = $Result.GetResult<Prisma.$ModifierPackPayload, S>

  type ModifierPackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModifierPackFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModifierPackCountAggregateInputType | true
    }

  export interface ModifierPackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModifierPack'], meta: { name: 'ModifierPack' } }
    /**
     * Find zero or one ModifierPack that matches the filter.
     * @param {ModifierPackFindUniqueArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModifierPackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackFindUniqueArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ModifierPack that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModifierPackFindUniqueOrThrowArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModifierPackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ModifierPack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindFirstArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModifierPackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindFirstArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ModifierPack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindFirstOrThrowArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModifierPackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ModifierPacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModifierPacks
     * const modifierPacks = await prisma.modifierPack.findMany()
     * 
     * // Get first 10 ModifierPacks
     * const modifierPacks = await prisma.modifierPack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierPackWithIdOnly = await prisma.modifierPack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModifierPackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ModifierPack.
     * @param {ModifierPackCreateArgs} args - Arguments to create a ModifierPack.
     * @example
     * // Create one ModifierPack
     * const ModifierPack = await prisma.modifierPack.create({
     *   data: {
     *     // ... data to create a ModifierPack
     *   }
     * })
     * 
    **/
    create<T extends ModifierPackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackCreateArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ModifierPacks.
     *     @param {ModifierPackCreateManyArgs} args - Arguments to create many ModifierPacks.
     *     @example
     *     // Create many ModifierPacks
     *     const modifierPack = await prisma.modifierPack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModifierPackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModifierPack.
     * @param {ModifierPackDeleteArgs} args - Arguments to delete one ModifierPack.
     * @example
     * // Delete one ModifierPack
     * const ModifierPack = await prisma.modifierPack.delete({
     *   where: {
     *     // ... filter to delete one ModifierPack
     *   }
     * })
     * 
    **/
    delete<T extends ModifierPackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackDeleteArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ModifierPack.
     * @param {ModifierPackUpdateArgs} args - Arguments to update one ModifierPack.
     * @example
     * // Update one ModifierPack
     * const modifierPack = await prisma.modifierPack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModifierPackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpdateArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ModifierPacks.
     * @param {ModifierPackDeleteManyArgs} args - Arguments to filter ModifierPacks to delete.
     * @example
     * // Delete a few ModifierPacks
     * const { count } = await prisma.modifierPack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModifierPackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModifierPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModifierPacks
     * const modifierPack = await prisma.modifierPack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModifierPackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModifierPack.
     * @param {ModifierPackUpsertArgs} args - Arguments to update or create a ModifierPack.
     * @example
     * // Update or create a ModifierPack
     * const modifierPack = await prisma.modifierPack.upsert({
     *   create: {
     *     // ... data to create a ModifierPack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModifierPack we want to update
     *   }
     * })
    **/
    upsert<T extends ModifierPackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpsertArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Result.GetResult<Prisma.$ModifierPackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ModifierPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackCountArgs} args - Arguments to filter ModifierPacks to count.
     * @example
     * // Count the number of ModifierPacks
     * const count = await prisma.modifierPack.count({
     *   where: {
     *     // ... the filter for the ModifierPacks we want to count
     *   }
     * })
    **/
    count<T extends ModifierPackCountArgs>(
      args?: Subset<T, ModifierPackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierPackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModifierPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierPackAggregateArgs>(args: Subset<T, ModifierPackAggregateArgs>): Prisma.PrismaPromise<GetModifierPackAggregateType<T>>

    /**
     * Group by ModifierPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierPackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierPackGroupByArgs['orderBy'] }
        : { orderBy?: ModifierPackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierPackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModifierPack model
   */
  readonly fields: ModifierPackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModifierPack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModifierPackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CreatedBy<T extends ModifierPack$CreatedByArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$CreatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ExcludedFromDay<T extends ModifierPack$ExcludedFromDayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$ExcludedFromDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    IncludedInDay<T extends ModifierPack$IncludedInDayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$IncludedInDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ModifierPack model
   */ 
  interface ModifierPackFieldRefs {
    readonly id: FieldRef<"ModifierPack", 'Int'>
    readonly dateCreated: FieldRef<"ModifierPack", 'DateTime'>
    readonly createdById: FieldRef<"ModifierPack", 'String'>
    readonly isPublic: FieldRef<"ModifierPack", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ModifierPack findUnique
   */
  export type ModifierPackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack findUniqueOrThrow
   */
  export type ModifierPackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack findFirst
   */
  export type ModifierPackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierPacks.
     */
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * ModifierPack findFirstOrThrow
   */
  export type ModifierPackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierPacks.
     */
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * ModifierPack findMany
   */
  export type ModifierPackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPacks to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: ModifierPackOrderByWithRelationInput | ModifierPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    distinct?: ModifierPackScalarFieldEnum | ModifierPackScalarFieldEnum[]
  }


  /**
   * ModifierPack create
   */
  export type ModifierPackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The data needed to create a ModifierPack.
     */
    data?: XOR<ModifierPackCreateInput, ModifierPackUncheckedCreateInput>
  }


  /**
   * ModifierPack createMany
   */
  export type ModifierPackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModifierPacks.
     */
    data: ModifierPackCreateManyInput | ModifierPackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ModifierPack update
   */
  export type ModifierPackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The data needed to update a ModifierPack.
     */
    data: XOR<ModifierPackUpdateInput, ModifierPackUncheckedUpdateInput>
    /**
     * Choose, which ModifierPack to update.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack updateMany
   */
  export type ModifierPackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModifierPacks.
     */
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyInput>
    /**
     * Filter which ModifierPacks to update
     */
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierPack upsert
   */
  export type ModifierPackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The filter to search for the ModifierPack to update in case it exists.
     */
    where: ModifierPackWhereUniqueInput
    /**
     * In case the ModifierPack found by the `where` argument doesn't exist, create a new ModifierPack with this data.
     */
    create: XOR<ModifierPackCreateInput, ModifierPackUncheckedCreateInput>
    /**
     * In case the ModifierPack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierPackUpdateInput, ModifierPackUncheckedUpdateInput>
  }


  /**
   * ModifierPack delete
   */
  export type ModifierPackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter which ModifierPack to delete.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack deleteMany
   */
  export type ModifierPackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierPacks to delete
     */
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierPack.CreatedBy
   */
  export type ModifierPack$CreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ModifierPack.ExcludedFromDay
   */
  export type ModifierPack$ExcludedFromDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ModifierPack.IncludedInDay
   */
  export type ModifierPack$IncludedInDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: ModifierOptionOrderByWithRelationInput | ModifierOptionOrderByWithRelationInput[]
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierOptionScalarFieldEnum | ModifierOptionScalarFieldEnum[]
  }


  /**
   * ModifierPack without action
   */
  export type ModifierPackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
  }



  /**
   * Model Upvote
   */

  export type AggregateUpvote = {
    _count: UpvoteCountAggregateOutputType | null
    _avg: UpvoteAvgAggregateOutputType | null
    _sum: UpvoteSumAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  export type UpvoteAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UpvoteSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UpvoteMinAggregateOutputType = {
    id: number | null
    note: string | null
    dateCreated: Date | null
    gameId: number | null
    createdById: string | null
  }

  export type UpvoteMaxAggregateOutputType = {
    id: number | null
    note: string | null
    dateCreated: Date | null
    gameId: number | null
    createdById: string | null
  }

  export type UpvoteCountAggregateOutputType = {
    id: number
    note: number
    dateCreated: number
    gameId: number
    createdById: number
    _all: number
  }


  export type UpvoteAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UpvoteSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UpvoteMinAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
  }

  export type UpvoteMaxAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
  }

  export type UpvoteCountAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
    _all?: true
  }

  export type UpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvote to aggregate.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upvotes
    **/
    _count?: true | UpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpvoteMaxAggregateInputType
  }

  export type GetUpvoteAggregateType<T extends UpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpvote[P]>
      : GetScalarType<T[P], AggregateUpvote[P]>
  }




  export type UpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithAggregationInput | UpvoteOrderByWithAggregationInput[]
    by: UpvoteScalarFieldEnum[] | UpvoteScalarFieldEnum
    having?: UpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpvoteCountAggregateInputType | true
    _avg?: UpvoteAvgAggregateInputType
    _sum?: UpvoteSumAggregateInputType
    _min?: UpvoteMinAggregateInputType
    _max?: UpvoteMaxAggregateInputType
  }

  export type UpvoteGroupByOutputType = {
    id: number
    note: string | null
    dateCreated: Date
    gameId: number
    createdById: string
    _count: UpvoteCountAggregateOutputType | null
    _avg: UpvoteAvgAggregateOutputType | null
    _sum: UpvoteSumAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  type GetUpvoteGroupByPayload<T extends UpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
        }
      >
    >


  export type UpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    dateCreated?: boolean
    gameId?: boolean
    createdById?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectScalar = {
    id?: boolean
    note?: boolean
    dateCreated?: boolean
    gameId?: boolean
    createdById?: boolean
  }

  export type UpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }


  export type $UpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upvote"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      Game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: string | null
      dateCreated: Date
      gameId: number
      createdById: string
    }, ExtArgs["result"]["upvote"]>
    composites: {}
  }


  type UpvoteGetPayload<S extends boolean | null | undefined | UpvoteDefaultArgs> = $Result.GetResult<Prisma.$UpvotePayload, S>

  type UpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UpvoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UpvoteCountAggregateInputType | true
    }

  export interface UpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upvote'], meta: { name: 'Upvote' } }
    /**
     * Find zero or one Upvote that matches the filter.
     * @param {UpvoteFindUniqueArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UpvoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteFindUniqueArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Upvote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UpvoteFindUniqueOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UpvoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Upvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UpvoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteFindFirstArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Upvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UpvoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Upvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upvotes
     * const upvotes = await prisma.upvote.findMany()
     * 
     * // Get first 10 Upvotes
     * const upvotes = await prisma.upvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upvoteWithIdOnly = await prisma.upvote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UpvoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Upvote.
     * @param {UpvoteCreateArgs} args - Arguments to create a Upvote.
     * @example
     * // Create one Upvote
     * const Upvote = await prisma.upvote.create({
     *   data: {
     *     // ... data to create a Upvote
     *   }
     * })
     * 
    **/
    create<T extends UpvoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteCreateArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Upvotes.
     *     @param {UpvoteCreateManyArgs} args - Arguments to create many Upvotes.
     *     @example
     *     // Create many Upvotes
     *     const upvote = await prisma.upvote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UpvoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Upvote.
     * @param {UpvoteDeleteArgs} args - Arguments to delete one Upvote.
     * @example
     * // Delete one Upvote
     * const Upvote = await prisma.upvote.delete({
     *   where: {
     *     // ... filter to delete one Upvote
     *   }
     * })
     * 
    **/
    delete<T extends UpvoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteDeleteArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Upvote.
     * @param {UpvoteUpdateArgs} args - Arguments to update one Upvote.
     * @example
     * // Update one Upvote
     * const upvote = await prisma.upvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UpvoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteUpdateArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Upvotes.
     * @param {UpvoteDeleteManyArgs} args - Arguments to filter Upvotes to delete.
     * @example
     * // Delete a few Upvotes
     * const { count } = await prisma.upvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UpvoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpvoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upvotes
     * const upvote = await prisma.upvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UpvoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Upvote.
     * @param {UpvoteUpsertArgs} args - Arguments to update or create a Upvote.
     * @example
     * // Update or create a Upvote
     * const upvote = await prisma.upvote.upsert({
     *   create: {
     *     // ... data to create a Upvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upvote we want to update
     *   }
     * })
    **/
    upsert<T extends UpvoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UpvoteUpsertArgs<ExtArgs>>
    ): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteCountArgs} args - Arguments to filter Upvotes to count.
     * @example
     * // Count the number of Upvotes
     * const count = await prisma.upvote.count({
     *   where: {
     *     // ... the filter for the Upvotes we want to count
     *   }
     * })
    **/
    count<T extends UpvoteCountArgs>(
      args?: Subset<T, UpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpvoteAggregateArgs>(args: Subset<T, UpvoteAggregateArgs>): Prisma.PrismaPromise<GetUpvoteAggregateType<T>>

    /**
     * Group by Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpvoteGroupByArgs['orderBy'] }
        : { orderBy?: UpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upvote model
   */
  readonly fields: UpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Upvote model
   */ 
  interface UpvoteFieldRefs {
    readonly id: FieldRef<"Upvote", 'Int'>
    readonly note: FieldRef<"Upvote", 'String'>
    readonly dateCreated: FieldRef<"Upvote", 'DateTime'>
    readonly gameId: FieldRef<"Upvote", 'Int'>
    readonly createdById: FieldRef<"Upvote", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Upvote findUnique
   */
  export type UpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }


  /**
   * Upvote findUniqueOrThrow
   */
  export type UpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }


  /**
   * Upvote findFirst
   */
  export type UpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }


  /**
   * Upvote findFirstOrThrow
   */
  export type UpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }


  /**
   * Upvote findMany
   */
  export type UpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }


  /**
   * Upvote create
   */
  export type UpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Upvote.
     */
    data: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
  }


  /**
   * Upvote createMany
   */
  export type UpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upvotes.
     */
    data: UpvoteCreateManyInput | UpvoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Upvote update
   */
  export type UpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Upvote.
     */
    data: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
    /**
     * Choose, which Upvote to update.
     */
    where: UpvoteWhereUniqueInput
  }


  /**
   * Upvote updateMany
   */
  export type UpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvoteWhereInput
  }


  /**
   * Upvote upsert
   */
  export type UpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Upvote to update in case it exists.
     */
    where: UpvoteWhereUniqueInput
    /**
     * In case the Upvote found by the `where` argument doesn't exist, create a new Upvote with this data.
     */
    create: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
    /**
     * In case the Upvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
  }


  /**
   * Upvote delete
   */
  export type UpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter which Upvote to delete.
     */
    where: UpvoteWhereUniqueInput
  }


  /**
   * Upvote deleteMany
   */
  export type UpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvotes to delete
     */
    where?: UpvoteWhereInput
  }


  /**
   * Upvote without action
   */
  export type UpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpvoteInclude<ExtArgs> | null
  }



  /**
   * Model Downvote
   */

  export type AggregateDownvote = {
    _count: DownvoteCountAggregateOutputType | null
    _avg: DownvoteAvgAggregateOutputType | null
    _sum: DownvoteSumAggregateOutputType | null
    _min: DownvoteMinAggregateOutputType | null
    _max: DownvoteMaxAggregateOutputType | null
  }

  export type DownvoteAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type DownvoteSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type DownvoteMinAggregateOutputType = {
    id: number | null
    note: string | null
    dateCreated: Date | null
    gameId: number | null
    createdById: string | null
  }

  export type DownvoteMaxAggregateOutputType = {
    id: number | null
    note: string | null
    dateCreated: Date | null
    gameId: number | null
    createdById: string | null
  }

  export type DownvoteCountAggregateOutputType = {
    id: number
    note: number
    dateCreated: number
    gameId: number
    createdById: number
    _all: number
  }


  export type DownvoteAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type DownvoteSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type DownvoteMinAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
  }

  export type DownvoteMaxAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
  }

  export type DownvoteCountAggregateInputType = {
    id?: true
    note?: true
    dateCreated?: true
    gameId?: true
    createdById?: true
    _all?: true
  }

  export type DownvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Downvote to aggregate.
     */
    where?: DownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downvotes to fetch.
     */
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Downvotes
    **/
    _count?: true | DownvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DownvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DownvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DownvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DownvoteMaxAggregateInputType
  }

  export type GetDownvoteAggregateType<T extends DownvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateDownvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDownvote[P]>
      : GetScalarType<T[P], AggregateDownvote[P]>
  }




  export type DownvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownvoteWhereInput
    orderBy?: DownvoteOrderByWithAggregationInput | DownvoteOrderByWithAggregationInput[]
    by: DownvoteScalarFieldEnum[] | DownvoteScalarFieldEnum
    having?: DownvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DownvoteCountAggregateInputType | true
    _avg?: DownvoteAvgAggregateInputType
    _sum?: DownvoteSumAggregateInputType
    _min?: DownvoteMinAggregateInputType
    _max?: DownvoteMaxAggregateInputType
  }

  export type DownvoteGroupByOutputType = {
    id: number
    note: string
    dateCreated: Date
    gameId: number
    createdById: string
    _count: DownvoteCountAggregateOutputType | null
    _avg: DownvoteAvgAggregateOutputType | null
    _sum: DownvoteSumAggregateOutputType | null
    _min: DownvoteMinAggregateOutputType | null
    _max: DownvoteMaxAggregateOutputType | null
  }

  type GetDownvoteGroupByPayload<T extends DownvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DownvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DownvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DownvoteGroupByOutputType[P]>
            : GetScalarType<T[P], DownvoteGroupByOutputType[P]>
        }
      >
    >


  export type DownvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    dateCreated?: boolean
    gameId?: boolean
    createdById?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["downvote"]>

  export type DownvoteSelectScalar = {
    id?: boolean
    note?: boolean
    dateCreated?: boolean
    gameId?: boolean
    createdById?: boolean
  }

  export type DownvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }


  export type $DownvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Downvote"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      Game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: string
      dateCreated: Date
      gameId: number
      createdById: string
    }, ExtArgs["result"]["downvote"]>
    composites: {}
  }


  type DownvoteGetPayload<S extends boolean | null | undefined | DownvoteDefaultArgs> = $Result.GetResult<Prisma.$DownvotePayload, S>

  type DownvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DownvoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DownvoteCountAggregateInputType | true
    }

  export interface DownvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Downvote'], meta: { name: 'Downvote' } }
    /**
     * Find zero or one Downvote that matches the filter.
     * @param {DownvoteFindUniqueArgs} args - Arguments to find a Downvote
     * @example
     * // Get one Downvote
     * const downvote = await prisma.downvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DownvoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteFindUniqueArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Downvote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DownvoteFindUniqueOrThrowArgs} args - Arguments to find a Downvote
     * @example
     * // Get one Downvote
     * const downvote = await prisma.downvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DownvoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Downvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteFindFirstArgs} args - Arguments to find a Downvote
     * @example
     * // Get one Downvote
     * const downvote = await prisma.downvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DownvoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteFindFirstArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Downvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteFindFirstOrThrowArgs} args - Arguments to find a Downvote
     * @example
     * // Get one Downvote
     * const downvote = await prisma.downvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DownvoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Downvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Downvotes
     * const downvotes = await prisma.downvote.findMany()
     * 
     * // Get first 10 Downvotes
     * const downvotes = await prisma.downvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const downvoteWithIdOnly = await prisma.downvote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DownvoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Downvote.
     * @param {DownvoteCreateArgs} args - Arguments to create a Downvote.
     * @example
     * // Create one Downvote
     * const Downvote = await prisma.downvote.create({
     *   data: {
     *     // ... data to create a Downvote
     *   }
     * })
     * 
    **/
    create<T extends DownvoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteCreateArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Downvotes.
     *     @param {DownvoteCreateManyArgs} args - Arguments to create many Downvotes.
     *     @example
     *     // Create many Downvotes
     *     const downvote = await prisma.downvote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DownvoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Downvote.
     * @param {DownvoteDeleteArgs} args - Arguments to delete one Downvote.
     * @example
     * // Delete one Downvote
     * const Downvote = await prisma.downvote.delete({
     *   where: {
     *     // ... filter to delete one Downvote
     *   }
     * })
     * 
    **/
    delete<T extends DownvoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteDeleteArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Downvote.
     * @param {DownvoteUpdateArgs} args - Arguments to update one Downvote.
     * @example
     * // Update one Downvote
     * const downvote = await prisma.downvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DownvoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteUpdateArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Downvotes.
     * @param {DownvoteDeleteManyArgs} args - Arguments to filter Downvotes to delete.
     * @example
     * // Delete a few Downvotes
     * const { count } = await prisma.downvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DownvoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DownvoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Downvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Downvotes
     * const downvote = await prisma.downvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DownvoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Downvote.
     * @param {DownvoteUpsertArgs} args - Arguments to update or create a Downvote.
     * @example
     * // Update or create a Downvote
     * const downvote = await prisma.downvote.upsert({
     *   create: {
     *     // ... data to create a Downvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Downvote we want to update
     *   }
     * })
    **/
    upsert<T extends DownvoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DownvoteUpsertArgs<ExtArgs>>
    ): Prisma__DownvoteClient<$Result.GetResult<Prisma.$DownvotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Downvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteCountArgs} args - Arguments to filter Downvotes to count.
     * @example
     * // Count the number of Downvotes
     * const count = await prisma.downvote.count({
     *   where: {
     *     // ... the filter for the Downvotes we want to count
     *   }
     * })
    **/
    count<T extends DownvoteCountArgs>(
      args?: Subset<T, DownvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DownvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Downvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DownvoteAggregateArgs>(args: Subset<T, DownvoteAggregateArgs>): Prisma.PrismaPromise<GetDownvoteAggregateType<T>>

    /**
     * Group by Downvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DownvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DownvoteGroupByArgs['orderBy'] }
        : { orderBy?: DownvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DownvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDownvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Downvote model
   */
  readonly fields: DownvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Downvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DownvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Downvote model
   */ 
  interface DownvoteFieldRefs {
    readonly id: FieldRef<"Downvote", 'Int'>
    readonly note: FieldRef<"Downvote", 'String'>
    readonly dateCreated: FieldRef<"Downvote", 'DateTime'>
    readonly gameId: FieldRef<"Downvote", 'Int'>
    readonly createdById: FieldRef<"Downvote", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Downvote findUnique
   */
  export type DownvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter, which Downvote to fetch.
     */
    where: DownvoteWhereUniqueInput
  }


  /**
   * Downvote findUniqueOrThrow
   */
  export type DownvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter, which Downvote to fetch.
     */
    where: DownvoteWhereUniqueInput
  }


  /**
   * Downvote findFirst
   */
  export type DownvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter, which Downvote to fetch.
     */
    where?: DownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downvotes to fetch.
     */
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downvotes.
     */
    cursor?: DownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downvotes.
     */
    distinct?: DownvoteScalarFieldEnum | DownvoteScalarFieldEnum[]
  }


  /**
   * Downvote findFirstOrThrow
   */
  export type DownvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter, which Downvote to fetch.
     */
    where?: DownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downvotes to fetch.
     */
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downvotes.
     */
    cursor?: DownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downvotes.
     */
    distinct?: DownvoteScalarFieldEnum | DownvoteScalarFieldEnum[]
  }


  /**
   * Downvote findMany
   */
  export type DownvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter, which Downvotes to fetch.
     */
    where?: DownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downvotes to fetch.
     */
    orderBy?: DownvoteOrderByWithRelationInput | DownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Downvotes.
     */
    cursor?: DownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downvotes.
     */
    skip?: number
    distinct?: DownvoteScalarFieldEnum | DownvoteScalarFieldEnum[]
  }


  /**
   * Downvote create
   */
  export type DownvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Downvote.
     */
    data: XOR<DownvoteCreateInput, DownvoteUncheckedCreateInput>
  }


  /**
   * Downvote createMany
   */
  export type DownvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Downvotes.
     */
    data: DownvoteCreateManyInput | DownvoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Downvote update
   */
  export type DownvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Downvote.
     */
    data: XOR<DownvoteUpdateInput, DownvoteUncheckedUpdateInput>
    /**
     * Choose, which Downvote to update.
     */
    where: DownvoteWhereUniqueInput
  }


  /**
   * Downvote updateMany
   */
  export type DownvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Downvotes.
     */
    data: XOR<DownvoteUpdateManyMutationInput, DownvoteUncheckedUpdateManyInput>
    /**
     * Filter which Downvotes to update
     */
    where?: DownvoteWhereInput
  }


  /**
   * Downvote upsert
   */
  export type DownvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Downvote to update in case it exists.
     */
    where: DownvoteWhereUniqueInput
    /**
     * In case the Downvote found by the `where` argument doesn't exist, create a new Downvote with this data.
     */
    create: XOR<DownvoteCreateInput, DownvoteUncheckedCreateInput>
    /**
     * In case the Downvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DownvoteUpdateInput, DownvoteUncheckedUpdateInput>
  }


  /**
   * Downvote delete
   */
  export type DownvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
    /**
     * Filter which Downvote to delete.
     */
    where: DownvoteWhereUniqueInput
  }


  /**
   * Downvote deleteMany
   */
  export type DownvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Downvotes to delete
     */
    where?: DownvoteWhereInput
  }


  /**
   * Downvote without action
   */
  export type DownvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Downvote
     */
    select?: DownvoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DownvoteInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    serializedId: 'serializedId',
    username: 'username',
    oauthUrl: 'oauthUrl',
    oauthUsername: 'oauthUsername',
    oauthName: 'oauthName',
    oauthAvatarUrl: 'oauthAvatarUrl',
    dateCreated: 'dateCreated',
    numberOfGames: 'numberOfGames'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PublicProfileScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    name: 'name',
    userId: 'userId'
  };

  export type PublicProfileScalarFieldEnum = (typeof PublicProfileScalarFieldEnum)[keyof typeof PublicProfileScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    userId: 'userId',
    number: 'number',
    year: 'year',
    name: 'name',
    playerName: 'playerName',
    currentDay: 'currentDay',
    currentDayCompleted: 'currentDayCompleted',
    currentRerollTokens: 'currentRerollTokens',
    rerollTokensSpent: 'rerollTokensSpent',
    rerollTokensSpentDuringPart2Raw: 'rerollTokensSpentDuringPart2Raw',
    part2RerollBonus: 'part2RerollBonus',
    repositoryLink: 'repositoryLink',
    progressSheetLink: 'progressSheetLink',
    isPublic: 'isPublic',
    publicProfileId: 'publicProfileId',
    score: 'score',
    titleId: 'titleId',
    dateCompleted: 'dateCompleted'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const TitleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minimumScore: 'minimumScore'
  };

  export type TitleScalarFieldEnum = (typeof TitleScalarFieldEnum)[keyof typeof TitleScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    gameId: 'gameId',
    userId: 'userId',
    gameNumber: 'gameNumber',
    number: 'number',
    challengeModifierId: 'challengeModifierId',
    modifierOptionId: 'modifierOptionId',
    dateFirstRolled: 'dateFirstRolled',
    part1Completed: 'part1Completed',
    modifierWhenPart1CompletedId: 'modifierWhenPart1CompletedId',
    optionWhenPart1CompletedId: 'optionWhenPart1CompletedId',
    part2Completed: 'part2Completed',
    challengeModifierRerollsUsed: 'challengeModifierRerollsUsed',
    modifierOptionRerollsUsed: 'modifierOptionRerollsUsed',
    rerollTokensSpentDuringPart2: 'rerollTokensSpentDuringPart2',
    score: 'score'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const ChallengeModifierScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    name: 'name',
    text: 'text',
    hasOptions: 'hasOptions',
    explanatoryUrl: 'explanatoryUrl',
    standard: 'standard',
    createdById: 'createdById',
    isPublic: 'isPublic'
  };

  export type ChallengeModifierScalarFieldEnum = (typeof ChallengeModifierScalarFieldEnum)[keyof typeof ChallengeModifierScalarFieldEnum]


  export const ModifierOptionScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    challengeModifierId: 'challengeModifierId',
    name: 'name',
    text: 'text',
    shortText: 'shortText',
    explanatoryUrl: 'explanatoryUrl',
    standard: 'standard',
    createdById: 'createdById',
    isPublic: 'isPublic'
  };

  export type ModifierOptionScalarFieldEnum = (typeof ModifierOptionScalarFieldEnum)[keyof typeof ModifierOptionScalarFieldEnum]


  export const ModifierPackScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    createdById: 'createdById',
    isPublic: 'isPublic'
  };

  export type ModifierPackScalarFieldEnum = (typeof ModifierPackScalarFieldEnum)[keyof typeof ModifierPackScalarFieldEnum]


  export const UpvoteScalarFieldEnum: {
    id: 'id',
    note: 'note',
    dateCreated: 'dateCreated',
    gameId: 'gameId',
    createdById: 'createdById'
  };

  export type UpvoteScalarFieldEnum = (typeof UpvoteScalarFieldEnum)[keyof typeof UpvoteScalarFieldEnum]


  export const DownvoteScalarFieldEnum: {
    id: 'id',
    note: 'note',
    dateCreated: 'dateCreated',
    gameId: 'gameId',
    createdById: 'createdById'
  };

  export type DownvoteScalarFieldEnum = (typeof DownvoteScalarFieldEnum)[keyof typeof DownvoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    serializedId?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    oauthUrl?: StringNullableFilter<"User"> | string | null
    oauthUsername?: StringNullableFilter<"User"> | string | null
    oauthName?: StringNullableFilter<"User"> | string | null
    oauthAvatarUrl?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    numberOfGames?: IntFilter<"User"> | number
    ChallengeModifier?: ChallengeModifierListRelationFilter
    Downvote?: DownvoteListRelationFilter
    Game?: GameListRelationFilter
    ModifierOption?: ModifierOptionListRelationFilter
    ModifierPack?: ModifierPackListRelationFilter
    PublicProfile?: PublicProfileListRelationFilter
    Upvote?: UpvoteListRelationFilter
    DefaultExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultExcludedModifierOptions?: ModifierOptionListRelationFilter
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultIncludedCustomModifierOptions?: ModifierOptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    serializedId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    oauthUrl?: SortOrderInput | SortOrder
    oauthUsername?: SortOrderInput | SortOrder
    oauthName?: SortOrderInput | SortOrder
    oauthAvatarUrl?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
    ChallengeModifier?: ChallengeModifierOrderByRelationAggregateInput
    Downvote?: DownvoteOrderByRelationAggregateInput
    Game?: GameOrderByRelationAggregateInput
    ModifierOption?: ModifierOptionOrderByRelationAggregateInput
    ModifierPack?: ModifierPackOrderByRelationAggregateInput
    PublicProfile?: PublicProfileOrderByRelationAggregateInput
    Upvote?: UpvoteOrderByRelationAggregateInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    DefaultExcludedModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serializedId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    oauthUrl?: StringNullableFilter<"User"> | string | null
    oauthUsername?: StringNullableFilter<"User"> | string | null
    oauthName?: StringNullableFilter<"User"> | string | null
    oauthAvatarUrl?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    numberOfGames?: IntFilter<"User"> | number
    ChallengeModifier?: ChallengeModifierListRelationFilter
    Downvote?: DownvoteListRelationFilter
    Game?: GameListRelationFilter
    ModifierOption?: ModifierOptionListRelationFilter
    ModifierPack?: ModifierPackListRelationFilter
    PublicProfile?: PublicProfileListRelationFilter
    Upvote?: UpvoteListRelationFilter
    DefaultExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultExcludedModifierOptions?: ModifierOptionListRelationFilter
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultIncludedCustomModifierOptions?: ModifierOptionListRelationFilter
  }, "id" | "serializedId" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    serializedId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    oauthUrl?: SortOrderInput | SortOrder
    oauthUsername?: SortOrderInput | SortOrder
    oauthName?: SortOrderInput | SortOrder
    oauthAvatarUrl?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    serializedId?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthName?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthAvatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    numberOfGames?: IntWithAggregatesFilter<"User"> | number
  }

  export type PublicProfileWhereInput = {
    AND?: PublicProfileWhereInput | PublicProfileWhereInput[]
    OR?: PublicProfileWhereInput[]
    NOT?: PublicProfileWhereInput | PublicProfileWhereInput[]
    id?: IntFilter<"PublicProfile"> | number
    dateCreated?: DateTimeFilter<"PublicProfile"> | Date | string
    name?: StringFilter<"PublicProfile"> | string
    userId?: StringFilter<"PublicProfile"> | string
    Game?: GameListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PublicProfileOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    Game?: GameOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type PublicProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicProfileWhereInput | PublicProfileWhereInput[]
    OR?: PublicProfileWhereInput[]
    NOT?: PublicProfileWhereInput | PublicProfileWhereInput[]
    dateCreated?: DateTimeFilter<"PublicProfile"> | Date | string
    name?: StringFilter<"PublicProfile"> | string
    userId?: StringFilter<"PublicProfile"> | string
    Game?: GameListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PublicProfileOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: PublicProfileCountOrderByAggregateInput
    _avg?: PublicProfileAvgOrderByAggregateInput
    _max?: PublicProfileMaxOrderByAggregateInput
    _min?: PublicProfileMinOrderByAggregateInput
    _sum?: PublicProfileSumOrderByAggregateInput
  }

  export type PublicProfileScalarWhereWithAggregatesInput = {
    AND?: PublicProfileScalarWhereWithAggregatesInput | PublicProfileScalarWhereWithAggregatesInput[]
    OR?: PublicProfileScalarWhereWithAggregatesInput[]
    NOT?: PublicProfileScalarWhereWithAggregatesInput | PublicProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublicProfile"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"PublicProfile"> | Date | string
    name?: StringWithAggregatesFilter<"PublicProfile"> | string
    userId?: StringWithAggregatesFilter<"PublicProfile"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    dateCreated?: DateTimeFilter<"Game"> | Date | string
    userId?: StringFilter<"Game"> | string
    number?: IntFilter<"Game"> | number
    year?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    playerName?: StringNullableFilter<"Game"> | string | null
    currentDay?: IntFilter<"Game"> | number
    currentDayCompleted?: BoolFilter<"Game"> | boolean
    currentRerollTokens?: IntFilter<"Game"> | number
    rerollTokensSpent?: IntFilter<"Game"> | number
    rerollTokensSpentDuringPart2Raw?: IntFilter<"Game"> | number
    part2RerollBonus?: IntFilter<"Game"> | number
    repositoryLink?: StringNullableFilter<"Game"> | string | null
    progressSheetLink?: StringFilter<"Game"> | string
    isPublic?: BoolFilter<"Game"> | boolean
    publicProfileId?: IntNullableFilter<"Game"> | number | null
    score?: IntFilter<"Game"> | number
    titleId?: IntNullableFilter<"Game"> | number | null
    dateCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
    Day?: DayListRelationFilter
    Downvote?: DownvoteListRelationFilter
    PublicProfile?: XOR<PublicProfileNullableRelationFilter, PublicProfileWhereInput> | null
    Title?: XOR<TitleNullableRelationFilter, TitleWhereInput> | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    Upvote?: UpvoteListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrderInput | SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrder
    isPublic?: SortOrder
    publicProfileId?: SortOrderInput | SortOrder
    score?: SortOrder
    titleId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    Day?: DayOrderByRelationAggregateInput
    Downvote?: DownvoteOrderByRelationAggregateInput
    PublicProfile?: PublicProfileOrderByWithRelationInput
    Title?: TitleOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Upvote?: UpvoteOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    dateCreated?: DateTimeFilter<"Game"> | Date | string
    userId?: StringFilter<"Game"> | string
    number?: IntFilter<"Game"> | number
    year?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    playerName?: StringNullableFilter<"Game"> | string | null
    currentDay?: IntFilter<"Game"> | number
    currentDayCompleted?: BoolFilter<"Game"> | boolean
    currentRerollTokens?: IntFilter<"Game"> | number
    rerollTokensSpent?: IntFilter<"Game"> | number
    rerollTokensSpentDuringPart2Raw?: IntFilter<"Game"> | number
    part2RerollBonus?: IntFilter<"Game"> | number
    repositoryLink?: StringNullableFilter<"Game"> | string | null
    progressSheetLink?: StringFilter<"Game"> | string
    isPublic?: BoolFilter<"Game"> | boolean
    publicProfileId?: IntNullableFilter<"Game"> | number | null
    score?: IntFilter<"Game"> | number
    titleId?: IntNullableFilter<"Game"> | number | null
    dateCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
    Day?: DayListRelationFilter
    Downvote?: DownvoteListRelationFilter
    PublicProfile?: XOR<PublicProfileNullableRelationFilter, PublicProfileWhereInput> | null
    Title?: XOR<TitleNullableRelationFilter, TitleWhereInput> | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    Upvote?: UpvoteListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrderInput | SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrder
    isPublic?: SortOrder
    publicProfileId?: SortOrderInput | SortOrder
    score?: SortOrder
    titleId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    userId?: StringWithAggregatesFilter<"Game"> | string
    number?: IntWithAggregatesFilter<"Game"> | number
    year?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    playerName?: StringNullableWithAggregatesFilter<"Game"> | string | null
    currentDay?: IntWithAggregatesFilter<"Game"> | number
    currentDayCompleted?: BoolWithAggregatesFilter<"Game"> | boolean
    currentRerollTokens?: IntWithAggregatesFilter<"Game"> | number
    rerollTokensSpent?: IntWithAggregatesFilter<"Game"> | number
    rerollTokensSpentDuringPart2Raw?: IntWithAggregatesFilter<"Game"> | number
    part2RerollBonus?: IntWithAggregatesFilter<"Game"> | number
    repositoryLink?: StringNullableWithAggregatesFilter<"Game"> | string | null
    progressSheetLink?: StringWithAggregatesFilter<"Game"> | string
    isPublic?: BoolWithAggregatesFilter<"Game"> | boolean
    publicProfileId?: IntNullableWithAggregatesFilter<"Game"> | number | null
    score?: IntWithAggregatesFilter<"Game"> | number
    titleId?: IntNullableWithAggregatesFilter<"Game"> | number | null
    dateCompleted?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
  }

  export type TitleWhereInput = {
    AND?: TitleWhereInput | TitleWhereInput[]
    OR?: TitleWhereInput[]
    NOT?: TitleWhereInput | TitleWhereInput[]
    id?: IntFilter<"Title"> | number
    name?: StringFilter<"Title"> | string
    minimumScore?: IntFilter<"Title"> | number
    Game?: GameListRelationFilter
  }

  export type TitleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
    Game?: GameOrderByRelationAggregateInput
  }

  export type TitleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TitleWhereInput | TitleWhereInput[]
    OR?: TitleWhereInput[]
    NOT?: TitleWhereInput | TitleWhereInput[]
    minimumScore?: IntFilter<"Title"> | number
    Game?: GameListRelationFilter
  }, "id" | "name">

  export type TitleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
    _count?: TitleCountOrderByAggregateInput
    _avg?: TitleAvgOrderByAggregateInput
    _max?: TitleMaxOrderByAggregateInput
    _min?: TitleMinOrderByAggregateInput
    _sum?: TitleSumOrderByAggregateInput
  }

  export type TitleScalarWhereWithAggregatesInput = {
    AND?: TitleScalarWhereWithAggregatesInput | TitleScalarWhereWithAggregatesInput[]
    OR?: TitleScalarWhereWithAggregatesInput[]
    NOT?: TitleScalarWhereWithAggregatesInput | TitleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Title"> | number
    name?: StringWithAggregatesFilter<"Title"> | string
    minimumScore?: IntWithAggregatesFilter<"Title"> | number
  }

  export type DayWhereInput = {
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    id?: IntFilter<"Day"> | number
    dateCreated?: DateTimeFilter<"Day"> | Date | string
    gameId?: IntFilter<"Day"> | number
    userId?: StringFilter<"Day"> | string
    gameNumber?: IntFilter<"Day"> | number
    number?: IntFilter<"Day"> | number
    challengeModifierId?: IntNullableFilter<"Day"> | number | null
    modifierOptionId?: IntNullableFilter<"Day"> | number | null
    dateFirstRolled?: DateTimeNullableFilter<"Day"> | Date | string | null
    part1Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    optionWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    part2Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    challengeModifierRerollsUsed?: IntFilter<"Day"> | number
    modifierOptionRerollsUsed?: IntFilter<"Day"> | number
    rerollTokensSpentDuringPart2?: IntFilter<"Day"> | number
    score?: IntFilter<"Day"> | number
    ChallengeModifier?: XOR<ChallengeModifierNullableRelationFilter, ChallengeModifierWhereInput> | null
    Game?: XOR<GameRelationFilter, GameWhereInput>
    ModifierOption?: XOR<ModifierOptionNullableRelationFilter, ModifierOptionWhereInput> | null
    ModifierWhenPart1Completed?: XOR<ChallengeModifierNullableRelationFilter, ChallengeModifierWhereInput> | null
    OptionWhenPart1Completed?: XOR<ModifierOptionNullableRelationFilter, ModifierOptionWhereInput> | null
    ExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    EncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    dateFirstRolled?: SortOrderInput | SortOrder
    part1Completed?: SortOrderInput | SortOrder
    modifierWhenPart1CompletedId?: SortOrderInput | SortOrder
    optionWhenPart1CompletedId?: SortOrderInput | SortOrder
    part2Completed?: SortOrderInput | SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
    ChallengeModifier?: ChallengeModifierOrderByWithRelationInput
    Game?: GameOrderByWithRelationInput
    ModifierOption?: ModifierOptionOrderByWithRelationInput
    ModifierWhenPart1Completed?: ChallengeModifierOrderByWithRelationInput
    OptionWhenPart1Completed?: ModifierOptionOrderByWithRelationInput
    ExcludedChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    EncludedCustomChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
  }

  export type DayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    dateCreated?: DateTimeFilter<"Day"> | Date | string
    gameId?: IntFilter<"Day"> | number
    userId?: StringFilter<"Day"> | string
    gameNumber?: IntFilter<"Day"> | number
    number?: IntFilter<"Day"> | number
    challengeModifierId?: IntNullableFilter<"Day"> | number | null
    modifierOptionId?: IntNullableFilter<"Day"> | number | null
    dateFirstRolled?: DateTimeNullableFilter<"Day"> | Date | string | null
    part1Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    optionWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    part2Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    challengeModifierRerollsUsed?: IntFilter<"Day"> | number
    modifierOptionRerollsUsed?: IntFilter<"Day"> | number
    rerollTokensSpentDuringPart2?: IntFilter<"Day"> | number
    score?: IntFilter<"Day"> | number
    ChallengeModifier?: XOR<ChallengeModifierNullableRelationFilter, ChallengeModifierWhereInput> | null
    Game?: XOR<GameRelationFilter, GameWhereInput>
    ModifierOption?: XOR<ModifierOptionNullableRelationFilter, ModifierOptionWhereInput> | null
    ModifierWhenPart1Completed?: XOR<ChallengeModifierNullableRelationFilter, ChallengeModifierWhereInput> | null
    OptionWhenPart1Completed?: XOR<ModifierOptionNullableRelationFilter, ModifierOptionWhereInput> | null
    ExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    EncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
  }, "id">

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    dateFirstRolled?: SortOrderInput | SortOrder
    part1Completed?: SortOrderInput | SortOrder
    modifierWhenPart1CompletedId?: SortOrderInput | SortOrder
    optionWhenPart1CompletedId?: SortOrderInput | SortOrder
    part2Completed?: SortOrderInput | SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _avg?: DayAvgOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
    _sum?: DaySumOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    OR?: DayScalarWhereWithAggregatesInput[]
    NOT?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Day"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"Day"> | Date | string
    gameId?: IntWithAggregatesFilter<"Day"> | number
    userId?: StringWithAggregatesFilter<"Day"> | string
    gameNumber?: IntWithAggregatesFilter<"Day"> | number
    number?: IntWithAggregatesFilter<"Day"> | number
    challengeModifierId?: IntNullableWithAggregatesFilter<"Day"> | number | null
    modifierOptionId?: IntNullableWithAggregatesFilter<"Day"> | number | null
    dateFirstRolled?: DateTimeNullableWithAggregatesFilter<"Day"> | Date | string | null
    part1Completed?: DateTimeNullableWithAggregatesFilter<"Day"> | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableWithAggregatesFilter<"Day"> | number | null
    optionWhenPart1CompletedId?: IntNullableWithAggregatesFilter<"Day"> | number | null
    part2Completed?: DateTimeNullableWithAggregatesFilter<"Day"> | Date | string | null
    challengeModifierRerollsUsed?: IntWithAggregatesFilter<"Day"> | number
    modifierOptionRerollsUsed?: IntWithAggregatesFilter<"Day"> | number
    rerollTokensSpentDuringPart2?: IntWithAggregatesFilter<"Day"> | number
    score?: IntWithAggregatesFilter<"Day"> | number
  }

  export type ChallengeModifierWhereInput = {
    AND?: ChallengeModifierWhereInput | ChallengeModifierWhereInput[]
    OR?: ChallengeModifierWhereInput[]
    NOT?: ChallengeModifierWhereInput | ChallengeModifierWhereInput[]
    id?: IntFilter<"ChallengeModifier"> | number
    dateCreated?: DateTimeFilter<"ChallengeModifier"> | Date | string
    name?: StringFilter<"ChallengeModifier"> | string
    text?: StringFilter<"ChallengeModifier"> | string
    hasOptions?: BoolFilter<"ChallengeModifier"> | boolean
    explanatoryUrl?: StringNullableFilter<"ChallengeModifier"> | string | null
    standard?: BoolFilter<"ChallengeModifier"> | boolean
    createdById?: StringNullableFilter<"ChallengeModifier"> | string | null
    isPublic?: BoolFilter<"ChallengeModifier"> | boolean
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Day?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
    ModifierOption?: ModifierOptionListRelationFilter
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ModifierPackExcluded?: DayListRelationFilter
    ModifierPackIncluded?: DayListRelationFilter
  }

  export type ChallengeModifierOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    Day?: DayOrderByRelationAggregateInput
    DayCompletedInPart1?: DayOrderByRelationAggregateInput
    ModifierOption?: ModifierOptionOrderByRelationAggregateInput
    UserExcluded?: UserOrderByRelationAggregateInput
    UserIncluded?: UserOrderByRelationAggregateInput
    ModifierPackExcluded?: DayOrderByRelationAggregateInput
    ModifierPackIncluded?: DayOrderByRelationAggregateInput
  }

  export type ChallengeModifierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ChallengeModifierWhereInput | ChallengeModifierWhereInput[]
    OR?: ChallengeModifierWhereInput[]
    NOT?: ChallengeModifierWhereInput | ChallengeModifierWhereInput[]
    dateCreated?: DateTimeFilter<"ChallengeModifier"> | Date | string
    text?: StringFilter<"ChallengeModifier"> | string
    hasOptions?: BoolFilter<"ChallengeModifier"> | boolean
    explanatoryUrl?: StringNullableFilter<"ChallengeModifier"> | string | null
    standard?: BoolFilter<"ChallengeModifier"> | boolean
    createdById?: StringNullableFilter<"ChallengeModifier"> | string | null
    isPublic?: BoolFilter<"ChallengeModifier"> | boolean
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Day?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
    ModifierOption?: ModifierOptionListRelationFilter
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ModifierPackExcluded?: DayListRelationFilter
    ModifierPackIncluded?: DayListRelationFilter
  }, "id" | "name">

  export type ChallengeModifierOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    _count?: ChallengeModifierCountOrderByAggregateInput
    _avg?: ChallengeModifierAvgOrderByAggregateInput
    _max?: ChallengeModifierMaxOrderByAggregateInput
    _min?: ChallengeModifierMinOrderByAggregateInput
    _sum?: ChallengeModifierSumOrderByAggregateInput
  }

  export type ChallengeModifierScalarWhereWithAggregatesInput = {
    AND?: ChallengeModifierScalarWhereWithAggregatesInput | ChallengeModifierScalarWhereWithAggregatesInput[]
    OR?: ChallengeModifierScalarWhereWithAggregatesInput[]
    NOT?: ChallengeModifierScalarWhereWithAggregatesInput | ChallengeModifierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChallengeModifier"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"ChallengeModifier"> | Date | string
    name?: StringWithAggregatesFilter<"ChallengeModifier"> | string
    text?: StringWithAggregatesFilter<"ChallengeModifier"> | string
    hasOptions?: BoolWithAggregatesFilter<"ChallengeModifier"> | boolean
    explanatoryUrl?: StringNullableWithAggregatesFilter<"ChallengeModifier"> | string | null
    standard?: BoolWithAggregatesFilter<"ChallengeModifier"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"ChallengeModifier"> | string | null
    isPublic?: BoolWithAggregatesFilter<"ChallengeModifier"> | boolean
  }

  export type ModifierOptionWhereInput = {
    AND?: ModifierOptionWhereInput | ModifierOptionWhereInput[]
    OR?: ModifierOptionWhereInput[]
    NOT?: ModifierOptionWhereInput | ModifierOptionWhereInput[]
    id?: IntFilter<"ModifierOption"> | number
    dateCreated?: DateTimeFilter<"ModifierOption"> | Date | string
    challengeModifierId?: IntFilter<"ModifierOption"> | number
    name?: StringFilter<"ModifierOption"> | string
    text?: StringFilter<"ModifierOption"> | string
    shortText?: StringNullableFilter<"ModifierOption"> | string | null
    explanatoryUrl?: StringNullableFilter<"ModifierOption"> | string | null
    standard?: BoolFilter<"ModifierOption"> | boolean
    createdById?: StringNullableFilter<"ModifierOption"> | string | null
    isPublic?: BoolFilter<"ModifierOption"> | boolean
    Day?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
    ChallengeModifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput>
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ExcludedModifierOptions?: ModifierPackListRelationFilter
    IncludedCustomModifierOptions?: ModifierPackListRelationFilter
  }

  export type ModifierOptionOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    shortText?: SortOrderInput | SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    Day?: DayOrderByRelationAggregateInput
    DayCompletedInPart1?: DayOrderByRelationAggregateInput
    ChallengeModifier?: ChallengeModifierOrderByWithRelationInput
    CreatedBy?: UserOrderByWithRelationInput
    UserExcluded?: UserOrderByRelationAggregateInput
    UserIncluded?: UserOrderByRelationAggregateInput
    ExcludedModifierOptions?: ModifierPackOrderByRelationAggregateInput
    IncludedCustomModifierOptions?: ModifierPackOrderByRelationAggregateInput
  }

  export type ModifierOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ModifierOptionWhereInput | ModifierOptionWhereInput[]
    OR?: ModifierOptionWhereInput[]
    NOT?: ModifierOptionWhereInput | ModifierOptionWhereInput[]
    dateCreated?: DateTimeFilter<"ModifierOption"> | Date | string
    challengeModifierId?: IntFilter<"ModifierOption"> | number
    text?: StringFilter<"ModifierOption"> | string
    shortText?: StringNullableFilter<"ModifierOption"> | string | null
    explanatoryUrl?: StringNullableFilter<"ModifierOption"> | string | null
    standard?: BoolFilter<"ModifierOption"> | boolean
    createdById?: StringNullableFilter<"ModifierOption"> | string | null
    isPublic?: BoolFilter<"ModifierOption"> | boolean
    Day?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
    ChallengeModifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput>
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ExcludedModifierOptions?: ModifierPackListRelationFilter
    IncludedCustomModifierOptions?: ModifierPackListRelationFilter
  }, "id" | "name">

  export type ModifierOptionOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    shortText?: SortOrderInput | SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    _count?: ModifierOptionCountOrderByAggregateInput
    _avg?: ModifierOptionAvgOrderByAggregateInput
    _max?: ModifierOptionMaxOrderByAggregateInput
    _min?: ModifierOptionMinOrderByAggregateInput
    _sum?: ModifierOptionSumOrderByAggregateInput
  }

  export type ModifierOptionScalarWhereWithAggregatesInput = {
    AND?: ModifierOptionScalarWhereWithAggregatesInput | ModifierOptionScalarWhereWithAggregatesInput[]
    OR?: ModifierOptionScalarWhereWithAggregatesInput[]
    NOT?: ModifierOptionScalarWhereWithAggregatesInput | ModifierOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModifierOption"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"ModifierOption"> | Date | string
    challengeModifierId?: IntWithAggregatesFilter<"ModifierOption"> | number
    name?: StringWithAggregatesFilter<"ModifierOption"> | string
    text?: StringWithAggregatesFilter<"ModifierOption"> | string
    shortText?: StringNullableWithAggregatesFilter<"ModifierOption"> | string | null
    explanatoryUrl?: StringNullableWithAggregatesFilter<"ModifierOption"> | string | null
    standard?: BoolWithAggregatesFilter<"ModifierOption"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"ModifierOption"> | string | null
    isPublic?: BoolWithAggregatesFilter<"ModifierOption"> | boolean
  }

  export type ModifierPackWhereInput = {
    AND?: ModifierPackWhereInput | ModifierPackWhereInput[]
    OR?: ModifierPackWhereInput[]
    NOT?: ModifierPackWhereInput | ModifierPackWhereInput[]
    id?: IntFilter<"ModifierPack"> | number
    dateCreated?: DateTimeFilter<"ModifierPack"> | Date | string
    createdById?: StringNullableFilter<"ModifierPack"> | string | null
    isPublic?: BoolFilter<"ModifierPack"> | boolean
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    ExcludedFromDay?: ModifierOptionListRelationFilter
    IncludedInDay?: ModifierOptionListRelationFilter
  }

  export type ModifierPackOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    ExcludedFromDay?: ModifierOptionOrderByRelationAggregateInput
    IncludedInDay?: ModifierOptionOrderByRelationAggregateInput
  }

  export type ModifierPackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModifierPackWhereInput | ModifierPackWhereInput[]
    OR?: ModifierPackWhereInput[]
    NOT?: ModifierPackWhereInput | ModifierPackWhereInput[]
    dateCreated?: DateTimeFilter<"ModifierPack"> | Date | string
    createdById?: StringNullableFilter<"ModifierPack"> | string | null
    isPublic?: BoolFilter<"ModifierPack"> | boolean
    CreatedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    ExcludedFromDay?: ModifierOptionListRelationFilter
    IncludedInDay?: ModifierOptionListRelationFilter
  }, "id">

  export type ModifierPackOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    _count?: ModifierPackCountOrderByAggregateInput
    _avg?: ModifierPackAvgOrderByAggregateInput
    _max?: ModifierPackMaxOrderByAggregateInput
    _min?: ModifierPackMinOrderByAggregateInput
    _sum?: ModifierPackSumOrderByAggregateInput
  }

  export type ModifierPackScalarWhereWithAggregatesInput = {
    AND?: ModifierPackScalarWhereWithAggregatesInput | ModifierPackScalarWhereWithAggregatesInput[]
    OR?: ModifierPackScalarWhereWithAggregatesInput[]
    NOT?: ModifierPackScalarWhereWithAggregatesInput | ModifierPackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModifierPack"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"ModifierPack"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"ModifierPack"> | string | null
    isPublic?: BoolWithAggregatesFilter<"ModifierPack"> | boolean
  }

  export type UpvoteWhereInput = {
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    id?: IntFilter<"Upvote"> | number
    note?: StringNullableFilter<"Upvote"> | string | null
    dateCreated?: DateTimeFilter<"Upvote"> | Date | string
    gameId?: IntFilter<"Upvote"> | number
    createdById?: StringFilter<"Upvote"> | string
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput>
    Game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type UpvoteOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    Game?: GameOrderByWithRelationInput
  }

  export type UpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    note?: StringNullableFilter<"Upvote"> | string | null
    dateCreated?: DateTimeFilter<"Upvote"> | Date | string
    gameId?: IntFilter<"Upvote"> | number
    createdById?: StringFilter<"Upvote"> | string
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput>
    Game?: XOR<GameRelationFilter, GameWhereInput>
  }, "id">

  export type UpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
    _count?: UpvoteCountOrderByAggregateInput
    _avg?: UpvoteAvgOrderByAggregateInput
    _max?: UpvoteMaxOrderByAggregateInput
    _min?: UpvoteMinOrderByAggregateInput
    _sum?: UpvoteSumOrderByAggregateInput
  }

  export type UpvoteScalarWhereWithAggregatesInput = {
    AND?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    OR?: UpvoteScalarWhereWithAggregatesInput[]
    NOT?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Upvote"> | number
    note?: StringNullableWithAggregatesFilter<"Upvote"> | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"Upvote"> | Date | string
    gameId?: IntWithAggregatesFilter<"Upvote"> | number
    createdById?: StringWithAggregatesFilter<"Upvote"> | string
  }

  export type DownvoteWhereInput = {
    AND?: DownvoteWhereInput | DownvoteWhereInput[]
    OR?: DownvoteWhereInput[]
    NOT?: DownvoteWhereInput | DownvoteWhereInput[]
    id?: IntFilter<"Downvote"> | number
    note?: StringFilter<"Downvote"> | string
    dateCreated?: DateTimeFilter<"Downvote"> | Date | string
    gameId?: IntFilter<"Downvote"> | number
    createdById?: StringFilter<"Downvote"> | string
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput>
    Game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type DownvoteOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    Game?: GameOrderByWithRelationInput
  }

  export type DownvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DownvoteWhereInput | DownvoteWhereInput[]
    OR?: DownvoteWhereInput[]
    NOT?: DownvoteWhereInput | DownvoteWhereInput[]
    note?: StringFilter<"Downvote"> | string
    dateCreated?: DateTimeFilter<"Downvote"> | Date | string
    gameId?: IntFilter<"Downvote"> | number
    createdById?: StringFilter<"Downvote"> | string
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput>
    Game?: XOR<GameRelationFilter, GameWhereInput>
  }, "id">

  export type DownvoteOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
    _count?: DownvoteCountOrderByAggregateInput
    _avg?: DownvoteAvgOrderByAggregateInput
    _max?: DownvoteMaxOrderByAggregateInput
    _min?: DownvoteMinOrderByAggregateInput
    _sum?: DownvoteSumOrderByAggregateInput
  }

  export type DownvoteScalarWhereWithAggregatesInput = {
    AND?: DownvoteScalarWhereWithAggregatesInput | DownvoteScalarWhereWithAggregatesInput[]
    OR?: DownvoteScalarWhereWithAggregatesInput[]
    NOT?: DownvoteScalarWhereWithAggregatesInput | DownvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Downvote"> | number
    note?: StringWithAggregatesFilter<"Downvote"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"Downvote"> | Date | string
    gameId?: IntWithAggregatesFilter<"Downvote"> | number
    createdById?: StringWithAggregatesFilter<"Downvote"> | string
  }

  export type UserCreateInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type PublicProfileCreateInput = {
    dateCreated?: Date | string
    name: string
    Game?: GameCreateNestedManyWithoutPublicProfileInput
    User: UserCreateNestedOneWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
    Game?: GameUncheckedCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Game?: GameUpdateManyWithoutPublicProfileNestedInput
    User?: UserUpdateOneRequiredWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
  }

  export type PublicProfileUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublicProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
  }

  export type GameUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleCreateInput = {
    name: string
    minimumScore: number
    Game?: GameCreateNestedManyWithoutTitleInput
  }

  export type TitleUncheckedCreateInput = {
    id?: number
    name: string
    minimumScore: number
    Game?: GameUncheckedCreateNestedManyWithoutTitleInput
  }

  export type TitleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutTitleNestedInput
  }

  export type TitleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutTitleNestedInput
  }

  export type TitleCreateManyInput = {
    id?: number
    name: string
    minimumScore: number
  }

  export type TitleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type TitleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type DayUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeModifierCreateInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
  }

  export type ChallengeModifierUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionCreateInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
  }

  export type ModifierOptionUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackCreateInput = {
    dateCreated?: Date | string
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
    ExcludedFromDay?: ModifierOptionCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: ModifierOptionCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    isPublic?: boolean
    ExcludedFromDay?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
    ExcludedFromDay?: ModifierOptionUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: ModifierOptionUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ExcludedFromDay?: ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    isPublic?: boolean
  }

  export type ModifierPackUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UpvoteCreateInput = {
    note?: string | null
    dateCreated?: Date | string
    CreatedBy: UserCreateNestedOneWithoutUpvoteInput
    Game: GameCreateNestedOneWithoutUpvoteInput
  }

  export type UpvoteUncheckedCreateInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    gameId: number
    createdById: string
  }

  export type UpvoteUpdateInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutUpvoteNestedInput
    Game?: GameUpdateOneRequiredWithoutUpvoteNestedInput
  }

  export type UpvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UpvoteCreateManyInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    gameId: number
    createdById: string
  }

  export type UpvoteUpdateManyMutationInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DownvoteCreateInput = {
    note: string
    dateCreated?: Date | string
    CreatedBy: UserCreateNestedOneWithoutDownvoteInput
    Game: GameCreateNestedOneWithoutDownvoteInput
  }

  export type DownvoteUncheckedCreateInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    gameId: number
    createdById: string
  }

  export type DownvoteUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutDownvoteNestedInput
    Game?: GameUpdateOneRequiredWithoutDownvoteNestedInput
  }

  export type DownvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DownvoteCreateManyInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    gameId: number
    createdById: string
  }

  export type DownvoteUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChallengeModifierListRelationFilter = {
    every?: ChallengeModifierWhereInput
    some?: ChallengeModifierWhereInput
    none?: ChallengeModifierWhereInput
  }

  export type DownvoteListRelationFilter = {
    every?: DownvoteWhereInput
    some?: DownvoteWhereInput
    none?: DownvoteWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type ModifierOptionListRelationFilter = {
    every?: ModifierOptionWhereInput
    some?: ModifierOptionWhereInput
    none?: ModifierOptionWhereInput
  }

  export type ModifierPackListRelationFilter = {
    every?: ModifierPackWhereInput
    some?: ModifierPackWhereInput
    none?: ModifierPackWhereInput
  }

  export type PublicProfileListRelationFilter = {
    every?: PublicProfileWhereInput
    some?: PublicProfileWhereInput
    none?: PublicProfileWhereInput
  }

  export type UpvoteListRelationFilter = {
    every?: UpvoteWhereInput
    some?: UpvoteWhereInput
    none?: UpvoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChallengeModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DownvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierPackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    oauthUrl?: SortOrder
    oauthUsername?: SortOrder
    oauthName?: SortOrder
    oauthAvatarUrl?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    numberOfGames?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    oauthUrl?: SortOrder
    oauthUsername?: SortOrder
    oauthName?: SortOrder
    oauthAvatarUrl?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    oauthUrl?: SortOrder
    oauthUsername?: SortOrder
    oauthName?: SortOrder
    oauthAvatarUrl?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    numberOfGames?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PublicProfileCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type PublicProfileNullableRelationFilter = {
    is?: PublicProfileWhereInput | null
    isNot?: PublicProfileWhereInput | null
  }

  export type TitleNullableRelationFilter = {
    is?: TitleWhereInput | null
    isNot?: TitleWhereInput | null
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    isPublic?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    titleId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    titleId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    isPublic?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    titleId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    isPublic?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    titleId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    rerollTokensSpentDuringPart2Raw?: SortOrder
    part2RerollBonus?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    titleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TitleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type TitleAvgOrderByAggregateInput = {
    id?: SortOrder
    minimumScore?: SortOrder
  }

  export type TitleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type TitleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type TitleSumOrderByAggregateInput = {
    id?: SortOrder
    minimumScore?: SortOrder
  }

  export type ChallengeModifierNullableRelationFilter = {
    is?: ChallengeModifierWhereInput | null
    isNot?: ChallengeModifierWhereInput | null
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type ModifierOptionNullableRelationFilter = {
    is?: ModifierOptionWhereInput | null
    isNot?: ModifierOptionWhereInput | null
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    score?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeModifierCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ChallengeModifierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChallengeModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ChallengeModifierMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ChallengeModifierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChallengeModifierRelationFilter = {
    is?: ChallengeModifierWhereInput
    isNot?: ChallengeModifierWhereInput
  }

  export type ModifierOptionCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    shortText?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    shortText?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierOptionMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    shortText?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierOptionSumOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierPackCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierPackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModifierPackMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierPackMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    isPublic?: SortOrder
  }

  export type ModifierPackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type UpvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type UpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type UpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type UpvoteSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type DownvoteCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type DownvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type DownvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type DownvoteMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    createdById?: SortOrder
  }

  export type DownvoteSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type ChallengeModifierCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput> | ChallengeModifierCreateWithoutCreatedByInput[] | ChallengeModifierUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutCreatedByInput | ChallengeModifierCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type DownvoteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput> | DownvoteCreateWithoutCreatedByInput[] | DownvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutCreatedByInput | DownvoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: DownvoteCreateManyCreatedByInputEnvelope
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type ModifierOptionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput> | ModifierOptionCreateWithoutCreatedByInput[] | ModifierOptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutCreatedByInput | ModifierOptionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ModifierPackCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput> | ModifierPackCreateWithoutCreatedByInput[] | ModifierPackUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutCreatedByInput | ModifierPackCreateOrConnectWithoutCreatedByInput[]
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type PublicProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput> | PublicProfileCreateWithoutUserInput[] | PublicProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicProfileCreateOrConnectWithoutUserInput | PublicProfileCreateOrConnectWithoutUserInput[]
    createMany?: PublicProfileCreateManyUserInputEnvelope
    connect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
  }

  export type UpvoteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput> | UpvoteCreateWithoutCreatedByInput[] | UpvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutCreatedByInput | UpvoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: UpvoteCreateManyCreatedByInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type ChallengeModifierCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput> | ChallengeModifierCreateWithoutUserExcludedInput[] | ChallengeModifierUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserExcludedInput | ChallengeModifierCreateOrConnectWithoutUserExcludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ModifierOptionCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput> | ModifierOptionCreateWithoutUserExcludedInput[] | ModifierOptionUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserExcludedInput | ModifierOptionCreateOrConnectWithoutUserExcludedInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ChallengeModifierCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput> | ChallengeModifierCreateWithoutUserIncludedInput[] | ChallengeModifierUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserIncludedInput | ChallengeModifierCreateOrConnectWithoutUserIncludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ModifierOptionCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput> | ModifierOptionCreateWithoutUserIncludedInput[] | ModifierOptionUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserIncludedInput | ModifierOptionCreateOrConnectWithoutUserIncludedInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput> | ChallengeModifierCreateWithoutCreatedByInput[] | ChallengeModifierUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutCreatedByInput | ChallengeModifierCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type DownvoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput> | DownvoteCreateWithoutCreatedByInput[] | DownvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutCreatedByInput | DownvoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: DownvoteCreateManyCreatedByInputEnvelope
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput> | ModifierOptionCreateWithoutCreatedByInput[] | ModifierOptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutCreatedByInput | ModifierOptionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput> | ModifierPackCreateWithoutCreatedByInput[] | ModifierPackUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutCreatedByInput | ModifierPackCreateOrConnectWithoutCreatedByInput[]
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type PublicProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput> | PublicProfileCreateWithoutUserInput[] | PublicProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicProfileCreateOrConnectWithoutUserInput | PublicProfileCreateOrConnectWithoutUserInput[]
    createMany?: PublicProfileCreateManyUserInputEnvelope
    connect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
  }

  export type UpvoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput> | UpvoteCreateWithoutCreatedByInput[] | UpvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutCreatedByInput | UpvoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: UpvoteCreateManyCreatedByInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput> | ChallengeModifierCreateWithoutUserExcludedInput[] | ChallengeModifierUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserExcludedInput | ChallengeModifierCreateOrConnectWithoutUserExcludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput> | ModifierOptionCreateWithoutUserExcludedInput[] | ModifierOptionUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserExcludedInput | ModifierOptionCreateOrConnectWithoutUserExcludedInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput> | ChallengeModifierCreateWithoutUserIncludedInput[] | ChallengeModifierUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserIncludedInput | ChallengeModifierCreateOrConnectWithoutUserIncludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput> | ModifierOptionCreateWithoutUserIncludedInput[] | ModifierOptionUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserIncludedInput | ModifierOptionCreateOrConnectWithoutUserIncludedInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChallengeModifierUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput> | ChallengeModifierCreateWithoutCreatedByInput[] | ChallengeModifierUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutCreatedByInput | ChallengeModifierCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput | ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput | ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput | ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type DownvoteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput> | DownvoteCreateWithoutCreatedByInput[] | DownvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutCreatedByInput | DownvoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: DownvoteUpsertWithWhereUniqueWithoutCreatedByInput | DownvoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DownvoteCreateManyCreatedByInputEnvelope
    set?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    disconnect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    delete?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    update?: DownvoteUpdateWithWhereUniqueWithoutCreatedByInput | DownvoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DownvoteUpdateManyWithWhereWithoutCreatedByInput | DownvoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
  }

  export type GameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type ModifierOptionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput> | ModifierOptionCreateWithoutCreatedByInput[] | ModifierOptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutCreatedByInput | ModifierOptionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput | ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput | ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutCreatedByInput | ModifierOptionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ModifierPackUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput> | ModifierPackCreateWithoutCreatedByInput[] | ModifierPackUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutCreatedByInput | ModifierPackCreateOrConnectWithoutCreatedByInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput | ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput | ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutCreatedByInput | ModifierPackUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type PublicProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput> | PublicProfileCreateWithoutUserInput[] | PublicProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicProfileCreateOrConnectWithoutUserInput | PublicProfileCreateOrConnectWithoutUserInput[]
    upsert?: PublicProfileUpsertWithWhereUniqueWithoutUserInput | PublicProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PublicProfileCreateManyUserInputEnvelope
    set?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    disconnect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    delete?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    connect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    update?: PublicProfileUpdateWithWhereUniqueWithoutUserInput | PublicProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PublicProfileUpdateManyWithWhereWithoutUserInput | PublicProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PublicProfileScalarWhereInput | PublicProfileScalarWhereInput[]
  }

  export type UpvoteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput> | UpvoteCreateWithoutCreatedByInput[] | UpvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutCreatedByInput | UpvoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutCreatedByInput | UpvoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UpvoteCreateManyCreatedByInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutCreatedByInput | UpvoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutCreatedByInput | UpvoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type ChallengeModifierUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput> | ChallengeModifierCreateWithoutUserExcludedInput[] | ChallengeModifierUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserExcludedInput | ChallengeModifierCreateOrConnectWithoutUserExcludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput | ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ModifierOptionUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput> | ModifierOptionCreateWithoutUserExcludedInput[] | ModifierOptionUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserExcludedInput | ModifierOptionCreateOrConnectWithoutUserExcludedInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput | ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput | ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput | ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ChallengeModifierUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput> | ChallengeModifierCreateWithoutUserIncludedInput[] | ChallengeModifierUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserIncludedInput | ChallengeModifierCreateOrConnectWithoutUserIncludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput | ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ModifierOptionUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput> | ModifierOptionCreateWithoutUserIncludedInput[] | ModifierOptionUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserIncludedInput | ModifierOptionCreateOrConnectWithoutUserIncludedInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput | ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput | ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput | ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput> | ChallengeModifierCreateWithoutCreatedByInput[] | ChallengeModifierUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutCreatedByInput | ChallengeModifierCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput | ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput | ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput | ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput> | DownvoteCreateWithoutCreatedByInput[] | DownvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutCreatedByInput | DownvoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: DownvoteUpsertWithWhereUniqueWithoutCreatedByInput | DownvoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DownvoteCreateManyCreatedByInputEnvelope
    set?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    disconnect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    delete?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    update?: DownvoteUpdateWithWhereUniqueWithoutCreatedByInput | DownvoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DownvoteUpdateManyWithWhereWithoutCreatedByInput | DownvoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput> | ModifierOptionCreateWithoutCreatedByInput[] | ModifierOptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutCreatedByInput | ModifierOptionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput | ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput | ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutCreatedByInput | ModifierOptionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput> | ModifierPackCreateWithoutCreatedByInput[] | ModifierPackUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutCreatedByInput | ModifierPackCreateOrConnectWithoutCreatedByInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput | ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput | ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutCreatedByInput | ModifierPackUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type PublicProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput> | PublicProfileCreateWithoutUserInput[] | PublicProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicProfileCreateOrConnectWithoutUserInput | PublicProfileCreateOrConnectWithoutUserInput[]
    upsert?: PublicProfileUpsertWithWhereUniqueWithoutUserInput | PublicProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PublicProfileCreateManyUserInputEnvelope
    set?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    disconnect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    delete?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    connect?: PublicProfileWhereUniqueInput | PublicProfileWhereUniqueInput[]
    update?: PublicProfileUpdateWithWhereUniqueWithoutUserInput | PublicProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PublicProfileUpdateManyWithWhereWithoutUserInput | PublicProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PublicProfileScalarWhereInput | PublicProfileScalarWhereInput[]
  }

  export type UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput> | UpvoteCreateWithoutCreatedByInput[] | UpvoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutCreatedByInput | UpvoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutCreatedByInput | UpvoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UpvoteCreateManyCreatedByInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutCreatedByInput | UpvoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutCreatedByInput | UpvoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput> | ChallengeModifierCreateWithoutUserExcludedInput[] | ChallengeModifierUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserExcludedInput | ChallengeModifierCreateOrConnectWithoutUserExcludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput | ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput> | ModifierOptionCreateWithoutUserExcludedInput[] | ModifierOptionUncheckedCreateWithoutUserExcludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserExcludedInput | ModifierOptionCreateOrConnectWithoutUserExcludedInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput | ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput | ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput | ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput> | ChallengeModifierCreateWithoutUserIncludedInput[] | ChallengeModifierUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutUserIncludedInput | ChallengeModifierCreateOrConnectWithoutUserIncludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput | ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput> | ModifierOptionCreateWithoutUserIncludedInput[] | ModifierOptionUncheckedCreateWithoutUserIncludedInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutUserIncludedInput | ModifierOptionCreateOrConnectWithoutUserIncludedInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput | ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput | ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput | ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutPublicProfileInput = {
    create?: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput> | GameCreateWithoutPublicProfileInput[] | GameUncheckedCreateWithoutPublicProfileInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPublicProfileInput | GameCreateOrConnectWithoutPublicProfileInput[]
    createMany?: GameCreateManyPublicProfileInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPublicProfileInput = {
    create?: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicProfileInput
    connect?: UserWhereUniqueInput
  }

  export type GameUncheckedCreateNestedManyWithoutPublicProfileInput = {
    create?: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput> | GameCreateWithoutPublicProfileInput[] | GameUncheckedCreateWithoutPublicProfileInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPublicProfileInput | GameCreateOrConnectWithoutPublicProfileInput[]
    createMany?: GameCreateManyPublicProfileInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutPublicProfileNestedInput = {
    create?: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput> | GameCreateWithoutPublicProfileInput[] | GameUncheckedCreateWithoutPublicProfileInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPublicProfileInput | GameCreateOrConnectWithoutPublicProfileInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPublicProfileInput | GameUpsertWithWhereUniqueWithoutPublicProfileInput[]
    createMany?: GameCreateManyPublicProfileInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPublicProfileInput | GameUpdateWithWhereUniqueWithoutPublicProfileInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPublicProfileInput | GameUpdateManyWithWhereWithoutPublicProfileInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPublicProfileNestedInput = {
    create?: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicProfileInput
    upsert?: UserUpsertWithoutPublicProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublicProfileInput, UserUpdateWithoutPublicProfileInput>, UserUncheckedUpdateWithoutPublicProfileInput>
  }

  export type GameUncheckedUpdateManyWithoutPublicProfileNestedInput = {
    create?: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput> | GameCreateWithoutPublicProfileInput[] | GameUncheckedCreateWithoutPublicProfileInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPublicProfileInput | GameCreateOrConnectWithoutPublicProfileInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPublicProfileInput | GameUpsertWithWhereUniqueWithoutPublicProfileInput[]
    createMany?: GameCreateManyPublicProfileInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPublicProfileInput | GameUpdateWithWhereUniqueWithoutPublicProfileInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPublicProfileInput | GameUpdateManyWithWhereWithoutPublicProfileInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type DayCreateNestedManyWithoutGameInput = {
    create?: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput> | DayCreateWithoutGameInput[] | DayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGameInput | DayCreateOrConnectWithoutGameInput[]
    createMany?: DayCreateManyGameInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DownvoteCreateNestedManyWithoutGameInput = {
    create?: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput> | DownvoteCreateWithoutGameInput[] | DownvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutGameInput | DownvoteCreateOrConnectWithoutGameInput[]
    createMany?: DownvoteCreateManyGameInputEnvelope
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
  }

  export type PublicProfileCreateNestedOneWithoutGameInput = {
    create?: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
    connectOrCreate?: PublicProfileCreateOrConnectWithoutGameInput
    connect?: PublicProfileWhereUniqueInput
  }

  export type TitleCreateNestedOneWithoutGameInput = {
    create?: XOR<TitleCreateWithoutGameInput, TitleUncheckedCreateWithoutGameInput>
    connectOrCreate?: TitleCreateOrConnectWithoutGameInput
    connect?: TitleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameInput = {
    create?: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameInput
    connect?: UserWhereUniqueInput
  }

  export type UpvoteCreateNestedManyWithoutGameInput = {
    create?: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput> | UpvoteCreateWithoutGameInput[] | UpvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutGameInput | UpvoteCreateOrConnectWithoutGameInput[]
    createMany?: UpvoteCreateManyGameInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput> | DayCreateWithoutGameInput[] | DayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGameInput | DayCreateOrConnectWithoutGameInput[]
    createMany?: DayCreateManyGameInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DownvoteUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput> | DownvoteCreateWithoutGameInput[] | DownvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutGameInput | DownvoteCreateOrConnectWithoutGameInput[]
    createMany?: DownvoteCreateManyGameInputEnvelope
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
  }

  export type UpvoteUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput> | UpvoteCreateWithoutGameInput[] | UpvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutGameInput | UpvoteCreateOrConnectWithoutGameInput[]
    createMany?: UpvoteCreateManyGameInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DayUpdateManyWithoutGameNestedInput = {
    create?: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput> | DayCreateWithoutGameInput[] | DayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGameInput | DayCreateOrConnectWithoutGameInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutGameInput | DayUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: DayCreateManyGameInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutGameInput | DayUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: DayUpdateManyWithWhereWithoutGameInput | DayUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DownvoteUpdateManyWithoutGameNestedInput = {
    create?: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput> | DownvoteCreateWithoutGameInput[] | DownvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutGameInput | DownvoteCreateOrConnectWithoutGameInput[]
    upsert?: DownvoteUpsertWithWhereUniqueWithoutGameInput | DownvoteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: DownvoteCreateManyGameInputEnvelope
    set?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    disconnect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    delete?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    update?: DownvoteUpdateWithWhereUniqueWithoutGameInput | DownvoteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: DownvoteUpdateManyWithWhereWithoutGameInput | DownvoteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
  }

  export type PublicProfileUpdateOneWithoutGameNestedInput = {
    create?: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
    connectOrCreate?: PublicProfileCreateOrConnectWithoutGameInput
    upsert?: PublicProfileUpsertWithoutGameInput
    disconnect?: PublicProfileWhereInput | boolean
    delete?: PublicProfileWhereInput | boolean
    connect?: PublicProfileWhereUniqueInput
    update?: XOR<XOR<PublicProfileUpdateToOneWithWhereWithoutGameInput, PublicProfileUpdateWithoutGameInput>, PublicProfileUncheckedUpdateWithoutGameInput>
  }

  export type TitleUpdateOneWithoutGameNestedInput = {
    create?: XOR<TitleCreateWithoutGameInput, TitleUncheckedCreateWithoutGameInput>
    connectOrCreate?: TitleCreateOrConnectWithoutGameInput
    upsert?: TitleUpsertWithoutGameInput
    disconnect?: TitleWhereInput | boolean
    delete?: TitleWhereInput | boolean
    connect?: TitleWhereUniqueInput
    update?: XOR<XOR<TitleUpdateToOneWithWhereWithoutGameInput, TitleUpdateWithoutGameInput>, TitleUncheckedUpdateWithoutGameInput>
  }

  export type UserUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameInput
    upsert?: UserUpsertWithoutGameInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameInput, UserUpdateWithoutGameInput>, UserUncheckedUpdateWithoutGameInput>
  }

  export type UpvoteUpdateManyWithoutGameNestedInput = {
    create?: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput> | UpvoteCreateWithoutGameInput[] | UpvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutGameInput | UpvoteCreateOrConnectWithoutGameInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutGameInput | UpvoteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UpvoteCreateManyGameInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutGameInput | UpvoteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutGameInput | UpvoteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DayUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput> | DayCreateWithoutGameInput[] | DayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DayCreateOrConnectWithoutGameInput | DayCreateOrConnectWithoutGameInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutGameInput | DayUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: DayCreateManyGameInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutGameInput | DayUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: DayUpdateManyWithWhereWithoutGameInput | DayUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DownvoteUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput> | DownvoteCreateWithoutGameInput[] | DownvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: DownvoteCreateOrConnectWithoutGameInput | DownvoteCreateOrConnectWithoutGameInput[]
    upsert?: DownvoteUpsertWithWhereUniqueWithoutGameInput | DownvoteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: DownvoteCreateManyGameInputEnvelope
    set?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    disconnect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    delete?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    connect?: DownvoteWhereUniqueInput | DownvoteWhereUniqueInput[]
    update?: DownvoteUpdateWithWhereUniqueWithoutGameInput | DownvoteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: DownvoteUpdateManyWithWhereWithoutGameInput | DownvoteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
  }

  export type UpvoteUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput> | UpvoteCreateWithoutGameInput[] | UpvoteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutGameInput | UpvoteCreateOrConnectWithoutGameInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutGameInput | UpvoteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UpvoteCreateManyGameInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutGameInput | UpvoteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutGameInput | UpvoteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutTitleInput = {
    create?: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput> | GameCreateWithoutTitleInput[] | GameUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTitleInput | GameCreateOrConnectWithoutTitleInput[]
    createMany?: GameCreateManyTitleInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutTitleInput = {
    create?: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput> | GameCreateWithoutTitleInput[] | GameUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTitleInput | GameCreateOrConnectWithoutTitleInput[]
    createMany?: GameCreateManyTitleInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutTitleNestedInput = {
    create?: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput> | GameCreateWithoutTitleInput[] | GameUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTitleInput | GameCreateOrConnectWithoutTitleInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTitleInput | GameUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: GameCreateManyTitleInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTitleInput | GameUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTitleInput | GameUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput> | GameCreateWithoutTitleInput[] | GameUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTitleInput | GameCreateOrConnectWithoutTitleInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTitleInput | GameUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: GameCreateManyTitleInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTitleInput | GameUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTitleInput | GameUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type ChallengeModifierCreateNestedOneWithoutDayInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayInput
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutDayInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    connect?: GameWhereUniqueInput
  }

  export type ModifierOptionCreateNestedOneWithoutDayInput = {
    create?: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayInput
    connect?: ModifierOptionWhereUniqueInput
  }

  export type ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input = {
    create?: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input = {
    create?: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input
    connect?: ModifierOptionWhereUniqueInput
  }

  export type ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput> | ChallengeModifierCreateWithoutModifierPackExcludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput> | ChallengeModifierCreateWithoutModifierPackIncludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput> | ChallengeModifierCreateWithoutModifierPackExcludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput> | ChallengeModifierCreateWithoutModifierPackIncludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
  }

  export type ChallengeModifierUpdateOneWithoutDayNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayInput
    upsert?: ChallengeModifierUpsertWithoutDayInput
    disconnect?: ChallengeModifierWhereInput | boolean
    delete?: ChallengeModifierWhereInput | boolean
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<XOR<ChallengeModifierUpdateToOneWithWhereWithoutDayInput, ChallengeModifierUpdateWithoutDayInput>, ChallengeModifierUncheckedUpdateWithoutDayInput>
  }

  export type GameUpdateOneRequiredWithoutDayNestedInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    upsert?: GameUpsertWithoutDayInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutDayInput, GameUpdateWithoutDayInput>, GameUncheckedUpdateWithoutDayInput>
  }

  export type ModifierOptionUpdateOneWithoutDayNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayInput
    upsert?: ModifierOptionUpsertWithoutDayInput
    disconnect?: ModifierOptionWhereInput | boolean
    delete?: ModifierOptionWhereInput | boolean
    connect?: ModifierOptionWhereUniqueInput
    update?: XOR<XOR<ModifierOptionUpdateToOneWithWhereWithoutDayInput, ModifierOptionUpdateWithoutDayInput>, ModifierOptionUncheckedUpdateWithoutDayInput>
  }

  export type ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input
    upsert?: ChallengeModifierUpsertWithoutDayCompletedInPart1Input
    disconnect?: ChallengeModifierWhereInput | boolean
    delete?: ChallengeModifierWhereInput | boolean
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<XOR<ChallengeModifierUpdateToOneWithWhereWithoutDayCompletedInPart1Input, ChallengeModifierUpdateWithoutDayCompletedInPart1Input>, ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput = {
    create?: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input
    upsert?: ModifierOptionUpsertWithoutDayCompletedInPart1Input
    disconnect?: ModifierOptionWhereInput | boolean
    delete?: ModifierOptionWhereInput | boolean
    connect?: ModifierOptionWhereUniqueInput
    update?: XOR<XOR<ModifierOptionUpdateToOneWithWhereWithoutDayCompletedInPart1Input, ModifierOptionUpdateWithoutDayCompletedInPart1Input>, ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput> | ChallengeModifierCreateWithoutModifierPackExcludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput | ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput> | ChallengeModifierCreateWithoutModifierPackIncludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput | ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput> | ChallengeModifierCreateWithoutModifierPackExcludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput | ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput> | ChallengeModifierCreateWithoutModifierPackIncludedInput[] | ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput[]
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput | ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput[]
    upsert?: ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput | ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput[]
    set?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    disconnect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    delete?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    connect?: ChallengeModifierWhereUniqueInput | ChallengeModifierWhereUniqueInput[]
    update?: ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput | ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput[]
    updateMany?: ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput | ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput[]
    deleteMany?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallengeModifierInput = {
    create?: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeModifierInput
    connect?: UserWhereUniqueInput
  }

  export type DayCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput> | DayCreateWithoutChallengeModifierInput[] | DayUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: DayCreateOrConnectWithoutChallengeModifierInput | DayCreateOrConnectWithoutChallengeModifierInput[]
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayCreateNestedManyWithoutModifierWhenPart1CompletedInput = {
    create?: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput> | DayCreateWithoutModifierWhenPart1CompletedInput[] | DayUncheckedCreateWithoutModifierWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierWhenPart1CompletedInput | DayCreateOrConnectWithoutModifierWhenPart1CompletedInput[]
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type ModifierOptionCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput> | ModifierOptionCreateWithoutChallengeModifierInput[] | ModifierOptionUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutChallengeModifierInput | ModifierOptionCreateOrConnectWithoutChallengeModifierInput[]
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput> | UserCreateWithoutDefaultExcludedChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput | UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput> | UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput | UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DayCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput> | DayCreateWithoutExcludedChallengeModifiersInput[] | DayUncheckedCreateWithoutExcludedChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutExcludedChallengeModifiersInput | DayCreateOrConnectWithoutExcludedChallengeModifiersInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput = {
    create?: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput> | DayCreateWithoutEncludedCustomChallengeModifiersInput[] | DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput | DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput> | DayCreateWithoutChallengeModifierInput[] | DayUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: DayCreateOrConnectWithoutChallengeModifierInput | DayCreateOrConnectWithoutChallengeModifierInput[]
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput = {
    create?: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput> | DayCreateWithoutModifierWhenPart1CompletedInput[] | DayUncheckedCreateWithoutModifierWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierWhenPart1CompletedInput | DayCreateOrConnectWithoutModifierWhenPart1CompletedInput[]
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput> | ModifierOptionCreateWithoutChallengeModifierInput[] | ModifierOptionUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutChallengeModifierInput | ModifierOptionCreateOrConnectWithoutChallengeModifierInput[]
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput> | UserCreateWithoutDefaultExcludedChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput | UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput> | UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput | UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput> | DayCreateWithoutExcludedChallengeModifiersInput[] | DayUncheckedCreateWithoutExcludedChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutExcludedChallengeModifiersInput | DayCreateOrConnectWithoutExcludedChallengeModifiersInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput = {
    create?: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput> | DayCreateWithoutEncludedCustomChallengeModifiersInput[] | DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput | DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutChallengeModifierNestedInput = {
    create?: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeModifierInput
    upsert?: UserUpsertWithoutChallengeModifierInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengeModifierInput, UserUpdateWithoutChallengeModifierInput>, UserUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type DayUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput> | DayCreateWithoutChallengeModifierInput[] | DayUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: DayCreateOrConnectWithoutChallengeModifierInput | DayCreateOrConnectWithoutChallengeModifierInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutChallengeModifierInput | DayUpsertWithWhereUniqueWithoutChallengeModifierInput[]
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutChallengeModifierInput | DayUpdateWithWhereUniqueWithoutChallengeModifierInput[]
    updateMany?: DayUpdateManyWithWhereWithoutChallengeModifierInput | DayUpdateManyWithWhereWithoutChallengeModifierInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput = {
    create?: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput> | DayCreateWithoutModifierWhenPart1CompletedInput[] | DayUncheckedCreateWithoutModifierWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierWhenPart1CompletedInput | DayCreateOrConnectWithoutModifierWhenPart1CompletedInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput | DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput[]
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput | DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput[]
    updateMany?: DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput | DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type ModifierOptionUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput> | ModifierOptionCreateWithoutChallengeModifierInput[] | ModifierOptionUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutChallengeModifierInput | ModifierOptionCreateOrConnectWithoutChallengeModifierInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput | ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput[]
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput | ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput | ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput> | UserCreateWithoutDefaultExcludedChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput | UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput | UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput | UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput | UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput> | UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput | UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DayUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput> | DayCreateWithoutExcludedChallengeModifiersInput[] | DayUncheckedCreateWithoutExcludedChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutExcludedChallengeModifiersInput | DayCreateOrConnectWithoutExcludedChallengeModifiersInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput | DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput[]
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput | DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput[]
    updateMany?: DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput | DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput> | DayCreateWithoutEncludedCustomChallengeModifiersInput[] | DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput | DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput | DayUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput[]
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput | DayUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput[]
    updateMany?: DayUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput | DayUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput> | DayCreateWithoutChallengeModifierInput[] | DayUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: DayCreateOrConnectWithoutChallengeModifierInput | DayCreateOrConnectWithoutChallengeModifierInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutChallengeModifierInput | DayUpsertWithWhereUniqueWithoutChallengeModifierInput[]
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutChallengeModifierInput | DayUpdateWithWhereUniqueWithoutChallengeModifierInput[]
    updateMany?: DayUpdateManyWithWhereWithoutChallengeModifierInput | DayUpdateManyWithWhereWithoutChallengeModifierInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput = {
    create?: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput> | DayCreateWithoutModifierWhenPart1CompletedInput[] | DayUncheckedCreateWithoutModifierWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierWhenPart1CompletedInput | DayCreateOrConnectWithoutModifierWhenPart1CompletedInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput | DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput[]
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput | DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput[]
    updateMany?: DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput | DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput> | ModifierOptionCreateWithoutChallengeModifierInput[] | ModifierOptionUncheckedCreateWithoutChallengeModifierInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutChallengeModifierInput | ModifierOptionCreateOrConnectWithoutChallengeModifierInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput | ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput[]
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput | ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput | ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput> | UserCreateWithoutDefaultExcludedChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput | UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput | UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput | UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput | UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput> | UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput | UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput | UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput> | DayCreateWithoutExcludedChallengeModifiersInput[] | DayUncheckedCreateWithoutExcludedChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutExcludedChallengeModifiersInput | DayCreateOrConnectWithoutExcludedChallengeModifiersInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput | DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput[]
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput | DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput[]
    updateMany?: DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput | DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput> | DayCreateWithoutEncludedCustomChallengeModifiersInput[] | DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput[]
    connectOrCreate?: DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput | DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput | DayUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput[]
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput | DayUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput[]
    updateMany?: DayUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput | DayUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput> | DayCreateWithoutModifierOptionInput[] | DayUncheckedCreateWithoutModifierOptionInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierOptionInput | DayCreateOrConnectWithoutModifierOptionInput[]
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayCreateNestedManyWithoutOptionWhenPart1CompletedInput = {
    create?: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput> | DayCreateWithoutOptionWhenPart1CompletedInput[] | DayUncheckedCreateWithoutOptionWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutOptionWhenPart1CompletedInput | DayCreateOrConnectWithoutOptionWhenPart1CompletedInput[]
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type ChallengeModifierCreateNestedOneWithoutModifierOptionInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModifierOptionInput = {
    create?: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierOptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput> | UserCreateWithoutDefaultExcludedModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput | UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput> | UserCreateWithoutDefaultIncludedCustomModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput | UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ModifierPackCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput> | ModifierPackCreateWithoutExcludedFromDayInput[] | ModifierPackUncheckedCreateWithoutExcludedFromDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutExcludedFromDayInput | ModifierPackCreateOrConnectWithoutExcludedFromDayInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type ModifierPackCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput> | ModifierPackCreateWithoutIncludedInDayInput[] | ModifierPackUncheckedCreateWithoutIncludedInDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutIncludedInDayInput | ModifierPackCreateOrConnectWithoutIncludedInDayInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput> | DayCreateWithoutModifierOptionInput[] | DayUncheckedCreateWithoutModifierOptionInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierOptionInput | DayCreateOrConnectWithoutModifierOptionInput[]
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput = {
    create?: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput> | DayCreateWithoutOptionWhenPart1CompletedInput[] | DayUncheckedCreateWithoutOptionWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutOptionWhenPart1CompletedInput | DayCreateOrConnectWithoutOptionWhenPart1CompletedInput[]
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput> | UserCreateWithoutDefaultExcludedModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput | UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput> | UserCreateWithoutDefaultIncludedCustomModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput | UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput> | ModifierPackCreateWithoutExcludedFromDayInput[] | ModifierPackUncheckedCreateWithoutExcludedFromDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutExcludedFromDayInput | ModifierPackCreateOrConnectWithoutExcludedFromDayInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput> | ModifierPackCreateWithoutIncludedInDayInput[] | ModifierPackUncheckedCreateWithoutIncludedInDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutIncludedInDayInput | ModifierPackCreateOrConnectWithoutIncludedInDayInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
  }

  export type DayUpdateManyWithoutModifierOptionNestedInput = {
    create?: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput> | DayCreateWithoutModifierOptionInput[] | DayUncheckedCreateWithoutModifierOptionInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierOptionInput | DayCreateOrConnectWithoutModifierOptionInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutModifierOptionInput | DayUpsertWithWhereUniqueWithoutModifierOptionInput[]
    createMany?: DayCreateManyModifierOptionInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutModifierOptionInput | DayUpdateWithWhereUniqueWithoutModifierOptionInput[]
    updateMany?: DayUpdateManyWithWhereWithoutModifierOptionInput | DayUpdateManyWithWhereWithoutModifierOptionInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput = {
    create?: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput> | DayCreateWithoutOptionWhenPart1CompletedInput[] | DayUncheckedCreateWithoutOptionWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutOptionWhenPart1CompletedInput | DayCreateOrConnectWithoutOptionWhenPart1CompletedInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput | DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput[]
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput | DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput[]
    updateMany?: DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput | DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    upsert?: ChallengeModifierUpsertWithoutModifierOptionInput
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<XOR<ChallengeModifierUpdateToOneWithWhereWithoutModifierOptionInput, ChallengeModifierUpdateWithoutModifierOptionInput>, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
  }

  export type UserUpdateOneWithoutModifierOptionNestedInput = {
    create?: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierOptionInput
    upsert?: UserUpsertWithoutModifierOptionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModifierOptionInput, UserUpdateWithoutModifierOptionInput>, UserUncheckedUpdateWithoutModifierOptionInput>
  }

  export type UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput> | UserCreateWithoutDefaultExcludedModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput | UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput | UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput | UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput | UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput> | UserCreateWithoutDefaultIncludedCustomModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput | UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput | UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput | UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput | UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ModifierPackUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput> | ModifierPackCreateWithoutExcludedFromDayInput[] | ModifierPackUncheckedCreateWithoutExcludedFromDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutExcludedFromDayInput | ModifierPackCreateOrConnectWithoutExcludedFromDayInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutExcludedFromDayInput | ModifierPackUpsertWithWhereUniqueWithoutExcludedFromDayInput[]
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutExcludedFromDayInput | ModifierPackUpdateWithWhereUniqueWithoutExcludedFromDayInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutExcludedFromDayInput | ModifierPackUpdateManyWithWhereWithoutExcludedFromDayInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type ModifierPackUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput> | ModifierPackCreateWithoutIncludedInDayInput[] | ModifierPackUncheckedCreateWithoutIncludedInDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutIncludedInDayInput | ModifierPackCreateOrConnectWithoutIncludedInDayInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutIncludedInDayInput | ModifierPackUpsertWithWhereUniqueWithoutIncludedInDayInput[]
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutIncludedInDayInput | ModifierPackUpdateWithWhereUniqueWithoutIncludedInDayInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutIncludedInDayInput | ModifierPackUpdateManyWithWhereWithoutIncludedInDayInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutModifierOptionNestedInput = {
    create?: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput> | DayCreateWithoutModifierOptionInput[] | DayUncheckedCreateWithoutModifierOptionInput[]
    connectOrCreate?: DayCreateOrConnectWithoutModifierOptionInput | DayCreateOrConnectWithoutModifierOptionInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutModifierOptionInput | DayUpsertWithWhereUniqueWithoutModifierOptionInput[]
    createMany?: DayCreateManyModifierOptionInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutModifierOptionInput | DayUpdateWithWhereUniqueWithoutModifierOptionInput[]
    updateMany?: DayUpdateManyWithWhereWithoutModifierOptionInput | DayUpdateManyWithWhereWithoutModifierOptionInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput = {
    create?: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput> | DayCreateWithoutOptionWhenPart1CompletedInput[] | DayUncheckedCreateWithoutOptionWhenPart1CompletedInput[]
    connectOrCreate?: DayCreateOrConnectWithoutOptionWhenPart1CompletedInput | DayCreateOrConnectWithoutOptionWhenPart1CompletedInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput | DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput[]
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput | DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput[]
    updateMany?: DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput | DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput = {
    create?: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput> | UserCreateWithoutDefaultExcludedModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput | UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput | UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput | UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput | UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput> | UserCreateWithoutDefaultIncludedCustomModifierOptionsInput[] | UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput | UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput | UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput | UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput | UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput> | ModifierPackCreateWithoutExcludedFromDayInput[] | ModifierPackUncheckedCreateWithoutExcludedFromDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutExcludedFromDayInput | ModifierPackCreateOrConnectWithoutExcludedFromDayInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutExcludedFromDayInput | ModifierPackUpsertWithWhereUniqueWithoutExcludedFromDayInput[]
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutExcludedFromDayInput | ModifierPackUpdateWithWhereUniqueWithoutExcludedFromDayInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutExcludedFromDayInput | ModifierPackUpdateManyWithWhereWithoutExcludedFromDayInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput> | ModifierPackCreateWithoutIncludedInDayInput[] | ModifierPackUncheckedCreateWithoutIncludedInDayInput[]
    connectOrCreate?: ModifierPackCreateOrConnectWithoutIncludedInDayInput | ModifierPackCreateOrConnectWithoutIncludedInDayInput[]
    upsert?: ModifierPackUpsertWithWhereUniqueWithoutIncludedInDayInput | ModifierPackUpsertWithWhereUniqueWithoutIncludedInDayInput[]
    set?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    disconnect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    delete?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    connect?: ModifierPackWhereUniqueInput | ModifierPackWhereUniqueInput[]
    update?: ModifierPackUpdateWithWhereUniqueWithoutIncludedInDayInput | ModifierPackUpdateWithWhereUniqueWithoutIncludedInDayInput[]
    updateMany?: ModifierPackUpdateManyWithWhereWithoutIncludedInDayInput | ModifierPackUpdateManyWithWhereWithoutIncludedInDayInput[]
    deleteMany?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModifierPackInput = {
    create?: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierPackInput
    connect?: UserWhereUniqueInput
  }

  export type ModifierOptionCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput> | ModifierOptionCreateWithoutExcludedModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput | ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ModifierOptionCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput> | ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput | ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput> | ModifierOptionCreateWithoutExcludedModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput | ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput> | ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput | ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutModifierPackNestedInput = {
    create?: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierPackInput
    upsert?: UserUpsertWithoutModifierPackInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModifierPackInput, UserUpdateWithoutModifierPackInput>, UserUncheckedUpdateWithoutModifierPackInput>
  }

  export type ModifierOptionUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput> | ModifierOptionCreateWithoutExcludedModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput | ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput | ModifierOptionUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput | ModifierOptionUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutExcludedModifierOptionsInput | ModifierOptionUpdateManyWithWhereWithoutExcludedModifierOptionsInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ModifierOptionUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput> | ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput | ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput> | ModifierOptionCreateWithoutExcludedModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput | ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput | ModifierOptionUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput | ModifierOptionUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutExcludedModifierOptionsInput | ModifierOptionUpdateManyWithWhereWithoutExcludedModifierOptionsInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput> | ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput[] | ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput[]
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput | ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput[]
    upsert?: ModifierOptionUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput[]
    set?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    disconnect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    delete?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    connect?: ModifierOptionWhereUniqueInput | ModifierOptionWhereUniqueInput[]
    update?: ModifierOptionUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput[]
    updateMany?: ModifierOptionUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput | ModifierOptionUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput[]
    deleteMany?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUpvoteInput = {
    create?: XOR<UserCreateWithoutUpvoteInput, UserUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvoteInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUpvoteInput = {
    create?: XOR<GameCreateWithoutUpvoteInput, GameUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: GameCreateOrConnectWithoutUpvoteInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUpvoteNestedInput = {
    create?: XOR<UserCreateWithoutUpvoteInput, UserUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvoteInput
    upsert?: UserUpsertWithoutUpvoteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpvoteInput, UserUpdateWithoutUpvoteInput>, UserUncheckedUpdateWithoutUpvoteInput>
  }

  export type GameUpdateOneRequiredWithoutUpvoteNestedInput = {
    create?: XOR<GameCreateWithoutUpvoteInput, GameUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: GameCreateOrConnectWithoutUpvoteInput
    upsert?: GameUpsertWithoutUpvoteInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUpvoteInput, GameUpdateWithoutUpvoteInput>, GameUncheckedUpdateWithoutUpvoteInput>
  }

  export type UserCreateNestedOneWithoutDownvoteInput = {
    create?: XOR<UserCreateWithoutDownvoteInput, UserUncheckedCreateWithoutDownvoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutDownvoteInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutDownvoteInput = {
    create?: XOR<GameCreateWithoutDownvoteInput, GameUncheckedCreateWithoutDownvoteInput>
    connectOrCreate?: GameCreateOrConnectWithoutDownvoteInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDownvoteNestedInput = {
    create?: XOR<UserCreateWithoutDownvoteInput, UserUncheckedCreateWithoutDownvoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutDownvoteInput
    upsert?: UserUpsertWithoutDownvoteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDownvoteInput, UserUpdateWithoutDownvoteInput>, UserUncheckedUpdateWithoutDownvoteInput>
  }

  export type GameUpdateOneRequiredWithoutDownvoteNestedInput = {
    create?: XOR<GameCreateWithoutDownvoteInput, GameUncheckedCreateWithoutDownvoteInput>
    connectOrCreate?: GameCreateOrConnectWithoutDownvoteInput
    upsert?: GameUpsertWithoutDownvoteInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutDownvoteInput, GameUpdateWithoutDownvoteInput>, GameUncheckedUpdateWithoutDownvoteInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChallengeModifierCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeModifierCreateManyCreatedByInputEnvelope = {
    data: ChallengeModifierCreateManyCreatedByInput | ChallengeModifierCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DownvoteCreateWithoutCreatedByInput = {
    note: string
    dateCreated?: Date | string
    Game: GameCreateNestedOneWithoutDownvoteInput
  }

  export type DownvoteUncheckedCreateWithoutCreatedByInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    gameId: number
  }

  export type DownvoteCreateOrConnectWithoutCreatedByInput = {
    where: DownvoteWhereUniqueInput
    create: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput>
  }

  export type DownvoteCreateManyCreatedByInputEnvelope = {
    data: DownvoteCreateManyCreatedByInput | DownvoteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutUserInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserInput = {
    id?: number
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameCreateManyUserInputEnvelope = {
    data: GameCreateManyUserInput | GameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModifierOptionCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierOptionCreateManyCreatedByInputEnvelope = {
    data: ModifierOptionCreateManyCreatedByInput | ModifierOptionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ModifierPackCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    isPublic?: boolean
    ExcludedFromDay?: ModifierOptionCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: ModifierOptionCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    isPublic?: boolean
    ExcludedFromDay?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackCreateOrConnectWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierPackCreateManyCreatedByInputEnvelope = {
    data: ModifierPackCreateManyCreatedByInput | ModifierPackCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PublicProfileCreateWithoutUserInput = {
    dateCreated?: Date | string
    name: string
    Game?: GameCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateWithoutUserInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    Game?: GameUncheckedCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileCreateOrConnectWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    create: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput>
  }

  export type PublicProfileCreateManyUserInputEnvelope = {
    data: PublicProfileCreateManyUserInput | PublicProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UpvoteCreateWithoutCreatedByInput = {
    note?: string | null
    dateCreated?: Date | string
    Game: GameCreateNestedOneWithoutUpvoteInput
  }

  export type UpvoteUncheckedCreateWithoutCreatedByInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    gameId: number
  }

  export type UpvoteCreateOrConnectWithoutCreatedByInput = {
    where: UpvoteWhereUniqueInput
    create: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput>
  }

  export type UpvoteCreateManyCreatedByInputEnvelope = {
    data: UpvoteCreateManyCreatedByInput | UpvoteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeModifierCreateWithoutUserExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutUserExcludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput>
  }

  export type ModifierOptionCreateWithoutUserExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutUserExcludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput>
  }

  export type ChallengeModifierCreateWithoutUserIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutUserIncludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput>
  }

  export type ModifierOptionCreateWithoutUserIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutUserIncludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutCreatedByInput, ChallengeModifierUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutCreatedByInput, ChallengeModifierUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChallengeModifierScalarWhereInput = {
    AND?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
    OR?: ChallengeModifierScalarWhereInput[]
    NOT?: ChallengeModifierScalarWhereInput | ChallengeModifierScalarWhereInput[]
    id?: IntFilter<"ChallengeModifier"> | number
    dateCreated?: DateTimeFilter<"ChallengeModifier"> | Date | string
    name?: StringFilter<"ChallengeModifier"> | string
    text?: StringFilter<"ChallengeModifier"> | string
    hasOptions?: BoolFilter<"ChallengeModifier"> | boolean
    explanatoryUrl?: StringNullableFilter<"ChallengeModifier"> | string | null
    standard?: BoolFilter<"ChallengeModifier"> | boolean
    createdById?: StringNullableFilter<"ChallengeModifier"> | string | null
    isPublic?: BoolFilter<"ChallengeModifier"> | boolean
  }

  export type DownvoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DownvoteWhereUniqueInput
    update: XOR<DownvoteUpdateWithoutCreatedByInput, DownvoteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DownvoteCreateWithoutCreatedByInput, DownvoteUncheckedCreateWithoutCreatedByInput>
  }

  export type DownvoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DownvoteWhereUniqueInput
    data: XOR<DownvoteUpdateWithoutCreatedByInput, DownvoteUncheckedUpdateWithoutCreatedByInput>
  }

  export type DownvoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: DownvoteScalarWhereInput
    data: XOR<DownvoteUpdateManyMutationInput, DownvoteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DownvoteScalarWhereInput = {
    AND?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
    OR?: DownvoteScalarWhereInput[]
    NOT?: DownvoteScalarWhereInput | DownvoteScalarWhereInput[]
    id?: IntFilter<"Downvote"> | number
    note?: StringFilter<"Downvote"> | string
    dateCreated?: DateTimeFilter<"Downvote"> | Date | string
    gameId?: IntFilter<"Downvote"> | number
    createdById?: StringFilter<"Downvote"> | string
  }

  export type GameUpsertWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
  }

  export type GameUpdateManyWithWhereWithoutUserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutUserInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    dateCreated?: DateTimeFilter<"Game"> | Date | string
    userId?: StringFilter<"Game"> | string
    number?: IntFilter<"Game"> | number
    year?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    playerName?: StringNullableFilter<"Game"> | string | null
    currentDay?: IntFilter<"Game"> | number
    currentDayCompleted?: BoolFilter<"Game"> | boolean
    currentRerollTokens?: IntFilter<"Game"> | number
    rerollTokensSpent?: IntFilter<"Game"> | number
    rerollTokensSpentDuringPart2Raw?: IntFilter<"Game"> | number
    part2RerollBonus?: IntFilter<"Game"> | number
    repositoryLink?: StringNullableFilter<"Game"> | string | null
    progressSheetLink?: StringFilter<"Game"> | string
    isPublic?: BoolFilter<"Game"> | boolean
    publicProfileId?: IntNullableFilter<"Game"> | number | null
    score?: IntFilter<"Game"> | number
    titleId?: IntNullableFilter<"Game"> | number | null
    dateCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutCreatedByInput, ModifierOptionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutCreatedByInput, ModifierOptionUncheckedUpdateWithoutCreatedByInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutCreatedByInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ModifierOptionScalarWhereInput = {
    AND?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
    OR?: ModifierOptionScalarWhereInput[]
    NOT?: ModifierOptionScalarWhereInput | ModifierOptionScalarWhereInput[]
    id?: IntFilter<"ModifierOption"> | number
    dateCreated?: DateTimeFilter<"ModifierOption"> | Date | string
    challengeModifierId?: IntFilter<"ModifierOption"> | number
    name?: StringFilter<"ModifierOption"> | string
    text?: StringFilter<"ModifierOption"> | string
    shortText?: StringNullableFilter<"ModifierOption"> | string | null
    explanatoryUrl?: StringNullableFilter<"ModifierOption"> | string | null
    standard?: BoolFilter<"ModifierOption"> | boolean
    createdById?: StringNullableFilter<"ModifierOption"> | string | null
    isPublic?: BoolFilter<"ModifierOption"> | boolean
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutCreatedByInput, ModifierPackUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutCreatedByInput, ModifierPackUncheckedUpdateWithoutCreatedByInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutCreatedByInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ModifierPackScalarWhereInput = {
    AND?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
    OR?: ModifierPackScalarWhereInput[]
    NOT?: ModifierPackScalarWhereInput | ModifierPackScalarWhereInput[]
    id?: IntFilter<"ModifierPack"> | number
    dateCreated?: DateTimeFilter<"ModifierPack"> | Date | string
    createdById?: StringNullableFilter<"ModifierPack"> | string | null
    isPublic?: BoolFilter<"ModifierPack"> | boolean
  }

  export type PublicProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    update: XOR<PublicProfileUpdateWithoutUserInput, PublicProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput>
  }

  export type PublicProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    data: XOR<PublicProfileUpdateWithoutUserInput, PublicProfileUncheckedUpdateWithoutUserInput>
  }

  export type PublicProfileUpdateManyWithWhereWithoutUserInput = {
    where: PublicProfileScalarWhereInput
    data: XOR<PublicProfileUpdateManyMutationInput, PublicProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type PublicProfileScalarWhereInput = {
    AND?: PublicProfileScalarWhereInput | PublicProfileScalarWhereInput[]
    OR?: PublicProfileScalarWhereInput[]
    NOT?: PublicProfileScalarWhereInput | PublicProfileScalarWhereInput[]
    id?: IntFilter<"PublicProfile"> | number
    dateCreated?: DateTimeFilter<"PublicProfile"> | Date | string
    name?: StringFilter<"PublicProfile"> | string
    userId?: StringFilter<"PublicProfile"> | string
  }

  export type UpvoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UpvoteWhereUniqueInput
    update: XOR<UpvoteUpdateWithoutCreatedByInput, UpvoteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UpvoteCreateWithoutCreatedByInput, UpvoteUncheckedCreateWithoutCreatedByInput>
  }

  export type UpvoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UpvoteWhereUniqueInput
    data: XOR<UpvoteUpdateWithoutCreatedByInput, UpvoteUncheckedUpdateWithoutCreatedByInput>
  }

  export type UpvoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: UpvoteScalarWhereInput
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UpvoteScalarWhereInput = {
    AND?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    OR?: UpvoteScalarWhereInput[]
    NOT?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    id?: IntFilter<"Upvote"> | number
    note?: StringNullableFilter<"Upvote"> | string | null
    dateCreated?: DateTimeFilter<"Upvote"> | Date | string
    gameId?: IntFilter<"Upvote"> | number
    createdById?: StringFilter<"Upvote"> | string
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutUserExcludedInput, ChallengeModifierUncheckedUpdateWithoutUserExcludedInput>
    create: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutUserExcludedInput, ChallengeModifierUncheckedUpdateWithoutUserExcludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutUserExcludedInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutUserExcludedInput, ModifierOptionUncheckedUpdateWithoutUserExcludedInput>
    create: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutUserExcludedInput, ModifierOptionUncheckedUpdateWithoutUserExcludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutUserExcludedInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutUserIncludedInput, ChallengeModifierUncheckedUpdateWithoutUserIncludedInput>
    create: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutUserIncludedInput, ChallengeModifierUncheckedUpdateWithoutUserIncludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutUserIncludedInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutUserIncludedInput, ModifierOptionUncheckedUpdateWithoutUserIncludedInput>
    create: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutUserIncludedInput, ModifierOptionUncheckedUpdateWithoutUserIncludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutUserIncludedInput>
  }

  export type GameCreateWithoutPublicProfileInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPublicProfileInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameCreateManyPublicProfileInputEnvelope = {
    data: GameCreateManyPublicProfileInput | GameCreateManyPublicProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPublicProfileInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutPublicProfileInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutPublicProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameUpsertWithWhereUniqueWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPublicProfileInput, GameUncheckedUpdateWithoutPublicProfileInput>
    create: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPublicProfileInput, GameUncheckedUpdateWithoutPublicProfileInput>
  }

  export type GameUpdateManyWithWhereWithoutPublicProfileInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPublicProfileInput>
  }

  export type UserUpsertWithoutPublicProfileInput = {
    update: XOR<UserUpdateWithoutPublicProfileInput, UserUncheckedUpdateWithoutPublicProfileInput>
    create: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublicProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublicProfileInput, UserUncheckedUpdateWithoutPublicProfileInput>
  }

  export type UserUpdateWithoutPublicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type DayCreateWithoutGameInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutGameInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutGameInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput>
  }

  export type DayCreateManyGameInputEnvelope = {
    data: DayCreateManyGameInput | DayCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type DownvoteCreateWithoutGameInput = {
    note: string
    dateCreated?: Date | string
    CreatedBy: UserCreateNestedOneWithoutDownvoteInput
  }

  export type DownvoteUncheckedCreateWithoutGameInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    createdById: string
  }

  export type DownvoteCreateOrConnectWithoutGameInput = {
    where: DownvoteWhereUniqueInput
    create: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput>
  }

  export type DownvoteCreateManyGameInputEnvelope = {
    data: DownvoteCreateManyGameInput | DownvoteCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PublicProfileCreateWithoutGameInput = {
    dateCreated?: Date | string
    name: string
    User: UserCreateNestedOneWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateWithoutGameInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
  }

  export type PublicProfileCreateOrConnectWithoutGameInput = {
    where: PublicProfileWhereUniqueInput
    create: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
  }

  export type TitleCreateWithoutGameInput = {
    name: string
    minimumScore: number
  }

  export type TitleUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
    minimumScore: number
  }

  export type TitleCreateOrConnectWithoutGameInput = {
    where: TitleWhereUniqueInput
    create: XOR<TitleCreateWithoutGameInput, TitleUncheckedCreateWithoutGameInput>
  }

  export type UserCreateWithoutGameInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutGameInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
  }

  export type UpvoteCreateWithoutGameInput = {
    note?: string | null
    dateCreated?: Date | string
    CreatedBy: UserCreateNestedOneWithoutUpvoteInput
  }

  export type UpvoteUncheckedCreateWithoutGameInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    createdById: string
  }

  export type UpvoteCreateOrConnectWithoutGameInput = {
    where: UpvoteWhereUniqueInput
    create: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput>
  }

  export type UpvoteCreateManyGameInputEnvelope = {
    data: UpvoteCreateManyGameInput | UpvoteCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type DayUpsertWithWhereUniqueWithoutGameInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutGameInput, DayUncheckedUpdateWithoutGameInput>
    create: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput>
  }

  export type DayUpdateWithWhereUniqueWithoutGameInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutGameInput, DayUncheckedUpdateWithoutGameInput>
  }

  export type DayUpdateManyWithWhereWithoutGameInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutGameInput>
  }

  export type DayScalarWhereInput = {
    AND?: DayScalarWhereInput | DayScalarWhereInput[]
    OR?: DayScalarWhereInput[]
    NOT?: DayScalarWhereInput | DayScalarWhereInput[]
    id?: IntFilter<"Day"> | number
    dateCreated?: DateTimeFilter<"Day"> | Date | string
    gameId?: IntFilter<"Day"> | number
    userId?: StringFilter<"Day"> | string
    gameNumber?: IntFilter<"Day"> | number
    number?: IntFilter<"Day"> | number
    challengeModifierId?: IntNullableFilter<"Day"> | number | null
    modifierOptionId?: IntNullableFilter<"Day"> | number | null
    dateFirstRolled?: DateTimeNullableFilter<"Day"> | Date | string | null
    part1Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    optionWhenPart1CompletedId?: IntNullableFilter<"Day"> | number | null
    part2Completed?: DateTimeNullableFilter<"Day"> | Date | string | null
    challengeModifierRerollsUsed?: IntFilter<"Day"> | number
    modifierOptionRerollsUsed?: IntFilter<"Day"> | number
    rerollTokensSpentDuringPart2?: IntFilter<"Day"> | number
    score?: IntFilter<"Day"> | number
  }

  export type DownvoteUpsertWithWhereUniqueWithoutGameInput = {
    where: DownvoteWhereUniqueInput
    update: XOR<DownvoteUpdateWithoutGameInput, DownvoteUncheckedUpdateWithoutGameInput>
    create: XOR<DownvoteCreateWithoutGameInput, DownvoteUncheckedCreateWithoutGameInput>
  }

  export type DownvoteUpdateWithWhereUniqueWithoutGameInput = {
    where: DownvoteWhereUniqueInput
    data: XOR<DownvoteUpdateWithoutGameInput, DownvoteUncheckedUpdateWithoutGameInput>
  }

  export type DownvoteUpdateManyWithWhereWithoutGameInput = {
    where: DownvoteScalarWhereInput
    data: XOR<DownvoteUpdateManyMutationInput, DownvoteUncheckedUpdateManyWithoutGameInput>
  }

  export type PublicProfileUpsertWithoutGameInput = {
    update: XOR<PublicProfileUpdateWithoutGameInput, PublicProfileUncheckedUpdateWithoutGameInput>
    create: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
    where?: PublicProfileWhereInput
  }

  export type PublicProfileUpdateToOneWithWhereWithoutGameInput = {
    where?: PublicProfileWhereInput
    data: XOR<PublicProfileUpdateWithoutGameInput, PublicProfileUncheckedUpdateWithoutGameInput>
  }

  export type PublicProfileUpdateWithoutGameInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TitleUpsertWithoutGameInput = {
    update: XOR<TitleUpdateWithoutGameInput, TitleUncheckedUpdateWithoutGameInput>
    create: XOR<TitleCreateWithoutGameInput, TitleUncheckedCreateWithoutGameInput>
    where?: TitleWhereInput
  }

  export type TitleUpdateToOneWithWhereWithoutGameInput = {
    where?: TitleWhereInput
    data: XOR<TitleUpdateWithoutGameInput, TitleUncheckedUpdateWithoutGameInput>
  }

  export type TitleUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type TitleUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutGameInput = {
    update: XOR<UserUpdateWithoutGameInput, UserUncheckedUpdateWithoutGameInput>
    create: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameInput, UserUncheckedUpdateWithoutGameInput>
  }

  export type UserUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UpvoteUpsertWithWhereUniqueWithoutGameInput = {
    where: UpvoteWhereUniqueInput
    update: XOR<UpvoteUpdateWithoutGameInput, UpvoteUncheckedUpdateWithoutGameInput>
    create: XOR<UpvoteCreateWithoutGameInput, UpvoteUncheckedCreateWithoutGameInput>
  }

  export type UpvoteUpdateWithWhereUniqueWithoutGameInput = {
    where: UpvoteWhereUniqueInput
    data: XOR<UpvoteUpdateWithoutGameInput, UpvoteUncheckedUpdateWithoutGameInput>
  }

  export type UpvoteUpdateManyWithWhereWithoutGameInput = {
    where: UpvoteScalarWhereInput
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutTitleInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTitleInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTitleInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput>
  }

  export type GameCreateManyTitleInputEnvelope = {
    data: GameCreateManyTitleInput | GameCreateManyTitleInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutTitleInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutTitleInput, GameUncheckedUpdateWithoutTitleInput>
    create: XOR<GameCreateWithoutTitleInput, GameUncheckedCreateWithoutTitleInput>
  }

  export type GameUpdateWithWhereUniqueWithoutTitleInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutTitleInput, GameUncheckedUpdateWithoutTitleInput>
  }

  export type GameUpdateManyWithWhereWithoutTitleInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutTitleInput>
  }

  export type ChallengeModifierCreateWithoutDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutDayInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
  }

  export type GameCreateWithoutDayInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutDayInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
  }

  export type ModifierOptionCreateWithoutDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutDayInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierCreateWithoutDayCompletedInPart1Input = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionCreateWithoutDayCompletedInPart1Input = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierCreateWithoutModifierPackExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierCreateWithoutModifierPackIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type ChallengeModifierUpsertWithoutDayInput = {
    update: XOR<ChallengeModifierUpdateWithoutDayInput, ChallengeModifierUncheckedUpdateWithoutDayInput>
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
    where?: ChallengeModifierWhereInput
  }

  export type ChallengeModifierUpdateToOneWithWhereWithoutDayInput = {
    where?: ChallengeModifierWhereInput
    data: XOR<ChallengeModifierUpdateWithoutDayInput, ChallengeModifierUncheckedUpdateWithoutDayInput>
  }

  export type ChallengeModifierUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type GameUpsertWithoutDayInput = {
    update: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutDayInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
  }

  export type GameUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type ModifierOptionUpsertWithoutDayInput = {
    update: XOR<ModifierOptionUpdateWithoutDayInput, ModifierOptionUncheckedUpdateWithoutDayInput>
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
    where?: ModifierOptionWhereInput
  }

  export type ModifierOptionUpdateToOneWithWhereWithoutDayInput = {
    where?: ModifierOptionWhereInput
    data: XOR<ModifierOptionUpdateWithoutDayInput, ModifierOptionUncheckedUpdateWithoutDayInput>
  }

  export type ModifierOptionUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ChallengeModifierUpsertWithoutDayCompletedInPart1Input = {
    update: XOR<ChallengeModifierUpdateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input>
    create: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
    where?: ChallengeModifierWhereInput
  }

  export type ChallengeModifierUpdateToOneWithWhereWithoutDayCompletedInPart1Input = {
    where?: ChallengeModifierWhereInput
    data: XOR<ChallengeModifierUpdateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierUpdateWithoutDayCompletedInPart1Input = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ModifierOptionUpsertWithoutDayCompletedInPart1Input = {
    update: XOR<ModifierOptionUpdateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input>
    create: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
    where?: ModifierOptionWhereInput
  }

  export type ModifierOptionUpdateToOneWithWhereWithoutDayCompletedInPart1Input = {
    where?: ModifierOptionWhereInput
    data: XOR<ModifierOptionUpdateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionUpdateWithoutDayCompletedInPart1Input = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput>
    create: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput>
    create: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedInput>
  }

  export type UserCreateWithoutChallengeModifierInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutChallengeModifierInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutChallengeModifierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
  }

  export type DayCreateWithoutChallengeModifierInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput>
  }

  export type DayCreateManyChallengeModifierInputEnvelope = {
    data: DayCreateManyChallengeModifierInput | DayCreateManyChallengeModifierInput[]
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutModifierWhenPart1CompletedInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutModifierWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayCreateManyModifierWhenPart1CompletedInputEnvelope = {
    data: DayCreateManyModifierWhenPart1CompletedInput | DayCreateManyModifierWhenPart1CompletedInput[]
    skipDuplicates?: boolean
  }

  export type ModifierOptionCreateWithoutChallengeModifierInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionCreateManyChallengeModifierInputEnvelope = {
    data: ModifierOptionCreateManyChallengeModifierInput | ModifierOptionCreateManyChallengeModifierInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDefaultExcludedChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type DayCreateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutExcludedChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type DayCreateWithoutEncludedCustomChallengeModifiersInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
  }

  export type DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
  }

  export type DayCreateOrConnectWithoutEncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type UserUpsertWithoutChallengeModifierInput = {
    update: XOR<UserUpdateWithoutChallengeModifierInput, UserUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengeModifierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengeModifierInput, UserUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type UserUpdateWithoutChallengeModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengeModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type DayUpsertWithWhereUniqueWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutChallengeModifierInput, DayUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput>
  }

  export type DayUpdateWithWhereUniqueWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutChallengeModifierInput, DayUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type DayUpdateManyWithWhereWithoutChallengeModifierInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutChallengeModifierInput>
  }

  export type DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutModifierWhenPart1CompletedInput, DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput>
    create: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutModifierWhenPart1CompletedInput, DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutChallengeModifierInput, ModifierOptionUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutChallengeModifierInput, ModifierOptionUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutChallengeModifierInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput>
    create: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    serializedId?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    oauthUrl?: StringNullableFilter<"User"> | string | null
    oauthUsername?: StringNullableFilter<"User"> | string | null
    oauthName?: StringNullableFilter<"User"> | string | null
    oauthAvatarUrl?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    numberOfGames?: IntFilter<"User"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput>
    create: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutExcludedChallengeModifiersInput, DayUncheckedUpdateWithoutExcludedChallengeModifiersInput>
    create: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutExcludedChallengeModifiersInput, DayUncheckedUpdateWithoutExcludedChallengeModifiersInput>
  }

  export type DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutExcludedChallengeModifiersInput>
  }

  export type DayUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput>
    create: XOR<DayCreateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type DayUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutEncludedCustomChallengeModifiersInput, DayUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type DayUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersInput>
  }

  export type DayCreateWithoutModifierOptionInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayCreateManyModifierOptionInputEnvelope = {
    data: DayCreateManyModifierOptionInput | DayCreateManyModifierOptionInput[]
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutOptionWhenPart1CompletedInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayUncheckedCreateWithoutOptionWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type DayCreateOrConnectWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayCreateManyOptionWhenPart1CompletedInputEnvelope = {
    data: DayCreateManyOptionWhenPart1CompletedInput | DayCreateManyOptionWhenPart1CompletedInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeModifierCreateWithoutModifierOptionInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ModifierPackExcluded?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: DayUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierOptionInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
  }

  export type UserCreateWithoutModifierOptionInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutModifierOptionInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutModifierOptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
  }

  export type UserCreateWithoutDefaultExcludedModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserCreateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type ModifierPackCreateWithoutExcludedFromDayInput = {
    dateCreated?: Date | string
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
    IncludedInDay?: ModifierOptionCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackUncheckedCreateWithoutExcludedFromDayInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    isPublic?: boolean
    IncludedInDay?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierPackCreateOrConnectWithoutExcludedFromDayInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ModifierPackCreateWithoutIncludedInDayInput = {
    dateCreated?: Date | string
    isPublic?: boolean
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
    ExcludedFromDay?: ModifierOptionCreateNestedManyWithoutExcludedModifierOptionsInput
  }

  export type ModifierPackUncheckedCreateWithoutIncludedInDayInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    isPublic?: boolean
    ExcludedFromDay?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
  }

  export type ModifierPackCreateOrConnectWithoutIncludedInDayInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput>
  }

  export type DayUpsertWithWhereUniqueWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutModifierOptionInput, DayUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayUpdateWithWhereUniqueWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutModifierOptionInput, DayUncheckedUpdateWithoutModifierOptionInput>
  }

  export type DayUpdateManyWithWhereWithoutModifierOptionInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutModifierOptionInput>
  }

  export type DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutOptionWhenPart1CompletedInput, DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput>
    create: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutOptionWhenPart1CompletedInput, DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedInput>
  }

  export type ChallengeModifierUpsertWithoutModifierOptionInput = {
    update: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    where?: ChallengeModifierWhereInput
  }

  export type ChallengeModifierUpdateToOneWithWhereWithoutModifierOptionInput = {
    where?: ChallengeModifierWhereInput
    data: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
  }

  export type ChallengeModifierUpdateWithoutModifierOptionInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type UserUpsertWithoutModifierOptionInput = {
    update: XOR<UserUpdateWithoutModifierOptionInput, UserUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModifierOptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModifierOptionInput, UserUncheckedUpdateWithoutModifierOptionInput>
  }

  export type UserUpdateWithoutModifierOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutModifierOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput>
    create: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput>
    create: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutExcludedFromDayInput, ModifierPackUncheckedUpdateWithoutExcludedFromDayInput>
    create: XOR<ModifierPackCreateWithoutExcludedFromDayInput, ModifierPackUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutExcludedFromDayInput, ModifierPackUncheckedUpdateWithoutExcludedFromDayInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutExcludedFromDayInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutExcludedFromDayInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutIncludedInDayInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutIncludedInDayInput, ModifierPackUncheckedUpdateWithoutIncludedInDayInput>
    create: XOR<ModifierPackCreateWithoutIncludedInDayInput, ModifierPackUncheckedCreateWithoutIncludedInDayInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutIncludedInDayInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutIncludedInDayInput, ModifierPackUncheckedUpdateWithoutIncludedInDayInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutIncludedInDayInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutIncludedInDayInput>
  }

  export type UserCreateWithoutModifierPackInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutModifierPackInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutModifierPackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
  }

  export type ModifierOptionCreateWithoutExcludedModifierOptionsInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    IncludedCustomModifierOptions?: ModifierPackCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutExcludedModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackCreateNestedManyWithoutExcludedFromDayInput
  }

  export type ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedModifierOptions?: ModifierPackUncheckedCreateNestedManyWithoutExcludedFromDayInput
  }

  export type ModifierOptionCreateOrConnectWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type UserUpsertWithoutModifierPackInput = {
    update: XOR<UserUpdateWithoutModifierPackInput, UserUncheckedUpdateWithoutModifierPackInput>
    create: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModifierPackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModifierPackInput, UserUncheckedUpdateWithoutModifierPackInput>
  }

  export type UserUpdateWithoutModifierPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutModifierPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedUpdateWithoutExcludedModifierOptionsInput>
    create: XOR<ModifierOptionCreateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutExcludedModifierOptionsInput, ModifierOptionUncheckedUpdateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutExcludedModifierOptionsInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
    create: XOR<ModifierOptionCreateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutIncludedCustomModifierOptionsInput, ModifierOptionUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsInput>
  }

  export type UserCreateWithoutUpvoteInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutUpvoteInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutUpvoteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvoteInput, UserUncheckedCreateWithoutUpvoteInput>
  }

  export type GameCreateWithoutUpvoteInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    Downvote?: DownvoteCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUpvoteInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Downvote?: DownvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUpvoteInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUpvoteInput, GameUncheckedCreateWithoutUpvoteInput>
  }

  export type UserUpsertWithoutUpvoteInput = {
    update: XOR<UserUpdateWithoutUpvoteInput, UserUncheckedUpdateWithoutUpvoteInput>
    create: XOR<UserCreateWithoutUpvoteInput, UserUncheckedCreateWithoutUpvoteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpvoteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpvoteInput, UserUncheckedUpdateWithoutUpvoteInput>
  }

  export type UserUpdateWithoutUpvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutUpvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type GameUpsertWithoutUpvoteInput = {
    update: XOR<GameUpdateWithoutUpvoteInput, GameUncheckedUpdateWithoutUpvoteInput>
    create: XOR<GameCreateWithoutUpvoteInput, GameUncheckedCreateWithoutUpvoteInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUpvoteInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUpvoteInput, GameUncheckedUpdateWithoutUpvoteInput>
  }

  export type GameUpdateWithoutUpvoteInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUpvoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutDownvoteInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    Game?: GameCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    Upvote?: UpvoteCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutDownvoteInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    oauthUrl?: string | null
    oauthUsername?: string | null
    oauthName?: string | null
    oauthAvatarUrl?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutDownvoteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDownvoteInput, UserUncheckedCreateWithoutDownvoteInput>
  }

  export type GameCreateWithoutDownvoteInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
    Title?: TitleCreateNestedOneWithoutGameInput
    User: UserCreateNestedOneWithoutGameInput
    Upvote?: UpvoteCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutDownvoteInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
    Upvote?: UpvoteUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutDownvoteInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDownvoteInput, GameUncheckedCreateWithoutDownvoteInput>
  }

  export type UserUpsertWithoutDownvoteInput = {
    update: XOR<UserUpdateWithoutDownvoteInput, UserUncheckedUpdateWithoutDownvoteInput>
    create: XOR<UserCreateWithoutDownvoteInput, UserUncheckedCreateWithoutDownvoteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDownvoteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDownvoteInput, UserUncheckedUpdateWithoutDownvoteInput>
  }

  export type UserUpdateWithoutDownvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutDownvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type GameUpsertWithoutDownvoteInput = {
    update: XOR<GameUpdateWithoutDownvoteInput, GameUncheckedUpdateWithoutDownvoteInput>
    create: XOR<GameCreateWithoutDownvoteInput, GameUncheckedCreateWithoutDownvoteInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutDownvoteInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutDownvoteInput, GameUncheckedUpdateWithoutDownvoteInput>
  }

  export type GameUpdateWithoutDownvoteInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutDownvoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type ChallengeModifierCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
  }

  export type DownvoteCreateManyCreatedByInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    gameId: number
  }

  export type GameCreateManyUserInput = {
    id?: number
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
  }

  export type ModifierOptionCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    isPublic?: boolean
  }

  export type ModifierPackCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    isPublic?: boolean
  }

  export type PublicProfileCreateManyUserInput = {
    id?: number
    dateCreated?: Date | string
    name: string
  }

  export type UpvoteCreateManyCreatedByInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    gameId: number
  }

  export type ChallengeModifierUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DownvoteUpdateWithoutCreatedByInput = {
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Game?: GameUpdateOneRequiredWithoutDownvoteNestedInput
  }

  export type DownvoteUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type DownvoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type GameUpdateWithoutUserInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModifierOptionUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ExcludedFromDay?: ModifierOptionUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: ModifierOptionUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ExcludedFromDay?: ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicProfileUpdateWithoutUserInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Game?: GameUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UpvoteUpdateWithoutCreatedByInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Game?: GameUpdateOneRequiredWithoutUpvoteNestedInput
  }

  export type UpvoteUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type UpvoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeModifierUpdateWithoutUserExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutUserExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUpdateWithoutUserIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutUserIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCreateManyPublicProfileInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    score?: number
    titleId?: number | null
    dateCompleted?: Date | string | null
  }

  export type GameUpdateWithoutPublicProfileInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    Title?: TitleUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPublicProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPublicProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    titleId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DayCreateManyGameInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type DownvoteCreateManyGameInput = {
    id?: number
    note: string
    dateCreated?: Date | string
    createdById: string
  }

  export type UpvoteCreateManyGameInput = {
    id?: number
    note?: string | null
    dateCreated?: Date | string
    createdById: string
  }

  export type DayUpdateWithoutGameInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DownvoteUpdateWithoutGameInput = {
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutDownvoteNestedInput
  }

  export type DownvoteUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DownvoteUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UpvoteUpdateWithoutGameInput = {
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutUpvoteNestedInput
  }

  export type UpvoteUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UpvoteUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateManyTitleInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    rerollTokensSpentDuringPart2Raw?: number
    part2RerollBonus?: number
    repositoryLink?: string | null
    progressSheetLink?: string
    isPublic?: boolean
    publicProfileId?: number | null
    score?: number
    dateCompleted?: Date | string | null
  }

  export type GameUpdateWithoutTitleInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Upvote?: UpvoteUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutGameNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2Raw?: IntFieldUpdateOperationsInput | number
    part2RerollBonus?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChallengeModifierUpdateWithoutModifierPackExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackIncluded?: DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUpdateWithoutModifierPackIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ModifierPackExcluded?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DayCreateManyChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type DayCreateManyModifierWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type ModifierOptionCreateManyChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    shortText?: string | null
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    isPublic?: boolean
  }

  export type DayUpdateWithoutChallengeModifierInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutModifierWhenPart1CompletedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ModifierOptionUpdateWithoutChallengeModifierInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutDefaultExcludedChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutEncludedCustomChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
  }

  export type DayUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type DayCreateManyOptionWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    score?: number
  }

  export type DayUpdateWithoutModifierOptionInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutOptionWhenPart1CompletedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutDefaultExcludedModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUpdateManyWithoutCreatedByNestedInput
    Game?: GameUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    Downvote?: DownvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    Upvote?: UpvoteUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oauthUsername?: NullableStringFieldUpdateOperationsInput | string | null
    oauthName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type ModifierPackUpdateWithoutExcludedFromDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
    IncludedInDay?: ModifierOptionUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutExcludedFromDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    IncludedInDay?: ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutExcludedFromDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUpdateWithoutIncludedInDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
    ExcludedFromDay?: ModifierOptionUpdateManyWithoutExcludedModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutIncludedInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ExcludedFromDay?: ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutIncludedInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutExcludedModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    IncludedCustomModifierOptions?: ModifierPackUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    IncludedCustomModifierOptions?: ModifierPackUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUpdateManyWithoutExcludedFromDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedModifierOptions?: ModifierPackUncheckedUpdateManyWithoutExcludedFromDayNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicProfileCountOutputTypeDefaultArgs instead
     */
    export type PublicProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleCountOutputTypeDefaultArgs instead
     */
    export type TitleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayCountOutputTypeDefaultArgs instead
     */
    export type DayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeModifierCountOutputTypeDefaultArgs instead
     */
    export type ChallengeModifierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallengeModifierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierOptionCountOutputTypeDefaultArgs instead
     */
    export type ModifierOptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierOptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierPackCountOutputTypeDefaultArgs instead
     */
    export type ModifierPackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierPackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicProfileDefaultArgs instead
     */
    export type PublicProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleDefaultArgs instead
     */
    export type TitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayDefaultArgs instead
     */
    export type DayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeModifierDefaultArgs instead
     */
    export type ChallengeModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallengeModifierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierOptionDefaultArgs instead
     */
    export type ModifierOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierPackDefaultArgs instead
     */
    export type ModifierPackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierPackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpvoteDefaultArgs instead
     */
    export type UpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UpvoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DownvoteDefaultArgs instead
     */
    export type DownvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DownvoteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}