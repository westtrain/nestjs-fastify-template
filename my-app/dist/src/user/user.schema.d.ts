import { Schema, Document } from 'mongoose';
export interface User extends Document {
    name: string;
    email: string;
    password: string;
}
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    email: string;
    password: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    email: string;
    password: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
