import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): Array<webpack.RuleSetRule> => {
    const { isDev} = options
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]',
                    },
                }
            },
            "sass-loader",
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    }

    return [
        tsLoader,
        sassLoader,
        svgLoader,
        fileLoader,
    ]
}