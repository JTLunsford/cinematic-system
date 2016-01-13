declare module "randopeep" {

  interface Options {
    origin? :string;
    gender? : string;
    last?:boolean;
    justLast?: boolean;
    prefix?: boolean;
    returnData?: boolean;
  }

  interface Randopeep {
    name(opts?:Options, cnt?:number = 1): string;
    job(cnt?:number = 1): string;
    invention(cnt?:number = 1): string;
  }

  var randopeep: Randopeep;
  export = randopeep;
}
