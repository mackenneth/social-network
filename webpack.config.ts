import path from 'path'
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import dotenv from 'dotenv'
dotenv.config()

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = process.env.APP_ENV as BuildMode

const isDev = mode === 'development'
const port = Number(process.env.DEV_SERVER_PORT) || 3000

const config: webpack.Configuration = buildWebpackConfig({paths, mode, isDev, port})

export default config