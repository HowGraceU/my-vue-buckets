import VueI18n from 'vue-i18n';
import Vue from 'vue';
import zh_CN from './zh_CN.json';

let messages = {
	zh_CN
};

Vue.use(VueI18n);

export default new VueI18n({
	locale: 'zh_CN', // 设置地区
	messages // 设置地区信息
});
