
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Agencia
 * 
 */
export type Agencia = $Result.DefaultSelection<Prisma.$AgenciaPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Asiento
 * 
 */
export type Asiento = $Result.DefaultSelection<Prisma.$AsientoPayload>
/**
 * Model Viaje
 * 
 */
export type Viaje = $Result.DefaultSelection<Prisma.$ViajePayload>
/**
 * Model Ruta
 * 
 */
export type Ruta = $Result.DefaultSelection<Prisma.$RutaPayload>
/**
 * Model Configuracion_Pago
 * 
 */
export type Configuracion_Pago = $Result.DefaultSelection<Prisma.$Configuracion_PagoPayload>
/**
 * Model Chofer
 * 
 */
export type Chofer = $Result.DefaultSelection<Prisma.$ChoferPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agencia`: Exposes CRUD operations for the **Agencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencias
    * const agencias = await prisma.agencia.findMany()
    * ```
    */
  get agencia(): Prisma.AgenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asiento`: Exposes CRUD operations for the **Asiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asientos
    * const asientos = await prisma.asiento.findMany()
    * ```
    */
  get asiento(): Prisma.AsientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viaje`: Exposes CRUD operations for the **Viaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viajes
    * const viajes = await prisma.viaje.findMany()
    * ```
    */
  get viaje(): Prisma.ViajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruta`: Exposes CRUD operations for the **Ruta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutas
    * const rutas = await prisma.ruta.findMany()
    * ```
    */
  get ruta(): Prisma.RutaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracion_Pago`: Exposes CRUD operations for the **Configuracion_Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracion_Pagos
    * const configuracion_Pagos = await prisma.configuracion_Pago.findMany()
    * ```
    */
  get configuracion_Pago(): Prisma.Configuracion_PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chofer`: Exposes CRUD operations for the **Chofer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chofers
    * const chofers = await prisma.chofer.findMany()
    * ```
    */
  get chofer(): Prisma.ChoferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    Agencia: 'Agencia',
    Bus: 'Bus',
    Asiento: 'Asiento',
    Viaje: 'Viaje',
    Ruta: 'Ruta',
    Configuracion_Pago: 'Configuracion_Pago',
    Chofer: 'Chofer'
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
      modelProps: "usuario" | "agencia" | "bus" | "asiento" | "viaje" | "ruta" | "configuracion_Pago" | "chofer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Agencia: {
        payload: Prisma.$AgenciaPayload<ExtArgs>
        fields: Prisma.AgenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          findFirst: {
            args: Prisma.AgenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          findMany: {
            args: Prisma.AgenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>[]
          }
          create: {
            args: Prisma.AgenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          createMany: {
            args: Prisma.AgenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>[]
          }
          delete: {
            args: Prisma.AgenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          update: {
            args: Prisma.AgenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          deleteMany: {
            args: Prisma.AgenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>[]
          }
          upsert: {
            args: Prisma.AgenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgenciaPayload>
          }
          aggregate: {
            args: Prisma.AgenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgencia>
          }
          groupBy: {
            args: Prisma.AgenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AgenciaCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Asiento: {
        payload: Prisma.$AsientoPayload<ExtArgs>
        fields: Prisma.AsientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          findFirst: {
            args: Prisma.AsientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          findMany: {
            args: Prisma.AsientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>[]
          }
          create: {
            args: Prisma.AsientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          createMany: {
            args: Prisma.AsientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>[]
          }
          delete: {
            args: Prisma.AsientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          update: {
            args: Prisma.AsientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          deleteMany: {
            args: Prisma.AsientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>[]
          }
          upsert: {
            args: Prisma.AsientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          aggregate: {
            args: Prisma.AsientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsiento>
          }
          groupBy: {
            args: Prisma.AsientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsientoCountArgs<ExtArgs>
            result: $Utils.Optional<AsientoCountAggregateOutputType> | number
          }
        }
      }
      Viaje: {
        payload: Prisma.$ViajePayload<ExtArgs>
        fields: Prisma.ViajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findFirst: {
            args: Prisma.ViajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findMany: {
            args: Prisma.ViajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          create: {
            args: Prisma.ViajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          createMany: {
            args: Prisma.ViajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          delete: {
            args: Prisma.ViajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          update: {
            args: Prisma.ViajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          deleteMany: {
            args: Prisma.ViajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          upsert: {
            args: Prisma.ViajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          aggregate: {
            args: Prisma.ViajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViaje>
          }
          groupBy: {
            args: Prisma.ViajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajeCountArgs<ExtArgs>
            result: $Utils.Optional<ViajeCountAggregateOutputType> | number
          }
        }
      }
      Ruta: {
        payload: Prisma.$RutaPayload<ExtArgs>
        fields: Prisma.RutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findFirst: {
            args: Prisma.RutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findMany: {
            args: Prisma.RutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          create: {
            args: Prisma.RutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          createMany: {
            args: Prisma.RutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          delete: {
            args: Prisma.RutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          update: {
            args: Prisma.RutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          deleteMany: {
            args: Prisma.RutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          upsert: {
            args: Prisma.RutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          aggregate: {
            args: Prisma.RutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuta>
          }
          groupBy: {
            args: Prisma.RutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutaCountArgs<ExtArgs>
            result: $Utils.Optional<RutaCountAggregateOutputType> | number
          }
        }
      }
      Configuracion_Pago: {
        payload: Prisma.$Configuracion_PagoPayload<ExtArgs>
        fields: Prisma.Configuracion_PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Configuracion_PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Configuracion_PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          findFirst: {
            args: Prisma.Configuracion_PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Configuracion_PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          findMany: {
            args: Prisma.Configuracion_PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>[]
          }
          create: {
            args: Prisma.Configuracion_PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          createMany: {
            args: Prisma.Configuracion_PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Configuracion_PagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>[]
          }
          delete: {
            args: Prisma.Configuracion_PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          update: {
            args: Prisma.Configuracion_PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          deleteMany: {
            args: Prisma.Configuracion_PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Configuracion_PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Configuracion_PagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>[]
          }
          upsert: {
            args: Prisma.Configuracion_PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Configuracion_PagoPayload>
          }
          aggregate: {
            args: Prisma.Configuracion_PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion_Pago>
          }
          groupBy: {
            args: Prisma.Configuracion_PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Configuracion_PagoCountArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_PagoCountAggregateOutputType> | number
          }
        }
      }
      Chofer: {
        payload: Prisma.$ChoferPayload<ExtArgs>
        fields: Prisma.ChoferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findFirst: {
            args: Prisma.ChoferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findMany: {
            args: Prisma.ChoferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          create: {
            args: Prisma.ChoferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          createMany: {
            args: Prisma.ChoferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          delete: {
            args: Prisma.ChoferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          update: {
            args: Prisma.ChoferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          deleteMany: {
            args: Prisma.ChoferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          upsert: {
            args: Prisma.ChoferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          aggregate: {
            args: Prisma.ChoferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChofer>
          }
          groupBy: {
            args: Prisma.ChoferGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoferGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoferCountArgs<ExtArgs>
            result: $Utils.Optional<ChoferCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    agencia?: AgenciaOmit
    bus?: BusOmit
    asiento?: AsientoOmit
    viaje?: ViajeOmit
    ruta?: RutaOmit
    configuracion_Pago?: Configuracion_PagoOmit
    chofer?: ChoferOmit
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
   * Count Type AgenciaCountOutputType
   */

  export type AgenciaCountOutputType = {
    buses: number
    choferes: number
    configuraciones: number
  }

  export type AgenciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | AgenciaCountOutputTypeCountBusesArgs
    choferes?: boolean | AgenciaCountOutputTypeCountChoferesArgs
    configuraciones?: boolean | AgenciaCountOutputTypeCountConfiguracionesArgs
  }

  // Custom InputTypes
  /**
   * AgenciaCountOutputType without action
   */
  export type AgenciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgenciaCountOutputType
     */
    select?: AgenciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgenciaCountOutputType without action
   */
  export type AgenciaCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * AgenciaCountOutputType without action
   */
  export type AgenciaCountOutputTypeCountChoferesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoferWhereInput
  }

  /**
   * AgenciaCountOutputType without action
   */
  export type AgenciaCountOutputTypeCountConfiguracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Configuracion_PagoWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    asientos: number
    viajes: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asientos?: boolean | BusCountOutputTypeCountAsientosArgs
    viajes?: boolean | BusCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountAsientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type RutaCountOutputType
   */

  export type RutaCountOutputType = {
    viajes: number
  }

  export type RutaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | RutaCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCountOutputType
     */
    select?: RutaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type Configuracion_PagoCountOutputType
   */

  export type Configuracion_PagoCountOutputType = {
    viajes: number
  }

  export type Configuracion_PagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | Configuracion_PagoCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * Configuracion_PagoCountOutputType without action
   */
  export type Configuracion_PagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_PagoCountOutputType
     */
    select?: Configuracion_PagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Configuracion_PagoCountOutputType without action
   */
  export type Configuracion_PagoCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type ChoferCountOutputType
   */

  export type ChoferCountOutputType = {
    viajes: number
  }

  export type ChoferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | ChoferCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferCountOutputType
     */
    select?: ChoferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    numero_celular: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    numero_celular: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    correo_electronico: string | null
    contraseña: string | null
    numero_celular: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    correo_electronico: string | null
    contraseña: string | null
    numero_celular: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    correo_electronico: number
    contraseña: number
    numero_celular: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    numero_celular?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    numero_celular?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    correo_electronico?: true
    contraseña?: true
    numero_celular?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    correo_electronico?: true
    contraseña?: true
    numero_celular?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    correo_electronico?: true
    contraseña?: true
    numero_celular?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    correo_electronico: string
    contraseña: string
    numero_celular: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_electronico?: boolean
    contraseña?: boolean
    numero_celular?: boolean
    agencia?: boolean | Usuario$agenciaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_electronico?: boolean
    contraseña?: boolean
    numero_celular?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo_electronico?: boolean
    contraseña?: boolean
    numero_celular?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    correo_electronico?: boolean
    contraseña?: boolean
    numero_celular?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "correo_electronico" | "contraseña" | "numero_celular", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | Usuario$agenciaArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      agencia: Prisma.$AgenciaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      correo_electronico: string
      contraseña: string
      numero_celular: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agencia<T extends Usuario$agenciaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$agenciaArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly correo_electronico: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly numero_celular: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.agencia
   */
  export type Usuario$agenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    where?: AgenciaWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Agencia
   */

  export type AggregateAgencia = {
    _count: AgenciaCountAggregateOutputType | null
    _avg: AgenciaAvgAggregateOutputType | null
    _sum: AgenciaSumAggregateOutputType | null
    _min: AgenciaMinAggregateOutputType | null
    _max: AgenciaMaxAggregateOutputType | null
  }

  export type AgenciaAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type AgenciaSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type AgenciaMinAggregateOutputType = {
    id_usuario: number | null
    nombre_agencia: string | null
    tipo_sociedad: string | null
    NIT: string | null
    departamento: string | null
    ciudad: string | null
    direccion: string | null
    estado: string | null
  }

  export type AgenciaMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_agencia: string | null
    tipo_sociedad: string | null
    NIT: string | null
    departamento: string | null
    ciudad: string | null
    direccion: string | null
    estado: string | null
  }

  export type AgenciaCountAggregateOutputType = {
    id_usuario: number
    nombre_agencia: number
    tipo_sociedad: number
    NIT: number
    departamento: number
    ciudad: number
    direccion: number
    estado: number
    _all: number
  }


  export type AgenciaAvgAggregateInputType = {
    id_usuario?: true
  }

  export type AgenciaSumAggregateInputType = {
    id_usuario?: true
  }

  export type AgenciaMinAggregateInputType = {
    id_usuario?: true
    nombre_agencia?: true
    tipo_sociedad?: true
    NIT?: true
    departamento?: true
    ciudad?: true
    direccion?: true
    estado?: true
  }

  export type AgenciaMaxAggregateInputType = {
    id_usuario?: true
    nombre_agencia?: true
    tipo_sociedad?: true
    NIT?: true
    departamento?: true
    ciudad?: true
    direccion?: true
    estado?: true
  }

  export type AgenciaCountAggregateInputType = {
    id_usuario?: true
    nombre_agencia?: true
    tipo_sociedad?: true
    NIT?: true
    departamento?: true
    ciudad?: true
    direccion?: true
    estado?: true
    _all?: true
  }

  export type AgenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencia to aggregate.
     */
    where?: AgenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencias to fetch.
     */
    orderBy?: AgenciaOrderByWithRelationInput | AgenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencias
    **/
    _count?: true | AgenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgenciaMaxAggregateInputType
  }

  export type GetAgenciaAggregateType<T extends AgenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgencia[P]>
      : GetScalarType<T[P], AggregateAgencia[P]>
  }




  export type AgenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgenciaWhereInput
    orderBy?: AgenciaOrderByWithAggregationInput | AgenciaOrderByWithAggregationInput[]
    by: AgenciaScalarFieldEnum[] | AgenciaScalarFieldEnum
    having?: AgenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgenciaCountAggregateInputType | true
    _avg?: AgenciaAvgAggregateInputType
    _sum?: AgenciaSumAggregateInputType
    _min?: AgenciaMinAggregateInputType
    _max?: AgenciaMaxAggregateInputType
  }

  export type AgenciaGroupByOutputType = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    _count: AgenciaCountAggregateOutputType | null
    _avg: AgenciaAvgAggregateOutputType | null
    _sum: AgenciaSumAggregateOutputType | null
    _min: AgenciaMinAggregateOutputType | null
    _max: AgenciaMaxAggregateOutputType | null
  }

  type GetAgenciaGroupByPayload<T extends AgenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AgenciaGroupByOutputType[P]>
        }
      >
    >


  export type AgenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_agencia?: boolean
    tipo_sociedad?: boolean
    NIT?: boolean
    departamento?: boolean
    ciudad?: boolean
    direccion?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    buses?: boolean | Agencia$busesArgs<ExtArgs>
    choferes?: boolean | Agencia$choferesArgs<ExtArgs>
    configuraciones?: boolean | Agencia$configuracionesArgs<ExtArgs>
    _count?: boolean | AgenciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencia"]>

  export type AgenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_agencia?: boolean
    tipo_sociedad?: boolean
    NIT?: boolean
    departamento?: boolean
    ciudad?: boolean
    direccion?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencia"]>

  export type AgenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_agencia?: boolean
    tipo_sociedad?: boolean
    NIT?: boolean
    departamento?: boolean
    ciudad?: boolean
    direccion?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencia"]>

  export type AgenciaSelectScalar = {
    id_usuario?: boolean
    nombre_agencia?: boolean
    tipo_sociedad?: boolean
    NIT?: boolean
    departamento?: boolean
    ciudad?: boolean
    direccion?: boolean
    estado?: boolean
  }

  export type AgenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_agencia" | "tipo_sociedad" | "NIT" | "departamento" | "ciudad" | "direccion" | "estado", ExtArgs["result"]["agencia"]>
  export type AgenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    buses?: boolean | Agencia$busesArgs<ExtArgs>
    choferes?: boolean | Agencia$choferesArgs<ExtArgs>
    configuraciones?: boolean | Agencia$configuracionesArgs<ExtArgs>
    _count?: boolean | AgenciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AgenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AgenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agencia"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      buses: Prisma.$BusPayload<ExtArgs>[]
      choferes: Prisma.$ChoferPayload<ExtArgs>[]
      configuraciones: Prisma.$Configuracion_PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_agencia: string
      tipo_sociedad: string
      NIT: string
      departamento: string
      ciudad: string
      direccion: string
      estado: string
    }, ExtArgs["result"]["agencia"]>
    composites: {}
  }

  type AgenciaGetPayload<S extends boolean | null | undefined | AgenciaDefaultArgs> = $Result.GetResult<Prisma.$AgenciaPayload, S>

  type AgenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgenciaCountAggregateInputType | true
    }

  export interface AgenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agencia'], meta: { name: 'Agencia' } }
    /**
     * Find zero or one Agencia that matches the filter.
     * @param {AgenciaFindUniqueArgs} args - Arguments to find a Agencia
     * @example
     * // Get one Agencia
     * const agencia = await prisma.agencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgenciaFindUniqueArgs>(args: SelectSubset<T, AgenciaFindUniqueArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgenciaFindUniqueOrThrowArgs} args - Arguments to find a Agencia
     * @example
     * // Get one Agencia
     * const agencia = await prisma.agencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaFindFirstArgs} args - Arguments to find a Agencia
     * @example
     * // Get one Agencia
     * const agencia = await prisma.agencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgenciaFindFirstArgs>(args?: SelectSubset<T, AgenciaFindFirstArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaFindFirstOrThrowArgs} args - Arguments to find a Agencia
     * @example
     * // Get one Agencia
     * const agencia = await prisma.agencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencias
     * const agencias = await prisma.agencia.findMany()
     * 
     * // Get first 10 Agencias
     * const agencias = await prisma.agencia.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const agenciaWithId_usuarioOnly = await prisma.agencia.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends AgenciaFindManyArgs>(args?: SelectSubset<T, AgenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agencia.
     * @param {AgenciaCreateArgs} args - Arguments to create a Agencia.
     * @example
     * // Create one Agencia
     * const Agencia = await prisma.agencia.create({
     *   data: {
     *     // ... data to create a Agencia
     *   }
     * })
     * 
     */
    create<T extends AgenciaCreateArgs>(args: SelectSubset<T, AgenciaCreateArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencias.
     * @param {AgenciaCreateManyArgs} args - Arguments to create many Agencias.
     * @example
     * // Create many Agencias
     * const agencia = await prisma.agencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgenciaCreateManyArgs>(args?: SelectSubset<T, AgenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencias and returns the data saved in the database.
     * @param {AgenciaCreateManyAndReturnArgs} args - Arguments to create many Agencias.
     * @example
     * // Create many Agencias
     * const agencia = await prisma.agencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencias and only return the `id_usuario`
     * const agenciaWithId_usuarioOnly = await prisma.agencia.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agencia.
     * @param {AgenciaDeleteArgs} args - Arguments to delete one Agencia.
     * @example
     * // Delete one Agencia
     * const Agencia = await prisma.agencia.delete({
     *   where: {
     *     // ... filter to delete one Agencia
     *   }
     * })
     * 
     */
    delete<T extends AgenciaDeleteArgs>(args: SelectSubset<T, AgenciaDeleteArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agencia.
     * @param {AgenciaUpdateArgs} args - Arguments to update one Agencia.
     * @example
     * // Update one Agencia
     * const agencia = await prisma.agencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgenciaUpdateArgs>(args: SelectSubset<T, AgenciaUpdateArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencias.
     * @param {AgenciaDeleteManyArgs} args - Arguments to filter Agencias to delete.
     * @example
     * // Delete a few Agencias
     * const { count } = await prisma.agencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgenciaDeleteManyArgs>(args?: SelectSubset<T, AgenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencias
     * const agencia = await prisma.agencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgenciaUpdateManyArgs>(args: SelectSubset<T, AgenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencias and returns the data updated in the database.
     * @param {AgenciaUpdateManyAndReturnArgs} args - Arguments to update many Agencias.
     * @example
     * // Update many Agencias
     * const agencia = await prisma.agencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencias and only return the `id_usuario`
     * const agenciaWithId_usuarioOnly = await prisma.agencia.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends AgenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AgenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agencia.
     * @param {AgenciaUpsertArgs} args - Arguments to update or create a Agencia.
     * @example
     * // Update or create a Agencia
     * const agencia = await prisma.agencia.upsert({
     *   create: {
     *     // ... data to create a Agencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agencia we want to update
     *   }
     * })
     */
    upsert<T extends AgenciaUpsertArgs>(args: SelectSubset<T, AgenciaUpsertArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaCountArgs} args - Arguments to filter Agencias to count.
     * @example
     * // Count the number of Agencias
     * const count = await prisma.agencia.count({
     *   where: {
     *     // ... the filter for the Agencias we want to count
     *   }
     * })
    **/
    count<T extends AgenciaCountArgs>(
      args?: Subset<T, AgenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgenciaAggregateArgs>(args: Subset<T, AgenciaAggregateArgs>): Prisma.PrismaPromise<GetAgenciaAggregateType<T>>

    /**
     * Group by Agencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenciaGroupByArgs} args - Group by arguments.
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
      T extends AgenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgenciaGroupByArgs['orderBy'] }
        : { orderBy?: AgenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agencia model
   */
  readonly fields: AgenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buses<T extends Agencia$busesArgs<ExtArgs> = {}>(args?: Subset<T, Agencia$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    choferes<T extends Agencia$choferesArgs<ExtArgs> = {}>(args?: Subset<T, Agencia$choferesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuraciones<T extends Agencia$configuracionesArgs<ExtArgs> = {}>(args?: Subset<T, Agencia$configuracionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agencia model
   */
  interface AgenciaFieldRefs {
    readonly id_usuario: FieldRef<"Agencia", 'Int'>
    readonly nombre_agencia: FieldRef<"Agencia", 'String'>
    readonly tipo_sociedad: FieldRef<"Agencia", 'String'>
    readonly NIT: FieldRef<"Agencia", 'String'>
    readonly departamento: FieldRef<"Agencia", 'String'>
    readonly ciudad: FieldRef<"Agencia", 'String'>
    readonly direccion: FieldRef<"Agencia", 'String'>
    readonly estado: FieldRef<"Agencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agencia findUnique
   */
  export type AgenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter, which Agencia to fetch.
     */
    where: AgenciaWhereUniqueInput
  }

  /**
   * Agencia findUniqueOrThrow
   */
  export type AgenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter, which Agencia to fetch.
     */
    where: AgenciaWhereUniqueInput
  }

  /**
   * Agencia findFirst
   */
  export type AgenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter, which Agencia to fetch.
     */
    where?: AgenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencias to fetch.
     */
    orderBy?: AgenciaOrderByWithRelationInput | AgenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencias.
     */
    cursor?: AgenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencias.
     */
    distinct?: AgenciaScalarFieldEnum | AgenciaScalarFieldEnum[]
  }

  /**
   * Agencia findFirstOrThrow
   */
  export type AgenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter, which Agencia to fetch.
     */
    where?: AgenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencias to fetch.
     */
    orderBy?: AgenciaOrderByWithRelationInput | AgenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencias.
     */
    cursor?: AgenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencias.
     */
    distinct?: AgenciaScalarFieldEnum | AgenciaScalarFieldEnum[]
  }

  /**
   * Agencia findMany
   */
  export type AgenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter, which Agencias to fetch.
     */
    where?: AgenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencias to fetch.
     */
    orderBy?: AgenciaOrderByWithRelationInput | AgenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencias.
     */
    cursor?: AgenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencias.
     */
    skip?: number
    distinct?: AgenciaScalarFieldEnum | AgenciaScalarFieldEnum[]
  }

  /**
   * Agencia create
   */
  export type AgenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agencia.
     */
    data: XOR<AgenciaCreateInput, AgenciaUncheckedCreateInput>
  }

  /**
   * Agencia createMany
   */
  export type AgenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencias.
     */
    data: AgenciaCreateManyInput | AgenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agencia createManyAndReturn
   */
  export type AgenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Agencias.
     */
    data: AgenciaCreateManyInput | AgenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agencia update
   */
  export type AgenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agencia.
     */
    data: XOR<AgenciaUpdateInput, AgenciaUncheckedUpdateInput>
    /**
     * Choose, which Agencia to update.
     */
    where: AgenciaWhereUniqueInput
  }

  /**
   * Agencia updateMany
   */
  export type AgenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencias.
     */
    data: XOR<AgenciaUpdateManyMutationInput, AgenciaUncheckedUpdateManyInput>
    /**
     * Filter which Agencias to update
     */
    where?: AgenciaWhereInput
    /**
     * Limit how many Agencias to update.
     */
    limit?: number
  }

  /**
   * Agencia updateManyAndReturn
   */
  export type AgenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * The data used to update Agencias.
     */
    data: XOR<AgenciaUpdateManyMutationInput, AgenciaUncheckedUpdateManyInput>
    /**
     * Filter which Agencias to update
     */
    where?: AgenciaWhereInput
    /**
     * Limit how many Agencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agencia upsert
   */
  export type AgenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agencia to update in case it exists.
     */
    where: AgenciaWhereUniqueInput
    /**
     * In case the Agencia found by the `where` argument doesn't exist, create a new Agencia with this data.
     */
    create: XOR<AgenciaCreateInput, AgenciaUncheckedCreateInput>
    /**
     * In case the Agencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgenciaUpdateInput, AgenciaUncheckedUpdateInput>
  }

  /**
   * Agencia delete
   */
  export type AgenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
    /**
     * Filter which Agencia to delete.
     */
    where: AgenciaWhereUniqueInput
  }

  /**
   * Agencia deleteMany
   */
  export type AgenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencias to delete
     */
    where?: AgenciaWhereInput
    /**
     * Limit how many Agencias to delete.
     */
    limit?: number
  }

  /**
   * Agencia.buses
   */
  export type Agencia$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Agencia.choferes
   */
  export type Agencia$choferesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    where?: ChoferWhereInput
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    cursor?: ChoferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Agencia.configuraciones
   */
  export type Agencia$configuracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    where?: Configuracion_PagoWhereInput
    orderBy?: Configuracion_PagoOrderByWithRelationInput | Configuracion_PagoOrderByWithRelationInput[]
    cursor?: Configuracion_PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Configuracion_PagoScalarFieldEnum | Configuracion_PagoScalarFieldEnum[]
  }

  /**
   * Agencia without action
   */
  export type AgenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agencia
     */
    select?: AgenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agencia
     */
    omit?: AgenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenciaInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id_bus: number | null
    año_modelo: number | null
    id_agencia: number | null
  }

  export type BusSumAggregateOutputType = {
    id_bus: number | null
    año_modelo: number | null
    id_agencia: number | null
  }

  export type BusMinAggregateOutputType = {
    id_bus: number | null
    placa: string | null
    marca: string | null
    modelo: string | null
    año_modelo: number | null
    tipo_bus: string | null
    estado: string | null
    id_agencia: number | null
  }

  export type BusMaxAggregateOutputType = {
    id_bus: number | null
    placa: string | null
    marca: string | null
    modelo: string | null
    año_modelo: number | null
    tipo_bus: string | null
    estado: string | null
    id_agencia: number | null
  }

  export type BusCountAggregateOutputType = {
    id_bus: number
    placa: number
    marca: number
    modelo: number
    año_modelo: number
    tipo_bus: number
    estado: number
    id_agencia: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id_bus?: true
    año_modelo?: true
    id_agencia?: true
  }

  export type BusSumAggregateInputType = {
    id_bus?: true
    año_modelo?: true
    id_agencia?: true
  }

  export type BusMinAggregateInputType = {
    id_bus?: true
    placa?: true
    marca?: true
    modelo?: true
    año_modelo?: true
    tipo_bus?: true
    estado?: true
    id_agencia?: true
  }

  export type BusMaxAggregateInputType = {
    id_bus?: true
    placa?: true
    marca?: true
    modelo?: true
    año_modelo?: true
    tipo_bus?: true
    estado?: true
    id_agencia?: true
  }

  export type BusCountAggregateInputType = {
    id_bus?: true
    placa?: true
    marca?: true
    modelo?: true
    año_modelo?: true
    tipo_bus?: true
    estado?: true
    id_agencia?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id_bus: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    id_agencia: number
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bus?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    año_modelo?: boolean
    tipo_bus?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    asientos?: boolean | Bus$asientosArgs<ExtArgs>
    viajes?: boolean | Bus$viajesArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bus?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    año_modelo?: boolean
    tipo_bus?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bus?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    año_modelo?: boolean
    tipo_bus?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id_bus?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    año_modelo?: boolean
    tipo_bus?: boolean
    estado?: boolean
    id_agencia?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_bus" | "placa" | "marca" | "modelo" | "año_modelo" | "tipo_bus" | "estado" | "id_agencia", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    asientos?: boolean | Bus$asientosArgs<ExtArgs>
    viajes?: boolean | Bus$viajesArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }
  export type BusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      agencia: Prisma.$AgenciaPayload<ExtArgs>
      asientos: Prisma.$AsientoPayload<ExtArgs>[]
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_bus: number
      placa: string
      marca: string
      modelo: string
      año_modelo: number
      tipo_bus: string
      estado: string
      id_agencia: number
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id_bus`
     * const busWithId_busOnly = await prisma.bus.findMany({ select: { id_bus: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id_bus`
     * const busWithId_busOnly = await prisma.bus.createManyAndReturn({
     *   select: { id_bus: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses and returns the data updated in the database.
     * @param {BusUpdateManyAndReturnArgs} args - Arguments to update many Buses.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buses and only return the `id_bus`
     * const busWithId_busOnly = await prisma.bus.updateManyAndReturn({
     *   select: { id_bus: true },
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
    updateManyAndReturn<T extends BusUpdateManyAndReturnArgs>(args: SelectSubset<T, BusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
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
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agencia<T extends AgenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgenciaDefaultArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asientos<T extends Bus$asientosArgs<ExtArgs> = {}>(args?: Subset<T, Bus$asientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viajes<T extends Bus$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Bus$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id_bus: FieldRef<"Bus", 'Int'>
    readonly placa: FieldRef<"Bus", 'String'>
    readonly marca: FieldRef<"Bus", 'String'>
    readonly modelo: FieldRef<"Bus", 'String'>
    readonly año_modelo: FieldRef<"Bus", 'Int'>
    readonly tipo_bus: FieldRef<"Bus", 'String'>
    readonly estado: FieldRef<"Bus", 'String'>
    readonly id_agencia: FieldRef<"Bus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus updateManyAndReturn
   */
  export type BusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.asientos
   */
  export type Bus$asientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    where?: AsientoWhereInput
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    cursor?: AsientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Bus.viajes
   */
  export type Bus$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Asiento
   */

  export type AggregateAsiento = {
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  export type AsientoAvgAggregateOutputType = {
    id_asiento: number | null
    id_bus: number | null
  }

  export type AsientoSumAggregateOutputType = {
    id_asiento: number | null
    id_bus: number | null
  }

  export type AsientoMinAggregateOutputType = {
    id_asiento: number | null
    numero: string | null
    ubicacion: string | null
    estado: string | null
    id_bus: number | null
  }

  export type AsientoMaxAggregateOutputType = {
    id_asiento: number | null
    numero: string | null
    ubicacion: string | null
    estado: string | null
    id_bus: number | null
  }

  export type AsientoCountAggregateOutputType = {
    id_asiento: number
    numero: number
    ubicacion: number
    estado: number
    id_bus: number
    _all: number
  }


  export type AsientoAvgAggregateInputType = {
    id_asiento?: true
    id_bus?: true
  }

  export type AsientoSumAggregateInputType = {
    id_asiento?: true
    id_bus?: true
  }

  export type AsientoMinAggregateInputType = {
    id_asiento?: true
    numero?: true
    ubicacion?: true
    estado?: true
    id_bus?: true
  }

  export type AsientoMaxAggregateInputType = {
    id_asiento?: true
    numero?: true
    ubicacion?: true
    estado?: true
    id_bus?: true
  }

  export type AsientoCountAggregateInputType = {
    id_asiento?: true
    numero?: true
    ubicacion?: true
    estado?: true
    id_bus?: true
    _all?: true
  }

  export type AsientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asiento to aggregate.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asientos
    **/
    _count?: true | AsientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsientoMaxAggregateInputType
  }

  export type GetAsientoAggregateType<T extends AsientoAggregateArgs> = {
        [P in keyof T & keyof AggregateAsiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsiento[P]>
      : GetScalarType<T[P], AggregateAsiento[P]>
  }




  export type AsientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoWhereInput
    orderBy?: AsientoOrderByWithAggregationInput | AsientoOrderByWithAggregationInput[]
    by: AsientoScalarFieldEnum[] | AsientoScalarFieldEnum
    having?: AsientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsientoCountAggregateInputType | true
    _avg?: AsientoAvgAggregateInputType
    _sum?: AsientoSumAggregateInputType
    _min?: AsientoMinAggregateInputType
    _max?: AsientoMaxAggregateInputType
  }

  export type AsientoGroupByOutputType = {
    id_asiento: number
    numero: string
    ubicacion: string
    estado: string
    id_bus: number
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  type GetAsientoGroupByPayload<T extends AsientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsientoGroupByOutputType[P]>
            : GetScalarType<T[P], AsientoGroupByOutputType[P]>
        }
      >
    >


  export type AsientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    numero?: boolean
    ubicacion?: boolean
    estado?: boolean
    id_bus?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type AsientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    numero?: boolean
    ubicacion?: boolean
    estado?: boolean
    id_bus?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type AsientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    numero?: boolean
    ubicacion?: boolean
    estado?: boolean
    id_bus?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type AsientoSelectScalar = {
    id_asiento?: boolean
    numero?: boolean
    ubicacion?: boolean
    estado?: boolean
    id_bus?: boolean
  }

  export type AsientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_asiento" | "numero" | "ubicacion" | "estado" | "id_bus", ExtArgs["result"]["asiento"]>
  export type AsientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }
  export type AsientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }
  export type AsientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $AsientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asiento"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asiento: number
      numero: string
      ubicacion: string
      estado: string
      id_bus: number
    }, ExtArgs["result"]["asiento"]>
    composites: {}
  }

  type AsientoGetPayload<S extends boolean | null | undefined | AsientoDefaultArgs> = $Result.GetResult<Prisma.$AsientoPayload, S>

  type AsientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsientoCountAggregateInputType | true
    }

  export interface AsientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asiento'], meta: { name: 'Asiento' } }
    /**
     * Find zero or one Asiento that matches the filter.
     * @param {AsientoFindUniqueArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsientoFindUniqueArgs>(args: SelectSubset<T, AsientoFindUniqueArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsientoFindUniqueOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsientoFindUniqueOrThrowArgs>(args: SelectSubset<T, AsientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindFirstArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsientoFindFirstArgs>(args?: SelectSubset<T, AsientoFindFirstArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindFirstOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsientoFindFirstOrThrowArgs>(args?: SelectSubset<T, AsientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asientos
     * const asientos = await prisma.asiento.findMany()
     * 
     * // Get first 10 Asientos
     * const asientos = await prisma.asiento.findMany({ take: 10 })
     * 
     * // Only select the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.findMany({ select: { id_asiento: true } })
     * 
     */
    findMany<T extends AsientoFindManyArgs>(args?: SelectSubset<T, AsientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asiento.
     * @param {AsientoCreateArgs} args - Arguments to create a Asiento.
     * @example
     * // Create one Asiento
     * const Asiento = await prisma.asiento.create({
     *   data: {
     *     // ... data to create a Asiento
     *   }
     * })
     * 
     */
    create<T extends AsientoCreateArgs>(args: SelectSubset<T, AsientoCreateArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asientos.
     * @param {AsientoCreateManyArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsientoCreateManyArgs>(args?: SelectSubset<T, AsientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asientos and returns the data saved in the database.
     * @param {AsientoCreateManyAndReturnArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asientos and only return the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.createManyAndReturn({
     *   select: { id_asiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsientoCreateManyAndReturnArgs>(args?: SelectSubset<T, AsientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asiento.
     * @param {AsientoDeleteArgs} args - Arguments to delete one Asiento.
     * @example
     * // Delete one Asiento
     * const Asiento = await prisma.asiento.delete({
     *   where: {
     *     // ... filter to delete one Asiento
     *   }
     * })
     * 
     */
    delete<T extends AsientoDeleteArgs>(args: SelectSubset<T, AsientoDeleteArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asiento.
     * @param {AsientoUpdateArgs} args - Arguments to update one Asiento.
     * @example
     * // Update one Asiento
     * const asiento = await prisma.asiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsientoUpdateArgs>(args: SelectSubset<T, AsientoUpdateArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asientos.
     * @param {AsientoDeleteManyArgs} args - Arguments to filter Asientos to delete.
     * @example
     * // Delete a few Asientos
     * const { count } = await prisma.asiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsientoDeleteManyArgs>(args?: SelectSubset<T, AsientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsientoUpdateManyArgs>(args: SelectSubset<T, AsientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asientos and returns the data updated in the database.
     * @param {AsientoUpdateManyAndReturnArgs} args - Arguments to update many Asientos.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asientos and only return the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.updateManyAndReturn({
     *   select: { id_asiento: true },
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
    updateManyAndReturn<T extends AsientoUpdateManyAndReturnArgs>(args: SelectSubset<T, AsientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asiento.
     * @param {AsientoUpsertArgs} args - Arguments to update or create a Asiento.
     * @example
     * // Update or create a Asiento
     * const asiento = await prisma.asiento.upsert({
     *   create: {
     *     // ... data to create a Asiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asiento we want to update
     *   }
     * })
     */
    upsert<T extends AsientoUpsertArgs>(args: SelectSubset<T, AsientoUpsertArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoCountArgs} args - Arguments to filter Asientos to count.
     * @example
     * // Count the number of Asientos
     * const count = await prisma.asiento.count({
     *   where: {
     *     // ... the filter for the Asientos we want to count
     *   }
     * })
    **/
    count<T extends AsientoCountArgs>(
      args?: Subset<T, AsientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsientoAggregateArgs>(args: Subset<T, AsientoAggregateArgs>): Prisma.PrismaPromise<GetAsientoAggregateType<T>>

    /**
     * Group by Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoGroupByArgs} args - Group by arguments.
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
      T extends AsientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsientoGroupByArgs['orderBy'] }
        : { orderBy?: AsientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asiento model
   */
  readonly fields: AsientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asiento model
   */
  interface AsientoFieldRefs {
    readonly id_asiento: FieldRef<"Asiento", 'Int'>
    readonly numero: FieldRef<"Asiento", 'String'>
    readonly ubicacion: FieldRef<"Asiento", 'String'>
    readonly estado: FieldRef<"Asiento", 'String'>
    readonly id_bus: FieldRef<"Asiento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Asiento findUnique
   */
  export type AsientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento findUniqueOrThrow
   */
  export type AsientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento findFirst
   */
  export type AsientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento findFirstOrThrow
   */
  export type AsientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento findMany
   */
  export type AsientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asientos to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento create
   */
  export type AsientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Asiento.
     */
    data: XOR<AsientoCreateInput, AsientoUncheckedCreateInput>
  }

  /**
   * Asiento createMany
   */
  export type AsientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asientos.
     */
    data: AsientoCreateManyInput | AsientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asiento createManyAndReturn
   */
  export type AsientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * The data used to create many Asientos.
     */
    data: AsientoCreateManyInput | AsientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asiento update
   */
  export type AsientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Asiento.
     */
    data: XOR<AsientoUpdateInput, AsientoUncheckedUpdateInput>
    /**
     * Choose, which Asiento to update.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento updateMany
   */
  export type AsientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asientos.
     */
    data: XOR<AsientoUpdateManyMutationInput, AsientoUncheckedUpdateManyInput>
    /**
     * Filter which Asientos to update
     */
    where?: AsientoWhereInput
    /**
     * Limit how many Asientos to update.
     */
    limit?: number
  }

  /**
   * Asiento updateManyAndReturn
   */
  export type AsientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * The data used to update Asientos.
     */
    data: XOR<AsientoUpdateManyMutationInput, AsientoUncheckedUpdateManyInput>
    /**
     * Filter which Asientos to update
     */
    where?: AsientoWhereInput
    /**
     * Limit how many Asientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asiento upsert
   */
  export type AsientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Asiento to update in case it exists.
     */
    where: AsientoWhereUniqueInput
    /**
     * In case the Asiento found by the `where` argument doesn't exist, create a new Asiento with this data.
     */
    create: XOR<AsientoCreateInput, AsientoUncheckedCreateInput>
    /**
     * In case the Asiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsientoUpdateInput, AsientoUncheckedUpdateInput>
  }

  /**
   * Asiento delete
   */
  export type AsientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter which Asiento to delete.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento deleteMany
   */
  export type AsientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asientos to delete
     */
    where?: AsientoWhereInput
    /**
     * Limit how many Asientos to delete.
     */
    limit?: number
  }

  /**
   * Asiento without action
   */
  export type AsientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asiento
     */
    omit?: AsientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
  }


  /**
   * Model Viaje
   */

  export type AggregateViaje = {
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  export type ViajeAvgAggregateOutputType = {
    id_viaje: number | null
    costo: Decimal | null
    id_bus: number | null
    id_ruta: number | null
    id_chofer: number | null
    id_pago: number | null
  }

  export type ViajeSumAggregateOutputType = {
    id_viaje: number | null
    costo: Decimal | null
    id_bus: number | null
    id_ruta: number | null
    id_chofer: number | null
    id_pago: number | null
  }

  export type ViajeMinAggregateOutputType = {
    id_viaje: number | null
    fecha_salida: Date | null
    hora_salida_programada: Date | null
    hora_salida_real: Date | null
    costo: Decimal | null
    id_bus: number | null
    id_ruta: number | null
    id_chofer: number | null
    id_pago: number | null
  }

  export type ViajeMaxAggregateOutputType = {
    id_viaje: number | null
    fecha_salida: Date | null
    hora_salida_programada: Date | null
    hora_salida_real: Date | null
    costo: Decimal | null
    id_bus: number | null
    id_ruta: number | null
    id_chofer: number | null
    id_pago: number | null
  }

  export type ViajeCountAggregateOutputType = {
    id_viaje: number
    fecha_salida: number
    hora_salida_programada: number
    hora_salida_real: number
    costo: number
    id_bus: number
    id_ruta: number
    id_chofer: number
    id_pago: number
    _all: number
  }


  export type ViajeAvgAggregateInputType = {
    id_viaje?: true
    costo?: true
    id_bus?: true
    id_ruta?: true
    id_chofer?: true
    id_pago?: true
  }

  export type ViajeSumAggregateInputType = {
    id_viaje?: true
    costo?: true
    id_bus?: true
    id_ruta?: true
    id_chofer?: true
    id_pago?: true
  }

  export type ViajeMinAggregateInputType = {
    id_viaje?: true
    fecha_salida?: true
    hora_salida_programada?: true
    hora_salida_real?: true
    costo?: true
    id_bus?: true
    id_ruta?: true
    id_chofer?: true
    id_pago?: true
  }

  export type ViajeMaxAggregateInputType = {
    id_viaje?: true
    fecha_salida?: true
    hora_salida_programada?: true
    hora_salida_real?: true
    costo?: true
    id_bus?: true
    id_ruta?: true
    id_chofer?: true
    id_pago?: true
  }

  export type ViajeCountAggregateInputType = {
    id_viaje?: true
    fecha_salida?: true
    hora_salida_programada?: true
    hora_salida_real?: true
    costo?: true
    id_bus?: true
    id_ruta?: true
    id_chofer?: true
    id_pago?: true
    _all?: true
  }

  export type ViajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viaje to aggregate.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viajes
    **/
    _count?: true | ViajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajeMaxAggregateInputType
  }

  export type GetViajeAggregateType<T extends ViajeAggregateArgs> = {
        [P in keyof T & keyof AggregateViaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViaje[P]>
      : GetScalarType<T[P], AggregateViaje[P]>
  }




  export type ViajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithAggregationInput | ViajeOrderByWithAggregationInput[]
    by: ViajeScalarFieldEnum[] | ViajeScalarFieldEnum
    having?: ViajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajeCountAggregateInputType | true
    _avg?: ViajeAvgAggregateInputType
    _sum?: ViajeSumAggregateInputType
    _min?: ViajeMinAggregateInputType
    _max?: ViajeMaxAggregateInputType
  }

  export type ViajeGroupByOutputType = {
    id_viaje: number
    fecha_salida: Date
    hora_salida_programada: Date
    hora_salida_real: Date
    costo: Decimal
    id_bus: number
    id_ruta: number
    id_chofer: number
    id_pago: number
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  type GetViajeGroupByPayload<T extends ViajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajeGroupByOutputType[P]>
            : GetScalarType<T[P], ViajeGroupByOutputType[P]>
        }
      >
    >


  export type ViajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_viaje?: boolean
    fecha_salida?: boolean
    hora_salida_programada?: boolean
    hora_salida_real?: boolean
    costo?: boolean
    id_bus?: boolean
    id_ruta?: boolean
    id_chofer?: boolean
    id_pago?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_viaje?: boolean
    fecha_salida?: boolean
    hora_salida_programada?: boolean
    hora_salida_real?: boolean
    costo?: boolean
    id_bus?: boolean
    id_ruta?: boolean
    id_chofer?: boolean
    id_pago?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_viaje?: boolean
    fecha_salida?: boolean
    hora_salida_programada?: boolean
    hora_salida_real?: boolean
    costo?: boolean
    id_bus?: boolean
    id_ruta?: boolean
    id_chofer?: boolean
    id_pago?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectScalar = {
    id_viaje?: boolean
    fecha_salida?: boolean
    hora_salida_programada?: boolean
    hora_salida_real?: boolean
    costo?: boolean
    id_bus?: boolean
    id_ruta?: boolean
    id_chofer?: boolean
    id_pago?: boolean
  }

  export type ViajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_viaje" | "fecha_salida" | "hora_salida_programada" | "hora_salida_real" | "costo" | "id_bus" | "id_ruta" | "id_chofer" | "id_pago", ExtArgs["result"]["viaje"]>
  export type ViajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    pago?: boolean | Configuracion_PagoDefaultArgs<ExtArgs>
  }

  export type $ViajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viaje"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      ruta: Prisma.$RutaPayload<ExtArgs>
      chofer: Prisma.$ChoferPayload<ExtArgs>
      pago: Prisma.$Configuracion_PagoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_viaje: number
      fecha_salida: Date
      hora_salida_programada: Date
      hora_salida_real: Date
      costo: Prisma.Decimal
      id_bus: number
      id_ruta: number
      id_chofer: number
      id_pago: number
    }, ExtArgs["result"]["viaje"]>
    composites: {}
  }

  type ViajeGetPayload<S extends boolean | null | undefined | ViajeDefaultArgs> = $Result.GetResult<Prisma.$ViajePayload, S>

  type ViajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajeCountAggregateInputType | true
    }

  export interface ViajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viaje'], meta: { name: 'Viaje' } }
    /**
     * Find zero or one Viaje that matches the filter.
     * @param {ViajeFindUniqueArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajeFindUniqueArgs>(args: SelectSubset<T, ViajeFindUniqueArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajeFindUniqueOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajeFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajeFindFirstArgs>(args?: SelectSubset<T, ViajeFindFirstArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajeFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viajes
     * const viajes = await prisma.viaje.findMany()
     * 
     * // Get first 10 Viajes
     * const viajes = await prisma.viaje.findMany({ take: 10 })
     * 
     * // Only select the `id_viaje`
     * const viajeWithId_viajeOnly = await prisma.viaje.findMany({ select: { id_viaje: true } })
     * 
     */
    findMany<T extends ViajeFindManyArgs>(args?: SelectSubset<T, ViajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viaje.
     * @param {ViajeCreateArgs} args - Arguments to create a Viaje.
     * @example
     * // Create one Viaje
     * const Viaje = await prisma.viaje.create({
     *   data: {
     *     // ... data to create a Viaje
     *   }
     * })
     * 
     */
    create<T extends ViajeCreateArgs>(args: SelectSubset<T, ViajeCreateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viajes.
     * @param {ViajeCreateManyArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajeCreateManyArgs>(args?: SelectSubset<T, ViajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viajes and returns the data saved in the database.
     * @param {ViajeCreateManyAndReturnArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viajes and only return the `id_viaje`
     * const viajeWithId_viajeOnly = await prisma.viaje.createManyAndReturn({
     *   select: { id_viaje: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViajeCreateManyAndReturnArgs>(args?: SelectSubset<T, ViajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viaje.
     * @param {ViajeDeleteArgs} args - Arguments to delete one Viaje.
     * @example
     * // Delete one Viaje
     * const Viaje = await prisma.viaje.delete({
     *   where: {
     *     // ... filter to delete one Viaje
     *   }
     * })
     * 
     */
    delete<T extends ViajeDeleteArgs>(args: SelectSubset<T, ViajeDeleteArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viaje.
     * @param {ViajeUpdateArgs} args - Arguments to update one Viaje.
     * @example
     * // Update one Viaje
     * const viaje = await prisma.viaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajeUpdateArgs>(args: SelectSubset<T, ViajeUpdateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viajes.
     * @param {ViajeDeleteManyArgs} args - Arguments to filter Viajes to delete.
     * @example
     * // Delete a few Viajes
     * const { count } = await prisma.viaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajeDeleteManyArgs>(args?: SelectSubset<T, ViajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajeUpdateManyArgs>(args: SelectSubset<T, ViajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes and returns the data updated in the database.
     * @param {ViajeUpdateManyAndReturnArgs} args - Arguments to update many Viajes.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viajes and only return the `id_viaje`
     * const viajeWithId_viajeOnly = await prisma.viaje.updateManyAndReturn({
     *   select: { id_viaje: true },
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
    updateManyAndReturn<T extends ViajeUpdateManyAndReturnArgs>(args: SelectSubset<T, ViajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viaje.
     * @param {ViajeUpsertArgs} args - Arguments to update or create a Viaje.
     * @example
     * // Update or create a Viaje
     * const viaje = await prisma.viaje.upsert({
     *   create: {
     *     // ... data to create a Viaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viaje we want to update
     *   }
     * })
     */
    upsert<T extends ViajeUpsertArgs>(args: SelectSubset<T, ViajeUpsertArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeCountArgs} args - Arguments to filter Viajes to count.
     * @example
     * // Count the number of Viajes
     * const count = await prisma.viaje.count({
     *   where: {
     *     // ... the filter for the Viajes we want to count
     *   }
     * })
    **/
    count<T extends ViajeCountArgs>(
      args?: Subset<T, ViajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViajeAggregateArgs>(args: Subset<T, ViajeAggregateArgs>): Prisma.PrismaPromise<GetViajeAggregateType<T>>

    /**
     * Group by Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeGroupByArgs} args - Group by arguments.
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
      T extends ViajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajeGroupByArgs['orderBy'] }
        : { orderBy?: ViajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viaje model
   */
  readonly fields: ViajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chofer<T extends ChoferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoferDefaultArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pago<T extends Configuracion_PagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Configuracion_PagoDefaultArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Viaje model
   */
  interface ViajeFieldRefs {
    readonly id_viaje: FieldRef<"Viaje", 'Int'>
    readonly fecha_salida: FieldRef<"Viaje", 'DateTime'>
    readonly hora_salida_programada: FieldRef<"Viaje", 'DateTime'>
    readonly hora_salida_real: FieldRef<"Viaje", 'DateTime'>
    readonly costo: FieldRef<"Viaje", 'Decimal'>
    readonly id_bus: FieldRef<"Viaje", 'Int'>
    readonly id_ruta: FieldRef<"Viaje", 'Int'>
    readonly id_chofer: FieldRef<"Viaje", 'Int'>
    readonly id_pago: FieldRef<"Viaje", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Viaje findUnique
   */
  export type ViajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findUniqueOrThrow
   */
  export type ViajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findFirst
   */
  export type ViajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findFirstOrThrow
   */
  export type ViajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findMany
   */
  export type ViajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje create
   */
  export type ViajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Viaje.
     */
    data: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
  }

  /**
   * Viaje createMany
   */
  export type ViajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viaje createManyAndReturn
   */
  export type ViajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje update
   */
  export type ViajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Viaje.
     */
    data: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
    /**
     * Choose, which Viaje to update.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje updateMany
   */
  export type ViajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viaje updateManyAndReturn
   */
  export type ViajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje upsert
   */
  export type ViajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Viaje to update in case it exists.
     */
    where: ViajeWhereUniqueInput
    /**
     * In case the Viaje found by the `where` argument doesn't exist, create a new Viaje with this data.
     */
    create: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
    /**
     * In case the Viaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
  }

  /**
   * Viaje delete
   */
  export type ViajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter which Viaje to delete.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje deleteMany
   */
  export type ViajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to delete
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to delete.
     */
    limit?: number
  }

  /**
   * Viaje without action
   */
  export type ViajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
  }


  /**
   * Model Ruta
   */

  export type AggregateRuta = {
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  export type RutaAvgAggregateOutputType = {
    id_ruta: number | null
  }

  export type RutaSumAggregateOutputType = {
    id_ruta: number | null
  }

  export type RutaMinAggregateOutputType = {
    id_ruta: number | null
    origen: string | null
    parada_intermedia: string | null
    destino: string | null
    distancia: string | null
    tiempo_estimado: string | null
    camino: string | null
  }

  export type RutaMaxAggregateOutputType = {
    id_ruta: number | null
    origen: string | null
    parada_intermedia: string | null
    destino: string | null
    distancia: string | null
    tiempo_estimado: string | null
    camino: string | null
  }

  export type RutaCountAggregateOutputType = {
    id_ruta: number
    origen: number
    parada_intermedia: number
    destino: number
    distancia: number
    tiempo_estimado: number
    camino: number
    _all: number
  }


  export type RutaAvgAggregateInputType = {
    id_ruta?: true
  }

  export type RutaSumAggregateInputType = {
    id_ruta?: true
  }

  export type RutaMinAggregateInputType = {
    id_ruta?: true
    origen?: true
    parada_intermedia?: true
    destino?: true
    distancia?: true
    tiempo_estimado?: true
    camino?: true
  }

  export type RutaMaxAggregateInputType = {
    id_ruta?: true
    origen?: true
    parada_intermedia?: true
    destino?: true
    distancia?: true
    tiempo_estimado?: true
    camino?: true
  }

  export type RutaCountAggregateInputType = {
    id_ruta?: true
    origen?: true
    parada_intermedia?: true
    destino?: true
    distancia?: true
    tiempo_estimado?: true
    camino?: true
    _all?: true
  }

  export type RutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruta to aggregate.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutas
    **/
    _count?: true | RutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutaMaxAggregateInputType
  }

  export type GetRutaAggregateType<T extends RutaAggregateArgs> = {
        [P in keyof T & keyof AggregateRuta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuta[P]>
      : GetScalarType<T[P], AggregateRuta[P]>
  }




  export type RutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaWhereInput
    orderBy?: RutaOrderByWithAggregationInput | RutaOrderByWithAggregationInput[]
    by: RutaScalarFieldEnum[] | RutaScalarFieldEnum
    having?: RutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutaCountAggregateInputType | true
    _avg?: RutaAvgAggregateInputType
    _sum?: RutaSumAggregateInputType
    _min?: RutaMinAggregateInputType
    _max?: RutaMaxAggregateInputType
  }

  export type RutaGroupByOutputType = {
    id_ruta: number
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  type GetRutaGroupByPayload<T extends RutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutaGroupByOutputType[P]>
            : GetScalarType<T[P], RutaGroupByOutputType[P]>
        }
      >
    >


  export type RutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    origen?: boolean
    parada_intermedia?: boolean
    destino?: boolean
    distancia?: boolean
    tiempo_estimado?: boolean
    camino?: boolean
    viajes?: boolean | Ruta$viajesArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    origen?: boolean
    parada_intermedia?: boolean
    destino?: boolean
    distancia?: boolean
    tiempo_estimado?: boolean
    camino?: boolean
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    origen?: boolean
    parada_intermedia?: boolean
    destino?: boolean
    distancia?: boolean
    tiempo_estimado?: boolean
    camino?: boolean
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectScalar = {
    id_ruta?: boolean
    origen?: boolean
    parada_intermedia?: boolean
    destino?: boolean
    distancia?: boolean
    tiempo_estimado?: boolean
    camino?: boolean
  }

  export type RutaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ruta" | "origen" | "parada_intermedia" | "destino" | "distancia" | "tiempo_estimado" | "camino", ExtArgs["result"]["ruta"]>
  export type RutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | Ruta$viajesArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RutaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruta"
    objects: {
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ruta: number
      origen: string
      parada_intermedia: string
      destino: string
      distancia: string
      tiempo_estimado: string
      camino: string
    }, ExtArgs["result"]["ruta"]>
    composites: {}
  }

  type RutaGetPayload<S extends boolean | null | undefined | RutaDefaultArgs> = $Result.GetResult<Prisma.$RutaPayload, S>

  type RutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutaCountAggregateInputType | true
    }

  export interface RutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruta'], meta: { name: 'Ruta' } }
    /**
     * Find zero or one Ruta that matches the filter.
     * @param {RutaFindUniqueArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutaFindUniqueArgs>(args: SelectSubset<T, RutaFindUniqueArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutaFindUniqueOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutaFindFirstArgs>(args?: SelectSubset<T, RutaFindFirstArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutas
     * const rutas = await prisma.ruta.findMany()
     * 
     * // Get first 10 Rutas
     * const rutas = await prisma.ruta.findMany({ take: 10 })
     * 
     * // Only select the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.findMany({ select: { id_ruta: true } })
     * 
     */
    findMany<T extends RutaFindManyArgs>(args?: SelectSubset<T, RutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruta.
     * @param {RutaCreateArgs} args - Arguments to create a Ruta.
     * @example
     * // Create one Ruta
     * const Ruta = await prisma.ruta.create({
     *   data: {
     *     // ... data to create a Ruta
     *   }
     * })
     * 
     */
    create<T extends RutaCreateArgs>(args: SelectSubset<T, RutaCreateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutas.
     * @param {RutaCreateManyArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutaCreateManyArgs>(args?: SelectSubset<T, RutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutas and returns the data saved in the database.
     * @param {RutaCreateManyAndReturnArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutas and only return the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.createManyAndReturn({
     *   select: { id_ruta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruta.
     * @param {RutaDeleteArgs} args - Arguments to delete one Ruta.
     * @example
     * // Delete one Ruta
     * const Ruta = await prisma.ruta.delete({
     *   where: {
     *     // ... filter to delete one Ruta
     *   }
     * })
     * 
     */
    delete<T extends RutaDeleteArgs>(args: SelectSubset<T, RutaDeleteArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruta.
     * @param {RutaUpdateArgs} args - Arguments to update one Ruta.
     * @example
     * // Update one Ruta
     * const ruta = await prisma.ruta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutaUpdateArgs>(args: SelectSubset<T, RutaUpdateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutas.
     * @param {RutaDeleteManyArgs} args - Arguments to filter Rutas to delete.
     * @example
     * // Delete a few Rutas
     * const { count } = await prisma.ruta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutaDeleteManyArgs>(args?: SelectSubset<T, RutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutaUpdateManyArgs>(args: SelectSubset<T, RutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas and returns the data updated in the database.
     * @param {RutaUpdateManyAndReturnArgs} args - Arguments to update many Rutas.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutas and only return the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.updateManyAndReturn({
     *   select: { id_ruta: true },
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
    updateManyAndReturn<T extends RutaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruta.
     * @param {RutaUpsertArgs} args - Arguments to update or create a Ruta.
     * @example
     * // Update or create a Ruta
     * const ruta = await prisma.ruta.upsert({
     *   create: {
     *     // ... data to create a Ruta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruta we want to update
     *   }
     * })
     */
    upsert<T extends RutaUpsertArgs>(args: SelectSubset<T, RutaUpsertArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaCountArgs} args - Arguments to filter Rutas to count.
     * @example
     * // Count the number of Rutas
     * const count = await prisma.ruta.count({
     *   where: {
     *     // ... the filter for the Rutas we want to count
     *   }
     * })
    **/
    count<T extends RutaCountArgs>(
      args?: Subset<T, RutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutaAggregateArgs>(args: Subset<T, RutaAggregateArgs>): Prisma.PrismaPromise<GetRutaAggregateType<T>>

    /**
     * Group by Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaGroupByArgs} args - Group by arguments.
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
      T extends RutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutaGroupByArgs['orderBy'] }
        : { orderBy?: RutaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruta model
   */
  readonly fields: RutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viajes<T extends Ruta$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ruta model
   */
  interface RutaFieldRefs {
    readonly id_ruta: FieldRef<"Ruta", 'Int'>
    readonly origen: FieldRef<"Ruta", 'String'>
    readonly parada_intermedia: FieldRef<"Ruta", 'String'>
    readonly destino: FieldRef<"Ruta", 'String'>
    readonly distancia: FieldRef<"Ruta", 'String'>
    readonly tiempo_estimado: FieldRef<"Ruta", 'String'>
    readonly camino: FieldRef<"Ruta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ruta findUnique
   */
  export type RutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findUniqueOrThrow
   */
  export type RutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findFirst
   */
  export type RutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findFirstOrThrow
   */
  export type RutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findMany
   */
  export type RutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Rutas to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta create
   */
  export type RutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruta.
     */
    data: XOR<RutaCreateInput, RutaUncheckedCreateInput>
  }

  /**
   * Ruta createMany
   */
  export type RutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta createManyAndReturn
   */
  export type RutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta update
   */
  export type RutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruta.
     */
    data: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
    /**
     * Choose, which Ruta to update.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta updateMany
   */
  export type RutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
  }

  /**
   * Ruta updateManyAndReturn
   */
  export type RutaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
  }

  /**
   * Ruta upsert
   */
  export type RutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruta to update in case it exists.
     */
    where: RutaWhereUniqueInput
    /**
     * In case the Ruta found by the `where` argument doesn't exist, create a new Ruta with this data.
     */
    create: XOR<RutaCreateInput, RutaUncheckedCreateInput>
    /**
     * In case the Ruta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
  }

  /**
   * Ruta delete
   */
  export type RutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter which Ruta to delete.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta deleteMany
   */
  export type RutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutas to delete
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to delete.
     */
    limit?: number
  }

  /**
   * Ruta.viajes
   */
  export type Ruta$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Ruta without action
   */
  export type RutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
  }


  /**
   * Model Configuracion_Pago
   */

  export type AggregateConfiguracion_Pago = {
    _count: Configuracion_PagoCountAggregateOutputType | null
    _avg: Configuracion_PagoAvgAggregateOutputType | null
    _sum: Configuracion_PagoSumAggregateOutputType | null
    _min: Configuracion_PagoMinAggregateOutputType | null
    _max: Configuracion_PagoMaxAggregateOutputType | null
  }

  export type Configuracion_PagoAvgAggregateOutputType = {
    id_pago: number | null
    id_agencia: number | null
  }

  export type Configuracion_PagoSumAggregateOutputType = {
    id_pago: number | null
    id_agencia: number | null
  }

  export type Configuracion_PagoMinAggregateOutputType = {
    id_pago: number | null
    ruta_codigo_qr: string | null
    fecha_creacion: Date | null
    estado: string | null
    id_agencia: number | null
  }

  export type Configuracion_PagoMaxAggregateOutputType = {
    id_pago: number | null
    ruta_codigo_qr: string | null
    fecha_creacion: Date | null
    estado: string | null
    id_agencia: number | null
  }

  export type Configuracion_PagoCountAggregateOutputType = {
    id_pago: number
    ruta_codigo_qr: number
    fecha_creacion: number
    estado: number
    id_agencia: number
    _all: number
  }


  export type Configuracion_PagoAvgAggregateInputType = {
    id_pago?: true
    id_agencia?: true
  }

  export type Configuracion_PagoSumAggregateInputType = {
    id_pago?: true
    id_agencia?: true
  }

  export type Configuracion_PagoMinAggregateInputType = {
    id_pago?: true
    ruta_codigo_qr?: true
    fecha_creacion?: true
    estado?: true
    id_agencia?: true
  }

  export type Configuracion_PagoMaxAggregateInputType = {
    id_pago?: true
    ruta_codigo_qr?: true
    fecha_creacion?: true
    estado?: true
    id_agencia?: true
  }

  export type Configuracion_PagoCountAggregateInputType = {
    id_pago?: true
    ruta_codigo_qr?: true
    fecha_creacion?: true
    estado?: true
    id_agencia?: true
    _all?: true
  }

  export type Configuracion_PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracion_Pago to aggregate.
     */
    where?: Configuracion_PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracion_Pagos to fetch.
     */
    orderBy?: Configuracion_PagoOrderByWithRelationInput | Configuracion_PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Configuracion_PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracion_Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracion_Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracion_Pagos
    **/
    _count?: true | Configuracion_PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Configuracion_PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Configuracion_PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Configuracion_PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Configuracion_PagoMaxAggregateInputType
  }

  export type GetConfiguracion_PagoAggregateType<T extends Configuracion_PagoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion_Pago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion_Pago[P]>
      : GetScalarType<T[P], AggregateConfiguracion_Pago[P]>
  }




  export type Configuracion_PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Configuracion_PagoWhereInput
    orderBy?: Configuracion_PagoOrderByWithAggregationInput | Configuracion_PagoOrderByWithAggregationInput[]
    by: Configuracion_PagoScalarFieldEnum[] | Configuracion_PagoScalarFieldEnum
    having?: Configuracion_PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Configuracion_PagoCountAggregateInputType | true
    _avg?: Configuracion_PagoAvgAggregateInputType
    _sum?: Configuracion_PagoSumAggregateInputType
    _min?: Configuracion_PagoMinAggregateInputType
    _max?: Configuracion_PagoMaxAggregateInputType
  }

  export type Configuracion_PagoGroupByOutputType = {
    id_pago: number
    ruta_codigo_qr: string
    fecha_creacion: Date
    estado: string
    id_agencia: number
    _count: Configuracion_PagoCountAggregateOutputType | null
    _avg: Configuracion_PagoAvgAggregateOutputType | null
    _sum: Configuracion_PagoSumAggregateOutputType | null
    _min: Configuracion_PagoMinAggregateOutputType | null
    _max: Configuracion_PagoMaxAggregateOutputType | null
  }

  type GetConfiguracion_PagoGroupByPayload<T extends Configuracion_PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Configuracion_PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Configuracion_PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Configuracion_PagoGroupByOutputType[P]>
            : GetScalarType<T[P], Configuracion_PagoGroupByOutputType[P]>
        }
      >
    >


  export type Configuracion_PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    ruta_codigo_qr?: boolean
    fecha_creacion?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    viajes?: boolean | Configuracion_Pago$viajesArgs<ExtArgs>
    _count?: boolean | Configuracion_PagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion_Pago"]>

  export type Configuracion_PagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    ruta_codigo_qr?: boolean
    fecha_creacion?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion_Pago"]>

  export type Configuracion_PagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    ruta_codigo_qr?: boolean
    fecha_creacion?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion_Pago"]>

  export type Configuracion_PagoSelectScalar = {
    id_pago?: boolean
    ruta_codigo_qr?: boolean
    fecha_creacion?: boolean
    estado?: boolean
    id_agencia?: boolean
  }

  export type Configuracion_PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pago" | "ruta_codigo_qr" | "fecha_creacion" | "estado" | "id_agencia", ExtArgs["result"]["configuracion_Pago"]>
  export type Configuracion_PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    viajes?: boolean | Configuracion_Pago$viajesArgs<ExtArgs>
    _count?: boolean | Configuracion_PagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Configuracion_PagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }
  export type Configuracion_PagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }

  export type $Configuracion_PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracion_Pago"
    objects: {
      agencia: Prisma.$AgenciaPayload<ExtArgs>
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pago: number
      ruta_codigo_qr: string
      fecha_creacion: Date
      estado: string
      id_agencia: number
    }, ExtArgs["result"]["configuracion_Pago"]>
    composites: {}
  }

  type Configuracion_PagoGetPayload<S extends boolean | null | undefined | Configuracion_PagoDefaultArgs> = $Result.GetResult<Prisma.$Configuracion_PagoPayload, S>

  type Configuracion_PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Configuracion_PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Configuracion_PagoCountAggregateInputType | true
    }

  export interface Configuracion_PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracion_Pago'], meta: { name: 'Configuracion_Pago' } }
    /**
     * Find zero or one Configuracion_Pago that matches the filter.
     * @param {Configuracion_PagoFindUniqueArgs} args - Arguments to find a Configuracion_Pago
     * @example
     * // Get one Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Configuracion_PagoFindUniqueArgs>(args: SelectSubset<T, Configuracion_PagoFindUniqueArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracion_Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Configuracion_PagoFindUniqueOrThrowArgs} args - Arguments to find a Configuracion_Pago
     * @example
     * // Get one Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Configuracion_PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, Configuracion_PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion_Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoFindFirstArgs} args - Arguments to find a Configuracion_Pago
     * @example
     * // Get one Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Configuracion_PagoFindFirstArgs>(args?: SelectSubset<T, Configuracion_PagoFindFirstArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion_Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoFindFirstOrThrowArgs} args - Arguments to find a Configuracion_Pago
     * @example
     * // Get one Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Configuracion_PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, Configuracion_PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracion_Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracion_Pagos
     * const configuracion_Pagos = await prisma.configuracion_Pago.findMany()
     * 
     * // Get first 10 Configuracion_Pagos
     * const configuracion_Pagos = await prisma.configuracion_Pago.findMany({ take: 10 })
     * 
     * // Only select the `id_pago`
     * const configuracion_PagoWithId_pagoOnly = await prisma.configuracion_Pago.findMany({ select: { id_pago: true } })
     * 
     */
    findMany<T extends Configuracion_PagoFindManyArgs>(args?: SelectSubset<T, Configuracion_PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracion_Pago.
     * @param {Configuracion_PagoCreateArgs} args - Arguments to create a Configuracion_Pago.
     * @example
     * // Create one Configuracion_Pago
     * const Configuracion_Pago = await prisma.configuracion_Pago.create({
     *   data: {
     *     // ... data to create a Configuracion_Pago
     *   }
     * })
     * 
     */
    create<T extends Configuracion_PagoCreateArgs>(args: SelectSubset<T, Configuracion_PagoCreateArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracion_Pagos.
     * @param {Configuracion_PagoCreateManyArgs} args - Arguments to create many Configuracion_Pagos.
     * @example
     * // Create many Configuracion_Pagos
     * const configuracion_Pago = await prisma.configuracion_Pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Configuracion_PagoCreateManyArgs>(args?: SelectSubset<T, Configuracion_PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracion_Pagos and returns the data saved in the database.
     * @param {Configuracion_PagoCreateManyAndReturnArgs} args - Arguments to create many Configuracion_Pagos.
     * @example
     * // Create many Configuracion_Pagos
     * const configuracion_Pago = await prisma.configuracion_Pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracion_Pagos and only return the `id_pago`
     * const configuracion_PagoWithId_pagoOnly = await prisma.configuracion_Pago.createManyAndReturn({
     *   select: { id_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Configuracion_PagoCreateManyAndReturnArgs>(args?: SelectSubset<T, Configuracion_PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracion_Pago.
     * @param {Configuracion_PagoDeleteArgs} args - Arguments to delete one Configuracion_Pago.
     * @example
     * // Delete one Configuracion_Pago
     * const Configuracion_Pago = await prisma.configuracion_Pago.delete({
     *   where: {
     *     // ... filter to delete one Configuracion_Pago
     *   }
     * })
     * 
     */
    delete<T extends Configuracion_PagoDeleteArgs>(args: SelectSubset<T, Configuracion_PagoDeleteArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracion_Pago.
     * @param {Configuracion_PagoUpdateArgs} args - Arguments to update one Configuracion_Pago.
     * @example
     * // Update one Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Configuracion_PagoUpdateArgs>(args: SelectSubset<T, Configuracion_PagoUpdateArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracion_Pagos.
     * @param {Configuracion_PagoDeleteManyArgs} args - Arguments to filter Configuracion_Pagos to delete.
     * @example
     * // Delete a few Configuracion_Pagos
     * const { count } = await prisma.configuracion_Pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Configuracion_PagoDeleteManyArgs>(args?: SelectSubset<T, Configuracion_PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracion_Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracion_Pagos
     * const configuracion_Pago = await prisma.configuracion_Pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Configuracion_PagoUpdateManyArgs>(args: SelectSubset<T, Configuracion_PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracion_Pagos and returns the data updated in the database.
     * @param {Configuracion_PagoUpdateManyAndReturnArgs} args - Arguments to update many Configuracion_Pagos.
     * @example
     * // Update many Configuracion_Pagos
     * const configuracion_Pago = await prisma.configuracion_Pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracion_Pagos and only return the `id_pago`
     * const configuracion_PagoWithId_pagoOnly = await prisma.configuracion_Pago.updateManyAndReturn({
     *   select: { id_pago: true },
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
    updateManyAndReturn<T extends Configuracion_PagoUpdateManyAndReturnArgs>(args: SelectSubset<T, Configuracion_PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracion_Pago.
     * @param {Configuracion_PagoUpsertArgs} args - Arguments to update or create a Configuracion_Pago.
     * @example
     * // Update or create a Configuracion_Pago
     * const configuracion_Pago = await prisma.configuracion_Pago.upsert({
     *   create: {
     *     // ... data to create a Configuracion_Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion_Pago we want to update
     *   }
     * })
     */
    upsert<T extends Configuracion_PagoUpsertArgs>(args: SelectSubset<T, Configuracion_PagoUpsertArgs<ExtArgs>>): Prisma__Configuracion_PagoClient<$Result.GetResult<Prisma.$Configuracion_PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracion_Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoCountArgs} args - Arguments to filter Configuracion_Pagos to count.
     * @example
     * // Count the number of Configuracion_Pagos
     * const count = await prisma.configuracion_Pago.count({
     *   where: {
     *     // ... the filter for the Configuracion_Pagos we want to count
     *   }
     * })
    **/
    count<T extends Configuracion_PagoCountArgs>(
      args?: Subset<T, Configuracion_PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Configuracion_PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion_Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Configuracion_PagoAggregateArgs>(args: Subset<T, Configuracion_PagoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracion_PagoAggregateType<T>>

    /**
     * Group by Configuracion_Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_PagoGroupByArgs} args - Group by arguments.
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
      T extends Configuracion_PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Configuracion_PagoGroupByArgs['orderBy'] }
        : { orderBy?: Configuracion_PagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Configuracion_PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracion_PagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracion_Pago model
   */
  readonly fields: Configuracion_PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracion_Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Configuracion_PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agencia<T extends AgenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgenciaDefaultArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viajes<T extends Configuracion_Pago$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Configuracion_Pago$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Configuracion_Pago model
   */
  interface Configuracion_PagoFieldRefs {
    readonly id_pago: FieldRef<"Configuracion_Pago", 'Int'>
    readonly ruta_codigo_qr: FieldRef<"Configuracion_Pago", 'String'>
    readonly fecha_creacion: FieldRef<"Configuracion_Pago", 'DateTime'>
    readonly estado: FieldRef<"Configuracion_Pago", 'String'>
    readonly id_agencia: FieldRef<"Configuracion_Pago", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Configuracion_Pago findUnique
   */
  export type Configuracion_PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracion_Pago to fetch.
     */
    where: Configuracion_PagoWhereUniqueInput
  }

  /**
   * Configuracion_Pago findUniqueOrThrow
   */
  export type Configuracion_PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracion_Pago to fetch.
     */
    where: Configuracion_PagoWhereUniqueInput
  }

  /**
   * Configuracion_Pago findFirst
   */
  export type Configuracion_PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracion_Pago to fetch.
     */
    where?: Configuracion_PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracion_Pagos to fetch.
     */
    orderBy?: Configuracion_PagoOrderByWithRelationInput | Configuracion_PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracion_Pagos.
     */
    cursor?: Configuracion_PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracion_Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracion_Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracion_Pagos.
     */
    distinct?: Configuracion_PagoScalarFieldEnum | Configuracion_PagoScalarFieldEnum[]
  }

  /**
   * Configuracion_Pago findFirstOrThrow
   */
  export type Configuracion_PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracion_Pago to fetch.
     */
    where?: Configuracion_PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracion_Pagos to fetch.
     */
    orderBy?: Configuracion_PagoOrderByWithRelationInput | Configuracion_PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracion_Pagos.
     */
    cursor?: Configuracion_PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracion_Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracion_Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracion_Pagos.
     */
    distinct?: Configuracion_PagoScalarFieldEnum | Configuracion_PagoScalarFieldEnum[]
  }

  /**
   * Configuracion_Pago findMany
   */
  export type Configuracion_PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracion_Pagos to fetch.
     */
    where?: Configuracion_PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracion_Pagos to fetch.
     */
    orderBy?: Configuracion_PagoOrderByWithRelationInput | Configuracion_PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracion_Pagos.
     */
    cursor?: Configuracion_PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracion_Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracion_Pagos.
     */
    skip?: number
    distinct?: Configuracion_PagoScalarFieldEnum | Configuracion_PagoScalarFieldEnum[]
  }

  /**
   * Configuracion_Pago create
   */
  export type Configuracion_PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Configuracion_Pago.
     */
    data: XOR<Configuracion_PagoCreateInput, Configuracion_PagoUncheckedCreateInput>
  }

  /**
   * Configuracion_Pago createMany
   */
  export type Configuracion_PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracion_Pagos.
     */
    data: Configuracion_PagoCreateManyInput | Configuracion_PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracion_Pago createManyAndReturn
   */
  export type Configuracion_PagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * The data used to create many Configuracion_Pagos.
     */
    data: Configuracion_PagoCreateManyInput | Configuracion_PagoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuracion_Pago update
   */
  export type Configuracion_PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Configuracion_Pago.
     */
    data: XOR<Configuracion_PagoUpdateInput, Configuracion_PagoUncheckedUpdateInput>
    /**
     * Choose, which Configuracion_Pago to update.
     */
    where: Configuracion_PagoWhereUniqueInput
  }

  /**
   * Configuracion_Pago updateMany
   */
  export type Configuracion_PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracion_Pagos.
     */
    data: XOR<Configuracion_PagoUpdateManyMutationInput, Configuracion_PagoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracion_Pagos to update
     */
    where?: Configuracion_PagoWhereInput
    /**
     * Limit how many Configuracion_Pagos to update.
     */
    limit?: number
  }

  /**
   * Configuracion_Pago updateManyAndReturn
   */
  export type Configuracion_PagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * The data used to update Configuracion_Pagos.
     */
    data: XOR<Configuracion_PagoUpdateManyMutationInput, Configuracion_PagoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracion_Pagos to update
     */
    where?: Configuracion_PagoWhereInput
    /**
     * Limit how many Configuracion_Pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuracion_Pago upsert
   */
  export type Configuracion_PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Configuracion_Pago to update in case it exists.
     */
    where: Configuracion_PagoWhereUniqueInput
    /**
     * In case the Configuracion_Pago found by the `where` argument doesn't exist, create a new Configuracion_Pago with this data.
     */
    create: XOR<Configuracion_PagoCreateInput, Configuracion_PagoUncheckedCreateInput>
    /**
     * In case the Configuracion_Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Configuracion_PagoUpdateInput, Configuracion_PagoUncheckedUpdateInput>
  }

  /**
   * Configuracion_Pago delete
   */
  export type Configuracion_PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
    /**
     * Filter which Configuracion_Pago to delete.
     */
    where: Configuracion_PagoWhereUniqueInput
  }

  /**
   * Configuracion_Pago deleteMany
   */
  export type Configuracion_PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracion_Pagos to delete
     */
    where?: Configuracion_PagoWhereInput
    /**
     * Limit how many Configuracion_Pagos to delete.
     */
    limit?: number
  }

  /**
   * Configuracion_Pago.viajes
   */
  export type Configuracion_Pago$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Configuracion_Pago without action
   */
  export type Configuracion_PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion_Pago
     */
    select?: Configuracion_PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion_Pago
     */
    omit?: Configuracion_PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Configuracion_PagoInclude<ExtArgs> | null
  }


  /**
   * Model Chofer
   */

  export type AggregateChofer = {
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  export type ChoferAvgAggregateOutputType = {
    id_chofer: number | null
    id_agencia: number | null
  }

  export type ChoferSumAggregateOutputType = {
    id_chofer: number | null
    id_agencia: number | null
  }

  export type ChoferMinAggregateOutputType = {
    id_chofer: number | null
    nombre: string | null
    apellido: string | null
    carnet_identidad: string | null
    numero_celular: string | null
    categoria_licencia: string | null
    direccion_contacto: string | null
    estado: string | null
    id_agencia: number | null
  }

  export type ChoferMaxAggregateOutputType = {
    id_chofer: number | null
    nombre: string | null
    apellido: string | null
    carnet_identidad: string | null
    numero_celular: string | null
    categoria_licencia: string | null
    direccion_contacto: string | null
    estado: string | null
    id_agencia: number | null
  }

  export type ChoferCountAggregateOutputType = {
    id_chofer: number
    nombre: number
    apellido: number
    carnet_identidad: number
    numero_celular: number
    categoria_licencia: number
    direccion_contacto: number
    estado: number
    id_agencia: number
    _all: number
  }


  export type ChoferAvgAggregateInputType = {
    id_chofer?: true
    id_agencia?: true
  }

  export type ChoferSumAggregateInputType = {
    id_chofer?: true
    id_agencia?: true
  }

  export type ChoferMinAggregateInputType = {
    id_chofer?: true
    nombre?: true
    apellido?: true
    carnet_identidad?: true
    numero_celular?: true
    categoria_licencia?: true
    direccion_contacto?: true
    estado?: true
    id_agencia?: true
  }

  export type ChoferMaxAggregateInputType = {
    id_chofer?: true
    nombre?: true
    apellido?: true
    carnet_identidad?: true
    numero_celular?: true
    categoria_licencia?: true
    direccion_contacto?: true
    estado?: true
    id_agencia?: true
  }

  export type ChoferCountAggregateInputType = {
    id_chofer?: true
    nombre?: true
    apellido?: true
    carnet_identidad?: true
    numero_celular?: true
    categoria_licencia?: true
    direccion_contacto?: true
    estado?: true
    id_agencia?: true
    _all?: true
  }

  export type ChoferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofer to aggregate.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chofers
    **/
    _count?: true | ChoferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoferMaxAggregateInputType
  }

  export type GetChoferAggregateType<T extends ChoferAggregateArgs> = {
        [P in keyof T & keyof AggregateChofer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChofer[P]>
      : GetScalarType<T[P], AggregateChofer[P]>
  }




  export type ChoferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoferWhereInput
    orderBy?: ChoferOrderByWithAggregationInput | ChoferOrderByWithAggregationInput[]
    by: ChoferScalarFieldEnum[] | ChoferScalarFieldEnum
    having?: ChoferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoferCountAggregateInputType | true
    _avg?: ChoferAvgAggregateInputType
    _sum?: ChoferSumAggregateInputType
    _min?: ChoferMinAggregateInputType
    _max?: ChoferMaxAggregateInputType
  }

  export type ChoferGroupByOutputType = {
    id_chofer: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    id_agencia: number
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  type GetChoferGroupByPayload<T extends ChoferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoferGroupByOutputType[P]>
            : GetScalarType<T[P], ChoferGroupByOutputType[P]>
        }
      >
    >


  export type ChoferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chofer?: boolean
    nombre?: boolean
    apellido?: boolean
    carnet_identidad?: boolean
    numero_celular?: boolean
    categoria_licencia?: boolean
    direccion_contacto?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    viajes?: boolean | Chofer$viajesArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>

  export type ChoferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chofer?: boolean
    nombre?: boolean
    apellido?: boolean
    carnet_identidad?: boolean
    numero_celular?: boolean
    categoria_licencia?: boolean
    direccion_contacto?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>

  export type ChoferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chofer?: boolean
    nombre?: boolean
    apellido?: boolean
    carnet_identidad?: boolean
    numero_celular?: boolean
    categoria_licencia?: boolean
    direccion_contacto?: boolean
    estado?: boolean
    id_agencia?: boolean
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>

  export type ChoferSelectScalar = {
    id_chofer?: boolean
    nombre?: boolean
    apellido?: boolean
    carnet_identidad?: boolean
    numero_celular?: boolean
    categoria_licencia?: boolean
    direccion_contacto?: boolean
    estado?: boolean
    id_agencia?: boolean
  }

  export type ChoferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_chofer" | "nombre" | "apellido" | "carnet_identidad" | "numero_celular" | "categoria_licencia" | "direccion_contacto" | "estado" | "id_agencia", ExtArgs["result"]["chofer"]>
  export type ChoferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
    viajes?: boolean | Chofer$viajesArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }
  export type ChoferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agencia?: boolean | AgenciaDefaultArgs<ExtArgs>
  }

  export type $ChoferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chofer"
    objects: {
      agencia: Prisma.$AgenciaPayload<ExtArgs>
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_chofer: number
      nombre: string
      apellido: string
      carnet_identidad: string
      numero_celular: string
      categoria_licencia: string
      direccion_contacto: string
      estado: string
      id_agencia: number
    }, ExtArgs["result"]["chofer"]>
    composites: {}
  }

  type ChoferGetPayload<S extends boolean | null | undefined | ChoferDefaultArgs> = $Result.GetResult<Prisma.$ChoferPayload, S>

  type ChoferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoferCountAggregateInputType | true
    }

  export interface ChoferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chofer'], meta: { name: 'Chofer' } }
    /**
     * Find zero or one Chofer that matches the filter.
     * @param {ChoferFindUniqueArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoferFindUniqueArgs>(args: SelectSubset<T, ChoferFindUniqueArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chofer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoferFindUniqueOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoferFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoferFindFirstArgs>(args?: SelectSubset<T, ChoferFindFirstArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoferFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoferFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chofers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chofers
     * const chofers = await prisma.chofer.findMany()
     * 
     * // Get first 10 Chofers
     * const chofers = await prisma.chofer.findMany({ take: 10 })
     * 
     * // Only select the `id_chofer`
     * const choferWithId_choferOnly = await prisma.chofer.findMany({ select: { id_chofer: true } })
     * 
     */
    findMany<T extends ChoferFindManyArgs>(args?: SelectSubset<T, ChoferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chofer.
     * @param {ChoferCreateArgs} args - Arguments to create a Chofer.
     * @example
     * // Create one Chofer
     * const Chofer = await prisma.chofer.create({
     *   data: {
     *     // ... data to create a Chofer
     *   }
     * })
     * 
     */
    create<T extends ChoferCreateArgs>(args: SelectSubset<T, ChoferCreateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chofers.
     * @param {ChoferCreateManyArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoferCreateManyArgs>(args?: SelectSubset<T, ChoferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chofers and returns the data saved in the database.
     * @param {ChoferCreateManyAndReturnArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chofers and only return the `id_chofer`
     * const choferWithId_choferOnly = await prisma.chofer.createManyAndReturn({
     *   select: { id_chofer: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoferCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chofer.
     * @param {ChoferDeleteArgs} args - Arguments to delete one Chofer.
     * @example
     * // Delete one Chofer
     * const Chofer = await prisma.chofer.delete({
     *   where: {
     *     // ... filter to delete one Chofer
     *   }
     * })
     * 
     */
    delete<T extends ChoferDeleteArgs>(args: SelectSubset<T, ChoferDeleteArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chofer.
     * @param {ChoferUpdateArgs} args - Arguments to update one Chofer.
     * @example
     * // Update one Chofer
     * const chofer = await prisma.chofer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoferUpdateArgs>(args: SelectSubset<T, ChoferUpdateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chofers.
     * @param {ChoferDeleteManyArgs} args - Arguments to filter Chofers to delete.
     * @example
     * // Delete a few Chofers
     * const { count } = await prisma.chofer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoferDeleteManyArgs>(args?: SelectSubset<T, ChoferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chofers
     * const chofer = await prisma.chofer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoferUpdateManyArgs>(args: SelectSubset<T, ChoferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chofers and returns the data updated in the database.
     * @param {ChoferUpdateManyAndReturnArgs} args - Arguments to update many Chofers.
     * @example
     * // Update many Chofers
     * const chofer = await prisma.chofer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chofers and only return the `id_chofer`
     * const choferWithId_choferOnly = await prisma.chofer.updateManyAndReturn({
     *   select: { id_chofer: true },
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
    updateManyAndReturn<T extends ChoferUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chofer.
     * @param {ChoferUpsertArgs} args - Arguments to update or create a Chofer.
     * @example
     * // Update or create a Chofer
     * const chofer = await prisma.chofer.upsert({
     *   create: {
     *     // ... data to create a Chofer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chofer we want to update
     *   }
     * })
     */
    upsert<T extends ChoferUpsertArgs>(args: SelectSubset<T, ChoferUpsertArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferCountArgs} args - Arguments to filter Chofers to count.
     * @example
     * // Count the number of Chofers
     * const count = await prisma.chofer.count({
     *   where: {
     *     // ... the filter for the Chofers we want to count
     *   }
     * })
    **/
    count<T extends ChoferCountArgs>(
      args?: Subset<T, ChoferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoferAggregateArgs>(args: Subset<T, ChoferAggregateArgs>): Prisma.PrismaPromise<GetChoferAggregateType<T>>

    /**
     * Group by Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferGroupByArgs} args - Group by arguments.
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
      T extends ChoferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoferGroupByArgs['orderBy'] }
        : { orderBy?: ChoferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chofer model
   */
  readonly fields: ChoferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chofer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agencia<T extends AgenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgenciaDefaultArgs<ExtArgs>>): Prisma__AgenciaClient<$Result.GetResult<Prisma.$AgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viajes<T extends Chofer$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Chofer$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chofer model
   */
  interface ChoferFieldRefs {
    readonly id_chofer: FieldRef<"Chofer", 'Int'>
    readonly nombre: FieldRef<"Chofer", 'String'>
    readonly apellido: FieldRef<"Chofer", 'String'>
    readonly carnet_identidad: FieldRef<"Chofer", 'String'>
    readonly numero_celular: FieldRef<"Chofer", 'String'>
    readonly categoria_licencia: FieldRef<"Chofer", 'String'>
    readonly direccion_contacto: FieldRef<"Chofer", 'String'>
    readonly estado: FieldRef<"Chofer", 'String'>
    readonly id_agencia: FieldRef<"Chofer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chofer findUnique
   */
  export type ChoferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findUniqueOrThrow
   */
  export type ChoferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findFirst
   */
  export type ChoferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findFirstOrThrow
   */
  export type ChoferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findMany
   */
  export type ChoferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofers to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer create
   */
  export type ChoferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to create a Chofer.
     */
    data: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
  }

  /**
   * Chofer createMany
   */
  export type ChoferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chofers.
     */
    data: ChoferCreateManyInput | ChoferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chofer createManyAndReturn
   */
  export type ChoferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * The data used to create many Chofers.
     */
    data: ChoferCreateManyInput | ChoferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chofer update
   */
  export type ChoferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to update a Chofer.
     */
    data: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
    /**
     * Choose, which Chofer to update.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer updateMany
   */
  export type ChoferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chofers.
     */
    data: XOR<ChoferUpdateManyMutationInput, ChoferUncheckedUpdateManyInput>
    /**
     * Filter which Chofers to update
     */
    where?: ChoferWhereInput
    /**
     * Limit how many Chofers to update.
     */
    limit?: number
  }

  /**
   * Chofer updateManyAndReturn
   */
  export type ChoferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * The data used to update Chofers.
     */
    data: XOR<ChoferUpdateManyMutationInput, ChoferUncheckedUpdateManyInput>
    /**
     * Filter which Chofers to update
     */
    where?: ChoferWhereInput
    /**
     * Limit how many Chofers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chofer upsert
   */
  export type ChoferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The filter to search for the Chofer to update in case it exists.
     */
    where: ChoferWhereUniqueInput
    /**
     * In case the Chofer found by the `where` argument doesn't exist, create a new Chofer with this data.
     */
    create: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
    /**
     * In case the Chofer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
  }

  /**
   * Chofer delete
   */
  export type ChoferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter which Chofer to delete.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer deleteMany
   */
  export type ChoferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofers to delete
     */
    where?: ChoferWhereInput
    /**
     * Limit how many Chofers to delete.
     */
    limit?: number
  }

  /**
   * Chofer.viajes
   */
  export type Chofer$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Chofer without action
   */
  export type ChoferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    correo_electronico: 'correo_electronico',
    contraseña: 'contraseña',
    numero_celular: 'numero_celular'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AgenciaScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_agencia: 'nombre_agencia',
    tipo_sociedad: 'tipo_sociedad',
    NIT: 'NIT',
    departamento: 'departamento',
    ciudad: 'ciudad',
    direccion: 'direccion',
    estado: 'estado'
  };

  export type AgenciaScalarFieldEnum = (typeof AgenciaScalarFieldEnum)[keyof typeof AgenciaScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id_bus: 'id_bus',
    placa: 'placa',
    marca: 'marca',
    modelo: 'modelo',
    año_modelo: 'año_modelo',
    tipo_bus: 'tipo_bus',
    estado: 'estado',
    id_agencia: 'id_agencia'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const AsientoScalarFieldEnum: {
    id_asiento: 'id_asiento',
    numero: 'numero',
    ubicacion: 'ubicacion',
    estado: 'estado',
    id_bus: 'id_bus'
  };

  export type AsientoScalarFieldEnum = (typeof AsientoScalarFieldEnum)[keyof typeof AsientoScalarFieldEnum]


  export const ViajeScalarFieldEnum: {
    id_viaje: 'id_viaje',
    fecha_salida: 'fecha_salida',
    hora_salida_programada: 'hora_salida_programada',
    hora_salida_real: 'hora_salida_real',
    costo: 'costo',
    id_bus: 'id_bus',
    id_ruta: 'id_ruta',
    id_chofer: 'id_chofer',
    id_pago: 'id_pago'
  };

  export type ViajeScalarFieldEnum = (typeof ViajeScalarFieldEnum)[keyof typeof ViajeScalarFieldEnum]


  export const RutaScalarFieldEnum: {
    id_ruta: 'id_ruta',
    origen: 'origen',
    parada_intermedia: 'parada_intermedia',
    destino: 'destino',
    distancia: 'distancia',
    tiempo_estimado: 'tiempo_estimado',
    camino: 'camino'
  };

  export type RutaScalarFieldEnum = (typeof RutaScalarFieldEnum)[keyof typeof RutaScalarFieldEnum]


  export const Configuracion_PagoScalarFieldEnum: {
    id_pago: 'id_pago',
    ruta_codigo_qr: 'ruta_codigo_qr',
    fecha_creacion: 'fecha_creacion',
    estado: 'estado',
    id_agencia: 'id_agencia'
  };

  export type Configuracion_PagoScalarFieldEnum = (typeof Configuracion_PagoScalarFieldEnum)[keyof typeof Configuracion_PagoScalarFieldEnum]


  export const ChoferScalarFieldEnum: {
    id_chofer: 'id_chofer',
    nombre: 'nombre',
    apellido: 'apellido',
    carnet_identidad: 'carnet_identidad',
    numero_celular: 'numero_celular',
    categoria_licencia: 'categoria_licencia',
    direccion_contacto: 'direccion_contacto',
    estado: 'estado',
    id_agencia: 'id_agencia'
  };

  export type ChoferScalarFieldEnum = (typeof ChoferScalarFieldEnum)[keyof typeof ChoferScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    correo_electronico?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    numero_celular?: IntFilter<"Usuario"> | number
    agencia?: XOR<AgenciaNullableScalarRelationFilter, AgenciaWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    correo_electronico?: SortOrder
    contraseña?: SortOrder
    numero_celular?: SortOrder
    agencia?: AgenciaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    correo_electronico?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    numero_celular?: IntFilter<"Usuario"> | number
    agencia?: XOR<AgenciaNullableScalarRelationFilter, AgenciaWhereInput> | null
  }, "id_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    correo_electronico?: SortOrder
    contraseña?: SortOrder
    numero_celular?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    correo_electronico?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    numero_celular?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type AgenciaWhereInput = {
    AND?: AgenciaWhereInput | AgenciaWhereInput[]
    OR?: AgenciaWhereInput[]
    NOT?: AgenciaWhereInput | AgenciaWhereInput[]
    id_usuario?: IntFilter<"Agencia"> | number
    nombre_agencia?: StringFilter<"Agencia"> | string
    tipo_sociedad?: StringFilter<"Agencia"> | string
    NIT?: StringFilter<"Agencia"> | string
    departamento?: StringFilter<"Agencia"> | string
    ciudad?: StringFilter<"Agencia"> | string
    direccion?: StringFilter<"Agencia"> | string
    estado?: StringFilter<"Agencia"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    buses?: BusListRelationFilter
    choferes?: ChoferListRelationFilter
    configuraciones?: Configuracion_PagoListRelationFilter
  }

  export type AgenciaOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_agencia?: SortOrder
    tipo_sociedad?: SortOrder
    NIT?: SortOrder
    departamento?: SortOrder
    ciudad?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    buses?: BusOrderByRelationAggregateInput
    choferes?: ChoferOrderByRelationAggregateInput
    configuraciones?: Configuracion_PagoOrderByRelationAggregateInput
  }

  export type AgenciaWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: AgenciaWhereInput | AgenciaWhereInput[]
    OR?: AgenciaWhereInput[]
    NOT?: AgenciaWhereInput | AgenciaWhereInput[]
    nombre_agencia?: StringFilter<"Agencia"> | string
    tipo_sociedad?: StringFilter<"Agencia"> | string
    NIT?: StringFilter<"Agencia"> | string
    departamento?: StringFilter<"Agencia"> | string
    ciudad?: StringFilter<"Agencia"> | string
    direccion?: StringFilter<"Agencia"> | string
    estado?: StringFilter<"Agencia"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    buses?: BusListRelationFilter
    choferes?: ChoferListRelationFilter
    configuraciones?: Configuracion_PagoListRelationFilter
  }, "id_usuario">

  export type AgenciaOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_agencia?: SortOrder
    tipo_sociedad?: SortOrder
    NIT?: SortOrder
    departamento?: SortOrder
    ciudad?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    _count?: AgenciaCountOrderByAggregateInput
    _avg?: AgenciaAvgOrderByAggregateInput
    _max?: AgenciaMaxOrderByAggregateInput
    _min?: AgenciaMinOrderByAggregateInput
    _sum?: AgenciaSumOrderByAggregateInput
  }

  export type AgenciaScalarWhereWithAggregatesInput = {
    AND?: AgenciaScalarWhereWithAggregatesInput | AgenciaScalarWhereWithAggregatesInput[]
    OR?: AgenciaScalarWhereWithAggregatesInput[]
    NOT?: AgenciaScalarWhereWithAggregatesInput | AgenciaScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Agencia"> | number
    nombre_agencia?: StringWithAggregatesFilter<"Agencia"> | string
    tipo_sociedad?: StringWithAggregatesFilter<"Agencia"> | string
    NIT?: StringWithAggregatesFilter<"Agencia"> | string
    departamento?: StringWithAggregatesFilter<"Agencia"> | string
    ciudad?: StringWithAggregatesFilter<"Agencia"> | string
    direccion?: StringWithAggregatesFilter<"Agencia"> | string
    estado?: StringWithAggregatesFilter<"Agencia"> | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id_bus?: IntFilter<"Bus"> | number
    placa?: StringFilter<"Bus"> | string
    marca?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    año_modelo?: IntFilter<"Bus"> | number
    tipo_bus?: StringFilter<"Bus"> | string
    estado?: StringFilter<"Bus"> | string
    id_agencia?: IntFilter<"Bus"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    asientos?: AsientoListRelationFilter
    viajes?: ViajeListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id_bus?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    año_modelo?: SortOrder
    tipo_bus?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    agencia?: AgenciaOrderByWithRelationInput
    asientos?: AsientoOrderByRelationAggregateInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id_bus?: number
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    placa?: StringFilter<"Bus"> | string
    marca?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    año_modelo?: IntFilter<"Bus"> | number
    tipo_bus?: StringFilter<"Bus"> | string
    estado?: StringFilter<"Bus"> | string
    id_agencia?: IntFilter<"Bus"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    asientos?: AsientoListRelationFilter
    viajes?: ViajeListRelationFilter
  }, "id_bus">

  export type BusOrderByWithAggregationInput = {
    id_bus?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    año_modelo?: SortOrder
    tipo_bus?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id_bus?: IntWithAggregatesFilter<"Bus"> | number
    placa?: StringWithAggregatesFilter<"Bus"> | string
    marca?: StringWithAggregatesFilter<"Bus"> | string
    modelo?: StringWithAggregatesFilter<"Bus"> | string
    año_modelo?: IntWithAggregatesFilter<"Bus"> | number
    tipo_bus?: StringWithAggregatesFilter<"Bus"> | string
    estado?: StringWithAggregatesFilter<"Bus"> | string
    id_agencia?: IntWithAggregatesFilter<"Bus"> | number
  }

  export type AsientoWhereInput = {
    AND?: AsientoWhereInput | AsientoWhereInput[]
    OR?: AsientoWhereInput[]
    NOT?: AsientoWhereInput | AsientoWhereInput[]
    id_asiento?: IntFilter<"Asiento"> | number
    numero?: StringFilter<"Asiento"> | string
    ubicacion?: StringFilter<"Asiento"> | string
    estado?: StringFilter<"Asiento"> | string
    id_bus?: IntFilter<"Asiento"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }

  export type AsientoOrderByWithRelationInput = {
    id_asiento?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    estado?: SortOrder
    id_bus?: SortOrder
    bus?: BusOrderByWithRelationInput
  }

  export type AsientoWhereUniqueInput = Prisma.AtLeast<{
    id_asiento?: number
    AND?: AsientoWhereInput | AsientoWhereInput[]
    OR?: AsientoWhereInput[]
    NOT?: AsientoWhereInput | AsientoWhereInput[]
    numero?: StringFilter<"Asiento"> | string
    ubicacion?: StringFilter<"Asiento"> | string
    estado?: StringFilter<"Asiento"> | string
    id_bus?: IntFilter<"Asiento"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }, "id_asiento">

  export type AsientoOrderByWithAggregationInput = {
    id_asiento?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    estado?: SortOrder
    id_bus?: SortOrder
    _count?: AsientoCountOrderByAggregateInput
    _avg?: AsientoAvgOrderByAggregateInput
    _max?: AsientoMaxOrderByAggregateInput
    _min?: AsientoMinOrderByAggregateInput
    _sum?: AsientoSumOrderByAggregateInput
  }

  export type AsientoScalarWhereWithAggregatesInput = {
    AND?: AsientoScalarWhereWithAggregatesInput | AsientoScalarWhereWithAggregatesInput[]
    OR?: AsientoScalarWhereWithAggregatesInput[]
    NOT?: AsientoScalarWhereWithAggregatesInput | AsientoScalarWhereWithAggregatesInput[]
    id_asiento?: IntWithAggregatesFilter<"Asiento"> | number
    numero?: StringWithAggregatesFilter<"Asiento"> | string
    ubicacion?: StringWithAggregatesFilter<"Asiento"> | string
    estado?: StringWithAggregatesFilter<"Asiento"> | string
    id_bus?: IntWithAggregatesFilter<"Asiento"> | number
  }

  export type ViajeWhereInput = {
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    id_viaje?: IntFilter<"Viaje"> | number
    fecha_salida?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_programada?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_real?: DateTimeFilter<"Viaje"> | Date | string
    costo?: DecimalFilter<"Viaje"> | Decimal | DecimalJsLike | number | string
    id_bus?: IntFilter<"Viaje"> | number
    id_ruta?: IntFilter<"Viaje"> | number
    id_chofer?: IntFilter<"Viaje"> | number
    id_pago?: IntFilter<"Viaje"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
    chofer?: XOR<ChoferScalarRelationFilter, ChoferWhereInput>
    pago?: XOR<Configuracion_PagoScalarRelationFilter, Configuracion_PagoWhereInput>
  }

  export type ViajeOrderByWithRelationInput = {
    id_viaje?: SortOrder
    fecha_salida?: SortOrder
    hora_salida_programada?: SortOrder
    hora_salida_real?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
    bus?: BusOrderByWithRelationInput
    ruta?: RutaOrderByWithRelationInput
    chofer?: ChoferOrderByWithRelationInput
    pago?: Configuracion_PagoOrderByWithRelationInput
  }

  export type ViajeWhereUniqueInput = Prisma.AtLeast<{
    id_viaje?: number
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    fecha_salida?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_programada?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_real?: DateTimeFilter<"Viaje"> | Date | string
    costo?: DecimalFilter<"Viaje"> | Decimal | DecimalJsLike | number | string
    id_bus?: IntFilter<"Viaje"> | number
    id_ruta?: IntFilter<"Viaje"> | number
    id_chofer?: IntFilter<"Viaje"> | number
    id_pago?: IntFilter<"Viaje"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
    chofer?: XOR<ChoferScalarRelationFilter, ChoferWhereInput>
    pago?: XOR<Configuracion_PagoScalarRelationFilter, Configuracion_PagoWhereInput>
  }, "id_viaje">

  export type ViajeOrderByWithAggregationInput = {
    id_viaje?: SortOrder
    fecha_salida?: SortOrder
    hora_salida_programada?: SortOrder
    hora_salida_real?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
    _count?: ViajeCountOrderByAggregateInput
    _avg?: ViajeAvgOrderByAggregateInput
    _max?: ViajeMaxOrderByAggregateInput
    _min?: ViajeMinOrderByAggregateInput
    _sum?: ViajeSumOrderByAggregateInput
  }

  export type ViajeScalarWhereWithAggregatesInput = {
    AND?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    OR?: ViajeScalarWhereWithAggregatesInput[]
    NOT?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    id_viaje?: IntWithAggregatesFilter<"Viaje"> | number
    fecha_salida?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
    hora_salida_programada?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
    hora_salida_real?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
    costo?: DecimalWithAggregatesFilter<"Viaje"> | Decimal | DecimalJsLike | number | string
    id_bus?: IntWithAggregatesFilter<"Viaje"> | number
    id_ruta?: IntWithAggregatesFilter<"Viaje"> | number
    id_chofer?: IntWithAggregatesFilter<"Viaje"> | number
    id_pago?: IntWithAggregatesFilter<"Viaje"> | number
  }

  export type RutaWhereInput = {
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    id_ruta?: IntFilter<"Ruta"> | number
    origen?: StringFilter<"Ruta"> | string
    parada_intermedia?: StringFilter<"Ruta"> | string
    destino?: StringFilter<"Ruta"> | string
    distancia?: StringFilter<"Ruta"> | string
    tiempo_estimado?: StringFilter<"Ruta"> | string
    camino?: StringFilter<"Ruta"> | string
    viajes?: ViajeListRelationFilter
  }

  export type RutaOrderByWithRelationInput = {
    id_ruta?: SortOrder
    origen?: SortOrder
    parada_intermedia?: SortOrder
    destino?: SortOrder
    distancia?: SortOrder
    tiempo_estimado?: SortOrder
    camino?: SortOrder
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type RutaWhereUniqueInput = Prisma.AtLeast<{
    id_ruta?: number
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    origen?: StringFilter<"Ruta"> | string
    parada_intermedia?: StringFilter<"Ruta"> | string
    destino?: StringFilter<"Ruta"> | string
    distancia?: StringFilter<"Ruta"> | string
    tiempo_estimado?: StringFilter<"Ruta"> | string
    camino?: StringFilter<"Ruta"> | string
    viajes?: ViajeListRelationFilter
  }, "id_ruta">

  export type RutaOrderByWithAggregationInput = {
    id_ruta?: SortOrder
    origen?: SortOrder
    parada_intermedia?: SortOrder
    destino?: SortOrder
    distancia?: SortOrder
    tiempo_estimado?: SortOrder
    camino?: SortOrder
    _count?: RutaCountOrderByAggregateInput
    _avg?: RutaAvgOrderByAggregateInput
    _max?: RutaMaxOrderByAggregateInput
    _min?: RutaMinOrderByAggregateInput
    _sum?: RutaSumOrderByAggregateInput
  }

  export type RutaScalarWhereWithAggregatesInput = {
    AND?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    OR?: RutaScalarWhereWithAggregatesInput[]
    NOT?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    id_ruta?: IntWithAggregatesFilter<"Ruta"> | number
    origen?: StringWithAggregatesFilter<"Ruta"> | string
    parada_intermedia?: StringWithAggregatesFilter<"Ruta"> | string
    destino?: StringWithAggregatesFilter<"Ruta"> | string
    distancia?: StringWithAggregatesFilter<"Ruta"> | string
    tiempo_estimado?: StringWithAggregatesFilter<"Ruta"> | string
    camino?: StringWithAggregatesFilter<"Ruta"> | string
  }

  export type Configuracion_PagoWhereInput = {
    AND?: Configuracion_PagoWhereInput | Configuracion_PagoWhereInput[]
    OR?: Configuracion_PagoWhereInput[]
    NOT?: Configuracion_PagoWhereInput | Configuracion_PagoWhereInput[]
    id_pago?: IntFilter<"Configuracion_Pago"> | number
    ruta_codigo_qr?: StringFilter<"Configuracion_Pago"> | string
    fecha_creacion?: DateTimeFilter<"Configuracion_Pago"> | Date | string
    estado?: StringFilter<"Configuracion_Pago"> | string
    id_agencia?: IntFilter<"Configuracion_Pago"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    viajes?: ViajeListRelationFilter
  }

  export type Configuracion_PagoOrderByWithRelationInput = {
    id_pago?: SortOrder
    ruta_codigo_qr?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    agencia?: AgenciaOrderByWithRelationInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type Configuracion_PagoWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number
    AND?: Configuracion_PagoWhereInput | Configuracion_PagoWhereInput[]
    OR?: Configuracion_PagoWhereInput[]
    NOT?: Configuracion_PagoWhereInput | Configuracion_PagoWhereInput[]
    ruta_codigo_qr?: StringFilter<"Configuracion_Pago"> | string
    fecha_creacion?: DateTimeFilter<"Configuracion_Pago"> | Date | string
    estado?: StringFilter<"Configuracion_Pago"> | string
    id_agencia?: IntFilter<"Configuracion_Pago"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    viajes?: ViajeListRelationFilter
  }, "id_pago">

  export type Configuracion_PagoOrderByWithAggregationInput = {
    id_pago?: SortOrder
    ruta_codigo_qr?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    _count?: Configuracion_PagoCountOrderByAggregateInput
    _avg?: Configuracion_PagoAvgOrderByAggregateInput
    _max?: Configuracion_PagoMaxOrderByAggregateInput
    _min?: Configuracion_PagoMinOrderByAggregateInput
    _sum?: Configuracion_PagoSumOrderByAggregateInput
  }

  export type Configuracion_PagoScalarWhereWithAggregatesInput = {
    AND?: Configuracion_PagoScalarWhereWithAggregatesInput | Configuracion_PagoScalarWhereWithAggregatesInput[]
    OR?: Configuracion_PagoScalarWhereWithAggregatesInput[]
    NOT?: Configuracion_PagoScalarWhereWithAggregatesInput | Configuracion_PagoScalarWhereWithAggregatesInput[]
    id_pago?: IntWithAggregatesFilter<"Configuracion_Pago"> | number
    ruta_codigo_qr?: StringWithAggregatesFilter<"Configuracion_Pago"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"Configuracion_Pago"> | Date | string
    estado?: StringWithAggregatesFilter<"Configuracion_Pago"> | string
    id_agencia?: IntWithAggregatesFilter<"Configuracion_Pago"> | number
  }

  export type ChoferWhereInput = {
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    id_chofer?: IntFilter<"Chofer"> | number
    nombre?: StringFilter<"Chofer"> | string
    apellido?: StringFilter<"Chofer"> | string
    carnet_identidad?: StringFilter<"Chofer"> | string
    numero_celular?: StringFilter<"Chofer"> | string
    categoria_licencia?: StringFilter<"Chofer"> | string
    direccion_contacto?: StringFilter<"Chofer"> | string
    estado?: StringFilter<"Chofer"> | string
    id_agencia?: IntFilter<"Chofer"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    viajes?: ViajeListRelationFilter
  }

  export type ChoferOrderByWithRelationInput = {
    id_chofer?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    carnet_identidad?: SortOrder
    numero_celular?: SortOrder
    categoria_licencia?: SortOrder
    direccion_contacto?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    agencia?: AgenciaOrderByWithRelationInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type ChoferWhereUniqueInput = Prisma.AtLeast<{
    id_chofer?: number
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    nombre?: StringFilter<"Chofer"> | string
    apellido?: StringFilter<"Chofer"> | string
    carnet_identidad?: StringFilter<"Chofer"> | string
    numero_celular?: StringFilter<"Chofer"> | string
    categoria_licencia?: StringFilter<"Chofer"> | string
    direccion_contacto?: StringFilter<"Chofer"> | string
    estado?: StringFilter<"Chofer"> | string
    id_agencia?: IntFilter<"Chofer"> | number
    agencia?: XOR<AgenciaScalarRelationFilter, AgenciaWhereInput>
    viajes?: ViajeListRelationFilter
  }, "id_chofer">

  export type ChoferOrderByWithAggregationInput = {
    id_chofer?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    carnet_identidad?: SortOrder
    numero_celular?: SortOrder
    categoria_licencia?: SortOrder
    direccion_contacto?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
    _count?: ChoferCountOrderByAggregateInput
    _avg?: ChoferAvgOrderByAggregateInput
    _max?: ChoferMaxOrderByAggregateInput
    _min?: ChoferMinOrderByAggregateInput
    _sum?: ChoferSumOrderByAggregateInput
  }

  export type ChoferScalarWhereWithAggregatesInput = {
    AND?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    OR?: ChoferScalarWhereWithAggregatesInput[]
    NOT?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    id_chofer?: IntWithAggregatesFilter<"Chofer"> | number
    nombre?: StringWithAggregatesFilter<"Chofer"> | string
    apellido?: StringWithAggregatesFilter<"Chofer"> | string
    carnet_identidad?: StringWithAggregatesFilter<"Chofer"> | string
    numero_celular?: StringWithAggregatesFilter<"Chofer"> | string
    categoria_licencia?: StringWithAggregatesFilter<"Chofer"> | string
    direccion_contacto?: StringWithAggregatesFilter<"Chofer"> | string
    estado?: StringWithAggregatesFilter<"Chofer"> | string
    id_agencia?: IntWithAggregatesFilter<"Chofer"> | number
  }

  export type UsuarioCreateInput = {
    correo_electronico: string
    contraseña: string
    numero_celular: number
    agencia?: AgenciaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    correo_electronico: string
    contraseña: string
    numero_celular: number
    agencia?: AgenciaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
    agencia?: AgenciaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
    agencia?: AgenciaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    correo_electronico: string
    contraseña: string
    numero_celular: number
  }

  export type UsuarioUpdateManyMutationInput = {
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
  }

  export type AgenciaCreateInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutAgenciaInput
    buses?: BusCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUncheckedCreateInput = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    buses?: BusUncheckedCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferUncheckedCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoUncheckedCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUpdateInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAgenciaNestedInput
    buses?: BusUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUncheckedUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUncheckedUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaCreateManyInput = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
  }

  export type AgenciaUpdateManyMutationInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AgenciaUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type BusCreateInput = {
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    viajes?: ViajeCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    id_agencia: number
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    viajes?: ViajeUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    id_agencia: number
  }

  export type BusUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type BusUncheckedUpdateManyInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
  }

  export type AsientoCreateInput = {
    numero: string
    ubicacion: string
    estado: string
    bus: BusCreateNestedOneWithoutAsientosInput
  }

  export type AsientoUncheckedCreateInput = {
    id_asiento?: number
    numero: string
    ubicacion: string
    estado: string
    id_bus: number
  }

  export type AsientoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    bus?: BusUpdateOneRequiredWithoutAsientosNestedInput
  }

  export type AsientoUncheckedUpdateInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_bus?: IntFieldUpdateOperationsInput | number
  }

  export type AsientoCreateManyInput = {
    id_asiento?: number
    numero: string
    ubicacion: string
    estado: string
    id_bus: number
  }

  export type AsientoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsientoUncheckedUpdateManyInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_bus?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateInput = {
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    bus: BusCreateNestedOneWithoutViajesInput
    ruta: RutaCreateNestedOneWithoutViajesInput
    chofer: ChoferCreateNestedOneWithoutViajesInput
    pago: Configuracion_PagoCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_chofer: number
    id_pago: number
  }

  export type ViajeUpdateInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus?: BusUpdateOneRequiredWithoutViajesNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajesNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutViajesNestedInput
    pago?: Configuracion_PagoUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateManyInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_chofer: number
    id_pago: number
  }

  export type ViajeUpdateManyMutationInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajeUncheckedUpdateManyInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type RutaCreateInput = {
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
    viajes?: ViajeCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateInput = {
    id_ruta?: number
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
    viajes?: ViajeUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaUpdateInput = {
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaCreateManyInput = {
    id_ruta?: number
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
  }

  export type RutaUpdateManyMutationInput = {
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
  }

  export type RutaUncheckedUpdateManyInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
  }

  export type Configuracion_PagoCreateInput = {
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutConfiguracionesInput
    viajes?: ViajeCreateNestedManyWithoutPagoInput
  }

  export type Configuracion_PagoUncheckedCreateInput = {
    id_pago?: number
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    id_agencia: number
    viajes?: ViajeUncheckedCreateNestedManyWithoutPagoInput
  }

  export type Configuracion_PagoUpdateInput = {
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutConfiguracionesNestedInput
    viajes?: ViajeUpdateManyWithoutPagoNestedInput
  }

  export type Configuracion_PagoUncheckedUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
    viajes?: ViajeUncheckedUpdateManyWithoutPagoNestedInput
  }

  export type Configuracion_PagoCreateManyInput = {
    id_pago?: number
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    id_agencia: number
  }

  export type Configuracion_PagoUpdateManyMutationInput = {
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type Configuracion_PagoUncheckedUpdateManyInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
  }

  export type ChoferCreateInput = {
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutChoferesInput
    viajes?: ViajeCreateNestedManyWithoutChoferInput
  }

  export type ChoferUncheckedCreateInput = {
    id_chofer?: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    id_agencia: number
    viajes?: ViajeUncheckedCreateNestedManyWithoutChoferInput
  }

  export type ChoferUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutChoferesNestedInput
    viajes?: ViajeUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateInput = {
    id_chofer?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
    viajes?: ViajeUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type ChoferCreateManyInput = {
    id_chofer?: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    id_agencia: number
  }

  export type ChoferUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ChoferUncheckedUpdateManyInput = {
    id_chofer?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
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

  export type AgenciaNullableScalarRelationFilter = {
    is?: AgenciaWhereInput | null
    isNot?: AgenciaWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_electronico?: SortOrder
    contraseña?: SortOrder
    numero_celular?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    numero_celular?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_electronico?: SortOrder
    contraseña?: SortOrder
    numero_celular?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo_electronico?: SortOrder
    contraseña?: SortOrder
    numero_celular?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    numero_celular?: SortOrder
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type ChoferListRelationFilter = {
    every?: ChoferWhereInput
    some?: ChoferWhereInput
    none?: ChoferWhereInput
  }

  export type Configuracion_PagoListRelationFilter = {
    every?: Configuracion_PagoWhereInput
    some?: Configuracion_PagoWhereInput
    none?: Configuracion_PagoWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Configuracion_PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgenciaCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_agencia?: SortOrder
    tipo_sociedad?: SortOrder
    NIT?: SortOrder
    departamento?: SortOrder
    ciudad?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type AgenciaAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type AgenciaMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_agencia?: SortOrder
    tipo_sociedad?: SortOrder
    NIT?: SortOrder
    departamento?: SortOrder
    ciudad?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type AgenciaMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_agencia?: SortOrder
    tipo_sociedad?: SortOrder
    NIT?: SortOrder
    departamento?: SortOrder
    ciudad?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type AgenciaSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type AgenciaScalarRelationFilter = {
    is?: AgenciaWhereInput
    isNot?: AgenciaWhereInput
  }

  export type AsientoListRelationFilter = {
    every?: AsientoWhereInput
    some?: AsientoWhereInput
    none?: AsientoWhereInput
  }

  export type ViajeListRelationFilter = {
    every?: ViajeWhereInput
    some?: ViajeWhereInput
    none?: ViajeWhereInput
  }

  export type AsientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusCountOrderByAggregateInput = {
    id_bus?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    año_modelo?: SortOrder
    tipo_bus?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    id_bus?: SortOrder
    año_modelo?: SortOrder
    id_agencia?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id_bus?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    año_modelo?: SortOrder
    tipo_bus?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id_bus?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    año_modelo?: SortOrder
    tipo_bus?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    id_bus?: SortOrder
    año_modelo?: SortOrder
    id_agencia?: SortOrder
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type AsientoCountOrderByAggregateInput = {
    id_asiento?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    estado?: SortOrder
    id_bus?: SortOrder
  }

  export type AsientoAvgOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_bus?: SortOrder
  }

  export type AsientoMaxOrderByAggregateInput = {
    id_asiento?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    estado?: SortOrder
    id_bus?: SortOrder
  }

  export type AsientoMinOrderByAggregateInput = {
    id_asiento?: SortOrder
    numero?: SortOrder
    ubicacion?: SortOrder
    estado?: SortOrder
    id_bus?: SortOrder
  }

  export type AsientoSumOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_bus?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RutaScalarRelationFilter = {
    is?: RutaWhereInput
    isNot?: RutaWhereInput
  }

  export type ChoferScalarRelationFilter = {
    is?: ChoferWhereInput
    isNot?: ChoferWhereInput
  }

  export type Configuracion_PagoScalarRelationFilter = {
    is?: Configuracion_PagoWhereInput
    isNot?: Configuracion_PagoWhereInput
  }

  export type ViajeCountOrderByAggregateInput = {
    id_viaje?: SortOrder
    fecha_salida?: SortOrder
    hora_salida_programada?: SortOrder
    hora_salida_real?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
  }

  export type ViajeAvgOrderByAggregateInput = {
    id_viaje?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
  }

  export type ViajeMaxOrderByAggregateInput = {
    id_viaje?: SortOrder
    fecha_salida?: SortOrder
    hora_salida_programada?: SortOrder
    hora_salida_real?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
  }

  export type ViajeMinOrderByAggregateInput = {
    id_viaje?: SortOrder
    fecha_salida?: SortOrder
    hora_salida_programada?: SortOrder
    hora_salida_real?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
  }

  export type ViajeSumOrderByAggregateInput = {
    id_viaje?: SortOrder
    costo?: SortOrder
    id_bus?: SortOrder
    id_ruta?: SortOrder
    id_chofer?: SortOrder
    id_pago?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RutaCountOrderByAggregateInput = {
    id_ruta?: SortOrder
    origen?: SortOrder
    parada_intermedia?: SortOrder
    destino?: SortOrder
    distancia?: SortOrder
    tiempo_estimado?: SortOrder
    camino?: SortOrder
  }

  export type RutaAvgOrderByAggregateInput = {
    id_ruta?: SortOrder
  }

  export type RutaMaxOrderByAggregateInput = {
    id_ruta?: SortOrder
    origen?: SortOrder
    parada_intermedia?: SortOrder
    destino?: SortOrder
    distancia?: SortOrder
    tiempo_estimado?: SortOrder
    camino?: SortOrder
  }

  export type RutaMinOrderByAggregateInput = {
    id_ruta?: SortOrder
    origen?: SortOrder
    parada_intermedia?: SortOrder
    destino?: SortOrder
    distancia?: SortOrder
    tiempo_estimado?: SortOrder
    camino?: SortOrder
  }

  export type RutaSumOrderByAggregateInput = {
    id_ruta?: SortOrder
  }

  export type Configuracion_PagoCountOrderByAggregateInput = {
    id_pago?: SortOrder
    ruta_codigo_qr?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type Configuracion_PagoAvgOrderByAggregateInput = {
    id_pago?: SortOrder
    id_agencia?: SortOrder
  }

  export type Configuracion_PagoMaxOrderByAggregateInput = {
    id_pago?: SortOrder
    ruta_codigo_qr?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type Configuracion_PagoMinOrderByAggregateInput = {
    id_pago?: SortOrder
    ruta_codigo_qr?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type Configuracion_PagoSumOrderByAggregateInput = {
    id_pago?: SortOrder
    id_agencia?: SortOrder
  }

  export type ChoferCountOrderByAggregateInput = {
    id_chofer?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    carnet_identidad?: SortOrder
    numero_celular?: SortOrder
    categoria_licencia?: SortOrder
    direccion_contacto?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type ChoferAvgOrderByAggregateInput = {
    id_chofer?: SortOrder
    id_agencia?: SortOrder
  }

  export type ChoferMaxOrderByAggregateInput = {
    id_chofer?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    carnet_identidad?: SortOrder
    numero_celular?: SortOrder
    categoria_licencia?: SortOrder
    direccion_contacto?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type ChoferMinOrderByAggregateInput = {
    id_chofer?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    carnet_identidad?: SortOrder
    numero_celular?: SortOrder
    categoria_licencia?: SortOrder
    direccion_contacto?: SortOrder
    estado?: SortOrder
    id_agencia?: SortOrder
  }

  export type ChoferSumOrderByAggregateInput = {
    id_chofer?: SortOrder
    id_agencia?: SortOrder
  }

  export type AgenciaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutUsuarioInput
    connect?: AgenciaWhereUniqueInput
  }

  export type AgenciaUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutUsuarioInput
    connect?: AgenciaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgenciaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutUsuarioInput
    upsert?: AgenciaUpsertWithoutUsuarioInput
    disconnect?: AgenciaWhereInput | boolean
    delete?: AgenciaWhereInput | boolean
    connect?: AgenciaWhereUniqueInput
    update?: XOR<XOR<AgenciaUpdateToOneWithWhereWithoutUsuarioInput, AgenciaUpdateWithoutUsuarioInput>, AgenciaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AgenciaUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutUsuarioInput
    upsert?: AgenciaUpsertWithoutUsuarioInput
    disconnect?: AgenciaWhereInput | boolean
    delete?: AgenciaWhereInput | boolean
    connect?: AgenciaWhereUniqueInput
    update?: XOR<XOR<AgenciaUpdateToOneWithWhereWithoutUsuarioInput, AgenciaUpdateWithoutUsuarioInput>, AgenciaUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutAgenciaInput = {
    create?: XOR<UsuarioCreateWithoutAgenciaInput, UsuarioUncheckedCreateWithoutAgenciaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAgenciaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BusCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput> | BusCreateWithoutAgenciaInput[] | BusUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenciaInput | BusCreateOrConnectWithoutAgenciaInput[]
    createMany?: BusCreateManyAgenciaInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type ChoferCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput> | ChoferCreateWithoutAgenciaInput[] | ChoferUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: ChoferCreateOrConnectWithoutAgenciaInput | ChoferCreateOrConnectWithoutAgenciaInput[]
    createMany?: ChoferCreateManyAgenciaInputEnvelope
    connect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
  }

  export type Configuracion_PagoCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput> | Configuracion_PagoCreateWithoutAgenciaInput[] | Configuracion_PagoUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutAgenciaInput | Configuracion_PagoCreateOrConnectWithoutAgenciaInput[]
    createMany?: Configuracion_PagoCreateManyAgenciaInputEnvelope
    connect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput> | BusCreateWithoutAgenciaInput[] | BusUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenciaInput | BusCreateOrConnectWithoutAgenciaInput[]
    createMany?: BusCreateManyAgenciaInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type ChoferUncheckedCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput> | ChoferCreateWithoutAgenciaInput[] | ChoferUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: ChoferCreateOrConnectWithoutAgenciaInput | ChoferCreateOrConnectWithoutAgenciaInput[]
    createMany?: ChoferCreateManyAgenciaInputEnvelope
    connect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
  }

  export type Configuracion_PagoUncheckedCreateNestedManyWithoutAgenciaInput = {
    create?: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput> | Configuracion_PagoCreateWithoutAgenciaInput[] | Configuracion_PagoUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutAgenciaInput | Configuracion_PagoCreateOrConnectWithoutAgenciaInput[]
    createMany?: Configuracion_PagoCreateManyAgenciaInputEnvelope
    connect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutAgenciaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAgenciaInput, UsuarioUncheckedCreateWithoutAgenciaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAgenciaInput
    upsert?: UsuarioUpsertWithoutAgenciaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAgenciaInput, UsuarioUpdateWithoutAgenciaInput>, UsuarioUncheckedUpdateWithoutAgenciaInput>
  }

  export type BusUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput> | BusCreateWithoutAgenciaInput[] | BusUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenciaInput | BusCreateOrConnectWithoutAgenciaInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutAgenciaInput | BusUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: BusCreateManyAgenciaInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutAgenciaInput | BusUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: BusUpdateManyWithWhereWithoutAgenciaInput | BusUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type ChoferUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput> | ChoferCreateWithoutAgenciaInput[] | ChoferUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: ChoferCreateOrConnectWithoutAgenciaInput | ChoferCreateOrConnectWithoutAgenciaInput[]
    upsert?: ChoferUpsertWithWhereUniqueWithoutAgenciaInput | ChoferUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: ChoferCreateManyAgenciaInputEnvelope
    set?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    disconnect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    delete?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    connect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    update?: ChoferUpdateWithWhereUniqueWithoutAgenciaInput | ChoferUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: ChoferUpdateManyWithWhereWithoutAgenciaInput | ChoferUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: ChoferScalarWhereInput | ChoferScalarWhereInput[]
  }

  export type Configuracion_PagoUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput> | Configuracion_PagoCreateWithoutAgenciaInput[] | Configuracion_PagoUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutAgenciaInput | Configuracion_PagoCreateOrConnectWithoutAgenciaInput[]
    upsert?: Configuracion_PagoUpsertWithWhereUniqueWithoutAgenciaInput | Configuracion_PagoUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: Configuracion_PagoCreateManyAgenciaInputEnvelope
    set?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    disconnect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    delete?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    connect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    update?: Configuracion_PagoUpdateWithWhereUniqueWithoutAgenciaInput | Configuracion_PagoUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: Configuracion_PagoUpdateManyWithWhereWithoutAgenciaInput | Configuracion_PagoUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: Configuracion_PagoScalarWhereInput | Configuracion_PagoScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput> | BusCreateWithoutAgenciaInput[] | BusUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenciaInput | BusCreateOrConnectWithoutAgenciaInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutAgenciaInput | BusUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: BusCreateManyAgenciaInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutAgenciaInput | BusUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: BusUpdateManyWithWhereWithoutAgenciaInput | BusUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type ChoferUncheckedUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput> | ChoferCreateWithoutAgenciaInput[] | ChoferUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: ChoferCreateOrConnectWithoutAgenciaInput | ChoferCreateOrConnectWithoutAgenciaInput[]
    upsert?: ChoferUpsertWithWhereUniqueWithoutAgenciaInput | ChoferUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: ChoferCreateManyAgenciaInputEnvelope
    set?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    disconnect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    delete?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    connect?: ChoferWhereUniqueInput | ChoferWhereUniqueInput[]
    update?: ChoferUpdateWithWhereUniqueWithoutAgenciaInput | ChoferUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: ChoferUpdateManyWithWhereWithoutAgenciaInput | ChoferUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: ChoferScalarWhereInput | ChoferScalarWhereInput[]
  }

  export type Configuracion_PagoUncheckedUpdateManyWithoutAgenciaNestedInput = {
    create?: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput> | Configuracion_PagoCreateWithoutAgenciaInput[] | Configuracion_PagoUncheckedCreateWithoutAgenciaInput[]
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutAgenciaInput | Configuracion_PagoCreateOrConnectWithoutAgenciaInput[]
    upsert?: Configuracion_PagoUpsertWithWhereUniqueWithoutAgenciaInput | Configuracion_PagoUpsertWithWhereUniqueWithoutAgenciaInput[]
    createMany?: Configuracion_PagoCreateManyAgenciaInputEnvelope
    set?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    disconnect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    delete?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    connect?: Configuracion_PagoWhereUniqueInput | Configuracion_PagoWhereUniqueInput[]
    update?: Configuracion_PagoUpdateWithWhereUniqueWithoutAgenciaInput | Configuracion_PagoUpdateWithWhereUniqueWithoutAgenciaInput[]
    updateMany?: Configuracion_PagoUpdateManyWithWhereWithoutAgenciaInput | Configuracion_PagoUpdateManyWithWhereWithoutAgenciaInput[]
    deleteMany?: Configuracion_PagoScalarWhereInput | Configuracion_PagoScalarWhereInput[]
  }

  export type AgenciaCreateNestedOneWithoutBusesInput = {
    create?: XOR<AgenciaCreateWithoutBusesInput, AgenciaUncheckedCreateWithoutBusesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutBusesInput
    connect?: AgenciaWhereUniqueInput
  }

  export type AsientoCreateNestedManyWithoutBusInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
  }

  export type ViajeCreateNestedManyWithoutBusInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type AsientoUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type AgenciaUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<AgenciaCreateWithoutBusesInput, AgenciaUncheckedCreateWithoutBusesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutBusesInput
    upsert?: AgenciaUpsertWithoutBusesInput
    connect?: AgenciaWhereUniqueInput
    update?: XOR<XOR<AgenciaUpdateToOneWithWhereWithoutBusesInput, AgenciaUpdateWithoutBusesInput>, AgenciaUncheckedUpdateWithoutBusesInput>
  }

  export type AsientoUpdateManyWithoutBusNestedInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    upsert?: AsientoUpsertWithWhereUniqueWithoutBusInput | AsientoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    set?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    disconnect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    delete?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    update?: AsientoUpdateWithWhereUniqueWithoutBusInput | AsientoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: AsientoUpdateManyWithWhereWithoutBusInput | AsientoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
  }

  export type ViajeUpdateManyWithoutBusNestedInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutBusInput | ViajeUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutBusInput | ViajeUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutBusInput | ViajeUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type AsientoUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    upsert?: AsientoUpsertWithWhereUniqueWithoutBusInput | AsientoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    set?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    disconnect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    delete?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    update?: AsientoUpdateWithWhereUniqueWithoutBusInput | AsientoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: AsientoUpdateManyWithWhereWithoutBusInput | AsientoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutBusInput | ViajeUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutBusInput | ViajeUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutBusInput | ViajeUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutAsientosInput = {
    create?: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    connectOrCreate?: BusCreateOrConnectWithoutAsientosInput
    connect?: BusWhereUniqueInput
  }

  export type BusUpdateOneRequiredWithoutAsientosNestedInput = {
    create?: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    connectOrCreate?: BusCreateOrConnectWithoutAsientosInput
    upsert?: BusUpsertWithoutAsientosInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutAsientosInput, BusUpdateWithoutAsientosInput>, BusUncheckedUpdateWithoutAsientosInput>
  }

  export type BusCreateNestedOneWithoutViajesInput = {
    create?: XOR<BusCreateWithoutViajesInput, BusUncheckedCreateWithoutViajesInput>
    connectOrCreate?: BusCreateOrConnectWithoutViajesInput
    connect?: BusWhereUniqueInput
  }

  export type RutaCreateNestedOneWithoutViajesInput = {
    create?: XOR<RutaCreateWithoutViajesInput, RutaUncheckedCreateWithoutViajesInput>
    connectOrCreate?: RutaCreateOrConnectWithoutViajesInput
    connect?: RutaWhereUniqueInput
  }

  export type ChoferCreateNestedOneWithoutViajesInput = {
    create?: XOR<ChoferCreateWithoutViajesInput, ChoferUncheckedCreateWithoutViajesInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutViajesInput
    connect?: ChoferWhereUniqueInput
  }

  export type Configuracion_PagoCreateNestedOneWithoutViajesInput = {
    create?: XOR<Configuracion_PagoCreateWithoutViajesInput, Configuracion_PagoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutViajesInput
    connect?: Configuracion_PagoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BusUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<BusCreateWithoutViajesInput, BusUncheckedCreateWithoutViajesInput>
    connectOrCreate?: BusCreateOrConnectWithoutViajesInput
    upsert?: BusUpsertWithoutViajesInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutViajesInput, BusUpdateWithoutViajesInput>, BusUncheckedUpdateWithoutViajesInput>
  }

  export type RutaUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<RutaCreateWithoutViajesInput, RutaUncheckedCreateWithoutViajesInput>
    connectOrCreate?: RutaCreateOrConnectWithoutViajesInput
    upsert?: RutaUpsertWithoutViajesInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutViajesInput, RutaUpdateWithoutViajesInput>, RutaUncheckedUpdateWithoutViajesInput>
  }

  export type ChoferUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<ChoferCreateWithoutViajesInput, ChoferUncheckedCreateWithoutViajesInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutViajesInput
    upsert?: ChoferUpsertWithoutViajesInput
    connect?: ChoferWhereUniqueInput
    update?: XOR<XOR<ChoferUpdateToOneWithWhereWithoutViajesInput, ChoferUpdateWithoutViajesInput>, ChoferUncheckedUpdateWithoutViajesInput>
  }

  export type Configuracion_PagoUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<Configuracion_PagoCreateWithoutViajesInput, Configuracion_PagoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: Configuracion_PagoCreateOrConnectWithoutViajesInput
    upsert?: Configuracion_PagoUpsertWithoutViajesInput
    connect?: Configuracion_PagoWhereUniqueInput
    update?: XOR<XOR<Configuracion_PagoUpdateToOneWithWhereWithoutViajesInput, Configuracion_PagoUpdateWithoutViajesInput>, Configuracion_PagoUncheckedUpdateWithoutViajesInput>
  }

  export type ViajeCreateNestedManyWithoutRutaInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutRutaInput | ViajeUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutRutaInput | ViajeUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutRutaInput | ViajeUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutRutaInput | ViajeUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutRutaInput | ViajeUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutRutaInput | ViajeUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type AgenciaCreateNestedOneWithoutConfiguracionesInput = {
    create?: XOR<AgenciaCreateWithoutConfiguracionesInput, AgenciaUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutConfiguracionesInput
    connect?: AgenciaWhereUniqueInput
  }

  export type ViajeCreateNestedManyWithoutPagoInput = {
    create?: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput> | ViajeCreateWithoutPagoInput[] | ViajeUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPagoInput | ViajeCreateOrConnectWithoutPagoInput[]
    createMany?: ViajeCreateManyPagoInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutPagoInput = {
    create?: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput> | ViajeCreateWithoutPagoInput[] | ViajeUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPagoInput | ViajeCreateOrConnectWithoutPagoInput[]
    createMany?: ViajeCreateManyPagoInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type AgenciaUpdateOneRequiredWithoutConfiguracionesNestedInput = {
    create?: XOR<AgenciaCreateWithoutConfiguracionesInput, AgenciaUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutConfiguracionesInput
    upsert?: AgenciaUpsertWithoutConfiguracionesInput
    connect?: AgenciaWhereUniqueInput
    update?: XOR<XOR<AgenciaUpdateToOneWithWhereWithoutConfiguracionesInput, AgenciaUpdateWithoutConfiguracionesInput>, AgenciaUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type ViajeUpdateManyWithoutPagoNestedInput = {
    create?: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput> | ViajeCreateWithoutPagoInput[] | ViajeUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPagoInput | ViajeCreateOrConnectWithoutPagoInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutPagoInput | ViajeUpsertWithWhereUniqueWithoutPagoInput[]
    createMany?: ViajeCreateManyPagoInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutPagoInput | ViajeUpdateWithWhereUniqueWithoutPagoInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutPagoInput | ViajeUpdateManyWithWhereWithoutPagoInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutPagoNestedInput = {
    create?: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput> | ViajeCreateWithoutPagoInput[] | ViajeUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPagoInput | ViajeCreateOrConnectWithoutPagoInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutPagoInput | ViajeUpsertWithWhereUniqueWithoutPagoInput[]
    createMany?: ViajeCreateManyPagoInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutPagoInput | ViajeUpdateWithWhereUniqueWithoutPagoInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutPagoInput | ViajeUpdateManyWithWhereWithoutPagoInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type AgenciaCreateNestedOneWithoutChoferesInput = {
    create?: XOR<AgenciaCreateWithoutChoferesInput, AgenciaUncheckedCreateWithoutChoferesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutChoferesInput
    connect?: AgenciaWhereUniqueInput
  }

  export type ViajeCreateNestedManyWithoutChoferInput = {
    create?: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput> | ViajeCreateWithoutChoferInput[] | ViajeUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutChoferInput | ViajeCreateOrConnectWithoutChoferInput[]
    createMany?: ViajeCreateManyChoferInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutChoferInput = {
    create?: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput> | ViajeCreateWithoutChoferInput[] | ViajeUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutChoferInput | ViajeCreateOrConnectWithoutChoferInput[]
    createMany?: ViajeCreateManyChoferInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type AgenciaUpdateOneRequiredWithoutChoferesNestedInput = {
    create?: XOR<AgenciaCreateWithoutChoferesInput, AgenciaUncheckedCreateWithoutChoferesInput>
    connectOrCreate?: AgenciaCreateOrConnectWithoutChoferesInput
    upsert?: AgenciaUpsertWithoutChoferesInput
    connect?: AgenciaWhereUniqueInput
    update?: XOR<XOR<AgenciaUpdateToOneWithWhereWithoutChoferesInput, AgenciaUpdateWithoutChoferesInput>, AgenciaUncheckedUpdateWithoutChoferesInput>
  }

  export type ViajeUpdateManyWithoutChoferNestedInput = {
    create?: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput> | ViajeCreateWithoutChoferInput[] | ViajeUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutChoferInput | ViajeCreateOrConnectWithoutChoferInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutChoferInput | ViajeUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: ViajeCreateManyChoferInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutChoferInput | ViajeUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutChoferInput | ViajeUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutChoferNestedInput = {
    create?: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput> | ViajeCreateWithoutChoferInput[] | ViajeUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutChoferInput | ViajeCreateOrConnectWithoutChoferInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutChoferInput | ViajeUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: ViajeCreateManyChoferInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutChoferInput | ViajeUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutChoferInput | ViajeUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AgenciaCreateWithoutUsuarioInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    buses?: BusCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUncheckedCreateWithoutUsuarioInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    buses?: BusUncheckedCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferUncheckedCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoUncheckedCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaCreateOrConnectWithoutUsuarioInput = {
    where: AgenciaWhereUniqueInput
    create: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
  }

  export type AgenciaUpsertWithoutUsuarioInput = {
    update: XOR<AgenciaUpdateWithoutUsuarioInput, AgenciaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AgenciaCreateWithoutUsuarioInput, AgenciaUncheckedCreateWithoutUsuarioInput>
    where?: AgenciaWhereInput
  }

  export type AgenciaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AgenciaWhereInput
    data: XOR<AgenciaUpdateWithoutUsuarioInput, AgenciaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AgenciaUpdateWithoutUsuarioInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaUncheckedUpdateWithoutUsuarioInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUncheckedUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUncheckedUpdateManyWithoutAgenciaNestedInput
  }

  export type UsuarioCreateWithoutAgenciaInput = {
    correo_electronico: string
    contraseña: string
    numero_celular: number
  }

  export type UsuarioUncheckedCreateWithoutAgenciaInput = {
    id_usuario?: number
    correo_electronico: string
    contraseña: string
    numero_celular: number
  }

  export type UsuarioCreateOrConnectWithoutAgenciaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAgenciaInput, UsuarioUncheckedCreateWithoutAgenciaInput>
  }

  export type BusCreateWithoutAgenciaInput = {
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    asientos?: AsientoCreateNestedManyWithoutBusInput
    viajes?: ViajeCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutAgenciaInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutAgenciaInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput>
  }

  export type BusCreateManyAgenciaInputEnvelope = {
    data: BusCreateManyAgenciaInput | BusCreateManyAgenciaInput[]
    skipDuplicates?: boolean
  }

  export type ChoferCreateWithoutAgenciaInput = {
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    viajes?: ViajeCreateNestedManyWithoutChoferInput
  }

  export type ChoferUncheckedCreateWithoutAgenciaInput = {
    id_chofer?: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    viajes?: ViajeUncheckedCreateNestedManyWithoutChoferInput
  }

  export type ChoferCreateOrConnectWithoutAgenciaInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput>
  }

  export type ChoferCreateManyAgenciaInputEnvelope = {
    data: ChoferCreateManyAgenciaInput | ChoferCreateManyAgenciaInput[]
    skipDuplicates?: boolean
  }

  export type Configuracion_PagoCreateWithoutAgenciaInput = {
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    viajes?: ViajeCreateNestedManyWithoutPagoInput
  }

  export type Configuracion_PagoUncheckedCreateWithoutAgenciaInput = {
    id_pago?: number
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    viajes?: ViajeUncheckedCreateNestedManyWithoutPagoInput
  }

  export type Configuracion_PagoCreateOrConnectWithoutAgenciaInput = {
    where: Configuracion_PagoWhereUniqueInput
    create: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput>
  }

  export type Configuracion_PagoCreateManyAgenciaInputEnvelope = {
    data: Configuracion_PagoCreateManyAgenciaInput | Configuracion_PagoCreateManyAgenciaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutAgenciaInput = {
    update: XOR<UsuarioUpdateWithoutAgenciaInput, UsuarioUncheckedUpdateWithoutAgenciaInput>
    create: XOR<UsuarioCreateWithoutAgenciaInput, UsuarioUncheckedCreateWithoutAgenciaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAgenciaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAgenciaInput, UsuarioUncheckedUpdateWithoutAgenciaInput>
  }

  export type UsuarioUpdateWithoutAgenciaInput = {
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUncheckedUpdateWithoutAgenciaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    numero_celular?: IntFieldUpdateOperationsInput | number
  }

  export type BusUpsertWithWhereUniqueWithoutAgenciaInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutAgenciaInput, BusUncheckedUpdateWithoutAgenciaInput>
    create: XOR<BusCreateWithoutAgenciaInput, BusUncheckedCreateWithoutAgenciaInput>
  }

  export type BusUpdateWithWhereUniqueWithoutAgenciaInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutAgenciaInput, BusUncheckedUpdateWithoutAgenciaInput>
  }

  export type BusUpdateManyWithWhereWithoutAgenciaInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutAgenciaInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id_bus?: IntFilter<"Bus"> | number
    placa?: StringFilter<"Bus"> | string
    marca?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    año_modelo?: IntFilter<"Bus"> | number
    tipo_bus?: StringFilter<"Bus"> | string
    estado?: StringFilter<"Bus"> | string
    id_agencia?: IntFilter<"Bus"> | number
  }

  export type ChoferUpsertWithWhereUniqueWithoutAgenciaInput = {
    where: ChoferWhereUniqueInput
    update: XOR<ChoferUpdateWithoutAgenciaInput, ChoferUncheckedUpdateWithoutAgenciaInput>
    create: XOR<ChoferCreateWithoutAgenciaInput, ChoferUncheckedCreateWithoutAgenciaInput>
  }

  export type ChoferUpdateWithWhereUniqueWithoutAgenciaInput = {
    where: ChoferWhereUniqueInput
    data: XOR<ChoferUpdateWithoutAgenciaInput, ChoferUncheckedUpdateWithoutAgenciaInput>
  }

  export type ChoferUpdateManyWithWhereWithoutAgenciaInput = {
    where: ChoferScalarWhereInput
    data: XOR<ChoferUpdateManyMutationInput, ChoferUncheckedUpdateManyWithoutAgenciaInput>
  }

  export type ChoferScalarWhereInput = {
    AND?: ChoferScalarWhereInput | ChoferScalarWhereInput[]
    OR?: ChoferScalarWhereInput[]
    NOT?: ChoferScalarWhereInput | ChoferScalarWhereInput[]
    id_chofer?: IntFilter<"Chofer"> | number
    nombre?: StringFilter<"Chofer"> | string
    apellido?: StringFilter<"Chofer"> | string
    carnet_identidad?: StringFilter<"Chofer"> | string
    numero_celular?: StringFilter<"Chofer"> | string
    categoria_licencia?: StringFilter<"Chofer"> | string
    direccion_contacto?: StringFilter<"Chofer"> | string
    estado?: StringFilter<"Chofer"> | string
    id_agencia?: IntFilter<"Chofer"> | number
  }

  export type Configuracion_PagoUpsertWithWhereUniqueWithoutAgenciaInput = {
    where: Configuracion_PagoWhereUniqueInput
    update: XOR<Configuracion_PagoUpdateWithoutAgenciaInput, Configuracion_PagoUncheckedUpdateWithoutAgenciaInput>
    create: XOR<Configuracion_PagoCreateWithoutAgenciaInput, Configuracion_PagoUncheckedCreateWithoutAgenciaInput>
  }

  export type Configuracion_PagoUpdateWithWhereUniqueWithoutAgenciaInput = {
    where: Configuracion_PagoWhereUniqueInput
    data: XOR<Configuracion_PagoUpdateWithoutAgenciaInput, Configuracion_PagoUncheckedUpdateWithoutAgenciaInput>
  }

  export type Configuracion_PagoUpdateManyWithWhereWithoutAgenciaInput = {
    where: Configuracion_PagoScalarWhereInput
    data: XOR<Configuracion_PagoUpdateManyMutationInput, Configuracion_PagoUncheckedUpdateManyWithoutAgenciaInput>
  }

  export type Configuracion_PagoScalarWhereInput = {
    AND?: Configuracion_PagoScalarWhereInput | Configuracion_PagoScalarWhereInput[]
    OR?: Configuracion_PagoScalarWhereInput[]
    NOT?: Configuracion_PagoScalarWhereInput | Configuracion_PagoScalarWhereInput[]
    id_pago?: IntFilter<"Configuracion_Pago"> | number
    ruta_codigo_qr?: StringFilter<"Configuracion_Pago"> | string
    fecha_creacion?: DateTimeFilter<"Configuracion_Pago"> | Date | string
    estado?: StringFilter<"Configuracion_Pago"> | string
    id_agencia?: IntFilter<"Configuracion_Pago"> | number
  }

  export type AgenciaCreateWithoutBusesInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutAgenciaInput
    choferes?: ChoferCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUncheckedCreateWithoutBusesInput = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    choferes?: ChoferUncheckedCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoUncheckedCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaCreateOrConnectWithoutBusesInput = {
    where: AgenciaWhereUniqueInput
    create: XOR<AgenciaCreateWithoutBusesInput, AgenciaUncheckedCreateWithoutBusesInput>
  }

  export type AsientoCreateWithoutBusInput = {
    numero: string
    ubicacion: string
    estado: string
  }

  export type AsientoUncheckedCreateWithoutBusInput = {
    id_asiento?: number
    numero: string
    ubicacion: string
    estado: string
  }

  export type AsientoCreateOrConnectWithoutBusInput = {
    where: AsientoWhereUniqueInput
    create: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput>
  }

  export type AsientoCreateManyBusInputEnvelope = {
    data: AsientoCreateManyBusInput | AsientoCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type ViajeCreateWithoutBusInput = {
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    ruta: RutaCreateNestedOneWithoutViajesInput
    chofer: ChoferCreateNestedOneWithoutViajesInput
    pago: Configuracion_PagoCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateWithoutBusInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_ruta: number
    id_chofer: number
    id_pago: number
  }

  export type ViajeCreateOrConnectWithoutBusInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput>
  }

  export type ViajeCreateManyBusInputEnvelope = {
    data: ViajeCreateManyBusInput | ViajeCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type AgenciaUpsertWithoutBusesInput = {
    update: XOR<AgenciaUpdateWithoutBusesInput, AgenciaUncheckedUpdateWithoutBusesInput>
    create: XOR<AgenciaCreateWithoutBusesInput, AgenciaUncheckedCreateWithoutBusesInput>
    where?: AgenciaWhereInput
  }

  export type AgenciaUpdateToOneWithWhereWithoutBusesInput = {
    where?: AgenciaWhereInput
    data: XOR<AgenciaUpdateWithoutBusesInput, AgenciaUncheckedUpdateWithoutBusesInput>
  }

  export type AgenciaUpdateWithoutBusesInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAgenciaNestedInput
    choferes?: ChoferUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaUncheckedUpdateWithoutBusesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    choferes?: ChoferUncheckedUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUncheckedUpdateManyWithoutAgenciaNestedInput
  }

  export type AsientoUpsertWithWhereUniqueWithoutBusInput = {
    where: AsientoWhereUniqueInput
    update: XOR<AsientoUpdateWithoutBusInput, AsientoUncheckedUpdateWithoutBusInput>
    create: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput>
  }

  export type AsientoUpdateWithWhereUniqueWithoutBusInput = {
    where: AsientoWhereUniqueInput
    data: XOR<AsientoUpdateWithoutBusInput, AsientoUncheckedUpdateWithoutBusInput>
  }

  export type AsientoUpdateManyWithWhereWithoutBusInput = {
    where: AsientoScalarWhereInput
    data: XOR<AsientoUpdateManyMutationInput, AsientoUncheckedUpdateManyWithoutBusInput>
  }

  export type AsientoScalarWhereInput = {
    AND?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
    OR?: AsientoScalarWhereInput[]
    NOT?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
    id_asiento?: IntFilter<"Asiento"> | number
    numero?: StringFilter<"Asiento"> | string
    ubicacion?: StringFilter<"Asiento"> | string
    estado?: StringFilter<"Asiento"> | string
    id_bus?: IntFilter<"Asiento"> | number
  }

  export type ViajeUpsertWithWhereUniqueWithoutBusInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutBusInput, ViajeUncheckedUpdateWithoutBusInput>
    create: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutBusInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutBusInput, ViajeUncheckedUpdateWithoutBusInput>
  }

  export type ViajeUpdateManyWithWhereWithoutBusInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutBusInput>
  }

  export type ViajeScalarWhereInput = {
    AND?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    OR?: ViajeScalarWhereInput[]
    NOT?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    id_viaje?: IntFilter<"Viaje"> | number
    fecha_salida?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_programada?: DateTimeFilter<"Viaje"> | Date | string
    hora_salida_real?: DateTimeFilter<"Viaje"> | Date | string
    costo?: DecimalFilter<"Viaje"> | Decimal | DecimalJsLike | number | string
    id_bus?: IntFilter<"Viaje"> | number
    id_ruta?: IntFilter<"Viaje"> | number
    id_chofer?: IntFilter<"Viaje"> | number
    id_pago?: IntFilter<"Viaje"> | number
  }

  export type BusCreateWithoutAsientosInput = {
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutBusesInput
    viajes?: ViajeCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutAsientosInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    id_agencia: number
    viajes?: ViajeUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutAsientosInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
  }

  export type BusUpsertWithoutAsientosInput = {
    update: XOR<BusUpdateWithoutAsientosInput, BusUncheckedUpdateWithoutAsientosInput>
    create: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutAsientosInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutAsientosInput, BusUncheckedUpdateWithoutAsientosInput>
  }

  export type BusUpdateWithoutAsientosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutBusesNestedInput
    viajes?: ViajeUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutAsientosInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
    viajes?: ViajeUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateWithoutViajesInput = {
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutViajesInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
    id_agencia: number
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutViajesInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutViajesInput, BusUncheckedCreateWithoutViajesInput>
  }

  export type RutaCreateWithoutViajesInput = {
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
  }

  export type RutaUncheckedCreateWithoutViajesInput = {
    id_ruta?: number
    origen: string
    parada_intermedia: string
    destino: string
    distancia: string
    tiempo_estimado: string
    camino: string
  }

  export type RutaCreateOrConnectWithoutViajesInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutViajesInput, RutaUncheckedCreateWithoutViajesInput>
  }

  export type ChoferCreateWithoutViajesInput = {
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutChoferesInput
  }

  export type ChoferUncheckedCreateWithoutViajesInput = {
    id_chofer?: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
    id_agencia: number
  }

  export type ChoferCreateOrConnectWithoutViajesInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutViajesInput, ChoferUncheckedCreateWithoutViajesInput>
  }

  export type Configuracion_PagoCreateWithoutViajesInput = {
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    agencia: AgenciaCreateNestedOneWithoutConfiguracionesInput
  }

  export type Configuracion_PagoUncheckedCreateWithoutViajesInput = {
    id_pago?: number
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
    id_agencia: number
  }

  export type Configuracion_PagoCreateOrConnectWithoutViajesInput = {
    where: Configuracion_PagoWhereUniqueInput
    create: XOR<Configuracion_PagoCreateWithoutViajesInput, Configuracion_PagoUncheckedCreateWithoutViajesInput>
  }

  export type BusUpsertWithoutViajesInput = {
    update: XOR<BusUpdateWithoutViajesInput, BusUncheckedUpdateWithoutViajesInput>
    create: XOR<BusCreateWithoutViajesInput, BusUncheckedCreateWithoutViajesInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutViajesInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutViajesInput, BusUncheckedUpdateWithoutViajesInput>
  }

  export type BusUpdateWithoutViajesInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutViajesInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type RutaUpsertWithoutViajesInput = {
    update: XOR<RutaUpdateWithoutViajesInput, RutaUncheckedUpdateWithoutViajesInput>
    create: XOR<RutaCreateWithoutViajesInput, RutaUncheckedCreateWithoutViajesInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutViajesInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutViajesInput, RutaUncheckedUpdateWithoutViajesInput>
  }

  export type RutaUpdateWithoutViajesInput = {
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
  }

  export type RutaUncheckedUpdateWithoutViajesInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    origen?: StringFieldUpdateOperationsInput | string
    parada_intermedia?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    distancia?: StringFieldUpdateOperationsInput | string
    tiempo_estimado?: StringFieldUpdateOperationsInput | string
    camino?: StringFieldUpdateOperationsInput | string
  }

  export type ChoferUpsertWithoutViajesInput = {
    update: XOR<ChoferUpdateWithoutViajesInput, ChoferUncheckedUpdateWithoutViajesInput>
    create: XOR<ChoferCreateWithoutViajesInput, ChoferUncheckedCreateWithoutViajesInput>
    where?: ChoferWhereInput
  }

  export type ChoferUpdateToOneWithWhereWithoutViajesInput = {
    where?: ChoferWhereInput
    data: XOR<ChoferUpdateWithoutViajesInput, ChoferUncheckedUpdateWithoutViajesInput>
  }

  export type ChoferUpdateWithoutViajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutChoferesNestedInput
  }

  export type ChoferUncheckedUpdateWithoutViajesInput = {
    id_chofer?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
  }

  export type Configuracion_PagoUpsertWithoutViajesInput = {
    update: XOR<Configuracion_PagoUpdateWithoutViajesInput, Configuracion_PagoUncheckedUpdateWithoutViajesInput>
    create: XOR<Configuracion_PagoCreateWithoutViajesInput, Configuracion_PagoUncheckedCreateWithoutViajesInput>
    where?: Configuracion_PagoWhereInput
  }

  export type Configuracion_PagoUpdateToOneWithWhereWithoutViajesInput = {
    where?: Configuracion_PagoWhereInput
    data: XOR<Configuracion_PagoUpdateWithoutViajesInput, Configuracion_PagoUncheckedUpdateWithoutViajesInput>
  }

  export type Configuracion_PagoUpdateWithoutViajesInput = {
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    agencia?: AgenciaUpdateOneRequiredWithoutConfiguracionesNestedInput
  }

  export type Configuracion_PagoUncheckedUpdateWithoutViajesInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_agencia?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateWithoutRutaInput = {
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    bus: BusCreateNestedOneWithoutViajesInput
    chofer: ChoferCreateNestedOneWithoutViajesInput
    pago: Configuracion_PagoCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateWithoutRutaInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_chofer: number
    id_pago: number
  }

  export type ViajeCreateOrConnectWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput>
  }

  export type ViajeCreateManyRutaInputEnvelope = {
    data: ViajeCreateManyRutaInput | ViajeCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type ViajeUpsertWithWhereUniqueWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutRutaInput, ViajeUncheckedUpdateWithoutRutaInput>
    create: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutRutaInput, ViajeUncheckedUpdateWithoutRutaInput>
  }

  export type ViajeUpdateManyWithWhereWithoutRutaInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutRutaInput>
  }

  export type AgenciaCreateWithoutConfiguracionesInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutAgenciaInput
    buses?: BusCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUncheckedCreateWithoutConfiguracionesInput = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    buses?: BusUncheckedCreateNestedManyWithoutAgenciaInput
    choferes?: ChoferUncheckedCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaCreateOrConnectWithoutConfiguracionesInput = {
    where: AgenciaWhereUniqueInput
    create: XOR<AgenciaCreateWithoutConfiguracionesInput, AgenciaUncheckedCreateWithoutConfiguracionesInput>
  }

  export type ViajeCreateWithoutPagoInput = {
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    bus: BusCreateNestedOneWithoutViajesInput
    ruta: RutaCreateNestedOneWithoutViajesInput
    chofer: ChoferCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateWithoutPagoInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_chofer: number
  }

  export type ViajeCreateOrConnectWithoutPagoInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput>
  }

  export type ViajeCreateManyPagoInputEnvelope = {
    data: ViajeCreateManyPagoInput | ViajeCreateManyPagoInput[]
    skipDuplicates?: boolean
  }

  export type AgenciaUpsertWithoutConfiguracionesInput = {
    update: XOR<AgenciaUpdateWithoutConfiguracionesInput, AgenciaUncheckedUpdateWithoutConfiguracionesInput>
    create: XOR<AgenciaCreateWithoutConfiguracionesInput, AgenciaUncheckedCreateWithoutConfiguracionesInput>
    where?: AgenciaWhereInput
  }

  export type AgenciaUpdateToOneWithWhereWithoutConfiguracionesInput = {
    where?: AgenciaWhereInput
    data: XOR<AgenciaUpdateWithoutConfiguracionesInput, AgenciaUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type AgenciaUpdateWithoutConfiguracionesInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAgenciaNestedInput
    buses?: BusUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaUncheckedUpdateWithoutConfiguracionesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutAgenciaNestedInput
    choferes?: ChoferUncheckedUpdateManyWithoutAgenciaNestedInput
  }

  export type ViajeUpsertWithWhereUniqueWithoutPagoInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutPagoInput, ViajeUncheckedUpdateWithoutPagoInput>
    create: XOR<ViajeCreateWithoutPagoInput, ViajeUncheckedCreateWithoutPagoInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutPagoInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutPagoInput, ViajeUncheckedUpdateWithoutPagoInput>
  }

  export type ViajeUpdateManyWithWhereWithoutPagoInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutPagoInput>
  }

  export type AgenciaCreateWithoutChoferesInput = {
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutAgenciaInput
    buses?: BusCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaUncheckedCreateWithoutChoferesInput = {
    id_usuario: number
    nombre_agencia: string
    tipo_sociedad: string
    NIT: string
    departamento: string
    ciudad: string
    direccion: string
    estado: string
    buses?: BusUncheckedCreateNestedManyWithoutAgenciaInput
    configuraciones?: Configuracion_PagoUncheckedCreateNestedManyWithoutAgenciaInput
  }

  export type AgenciaCreateOrConnectWithoutChoferesInput = {
    where: AgenciaWhereUniqueInput
    create: XOR<AgenciaCreateWithoutChoferesInput, AgenciaUncheckedCreateWithoutChoferesInput>
  }

  export type ViajeCreateWithoutChoferInput = {
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    bus: BusCreateNestedOneWithoutViajesInput
    ruta: RutaCreateNestedOneWithoutViajesInput
    pago: Configuracion_PagoCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateWithoutChoferInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_pago: number
  }

  export type ViajeCreateOrConnectWithoutChoferInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput>
  }

  export type ViajeCreateManyChoferInputEnvelope = {
    data: ViajeCreateManyChoferInput | ViajeCreateManyChoferInput[]
    skipDuplicates?: boolean
  }

  export type AgenciaUpsertWithoutChoferesInput = {
    update: XOR<AgenciaUpdateWithoutChoferesInput, AgenciaUncheckedUpdateWithoutChoferesInput>
    create: XOR<AgenciaCreateWithoutChoferesInput, AgenciaUncheckedCreateWithoutChoferesInput>
    where?: AgenciaWhereInput
  }

  export type AgenciaUpdateToOneWithWhereWithoutChoferesInput = {
    where?: AgenciaWhereInput
    data: XOR<AgenciaUpdateWithoutChoferesInput, AgenciaUncheckedUpdateWithoutChoferesInput>
  }

  export type AgenciaUpdateWithoutChoferesInput = {
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAgenciaNestedInput
    buses?: BusUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUpdateManyWithoutAgenciaNestedInput
  }

  export type AgenciaUncheckedUpdateWithoutChoferesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_agencia?: StringFieldUpdateOperationsInput | string
    tipo_sociedad?: StringFieldUpdateOperationsInput | string
    NIT?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutAgenciaNestedInput
    configuraciones?: Configuracion_PagoUncheckedUpdateManyWithoutAgenciaNestedInput
  }

  export type ViajeUpsertWithWhereUniqueWithoutChoferInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutChoferInput, ViajeUncheckedUpdateWithoutChoferInput>
    create: XOR<ViajeCreateWithoutChoferInput, ViajeUncheckedCreateWithoutChoferInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutChoferInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutChoferInput, ViajeUncheckedUpdateWithoutChoferInput>
  }

  export type ViajeUpdateManyWithWhereWithoutChoferInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutChoferInput>
  }

  export type BusCreateManyAgenciaInput = {
    id_bus?: number
    placa: string
    marca: string
    modelo: string
    año_modelo: number
    tipo_bus: string
    estado: string
  }

  export type ChoferCreateManyAgenciaInput = {
    id_chofer?: number
    nombre: string
    apellido: string
    carnet_identidad: string
    numero_celular: string
    categoria_licencia: string
    direccion_contacto: string
    estado: string
  }

  export type Configuracion_PagoCreateManyAgenciaInput = {
    id_pago?: number
    ruta_codigo_qr: string
    fecha_creacion: Date | string
    estado: string
  }

  export type BusUpdateWithoutAgenciaInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    viajes?: ViajeUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutAgenciaInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutAgenciaInput = {
    id_bus?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    año_modelo?: IntFieldUpdateOperationsInput | number
    tipo_bus?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ChoferUpdateWithoutAgenciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateWithoutAgenciaInput = {
    id_chofer?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateManyWithoutAgenciaInput = {
    id_chofer?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    carnet_identidad?: StringFieldUpdateOperationsInput | string
    numero_celular?: StringFieldUpdateOperationsInput | string
    categoria_licencia?: StringFieldUpdateOperationsInput | string
    direccion_contacto?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type Configuracion_PagoUpdateWithoutAgenciaInput = {
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUpdateManyWithoutPagoNestedInput
  }

  export type Configuracion_PagoUncheckedUpdateWithoutAgenciaInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    viajes?: ViajeUncheckedUpdateManyWithoutPagoNestedInput
  }

  export type Configuracion_PagoUncheckedUpdateManyWithoutAgenciaInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    ruta_codigo_qr?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsientoCreateManyBusInput = {
    id_asiento?: number
    numero: string
    ubicacion: string
    estado: string
  }

  export type ViajeCreateManyBusInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_ruta: number
    id_chofer: number
    id_pago: number
  }

  export type AsientoUpdateWithoutBusInput = {
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsientoUncheckedUpdateWithoutBusInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsientoUncheckedUpdateManyWithoutBusInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ViajeUpdateWithoutBusInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ruta?: RutaUpdateOneRequiredWithoutViajesNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutViajesNestedInput
    pago?: Configuracion_PagoUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateWithoutBusInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeUncheckedUpdateManyWithoutBusInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateManyRutaInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_chofer: number
    id_pago: number
  }

  export type ViajeUpdateWithoutRutaInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus?: BusUpdateOneRequiredWithoutViajesNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutViajesNestedInput
    pago?: Configuracion_PagoUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateWithoutRutaInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeUncheckedUpdateManyWithoutRutaInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateManyPagoInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_chofer: number
  }

  export type ViajeUpdateWithoutPagoInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus?: BusUpdateOneRequiredWithoutViajesNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajesNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateWithoutPagoInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeUncheckedUpdateManyWithoutPagoInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_chofer?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateManyChoferInput = {
    id_viaje?: number
    fecha_salida: Date | string
    hora_salida_programada: Date | string
    hora_salida_real: Date | string
    costo: Decimal | DecimalJsLike | number | string
    id_bus: number
    id_ruta: number
    id_pago: number
  }

  export type ViajeUpdateWithoutChoferInput = {
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus?: BusUpdateOneRequiredWithoutViajesNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajesNestedInput
    pago?: Configuracion_PagoUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateWithoutChoferInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeUncheckedUpdateManyWithoutChoferInput = {
    id_viaje?: IntFieldUpdateOperationsInput | number
    fecha_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida_real?: DateTimeFieldUpdateOperationsInput | Date | string
    costo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_bus?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_pago?: IntFieldUpdateOperationsInput | number
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