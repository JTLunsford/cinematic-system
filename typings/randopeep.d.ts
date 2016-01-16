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
    name(opts?:Options, cnt?:number): string;
    job(cnt?:number): string;
    invention(cnt?:number): string;
  }

  var randopeep: Randopeep;
  export = randopeep;
}
