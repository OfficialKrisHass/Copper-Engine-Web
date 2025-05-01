const GetEnvVariable = (variable: string): string => {

    const ret = process.env[variable];
    if (ret) return ret;

    throw new Error(`Could not find environment variable: ${variable}`);
    
}

type EnvConfig = {
    RevalidateTime: number
}

export const config: EnvConfig = {
    RevalidateTime: Number(GetEnvVariable("REVALIDATE_TIME")),
}
