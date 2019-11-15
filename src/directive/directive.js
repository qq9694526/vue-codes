
import Vue from 'vue'

// input自动聚焦
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// input防抖
Vue.directive('debounce', {
  bind: (el, binding) => {
    let timer = null
    el.addEventListener("input", () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        binding.value()
      }, binding.arg || 500)
    })
  }
})

// input过滤金额
Vue.directive('onlyMoney', {
  bind: (el) => {
    el.addEventListener("keyup", (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue
        .replace(/[^\d.]/g,"") //清除"数字"和"."以外的字符
        .replace(/^\./g,"") //验证第一个字符是数字
        .replace(/\.{2,}/g,".") //只保留第一个, 清除多余的
        .replace(".","$#$").replace(/\./g,"").replace("$#$",".")
        .replace(/^()*(\d+)\.(\d\d).*$/,'$1$2.$3') //只能输入两个小数
      e.target.value = inputValue;
    })
  }
})