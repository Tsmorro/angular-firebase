export class Cert {
    amssme: string;
    atlsme: string;
    Cert_Titles: string;
    Cert_Updated: string;
    Links: string;
    Module: string;
    Quiz_Links: string;
    Supervisor_Manager: string;
    Topic: string;
    Updated_to_v9: string;
}

export class CertType{
    name: string;
    certs: Cert[];
}

export class Path {
    name: string;
    img: string;
    certTypes: CertType[];
}