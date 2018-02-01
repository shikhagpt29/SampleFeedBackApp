export interface Icomment {
    value:string;
    timeStamp:string;
    Likes:number;
    Reply: Array<Ireply>;
}

export interface Ireply {
    value:string;
    timeStamp:string;
}

