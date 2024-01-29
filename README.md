# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Как запускать
1. Нужно установить зависимости в основной папке и в папке mock
2. Затем в папке mock нужно запустить index.js. Это будет апи на localhost:3500
3. После этого npm run start в основной папке, и все должно работать

## Комментарии по коду
1. Импорты лучше как-то сортировать. Допустим сначала сделать импорты из либ, а потом из уже импорты из своих модулей.
2. margin'ы лучше делать через rem. Это позволяет устанавливать границы, которые от устройства к устройству сильно не меняются, в отличии от %, которые могут сильно менять размер margin'а в зависимости от ширины устройства. Также не нужно смотреть на размеры родителя.
3. Важное замечание. Лучше использовать `=== (!==)` вместо `== (!=)`, чтобы избежать любимых проблем js'а в операциях сравнения.
4. Нужно чистить код, удаляй не используемы импорты, переменные, аргументы, console.log'и и тд.
5. Советую использовать форматировщик. Стандартный выбор для react это prettier. Я добавил конфиг для него (`.prettierrc`), так что можешь посмотреть.
6. Вообще для апи лучше сделать отдельный слой, хоть здесь он и не нужен из-за размера (рекомендация на будущее проще говоря). Стоит выделить отдельный singleton с axiosInstance под капотом и выделить отдельные ошибки как часть интерфейса. А уже в loader'ах просто делать вызовы.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
