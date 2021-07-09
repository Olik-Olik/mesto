
//    entry: {main: './src/pages/index.js'},
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин

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
                }
            ]
        },
       // который будет каждый раз при сборке проекта удалять содержимое папки dist.
        plugins: [ // это класс, с помощью которого можно конструировать объекты
            new HtmlWebpackPlugin({
                template: './src/index.html' // путь к файлу index.html
            }),
            new CleanWebpackPlugin(), // использовали плагин
        ] // добавьте массив
    };

