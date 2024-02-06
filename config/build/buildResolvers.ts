import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = (buildOptions: BuildOptions): ResolveOptions => {
    return  {
        extensions: ['.ts', '.tsx','.js'],
        mainFiles: ['index'],
        alias: {
            '@': buildOptions.paths.src,
        }
    }
}