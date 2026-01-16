declare module 'fs' {
  export const promises: {
    readFile(
      path: string,
      options: { encoding: string }
    ): Promise<string>;
  };
}

declare module 'path' {
  export function join(...paths: string[]): string;
}

declare const process: {
  env: Record<string, string | undefined>;
};

declare const __dirname: string;
