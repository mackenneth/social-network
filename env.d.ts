import {BuildMode} from "./config/build/types/config";

declare namespace NodeJS {
    interface ProcessEnv {
        APP_ENV: BuildMode
        DEV_SERVER_PORT: number
    }
}