import { HydratedDocument, Types } from 'mongoose';
export type UserType = HydratedDocument<User>;
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    courses: Types.ObjectId[];
    image?: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, any, any, User>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<number, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    firstName?: import("mongoose").SchemaDefinitionProperty<string, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    lastName?: import("mongoose").SchemaDefinitionProperty<string, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    age?: import("mongoose").SchemaDefinitionProperty<number, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    courses?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    image?: import("mongoose").SchemaDefinitionProperty<string | undefined, User, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, User>;
