// install.js

/**
 * @function - 自动注册全局组件，组件写好后自动注册
 * @param {string} fileName - 文件目录，会根据这个路径进行查找
 * @param {bool} isfindSon - 是否查找子集
 * @param {reg} searchRule - 查找规则
 */
const requireComponent = require.context('./components/common', true, /\.vue$/)
const install = Vue => {
    // 如果组件被注册就返回,没有就注册
    if (install.installed) return
    install.installed = true
    requireComponent.keys().forEach(filename => {
        // filename 每个遍历出来的文件
        // 第i个组件
        const config = requireComponent(filename) // 组件名
        const componentName = config.default.name // 循环注册组件
        Vue.component(componentName, config.default || config)
    })
}

export default {
    install
}
