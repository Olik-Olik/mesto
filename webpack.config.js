
//    entry: {main: './src/pages/index.js'},
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин

// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
      //  entry: { main: './src/index.js' },
        entry: {main: './src/pages/index.js'},
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: ''
        },
        mode: 'development',
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            compress: true,
            port: 8080,
            open: true
        },
        module: {
            rules: [ // rules — это массив правил
                // добавим в него объект правил для бабеля
                {
                    // регулярное выражение, которое ищет все js файлы
                    test: /\.js$/,
                    // при обработке этих файлов нужно использовать babel-loader
                    use: 'babel-loader',
                    // исключает папку node_modules, файлы в ней обрабатывать не нужно
                    exclude: /node_modules/
                },
                // добавили правило для обработки файлов
                {
                    // регулярное выражение, которое ищет все файлы с такими расширениями
                    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                    type: 'asset/resource'
                },
                {
                    // применять это правило только к CSS-файлам
                    test: /\.css$/,
                    // при обработке этих файлов нужно использовать
                    // MiniCssExtractPlugin.loader и css-loader
                    use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                        //Если вы используете директиву @import в css-файлах,
                        // после подключения postcss-loader, нужно изменить то, как подключается css-loader
                    },
                        // Добавьте postcss-loader
                        'postcss-loader'
                    ]
                }

            ]
        },
       // который будет каждый раз при сборке проекта удалять содержимое папки dist.
        plugins: [ // это класс, с помощью которого можно конструировать объекты
            new HtmlWebpackPlugin({
                template: './src/index.html' // путь к файлу index.html
            }),
            new CleanWebpackPlugin(), // использовали плагин
            new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
        ] // добавьте массив
    };

