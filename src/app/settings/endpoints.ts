export class Endpoints {
    public static get Api() { return 'http://localhost:50126/api'; }
    public static get SignUp() { return `${this.Api}/Sing-up`; }
    public static get Login() { return `${this.Api}/Login`; }
}
