import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    id: bigint;
    name: string;
    email: string;
    hasResponse: boolean;
    message: string;
    phone?: string;
}
export interface backendInterface {
    getSubmittedForms(): Promise<Array<ContactForm>>;
    submitContactForm(name: string, email: string, phone: string | null, message: string): Promise<void>;
}
