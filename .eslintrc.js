// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "quotes": [
      "error",
      "single"
    ], //字符串必须使用单引号
    "semi": [2, "always"], //语句强制分号结尾
    "indent": [2, 4], //缩进风格
    "eqeqeq": 2, //必须使用全等
    "eol-last": 0, //文件单一的换行符结束
    "curly": [2, "all"], //必须使用if(){} 中的{}
    "camelcase": 2, //强制驼峰命名
    "consistent-this": [2, "that"], //this 别名
    "no-unused-vars": [2], //不能声明后来未被使用的变量
    "no-alert": 0,//禁止使用alert confirm 
    "no-console": "off"
  }
}
