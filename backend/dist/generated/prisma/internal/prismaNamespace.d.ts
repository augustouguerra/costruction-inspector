import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly FcmToken: "FcmToken";
    readonly Project: "Project";
    readonly ProjectMember: "ProjectMember";
    readonly Floor: "Floor";
    readonly Apartment: "Apartment";
    readonly Room: "Room";
    readonly Issue: "Issue";
    readonly IssuePhoto: "IssuePhoto";
    readonly IssueComment: "IssueComment";
    readonly NotificationLog: "NotificationLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "fcmToken" | "project" | "projectMember" | "floor" | "apartment" | "room" | "issue" | "issuePhoto" | "issueComment" | "notificationLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        FcmToken: {
            payload: Prisma.$FcmTokenPayload<ExtArgs>;
            fields: Prisma.FcmTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FcmTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FcmTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                findFirst: {
                    args: Prisma.FcmTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FcmTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                findMany: {
                    args: Prisma.FcmTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>[];
                };
                create: {
                    args: Prisma.FcmTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                createMany: {
                    args: Prisma.FcmTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FcmTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>[];
                };
                delete: {
                    args: Prisma.FcmTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                update: {
                    args: Prisma.FcmTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.FcmTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FcmTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FcmTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>[];
                };
                upsert: {
                    args: Prisma.FcmTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FcmTokenPayload>;
                };
                aggregate: {
                    args: Prisma.FcmTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFcmToken>;
                };
                groupBy: {
                    args: Prisma.FcmTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FcmTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FcmTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FcmTokenCountAggregateOutputType> | number;
                };
            };
        };
        Project: {
            payload: Prisma.$ProjectPayload<ExtArgs>;
            fields: Prisma.ProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findMany: {
                    args: Prisma.ProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                create: {
                    args: Prisma.ProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                update: {
                    args: Prisma.ProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProject>;
                };
                groupBy: {
                    args: Prisma.ProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCountAggregateOutputType> | number;
                };
            };
        };
        ProjectMember: {
            payload: Prisma.$ProjectMemberPayload<ExtArgs>;
            fields: Prisma.ProjectMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                findMany: {
                    args: Prisma.ProjectMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
                };
                create: {
                    args: Prisma.ProjectMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                createMany: {
                    args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
                };
                delete: {
                    args: Prisma.ProjectMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                update: {
                    args: Prisma.ProjectMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectMember>;
                };
                groupBy: {
                    args: Prisma.ProjectMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectMemberCountAggregateOutputType> | number;
                };
            };
        };
        Floor: {
            payload: Prisma.$FloorPayload<ExtArgs>;
            fields: Prisma.FloorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FloorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                findFirst: {
                    args: Prisma.FloorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                findMany: {
                    args: Prisma.FloorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>[];
                };
                create: {
                    args: Prisma.FloorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                createMany: {
                    args: Prisma.FloorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>[];
                };
                delete: {
                    args: Prisma.FloorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                update: {
                    args: Prisma.FloorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                deleteMany: {
                    args: Prisma.FloorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FloorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>[];
                };
                upsert: {
                    args: Prisma.FloorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FloorPayload>;
                };
                aggregate: {
                    args: Prisma.FloorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFloor>;
                };
                groupBy: {
                    args: Prisma.FloorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FloorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FloorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FloorCountAggregateOutputType> | number;
                };
            };
        };
        Apartment: {
            payload: Prisma.$ApartmentPayload<ExtArgs>;
            fields: Prisma.ApartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                findFirst: {
                    args: Prisma.ApartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                findMany: {
                    args: Prisma.ApartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>[];
                };
                create: {
                    args: Prisma.ApartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                createMany: {
                    args: Prisma.ApartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApartmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>[];
                };
                delete: {
                    args: Prisma.ApartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                update: {
                    args: Prisma.ApartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.ApartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApartmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>[];
                };
                upsert: {
                    args: Prisma.ApartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApartmentPayload>;
                };
                aggregate: {
                    args: Prisma.ApartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApartment>;
                };
                groupBy: {
                    args: Prisma.ApartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApartmentCountAggregateOutputType> | number;
                };
            };
        };
        Room: {
            payload: Prisma.$RoomPayload<ExtArgs>;
            fields: Prisma.RoomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                findFirst: {
                    args: Prisma.RoomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                findMany: {
                    args: Prisma.RoomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                create: {
                    args: Prisma.RoomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                createMany: {
                    args: Prisma.RoomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                delete: {
                    args: Prisma.RoomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                update: {
                    args: Prisma.RoomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                deleteMany: {
                    args: Prisma.RoomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                upsert: {
                    args: Prisma.RoomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                aggregate: {
                    args: Prisma.RoomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoom>;
                };
                groupBy: {
                    args: Prisma.RoomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoomGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoomCountAggregateOutputType> | number;
                };
            };
        };
        Issue: {
            payload: Prisma.$IssuePayload<ExtArgs>;
            fields: Prisma.IssueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IssueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                findFirst: {
                    args: Prisma.IssueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                findMany: {
                    args: Prisma.IssueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>[];
                };
                create: {
                    args: Prisma.IssueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                createMany: {
                    args: Prisma.IssueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>[];
                };
                delete: {
                    args: Prisma.IssueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                update: {
                    args: Prisma.IssueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                deleteMany: {
                    args: Prisma.IssueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IssueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>[];
                };
                upsert: {
                    args: Prisma.IssueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePayload>;
                };
                aggregate: {
                    args: Prisma.IssueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIssue>;
                };
                groupBy: {
                    args: Prisma.IssueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IssueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssueCountAggregateOutputType> | number;
                };
            };
        };
        IssuePhoto: {
            payload: Prisma.$IssuePhotoPayload<ExtArgs>;
            fields: Prisma.IssuePhotoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IssuePhotoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IssuePhotoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                findFirst: {
                    args: Prisma.IssuePhotoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IssuePhotoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                findMany: {
                    args: Prisma.IssuePhotoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>[];
                };
                create: {
                    args: Prisma.IssuePhotoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                createMany: {
                    args: Prisma.IssuePhotoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IssuePhotoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>[];
                };
                delete: {
                    args: Prisma.IssuePhotoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                update: {
                    args: Prisma.IssuePhotoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                deleteMany: {
                    args: Prisma.IssuePhotoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IssuePhotoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IssuePhotoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>[];
                };
                upsert: {
                    args: Prisma.IssuePhotoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssuePhotoPayload>;
                };
                aggregate: {
                    args: Prisma.IssuePhotoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIssuePhoto>;
                };
                groupBy: {
                    args: Prisma.IssuePhotoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssuePhotoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IssuePhotoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssuePhotoCountAggregateOutputType> | number;
                };
            };
        };
        IssueComment: {
            payload: Prisma.$IssueCommentPayload<ExtArgs>;
            fields: Prisma.IssueCommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IssueCommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IssueCommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                findFirst: {
                    args: Prisma.IssueCommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IssueCommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                findMany: {
                    args: Prisma.IssueCommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>[];
                };
                create: {
                    args: Prisma.IssueCommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                createMany: {
                    args: Prisma.IssueCommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IssueCommentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>[];
                };
                delete: {
                    args: Prisma.IssueCommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                update: {
                    args: Prisma.IssueCommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                deleteMany: {
                    args: Prisma.IssueCommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IssueCommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IssueCommentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>[];
                };
                upsert: {
                    args: Prisma.IssueCommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IssueCommentPayload>;
                };
                aggregate: {
                    args: Prisma.IssueCommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIssueComment>;
                };
                groupBy: {
                    args: Prisma.IssueCommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssueCommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IssueCommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IssueCommentCountAggregateOutputType> | number;
                };
            };
        };
        NotificationLog: {
            payload: Prisma.$NotificationLogPayload<ExtArgs>;
            fields: Prisma.NotificationLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                findMany: {
                    args: Prisma.NotificationLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
                };
                create: {
                    args: Prisma.NotificationLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                createMany: {
                    args: Prisma.NotificationLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
                };
                delete: {
                    args: Prisma.NotificationLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                update: {
                    args: Prisma.NotificationLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationLog>;
                };
                groupBy: {
                    args: Prisma.NotificationLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly trade: "trade";
    readonly avatarUrl: "avatarUrl";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FcmTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly platform: "platform";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FcmTokenScalarFieldEnum = (typeof FcmTokenScalarFieldEnum)[keyof typeof FcmTokenScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly description: "description";
    readonly ownerId: "ownerId";
    readonly coverImageUrl: "coverImageUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectMemberScalarFieldEnum: {
    readonly projectId: "projectId";
    readonly userId: "userId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum];
export declare const FloorScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly number: "number";
    readonly label: "label";
    readonly createdAt: "createdAt";
};
export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum];
export declare const ApartmentScalarFieldEnum: {
    readonly id: "id";
    readonly floorId: "floorId";
    readonly identifier: "identifier";
    readonly createdAt: "createdAt";
};
export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum];
export declare const RoomScalarFieldEnum: {
    readonly id: "id";
    readonly apartmentId: "apartmentId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum];
export declare const IssueScalarFieldEnum: {
    readonly id: "id";
    readonly roomId: "roomId";
    readonly createdBy: "createdBy";
    readonly assignedTrade: "assignedTrade";
    readonly assignedTo: "assignedTo";
    readonly status: "status";
    readonly title: "title";
    readonly description: "description";
    readonly audioFileUrl: "audioFileUrl";
    readonly transcriptionRaw: "transcriptionRaw";
    readonly detectionConfidence: "detectionConfidence";
    readonly priority: "priority";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum];
export declare const IssuePhotoScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly storagePath: "storagePath";
    readonly uploadedBy: "uploadedBy";
    readonly createdAt: "createdAt";
};
export type IssuePhotoScalarFieldEnum = (typeof IssuePhotoScalarFieldEnum)[keyof typeof IssuePhotoScalarFieldEnum];
export declare const IssueCommentScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly authorId: "authorId";
    readonly body: "body";
    readonly createdAt: "createdAt";
};
export type IssueCommentScalarFieldEnum = (typeof IssueCommentScalarFieldEnum)[keyof typeof IssueCommentScalarFieldEnum];
export declare const NotificationLogScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly recipientId: "recipientId";
    readonly fcmToken: "fcmToken";
    readonly title: "title";
    readonly body: "body";
    readonly sentAt: "sentAt";
    readonly status: "status";
};
export type NotificationLogScalarFieldEnum = (typeof NotificationLogScalarFieldEnum)[keyof typeof NotificationLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType'>;
export type ListEnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus'>;
export type ListEnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    fcmToken?: Prisma.FcmTokenOmit;
    project?: Prisma.ProjectOmit;
    projectMember?: Prisma.ProjectMemberOmit;
    floor?: Prisma.FloorOmit;
    apartment?: Prisma.ApartmentOmit;
    room?: Prisma.RoomOmit;
    issue?: Prisma.IssueOmit;
    issuePhoto?: Prisma.IssuePhotoOmit;
    issueComment?: Prisma.IssueCommentOmit;
    notificationLog?: Prisma.NotificationLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
