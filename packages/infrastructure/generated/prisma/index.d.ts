
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model User_Status
 * 
 */
export type User_Status = $Result.DefaultSelection<Prisma.$User_StatusPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Student_Status
 * 
 */
export type Student_Status = $Result.DefaultSelection<Prisma.$Student_StatusPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Professor_Role
 * 
 */
export type Professor_Role = $Result.DefaultSelection<Prisma.$Professor_RolePayload>
/**
 * Model Outsider
 * 
 */
export type Outsider = $Result.DefaultSelection<Prisma.$OutsiderPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Status`: Exposes CRUD operations for the **User_Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Statuses
    * const user_Statuses = await prisma.user_Status.findMany()
    * ```
    */
  get user_Status(): Prisma.User_StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_Status`: Exposes CRUD operations for the **Student_Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_Statuses
    * const student_Statuses = await prisma.student_Status.findMany()
    * ```
    */
  get student_Status(): Prisma.Student_StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor_Role`: Exposes CRUD operations for the **Professor_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professor_Roles
    * const professor_Roles = await prisma.professor_Role.findMany()
    * ```
    */
  get professor_Role(): Prisma.Professor_RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outsider`: Exposes CRUD operations for the **Outsider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outsiders
    * const outsiders = await prisma.outsider.findMany()
    * ```
    */
  get outsider(): Prisma.OutsiderDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User_Status: 'User_Status',
    Admin: 'Admin',
    Student: 'Student',
    Student_Status: 'Student_Status',
    Professor: 'Professor',
    Professor_Role: 'Professor_Role',
    Outsider: 'Outsider'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_Status" | "admin" | "student" | "student_Status" | "professor" | "professor_Role" | "outsider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      User_Status: {
        payload: Prisma.$User_StatusPayload<ExtArgs>
        fields: Prisma.User_StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          findFirst: {
            args: Prisma.User_StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          findMany: {
            args: Prisma.User_StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>[]
          }
          create: {
            args: Prisma.User_StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          createMany: {
            args: Prisma.User_StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>[]
          }
          delete: {
            args: Prisma.User_StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          update: {
            args: Prisma.User_StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          deleteMany: {
            args: Prisma.User_StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>[]
          }
          upsert: {
            args: Prisma.User_StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_StatusPayload>
          }
          aggregate: {
            args: Prisma.User_StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Status>
          }
          groupBy: {
            args: Prisma.User_StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_StatusCountArgs<ExtArgs>
            result: $Utils.Optional<User_StatusCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Student_Status: {
        payload: Prisma.$Student_StatusPayload<ExtArgs>
        fields: Prisma.Student_StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Student_StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Student_StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          findFirst: {
            args: Prisma.Student_StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Student_StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          findMany: {
            args: Prisma.Student_StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>[]
          }
          create: {
            args: Prisma.Student_StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          createMany: {
            args: Prisma.Student_StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Student_StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>[]
          }
          delete: {
            args: Prisma.Student_StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          update: {
            args: Prisma.Student_StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          deleteMany: {
            args: Prisma.Student_StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Student_StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Student_StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>[]
          }
          upsert: {
            args: Prisma.Student_StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_StatusPayload>
          }
          aggregate: {
            args: Prisma.Student_StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_Status>
          }
          groupBy: {
            args: Prisma.Student_StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.Student_StatusCountArgs<ExtArgs>
            result: $Utils.Optional<Student_StatusCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Professor_Role: {
        payload: Prisma.$Professor_RolePayload<ExtArgs>
        fields: Prisma.Professor_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Professor_RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Professor_RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          findFirst: {
            args: Prisma.Professor_RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Professor_RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          findMany: {
            args: Prisma.Professor_RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>[]
          }
          create: {
            args: Prisma.Professor_RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          createMany: {
            args: Prisma.Professor_RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Professor_RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>[]
          }
          delete: {
            args: Prisma.Professor_RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          update: {
            args: Prisma.Professor_RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          deleteMany: {
            args: Prisma.Professor_RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Professor_RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Professor_RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>[]
          }
          upsert: {
            args: Prisma.Professor_RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Professor_RolePayload>
          }
          aggregate: {
            args: Prisma.Professor_RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor_Role>
          }
          groupBy: {
            args: Prisma.Professor_RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Professor_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.Professor_RoleCountArgs<ExtArgs>
            result: $Utils.Optional<Professor_RoleCountAggregateOutputType> | number
          }
        }
      }
      Outsider: {
        payload: Prisma.$OutsiderPayload<ExtArgs>
        fields: Prisma.OutsiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutsiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutsiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          findFirst: {
            args: Prisma.OutsiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutsiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          findMany: {
            args: Prisma.OutsiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>[]
          }
          create: {
            args: Prisma.OutsiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          createMany: {
            args: Prisma.OutsiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutsiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>[]
          }
          delete: {
            args: Prisma.OutsiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          update: {
            args: Prisma.OutsiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          deleteMany: {
            args: Prisma.OutsiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutsiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutsiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>[]
          }
          upsert: {
            args: Prisma.OutsiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutsiderPayload>
          }
          aggregate: {
            args: Prisma.OutsiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutsider>
          }
          groupBy: {
            args: Prisma.OutsiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutsiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutsiderCountArgs<ExtArgs>
            result: $Utils.Optional<OutsiderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    user_Status?: User_StatusOmit
    admin?: AdminOmit
    student?: StudentOmit
    student_Status?: Student_StatusOmit
    professor?: ProfessorOmit
    professor_Role?: Professor_RoleOmit
    outsider?: OutsiderOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    admins: number
    students: number
    professors: number
    outsiders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | UserCountOutputTypeCountAdminsArgs
    students?: boolean | UserCountOutputTypeCountStudentsArgs
    professors?: boolean | UserCountOutputTypeCountProfessorsArgs
    outsiders?: boolean | UserCountOutputTypeCountOutsidersArgs
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
  export type UserCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutsidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutsiderWhereInput
  }


  /**
   * Count Type User_StatusCountOutputType
   */

  export type User_StatusCountOutputType = {
    users: number
  }

  export type User_StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | User_StatusCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * User_StatusCountOutputType without action
   */
  export type User_StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_StatusCountOutputType
     */
    select?: User_StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_StatusCountOutputType without action
   */
  export type User_StatusCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type Student_StatusCountOutputType
   */

  export type Student_StatusCountOutputType = {
    students: number
  }

  export type Student_StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Student_StatusCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * Student_StatusCountOutputType without action
   */
  export type Student_StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_StatusCountOutputType
     */
    select?: Student_StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Student_StatusCountOutputType without action
   */
  export type Student_StatusCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type Professor_RoleCountOutputType
   */

  export type Professor_RoleCountOutputType = {
    professors: number
  }

  export type Professor_RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professors?: boolean | Professor_RoleCountOutputTypeCountProfessorsArgs
  }

  // Custom InputTypes
  /**
   * Professor_RoleCountOutputType without action
   */
  export type Professor_RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_RoleCountOutputType
     */
    select?: Professor_RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Professor_RoleCountOutputType without action
   */
  export type Professor_RoleCountOutputTypeCountProfessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
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
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    uuid_user: string | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    status: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uuid_user: string | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    status: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    uuid_user: number
    email: number
    password: number
    firstName: number
    middleName: number
    lastName: number
    status: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    status?: true
  }

  export type UserSumAggregateInputType = {
    status?: true
  }

  export type UserMinAggregateInputType = {
    uuid_user?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    uuid_user?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    uuid_user?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    status?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
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
    uuid_user: string
    email: string
    password: string
    firstName: string | null
    middleName: string | null
    lastName: string | null
    status: number | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    uuid_user?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
    admins?: boolean | User$adminsArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    professors?: boolean | User$professorsArgs<ExtArgs>
    outsiders?: boolean | User$outsidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_user?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_user?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid_user?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    status?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid_user" | "email" | "password" | "firstName" | "middleName" | "lastName" | "status" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
    admins?: boolean | User$adminsArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    professors?: boolean | User$professorsArgs<ExtArgs>
    outsiders?: boolean | User$outsidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStatus?: boolean | User$userStatusArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userStatus: Prisma.$User_StatusPayload<ExtArgs> | null
      admins: Prisma.$AdminPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      professors: Prisma.$ProfessorPayload<ExtArgs>[]
      outsiders: Prisma.$OutsiderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid_user: string
      email: string
      password: string
      firstName: string | null
      middleName: string | null
      lastName: string | null
      status: number | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid_user`
     * const userWithUuid_userOnly = await prisma.user.findMany({ select: { uuid_user: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uuid_user`
     * const userWithUuid_userOnly = await prisma.user.createManyAndReturn({
     *   select: { uuid_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uuid_user`
     * const userWithUuid_userOnly = await prisma.user.updateManyAndReturn({
     *   select: { uuid_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userStatus<T extends User$userStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatusArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admins<T extends User$adminsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professors<T extends User$professorsArgs<ExtArgs> = {}>(args?: Subset<T, User$professorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outsiders<T extends User$outsidersArgs<ExtArgs> = {}>(args?: Subset<T, User$outsidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uuid_user: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userStatus
   */
  export type User$userStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    where?: User_StatusWhereInput
  }

  /**
   * User.admins
   */
  export type User$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.professors
   */
  export type User$professorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    cursor?: ProfessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * User.outsiders
   */
  export type User$outsidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    where?: OutsiderWhereInput
    orderBy?: OutsiderOrderByWithRelationInput | OutsiderOrderByWithRelationInput[]
    cursor?: OutsiderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutsiderScalarFieldEnum | OutsiderScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model User_Status
   */

  export type AggregateUser_Status = {
    _count: User_StatusCountAggregateOutputType | null
    _avg: User_StatusAvgAggregateOutputType | null
    _sum: User_StatusSumAggregateOutputType | null
    _min: User_StatusMinAggregateOutputType | null
    _max: User_StatusMaxAggregateOutputType | null
  }

  export type User_StatusAvgAggregateOutputType = {
    user_status_id: number | null
  }

  export type User_StatusSumAggregateOutputType = {
    user_status_id: number | null
  }

  export type User_StatusMinAggregateOutputType = {
    user_status_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_StatusMaxAggregateOutputType = {
    user_status_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_StatusCountAggregateOutputType = {
    user_status_id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type User_StatusAvgAggregateInputType = {
    user_status_id?: true
  }

  export type User_StatusSumAggregateInputType = {
    user_status_id?: true
  }

  export type User_StatusMinAggregateInputType = {
    user_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_StatusMaxAggregateInputType = {
    user_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_StatusCountAggregateInputType = {
    user_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type User_StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Status to aggregate.
     */
    where?: User_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Statuses to fetch.
     */
    orderBy?: User_StatusOrderByWithRelationInput | User_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Statuses
    **/
    _count?: true | User_StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_StatusMaxAggregateInputType
  }

  export type GetUser_StatusAggregateType<T extends User_StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Status[P]>
      : GetScalarType<T[P], AggregateUser_Status[P]>
  }




  export type User_StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_StatusWhereInput
    orderBy?: User_StatusOrderByWithAggregationInput | User_StatusOrderByWithAggregationInput[]
    by: User_StatusScalarFieldEnum[] | User_StatusScalarFieldEnum
    having?: User_StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_StatusCountAggregateInputType | true
    _avg?: User_StatusAvgAggregateInputType
    _sum?: User_StatusSumAggregateInputType
    _min?: User_StatusMinAggregateInputType
    _max?: User_StatusMaxAggregateInputType
  }

  export type User_StatusGroupByOutputType = {
    user_status_id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: User_StatusCountAggregateOutputType | null
    _avg: User_StatusAvgAggregateOutputType | null
    _sum: User_StatusSumAggregateOutputType | null
    _min: User_StatusMinAggregateOutputType | null
    _max: User_StatusMaxAggregateOutputType | null
  }

  type GetUser_StatusGroupByPayload<T extends User_StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_StatusGroupByOutputType[P]>
            : GetScalarType<T[P], User_StatusGroupByOutputType[P]>
        }
      >
    >


  export type User_StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | User_Status$usersArgs<ExtArgs>
    _count?: boolean | User_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Status"]>

  export type User_StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user_Status"]>

  export type User_StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user_Status"]>

  export type User_StatusSelectScalar = {
    user_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type User_StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_status_id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user_Status"]>
  export type User_StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | User_Status$usersArgs<ExtArgs>
    _count?: boolean | User_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type User_StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type User_StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $User_StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Status"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_status_id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user_Status"]>
    composites: {}
  }

  type User_StatusGetPayload<S extends boolean | null | undefined | User_StatusDefaultArgs> = $Result.GetResult<Prisma.$User_StatusPayload, S>

  type User_StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_StatusCountAggregateInputType | true
    }

  export interface User_StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Status'], meta: { name: 'User_Status' } }
    /**
     * Find zero or one User_Status that matches the filter.
     * @param {User_StatusFindUniqueArgs} args - Arguments to find a User_Status
     * @example
     * // Get one User_Status
     * const user_Status = await prisma.user_Status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_StatusFindUniqueArgs>(args: SelectSubset<T, User_StatusFindUniqueArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_StatusFindUniqueOrThrowArgs} args - Arguments to find a User_Status
     * @example
     * // Get one User_Status
     * const user_Status = await prisma.user_Status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, User_StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusFindFirstArgs} args - Arguments to find a User_Status
     * @example
     * // Get one User_Status
     * const user_Status = await prisma.user_Status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_StatusFindFirstArgs>(args?: SelectSubset<T, User_StatusFindFirstArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusFindFirstOrThrowArgs} args - Arguments to find a User_Status
     * @example
     * // Get one User_Status
     * const user_Status = await prisma.user_Status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, User_StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Statuses
     * const user_Statuses = await prisma.user_Status.findMany()
     * 
     * // Get first 10 User_Statuses
     * const user_Statuses = await prisma.user_Status.findMany({ take: 10 })
     * 
     * // Only select the `user_status_id`
     * const user_StatusWithUser_status_idOnly = await prisma.user_Status.findMany({ select: { user_status_id: true } })
     * 
     */
    findMany<T extends User_StatusFindManyArgs>(args?: SelectSubset<T, User_StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_Status.
     * @param {User_StatusCreateArgs} args - Arguments to create a User_Status.
     * @example
     * // Create one User_Status
     * const User_Status = await prisma.user_Status.create({
     *   data: {
     *     // ... data to create a User_Status
     *   }
     * })
     * 
     */
    create<T extends User_StatusCreateArgs>(args: SelectSubset<T, User_StatusCreateArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_Statuses.
     * @param {User_StatusCreateManyArgs} args - Arguments to create many User_Statuses.
     * @example
     * // Create many User_Statuses
     * const user_Status = await prisma.user_Status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_StatusCreateManyArgs>(args?: SelectSubset<T, User_StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_Statuses and returns the data saved in the database.
     * @param {User_StatusCreateManyAndReturnArgs} args - Arguments to create many User_Statuses.
     * @example
     * // Create many User_Statuses
     * const user_Status = await prisma.user_Status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_Statuses and only return the `user_status_id`
     * const user_StatusWithUser_status_idOnly = await prisma.user_Status.createManyAndReturn({
     *   select: { user_status_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, User_StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_Status.
     * @param {User_StatusDeleteArgs} args - Arguments to delete one User_Status.
     * @example
     * // Delete one User_Status
     * const User_Status = await prisma.user_Status.delete({
     *   where: {
     *     // ... filter to delete one User_Status
     *   }
     * })
     * 
     */
    delete<T extends User_StatusDeleteArgs>(args: SelectSubset<T, User_StatusDeleteArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_Status.
     * @param {User_StatusUpdateArgs} args - Arguments to update one User_Status.
     * @example
     * // Update one User_Status
     * const user_Status = await prisma.user_Status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_StatusUpdateArgs>(args: SelectSubset<T, User_StatusUpdateArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_Statuses.
     * @param {User_StatusDeleteManyArgs} args - Arguments to filter User_Statuses to delete.
     * @example
     * // Delete a few User_Statuses
     * const { count } = await prisma.user_Status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_StatusDeleteManyArgs>(args?: SelectSubset<T, User_StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Statuses
     * const user_Status = await prisma.user_Status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_StatusUpdateManyArgs>(args: SelectSubset<T, User_StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Statuses and returns the data updated in the database.
     * @param {User_StatusUpdateManyAndReturnArgs} args - Arguments to update many User_Statuses.
     * @example
     * // Update many User_Statuses
     * const user_Status = await prisma.user_Status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_Statuses and only return the `user_status_id`
     * const user_StatusWithUser_status_idOnly = await prisma.user_Status.updateManyAndReturn({
     *   select: { user_status_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, User_StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_Status.
     * @param {User_StatusUpsertArgs} args - Arguments to update or create a User_Status.
     * @example
     * // Update or create a User_Status
     * const user_Status = await prisma.user_Status.upsert({
     *   create: {
     *     // ... data to create a User_Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Status we want to update
     *   }
     * })
     */
    upsert<T extends User_StatusUpsertArgs>(args: SelectSubset<T, User_StatusUpsertArgs<ExtArgs>>): Prisma__User_StatusClient<$Result.GetResult<Prisma.$User_StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusCountArgs} args - Arguments to filter User_Statuses to count.
     * @example
     * // Count the number of User_Statuses
     * const count = await prisma.user_Status.count({
     *   where: {
     *     // ... the filter for the User_Statuses we want to count
     *   }
     * })
    **/
    count<T extends User_StatusCountArgs>(
      args?: Subset<T, User_StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_StatusAggregateArgs>(args: Subset<T, User_StatusAggregateArgs>): Prisma.PrismaPromise<GetUser_StatusAggregateType<T>>

    /**
     * Group by User_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_StatusGroupByArgs} args - Group by arguments.
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
      T extends User_StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_StatusGroupByArgs['orderBy'] }
        : { orderBy?: User_StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_StatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Status model
   */
  readonly fields: User_StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends User_Status$usersArgs<ExtArgs> = {}>(args?: Subset<T, User_Status$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Status model
   */
  interface User_StatusFieldRefs {
    readonly user_status_id: FieldRef<"User_Status", 'Int'>
    readonly name: FieldRef<"User_Status", 'String'>
    readonly createdAt: FieldRef<"User_Status", 'DateTime'>
    readonly updatedAt: FieldRef<"User_Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_Status findUnique
   */
  export type User_StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter, which User_Status to fetch.
     */
    where: User_StatusWhereUniqueInput
  }

  /**
   * User_Status findUniqueOrThrow
   */
  export type User_StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter, which User_Status to fetch.
     */
    where: User_StatusWhereUniqueInput
  }

  /**
   * User_Status findFirst
   */
  export type User_StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter, which User_Status to fetch.
     */
    where?: User_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Statuses to fetch.
     */
    orderBy?: User_StatusOrderByWithRelationInput | User_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Statuses.
     */
    cursor?: User_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Statuses.
     */
    distinct?: User_StatusScalarFieldEnum | User_StatusScalarFieldEnum[]
  }

  /**
   * User_Status findFirstOrThrow
   */
  export type User_StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter, which User_Status to fetch.
     */
    where?: User_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Statuses to fetch.
     */
    orderBy?: User_StatusOrderByWithRelationInput | User_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Statuses.
     */
    cursor?: User_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Statuses.
     */
    distinct?: User_StatusScalarFieldEnum | User_StatusScalarFieldEnum[]
  }

  /**
   * User_Status findMany
   */
  export type User_StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter, which User_Statuses to fetch.
     */
    where?: User_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Statuses to fetch.
     */
    orderBy?: User_StatusOrderByWithRelationInput | User_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Statuses.
     */
    cursor?: User_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Statuses.
     */
    skip?: number
    distinct?: User_StatusScalarFieldEnum | User_StatusScalarFieldEnum[]
  }

  /**
   * User_Status create
   */
  export type User_StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Status.
     */
    data: XOR<User_StatusCreateInput, User_StatusUncheckedCreateInput>
  }

  /**
   * User_Status createMany
   */
  export type User_StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Statuses.
     */
    data: User_StatusCreateManyInput | User_StatusCreateManyInput[]
  }

  /**
   * User_Status createManyAndReturn
   */
  export type User_StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * The data used to create many User_Statuses.
     */
    data: User_StatusCreateManyInput | User_StatusCreateManyInput[]
  }

  /**
   * User_Status update
   */
  export type User_StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Status.
     */
    data: XOR<User_StatusUpdateInput, User_StatusUncheckedUpdateInput>
    /**
     * Choose, which User_Status to update.
     */
    where: User_StatusWhereUniqueInput
  }

  /**
   * User_Status updateMany
   */
  export type User_StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Statuses.
     */
    data: XOR<User_StatusUpdateManyMutationInput, User_StatusUncheckedUpdateManyInput>
    /**
     * Filter which User_Statuses to update
     */
    where?: User_StatusWhereInput
    /**
     * Limit how many User_Statuses to update.
     */
    limit?: number
  }

  /**
   * User_Status updateManyAndReturn
   */
  export type User_StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * The data used to update User_Statuses.
     */
    data: XOR<User_StatusUpdateManyMutationInput, User_StatusUncheckedUpdateManyInput>
    /**
     * Filter which User_Statuses to update
     */
    where?: User_StatusWhereInput
    /**
     * Limit how many User_Statuses to update.
     */
    limit?: number
  }

  /**
   * User_Status upsert
   */
  export type User_StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Status to update in case it exists.
     */
    where: User_StatusWhereUniqueInput
    /**
     * In case the User_Status found by the `where` argument doesn't exist, create a new User_Status with this data.
     */
    create: XOR<User_StatusCreateInput, User_StatusUncheckedCreateInput>
    /**
     * In case the User_Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_StatusUpdateInput, User_StatusUncheckedUpdateInput>
  }

  /**
   * User_Status delete
   */
  export type User_StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
    /**
     * Filter which User_Status to delete.
     */
    where: User_StatusWhereUniqueInput
  }

  /**
   * User_Status deleteMany
   */
  export type User_StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Statuses to delete
     */
    where?: User_StatusWhereInput
    /**
     * Limit how many User_Statuses to delete.
     */
    limit?: number
  }

  /**
   * User_Status.users
   */
  export type User_Status$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User_Status without action
   */
  export type User_StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Status
     */
    select?: User_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Status
     */
    omit?: User_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_StatusInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    uuid_admin: string | null
    uuidUser: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    uuid_admin: string | null
    uuidUser: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    uuid_admin: number
    uuidUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    uuid_admin?: true
    uuidUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    uuid_admin?: true
    uuidUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    uuid_admin?: true
    uuidUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    uuid_admin: string
    uuidUser: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_admin?: boolean
    uuidUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_admin?: boolean
    uuidUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_admin?: boolean
    uuidUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    uuid_admin?: boolean
    uuidUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid_admin" | "uuidUser" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid_admin: string
      uuidUser: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `uuid_admin`
     * const adminWithUuid_adminOnly = await prisma.admin.findMany({ select: { uuid_admin: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `uuid_admin`
     * const adminWithUuid_adminOnly = await prisma.admin.createManyAndReturn({
     *   select: { uuid_admin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `uuid_admin`
     * const adminWithUuid_adminOnly = await prisma.admin.updateManyAndReturn({
     *   select: { uuid_admin: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly uuid_admin: FieldRef<"Admin", 'String'>
    readonly uuidUser: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    universityId: number | null
    averageGrade: number | null
    status: number | null
  }

  export type StudentSumAggregateOutputType = {
    universityId: bigint | null
    averageGrade: number | null
    status: number | null
  }

  export type StudentMinAggregateOutputType = {
    uuid_student: string | null
    uuidUser: string | null
    universityId: bigint | null
    averageGrade: number | null
    enrollmentYear: Date | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    uuid_student: string | null
    uuidUser: string | null
    universityId: bigint | null
    averageGrade: number | null
    enrollmentYear: Date | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    uuid_student: number
    uuidUser: number
    universityId: number
    averageGrade: number
    enrollmentYear: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    universityId?: true
    averageGrade?: true
    status?: true
  }

  export type StudentSumAggregateInputType = {
    universityId?: true
    averageGrade?: true
    status?: true
  }

  export type StudentMinAggregateInputType = {
    uuid_student?: true
    uuidUser?: true
    universityId?: true
    averageGrade?: true
    enrollmentYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    uuid_student?: true
    uuidUser?: true
    universityId?: true
    averageGrade?: true
    enrollmentYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    uuid_student?: true
    uuidUser?: true
    universityId?: true
    averageGrade?: true
    enrollmentYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    uuid_student: string
    uuidUser: string
    universityId: bigint
    averageGrade: number | null
    enrollmentYear: Date | null
    status: number | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_student?: boolean
    uuidUser?: boolean
    universityId?: boolean
    averageGrade?: boolean
    enrollmentYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_student?: boolean
    uuidUser?: boolean
    universityId?: boolean
    averageGrade?: boolean
    enrollmentYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_student?: boolean
    uuidUser?: boolean
    universityId?: boolean
    averageGrade?: boolean
    enrollmentYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    uuid_student?: boolean
    uuidUser?: boolean
    universityId?: boolean
    averageGrade?: boolean
    enrollmentYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid_student" | "uuidUser" | "universityId" | "averageGrade" | "enrollmentYear" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentStatus?: boolean | Student$studentStatusArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studentStatus: Prisma.$Student_StatusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid_student: string
      uuidUser: string
      universityId: bigint
      averageGrade: number | null
      enrollmentYear: Date | null
      status: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `uuid_student`
     * const studentWithUuid_studentOnly = await prisma.student.findMany({ select: { uuid_student: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `uuid_student`
     * const studentWithUuid_studentOnly = await prisma.student.createManyAndReturn({
     *   select: { uuid_student: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `uuid_student`
     * const studentWithUuid_studentOnly = await prisma.student.updateManyAndReturn({
     *   select: { uuid_student: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentStatus<T extends Student$studentStatusArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentStatusArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly uuid_student: FieldRef<"Student", 'String'>
    readonly uuidUser: FieldRef<"Student", 'String'>
    readonly universityId: FieldRef<"Student", 'BigInt'>
    readonly averageGrade: FieldRef<"Student", 'Float'>
    readonly enrollmentYear: FieldRef<"Student", 'DateTime'>
    readonly status: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.studentStatus
   */
  export type Student$studentStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    where?: Student_StatusWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Student_Status
   */

  export type AggregateStudent_Status = {
    _count: Student_StatusCountAggregateOutputType | null
    _avg: Student_StatusAvgAggregateOutputType | null
    _sum: Student_StatusSumAggregateOutputType | null
    _min: Student_StatusMinAggregateOutputType | null
    _max: Student_StatusMaxAggregateOutputType | null
  }

  export type Student_StatusAvgAggregateOutputType = {
    student_status_id: number | null
  }

  export type Student_StatusSumAggregateOutputType = {
    student_status_id: number | null
  }

  export type Student_StatusMinAggregateOutputType = {
    student_status_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Student_StatusMaxAggregateOutputType = {
    student_status_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Student_StatusCountAggregateOutputType = {
    student_status_id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Student_StatusAvgAggregateInputType = {
    student_status_id?: true
  }

  export type Student_StatusSumAggregateInputType = {
    student_status_id?: true
  }

  export type Student_StatusMinAggregateInputType = {
    student_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Student_StatusMaxAggregateInputType = {
    student_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Student_StatusCountAggregateInputType = {
    student_status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Student_StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_Status to aggregate.
     */
    where?: Student_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Statuses to fetch.
     */
    orderBy?: Student_StatusOrderByWithRelationInput | Student_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Student_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Student_Statuses
    **/
    _count?: true | Student_StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_StatusMaxAggregateInputType
  }

  export type GetStudent_StatusAggregateType<T extends Student_StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_Status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_Status[P]>
      : GetScalarType<T[P], AggregateStudent_Status[P]>
  }




  export type Student_StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_StatusWhereInput
    orderBy?: Student_StatusOrderByWithAggregationInput | Student_StatusOrderByWithAggregationInput[]
    by: Student_StatusScalarFieldEnum[] | Student_StatusScalarFieldEnum
    having?: Student_StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_StatusCountAggregateInputType | true
    _avg?: Student_StatusAvgAggregateInputType
    _sum?: Student_StatusSumAggregateInputType
    _min?: Student_StatusMinAggregateInputType
    _max?: Student_StatusMaxAggregateInputType
  }

  export type Student_StatusGroupByOutputType = {
    student_status_id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: Student_StatusCountAggregateOutputType | null
    _avg: Student_StatusAvgAggregateOutputType | null
    _sum: Student_StatusSumAggregateOutputType | null
    _min: Student_StatusMinAggregateOutputType | null
    _max: Student_StatusMaxAggregateOutputType | null
  }

  type GetStudent_StatusGroupByPayload<T extends Student_StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_StatusGroupByOutputType[P]>
            : GetScalarType<T[P], Student_StatusGroupByOutputType[P]>
        }
      >
    >


  export type Student_StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Student_Status$studentsArgs<ExtArgs>
    _count?: boolean | Student_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_Status"]>

  export type Student_StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student_Status"]>

  export type Student_StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student_Status"]>

  export type Student_StatusSelectScalar = {
    student_status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Student_StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_status_id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["student_Status"]>
  export type Student_StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Student_Status$studentsArgs<ExtArgs>
    _count?: boolean | Student_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Student_StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Student_StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Student_StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student_Status"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_status_id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student_Status"]>
    composites: {}
  }

  type Student_StatusGetPayload<S extends boolean | null | undefined | Student_StatusDefaultArgs> = $Result.GetResult<Prisma.$Student_StatusPayload, S>

  type Student_StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Student_StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_StatusCountAggregateInputType | true
    }

  export interface Student_StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student_Status'], meta: { name: 'Student_Status' } }
    /**
     * Find zero or one Student_Status that matches the filter.
     * @param {Student_StatusFindUniqueArgs} args - Arguments to find a Student_Status
     * @example
     * // Get one Student_Status
     * const student_Status = await prisma.student_Status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Student_StatusFindUniqueArgs>(args: SelectSubset<T, Student_StatusFindUniqueArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Student_StatusFindUniqueOrThrowArgs} args - Arguments to find a Student_Status
     * @example
     * // Get one Student_Status
     * const student_Status = await prisma.student_Status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Student_StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, Student_StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusFindFirstArgs} args - Arguments to find a Student_Status
     * @example
     * // Get one Student_Status
     * const student_Status = await prisma.student_Status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Student_StatusFindFirstArgs>(args?: SelectSubset<T, Student_StatusFindFirstArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusFindFirstOrThrowArgs} args - Arguments to find a Student_Status
     * @example
     * // Get one Student_Status
     * const student_Status = await prisma.student_Status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Student_StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, Student_StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_Statuses
     * const student_Statuses = await prisma.student_Status.findMany()
     * 
     * // Get first 10 Student_Statuses
     * const student_Statuses = await prisma.student_Status.findMany({ take: 10 })
     * 
     * // Only select the `student_status_id`
     * const student_StatusWithStudent_status_idOnly = await prisma.student_Status.findMany({ select: { student_status_id: true } })
     * 
     */
    findMany<T extends Student_StatusFindManyArgs>(args?: SelectSubset<T, Student_StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_Status.
     * @param {Student_StatusCreateArgs} args - Arguments to create a Student_Status.
     * @example
     * // Create one Student_Status
     * const Student_Status = await prisma.student_Status.create({
     *   data: {
     *     // ... data to create a Student_Status
     *   }
     * })
     * 
     */
    create<T extends Student_StatusCreateArgs>(args: SelectSubset<T, Student_StatusCreateArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_Statuses.
     * @param {Student_StatusCreateManyArgs} args - Arguments to create many Student_Statuses.
     * @example
     * // Create many Student_Statuses
     * const student_Status = await prisma.student_Status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Student_StatusCreateManyArgs>(args?: SelectSubset<T, Student_StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_Statuses and returns the data saved in the database.
     * @param {Student_StatusCreateManyAndReturnArgs} args - Arguments to create many Student_Statuses.
     * @example
     * // Create many Student_Statuses
     * const student_Status = await prisma.student_Status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_Statuses and only return the `student_status_id`
     * const student_StatusWithStudent_status_idOnly = await prisma.student_Status.createManyAndReturn({
     *   select: { student_status_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Student_StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, Student_StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_Status.
     * @param {Student_StatusDeleteArgs} args - Arguments to delete one Student_Status.
     * @example
     * // Delete one Student_Status
     * const Student_Status = await prisma.student_Status.delete({
     *   where: {
     *     // ... filter to delete one Student_Status
     *   }
     * })
     * 
     */
    delete<T extends Student_StatusDeleteArgs>(args: SelectSubset<T, Student_StatusDeleteArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_Status.
     * @param {Student_StatusUpdateArgs} args - Arguments to update one Student_Status.
     * @example
     * // Update one Student_Status
     * const student_Status = await prisma.student_Status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Student_StatusUpdateArgs>(args: SelectSubset<T, Student_StatusUpdateArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_Statuses.
     * @param {Student_StatusDeleteManyArgs} args - Arguments to filter Student_Statuses to delete.
     * @example
     * // Delete a few Student_Statuses
     * const { count } = await prisma.student_Status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Student_StatusDeleteManyArgs>(args?: SelectSubset<T, Student_StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_Statuses
     * const student_Status = await prisma.student_Status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Student_StatusUpdateManyArgs>(args: SelectSubset<T, Student_StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_Statuses and returns the data updated in the database.
     * @param {Student_StatusUpdateManyAndReturnArgs} args - Arguments to update many Student_Statuses.
     * @example
     * // Update many Student_Statuses
     * const student_Status = await prisma.student_Status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_Statuses and only return the `student_status_id`
     * const student_StatusWithStudent_status_idOnly = await prisma.student_Status.updateManyAndReturn({
     *   select: { student_status_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Student_StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, Student_StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_Status.
     * @param {Student_StatusUpsertArgs} args - Arguments to update or create a Student_Status.
     * @example
     * // Update or create a Student_Status
     * const student_Status = await prisma.student_Status.upsert({
     *   create: {
     *     // ... data to create a Student_Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_Status we want to update
     *   }
     * })
     */
    upsert<T extends Student_StatusUpsertArgs>(args: SelectSubset<T, Student_StatusUpsertArgs<ExtArgs>>): Prisma__Student_StatusClient<$Result.GetResult<Prisma.$Student_StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusCountArgs} args - Arguments to filter Student_Statuses to count.
     * @example
     * // Count the number of Student_Statuses
     * const count = await prisma.student_Status.count({
     *   where: {
     *     // ... the filter for the Student_Statuses we want to count
     *   }
     * })
    **/
    count<T extends Student_StatusCountArgs>(
      args?: Subset<T, Student_StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Student_StatusAggregateArgs>(args: Subset<T, Student_StatusAggregateArgs>): Prisma.PrismaPromise<GetStudent_StatusAggregateType<T>>

    /**
     * Group by Student_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_StatusGroupByArgs} args - Group by arguments.
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
      T extends Student_StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Student_StatusGroupByArgs['orderBy'] }
        : { orderBy?: Student_StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Student_StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_StatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student_Status model
   */
  readonly fields: Student_StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student_Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Student_StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Student_Status$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Student_Status$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student_Status model
   */
  interface Student_StatusFieldRefs {
    readonly student_status_id: FieldRef<"Student_Status", 'Int'>
    readonly name: FieldRef<"Student_Status", 'String'>
    readonly createdAt: FieldRef<"Student_Status", 'DateTime'>
    readonly updatedAt: FieldRef<"Student_Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student_Status findUnique
   */
  export type Student_StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Student_Status to fetch.
     */
    where: Student_StatusWhereUniqueInput
  }

  /**
   * Student_Status findUniqueOrThrow
   */
  export type Student_StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Student_Status to fetch.
     */
    where: Student_StatusWhereUniqueInput
  }

  /**
   * Student_Status findFirst
   */
  export type Student_StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Student_Status to fetch.
     */
    where?: Student_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Statuses to fetch.
     */
    orderBy?: Student_StatusOrderByWithRelationInput | Student_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_Statuses.
     */
    cursor?: Student_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_Statuses.
     */
    distinct?: Student_StatusScalarFieldEnum | Student_StatusScalarFieldEnum[]
  }

  /**
   * Student_Status findFirstOrThrow
   */
  export type Student_StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Student_Status to fetch.
     */
    where?: Student_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Statuses to fetch.
     */
    orderBy?: Student_StatusOrderByWithRelationInput | Student_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_Statuses.
     */
    cursor?: Student_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_Statuses.
     */
    distinct?: Student_StatusScalarFieldEnum | Student_StatusScalarFieldEnum[]
  }

  /**
   * Student_Status findMany
   */
  export type Student_StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Student_Statuses to fetch.
     */
    where?: Student_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Statuses to fetch.
     */
    orderBy?: Student_StatusOrderByWithRelationInput | Student_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Student_Statuses.
     */
    cursor?: Student_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Statuses.
     */
    skip?: number
    distinct?: Student_StatusScalarFieldEnum | Student_StatusScalarFieldEnum[]
  }

  /**
   * Student_Status create
   */
  export type Student_StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Student_Status.
     */
    data: XOR<Student_StatusCreateInput, Student_StatusUncheckedCreateInput>
  }

  /**
   * Student_Status createMany
   */
  export type Student_StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Student_Statuses.
     */
    data: Student_StatusCreateManyInput | Student_StatusCreateManyInput[]
  }

  /**
   * Student_Status createManyAndReturn
   */
  export type Student_StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Student_Statuses.
     */
    data: Student_StatusCreateManyInput | Student_StatusCreateManyInput[]
  }

  /**
   * Student_Status update
   */
  export type Student_StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Student_Status.
     */
    data: XOR<Student_StatusUpdateInput, Student_StatusUncheckedUpdateInput>
    /**
     * Choose, which Student_Status to update.
     */
    where: Student_StatusWhereUniqueInput
  }

  /**
   * Student_Status updateMany
   */
  export type Student_StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Student_Statuses.
     */
    data: XOR<Student_StatusUpdateManyMutationInput, Student_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Student_Statuses to update
     */
    where?: Student_StatusWhereInput
    /**
     * Limit how many Student_Statuses to update.
     */
    limit?: number
  }

  /**
   * Student_Status updateManyAndReturn
   */
  export type Student_StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * The data used to update Student_Statuses.
     */
    data: XOR<Student_StatusUpdateManyMutationInput, Student_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Student_Statuses to update
     */
    where?: Student_StatusWhereInput
    /**
     * Limit how many Student_Statuses to update.
     */
    limit?: number
  }

  /**
   * Student_Status upsert
   */
  export type Student_StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Student_Status to update in case it exists.
     */
    where: Student_StatusWhereUniqueInput
    /**
     * In case the Student_Status found by the `where` argument doesn't exist, create a new Student_Status with this data.
     */
    create: XOR<Student_StatusCreateInput, Student_StatusUncheckedCreateInput>
    /**
     * In case the Student_Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Student_StatusUpdateInput, Student_StatusUncheckedUpdateInput>
  }

  /**
   * Student_Status delete
   */
  export type Student_StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
    /**
     * Filter which Student_Status to delete.
     */
    where: Student_StatusWhereUniqueInput
  }

  /**
   * Student_Status deleteMany
   */
  export type Student_StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_Statuses to delete
     */
    where?: Student_StatusWhereInput
    /**
     * Limit how many Student_Statuses to delete.
     */
    limit?: number
  }

  /**
   * Student_Status.students
   */
  export type Student_Status$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student_Status without action
   */
  export type Student_StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Status
     */
    select?: Student_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Status
     */
    omit?: Student_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_StatusInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    universityId: number | null
    role: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    universityId: bigint | null
    role: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    uuid_professor: string | null
    uuidUser: string | null
    universityId: bigint | null
    role: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    uuid_professor: string | null
    uuidUser: string | null
    universityId: bigint | null
    role: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    uuid_professor: number
    uuidUser: number
    universityId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    universityId?: true
    role?: true
  }

  export type ProfessorSumAggregateInputType = {
    universityId?: true
    role?: true
  }

  export type ProfessorMinAggregateInputType = {
    uuid_professor?: true
    uuidUser?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorMaxAggregateInputType = {
    uuid_professor?: true
    uuidUser?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorCountAggregateInputType = {
    uuid_professor?: true
    uuidUser?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    uuid_professor: string
    uuidUser: string
    universityId: bigint
    role: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_professor?: boolean
    uuidUser?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_professor?: boolean
    uuidUser?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_professor?: boolean
    uuidUser?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    uuid_professor?: boolean
    uuidUser?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid_professor" | "uuidUser" | "universityId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    professorRole?: boolean | Professor$professorRoleArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      professorRole: Prisma.$Professor_RolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid_professor: string
      uuidUser: string
      universityId: bigint
      role: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `uuid_professor`
     * const professorWithUuid_professorOnly = await prisma.professor.findMany({ select: { uuid_professor: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `uuid_professor`
     * const professorWithUuid_professorOnly = await prisma.professor.createManyAndReturn({
     *   select: { uuid_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `uuid_professor`
     * const professorWithUuid_professorOnly = await prisma.professor.updateManyAndReturn({
     *   select: { uuid_professor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professorRole<T extends Professor$professorRoleArgs<ExtArgs> = {}>(args?: Subset<T, Professor$professorRoleArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly uuid_professor: FieldRef<"Professor", 'String'>
    readonly uuidUser: FieldRef<"Professor", 'String'>
    readonly universityId: FieldRef<"Professor", 'BigInt'>
    readonly role: FieldRef<"Professor", 'Int'>
    readonly createdAt: FieldRef<"Professor", 'DateTime'>
    readonly updatedAt: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.professorRole
   */
  export type Professor$professorRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    where?: Professor_RoleWhereInput
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Professor_Role
   */

  export type AggregateProfessor_Role = {
    _count: Professor_RoleCountAggregateOutputType | null
    _avg: Professor_RoleAvgAggregateOutputType | null
    _sum: Professor_RoleSumAggregateOutputType | null
    _min: Professor_RoleMinAggregateOutputType | null
    _max: Professor_RoleMaxAggregateOutputType | null
  }

  export type Professor_RoleAvgAggregateOutputType = {
    professor_role_id: number | null
  }

  export type Professor_RoleSumAggregateOutputType = {
    professor_role_id: number | null
  }

  export type Professor_RoleMinAggregateOutputType = {
    professor_role_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Professor_RoleMaxAggregateOutputType = {
    professor_role_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Professor_RoleCountAggregateOutputType = {
    professor_role_id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Professor_RoleAvgAggregateInputType = {
    professor_role_id?: true
  }

  export type Professor_RoleSumAggregateInputType = {
    professor_role_id?: true
  }

  export type Professor_RoleMinAggregateInputType = {
    professor_role_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Professor_RoleMaxAggregateInputType = {
    professor_role_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Professor_RoleCountAggregateInputType = {
    professor_role_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Professor_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor_Role to aggregate.
     */
    where?: Professor_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professor_Roles to fetch.
     */
    orderBy?: Professor_RoleOrderByWithRelationInput | Professor_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Professor_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professor_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professor_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professor_Roles
    **/
    _count?: true | Professor_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Professor_RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Professor_RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Professor_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Professor_RoleMaxAggregateInputType
  }

  export type GetProfessor_RoleAggregateType<T extends Professor_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor_Role[P]>
      : GetScalarType<T[P], AggregateProfessor_Role[P]>
  }




  export type Professor_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Professor_RoleWhereInput
    orderBy?: Professor_RoleOrderByWithAggregationInput | Professor_RoleOrderByWithAggregationInput[]
    by: Professor_RoleScalarFieldEnum[] | Professor_RoleScalarFieldEnum
    having?: Professor_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Professor_RoleCountAggregateInputType | true
    _avg?: Professor_RoleAvgAggregateInputType
    _sum?: Professor_RoleSumAggregateInputType
    _min?: Professor_RoleMinAggregateInputType
    _max?: Professor_RoleMaxAggregateInputType
  }

  export type Professor_RoleGroupByOutputType = {
    professor_role_id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: Professor_RoleCountAggregateOutputType | null
    _avg: Professor_RoleAvgAggregateOutputType | null
    _sum: Professor_RoleSumAggregateOutputType | null
    _min: Professor_RoleMinAggregateOutputType | null
    _max: Professor_RoleMaxAggregateOutputType | null
  }

  type GetProfessor_RoleGroupByPayload<T extends Professor_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Professor_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Professor_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Professor_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], Professor_RoleGroupByOutputType[P]>
        }
      >
    >


  export type Professor_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_role_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professors?: boolean | Professor_Role$professorsArgs<ExtArgs>
    _count?: boolean | Professor_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor_Role"]>

  export type Professor_RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_role_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor_Role"]>

  export type Professor_RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_role_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor_Role"]>

  export type Professor_RoleSelectScalar = {
    professor_role_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Professor_RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professor_role_id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["professor_Role"]>
  export type Professor_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professors?: boolean | Professor_Role$professorsArgs<ExtArgs>
    _count?: boolean | Professor_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Professor_RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Professor_RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Professor_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor_Role"
    objects: {
      professors: Prisma.$ProfessorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      professor_role_id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professor_Role"]>
    composites: {}
  }

  type Professor_RoleGetPayload<S extends boolean | null | undefined | Professor_RoleDefaultArgs> = $Result.GetResult<Prisma.$Professor_RolePayload, S>

  type Professor_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Professor_RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Professor_RoleCountAggregateInputType | true
    }

  export interface Professor_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor_Role'], meta: { name: 'Professor_Role' } }
    /**
     * Find zero or one Professor_Role that matches the filter.
     * @param {Professor_RoleFindUniqueArgs} args - Arguments to find a Professor_Role
     * @example
     * // Get one Professor_Role
     * const professor_Role = await prisma.professor_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Professor_RoleFindUniqueArgs>(args: SelectSubset<T, Professor_RoleFindUniqueArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor_Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Professor_RoleFindUniqueOrThrowArgs} args - Arguments to find a Professor_Role
     * @example
     * // Get one Professor_Role
     * const professor_Role = await prisma.professor_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Professor_RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, Professor_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleFindFirstArgs} args - Arguments to find a Professor_Role
     * @example
     * // Get one Professor_Role
     * const professor_Role = await prisma.professor_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Professor_RoleFindFirstArgs>(args?: SelectSubset<T, Professor_RoleFindFirstArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleFindFirstOrThrowArgs} args - Arguments to find a Professor_Role
     * @example
     * // Get one Professor_Role
     * const professor_Role = await prisma.professor_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Professor_RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, Professor_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professor_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professor_Roles
     * const professor_Roles = await prisma.professor_Role.findMany()
     * 
     * // Get first 10 Professor_Roles
     * const professor_Roles = await prisma.professor_Role.findMany({ take: 10 })
     * 
     * // Only select the `professor_role_id`
     * const professor_RoleWithProfessor_role_idOnly = await prisma.professor_Role.findMany({ select: { professor_role_id: true } })
     * 
     */
    findMany<T extends Professor_RoleFindManyArgs>(args?: SelectSubset<T, Professor_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor_Role.
     * @param {Professor_RoleCreateArgs} args - Arguments to create a Professor_Role.
     * @example
     * // Create one Professor_Role
     * const Professor_Role = await prisma.professor_Role.create({
     *   data: {
     *     // ... data to create a Professor_Role
     *   }
     * })
     * 
     */
    create<T extends Professor_RoleCreateArgs>(args: SelectSubset<T, Professor_RoleCreateArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professor_Roles.
     * @param {Professor_RoleCreateManyArgs} args - Arguments to create many Professor_Roles.
     * @example
     * // Create many Professor_Roles
     * const professor_Role = await prisma.professor_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Professor_RoleCreateManyArgs>(args?: SelectSubset<T, Professor_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professor_Roles and returns the data saved in the database.
     * @param {Professor_RoleCreateManyAndReturnArgs} args - Arguments to create many Professor_Roles.
     * @example
     * // Create many Professor_Roles
     * const professor_Role = await prisma.professor_Role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professor_Roles and only return the `professor_role_id`
     * const professor_RoleWithProfessor_role_idOnly = await prisma.professor_Role.createManyAndReturn({
     *   select: { professor_role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Professor_RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, Professor_RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor_Role.
     * @param {Professor_RoleDeleteArgs} args - Arguments to delete one Professor_Role.
     * @example
     * // Delete one Professor_Role
     * const Professor_Role = await prisma.professor_Role.delete({
     *   where: {
     *     // ... filter to delete one Professor_Role
     *   }
     * })
     * 
     */
    delete<T extends Professor_RoleDeleteArgs>(args: SelectSubset<T, Professor_RoleDeleteArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor_Role.
     * @param {Professor_RoleUpdateArgs} args - Arguments to update one Professor_Role.
     * @example
     * // Update one Professor_Role
     * const professor_Role = await prisma.professor_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Professor_RoleUpdateArgs>(args: SelectSubset<T, Professor_RoleUpdateArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professor_Roles.
     * @param {Professor_RoleDeleteManyArgs} args - Arguments to filter Professor_Roles to delete.
     * @example
     * // Delete a few Professor_Roles
     * const { count } = await prisma.professor_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Professor_RoleDeleteManyArgs>(args?: SelectSubset<T, Professor_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professor_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professor_Roles
     * const professor_Role = await prisma.professor_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Professor_RoleUpdateManyArgs>(args: SelectSubset<T, Professor_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professor_Roles and returns the data updated in the database.
     * @param {Professor_RoleUpdateManyAndReturnArgs} args - Arguments to update many Professor_Roles.
     * @example
     * // Update many Professor_Roles
     * const professor_Role = await prisma.professor_Role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professor_Roles and only return the `professor_role_id`
     * const professor_RoleWithProfessor_role_idOnly = await prisma.professor_Role.updateManyAndReturn({
     *   select: { professor_role_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Professor_RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, Professor_RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor_Role.
     * @param {Professor_RoleUpsertArgs} args - Arguments to update or create a Professor_Role.
     * @example
     * // Update or create a Professor_Role
     * const professor_Role = await prisma.professor_Role.upsert({
     *   create: {
     *     // ... data to create a Professor_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor_Role we want to update
     *   }
     * })
     */
    upsert<T extends Professor_RoleUpsertArgs>(args: SelectSubset<T, Professor_RoleUpsertArgs<ExtArgs>>): Prisma__Professor_RoleClient<$Result.GetResult<Prisma.$Professor_RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professor_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleCountArgs} args - Arguments to filter Professor_Roles to count.
     * @example
     * // Count the number of Professor_Roles
     * const count = await prisma.professor_Role.count({
     *   where: {
     *     // ... the filter for the Professor_Roles we want to count
     *   }
     * })
    **/
    count<T extends Professor_RoleCountArgs>(
      args?: Subset<T, Professor_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Professor_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Professor_RoleAggregateArgs>(args: Subset<T, Professor_RoleAggregateArgs>): Prisma.PrismaPromise<GetProfessor_RoleAggregateType<T>>

    /**
     * Group by Professor_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_RoleGroupByArgs} args - Group by arguments.
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
      T extends Professor_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Professor_RoleGroupByArgs['orderBy'] }
        : { orderBy?: Professor_RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Professor_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessor_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor_Role model
   */
  readonly fields: Professor_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Professor_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professors<T extends Professor_Role$professorsArgs<ExtArgs> = {}>(args?: Subset<T, Professor_Role$professorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor_Role model
   */
  interface Professor_RoleFieldRefs {
    readonly professor_role_id: FieldRef<"Professor_Role", 'Int'>
    readonly name: FieldRef<"Professor_Role", 'String'>
    readonly createdAt: FieldRef<"Professor_Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Professor_Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor_Role findUnique
   */
  export type Professor_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Professor_Role to fetch.
     */
    where: Professor_RoleWhereUniqueInput
  }

  /**
   * Professor_Role findUniqueOrThrow
   */
  export type Professor_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Professor_Role to fetch.
     */
    where: Professor_RoleWhereUniqueInput
  }

  /**
   * Professor_Role findFirst
   */
  export type Professor_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Professor_Role to fetch.
     */
    where?: Professor_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professor_Roles to fetch.
     */
    orderBy?: Professor_RoleOrderByWithRelationInput | Professor_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professor_Roles.
     */
    cursor?: Professor_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professor_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professor_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professor_Roles.
     */
    distinct?: Professor_RoleScalarFieldEnum | Professor_RoleScalarFieldEnum[]
  }

  /**
   * Professor_Role findFirstOrThrow
   */
  export type Professor_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Professor_Role to fetch.
     */
    where?: Professor_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professor_Roles to fetch.
     */
    orderBy?: Professor_RoleOrderByWithRelationInput | Professor_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professor_Roles.
     */
    cursor?: Professor_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professor_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professor_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professor_Roles.
     */
    distinct?: Professor_RoleScalarFieldEnum | Professor_RoleScalarFieldEnum[]
  }

  /**
   * Professor_Role findMany
   */
  export type Professor_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Professor_Roles to fetch.
     */
    where?: Professor_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professor_Roles to fetch.
     */
    orderBy?: Professor_RoleOrderByWithRelationInput | Professor_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professor_Roles.
     */
    cursor?: Professor_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professor_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professor_Roles.
     */
    skip?: number
    distinct?: Professor_RoleScalarFieldEnum | Professor_RoleScalarFieldEnum[]
  }

  /**
   * Professor_Role create
   */
  export type Professor_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor_Role.
     */
    data: XOR<Professor_RoleCreateInput, Professor_RoleUncheckedCreateInput>
  }

  /**
   * Professor_Role createMany
   */
  export type Professor_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professor_Roles.
     */
    data: Professor_RoleCreateManyInput | Professor_RoleCreateManyInput[]
  }

  /**
   * Professor_Role createManyAndReturn
   */
  export type Professor_RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Professor_Roles.
     */
    data: Professor_RoleCreateManyInput | Professor_RoleCreateManyInput[]
  }

  /**
   * Professor_Role update
   */
  export type Professor_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor_Role.
     */
    data: XOR<Professor_RoleUpdateInput, Professor_RoleUncheckedUpdateInput>
    /**
     * Choose, which Professor_Role to update.
     */
    where: Professor_RoleWhereUniqueInput
  }

  /**
   * Professor_Role updateMany
   */
  export type Professor_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professor_Roles.
     */
    data: XOR<Professor_RoleUpdateManyMutationInput, Professor_RoleUncheckedUpdateManyInput>
    /**
     * Filter which Professor_Roles to update
     */
    where?: Professor_RoleWhereInput
    /**
     * Limit how many Professor_Roles to update.
     */
    limit?: number
  }

  /**
   * Professor_Role updateManyAndReturn
   */
  export type Professor_RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * The data used to update Professor_Roles.
     */
    data: XOR<Professor_RoleUpdateManyMutationInput, Professor_RoleUncheckedUpdateManyInput>
    /**
     * Filter which Professor_Roles to update
     */
    where?: Professor_RoleWhereInput
    /**
     * Limit how many Professor_Roles to update.
     */
    limit?: number
  }

  /**
   * Professor_Role upsert
   */
  export type Professor_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor_Role to update in case it exists.
     */
    where: Professor_RoleWhereUniqueInput
    /**
     * In case the Professor_Role found by the `where` argument doesn't exist, create a new Professor_Role with this data.
     */
    create: XOR<Professor_RoleCreateInput, Professor_RoleUncheckedCreateInput>
    /**
     * In case the Professor_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Professor_RoleUpdateInput, Professor_RoleUncheckedUpdateInput>
  }

  /**
   * Professor_Role delete
   */
  export type Professor_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
    /**
     * Filter which Professor_Role to delete.
     */
    where: Professor_RoleWhereUniqueInput
  }

  /**
   * Professor_Role deleteMany
   */
  export type Professor_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor_Roles to delete
     */
    where?: Professor_RoleWhereInput
    /**
     * Limit how many Professor_Roles to delete.
     */
    limit?: number
  }

  /**
   * Professor_Role.professors
   */
  export type Professor_Role$professorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    cursor?: ProfessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor_Role without action
   */
  export type Professor_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor_Role
     */
    select?: Professor_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor_Role
     */
    omit?: Professor_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Professor_RoleInclude<ExtArgs> | null
  }


  /**
   * Model Outsider
   */

  export type AggregateOutsider = {
    _count: OutsiderCountAggregateOutputType | null
    _min: OutsiderMinAggregateOutputType | null
    _max: OutsiderMaxAggregateOutputType | null
  }

  export type OutsiderMinAggregateOutputType = {
    uuid_outsider: string | null
    uuidUser: string | null
    organizationName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutsiderMaxAggregateOutputType = {
    uuid_outsider: string | null
    uuidUser: string | null
    organizationName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutsiderCountAggregateOutputType = {
    uuid_outsider: number
    uuidUser: number
    organizationName: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutsiderMinAggregateInputType = {
    uuid_outsider?: true
    uuidUser?: true
    organizationName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutsiderMaxAggregateInputType = {
    uuid_outsider?: true
    uuidUser?: true
    organizationName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutsiderCountAggregateInputType = {
    uuid_outsider?: true
    uuidUser?: true
    organizationName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutsiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outsider to aggregate.
     */
    where?: OutsiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outsiders to fetch.
     */
    orderBy?: OutsiderOrderByWithRelationInput | OutsiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutsiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outsiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outsiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outsiders
    **/
    _count?: true | OutsiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutsiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutsiderMaxAggregateInputType
  }

  export type GetOutsiderAggregateType<T extends OutsiderAggregateArgs> = {
        [P in keyof T & keyof AggregateOutsider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutsider[P]>
      : GetScalarType<T[P], AggregateOutsider[P]>
  }




  export type OutsiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutsiderWhereInput
    orderBy?: OutsiderOrderByWithAggregationInput | OutsiderOrderByWithAggregationInput[]
    by: OutsiderScalarFieldEnum[] | OutsiderScalarFieldEnum
    having?: OutsiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutsiderCountAggregateInputType | true
    _min?: OutsiderMinAggregateInputType
    _max?: OutsiderMaxAggregateInputType
  }

  export type OutsiderGroupByOutputType = {
    uuid_outsider: string
    uuidUser: string
    organizationName: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: OutsiderCountAggregateOutputType | null
    _min: OutsiderMinAggregateOutputType | null
    _max: OutsiderMaxAggregateOutputType | null
  }

  type GetOutsiderGroupByPayload<T extends OutsiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutsiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutsiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutsiderGroupByOutputType[P]>
            : GetScalarType<T[P], OutsiderGroupByOutputType[P]>
        }
      >
    >


  export type OutsiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_outsider?: boolean
    uuidUser?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outsider"]>

  export type OutsiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_outsider?: boolean
    uuidUser?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outsider"]>

  export type OutsiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid_outsider?: boolean
    uuidUser?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outsider"]>

  export type OutsiderSelectScalar = {
    uuid_outsider?: boolean
    uuidUser?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutsiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid_outsider" | "uuidUser" | "organizationName" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["outsider"]>
  export type OutsiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutsiderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutsiderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutsiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outsider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid_outsider: string
      uuidUser: string
      organizationName: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outsider"]>
    composites: {}
  }

  type OutsiderGetPayload<S extends boolean | null | undefined | OutsiderDefaultArgs> = $Result.GetResult<Prisma.$OutsiderPayload, S>

  type OutsiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutsiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutsiderCountAggregateInputType | true
    }

  export interface OutsiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outsider'], meta: { name: 'Outsider' } }
    /**
     * Find zero or one Outsider that matches the filter.
     * @param {OutsiderFindUniqueArgs} args - Arguments to find a Outsider
     * @example
     * // Get one Outsider
     * const outsider = await prisma.outsider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutsiderFindUniqueArgs>(args: SelectSubset<T, OutsiderFindUniqueArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outsider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutsiderFindUniqueOrThrowArgs} args - Arguments to find a Outsider
     * @example
     * // Get one Outsider
     * const outsider = await prisma.outsider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutsiderFindUniqueOrThrowArgs>(args: SelectSubset<T, OutsiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outsider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderFindFirstArgs} args - Arguments to find a Outsider
     * @example
     * // Get one Outsider
     * const outsider = await prisma.outsider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutsiderFindFirstArgs>(args?: SelectSubset<T, OutsiderFindFirstArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outsider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderFindFirstOrThrowArgs} args - Arguments to find a Outsider
     * @example
     * // Get one Outsider
     * const outsider = await prisma.outsider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutsiderFindFirstOrThrowArgs>(args?: SelectSubset<T, OutsiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outsiders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outsiders
     * const outsiders = await prisma.outsider.findMany()
     * 
     * // Get first 10 Outsiders
     * const outsiders = await prisma.outsider.findMany({ take: 10 })
     * 
     * // Only select the `uuid_outsider`
     * const outsiderWithUuid_outsiderOnly = await prisma.outsider.findMany({ select: { uuid_outsider: true } })
     * 
     */
    findMany<T extends OutsiderFindManyArgs>(args?: SelectSubset<T, OutsiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outsider.
     * @param {OutsiderCreateArgs} args - Arguments to create a Outsider.
     * @example
     * // Create one Outsider
     * const Outsider = await prisma.outsider.create({
     *   data: {
     *     // ... data to create a Outsider
     *   }
     * })
     * 
     */
    create<T extends OutsiderCreateArgs>(args: SelectSubset<T, OutsiderCreateArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outsiders.
     * @param {OutsiderCreateManyArgs} args - Arguments to create many Outsiders.
     * @example
     * // Create many Outsiders
     * const outsider = await prisma.outsider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutsiderCreateManyArgs>(args?: SelectSubset<T, OutsiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outsiders and returns the data saved in the database.
     * @param {OutsiderCreateManyAndReturnArgs} args - Arguments to create many Outsiders.
     * @example
     * // Create many Outsiders
     * const outsider = await prisma.outsider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outsiders and only return the `uuid_outsider`
     * const outsiderWithUuid_outsiderOnly = await prisma.outsider.createManyAndReturn({
     *   select: { uuid_outsider: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutsiderCreateManyAndReturnArgs>(args?: SelectSubset<T, OutsiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outsider.
     * @param {OutsiderDeleteArgs} args - Arguments to delete one Outsider.
     * @example
     * // Delete one Outsider
     * const Outsider = await prisma.outsider.delete({
     *   where: {
     *     // ... filter to delete one Outsider
     *   }
     * })
     * 
     */
    delete<T extends OutsiderDeleteArgs>(args: SelectSubset<T, OutsiderDeleteArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outsider.
     * @param {OutsiderUpdateArgs} args - Arguments to update one Outsider.
     * @example
     * // Update one Outsider
     * const outsider = await prisma.outsider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutsiderUpdateArgs>(args: SelectSubset<T, OutsiderUpdateArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outsiders.
     * @param {OutsiderDeleteManyArgs} args - Arguments to filter Outsiders to delete.
     * @example
     * // Delete a few Outsiders
     * const { count } = await prisma.outsider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutsiderDeleteManyArgs>(args?: SelectSubset<T, OutsiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outsiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outsiders
     * const outsider = await prisma.outsider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutsiderUpdateManyArgs>(args: SelectSubset<T, OutsiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outsiders and returns the data updated in the database.
     * @param {OutsiderUpdateManyAndReturnArgs} args - Arguments to update many Outsiders.
     * @example
     * // Update many Outsiders
     * const outsider = await prisma.outsider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outsiders and only return the `uuid_outsider`
     * const outsiderWithUuid_outsiderOnly = await prisma.outsider.updateManyAndReturn({
     *   select: { uuid_outsider: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutsiderUpdateManyAndReturnArgs>(args: SelectSubset<T, OutsiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outsider.
     * @param {OutsiderUpsertArgs} args - Arguments to update or create a Outsider.
     * @example
     * // Update or create a Outsider
     * const outsider = await prisma.outsider.upsert({
     *   create: {
     *     // ... data to create a Outsider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outsider we want to update
     *   }
     * })
     */
    upsert<T extends OutsiderUpsertArgs>(args: SelectSubset<T, OutsiderUpsertArgs<ExtArgs>>): Prisma__OutsiderClient<$Result.GetResult<Prisma.$OutsiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outsiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderCountArgs} args - Arguments to filter Outsiders to count.
     * @example
     * // Count the number of Outsiders
     * const count = await prisma.outsider.count({
     *   where: {
     *     // ... the filter for the Outsiders we want to count
     *   }
     * })
    **/
    count<T extends OutsiderCountArgs>(
      args?: Subset<T, OutsiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutsiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outsider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutsiderAggregateArgs>(args: Subset<T, OutsiderAggregateArgs>): Prisma.PrismaPromise<GetOutsiderAggregateType<T>>

    /**
     * Group by Outsider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutsiderGroupByArgs} args - Group by arguments.
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
      T extends OutsiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutsiderGroupByArgs['orderBy'] }
        : { orderBy?: OutsiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutsiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutsiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outsider model
   */
  readonly fields: OutsiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outsider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutsiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outsider model
   */
  interface OutsiderFieldRefs {
    readonly uuid_outsider: FieldRef<"Outsider", 'String'>
    readonly uuidUser: FieldRef<"Outsider", 'String'>
    readonly organizationName: FieldRef<"Outsider", 'String'>
    readonly phoneNumber: FieldRef<"Outsider", 'String'>
    readonly createdAt: FieldRef<"Outsider", 'DateTime'>
    readonly updatedAt: FieldRef<"Outsider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outsider findUnique
   */
  export type OutsiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter, which Outsider to fetch.
     */
    where: OutsiderWhereUniqueInput
  }

  /**
   * Outsider findUniqueOrThrow
   */
  export type OutsiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter, which Outsider to fetch.
     */
    where: OutsiderWhereUniqueInput
  }

  /**
   * Outsider findFirst
   */
  export type OutsiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter, which Outsider to fetch.
     */
    where?: OutsiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outsiders to fetch.
     */
    orderBy?: OutsiderOrderByWithRelationInput | OutsiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outsiders.
     */
    cursor?: OutsiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outsiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outsiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outsiders.
     */
    distinct?: OutsiderScalarFieldEnum | OutsiderScalarFieldEnum[]
  }

  /**
   * Outsider findFirstOrThrow
   */
  export type OutsiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter, which Outsider to fetch.
     */
    where?: OutsiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outsiders to fetch.
     */
    orderBy?: OutsiderOrderByWithRelationInput | OutsiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outsiders.
     */
    cursor?: OutsiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outsiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outsiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outsiders.
     */
    distinct?: OutsiderScalarFieldEnum | OutsiderScalarFieldEnum[]
  }

  /**
   * Outsider findMany
   */
  export type OutsiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter, which Outsiders to fetch.
     */
    where?: OutsiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outsiders to fetch.
     */
    orderBy?: OutsiderOrderByWithRelationInput | OutsiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outsiders.
     */
    cursor?: OutsiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outsiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outsiders.
     */
    skip?: number
    distinct?: OutsiderScalarFieldEnum | OutsiderScalarFieldEnum[]
  }

  /**
   * Outsider create
   */
  export type OutsiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Outsider.
     */
    data: XOR<OutsiderCreateInput, OutsiderUncheckedCreateInput>
  }

  /**
   * Outsider createMany
   */
  export type OutsiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outsiders.
     */
    data: OutsiderCreateManyInput | OutsiderCreateManyInput[]
  }

  /**
   * Outsider createManyAndReturn
   */
  export type OutsiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * The data used to create many Outsiders.
     */
    data: OutsiderCreateManyInput | OutsiderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outsider update
   */
  export type OutsiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Outsider.
     */
    data: XOR<OutsiderUpdateInput, OutsiderUncheckedUpdateInput>
    /**
     * Choose, which Outsider to update.
     */
    where: OutsiderWhereUniqueInput
  }

  /**
   * Outsider updateMany
   */
  export type OutsiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outsiders.
     */
    data: XOR<OutsiderUpdateManyMutationInput, OutsiderUncheckedUpdateManyInput>
    /**
     * Filter which Outsiders to update
     */
    where?: OutsiderWhereInput
    /**
     * Limit how many Outsiders to update.
     */
    limit?: number
  }

  /**
   * Outsider updateManyAndReturn
   */
  export type OutsiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * The data used to update Outsiders.
     */
    data: XOR<OutsiderUpdateManyMutationInput, OutsiderUncheckedUpdateManyInput>
    /**
     * Filter which Outsiders to update
     */
    where?: OutsiderWhereInput
    /**
     * Limit how many Outsiders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outsider upsert
   */
  export type OutsiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Outsider to update in case it exists.
     */
    where: OutsiderWhereUniqueInput
    /**
     * In case the Outsider found by the `where` argument doesn't exist, create a new Outsider with this data.
     */
    create: XOR<OutsiderCreateInput, OutsiderUncheckedCreateInput>
    /**
     * In case the Outsider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutsiderUpdateInput, OutsiderUncheckedUpdateInput>
  }

  /**
   * Outsider delete
   */
  export type OutsiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
    /**
     * Filter which Outsider to delete.
     */
    where: OutsiderWhereUniqueInput
  }

  /**
   * Outsider deleteMany
   */
  export type OutsiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outsiders to delete
     */
    where?: OutsiderWhereInput
    /**
     * Limit how many Outsiders to delete.
     */
    limit?: number
  }

  /**
   * Outsider without action
   */
  export type OutsiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outsider
     */
    select?: OutsiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outsider
     */
    omit?: OutsiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutsiderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uuid_user: 'uuid_user',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    status: 'status',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_StatusScalarFieldEnum: {
    user_status_id: 'user_status_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type User_StatusScalarFieldEnum = (typeof User_StatusScalarFieldEnum)[keyof typeof User_StatusScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    uuid_admin: 'uuid_admin',
    uuidUser: 'uuidUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    uuid_student: 'uuid_student',
    uuidUser: 'uuidUser',
    universityId: 'universityId',
    averageGrade: 'averageGrade',
    enrollmentYear: 'enrollmentYear',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const Student_StatusScalarFieldEnum: {
    student_status_id: 'student_status_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Student_StatusScalarFieldEnum = (typeof Student_StatusScalarFieldEnum)[keyof typeof Student_StatusScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    uuid_professor: 'uuid_professor',
    uuidUser: 'uuidUser',
    universityId: 'universityId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const Professor_RoleScalarFieldEnum: {
    professor_role_id: 'professor_role_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Professor_RoleScalarFieldEnum = (typeof Professor_RoleScalarFieldEnum)[keyof typeof Professor_RoleScalarFieldEnum]


  export const OutsiderScalarFieldEnum: {
    uuid_outsider: 'uuid_outsider',
    uuidUser: 'uuidUser',
    organizationName: 'organizationName',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutsiderScalarFieldEnum = (typeof OutsiderScalarFieldEnum)[keyof typeof OutsiderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid_user?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: IntNullableFilter<"User"> | number | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userStatus?: XOR<User_StatusNullableScalarRelationFilter, User_StatusWhereInput> | null
    admins?: AdminListRelationFilter
    students?: StudentListRelationFilter
    professors?: ProfessorListRelationFilter
    outsiders?: OutsiderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userStatus?: User_StatusOrderByWithRelationInput
    admins?: AdminOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    professors?: ProfessorOrderByRelationAggregateInput
    outsiders?: OutsiderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uuid_user?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: IntNullableFilter<"User"> | number | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userStatus?: XOR<User_StatusNullableScalarRelationFilter, User_StatusWhereInput> | null
    admins?: AdminListRelationFilter
    students?: StudentListRelationFilter
    professors?: ProfessorListRelationFilter
    outsiders?: OutsiderListRelationFilter
  }, "uuid_user" | "email">

  export type UserOrderByWithAggregationInput = {
    uuid_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    uuid_user?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: IntNullableWithAggregatesFilter<"User"> | number | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type User_StatusWhereInput = {
    AND?: User_StatusWhereInput | User_StatusWhereInput[]
    OR?: User_StatusWhereInput[]
    NOT?: User_StatusWhereInput | User_StatusWhereInput[]
    user_status_id?: IntFilter<"User_Status"> | number
    name?: StringFilter<"User_Status"> | string
    createdAt?: DateTimeFilter<"User_Status"> | Date | string
    updatedAt?: DateTimeFilter<"User_Status"> | Date | string
    users?: UserListRelationFilter
  }

  export type User_StatusOrderByWithRelationInput = {
    user_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type User_StatusWhereUniqueInput = Prisma.AtLeast<{
    user_status_id?: number
    AND?: User_StatusWhereInput | User_StatusWhereInput[]
    OR?: User_StatusWhereInput[]
    NOT?: User_StatusWhereInput | User_StatusWhereInput[]
    name?: StringFilter<"User_Status"> | string
    createdAt?: DateTimeFilter<"User_Status"> | Date | string
    updatedAt?: DateTimeFilter<"User_Status"> | Date | string
    users?: UserListRelationFilter
  }, "user_status_id">

  export type User_StatusOrderByWithAggregationInput = {
    user_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: User_StatusCountOrderByAggregateInput
    _avg?: User_StatusAvgOrderByAggregateInput
    _max?: User_StatusMaxOrderByAggregateInput
    _min?: User_StatusMinOrderByAggregateInput
    _sum?: User_StatusSumOrderByAggregateInput
  }

  export type User_StatusScalarWhereWithAggregatesInput = {
    AND?: User_StatusScalarWhereWithAggregatesInput | User_StatusScalarWhereWithAggregatesInput[]
    OR?: User_StatusScalarWhereWithAggregatesInput[]
    NOT?: User_StatusScalarWhereWithAggregatesInput | User_StatusScalarWhereWithAggregatesInput[]
    user_status_id?: IntWithAggregatesFilter<"User_Status"> | number
    name?: StringWithAggregatesFilter<"User_Status"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User_Status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User_Status"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    uuid_admin?: StringFilter<"Admin"> | string
    uuidUser?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    uuid_admin?: SortOrder
    uuidUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    uuid_admin?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    uuidUser?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "uuid_admin">

  export type AdminOrderByWithAggregationInput = {
    uuid_admin?: SortOrder
    uuidUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    uuid_admin?: StringWithAggregatesFilter<"Admin"> | string
    uuidUser?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    uuid_student?: StringFilter<"Student"> | string
    uuidUser?: StringFilter<"Student"> | string
    universityId?: BigIntFilter<"Student"> | bigint | number
    averageGrade?: FloatNullableFilter<"Student"> | number | null
    enrollmentYear?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentStatus?: XOR<Student_StatusNullableScalarRelationFilter, Student_StatusWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    uuid_student?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    averageGrade?: SortOrderInput | SortOrder
    enrollmentYear?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studentStatus?: Student_StatusOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    uuid_student?: string
    universityId?: bigint | number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    uuidUser?: StringFilter<"Student"> | string
    averageGrade?: FloatNullableFilter<"Student"> | number | null
    enrollmentYear?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentStatus?: XOR<Student_StatusNullableScalarRelationFilter, Student_StatusWhereInput> | null
  }, "uuid_student" | "universityId">

  export type StudentOrderByWithAggregationInput = {
    uuid_student?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    averageGrade?: SortOrderInput | SortOrder
    enrollmentYear?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    uuid_student?: StringWithAggregatesFilter<"Student"> | string
    uuidUser?: StringWithAggregatesFilter<"Student"> | string
    universityId?: BigIntWithAggregatesFilter<"Student"> | bigint | number
    averageGrade?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    enrollmentYear?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    status?: IntNullableWithAggregatesFilter<"Student"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type Student_StatusWhereInput = {
    AND?: Student_StatusWhereInput | Student_StatusWhereInput[]
    OR?: Student_StatusWhereInput[]
    NOT?: Student_StatusWhereInput | Student_StatusWhereInput[]
    student_status_id?: IntFilter<"Student_Status"> | number
    name?: StringFilter<"Student_Status"> | string
    createdAt?: DateTimeFilter<"Student_Status"> | Date | string
    updatedAt?: DateTimeFilter<"Student_Status"> | Date | string
    students?: StudentListRelationFilter
  }

  export type Student_StatusOrderByWithRelationInput = {
    student_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type Student_StatusWhereUniqueInput = Prisma.AtLeast<{
    student_status_id?: number
    AND?: Student_StatusWhereInput | Student_StatusWhereInput[]
    OR?: Student_StatusWhereInput[]
    NOT?: Student_StatusWhereInput | Student_StatusWhereInput[]
    name?: StringFilter<"Student_Status"> | string
    createdAt?: DateTimeFilter<"Student_Status"> | Date | string
    updatedAt?: DateTimeFilter<"Student_Status"> | Date | string
    students?: StudentListRelationFilter
  }, "student_status_id">

  export type Student_StatusOrderByWithAggregationInput = {
    student_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Student_StatusCountOrderByAggregateInput
    _avg?: Student_StatusAvgOrderByAggregateInput
    _max?: Student_StatusMaxOrderByAggregateInput
    _min?: Student_StatusMinOrderByAggregateInput
    _sum?: Student_StatusSumOrderByAggregateInput
  }

  export type Student_StatusScalarWhereWithAggregatesInput = {
    AND?: Student_StatusScalarWhereWithAggregatesInput | Student_StatusScalarWhereWithAggregatesInput[]
    OR?: Student_StatusScalarWhereWithAggregatesInput[]
    NOT?: Student_StatusScalarWhereWithAggregatesInput | Student_StatusScalarWhereWithAggregatesInput[]
    student_status_id?: IntWithAggregatesFilter<"Student_Status"> | number
    name?: StringWithAggregatesFilter<"Student_Status"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student_Status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student_Status"> | Date | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    uuid_professor?: StringFilter<"Professor"> | string
    uuidUser?: StringFilter<"Professor"> | string
    universityId?: BigIntFilter<"Professor"> | bigint | number
    role?: IntNullableFilter<"Professor"> | number | null
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    professorRole?: XOR<Professor_RoleNullableScalarRelationFilter, Professor_RoleWhereInput> | null
  }

  export type ProfessorOrderByWithRelationInput = {
    uuid_professor?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    professorRole?: Professor_RoleOrderByWithRelationInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    uuid_professor?: string
    universityId?: bigint | number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    uuidUser?: StringFilter<"Professor"> | string
    role?: IntNullableFilter<"Professor"> | number | null
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    professorRole?: XOR<Professor_RoleNullableScalarRelationFilter, Professor_RoleWhereInput> | null
  }, "uuid_professor" | "universityId">

  export type ProfessorOrderByWithAggregationInput = {
    uuid_professor?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    uuid_professor?: StringWithAggregatesFilter<"Professor"> | string
    uuidUser?: StringWithAggregatesFilter<"Professor"> | string
    universityId?: BigIntWithAggregatesFilter<"Professor"> | bigint | number
    role?: IntNullableWithAggregatesFilter<"Professor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type Professor_RoleWhereInput = {
    AND?: Professor_RoleWhereInput | Professor_RoleWhereInput[]
    OR?: Professor_RoleWhereInput[]
    NOT?: Professor_RoleWhereInput | Professor_RoleWhereInput[]
    professor_role_id?: IntFilter<"Professor_Role"> | number
    name?: StringFilter<"Professor_Role"> | string
    createdAt?: DateTimeFilter<"Professor_Role"> | Date | string
    updatedAt?: DateTimeFilter<"Professor_Role"> | Date | string
    professors?: ProfessorListRelationFilter
  }

  export type Professor_RoleOrderByWithRelationInput = {
    professor_role_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professors?: ProfessorOrderByRelationAggregateInput
  }

  export type Professor_RoleWhereUniqueInput = Prisma.AtLeast<{
    professor_role_id?: number
    AND?: Professor_RoleWhereInput | Professor_RoleWhereInput[]
    OR?: Professor_RoleWhereInput[]
    NOT?: Professor_RoleWhereInput | Professor_RoleWhereInput[]
    name?: StringFilter<"Professor_Role"> | string
    createdAt?: DateTimeFilter<"Professor_Role"> | Date | string
    updatedAt?: DateTimeFilter<"Professor_Role"> | Date | string
    professors?: ProfessorListRelationFilter
  }, "professor_role_id">

  export type Professor_RoleOrderByWithAggregationInput = {
    professor_role_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Professor_RoleCountOrderByAggregateInput
    _avg?: Professor_RoleAvgOrderByAggregateInput
    _max?: Professor_RoleMaxOrderByAggregateInput
    _min?: Professor_RoleMinOrderByAggregateInput
    _sum?: Professor_RoleSumOrderByAggregateInput
  }

  export type Professor_RoleScalarWhereWithAggregatesInput = {
    AND?: Professor_RoleScalarWhereWithAggregatesInput | Professor_RoleScalarWhereWithAggregatesInput[]
    OR?: Professor_RoleScalarWhereWithAggregatesInput[]
    NOT?: Professor_RoleScalarWhereWithAggregatesInput | Professor_RoleScalarWhereWithAggregatesInput[]
    professor_role_id?: IntWithAggregatesFilter<"Professor_Role"> | number
    name?: StringWithAggregatesFilter<"Professor_Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Professor_Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Professor_Role"> | Date | string
  }

  export type OutsiderWhereInput = {
    AND?: OutsiderWhereInput | OutsiderWhereInput[]
    OR?: OutsiderWhereInput[]
    NOT?: OutsiderWhereInput | OutsiderWhereInput[]
    uuid_outsider?: StringFilter<"Outsider"> | string
    uuidUser?: StringFilter<"Outsider"> | string
    organizationName?: StringNullableFilter<"Outsider"> | string | null
    phoneNumber?: StringNullableFilter<"Outsider"> | string | null
    createdAt?: DateTimeFilter<"Outsider"> | Date | string
    updatedAt?: DateTimeFilter<"Outsider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OutsiderOrderByWithRelationInput = {
    uuid_outsider?: SortOrder
    uuidUser?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OutsiderWhereUniqueInput = Prisma.AtLeast<{
    uuid_outsider?: string
    AND?: OutsiderWhereInput | OutsiderWhereInput[]
    OR?: OutsiderWhereInput[]
    NOT?: OutsiderWhereInput | OutsiderWhereInput[]
    uuidUser?: StringFilter<"Outsider"> | string
    organizationName?: StringNullableFilter<"Outsider"> | string | null
    phoneNumber?: StringNullableFilter<"Outsider"> | string | null
    createdAt?: DateTimeFilter<"Outsider"> | Date | string
    updatedAt?: DateTimeFilter<"Outsider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "uuid_outsider">

  export type OutsiderOrderByWithAggregationInput = {
    uuid_outsider?: SortOrder
    uuidUser?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutsiderCountOrderByAggregateInput
    _max?: OutsiderMaxOrderByAggregateInput
    _min?: OutsiderMinOrderByAggregateInput
  }

  export type OutsiderScalarWhereWithAggregatesInput = {
    AND?: OutsiderScalarWhereWithAggregatesInput | OutsiderScalarWhereWithAggregatesInput[]
    OR?: OutsiderScalarWhereWithAggregatesInput[]
    NOT?: OutsiderScalarWhereWithAggregatesInput | OutsiderScalarWhereWithAggregatesInput[]
    uuid_outsider?: StringWithAggregatesFilter<"Outsider"> | string
    uuidUser?: StringWithAggregatesFilter<"Outsider"> | string
    organizationName?: StringNullableWithAggregatesFilter<"Outsider"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Outsider"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Outsider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outsider"> | Date | string
  }

  export type UserCreateInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userStatus?: User_StatusCreateNestedOneWithoutUsersInput
    admins?: AdminCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    professors?: ProfessorCreateNestedManyWithoutUserInput
    outsiders?: OutsiderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    professors?: ProfessorUncheckedCreateNestedManyWithoutUserInput
    outsiders?: OutsiderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStatus?: User_StatusUpdateOneWithoutUsersNestedInput
    admins?: AdminUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    professors?: ProfessorUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    professors?: ProfessorUncheckedUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_StatusCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutUserStatusInput
  }

  export type User_StatusUncheckedCreateInput = {
    user_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUserStatusInput
  }

  export type User_StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutUserStatusNestedInput
  }

  export type User_StatusUncheckedUpdateInput = {
    user_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUserStatusNestedInput
  }

  export type User_StatusCreateManyInput = {
    user_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_StatusUncheckedUpdateManyInput = {
    user_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    uuid_admin?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateInput = {
    uuid_admin?: string
    uuidUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    uuid_admin?: string
    uuidUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    uuid_student?: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentsInput
    studentStatus?: Student_StatusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    uuid_student?: string
    uuidUser: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
    studentStatus?: Student_StatusUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    uuid_student?: string
    uuidUser: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_StatusCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutStudentStatusInput
  }

  export type Student_StatusUncheckedCreateInput = {
    student_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutStudentStatusInput
  }

  export type Student_StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutStudentStatusNestedInput
  }

  export type Student_StatusUncheckedUpdateInput = {
    student_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutStudentStatusNestedInput
  }

  export type Student_StatusCreateManyInput = {
    student_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Student_StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_StatusUncheckedUpdateManyInput = {
    student_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateInput = {
    uuid_professor?: string
    universityId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessorsInput
    professorRole?: Professor_RoleCreateNestedOneWithoutProfessorsInput
  }

  export type ProfessorUncheckedCreateInput = {
    uuid_professor?: string
    uuidUser: string
    universityId: bigint | number
    role?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUpdateInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessorsNestedInput
    professorRole?: Professor_RoleUpdateOneWithoutProfessorsNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateManyInput = {
    uuid_professor?: string
    uuidUser: string
    universityId: bigint | number
    role?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Professor_RoleCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professors?: ProfessorCreateNestedManyWithoutProfessorRoleInput
  }

  export type Professor_RoleUncheckedCreateInput = {
    professor_role_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professors?: ProfessorUncheckedCreateNestedManyWithoutProfessorRoleInput
  }

  export type Professor_RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professors?: ProfessorUpdateManyWithoutProfessorRoleNestedInput
  }

  export type Professor_RoleUncheckedUpdateInput = {
    professor_role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professors?: ProfessorUncheckedUpdateManyWithoutProfessorRoleNestedInput
  }

  export type Professor_RoleCreateManyInput = {
    professor_role_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Professor_RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Professor_RoleUncheckedUpdateManyInput = {
    professor_role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderCreateInput = {
    uuid_outsider?: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOutsidersInput
  }

  export type OutsiderUncheckedCreateInput = {
    uuid_outsider?: string
    uuidUser: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutsiderUpdateInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOutsidersNestedInput
  }

  export type OutsiderUncheckedUpdateInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderCreateManyInput = {
    uuid_outsider?: string
    uuidUser: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutsiderUpdateManyMutationInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderUncheckedUpdateManyInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_StatusNullableScalarRelationFilter = {
    is?: User_StatusWhereInput | null
    isNot?: User_StatusWhereInput | null
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ProfessorListRelationFilter = {
    every?: ProfessorWhereInput
    some?: ProfessorWhereInput
    none?: ProfessorWhereInput
  }

  export type OutsiderListRelationFilter = {
    every?: OutsiderWhereInput
    some?: OutsiderWhereInput
    none?: OutsiderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutsiderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uuid_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_StatusCountOrderByAggregateInput = {
    user_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_StatusAvgOrderByAggregateInput = {
    user_status_id?: SortOrder
  }

  export type User_StatusMaxOrderByAggregateInput = {
    user_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_StatusMinOrderByAggregateInput = {
    user_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_StatusSumOrderByAggregateInput = {
    user_status_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    uuid_admin?: SortOrder
    uuidUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    uuid_admin?: SortOrder
    uuidUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    uuid_admin?: SortOrder
    uuidUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Student_StatusNullableScalarRelationFilter = {
    is?: Student_StatusWhereInput | null
    isNot?: Student_StatusWhereInput | null
  }

  export type StudentCountOrderByAggregateInput = {
    uuid_student?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    averageGrade?: SortOrder
    enrollmentYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    universityId?: SortOrder
    averageGrade?: SortOrder
    status?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    uuid_student?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    averageGrade?: SortOrder
    enrollmentYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    uuid_student?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    averageGrade?: SortOrder
    enrollmentYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    universityId?: SortOrder
    averageGrade?: SortOrder
    status?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Student_StatusCountOrderByAggregateInput = {
    student_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Student_StatusAvgOrderByAggregateInput = {
    student_status_id?: SortOrder
  }

  export type Student_StatusMaxOrderByAggregateInput = {
    student_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Student_StatusMinOrderByAggregateInput = {
    student_status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Student_StatusSumOrderByAggregateInput = {
    student_status_id?: SortOrder
  }

  export type Professor_RoleNullableScalarRelationFilter = {
    is?: Professor_RoleWhereInput | null
    isNot?: Professor_RoleWhereInput | null
  }

  export type ProfessorCountOrderByAggregateInput = {
    uuid_professor?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    universityId?: SortOrder
    role?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    uuid_professor?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    uuid_professor?: SortOrder
    uuidUser?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    universityId?: SortOrder
    role?: SortOrder
  }

  export type Professor_RoleCountOrderByAggregateInput = {
    professor_role_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Professor_RoleAvgOrderByAggregateInput = {
    professor_role_id?: SortOrder
  }

  export type Professor_RoleMaxOrderByAggregateInput = {
    professor_role_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Professor_RoleMinOrderByAggregateInput = {
    professor_role_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Professor_RoleSumOrderByAggregateInput = {
    professor_role_id?: SortOrder
  }

  export type OutsiderCountOrderByAggregateInput = {
    uuid_outsider?: SortOrder
    uuidUser?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutsiderMaxOrderByAggregateInput = {
    uuid_outsider?: SortOrder
    uuidUser?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutsiderMinOrderByAggregateInput = {
    uuid_outsider?: SortOrder
    uuidUser?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type User_StatusCreateNestedOneWithoutUsersInput = {
    create?: XOR<User_StatusCreateWithoutUsersInput, User_StatusUncheckedCreateWithoutUsersInput>
    connectOrCreate?: User_StatusCreateOrConnectWithoutUsersInput
    connect?: User_StatusWhereUniqueInput
  }

  export type AdminCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ProfessorCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput> | ProfessorCreateWithoutUserInput[] | ProfessorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput | ProfessorCreateOrConnectWithoutUserInput[]
    createMany?: ProfessorCreateManyUserInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type OutsiderCreateNestedManyWithoutUserInput = {
    create?: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput> | OutsiderCreateWithoutUserInput[] | OutsiderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutsiderCreateOrConnectWithoutUserInput | OutsiderCreateOrConnectWithoutUserInput[]
    createMany?: OutsiderCreateManyUserInputEnvelope
    connect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ProfessorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput> | ProfessorCreateWithoutUserInput[] | ProfessorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput | ProfessorCreateOrConnectWithoutUserInput[]
    createMany?: ProfessorCreateManyUserInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type OutsiderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput> | OutsiderCreateWithoutUserInput[] | OutsiderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutsiderCreateOrConnectWithoutUserInput | OutsiderCreateOrConnectWithoutUserInput[]
    createMany?: OutsiderCreateManyUserInputEnvelope
    connect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type User_StatusUpdateOneWithoutUsersNestedInput = {
    create?: XOR<User_StatusCreateWithoutUsersInput, User_StatusUncheckedCreateWithoutUsersInput>
    connectOrCreate?: User_StatusCreateOrConnectWithoutUsersInput
    upsert?: User_StatusUpsertWithoutUsersInput
    disconnect?: User_StatusWhereInput | boolean
    delete?: User_StatusWhereInput | boolean
    connect?: User_StatusWhereUniqueInput
    update?: XOR<XOR<User_StatusUpdateToOneWithWhereWithoutUsersInput, User_StatusUpdateWithoutUsersInput>, User_StatusUncheckedUpdateWithoutUsersInput>
  }

  export type AdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ProfessorUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput> | ProfessorCreateWithoutUserInput[] | ProfessorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput | ProfessorCreateOrConnectWithoutUserInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutUserInput | ProfessorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessorCreateManyUserInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutUserInput | ProfessorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutUserInput | ProfessorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type OutsiderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput> | OutsiderCreateWithoutUserInput[] | OutsiderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutsiderCreateOrConnectWithoutUserInput | OutsiderCreateOrConnectWithoutUserInput[]
    upsert?: OutsiderUpsertWithWhereUniqueWithoutUserInput | OutsiderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutsiderCreateManyUserInputEnvelope
    set?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    disconnect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    delete?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    connect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    update?: OutsiderUpdateWithWhereUniqueWithoutUserInput | OutsiderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutsiderUpdateManyWithWhereWithoutUserInput | OutsiderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutsiderScalarWhereInput | OutsiderScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ProfessorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput> | ProfessorCreateWithoutUserInput[] | ProfessorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput | ProfessorCreateOrConnectWithoutUserInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutUserInput | ProfessorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessorCreateManyUserInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutUserInput | ProfessorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutUserInput | ProfessorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type OutsiderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput> | OutsiderCreateWithoutUserInput[] | OutsiderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutsiderCreateOrConnectWithoutUserInput | OutsiderCreateOrConnectWithoutUserInput[]
    upsert?: OutsiderUpsertWithWhereUniqueWithoutUserInput | OutsiderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutsiderCreateManyUserInputEnvelope
    set?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    disconnect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    delete?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    connect?: OutsiderWhereUniqueInput | OutsiderWhereUniqueInput[]
    update?: OutsiderUpdateWithWhereUniqueWithoutUserInput | OutsiderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutsiderUpdateManyWithWhereWithoutUserInput | OutsiderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutsiderScalarWhereInput | OutsiderScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserStatusInput = {
    create?: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput> | UserCreateWithoutUserStatusInput[] | UserUncheckedCreateWithoutUserStatusInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusInput | UserCreateOrConnectWithoutUserStatusInput[]
    createMany?: UserCreateManyUserStatusInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserStatusInput = {
    create?: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput> | UserCreateWithoutUserStatusInput[] | UserUncheckedCreateWithoutUserStatusInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusInput | UserCreateOrConnectWithoutUserStatusInput[]
    createMany?: UserCreateManyUserStatusInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUserStatusNestedInput = {
    create?: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput> | UserCreateWithoutUserStatusInput[] | UserUncheckedCreateWithoutUserStatusInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusInput | UserCreateOrConnectWithoutUserStatusInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserStatusInput | UserUpsertWithWhereUniqueWithoutUserStatusInput[]
    createMany?: UserCreateManyUserStatusInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserStatusInput | UserUpdateWithWhereUniqueWithoutUserStatusInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserStatusInput | UserUpdateManyWithWhereWithoutUserStatusInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutUserStatusNestedInput = {
    create?: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput> | UserCreateWithoutUserStatusInput[] | UserUncheckedCreateWithoutUserStatusInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusInput | UserCreateOrConnectWithoutUserStatusInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserStatusInput | UserUpsertWithWhereUniqueWithoutUserStatusInput[]
    createMany?: UserCreateManyUserStatusInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserStatusInput | UserUpdateWithWhereUniqueWithoutUserStatusInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserStatusInput | UserUpdateManyWithWhereWithoutUserStatusInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminsInput = {
    create?: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminsInput
    upsert?: UserUpsertWithoutAdminsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminsInput, UserUpdateWithoutAdminsInput>, UserUncheckedUpdateWithoutAdminsInput>
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type Student_StatusCreateNestedOneWithoutStudentsInput = {
    create?: XOR<Student_StatusCreateWithoutStudentsInput, Student_StatusUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: Student_StatusCreateOrConnectWithoutStudentsInput
    connect?: Student_StatusWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type Student_StatusUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<Student_StatusCreateWithoutStudentsInput, Student_StatusUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: Student_StatusCreateOrConnectWithoutStudentsInput
    upsert?: Student_StatusUpsertWithoutStudentsInput
    disconnect?: Student_StatusWhereInput | boolean
    delete?: Student_StatusWhereInput | boolean
    connect?: Student_StatusWhereUniqueInput
    update?: XOR<XOR<Student_StatusUpdateToOneWithWhereWithoutStudentsInput, Student_StatusUpdateWithoutStudentsInput>, Student_StatusUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentCreateNestedManyWithoutStudentStatusInput = {
    create?: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput> | StudentCreateWithoutStudentStatusInput[] | StudentUncheckedCreateWithoutStudentStatusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudentStatusInput | StudentCreateOrConnectWithoutStudentStatusInput[]
    createMany?: StudentCreateManyStudentStatusInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutStudentStatusInput = {
    create?: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput> | StudentCreateWithoutStudentStatusInput[] | StudentUncheckedCreateWithoutStudentStatusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudentStatusInput | StudentCreateOrConnectWithoutStudentStatusInput[]
    createMany?: StudentCreateManyStudentStatusInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutStudentStatusNestedInput = {
    create?: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput> | StudentCreateWithoutStudentStatusInput[] | StudentUncheckedCreateWithoutStudentStatusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudentStatusInput | StudentCreateOrConnectWithoutStudentStatusInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutStudentStatusInput | StudentUpsertWithWhereUniqueWithoutStudentStatusInput[]
    createMany?: StudentCreateManyStudentStatusInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutStudentStatusInput | StudentUpdateWithWhereUniqueWithoutStudentStatusInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutStudentStatusInput | StudentUpdateManyWithWhereWithoutStudentStatusInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutStudentStatusNestedInput = {
    create?: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput> | StudentCreateWithoutStudentStatusInput[] | StudentUncheckedCreateWithoutStudentStatusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudentStatusInput | StudentCreateOrConnectWithoutStudentStatusInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutStudentStatusInput | StudentUpsertWithWhereUniqueWithoutStudentStatusInput[]
    createMany?: StudentCreateManyStudentStatusInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutStudentStatusInput | StudentUpdateWithWhereUniqueWithoutStudentStatusInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutStudentStatusInput | StudentUpdateManyWithWhereWithoutStudentStatusInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfessorsInput = {
    create?: XOR<UserCreateWithoutProfessorsInput, UserUncheckedCreateWithoutProfessorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessorsInput
    connect?: UserWhereUniqueInput
  }

  export type Professor_RoleCreateNestedOneWithoutProfessorsInput = {
    create?: XOR<Professor_RoleCreateWithoutProfessorsInput, Professor_RoleUncheckedCreateWithoutProfessorsInput>
    connectOrCreate?: Professor_RoleCreateOrConnectWithoutProfessorsInput
    connect?: Professor_RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfessorsNestedInput = {
    create?: XOR<UserCreateWithoutProfessorsInput, UserUncheckedCreateWithoutProfessorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessorsInput
    upsert?: UserUpsertWithoutProfessorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessorsInput, UserUpdateWithoutProfessorsInput>, UserUncheckedUpdateWithoutProfessorsInput>
  }

  export type Professor_RoleUpdateOneWithoutProfessorsNestedInput = {
    create?: XOR<Professor_RoleCreateWithoutProfessorsInput, Professor_RoleUncheckedCreateWithoutProfessorsInput>
    connectOrCreate?: Professor_RoleCreateOrConnectWithoutProfessorsInput
    upsert?: Professor_RoleUpsertWithoutProfessorsInput
    disconnect?: Professor_RoleWhereInput | boolean
    delete?: Professor_RoleWhereInput | boolean
    connect?: Professor_RoleWhereUniqueInput
    update?: XOR<XOR<Professor_RoleUpdateToOneWithWhereWithoutProfessorsInput, Professor_RoleUpdateWithoutProfessorsInput>, Professor_RoleUncheckedUpdateWithoutProfessorsInput>
  }

  export type ProfessorCreateNestedManyWithoutProfessorRoleInput = {
    create?: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput> | ProfessorCreateWithoutProfessorRoleInput[] | ProfessorUncheckedCreateWithoutProfessorRoleInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfessorRoleInput | ProfessorCreateOrConnectWithoutProfessorRoleInput[]
    createMany?: ProfessorCreateManyProfessorRoleInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type ProfessorUncheckedCreateNestedManyWithoutProfessorRoleInput = {
    create?: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput> | ProfessorCreateWithoutProfessorRoleInput[] | ProfessorUncheckedCreateWithoutProfessorRoleInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfessorRoleInput | ProfessorCreateOrConnectWithoutProfessorRoleInput[]
    createMany?: ProfessorCreateManyProfessorRoleInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type ProfessorUpdateManyWithoutProfessorRoleNestedInput = {
    create?: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput> | ProfessorCreateWithoutProfessorRoleInput[] | ProfessorUncheckedCreateWithoutProfessorRoleInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfessorRoleInput | ProfessorCreateOrConnectWithoutProfessorRoleInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutProfessorRoleInput | ProfessorUpsertWithWhereUniqueWithoutProfessorRoleInput[]
    createMany?: ProfessorCreateManyProfessorRoleInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutProfessorRoleInput | ProfessorUpdateWithWhereUniqueWithoutProfessorRoleInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutProfessorRoleInput | ProfessorUpdateManyWithWhereWithoutProfessorRoleInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type ProfessorUncheckedUpdateManyWithoutProfessorRoleNestedInput = {
    create?: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput> | ProfessorCreateWithoutProfessorRoleInput[] | ProfessorUncheckedCreateWithoutProfessorRoleInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfessorRoleInput | ProfessorCreateOrConnectWithoutProfessorRoleInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutProfessorRoleInput | ProfessorUpsertWithWhereUniqueWithoutProfessorRoleInput[]
    createMany?: ProfessorCreateManyProfessorRoleInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutProfessorRoleInput | ProfessorUpdateWithWhereUniqueWithoutProfessorRoleInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutProfessorRoleInput | ProfessorUpdateManyWithWhereWithoutProfessorRoleInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOutsidersInput = {
    create?: XOR<UserCreateWithoutOutsidersInput, UserUncheckedCreateWithoutOutsidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutsidersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOutsidersNestedInput = {
    create?: XOR<UserCreateWithoutOutsidersInput, UserUncheckedCreateWithoutOutsidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutsidersInput
    upsert?: UserUpsertWithoutOutsidersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutsidersInput, UserUpdateWithoutOutsidersInput>, UserUncheckedUpdateWithoutOutsidersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type User_StatusCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_StatusUncheckedCreateWithoutUsersInput = {
    user_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_StatusCreateOrConnectWithoutUsersInput = {
    where: User_StatusWhereUniqueInput
    create: XOR<User_StatusCreateWithoutUsersInput, User_StatusUncheckedCreateWithoutUsersInput>
  }

  export type AdminCreateWithoutUserInput = {
    uuid_admin?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    uuid_admin?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateManyUserInputEnvelope = {
    data: AdminCreateManyUserInput | AdminCreateManyUserInput[]
  }

  export type StudentCreateWithoutUserInput = {
    uuid_student?: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentStatus?: Student_StatusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    uuid_student?: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: StudentCreateManyUserInput | StudentCreateManyUserInput[]
  }

  export type ProfessorCreateWithoutUserInput = {
    uuid_professor?: string
    universityId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    professorRole?: Professor_RoleCreateNestedOneWithoutProfessorsInput
  }

  export type ProfessorUncheckedCreateWithoutUserInput = {
    uuid_professor?: string
    universityId: bigint | number
    role?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCreateOrConnectWithoutUserInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
  }

  export type ProfessorCreateManyUserInputEnvelope = {
    data: ProfessorCreateManyUserInput | ProfessorCreateManyUserInput[]
  }

  export type OutsiderCreateWithoutUserInput = {
    uuid_outsider?: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutsiderUncheckedCreateWithoutUserInput = {
    uuid_outsider?: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutsiderCreateOrConnectWithoutUserInput = {
    where: OutsiderWhereUniqueInput
    create: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput>
  }

  export type OutsiderCreateManyUserInputEnvelope = {
    data: OutsiderCreateManyUserInput | OutsiderCreateManyUserInput[]
  }

  export type User_StatusUpsertWithoutUsersInput = {
    update: XOR<User_StatusUpdateWithoutUsersInput, User_StatusUncheckedUpdateWithoutUsersInput>
    create: XOR<User_StatusCreateWithoutUsersInput, User_StatusUncheckedCreateWithoutUsersInput>
    where?: User_StatusWhereInput
  }

  export type User_StatusUpdateToOneWithWhereWithoutUsersInput = {
    where?: User_StatusWhereInput
    data: XOR<User_StatusUpdateWithoutUsersInput, User_StatusUncheckedUpdateWithoutUsersInput>
  }

  export type User_StatusUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_StatusUncheckedUpdateWithoutUsersInput = {
    user_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    uuid_admin?: StringFilter<"Admin"> | string
    uuidUser?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    uuid_student?: StringFilter<"Student"> | string
    uuidUser?: StringFilter<"Student"> | string
    universityId?: BigIntFilter<"Student"> | bigint | number
    averageGrade?: FloatNullableFilter<"Student"> | number | null
    enrollmentYear?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type ProfessorUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfessorWhereUniqueInput
    update: XOR<ProfessorUpdateWithoutUserInput, ProfessorUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
  }

  export type ProfessorUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfessorWhereUniqueInput
    data: XOR<ProfessorUpdateWithoutUserInput, ProfessorUncheckedUpdateWithoutUserInput>
  }

  export type ProfessorUpdateManyWithWhereWithoutUserInput = {
    where: ProfessorScalarWhereInput
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfessorScalarWhereInput = {
    AND?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
    OR?: ProfessorScalarWhereInput[]
    NOT?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
    uuid_professor?: StringFilter<"Professor"> | string
    uuidUser?: StringFilter<"Professor"> | string
    universityId?: BigIntFilter<"Professor"> | bigint | number
    role?: IntNullableFilter<"Professor"> | number | null
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
  }

  export type OutsiderUpsertWithWhereUniqueWithoutUserInput = {
    where: OutsiderWhereUniqueInput
    update: XOR<OutsiderUpdateWithoutUserInput, OutsiderUncheckedUpdateWithoutUserInput>
    create: XOR<OutsiderCreateWithoutUserInput, OutsiderUncheckedCreateWithoutUserInput>
  }

  export type OutsiderUpdateWithWhereUniqueWithoutUserInput = {
    where: OutsiderWhereUniqueInput
    data: XOR<OutsiderUpdateWithoutUserInput, OutsiderUncheckedUpdateWithoutUserInput>
  }

  export type OutsiderUpdateManyWithWhereWithoutUserInput = {
    where: OutsiderScalarWhereInput
    data: XOR<OutsiderUpdateManyMutationInput, OutsiderUncheckedUpdateManyWithoutUserInput>
  }

  export type OutsiderScalarWhereInput = {
    AND?: OutsiderScalarWhereInput | OutsiderScalarWhereInput[]
    OR?: OutsiderScalarWhereInput[]
    NOT?: OutsiderScalarWhereInput | OutsiderScalarWhereInput[]
    uuid_outsider?: StringFilter<"Outsider"> | string
    uuidUser?: StringFilter<"Outsider"> | string
    organizationName?: StringNullableFilter<"Outsider"> | string | null
    phoneNumber?: StringNullableFilter<"Outsider"> | string | null
    createdAt?: DateTimeFilter<"Outsider"> | Date | string
    updatedAt?: DateTimeFilter<"Outsider"> | Date | string
  }

  export type UserCreateWithoutUserStatusInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    professors?: ProfessorCreateNestedManyWithoutUserInput
    outsiders?: OutsiderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserStatusInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    professors?: ProfessorUncheckedCreateNestedManyWithoutUserInput
    outsiders?: OutsiderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput>
  }

  export type UserCreateManyUserStatusInputEnvelope = {
    data: UserCreateManyUserStatusInput | UserCreateManyUserStatusInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutUserStatusInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserStatusInput, UserUncheckedUpdateWithoutUserStatusInput>
    create: XOR<UserCreateWithoutUserStatusInput, UserUncheckedCreateWithoutUserStatusInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserStatusInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserStatusInput, UserUncheckedUpdateWithoutUserStatusInput>
  }

  export type UserUpdateManyWithWhereWithoutUserStatusInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserStatusInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    uuid_user?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: IntNullableFilter<"User"> | number | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutAdminsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userStatus?: User_StatusCreateNestedOneWithoutUsersInput
    students?: StudentCreateNestedManyWithoutUserInput
    professors?: ProfessorCreateNestedManyWithoutUserInput
    outsiders?: OutsiderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    professors?: ProfessorUncheckedCreateNestedManyWithoutUserInput
    outsiders?: OutsiderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
  }

  export type UserUpsertWithoutAdminsInput = {
    update: XOR<UserUpdateWithoutAdminsInput, UserUncheckedUpdateWithoutAdminsInput>
    create: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminsInput, UserUncheckedUpdateWithoutAdminsInput>
  }

  export type UserUpdateWithoutAdminsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStatus?: User_StatusUpdateOneWithoutUsersNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    professors?: ProfessorUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    professors?: ProfessorUncheckedUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudentsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userStatus?: User_StatusCreateNestedOneWithoutUsersInput
    admins?: AdminCreateNestedManyWithoutUserInput
    professors?: ProfessorCreateNestedManyWithoutUserInput
    outsiders?: OutsiderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutUserInput
    professors?: ProfessorUncheckedCreateNestedManyWithoutUserInput
    outsiders?: OutsiderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type Student_StatusCreateWithoutStudentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Student_StatusUncheckedCreateWithoutStudentsInput = {
    student_status_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Student_StatusCreateOrConnectWithoutStudentsInput = {
    where: Student_StatusWhereUniqueInput
    create: XOR<Student_StatusCreateWithoutStudentsInput, Student_StatusUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStatus?: User_StatusUpdateOneWithoutUsersNestedInput
    admins?: AdminUpdateManyWithoutUserNestedInput
    professors?: ProfessorUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutUserNestedInput
    professors?: ProfessorUncheckedUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Student_StatusUpsertWithoutStudentsInput = {
    update: XOR<Student_StatusUpdateWithoutStudentsInput, Student_StatusUncheckedUpdateWithoutStudentsInput>
    create: XOR<Student_StatusCreateWithoutStudentsInput, Student_StatusUncheckedCreateWithoutStudentsInput>
    where?: Student_StatusWhereInput
  }

  export type Student_StatusUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Student_StatusWhereInput
    data: XOR<Student_StatusUpdateWithoutStudentsInput, Student_StatusUncheckedUpdateWithoutStudentsInput>
  }

  export type Student_StatusUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_StatusUncheckedUpdateWithoutStudentsInput = {
    student_status_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateWithoutStudentStatusInput = {
    uuid_student?: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutStudentStatusInput = {
    uuid_student?: string
    uuidUser: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutStudentStatusInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput>
  }

  export type StudentCreateManyStudentStatusInputEnvelope = {
    data: StudentCreateManyStudentStatusInput | StudentCreateManyStudentStatusInput[]
  }

  export type StudentUpsertWithWhereUniqueWithoutStudentStatusInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutStudentStatusInput, StudentUncheckedUpdateWithoutStudentStatusInput>
    create: XOR<StudentCreateWithoutStudentStatusInput, StudentUncheckedCreateWithoutStudentStatusInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutStudentStatusInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutStudentStatusInput, StudentUncheckedUpdateWithoutStudentStatusInput>
  }

  export type StudentUpdateManyWithWhereWithoutStudentStatusInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentStatusInput>
  }

  export type UserCreateWithoutProfessorsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userStatus?: User_StatusCreateNestedOneWithoutUsersInput
    admins?: AdminCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    outsiders?: OutsiderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessorsInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    outsiders?: OutsiderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessorsInput, UserUncheckedCreateWithoutProfessorsInput>
  }

  export type Professor_RoleCreateWithoutProfessorsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Professor_RoleUncheckedCreateWithoutProfessorsInput = {
    professor_role_id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Professor_RoleCreateOrConnectWithoutProfessorsInput = {
    where: Professor_RoleWhereUniqueInput
    create: XOR<Professor_RoleCreateWithoutProfessorsInput, Professor_RoleUncheckedCreateWithoutProfessorsInput>
  }

  export type UserUpsertWithoutProfessorsInput = {
    update: XOR<UserUpdateWithoutProfessorsInput, UserUncheckedUpdateWithoutProfessorsInput>
    create: XOR<UserCreateWithoutProfessorsInput, UserUncheckedCreateWithoutProfessorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessorsInput, UserUncheckedUpdateWithoutProfessorsInput>
  }

  export type UserUpdateWithoutProfessorsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStatus?: User_StatusUpdateOneWithoutUsersNestedInput
    admins?: AdminUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessorsInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Professor_RoleUpsertWithoutProfessorsInput = {
    update: XOR<Professor_RoleUpdateWithoutProfessorsInput, Professor_RoleUncheckedUpdateWithoutProfessorsInput>
    create: XOR<Professor_RoleCreateWithoutProfessorsInput, Professor_RoleUncheckedCreateWithoutProfessorsInput>
    where?: Professor_RoleWhereInput
  }

  export type Professor_RoleUpdateToOneWithWhereWithoutProfessorsInput = {
    where?: Professor_RoleWhereInput
    data: XOR<Professor_RoleUpdateWithoutProfessorsInput, Professor_RoleUncheckedUpdateWithoutProfessorsInput>
  }

  export type Professor_RoleUpdateWithoutProfessorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Professor_RoleUncheckedUpdateWithoutProfessorsInput = {
    professor_role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateWithoutProfessorRoleInput = {
    uuid_professor?: string
    universityId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessorsInput
  }

  export type ProfessorUncheckedCreateWithoutProfessorRoleInput = {
    uuid_professor?: string
    uuidUser: string
    universityId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCreateOrConnectWithoutProfessorRoleInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput>
  }

  export type ProfessorCreateManyProfessorRoleInputEnvelope = {
    data: ProfessorCreateManyProfessorRoleInput | ProfessorCreateManyProfessorRoleInput[]
  }

  export type ProfessorUpsertWithWhereUniqueWithoutProfessorRoleInput = {
    where: ProfessorWhereUniqueInput
    update: XOR<ProfessorUpdateWithoutProfessorRoleInput, ProfessorUncheckedUpdateWithoutProfessorRoleInput>
    create: XOR<ProfessorCreateWithoutProfessorRoleInput, ProfessorUncheckedCreateWithoutProfessorRoleInput>
  }

  export type ProfessorUpdateWithWhereUniqueWithoutProfessorRoleInput = {
    where: ProfessorWhereUniqueInput
    data: XOR<ProfessorUpdateWithoutProfessorRoleInput, ProfessorUncheckedUpdateWithoutProfessorRoleInput>
  }

  export type ProfessorUpdateManyWithWhereWithoutProfessorRoleInput = {
    where: ProfessorScalarWhereInput
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyWithoutProfessorRoleInput>
  }

  export type UserCreateWithoutOutsidersInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userStatus?: User_StatusCreateNestedOneWithoutUsersInput
    admins?: AdminCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    professors?: ProfessorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutsidersInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    status?: number | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    professors?: ProfessorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutsidersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutsidersInput, UserUncheckedCreateWithoutOutsidersInput>
  }

  export type UserUpsertWithoutOutsidersInput = {
    update: XOR<UserUpdateWithoutOutsidersInput, UserUncheckedUpdateWithoutOutsidersInput>
    create: XOR<UserCreateWithoutOutsidersInput, UserUncheckedCreateWithoutOutsidersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutsidersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutsidersInput, UserUncheckedUpdateWithoutOutsidersInput>
  }

  export type UserUpdateWithoutOutsidersInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStatus?: User_StatusUpdateOneWithoutUsersNestedInput
    admins?: AdminUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    professors?: ProfessorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutsidersInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    professors?: ProfessorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminCreateManyUserInput = {
    uuid_admin?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyUserInput = {
    uuid_student?: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCreateManyUserInput = {
    uuid_professor?: string
    universityId: bigint | number
    role?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutsiderCreateManyUserInput = {
    uuid_outsider?: string
    organizationName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateWithoutUserInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyWithoutUserInput = {
    uuid_admin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutUserInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentStatus?: Student_StatusUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutUserInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUpdateWithoutUserInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professorRole?: Professor_RoleUpdateOneWithoutProfessorsNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutUserInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyWithoutUserInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderUpdateWithoutUserInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderUncheckedUpdateWithoutUserInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutsiderUncheckedUpdateManyWithoutUserInput = {
    uuid_outsider?: StringFieldUpdateOperationsInput | string
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUserStatusInput = {
    uuid_user?: string
    email: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutUserStatusInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    professors?: ProfessorUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatusInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    professors?: ProfessorUncheckedUpdateManyWithoutUserNestedInput
    outsiders?: OutsiderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserStatusInput = {
    uuid_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyStudentStatusInput = {
    uuid_student?: string
    uuidUser: string
    universityId: bigint | number
    averageGrade?: number | null
    enrollmentYear?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutStudentStatusInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentStatusInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutStudentStatusInput = {
    uuid_student?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    averageGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    enrollmentYear?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateManyProfessorRoleInput = {
    uuid_professor?: string
    uuidUser: string
    universityId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUpdateWithoutProfessorRoleInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessorsNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutProfessorRoleInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyWithoutProfessorRoleInput = {
    uuid_professor?: StringFieldUpdateOperationsInput | string
    uuidUser?: StringFieldUpdateOperationsInput | string
    universityId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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