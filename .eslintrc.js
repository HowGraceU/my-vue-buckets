module.exports = {
	root: true,
	parser: 'vue-eslint-parser', //支持es6的babel插件
	parserOptions: {
		parser: "babel-eslint",
		sourceType: 'module' //指定源的来源，'script' or 'module'
	},
	env: { //预设的全局变量
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended'
	], //使用eslint推荐的验证信息
	// required to lint *.vue files
	plugins: [ //第三方插件
		'vue',
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// off:0 warn:1 error:2
	//it is base on https://github.com/vuejs/eslint-config-vue
	'rules': {
		// 定义对象的set存取器属性时，强制定义get
		'accessor-pairs': 2,
		//=>的前/后括号
		'arrow-spacing': [2, {
			'before': true,
			'after': true
		}],
		'block-spacing': [2, 'always'],
		// if while function 后面的{必须与if在同一行
		'brace-style': [2, '1tbs', {
			'allowSingleLine': true
		}],
		//强制驼峰法命名
		'camelcase': [0, {
			'properties': 'always'
		}],
		//对象字面量项尾不能有逗号
		'comma-dangle': [2, 'never'],
		//逗号前后的空格
		'comma-spacing': [2, {
			'before': false,
			'after': true
		}],
		//逗号风格，换行时在行首还是行尾
		'comma-style': [2, 'last'],
		//非派生类不能调用super，派生类必须调用super
		'constructor-super': 2,
		//在多行语句中 必须使用 if else else if for while中的大括号
		'curly': [2, 'multi-line'],
		// 强制object.key 中 . 的位置，参数:  
		//      property，'.'号应与属性在同一行  
		//      object, '.' 号应与对象名在同一行  
		'dot-location': [2, 'property'],
		// 文件末尾强制换行 
		'eol-last': 2,
		//必须使用全等,null和undefined例外
		'eqeqeq': [2, 'allow-null'],
		//生成器函数*的前后空格
		'generator-star-spacing': [2, {
			'before': true,
			'after': true
		}],
		//缩进风格 TAB 
		'indent': [2, "tab", {
			'SwitchCase': 1
		}],
		"vue/html-indent": [2, "tab"],
		//对象字面量中冒号的前后空格
		'key-spacing': [2, {
			'beforeColon': false,
			'afterColon': true
		}],
		//确保字符前后的空格一致性
		'keyword-spacing': [2, {
			'before': true,
			'after': true
		}],
		//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		'new-cap': [2, {
			'newIsCap': true,
			'capIsNew': false
		}],
		//new时必须加小括号
		'new-parens': 2,
		//禁止使用数组构造器
		'no-array-constructor': 2,
		//禁止使用arguments.caller或arguments.callee
		'no-caller': 2,
		//console时给出警告,仅能使用在调试环境，不能用于生产环境
		'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
		//禁止给类赋值
		'no-class-assign': 2,
		//禁止在条件表达式中使用赋值语句
		'no-cond-assign': 2,
		//禁止修改const声明的变量
		'no-const-assign': 2,
		//禁止在正则表达式中使用控制字符
		'no-control-regex': 0,
		//不能对var声明的变量使用delete操作符
		'no-delete-var': 2,
		//函数参数不能重复
		'no-dupe-args': 2,
		//禁止类成员中出现重复的名称
		'no-dupe-class-members': 2,
		//禁止对象中存在同名Key
		'no-dupe-keys': 2,
		//switch中的case标签不能重复
		'no-duplicate-case': 2,
		//正则表达式中的[]内容不能为空
		'no-empty-character-class': 2,
		//使用eval时给出警告
		'no-eval': 1,
		//禁止使用隐式eval
		'no-implied-eval': 2,
		//禁止给catch语句中的异常参数赋值
		'no-ex-assign': 2,
		//警告扩展native对象
		'no-extend-native': 0,
		//禁止不必要的函数绑定
		'no-extra-bind': 2,
		//禁止不必要的bool转换
		'no-extra-boolean-cast': 2,
		//禁止非必要的括号
		'no-extra-parens': [2, 'functions'],
		//禁止switch穿透
		'no-fallthrough': 2,
		//禁止省略浮点数中的0 例如 .5 3.
		'no-floating-decimal': 2,
		//禁止重复的函数声明
		'no-func-assign': 2,
		//禁止在块语句中使用声明（变量或函数）
		'no-inner-declarations': 'off',
		//禁止无效的正则表达式
		'no-invalid-regexp': 2,
		//不能有不规则的空格
		'no-irregular-whitespace': 2,
		//禁止使用__iterator__ 属性
		'no-iterator': 2,
		//label名不能与var声明的变量名相同
		'no-label-var': 2,
		//禁止标签声明
		'no-labels': [2, {
			'allowLoop': false,
			'allowSwitch': false
		}],
		//禁止不必要的嵌套块
		'no-lone-blocks': 2,
		//禁止混用tab和空格
		'no-mixed-spaces-and-tabs': 2,
		//不能用多余的空格
		'no-multi-spaces': 2,
		//字符串不能用\换行
		'no-multi-str': 2,
		//空行最多不能超过1行
		'no-multiple-empty-lines': [2, {
			'max': 1
		}],
		//不能重写native对象
		'no-native-reassign': 2,
		//in 操作符的左边不能有!
		'no-negated-in-lhs': 2,
		//禁止使用new Object()
		'no-new-object': 2,
		//禁止使用new require
		'no-new-require': 2,
		//禁止使用new创建包装实例，new String new Boolean new Number
		'no-new-wrappers': 2,
		//函数调用内置的全局对象，比如Math() JSON()，给出警告，必须作为类来调用
		'no-obj-calls': 1,
		//禁止使用八进制数字
		'no-octal': 2,
		//禁止使用八进制转义序列
		'no-octal-escape': 2,
		//node中不能使用__dirname或__filename做路径拼接
		'no-path-concat': 2,
		//禁止使用__proto__属性
		'no-proto': 2,
		//禁止重复声明变量
		'no-redeclare': 2,
		//禁止在正则表达式字面量中使用多个空格 /foo bar/
		'no-regex-spaces': 2,
		//return 语句中不能有赋值表达式
		'no-return-assign': [2, 'except-parens'],
		//不能比较自身
		'no-self-compare': 2,
		//禁止使用逗号运算符
		'no-sequences': 2,
		//严格模式中规定的限制标识符不能作为声明时的变量名使用
		'no-shadow-restricted-names': 2,
		//函数调用时 函数名与()之间不能有空格
		'no-spaced-func': 2,
		//禁止稀疏数组， [1,,2]
		'no-sparse-arrays': 2,
		//在调用super()之前不能使用this或super
		'no-this-before-super': 2,
		//禁止抛出字面量错误 throw "error"
		'no-throw-literal': 2,
		//一行结束后面不要有空格
		'no-trailing-spaces': 2,
		//不能有未定义的变量
		'no-undef': 2,
		//变量初始化时不能直接给它赋值为undefined
		'no-undef-init': 2,
		//避免多行表达式
		'no-unexpected-multiline': 2,
		//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
		'no-unneeded-ternary': [2, {
			'defaultAssignment': false
		}],
		//不能有无法执行的代码
		'no-unreachable': 2,
		//不能有声明后未被使用的变量或参数
		'no-unused-vars': [1, {
			'vars': 'all',
			'args': 'none'
		}],
		//禁止不必要的call和apply
		'no-useless-call': 2,
		//允许转义
		'no-useless-escape': 0,
		//禁用with
		'no-with': 2,
		//禁止用逗号连续声明
		'one-var': [2, {
			'initialized': 'never'
		}],
		//换行时运算符在行尾还是行首
		'operator-linebreak': [2, 'after', {
			'overrides': {
				'?': 'before',
				':': 'before'
			}
		}],
		//块语句内行首行尾是否要空行
		'padded-blocks': [2, 'never'],
		//引号类型 `` "" ''
		'quotes': [2, 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		//语句结尾不带分号
		'semi': [2, 'always'],
		//分号前后空格
		'semi-spacing': [2, {
			'before': false,
			'after': true
		}],
		//不以新行开始的块{前面要不要有空格
		'space-before-blocks': [2, 'always'],
		//函数定义时括号前面要不要有空格
		'space-before-function-paren': [2, 'never'],
		//小括号里面要不要有空格
		'space-in-parens': [2, 'never'],
		//中缀操作符周围要不要有空格
		'space-infix-ops': 2,
		//一元运算符的前/后要不要加空格
		'space-unary-ops': [2, {
			'words': true,
			'nonwords': false
		}],
		//注释风格不要有空格
		'spaced-comment': [2, 'always', {
			'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
		}],
		//禁止比较时使用NaN，只能用isNaN()
		'use-isnan': 2,
		//必须使用合法的typeof的值
		'valid-typeof': 2,
		//立即执行函数表达式的小括号风格
		'wrap-iife': [2, 'any'],
		//首选const
		// 'prefer-const': 2,
		//禁止使用debugger
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		//大括号内不允许不必要的空格
		'object-curly-spacing': [2, 'always', {
			objectsInObjects: false
		}],
		// 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
		'array-bracket-spacing': [2, 'never']
	},

	// js.js中的全局变量
	globals: {
		'$': 'writable',
		'simplePromise': 'writable',
		'liveList': 'writable',
		'recommendList': 'writable',
		'recordList': 'writable',
		'initNavPage': 'writable',
		'recordUtil': 'writable',
		'layer': 'writable',
		'home': 'writable',
		'CONFIG': 'writable',
		'commonUtil': 'writable',
		'showMessage': 'writable',
		'adminid': 'writable',
		'getQueryString': 'writable',
		'MathRand': 'writable',
		'editVideo': 'writable',
		'recordEdit': 'writable'
	}
}