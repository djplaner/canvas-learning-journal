// ==UserScript==
// @name         canvas-learning-journal
// @namespace    https://djon.es/
// @version      0.1.0
// @author       David Jones
// @description  Design and management learning journal tasks within the Canvas LMS
// @icon         https://vitejs.dev/logo.svg
// @homepage     https://github.com/djplaner/canvas-learning-journal/#readme
// @homepageURL  https://github.com/djplaner/canvas-learning-journal/#readme
// @match        https://*/courses/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.prod.js
// @grant        GM_addStyle
// ==/UserScript==

(l=>{if(typeof GM_addStyle=="function"){GM_addStyle(l);return}const e=document.createElement("style");e.textContent=l,document.head.append(e)})(' .easy-checkbox[data-v-e0a0b7f0]{position:relative;width:1.3em;height:1.3em;font-size:var(--easy-table-body-row-font-size);margin:0 auto}.easy-checkbox label[data-v-e0a0b7f0]{cursor:pointer;display:inline;line-height:1.3em;vertical-align:top;clear:both}.easy-checkbox label[data-v-e0a0b7f0]:before,.easy-checkbox label[data-v-e0a0b7f0]:after{content:"";position:absolute;left:0;top:0}.easy-checkbox label[data-v-e0a0b7f0]:before{width:1.3em;height:1.3em;background:#fff;border:1px solid rgba(0,0,0,.54);border-radius:.125em;cursor:pointer;transition:background .3s}.easy-checkbox input[type=checkbox][data-v-e0a0b7f0]{outline:0;visibility:hidden;width:1.3em;margin:0;display:block;float:left;font-size:inherit}.easy-checkbox input[type=checkbox]:checked+label[data-v-e0a0b7f0]:before{border:none}.easy-checkbox input[type=checkbox]:checked+label[data-v-e0a0b7f0]:after{transform:translate(.2em,.3038461538em) rotate(-45deg);width:.9em;height:.45em;border:.13em solid #fff;border-top-style:none;border-right-style:none}.easy-checkbox input[type=checkbox].allSelected+label[data-v-e0a0b7f0]:before{border:none}.easy-checkbox input[type=checkbox].allSelected+label[data-v-e0a0b7f0]:after{transform:translate(.2em,.3038461538em) rotate(-45deg);width:.9em;height:.45em;border:.13em solid #fff;border-top-style:none;border-right-style:none}.easy-checkbox input[type=checkbox].partSelected+label[data-v-e0a0b7f0]:before{border:none}.easy-checkbox input[type=checkbox].partSelected+label[data-v-e0a0b7f0]:after{transform:translate(.2em,.5875em);width:.9em;height:.45em;border:.125em solid #fff;border-bottom-style:none;border-right-style:none;border-left-style:none}*[data-v-e0a0b7f0],*[data-v-e0a0b7f0]:before,*[data-v-e0a0b7f0]:after{box-sizing:border-box}.easy-checkbox input[type=checkbox].allSelected+label[data-v-e0a0b7f0]:before,.easy-checkbox input[type=checkbox].partSelected+label[data-v-e0a0b7f0]:before{background:var(--51ab8a49)}.easy-checkbox[data-v-7e69a276]{position:relative;width:1.3em;height:1.3em;font-size:var(--easy-table-body-row-font-size);margin:0 auto}.easy-checkbox label[data-v-7e69a276]{cursor:pointer;display:inline;line-height:1.3em;vertical-align:top;clear:both}.easy-checkbox label[data-v-7e69a276]:before,.easy-checkbox label[data-v-7e69a276]:after{content:"";position:absolute;left:0;top:0}.easy-checkbox label[data-v-7e69a276]:before{width:1.3em;height:1.3em;background:#fff;border:1px solid rgba(0,0,0,.54);border-radius:.125em;cursor:pointer;transition:background .3s}.easy-checkbox input[type=checkbox][data-v-7e69a276]{outline:0;visibility:hidden;width:1.3em;margin:0;display:block;float:left;font-size:inherit}.easy-checkbox input[type=checkbox]:checked+label[data-v-7e69a276]:before{border:none}.easy-checkbox input[type=checkbox]:checked+label[data-v-7e69a276]:after{transform:translate(.2em,.3038461538em) rotate(-45deg);width:.9em;height:.45em;border:.13em solid #fff;border-top-style:none;border-right-style:none}.easy-checkbox input[type=checkbox].allSelected+label[data-v-7e69a276]:before{border:none}.easy-checkbox input[type=checkbox].allSelected+label[data-v-7e69a276]:after{transform:translate(.2em,.3038461538em) rotate(-45deg);width:.9em;height:.45em;border:.13em solid #fff;border-top-style:none;border-right-style:none}.easy-checkbox input[type=checkbox].partSelected+label[data-v-7e69a276]:before{border:none}.easy-checkbox input[type=checkbox].partSelected+label[data-v-7e69a276]:after{transform:translate(.2em,.5875em);width:.9em;height:.45em;border:.125em solid #fff;border-bottom-style:none;border-right-style:none;border-left-style:none}*[data-v-7e69a276],*[data-v-7e69a276]:before,*[data-v-7e69a276]:after{box-sizing:border-box}.easy-checkbox input[type=checkbox]:checked+label[data-v-7e69a276]:before{background:var(--fdaf7e9e)}.easy-data-table__rows-selector[data-v-4ca5de3a]{display:inline-block;min-width:45px;position:relative;margin:0 10px;width:var(--easy-table-rows-per-page-selector-width)}.easy-data-table__rows-selector .rows-input__wrapper[data-v-4ca5de3a]{height:20px;border-bottom:1px solid var(--easy-table-footer-font-color);display:flex;align-items:center;justify-content:space-between;padding:0 5px;cursor:pointer}.easy-data-table__rows-selector .rows-input__wrapper .triangle[data-v-4ca5de3a]{display:inline-block;vertical-align:middle;width:0px;height:0px;border-top:solid 6px var(--easy-table-footer-font-color);border-left:solid 6px transparent;border-right:solid 6px transparent}.easy-data-table__rows-selector ul.select-items[data-v-4ca5de3a]{position:absolute;top:20px;left:0;width:100%;display:none;margin:0;padding:0;text-align:left;list-style-type:none;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;z-index:var(--easy-table-rows-per-page-selector-z-index)}.easy-data-table__rows-selector ul.select-items.show[data-v-4ca5de3a]{display:block}.easy-data-table__rows-selector ul.select-items.inside[data-v-4ca5de3a]{bottom:0;top:auto}.easy-data-table__rows-selector ul.select-items li[data-v-4ca5de3a]{cursor:pointer;padding:var(--easy-table-rows-per-page-selector-option-padding);background-color:var(--easy-table-footer-background-color)}.easy-data-table__rows-selector ul.select-items li.selected[data-v-4ca5de3a]{color:#fff;background-color:var(--1b889342)}.lds-ring[data-v-1fa3a520]{display:inline-block;position:relative;width:60px;height:60px}.lds-ring div[data-v-1fa3a520]{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:8px;border:8px solid #fff;border-radius:50%;animation:lds-ring-1fa3a520 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--26774109) transparent transparent transparent}.lds-ring div[data-v-1fa3a520]:nth-child(1){animation-delay:-.45s}.lds-ring div[data-v-1fa3a520]:nth-child(2){animation-delay:-.3s}.lds-ring div[data-v-1fa3a520]:nth-child(3){animation-delay:-.15s}@keyframes lds-ring-1fa3a520{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.loader-line[data-v-7d281cac]{width:100%;height:3px;position:relative;overflow:hidden;background-color:#ddd;margin:0x auto}.loader-line[data-v-7d281cac]:before{content:"";position:absolute;left:-50%;height:3px;width:40%;background-color:var(--0d327f57);-webkit-animation:lineAnim-7d281cac 1s linear infinite;-moz-animation:lineAnim-7d281cac 1s linear infinite;animation:lineAnim-7d281cac 1s linear infinite}@keyframes lineAnim-7d281cac{0%{left:-40%}50%{left:20%;width:80%}to{left:100%;width:100%}}.buttons-pagination[data-v-4c681fa2]{box-sizing:border-box;display:flex;padding:0;border-radius:4px}.buttons-pagination .item[data-v-4c681fa2]{box-sizing:border-box;cursor:pointer;min-width:calc(var(--easy-table-footer-font-size) * 1.8);line-height:calc(var(--easy-table-footer-font-size) * 1.8);border-top:var(--easy-table-buttons-pagination-border);border-bottom:var(--easy-table-buttons-pagination-border);border-right:var(--easy-table-buttons-pagination-border);text-align:center}.buttons-pagination .item[data-v-4c681fa2]:first-of-type{border-left:var(--easy-table-buttons-pagination-border);border-top-left-radius:4px;border-bottom-left-radius:4px}.buttons-pagination .item[data-v-4c681fa2]:last-of-type{border-top-right-radius:4px;border-bottom-right-radius:4px}.buttons-pagination .item.button.active[data-v-4c681fa2]{background-color:var(--40dd4f07);border-left:var(--easy-table-buttons-pagination-border);border-color:var(--40dd4f07)!important;color:#fff}.buttons-pagination .item.button.active-prev[data-v-4c681fa2]{border-right:none}.previous-page__click-button[data-v-c9da5286],.next-page__click-button[data-v-c9da5286]{margin:0 5px;cursor:pointer}.previous-page__click-button .arrow[data-v-c9da5286],.next-page__click-button .arrow[data-v-c9da5286]{display:inline-block;width:8px;height:8px;border-top:2px solid #000;border-left:2px solid #000}.previous-page__click-button .arrow.arrow-left[data-v-c9da5286],.next-page__click-button .arrow.arrow-left[data-v-c9da5286]{transform:rotate(135deg)}.previous-page__click-button .arrow.arrow-right[data-v-c9da5286],.next-page__click-button .arrow.arrow-right[data-v-c9da5286]{transform:rotate(-45deg)}.previous-page__click-button.first-page[data-v-c9da5286],.next-page__click-button.last-page[data-v-c9da5286]{cursor:not-allowed}.previous-page__click-button.first-page .arrow[data-v-c9da5286],.next-page__click-button.last-page .arrow[data-v-c9da5286]{border-color:#e0e0e0}:root{--easy-table-border: 1px solid #e0e0e0;--easy-table-row-border: 1px solid #e0e0e0;--easy-table-header-font-size: 12px;--easy-table-header-height: 36px;--easy-table-header-font-color: #373737;--easy-table-header-background-color: #fff;--easy-table-header-item-padding: 0px 10px;--easy-table-body-row-height: 36px;--easy-table-body-row-font-size: 12px;--easy-table-body-row-font-color: #212121;--easy-table-body-row-background-color: #fff;--easy-table-body-row-hover-font-color: #212121;--easy-table-body-row-hover-background-color: #eee;--easy-table-body-even-row-font-color: #212121;--easy-table-body-even-row-background-color: #fafafa;--easy-table-body-item-padding: 0px 10px;--easy-table-footer-background-color: #fff;--easy-table-footer-font-color: #212121;--easy-table-footer-font-size: 12px;--easy-table-footer-padding: 0px 5px;--easy-table-footer-height: 36px;--easy-table-rows-per-page-selector-width: auto;--easy-table-rows-per-page-selector-option-padding: 5px;--easy-table-rows-per-page-selector-z-index: auto;--easy-table-message-font-color: #212121;--easy-table-message-font-size: 12px;--easy-table-message-padding: 20px;--easy-table-loading-mask-background-color: #fff;--easy-table-loading-mask-opacity: .5;--easy-table-scrollbar-track-color: #fff;--easy-table-scrollbar-color: #fff;--easy-table-scrollbar-thumb-color: #c1c1c1;--easy-table-scrollbar-corner-color: #fff;--easy-table-buttons-pagination-border: 1px solid #e0e0e0}.vue3-easy-data-table[data-v-32683533]{border:var(--easy-table-border);position:relative;box-sizing:border-box}.vue3-easy-data-table__main[data-v-32683533]{border:none;width:100%;overflow:auto;background-color:var(--easy-table-body-row-background-color)}.vue3-easy-data-table__main[data-v-32683533]::-webkit-scrollbar-track{border-radius:10px;background-color:var(--easy-table-scrollbar-track-color)}.vue3-easy-data-table__main[data-v-32683533]::-webkit-scrollbar{width:7px;height:7px;background-color:var(--easy-table-scrollbar-color)}.vue3-easy-data-table__main[data-v-32683533]::-webkit-scrollbar-thumb{border-radius:10px;background-color:var(--easy-table-scrollbar-thumb-color)}.vue3-easy-data-table__main[data-v-32683533]::-webkit-scrollbar-corner{background-color:var(--easy-table-scrollbar-corner-color)}.vue3-easy-data-table__main.table-fixed table[data-v-32683533]{table-layout:fixed}.vue3-easy-data-table__main.show-shadow th.shadow[data-v-32683533]:after,.vue3-easy-data-table__main.show-shadow td.shadow[data-v-32683533]:after{box-shadow:inset 6px 0 5px -3px #0003}.vue3-easy-data-table__main.fixed-header th[data-v-32683533]{position:sticky;top:0;z-index:2}.vue3-easy-data-table__main.hoverable tr:hover td[data-v-32683533]{background-color:var(--easy-table-body-row-hover-background-color);color:var(--easy-table-body-row-hover-font-color)}.vue3-easy-data-table__main.hoverable .vue3-easy-data-table__body.row-alternation .even-row:hover td[data-v-32683533]{color:var(--easy-table-body-row-hover-font-color);background-color:var(--easy-table-body-row-hover-background-color)}.vue3-easy-data-table__main.border-cell .vue3-easy-data-table__header th[data-v-32683533]{border-right:var(--easy-table-row-border)}.vue3-easy-data-table__main.border-cell .vue3-easy-data-table__header th[data-v-32683533]:last-of-type{border-right:none}.vue3-easy-data-table__main.border-cell .vue3-easy-data-table__body td[data-v-32683533]{border-right:var(--easy-table-row-border)}.vue3-easy-data-table__main.border-cell .vue3-easy-data-table__body td[data-v-32683533]:last-of-type{border-right:none}.vue3-easy-data-table__body.row-alternation tr.even-row td[data-v-32683533]{color:var(--easy-table-body-even-row-font-color);background-color:var(--easy-table-body-even-row-background-color)}table[data-v-32683533]{border-collapse:initial;display:table;width:100%;border-spacing:0;margin:0}.vue3-easy-data-table__header[data-v-32683533],vue3-easy-data-table__body[data-v-32683533]{position:relative}.vue3-easy-data-table__header tr[data-v-32683533]{font-size:var(--easy-table-header-font-size);border:none;height:var(--easy-table-header-height)}.vue3-easy-data-table__header th[data-v-32683533]{background-color:var(--easy-table-header-background-color);color:var(--easy-table-header-font-color);border:none;border-bottom:var(--easy-table-row-border);padding:var(--easy-table-header-item-padding);position:relative}.vue3-easy-data-table__header th .header[data-v-32683533]{display:flex;align-items:center}.vue3-easy-data-table__header th .header.direction-left[data-v-32683533]{justify-content:flex-start}.vue3-easy-data-table__header th .header.direction-center[data-v-32683533]{justify-content:center}.vue3-easy-data-table__header th .header.direction-right[data-v-32683533]{justify-content:flex-end}.vue3-easy-data-table__header th.sortable[data-v-32683533]{cursor:pointer}.vue3-easy-data-table__header th.sortable .sortType-icon[data-v-32683533]{border:5px solid transparent;margin-top:-3px;margin-left:4px;display:inline-block;height:0;width:0;position:relative;border-bottom-color:var(--easy-table-header-font-color)}.vue3-easy-data-table__header th.sortable .multi-sort__number[data-v-32683533]{border-radius:50%;height:1.5em;width:1.5em;line-height:1.5em;margin-left:4px;background-color:var(--easy-table-header-font-color);color:var(--easy-table-header-background-color)}.vue3-easy-data-table__header th.sortable.none:hover .sortType-icon[data-v-32683533]{opacity:1}.vue3-easy-data-table__header th.sortable.none .sortType-icon[data-v-32683533]{opacity:0;transition:.5s ease}.vue3-easy-data-table__header th.sortable.desc .sortType-icon[data-v-32683533]{margin-top:5px;transform:rotate(180deg)}.vue3-easy-data-table__header th.shadow[data-v-32683533]:after,.vue3-easy-data-table__body td.shadow[data-v-32683533]:after{pointer-events:none;content:"";width:36px;display:inline-block;height:100%;position:absolute;top:0;right:-36px;box-shadow:none}.vue3-easy-data-table__body tr[data-v-32683533]{height:var(--easy-table-body-row-height);color:var(--easy-table-body-row-font-color);font-size:var(--easy-table-body-row-font-size)}.vue3-easy-data-table__body tr:last-child td[data-v-32683533]{border-bottom:none}.vue3-easy-data-table__body tr:first-child td[data-v-32683533]{border-bottom:var(--easy-table-row-border)}.vue3-easy-data-table__body td[data-v-32683533]{padding:var(--easy-table-body-item-padding);background-color:var(--easy-table-body-row-background-color);border:none;border-bottom:var(--easy-table-row-border);position:relative}.vue3-easy-data-table__body td.direction-left[data-v-32683533]{text-align:left}.vue3-easy-data-table__body td.direction-center[data-v-32683533]{text-align:center}.vue3-easy-data-table__body td.direction-right[data-v-32683533]{text-align:right}.vue3-easy-data-table__body td .expand-icon[data-v-32683533]{border:solid;border-color:var(easy-table-body-row-font-color);border-width:0 2px 2px 0;display:inline-block;padding:3px;transform:rotate(-45deg);transition:.2s}.vue3-easy-data-table__body td .expand-icon.expanding[data-v-32683533]{transform:rotate(45deg)}.vue3-easy-data-table__body td.expand[data-v-32683533]{position:relative}.vue3-easy-data-table__body td.expand .expand-loading[data-v-32683533]{position:absolute;top:0;left:0}.vue3-easy-data-table__body td.can-expand[data-v-32683533]{cursor:pointer}.vue3-easy-data-table__footer[data-v-32683533]{background-color:var(--easy-table-footer-background-color);color:var(--easy-table-footer-font-color);border-top:var(--easy-table-row-border);font-size:var(--easy-table-footer-font-size);height:var(--easy-table-footer-height);padding:var(--easy-table-footer-padding);box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:flex-end}.vue3-easy-data-table__footer .pagination__rows-per-page[data-v-32683533]{display:flex;align-items:center}.vue3-easy-data-table__footer .pagination__items-index[data-v-32683533]{margin:0 20px 0 10px}.vue3-easy-data-table__message[data-v-32683533]{color:var(--easy-table-message-font-color);font-size:var(--easy-table-message-font-size);padding:var(--easy-table-message-padding);text-align:center}.vue3-easy-data-table__loading[data-v-32683533]{z-index:3;overflow:hidden;position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center}.vue3-easy-data-table__loading .loading-entity[data-v-32683533]{z-index:1}.vue3-easy-data-table__loading-mask[data-v-32683533]{background-color:var(--easy-table-loading-mask-background-color);opacity:var(--easy-table-loading-mask-opacity);position:absolute;width:100%;height:100%;top:0;left:0;z-index:1}.vue3-easy-data-table__main[data-v-32683533]{min-height:var(--da0d4328)}.vue3-easy-data-table__main.fixed-height[data-v-32683533]{height:var(--3037e504)}:root,:host,.sl-theme-light{color-scheme:light;--sl-color-gray-50: hsl(0 0% 97.5%);--sl-color-gray-100: hsl(240 4.8% 95.9%);--sl-color-gray-200: hsl(240 5.9% 90%);--sl-color-gray-300: hsl(240 4.9% 83.9%);--sl-color-gray-400: hsl(240 5% 64.9%);--sl-color-gray-500: hsl(240 3.8% 46.1%);--sl-color-gray-600: hsl(240 5.2% 33.9%);--sl-color-gray-700: hsl(240 5.3% 26.1%);--sl-color-gray-800: hsl(240 3.7% 15.9%);--sl-color-gray-900: hsl(240 5.9% 10%);--sl-color-gray-950: hsl(240 7.3% 8%);--sl-color-red-50: hsl(0 85.7% 97.3%);--sl-color-red-100: hsl(0 93.3% 94.1%);--sl-color-red-200: hsl(0 96.3% 89.4%);--sl-color-red-300: hsl(0 93.5% 81.8%);--sl-color-red-400: hsl(0 90.6% 70.8%);--sl-color-red-500: hsl(0 84.2% 60.2%);--sl-color-red-600: hsl(0 72.2% 50.6%);--sl-color-red-700: hsl(0 73.7% 41.8%);--sl-color-red-800: hsl(0 70% 35.3%);--sl-color-red-900: hsl(0 62.8% 30.6%);--sl-color-red-950: hsl(0 60% 19.6%);--sl-color-orange-50: hsl(33.3 100% 96.5%);--sl-color-orange-100: hsl(34.3 100% 91.8%);--sl-color-orange-200: hsl(32.1 97.7% 83.1%);--sl-color-orange-300: hsl(30.7 97.2% 72.4%);--sl-color-orange-400: hsl(27 96% 61%);--sl-color-orange-500: hsl(24.6 95% 53.1%);--sl-color-orange-600: hsl(20.5 90.2% 48.2%);--sl-color-orange-700: hsl(17.5 88.3% 40.4%);--sl-color-orange-800: hsl(15 79.1% 33.7%);--sl-color-orange-900: hsl(15.3 74.6% 27.8%);--sl-color-orange-950: hsl(15.2 69.1% 19%);--sl-color-amber-50: hsl(48 100% 96.1%);--sl-color-amber-100: hsl(48 96.5% 88.8%);--sl-color-amber-200: hsl(48 96.6% 76.7%);--sl-color-amber-300: hsl(45.9 96.7% 64.5%);--sl-color-amber-400: hsl(43.3 96.4% 56.3%);--sl-color-amber-500: hsl(37.7 92.1% 50.2%);--sl-color-amber-600: hsl(32.1 94.6% 43.7%);--sl-color-amber-700: hsl(26 90.5% 37.1%);--sl-color-amber-800: hsl(22.7 82.5% 31.4%);--sl-color-amber-900: hsl(21.7 77.8% 26.5%);--sl-color-amber-950: hsl(22.9 74.1% 16.7%);--sl-color-yellow-50: hsl(54.5 91.7% 95.3%);--sl-color-yellow-100: hsl(54.9 96.7% 88%);--sl-color-yellow-200: hsl(52.8 98.3% 76.9%);--sl-color-yellow-300: hsl(50.4 97.8% 63.5%);--sl-color-yellow-400: hsl(47.9 95.8% 53.1%);--sl-color-yellow-500: hsl(45.4 93.4% 47.5%);--sl-color-yellow-600: hsl(40.6 96.1% 40.4%);--sl-color-yellow-700: hsl(35.5 91.7% 32.9%);--sl-color-yellow-800: hsl(31.8 81% 28.8%);--sl-color-yellow-900: hsl(28.4 72.5% 25.7%);--sl-color-yellow-950: hsl(33.1 69% 13.9%);--sl-color-lime-50: hsl(78.3 92% 95.1%);--sl-color-lime-100: hsl(79.6 89.1% 89.2%);--sl-color-lime-200: hsl(80.9 88.5% 79.6%);--sl-color-lime-300: hsl(82 84.5% 67.1%);--sl-color-lime-400: hsl(82.7 78% 55.5%);--sl-color-lime-500: hsl(83.7 80.5% 44.3%);--sl-color-lime-600: hsl(84.8 85.2% 34.5%);--sl-color-lime-700: hsl(85.9 78.4% 27.3%);--sl-color-lime-800: hsl(86.3 69% 22.7%);--sl-color-lime-900: hsl(87.6 61.2% 20.2%);--sl-color-lime-950: hsl(86.5 60.6% 13.9%);--sl-color-green-50: hsl(138.5 76.5% 96.7%);--sl-color-green-100: hsl(140.6 84.2% 92.5%);--sl-color-green-200: hsl(141 78.9% 85.1%);--sl-color-green-300: hsl(141.7 76.6% 73.1%);--sl-color-green-400: hsl(141.9 69.2% 58%);--sl-color-green-500: hsl(142.1 70.6% 45.3%);--sl-color-green-600: hsl(142.1 76.2% 36.3%);--sl-color-green-700: hsl(142.4 71.8% 29.2%);--sl-color-green-800: hsl(142.8 64.2% 24.1%);--sl-color-green-900: hsl(143.8 61.2% 20.2%);--sl-color-green-950: hsl(144.3 60.7% 12%);--sl-color-emerald-50: hsl(151.8 81% 95.9%);--sl-color-emerald-100: hsl(149.3 80.4% 90%);--sl-color-emerald-200: hsl(152.4 76% 80.4%);--sl-color-emerald-300: hsl(156.2 71.6% 66.9%);--sl-color-emerald-400: hsl(158.1 64.4% 51.6%);--sl-color-emerald-500: hsl(160.1 84.1% 39.4%);--sl-color-emerald-600: hsl(161.4 93.5% 30.4%);--sl-color-emerald-700: hsl(162.9 93.5% 24.3%);--sl-color-emerald-800: hsl(163.1 88.1% 19.8%);--sl-color-emerald-900: hsl(164.2 85.7% 16.5%);--sl-color-emerald-950: hsl(164.3 87.5% 9.4%);--sl-color-teal-50: hsl(166.2 76.5% 96.7%);--sl-color-teal-100: hsl(167.2 85.5% 89.2%);--sl-color-teal-200: hsl(168.4 83.8% 78.2%);--sl-color-teal-300: hsl(170.6 76.9% 64.3%);--sl-color-teal-400: hsl(172.5 66% 50.4%);--sl-color-teal-500: hsl(173.4 80.4% 40%);--sl-color-teal-600: hsl(174.7 83.9% 31.6%);--sl-color-teal-700: hsl(175.3 77.4% 26.1%);--sl-color-teal-800: hsl(176.1 69.4% 21.8%);--sl-color-teal-900: hsl(175.9 60.8% 19%);--sl-color-teal-950: hsl(176.5 58.6% 11.4%);--sl-color-cyan-50: hsl(183.2 100% 96.3%);--sl-color-cyan-100: hsl(185.1 95.9% 90.4%);--sl-color-cyan-200: hsl(186.2 93.5% 81.8%);--sl-color-cyan-300: hsl(187 92.4% 69%);--sl-color-cyan-400: hsl(187.9 85.7% 53.3%);--sl-color-cyan-500: hsl(188.7 94.5% 42.7%);--sl-color-cyan-600: hsl(191.6 91.4% 36.5%);--sl-color-cyan-700: hsl(192.9 82.3% 31%);--sl-color-cyan-800: hsl(194.4 69.6% 27.1%);--sl-color-cyan-900: hsl(196.4 63.6% 23.7%);--sl-color-cyan-950: hsl(196.8 61% 16.1%);--sl-color-sky-50: hsl(204 100% 97.1%);--sl-color-sky-100: hsl(204 93.8% 93.7%);--sl-color-sky-200: hsl(200.6 94.4% 86.1%);--sl-color-sky-300: hsl(199.4 95.5% 73.9%);--sl-color-sky-400: hsl(198.4 93.2% 59.6%);--sl-color-sky-500: hsl(198.6 88.7% 48.4%);--sl-color-sky-600: hsl(200.4 98% 39.4%);--sl-color-sky-700: hsl(201.3 96.3% 32.2%);--sl-color-sky-800: hsl(201 90% 27.5%);--sl-color-sky-900: hsl(202 80.3% 23.9%);--sl-color-sky-950: hsl(202.3 73.8% 16.5%);--sl-color-blue-50: hsl(213.8 100% 96.9%);--sl-color-blue-100: hsl(214.3 94.6% 92.7%);--sl-color-blue-200: hsl(213.3 96.9% 87.3%);--sl-color-blue-300: hsl(211.7 96.4% 78.4%);--sl-color-blue-400: hsl(213.1 93.9% 67.8%);--sl-color-blue-500: hsl(217.2 91.2% 59.8%);--sl-color-blue-600: hsl(221.2 83.2% 53.3%);--sl-color-blue-700: hsl(224.3 76.3% 48%);--sl-color-blue-800: hsl(225.9 70.7% 40.2%);--sl-color-blue-900: hsl(224.4 64.3% 32.9%);--sl-color-blue-950: hsl(226.2 55.3% 18.4%);--sl-color-indigo-50: hsl(225.9 100% 96.7%);--sl-color-indigo-100: hsl(226.5 100% 93.9%);--sl-color-indigo-200: hsl(228 96.5% 88.8%);--sl-color-indigo-300: hsl(229.7 93.5% 81.8%);--sl-color-indigo-400: hsl(234.5 89.5% 73.9%);--sl-color-indigo-500: hsl(238.7 83.5% 66.7%);--sl-color-indigo-600: hsl(243.4 75.4% 58.6%);--sl-color-indigo-700: hsl(244.5 57.9% 50.6%);--sl-color-indigo-800: hsl(243.7 54.5% 41.4%);--sl-color-indigo-900: hsl(242.2 47.4% 34.3%);--sl-color-indigo-950: hsl(243.5 43.6% 22.9%);--sl-color-violet-50: hsl(250 100% 97.6%);--sl-color-violet-100: hsl(251.4 91.3% 95.5%);--sl-color-violet-200: hsl(250.5 95.2% 91.8%);--sl-color-violet-300: hsl(252.5 94.7% 85.1%);--sl-color-violet-400: hsl(255.1 91.7% 76.3%);--sl-color-violet-500: hsl(258.3 89.5% 66.3%);--sl-color-violet-600: hsl(262.1 83.3% 57.8%);--sl-color-violet-700: hsl(263.4 70% 50.4%);--sl-color-violet-800: hsl(263.4 69.3% 42.2%);--sl-color-violet-900: hsl(263.5 67.4% 34.9%);--sl-color-violet-950: hsl(265.1 61.5% 21.4%);--sl-color-purple-50: hsl(270 100% 98%);--sl-color-purple-100: hsl(268.7 100% 95.5%);--sl-color-purple-200: hsl(268.6 100% 91.8%);--sl-color-purple-300: hsl(269.2 97.4% 85.1%);--sl-color-purple-400: hsl(270 95.2% 75.3%);--sl-color-purple-500: hsl(270.7 91% 65.1%);--sl-color-purple-600: hsl(271.5 81.3% 55.9%);--sl-color-purple-700: hsl(272.1 71.7% 47.1%);--sl-color-purple-800: hsl(272.9 67.2% 39.4%);--sl-color-purple-900: hsl(273.6 65.6% 32%);--sl-color-purple-950: hsl(276 59.5% 16.5%);--sl-color-fuchsia-50: hsl(289.1 100% 97.8%);--sl-color-fuchsia-100: hsl(287 100% 95.5%);--sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400: hsl(292 91.4% 72.5%);--sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900: hsl(296.7 63.6% 28%);--sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);--sl-color-pink-50: hsl(327.3 73.3% 97.1%);--sl-color-pink-100: hsl(325.7 77.8% 94.7%);--sl-color-pink-200: hsl(325.9 84.6% 89.8%);--sl-color-pink-300: hsl(327.4 87.1% 81.8%);--sl-color-pink-400: hsl(328.6 85.5% 70.2%);--sl-color-pink-500: hsl(330.4 81.2% 60.4%);--sl-color-pink-600: hsl(333.3 71.4% 50.6%);--sl-color-pink-700: hsl(335.1 77.6% 42%);--sl-color-pink-800: hsl(335.8 74.4% 35.3%);--sl-color-pink-900: hsl(335.9 69% 30.4%);--sl-color-pink-950: hsl(336.2 65.4% 15.9%);--sl-color-rose-50: hsl(355.7 100% 97.3%);--sl-color-rose-100: hsl(355.6 100% 94.7%);--sl-color-rose-200: hsl(352.7 96.1% 90%);--sl-color-rose-300: hsl(352.6 95.7% 81.8%);--sl-color-rose-400: hsl(351.3 94.5% 71.4%);--sl-color-rose-500: hsl(349.7 89.2% 60.2%);--sl-color-rose-600: hsl(346.8 77.2% 49.8%);--sl-color-rose-700: hsl(345.3 82.7% 40.8%);--sl-color-rose-800: hsl(343.4 79.7% 34.7%);--sl-color-rose-900: hsl(341.5 75.5% 30.4%);--sl-color-rose-950: hsl(341.3 70.1% 17.1%);--sl-color-primary-50: var(--sl-color-sky-50);--sl-color-primary-100: var(--sl-color-sky-100);--sl-color-primary-200: var(--sl-color-sky-200);--sl-color-primary-300: var(--sl-color-sky-300);--sl-color-primary-400: var(--sl-color-sky-400);--sl-color-primary-500: var(--sl-color-sky-500);--sl-color-primary-600: var(--sl-color-sky-600);--sl-color-primary-700: var(--sl-color-sky-700);--sl-color-primary-800: var(--sl-color-sky-800);--sl-color-primary-900: var(--sl-color-sky-900);--sl-color-primary-950: var(--sl-color-sky-950);--sl-color-success-50: var(--sl-color-green-50);--sl-color-success-100: var(--sl-color-green-100);--sl-color-success-200: var(--sl-color-green-200);--sl-color-success-300: var(--sl-color-green-300);--sl-color-success-400: var(--sl-color-green-400);--sl-color-success-500: var(--sl-color-green-500);--sl-color-success-600: var(--sl-color-green-600);--sl-color-success-700: var(--sl-color-green-700);--sl-color-success-800: var(--sl-color-green-800);--sl-color-success-900: var(--sl-color-green-900);--sl-color-success-950: var(--sl-color-green-950);--sl-color-warning-50: var(--sl-color-amber-50);--sl-color-warning-100: var(--sl-color-amber-100);--sl-color-warning-200: var(--sl-color-amber-200);--sl-color-warning-300: var(--sl-color-amber-300);--sl-color-warning-400: var(--sl-color-amber-400);--sl-color-warning-500: var(--sl-color-amber-500);--sl-color-warning-600: var(--sl-color-amber-600);--sl-color-warning-700: var(--sl-color-amber-700);--sl-color-warning-800: var(--sl-color-amber-800);--sl-color-warning-900: var(--sl-color-amber-900);--sl-color-warning-950: var(--sl-color-amber-950);--sl-color-danger-50: var(--sl-color-red-50);--sl-color-danger-100: var(--sl-color-red-100);--sl-color-danger-200: var(--sl-color-red-200);--sl-color-danger-300: var(--sl-color-red-300);--sl-color-danger-400: var(--sl-color-red-400);--sl-color-danger-500: var(--sl-color-red-500);--sl-color-danger-600: var(--sl-color-red-600);--sl-color-danger-700: var(--sl-color-red-700);--sl-color-danger-800: var(--sl-color-red-800);--sl-color-danger-900: var(--sl-color-red-900);--sl-color-danger-950: var(--sl-color-red-950);--sl-color-neutral-50: var(--sl-color-gray-50);--sl-color-neutral-100: var(--sl-color-gray-100);--sl-color-neutral-200: var(--sl-color-gray-200);--sl-color-neutral-300: var(--sl-color-gray-300);--sl-color-neutral-400: var(--sl-color-gray-400);--sl-color-neutral-500: var(--sl-color-gray-500);--sl-color-neutral-600: var(--sl-color-gray-600);--sl-color-neutral-700: var(--sl-color-gray-700);--sl-color-neutral-800: var(--sl-color-gray-800);--sl-color-neutral-900: var(--sl-color-gray-900);--sl-color-neutral-950: var(--sl-color-gray-950);--sl-color-neutral-0: hsl(0, 0%, 100%);--sl-color-neutral-1000: hsl(0, 0%, 0%);--sl-border-radius-small: .1875rem;--sl-border-radius-medium: .25rem;--sl-border-radius-large: .5rem;--sl-border-radius-x-large: 1rem;--sl-border-radius-circle: 50%;--sl-border-radius-pill: 9999px;--sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);--sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);--sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);--sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);--sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);--sl-spacing-3x-small: .125rem;--sl-spacing-2x-small: .25rem;--sl-spacing-x-small: .5rem;--sl-spacing-small: .75rem;--sl-spacing-medium: 1rem;--sl-spacing-large: 1.25rem;--sl-spacing-x-large: 1.75rem;--sl-spacing-2x-large: 2.25rem;--sl-spacing-3x-large: 3rem;--sl-spacing-4x-large: 4.5rem;--sl-transition-x-slow: 1s;--sl-transition-slow: .5s;--sl-transition-medium: .25s;--sl-transition-fast: .15s;--sl-transition-x-fast: 50ms;--sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;--sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--sl-font-serif: Georgia, "Times New Roman", serif;--sl-font-size-2x-small: .625rem;--sl-font-size-x-small: .75rem;--sl-font-size-small: .875rem;--sl-font-size-medium: 1rem;--sl-font-size-large: 1.25rem;--sl-font-size-x-large: 1.5rem;--sl-font-size-2x-large: 2.25rem;--sl-font-size-3x-large: 3rem;--sl-font-size-4x-large: 4.5rem;--sl-font-weight-light: 300;--sl-font-weight-normal: 400;--sl-font-weight-semibold: 500;--sl-font-weight-bold: 700;--sl-letter-spacing-denser: -.03em;--sl-letter-spacing-dense: -.015em;--sl-letter-spacing-normal: normal;--sl-letter-spacing-loose: .075em;--sl-letter-spacing-looser: .15em;--sl-line-height-denser: 1;--sl-line-height-dense: 1.4;--sl-line-height-normal: 1.8;--sl-line-height-loose: 2.2;--sl-line-height-looser: 2.6;--sl-focus-ring-color: var(--sl-color-primary-600);--sl-focus-ring-style: solid;--sl-focus-ring-width: 3px;--sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset: 1px;--sl-button-font-size-small: var(--sl-font-size-x-small);--sl-button-font-size-medium: var(--sl-font-size-small);--sl-button-font-size-large: var(--sl-font-size-medium);--sl-input-height-small: 1.875rem;--sl-input-height-medium: 2.5rem;--sl-input-height-large: 3.125rem;--sl-input-background-color: var(--sl-color-neutral-0);--sl-input-background-color-hover: var(--sl-input-background-color);--sl-input-background-color-focus: var(--sl-input-background-color);--sl-input-background-color-disabled: var(--sl-color-neutral-100);--sl-input-border-color: var(--sl-color-neutral-300);--sl-input-border-color-hover: var(--sl-color-neutral-400);--sl-input-border-color-focus: var(--sl-color-primary-500);--sl-input-border-color-disabled: var(--sl-color-neutral-300);--sl-input-border-width: 1px;--sl-input-required-content: "*";--sl-input-required-content-offset: -2px;--sl-input-required-content-color: var(--sl-input-label-color);--sl-input-border-radius-small: var(--sl-border-radius-medium);--sl-input-border-radius-medium: var(--sl-border-radius-medium);--sl-input-border-radius-large: var(--sl-border-radius-medium);--sl-input-font-family: var(--sl-font-sans);--sl-input-font-weight: var(--sl-font-weight-normal);--sl-input-font-size-small: var(--sl-font-size-small);--sl-input-font-size-medium: var(--sl-font-size-medium);--sl-input-font-size-large: var(--sl-font-size-large);--sl-input-letter-spacing: var(--sl-letter-spacing-normal);--sl-input-color: var(--sl-color-neutral-700);--sl-input-color-hover: var(--sl-color-neutral-700);--sl-input-color-focus: var(--sl-color-neutral-700);--sl-input-color-disabled: var(--sl-color-neutral-900);--sl-input-icon-color: var(--sl-color-neutral-500);--sl-input-icon-color-hover: var(--sl-color-neutral-600);--sl-input-icon-color-focus: var(--sl-color-neutral-600);--sl-input-placeholder-color: var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);--sl-input-spacing-small: var(--sl-spacing-small);--sl-input-spacing-medium: var(--sl-spacing-medium);--sl-input-spacing-large: var(--sl-spacing-large);--sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);--sl-input-focus-ring-offset: 0;--sl-input-filled-background-color: var(--sl-color-neutral-100);--sl-input-filled-background-color-hover: var(--sl-color-neutral-100);--sl-input-filled-background-color-focus: var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);--sl-input-filled-color: var(--sl-color-neutral-800);--sl-input-filled-color-hover: var(--sl-color-neutral-800);--sl-input-filled-color-focus: var(--sl-color-neutral-700);--sl-input-filled-color-disabled: var(--sl-color-neutral-800);--sl-input-label-font-size-small: var(--sl-font-size-small);--sl-input-label-font-size-medium: var(--sl-font-size-medium);--sl-input-label-font-size-large: var(--sl-font-size-large);--sl-input-label-color: inherit;--sl-input-help-text-font-size-small: var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium: var(--sl-font-size-small);--sl-input-help-text-font-size-large: var(--sl-font-size-medium);--sl-input-help-text-color: var(--sl-color-neutral-500);--sl-toggle-size-small: .875rem;--sl-toggle-size-medium: 1.125rem;--sl-toggle-size-large: 1.375rem;--sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);--sl-panel-background-color: var(--sl-color-neutral-0);--sl-panel-border-color: var(--sl-color-neutral-200);--sl-panel-border-width: 1px;--sl-tooltip-border-radius: var(--sl-border-radius-medium);--sl-tooltip-background-color: var(--sl-color-neutral-800);--sl-tooltip-color: var(--sl-color-neutral-0);--sl-tooltip-font-family: var(--sl-font-sans);--sl-tooltip-font-weight: var(--sl-font-weight-normal);--sl-tooltip-font-size: var(--sl-font-size-small);--sl-tooltip-line-height: var(--sl-line-height-dense);--sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size: 6px;--sl-z-index-drawer: 700;--sl-z-index-dialog: 800;--sl-z-index-dropdown: 900;--sl-z-index-toast: 950;--sl-z-index-tooltip: 1000}@supports (scrollbar-gutter: stable){.sl-scroll-lock{scrollbar-gutter:stable!important;overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.sl-scroll-lock body{padding-right:var(--sl-scroll-lock-size)!important;overflow:hidden!important}}.sl-toast-stack{position:fixed;top:0;inset-inline-end:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}sl-dialog[data-v-2f0b35e4]::part(title){text-align:left}.clj-create-group-button[data-v-2f0b35e4]{display:flex;justify-content:space-between;width:max-content;align-items:center}#clj-create-prompt[data-v-60307933]{--width: 50vw}.clj-button[data-v-60307933]{margin-top:1rem;margin-left:.5rem}.clj-create-prompt-form[data-v-60307933]{display:flex}.clj-label-on-left[data-v-60307933]{--label-width: 3.75rem;--gap-width: 1rem}.clj-label-on-left[data-v-60307933]{margin-top:1rem;width:75%}.clj-label-on-left[data-v-60307933]::part(form-control){display:grid;grid:auto / var(--label-width) 1fr;gap:var(--sl-spacing-3x-small) var(--gap-width);align-items:center}.clj-label-on-left[data-v-60307933]::part(form-control-label){text-align:right}.clj-label-on-left[data-v-60307933]::part(form-control-help-text){grid-column-start:2}.clj-create-prompt-button[data-v-60307933]{display:flex;justify-content:space-between;width:max-content;align-items:center}.clj-create-group-div[data-v-3d20555e]{margin-top:1rem;margin-bottom:1rem}.clj-create-form[data-v-3d20555e]{margin-top:1rem;margin-left:1rem;padding-top:1rem;padding-left:1rem}#clj-create-learning-journal[data-v-3d20555e]{--width: 50vw}.clj-button[data-v-3d20555e]{margin-top:1rem;margin-left:.5rem}.clj-create-learning-journal-form[data-v-3d20555e]{margin-left:1rem;margin-right:1rem}.clj-label-on-left[data-v-3d20555e]::part(form-control-label){text-align:right}.clj-label-on-left[data-v-3d20555e]::part(form-control-help-text){grid-column-start:2}.clj-th-tooltip[data-v-ea7c28c0]{float:right;margin-right:1rem}.clj-status-student-groups[data-v-12d03b1d],.clj-status-discussions[data-v-79398731]{background-color:#f0f0f0;padding:1em;border-radius:1em}.clj-configure[data-v-e077a626]{margin-left:1rem;margin-top:0rem}.clj-status-learning-journal[data-v-960f421b]{background-color:#f0f0f0;padding:1em;margin:1em;border-radius:1em}.clj-prompt-participation-details[data-v-7f0f9b70]{background-color:#f0f0f0;padding:1em;border-radius:1em}sl-tab[data-v-7f0f9b70]::part(base){font-size:.8rem;padding:.8rem;background:#f0f0f0}.clj-student[data-v-7f0f9b70]{display:block;padding:.5rem;width:20rem}.clj-student-forum[data-v-7f0f9b70]{width:75%;float:left}.clj-speedgrader[data-v-7f0f9b70]{clear:both;font-size:x-small}.clj-student-avatar[data-v-7f0f9b70]{float:right;clear:both}.clj-entries[data-v-7f0f9b70]{padding:1rem}.clj-participation-summary[data-v-8d865138]{background-color:#f0f0f0;padding:1em;border-radius:1em}.clj-span-right[data-v-8d865138]{text-align:right;width:90%;padding-right:1em}.clj-status-prompts[data-v-bb8e150e]{background-color:#f0f0f0;padding:1em;margin:1em;border-radius:1em}sl-tab[data-v-bb8e150e]::part(base){font-size:.8rem;padding:.8rem;background:#f0f0f0}.clj-orchestrate[data-v-3e33ef53]{margin-left:1rem}:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}h3{font-size:1.2em;line-height:1.1;font-weight:bolder}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.clj-status{margin-bottom:1rem;padding:.5rem;background-color:#f0f0f0;border-radius:5px;box-shadow:0 0 10px #0000001a;max-width:fit-content}.clj-detail{background-color:#f0f0f0;box-shadow:0 0 10px #0000001a;margin-top:-.8rem;margin-bottom:1rem}table.clj-data-table{width:100%}.clj-data-table thead{background-color:#ccc}.clj-data-table th{text-align:left;border-bottom:solid 2px #d8d8d8;padding:.25em;font-size:smaller}.clj-data-table td{font-size:smaller;padding:.5em}.clj-data-table tbody tr:nth-child(odd){background-color:#f8f8f8}.clj-data-table tbody tr:hover{background-color:#f0f0f0}th.clj-center,td.clj-center{text-align:center}th.clj-right,td.clj-right{text-align:right;padding-right:1rem}th.clj-half,td.clj-half{width:50%}th.clj-three-quarters,td.clj-three-quarters{width:75%}th.clj-one-quarter,td.clj-one-quarter{width:25%}table.clj-fixed{table-layout:fixed;width:100%}th.clj-cell-top,td.clj-cell-top{vertical-align:top;padding:.5rem}.clj-two-column-grid{display:block}.clj-two-column-grid>*{padding:1rem}@media (min-width: 768px){.clj-two-column-grid{display:grid;grid-template-columns:1fr 1fr}}.clj-configure{margin:1em;padding:1em}.cl-th-help{float:right}.clj-row{display:flex}.clj-col{flex:50%;margin-right:1rem}.clj-th-tooltip{float:right;margin-right:1rem} ');

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var _a;
  var __defProp$1 = Object.defineProperty;
  var __defProps$1 = Object.defineProperties;
  var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b2)) {
        if (__propIsEnum$1.call(b2, prop))
          __defNormalProp$1(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps$1 = (a2, b2) => __defProps$1(a2, __getOwnPropDescs$1(b2));
  var _export_sfc$1 = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _withScopeId$5$1 = (n3) => (vue.pushScopeId("data-v-e0a0b7f0"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$7$1 = ["onClick"];
  const _hoisted_2$6$1 = ["checked"];
  const _hoisted_3$4$1 = /* @__PURE__ */ _withScopeId$5$1(() => /* @__PURE__ */ vue.createElementVNode("label", { for: "checbox" }, null, -1));
  const _sfc_main$7$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "MultipleSelectCheckBox",
    props: {
      status: { type: String, required: true }
    },
    emits: ["change"],
    setup(__props, { emit: emits }) {
      const props = __props;
      vue.useCssVars((_ctx) => ({
        "51ab8a49": vue.unref(themeColor)
      }));
      const isChecked = vue.computed(() => props.status === "allSelected");
      const toggleChecked = () => {
        emits("change", !isChecked.value);
      };
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "easy-checkbox",
          onClick: vue.withModifiers(toggleChecked, ["stop", "prevent"])
        }, [
          vue.createElementVNode("input", {
            type: "checkbox",
            checked: vue.unref(isChecked),
            class: vue.normalizeClass(__props.status)
          }, null, 10, _hoisted_2$6$1),
          _hoisted_3$4$1
        ], 8, _hoisted_1$7$1);
      };
    }
  });
  var MultipleSelectCheckBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$7$1, [["__scopeId", "data-v-e0a0b7f0"]]);
  const _withScopeId$4$1 = (n3) => (vue.pushScopeId("data-v-7e69a276"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$6$1 = ["checked"];
  const _hoisted_2$5$1 = /* @__PURE__ */ _withScopeId$4$1(() => /* @__PURE__ */ vue.createElementVNode("label", { for: "checbox" }, null, -1));
  const _sfc_main$6$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "SingleSelectCheckBox",
    props: {
      checked: { type: Boolean, required: true }
    },
    emits: ["change"],
    setup(__props, { emit: emits }) {
      vue.useCssVars((_ctx) => ({
        "fdaf7e9e": vue.unref(themeColor)
      }));
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "easy-checkbox",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => emits("change"), ["stop", "prevent"]))
        }, [
          vue.createElementVNode("input", {
            type: "checkbox",
            checked: __props.checked
          }, null, 8, _hoisted_1$6$1),
          _hoisted_2$5$1
        ]);
      };
    }
  });
  var SingleSelectCheckBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$6$1, [["__scopeId", "data-v-7e69a276"]]);
  const _withScopeId$3$1 = (n3) => (vue.pushScopeId("data-v-4ca5de3a"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$5$1 = { class: "easy-data-table__rows-selector" };
  const _hoisted_2$4$1 = { class: "rows-input" };
  const _hoisted_3$3$1 = /* @__PURE__ */ _withScopeId$3$1(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "triangle" }, null, -1));
  const _hoisted_4$3$1 = ["onClick"];
  const _sfc_main$5$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "RowsSelector",
    props: {
      modelValue: { type: Number, required: true },
      rowsItems: { type: Array, required: true }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: emits }) {
      const props = __props;
      vue.useCssVars((_ctx) => ({
        "1b889342": vue.unref(themeColor)
      }));
      const showList = vue.ref(false);
      const showInsideOfTable = vue.ref(false);
      const dataTable = vue.inject("dataTable");
      vue.watch(showList, (val) => {
        if (val && dataTable) {
          const windowHeight = window.innerHeight;
          const dataTableHeight = dataTable.value.getBoundingClientRect().height;
          const dataTableTop = dataTable.value.getBoundingClientRect().top;
          if (windowHeight - (dataTableHeight + dataTableTop) <= 100) {
            showInsideOfTable.value = true;
          } else {
            showInsideOfTable.value = false;
          }
        }
      });
      const rowsComputed = vue.computed({
        get: () => props.modelValue,
        set: (value) => {
          emits("update:modelValue", value);
        }
      });
      const changeSelectedRows = (value) => {
        rowsComputed.value = value;
        showList.value = false;
      };
      const isDescendant = (child, className) => {
        let node = child.parentNode;
        while (node != null) {
          if (node.classList && node.classList.contains(className)) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      };
      const closeRowsSelector = (e2) => {
        if (!isDescendant(e2.target, "easy-data-table__rows-selector"))
          showList.value = false;
      };
      vue.onMounted(() => {
        document.addEventListener("click", closeRowsSelector);
      });
      vue.onBeforeUnmount(() => {
        document.removeEventListener("click", closeRowsSelector);
      });
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5$1, [
          vue.createElementVNode("div", {
            class: "rows-input__wrapper",
            onClick: _cache[0] || (_cache[0] = ($event) => showList.value = !showList.value)
          }, [
            vue.createElementVNode("div", _hoisted_2$4$1, vue.toDisplayString(vue.unref(rowsComputed)), 1),
            _hoisted_3$3$1
          ]),
          vue.createElementVNode("ul", {
            class: vue.normalizeClass(["select-items", { show: showList.value, inside: showInsideOfTable.value }])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.rowsItems, (item) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: item,
                class: vue.normalizeClass({ selected: item === vue.unref(rowsComputed) }),
                onClick: ($event) => changeSelectedRows(item)
              }, vue.toDisplayString(item), 11, _hoisted_4$3$1);
            }), 128))
          ], 2)
        ]);
      };
    }
  });
  var RowsSelector = /* @__PURE__ */ _export_sfc$1(_sfc_main$5$1, [["__scopeId", "data-v-4ca5de3a"]]);
  const _withScopeId$2$1 = (n3) => (vue.pushScopeId("data-v-1fa3a520"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$4$1 = { class: "lds-ring" };
  const _hoisted_2$3$1 = /* @__PURE__ */ _withScopeId$2$1(() => /* @__PURE__ */ vue.createElementVNode("div", null, null, -1));
  const _hoisted_3$2$1 = /* @__PURE__ */ _withScopeId$2$1(() => /* @__PURE__ */ vue.createElementVNode("div", null, null, -1));
  const _hoisted_4$2$1 = /* @__PURE__ */ _withScopeId$2$1(() => /* @__PURE__ */ vue.createElementVNode("div", null, null, -1));
  const _hoisted_5$1$1 = /* @__PURE__ */ _withScopeId$2$1(() => /* @__PURE__ */ vue.createElementVNode("div", null, null, -1));
  const _hoisted_6$1$1 = [
    _hoisted_2$3$1,
    _hoisted_3$2$1,
    _hoisted_4$2$1,
    _hoisted_5$1$1
  ];
  const _sfc_main$4$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "Loading",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "26774109": vue.unref(themeColor)
      }));
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4$1, _hoisted_6$1$1);
      };
    }
  });
  var Loading = /* @__PURE__ */ _export_sfc$1(_sfc_main$4$1, [["__scopeId", "data-v-1fa3a520"]]);
  const _hoisted_1$3$1 = { class: "loader-line" };
  const _sfc_main$3$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "LoadingLine",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "0d327f57": vue.unref(themeColor)
      }));
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3$1);
      };
    }
  });
  var LoadingLine = /* @__PURE__ */ _export_sfc$1(_sfc_main$3$1, [["__scopeId", "data-v-7d281cac"]]);
  const _hoisted_1$2$1 = { class: "buttons-pagination" };
  const _hoisted_2$2$1 = ["onClick"];
  const _sfc_main$2$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "ButtonsPagination",
    props: {
      maxPaginationNumber: { type: Number, required: true },
      currentPaginationNumber: { type: Number, required: true }
    },
    emits: ["updatePage"],
    setup(__props, { emit: emits }) {
      const props = __props;
      vue.useCssVars((_ctx) => ({
        "40dd4f07": vue.unref(themeColor)
      }));
      const totalVisible = 7;
      const changePage = (item) => {
        if (item.type === "button" && !item.active)
          emits("updatePage", item.page);
      };
      const paginationItemsForRender = vue.computed(() => {
        const paginationItems = [];
        if (props.maxPaginationNumber <= totalVisible) {
          for (let i2 = 1; i2 <= props.maxPaginationNumber; i2 += 1) {
            paginationItems.push({
              type: "button",
              page: i2,
              active: i2 === props.currentPaginationNumber,
              activePrev: i2 + 1 === props.currentPaginationNumber
            });
          }
        } else if ([1, 2, props.maxPaginationNumber, props.maxPaginationNumber - 1].includes(props.currentPaginationNumber)) {
          for (let i2 = 1; i2 <= totalVisible; i2 += 1) {
            if (i2 <= 3) {
              paginationItems.push({
                type: "button",
                page: i2,
                active: i2 === props.currentPaginationNumber,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            } else if (i2 === 4) {
              paginationItems.push({
                type: "omission"
              });
            } else {
              const page = props.maxPaginationNumber - (totalVisible - i2);
              paginationItems.push({
                type: "button",
                page,
                active: page === props.currentPaginationNumber,
                activePrev: page + 1 === props.currentPaginationNumber
              });
            }
          }
        } else if ([3, 4].includes(props.currentPaginationNumber)) {
          for (let i2 = 1; i2 <= totalVisible; i2 += 1) {
            if (i2 <= 5) {
              paginationItems.push({
                type: "button",
                page: i2,
                active: i2 === props.currentPaginationNumber,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            } else if (i2 === 6) {
              paginationItems.push({
                type: "omission"
              });
            } else {
              paginationItems.push({
                type: "button",
                page: props.maxPaginationNumber,
                active: props.maxPaginationNumber === props.currentPaginationNumber,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            }
          }
        } else if ([props.maxPaginationNumber - 2, props.maxPaginationNumber - 3].includes(props.currentPaginationNumber)) {
          for (let i2 = 1; i2 <= totalVisible; i2 += 1) {
            if (i2 === 1) {
              paginationItems.push({
                type: "button",
                page: 1,
                active: props.currentPaginationNumber === 1,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            } else if (i2 === 2) {
              paginationItems.push({
                type: "omission"
              });
            } else {
              const page = props.maxPaginationNumber - (totalVisible - i2);
              paginationItems.push({
                type: "button",
                page,
                active: page === props.currentPaginationNumber,
                activePrev: page + 1 === props.currentPaginationNumber
              });
            }
          }
        } else {
          for (let i2 = 1; i2 <= totalVisible; i2 += 1) {
            if (i2 === 1) {
              paginationItems.push({
                type: "button",
                page: 1,
                active: props.currentPaginationNumber === 1,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            } else if (i2 === 2 || i2 === 6) {
              paginationItems.push({
                type: "omission"
              });
            } else if (i2 === 7) {
              paginationItems.push({
                type: "button",
                page: props.maxPaginationNumber,
                active: props.maxPaginationNumber === props.currentPaginationNumber,
                activePrev: i2 + 1 === props.currentPaginationNumber
              });
            } else {
              const diff = 4 - i2;
              const page = props.currentPaginationNumber - diff;
              paginationItems.push({
                type: "button",
                page,
                active: page === props.currentPaginationNumber,
                activePrev: page + 1 === props.currentPaginationNumber
              });
            }
          }
        }
        return paginationItems;
      });
      const themeColor = vue.inject("themeColor");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2$1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(paginationItemsForRender), (item, i2) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: i2,
              class: vue.normalizeClass(["item", {
                button: item.type === "button",
                active: item.type === "button" && item.active,
                "active-prev": item.type === "button" && item.activePrev,
                omission: item.type === "omission"
              }]),
              onClick: ($event) => changePage(item)
            }, vue.toDisplayString(item.type === "button" ? item.page : "..."), 11, _hoisted_2$2$1);
          }), 128))
        ]);
      };
    }
  });
  var ButtonsPagination = /* @__PURE__ */ _export_sfc$1(_sfc_main$2$1, [["__scopeId", "data-v-4c681fa2"]]);
  const _withScopeId$1$1 = (n3) => (vue.pushScopeId("data-v-c9da5286"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$1$1 = /* @__PURE__ */ _withScopeId$1$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "arrow arrow-right" }, null, -1));
  const _hoisted_2$1$1 = [
    _hoisted_1$1$1
  ];
  const _hoisted_3$1$1 = /* @__PURE__ */ _withScopeId$1$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "arrow arrow-left" }, null, -1));
  const _hoisted_4$1$1 = [
    _hoisted_3$1$1
  ];
  const _sfc_main$1$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "PaginationArrows",
    props: {
      isFirstPage: { type: Boolean, required: false },
      isLastPage: { type: Boolean, required: false }
    },
    emits: ["clickPrevPage", "clickNextPage"],
    setup(__props, { emit: emits }) {
      const slots = vue.useSlots();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["previous-page__click-button", { "first-page": __props.isFirstPage }]),
            onClick: _cache[0] || (_cache[0] = ($event) => emits("clickPrevPage"))
          }, _hoisted_2$1$1, 2),
          vue.unref(slots).buttonsPagination ? vue.renderSlot(_ctx.$slots, "buttonsPagination", { key: 0 }, void 0, true) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["next-page__click-button", { "last-page": __props.isLastPage }]),
            onClick: _cache[1] || (_cache[1] = ($event) => emits("clickNextPage"))
          }, _hoisted_4$1$1, 2)
        ], 64);
      };
    }
  });
  var PaginationArrows = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["__scopeId", "data-v-c9da5286"]]);
  function useClickRow(clickEventType, isMultipleSelectable, showIndex, emits) {
    const clickRow = (item, clickType, $event) => {
      if (clickEventType.value !== clickType)
        return;
      const clickRowArgument = __spreadValues$1({}, item);
      if (isMultipleSelectable.value) {
        const { checkbox } = item;
        delete clickRowArgument.checkbox;
        clickRowArgument.isSelected = checkbox;
      }
      if (showIndex.value) {
        const { index } = item;
        delete clickRowArgument.index;
        clickRowArgument.indexInCurrentPage = index;
      }
      emits("clickRow", clickRowArgument, $event);
    };
    return {
      clickRow
    };
  }
  function useExpandableRow(items, prevPageEndIndex, emits) {
    const expandingItemIndexList = vue.ref([]);
    const updateExpandingItemIndexList = (expandingItemIndex, expandingItem, event) => {
      event.stopPropagation();
      const index = expandingItemIndexList.value.indexOf(expandingItemIndex);
      if (index !== -1) {
        expandingItemIndexList.value.splice(index, 1);
      } else {
        const currentPageExpandIndex = items.value.findIndex((item) => JSON.stringify(item) === JSON.stringify(expandingItem));
        emits("expandRow", prevPageEndIndex.value + currentPageExpandIndex, expandingItem);
        expandingItemIndexList.value.push(prevPageEndIndex.value + currentPageExpandIndex);
      }
    };
    const clearExpandingItemIndexList = () => {
      expandingItemIndexList.value = [];
    };
    return {
      expandingItemIndexList,
      updateExpandingItemIndexList,
      clearExpandingItemIndexList
    };
  }
  function useFixedColumn(headersForRender) {
    const fixedHeaders = vue.computed(() => headersForRender.value.filter((header) => header.fixed));
    const lastFixedColumn = vue.computed(() => {
      if (!fixedHeaders.value.length)
        return "";
      return fixedHeaders.value[fixedHeaders.value.length - 1].value;
    });
    const fixedColumnsInfos = vue.computed(() => {
      if (!fixedHeaders.value.length)
        return [];
      const fixedHeadersWidthArr = fixedHeaders.value.map((header) => {
        var _a2;
        return (_a2 = header.width) != null ? _a2 : 100;
      });
      return fixedHeaders.value.map((header, index) => {
        var _a2, _b;
        return {
          value: header.value,
          fixed: (_a2 = header.fixed) != null ? _a2 : true,
          width: (_b = header.width) != null ? _b : 100,
          distance: index === 0 ? 0 : fixedHeadersWidthArr.reduce((previous, current, i2) => {
            let distance = previous;
            if (i2 < index)
              distance += current;
            return distance;
          })
        };
      });
    });
    return {
      fixedHeaders,
      lastFixedColumn,
      fixedColumnsInfos
    };
  }
  function useHeaders(showIndexSymbol, checkboxColumnWidth, expandColumnWidth, fixedCheckbox, fixedExpand, fixedIndex, headers, ifHasExpandSlot, indexColumnWidth, isMultipleSelectable, isServerSideMode, mustSort, serverOptionsComputed, showIndex, sortBy, sortType, multiSort, updateServerOptionsSort, emits) {
    const hasFixedColumnsFromUser = vue.computed(() => headers.value.findIndex((header) => header.fixed) !== -1);
    const fixedHeadersFromUser = vue.computed(() => {
      if (hasFixedColumnsFromUser.value)
        return headers.value.filter((header) => header.fixed);
      return [];
    });
    const unFixedHeaders = vue.computed(() => headers.value.filter((header) => !header.fixed));
    const generateClientSortOptions = (sortByValue, sortTypeValue) => {
      if (Array.isArray(sortByValue) && Array.isArray(sortTypeValue)) {
        return {
          sortBy: sortByValue,
          sortDesc: sortTypeValue.map((val) => val === "desc")
        };
      }
      if (sortByValue !== "") {
        return {
          sortBy: sortBy.value,
          sortDesc: sortType.value === "desc"
        };
      }
      return null;
    };
    const clientSortOptions = vue.ref(generateClientSortOptions(sortBy.value, sortType.value));
    const headersForRender = vue.computed(() => {
      var _a2;
      const fixedHeaders = [
        ...fixedHeadersFromUser.value,
        ...unFixedHeaders.value
      ];
      const headersSorting = fixedHeaders.map((header) => {
        const headerSorting = Object.assign(header);
        if (headerSorting.sortable)
          headerSorting.sortType = "none";
        if (serverOptionsComputed.value) {
          if (Array.isArray(serverOptionsComputed.value.sortBy) && Array.isArray(serverOptionsComputed.value.sortType) && serverOptionsComputed.value.sortBy.includes(headerSorting.value)) {
            const index = serverOptionsComputed.value.sortBy.indexOf(headerSorting.value);
            headerSorting.sortType = serverOptionsComputed.value.sortType[index];
          } else if (headerSorting.value === serverOptionsComputed.value.sortBy && serverOptionsComputed.value.sortType) {
            headerSorting.sortType = serverOptionsComputed.value.sortType;
          }
        }
        if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy) && Array.isArray(clientSortOptions.value.sortDesc) && clientSortOptions.value.sortBy.includes(headerSorting.value)) {
          const index = clientSortOptions.value.sortBy.indexOf(headerSorting.value);
          headerSorting.sortType = clientSortOptions.value.sortDesc[index] ? "desc" : "asc";
        } else if (clientSortOptions.value && headerSorting.value === clientSortOptions.value.sortBy) {
          headerSorting.sortType = clientSortOptions.value.sortDesc ? "desc" : "asc";
        }
        return headerSorting;
      });
      let headersWithExpand = [];
      if (!ifHasExpandSlot.value) {
        headersWithExpand = headersSorting;
      } else {
        const headerExpand = fixedExpand.value || hasFixedColumnsFromUser.value ? {
          text: "",
          value: "expand",
          fixed: true,
          width: expandColumnWidth.value
        } : { text: "", value: "expand" };
        headersWithExpand = [headerExpand, ...headersSorting];
      }
      let headersWithIndex = [];
      if (!showIndex.value) {
        headersWithIndex = headersWithExpand;
      } else {
        const headerIndex = fixedIndex.value || hasFixedColumnsFromUser.value ? {
          text: showIndexSymbol.value,
          value: "index",
          fixed: true,
          width: indexColumnWidth.value
        } : { text: showIndexSymbol.value, value: "index" };
        headersWithIndex = [headerIndex, ...headersWithExpand];
      }
      let headersWithCheckbox = [];
      if (!isMultipleSelectable.value) {
        headersWithCheckbox = headersWithIndex;
      } else {
        const headerCheckbox = fixedCheckbox.value || hasFixedColumnsFromUser.value ? {
          text: "checkbox",
          value: "checkbox",
          fixed: true,
          width: (_a2 = checkboxColumnWidth.value) != null ? _a2 : 36
        } : { text: "checkbox", value: "checkbox" };
        headersWithCheckbox = [headerCheckbox, ...headersWithIndex];
      }
      return headersWithCheckbox;
    });
    const headerColumns = vue.computed(() => headersForRender.value.map((header) => header.value));
    const updateSortField = (newSortBy, oldSortType) => {
      let newSortType = null;
      if (oldSortType === "none") {
        newSortType = "asc";
      } else if (oldSortType === "asc") {
        newSortType = "desc";
      } else {
        newSortType = mustSort.value ? "asc" : null;
      }
      if (isServerSideMode.value) {
        updateServerOptionsSort(newSortBy, newSortType);
      }
      if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy) && Array.isArray(clientSortOptions.value.sortDesc)) {
        const index = clientSortOptions.value.sortBy.indexOf(newSortBy);
        if (index === -1) {
          if (newSortType !== null) {
            clientSortOptions.value.sortBy.push(newSortBy);
            clientSortOptions.value.sortDesc.push(newSortType === "desc");
          }
        } else if (newSortType === null) {
          clientSortOptions.value.sortDesc.splice(index, 1);
          clientSortOptions.value.sortBy.splice(index, 1);
        } else {
          clientSortOptions.value.sortDesc[index] = newSortType === "desc";
        }
      } else if (newSortType === null) {
        clientSortOptions.value = null;
      } else {
        clientSortOptions.value = {
          sortBy: newSortBy,
          sortDesc: newSortType === "desc"
        };
      }
      emits("updateSort", {
        sortType: newSortType,
        sortBy: newSortBy
      });
    };
    const isMultiSorting = (headerText) => {
      if (serverOptionsComputed.value) {
        if (Array.isArray(serverOptionsComputed.value.sortBy))
          return serverOptionsComputed.value.sortBy.includes(headerText);
      }
      if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy)) {
        return clientSortOptions.value.sortBy.includes(headerText);
      }
      return false;
    };
    const getMultiSortNumber = (headerText) => {
      if (serverOptionsComputed.value) {
        if (Array.isArray(serverOptionsComputed.value.sortBy))
          return serverOptionsComputed.value.sortBy.indexOf(headerText) + 1;
      }
      if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy)) {
        return clientSortOptions.value.sortBy.indexOf(headerText) + 1;
      }
      return false;
    };
    return {
      clientSortOptions,
      headerColumns,
      headersForRender,
      updateSortField,
      isMultiSorting,
      getMultiSortNumber
    };
  }
  function usePageItems(currentPaginationNumber, isMultipleSelectable, isServerSideMode, items, rowsPerPageRef, selectItemsComputed, showIndex, totalItems, totalItemsLength) {
    const currentPageFirstIndex = vue.computed(() => (currentPaginationNumber.value - 1) * rowsPerPageRef.value + 1);
    const currentPageLastIndex = vue.computed(() => {
      if (isServerSideMode.value) {
        return Math.min(totalItemsLength.value, currentPaginationNumber.value * rowsPerPageRef.value);
      }
      return Math.min(totalItems.value.length, currentPaginationNumber.value * rowsPerPageRef.value);
    });
    const itemsInPage = vue.computed(() => {
      if (isServerSideMode.value)
        return items.value;
      return totalItems.value.slice(currentPageFirstIndex.value - 1, currentPageLastIndex.value);
    });
    const itemsWithIndex = vue.computed(() => {
      if (showIndex.value) {
        return itemsInPage.value.map((item, index) => __spreadValues$1({ index: currentPageFirstIndex.value + index }, item));
      }
      return itemsInPage.value;
    });
    const multipleSelectStatus = vue.computed(() => {
      if (selectItemsComputed.value.length === 0) {
        return "noneSelected";
      }
      const isNoneSelected = selectItemsComputed.value.every((itemSelected) => {
        if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) !== -1) {
          return false;
        }
        return true;
      });
      if (isNoneSelected)
        return "noneSelected";
      if (selectItemsComputed.value.length === totalItems.value.length) {
        const isAllSelected = selectItemsComputed.value.every((itemSelected) => {
          if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) === -1) {
            return false;
          }
          return true;
        });
        return isAllSelected ? "allSelected" : "partSelected";
      }
      return "partSelected";
    });
    const pageItems = vue.computed(() => {
      if (!isMultipleSelectable.value)
        return itemsWithIndex.value;
      if (multipleSelectStatus.value === "allSelected") {
        return itemsWithIndex.value.map((item) => __spreadValues$1({ checkbox: true }, item));
      }
      if (multipleSelectStatus.value === "noneSelected") {
        return itemsWithIndex.value.map((item) => __spreadValues$1({ checkbox: false }, item));
      }
      return itemsWithIndex.value.map((item) => {
        const isSelected = selectItemsComputed.value.findIndex((selectItem) => {
          const itemDeepCloned = __spreadValues$1({}, item);
          delete itemDeepCloned.index;
          return JSON.stringify(selectItem) === JSON.stringify(itemDeepCloned);
        }) !== -1;
        return __spreadValues$1({ checkbox: isSelected }, item);
      });
    });
    return {
      currentPageFirstIndex,
      currentPageLastIndex,
      multipleSelectStatus,
      pageItems
    };
  }
  function usePagination(currentPage, isServerSideMode, loading, totalItemsLength, rowsPerPage, serverOptions, updateServerOptionsPage) {
    const currentPaginationNumber = vue.ref(serverOptions.value ? serverOptions.value.page : currentPage.value);
    const maxPaginationNumber = vue.computed(() => Math.ceil(totalItemsLength.value / rowsPerPage.value));
    const isLastPage = vue.computed(() => maxPaginationNumber.value === 0 || currentPaginationNumber.value === maxPaginationNumber.value);
    const isFirstPage = vue.computed(() => currentPaginationNumber.value === 1);
    const nextPage = () => {
      if (totalItemsLength.value === 0)
        return;
      if (isLastPage.value)
        return;
      if (loading.value)
        return;
      if (isServerSideMode.value) {
        const nextPaginationNumber = currentPaginationNumber.value + 1;
        updateServerOptionsPage(nextPaginationNumber);
      } else {
        currentPaginationNumber.value += 1;
      }
    };
    const prevPage = () => {
      if (totalItemsLength.value === 0)
        return;
      if (isFirstPage.value)
        return;
      if (loading.value)
        return;
      if (isServerSideMode.value) {
        const prevPaginationNumber = currentPaginationNumber.value - 1;
        updateServerOptionsPage(prevPaginationNumber);
      } else {
        currentPaginationNumber.value -= 1;
      }
    };
    const updatePage = (page) => {
      if (loading.value)
        return;
      if (isServerSideMode.value) {
        updateServerOptionsPage(page);
      } else {
        currentPaginationNumber.value = page;
      }
    };
    const updateCurrentPaginationNumber = (page) => {
      currentPaginationNumber.value = page;
    };
    return {
      currentPaginationNumber,
      maxPaginationNumber,
      isLastPage,
      isFirstPage,
      nextPage,
      prevPage,
      updatePage,
      updateCurrentPaginationNumber
    };
  }
  function useRows(isServerSideMode, rowsItems, serverOptions, rowsPerPage) {
    const rowsItemsComputed = vue.computed(() => {
      if (!isServerSideMode.value && rowsItems.value.findIndex((item) => item === rowsPerPage.value) === -1) {
        return [rowsPerPage.value, ...rowsItems.value];
      }
      return rowsItems.value;
    });
    const rowsPerPageRef = vue.ref(serverOptions.value ? serverOptions.value.rowsPerPage : rowsPerPage.value);
    const updateRowsPerPage = (option) => {
      rowsPerPageRef.value = option;
    };
    return {
      rowsItemsComputed,
      rowsPerPageRef,
      updateRowsPerPage
    };
  }
  function useServerOptions(serverOptions, multiSort, emits) {
    const serverOptionsComputed = vue.computed({
      get: () => {
        if (serverOptions.value) {
          const {
            page,
            rowsPerPage,
            sortBy,
            sortType
          } = serverOptions.value;
          return {
            page,
            rowsPerPage,
            sortBy: sortBy != null ? sortBy : null,
            sortType: sortType != null ? sortType : null
          };
        }
        return null;
      },
      set: (value) => {
        emits("update:serverOptions", value);
      }
    });
    const updateServerOptionsPage = (page) => {
      if (serverOptionsComputed.value) {
        serverOptionsComputed.value = __spreadProps$1(__spreadValues$1({}, serverOptionsComputed.value), {
          page
        });
      }
    };
    const updateServerOptionsRowsPerPage = (rowsPerPage) => {
      if (serverOptionsComputed.value) {
        serverOptionsComputed.value = __spreadProps$1(__spreadValues$1({}, serverOptionsComputed.value), {
          page: 1,
          rowsPerPage
        });
      }
    };
    const updateServerOptionsSort = (newSortBy, newSortType) => {
      if (serverOptionsComputed.value) {
        if (multiSort.value && Array.isArray(serverOptionsComputed.value.sortBy) && Array.isArray(serverOptionsComputed.value.sortType)) {
          const index = serverOptionsComputed.value.sortBy.findIndex((val) => val === newSortBy);
          if (index === -1 && newSortType !== null) {
            serverOptionsComputed.value.sortBy.push(newSortBy);
            serverOptionsComputed.value.sortType.push(newSortType);
          }
          if (newSortType === null) {
            serverOptionsComputed.value.sortBy.splice(index, 1);
            serverOptionsComputed.value.sortType.splice(index, 1);
          } else {
            serverOptionsComputed.value.sortType[index] = newSortType;
          }
        } else {
          serverOptionsComputed.value = __spreadProps$1(__spreadValues$1({}, serverOptionsComputed.value), {
            sortBy: newSortType !== null ? newSortBy : null,
            sortType: newSortType
          });
        }
      }
    };
    return {
      serverOptionsComputed,
      updateServerOptionsPage,
      updateServerOptionsSort,
      updateServerOptionsRowsPerPage
    };
  }
  function getItemValue(column, item) {
    var _a2;
    if (column.includes(".")) {
      const keys = column.split(".");
      const { length } = keys;
      let content;
      let i2 = 0;
      while (i2 < length) {
        if (i2 === 0) {
          content = item[keys[0]];
        } else if (content && typeof content === "object") {
          content = content[keys[i2]];
        } else {
          content = "";
          break;
        }
        i2 += 1;
      }
      return content != null ? content : "";
    }
    return (_a2 = item[column]) != null ? _a2 : "";
  }
  function generateColumnContent(column, item) {
    const content = getItemValue(column, item);
    return Array.isArray(content) ? content.join(",") : content;
  }
  function useTotalItems(clientSortOptions, filterOptions, isServerSideMode, items, itemsSelected, searchField, searchValue, serverItemsLength, multiSort, emits) {
    const generateSearchingTarget = (item) => {
      if (typeof searchField.value === "string" && searchField.value !== "")
        return getItemValue(searchField.value, item);
      if (Array.isArray(searchField.value)) {
        let searchString = "";
        searchField.value.forEach((field) => {
          searchString += getItemValue(field, item);
        });
        return searchString;
      }
      return Object.values(item).join(" ");
    };
    const itemsSearching = vue.computed(() => {
      if (!isServerSideMode.value && searchValue.value !== "") {
        const regex = new RegExp(searchValue.value, "i");
        return items.value.filter((item) => regex.test(generateSearchingTarget(item)));
      }
      return items.value;
    });
    const itemsFiltering = vue.computed(() => {
      let itemsFiltered = [...itemsSearching.value];
      if (filterOptions.value) {
        filterOptions.value.forEach((option) => {
          itemsFiltered = itemsFiltered.filter((item) => {
            const { field, comparison, criteria } = option;
            if (typeof comparison === "function") {
              return comparison(getItemValue(field, item), criteria);
            }
            const itemValue = getItemValue(field, item);
            switch (comparison) {
              case "=":
                return itemValue === criteria;
              case "!=":
                return itemValue !== criteria;
              case ">":
                return itemValue > criteria;
              case "<":
                return itemValue < criteria;
              case "<=":
                return itemValue <= criteria;
              case ">=":
                return itemValue >= criteria;
              case "between":
                return itemValue >= Math.min(...criteria) && itemValue <= Math.max(...criteria);
              case "in":
                return criteria.includes(itemValue);
              default:
                return itemValue === criteria;
            }
          });
        });
        return itemsFiltered;
      }
      return itemsSearching.value;
    });
    vue.watch(itemsFiltering, (newVal) => {
      if (filterOptions.value) {
        emits("updateFilter", newVal);
      }
    }, { immediate: true, deep: true });
    function recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index) {
      const sortBy = sortByArr[index];
      const sortDesc = sortDescArr[index];
      const sorted = (index === 0 ? itemsToSort : recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index - 1)).sort((a2, b2) => {
        let isAllSame = true;
        for (let i2 = 0; i2 < index; i2 += 1) {
          if (getItemValue(sortByArr[i2], a2) !== getItemValue(sortByArr[i2], b2)) {
            isAllSame = false;
            break;
          }
        }
        if (isAllSame) {
          if (getItemValue(sortBy, a2) < getItemValue(sortBy, b2))
            return sortDesc ? 1 : -1;
          if (getItemValue(sortBy, a2) > getItemValue(sortBy, b2))
            return sortDesc ? -1 : 1;
          return 0;
        }
        return 0;
      });
      return sorted;
    }
    const totalItems = vue.computed(() => {
      if (isServerSideMode.value)
        return items.value;
      if (clientSortOptions.value === null)
        return itemsFiltering.value;
      const { sortBy, sortDesc } = clientSortOptions.value;
      const itemsFilteringSorted = [...itemsFiltering.value];
      if (multiSort && Array.isArray(sortBy) && Array.isArray(sortDesc)) {
        if (sortBy.length === 0)
          return itemsFilteringSorted;
        return recursionMuiltSort(sortBy, sortDesc, itemsFilteringSorted, sortBy.length - 1);
      }
      return itemsFilteringSorted.sort((a2, b2) => {
        if (getItemValue(sortBy, a2) < getItemValue(sortBy, b2))
          return sortDesc ? 1 : -1;
        if (getItemValue(sortBy, a2) > getItemValue(sortBy, b2))
          return sortDesc ? -1 : 1;
        return 0;
      });
    });
    const totalItemsLength = vue.computed(() => isServerSideMode.value ? serverItemsLength.value : totalItems.value.length);
    const selectItemsComputed = vue.computed({
      get: () => {
        var _a2;
        return (_a2 = itemsSelected.value) != null ? _a2 : [];
      },
      set: (value) => {
        emits("update:itemsSelected", value);
      }
    });
    const toggleSelectAll = (isChecked) => {
      selectItemsComputed.value = isChecked ? totalItems.value : [];
      if (isChecked)
        emits("selectAll");
    };
    const toggleSelectItem = (item) => {
      const isAlreadyChecked = item.checkbox;
      delete item.checkbox;
      delete item.index;
      if (!isAlreadyChecked) {
        const selectItemsArr = selectItemsComputed.value;
        selectItemsArr.unshift(item);
        selectItemsComputed.value = selectItemsArr;
        emits("selectRow", item);
      } else {
        selectItemsComputed.value = selectItemsComputed.value.filter((selectedItem) => JSON.stringify(selectedItem) !== JSON.stringify(item));
        emits("deselectRow", item);
      }
    };
    return {
      totalItems,
      selectItemsComputed,
      totalItemsLength,
      toggleSelectAll,
      toggleSelectItem
    };
  }
  var propsWithDefault = {
    alternating: {
      type: Boolean,
      default: false
    },
    buttonsPagination: {
      type: Boolean,
      default: false
    },
    checkboxColumnWidth: {
      type: Number,
      default: null
    },
    currentPage: {
      type: Number,
      default: 1
    },
    emptyMessage: {
      type: String,
      default: "No Available Data"
    },
    expandColumnWidth: {
      type: Number,
      default: 36
    },
    filterOptions: {
      type: Array,
      default: null
    },
    fixedExpand: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    fixedCheckbox: {
      type: Boolean,
      default: false
    },
    fixedIndex: {
      type: Boolean,
      default: false
    },
    headerTextDirection: {
      type: String,
      default: "left"
    },
    bodyTextDirection: {
      type: String,
      default: "left"
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideRowsPerPage: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    indexColumnWidth: {
      type: Number,
      default: 60
    },
    itemsSelected: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    rowsPerPage: {
      type: Number,
      default: 25
    },
    rowsItems: {
      type: Array,
      default: () => [25, 50, 100]
    },
    rowsPerPageMessage: {
      type: String,
      default: "rows per page:"
    },
    searchField: {
      type: [String, Array],
      default: ""
    },
    searchValue: {
      type: String,
      default: ""
    },
    serverOptions: {
      type: Object,
      default: null
    },
    serverItemsLength: {
      type: Number,
      default: 0
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: [String, Array],
      default: ""
    },
    sortType: {
      type: [String, Array],
      default: "asc"
    },
    multiSort: {
      type: Boolean,
      default: false
    },
    tableMinHeight: {
      type: Number,
      default: 180
    },
    tableHeight: {
      type: Number,
      default: null
    },
    themeColor: {
      type: String,
      default: "#42b883"
    },
    tableClassName: {
      type: String,
      default: ""
    },
    headerClassName: {
      type: String,
      default: ""
    },
    headerItemClassName: {
      type: [Function, String],
      default: ""
    },
    bodyRowClassName: {
      type: [Function, String],
      default: ""
    },
    bodyExpandRowClassName: {
      type: [Function, String],
      default: ""
    },
    bodyItemClassName: {
      type: [Function, String],
      default: ""
    },
    noHover: {
      type: Boolean,
      default: false
    },
    borderCell: {
      type: Boolean,
      default: false
    },
    mustSort: {
      type: Boolean,
      default: false
    },
    rowsOfPageSeparatorMessage: {
      type: String,
      default: "of"
    },
    clickEventType: {
      type: String,
      default: "single"
    },
    clickRowToExpand: {
      type: Boolean,
      default: false
    },
    tableNodeId: {
      type: String,
      default: ""
    },
    showIndexSymbol: {
      type: String,
      default: "#"
    },
    preventContextMenuRow: {
      type: Boolean,
      default: true
    }
  };
  const _withScopeId$9 = (n3) => (vue.pushScopeId("data-v-32683533"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$j = ["id"];
  const _hoisted_2$i = ["onClick"];
  const _hoisted_3$i = {
    key: 3,
    class: "header-text"
  };
  const _hoisted_4$h = {
    key: 5,
    class: "multi-sort__number"
  };
  const _hoisted_5$f = ["onClick", "onDblclick", "onContextmenu"];
  const _hoisted_6$e = ["onClick"];
  const _hoisted_7$c = ["colspan"];
  const _hoisted_8$a = {
    key: 0,
    class: "vue3-easy-data-table__loading"
  };
  const _hoisted_9$9 = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "vue3-easy-data-table__loading-mask" }, null, -1));
  const _hoisted_10$9 = { class: "loading-entity" };
  const _hoisted_11$9 = {
    key: 1,
    class: "vue3-easy-data-table__message"
  };
  const _hoisted_12$9 = {
    key: 0,
    class: "vue3-easy-data-table__footer"
  };
  const _hoisted_13$9 = {
    key: 0,
    class: "pagination__rows-per-page"
  };
  const _hoisted_14$9 = { class: "pagination__items-index" };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    __name: "DataTable",
    props: __spreadProps$1(__spreadValues$1({}, propsWithDefault), {
      items: {
        type: Array,
        required: true
      },
      headers: {
        type: Array,
        required: true
      }
    }),
    emits: [
      "clickRow",
      "contextmenuRow",
      "selectRow",
      "deselectRow",
      "expandRow",
      "updateSort",
      "updateFilter",
      "update:itemsSelected",
      "update:serverOptions",
      "updatePageItems",
      "updateTotalItems",
      "selectAll"
    ],
    setup(__props, { expose, emit: emits }) {
      const props = __props;
      vue.useCssVars((_ctx) => ({
        "da0d4328": vue.unref(tableMinHeightPx),
        "3037e504": vue.unref(tableHeightPx)
      }));
      const {
        tableNodeId,
        clickEventType,
        bodyTextDirection,
        checkboxColumnWidth,
        currentPage,
        expandColumnWidth,
        filterOptions,
        fixedCheckbox,
        fixedExpand,
        fixedHeader,
        fixedIndex,
        headers,
        headerTextDirection,
        indexColumnWidth,
        items,
        itemsSelected,
        loading,
        mustSort,
        multiSort,
        rowsItems,
        rowsPerPage,
        searchField,
        searchValue,
        serverItemsLength,
        serverOptions,
        showIndex,
        sortBy,
        sortType,
        tableHeight,
        tableMinHeight,
        themeColor,
        rowsOfPageSeparatorMessage,
        showIndexSymbol,
        preventContextMenuRow
      } = vue.toRefs(props);
      const tableHeightPx = vue.computed(() => tableHeight.value ? `${tableHeight.value}px` : null);
      const tableMinHeightPx = vue.computed(() => `${tableMinHeight.value}px`);
      vue.provide("themeColor", themeColor.value);
      const slots = vue.useSlots();
      const ifHasPaginationSlot = vue.computed(() => !!slots.pagination);
      const ifHasLoadingSlot = vue.computed(() => !!slots.loading);
      const ifHasExpandSlot = vue.computed(() => !!slots.expand);
      const ifHasBodySlot = vue.computed(() => !!slots.body);
      const dataTable = vue.ref();
      const tableBody = vue.ref();
      vue.provide("dataTable", dataTable);
      const showShadow = vue.ref(false);
      vue.onMounted(() => {
        tableBody.value.addEventListener("scroll", () => {
          showShadow.value = tableBody.value.scrollLeft > 0;
        });
      });
      const isMultipleSelectable = vue.computed(() => itemsSelected.value !== null);
      const isServerSideMode = vue.computed(() => serverOptions.value !== null);
      const {
        serverOptionsComputed,
        updateServerOptionsPage,
        updateServerOptionsSort,
        updateServerOptionsRowsPerPage
      } = useServerOptions(serverOptions, multiSort, emits);
      const {
        clientSortOptions,
        headerColumns,
        headersForRender,
        updateSortField,
        isMultiSorting,
        getMultiSortNumber
      } = useHeaders(showIndexSymbol, checkboxColumnWidth, expandColumnWidth, fixedCheckbox, fixedExpand, fixedIndex, headers, ifHasExpandSlot, indexColumnWidth, isMultipleSelectable, isServerSideMode, mustSort, serverOptionsComputed, showIndex, sortBy, sortType, multiSort, updateServerOptionsSort, emits);
      const {
        rowsItemsComputed,
        rowsPerPageRef,
        updateRowsPerPage
      } = useRows(isServerSideMode, rowsItems, serverOptions, rowsPerPage);
      const {
        totalItems,
        selectItemsComputed,
        totalItemsLength,
        toggleSelectAll,
        toggleSelectItem
      } = useTotalItems(clientSortOptions, filterOptions, isServerSideMode, items, itemsSelected, searchField, searchValue, serverItemsLength, multiSort, emits);
      const {
        currentPaginationNumber,
        maxPaginationNumber,
        isLastPage,
        isFirstPage,
        nextPage,
        prevPage,
        updatePage,
        updateCurrentPaginationNumber
      } = usePagination(currentPage, isServerSideMode, loading, totalItemsLength, rowsPerPageRef, serverOptions, updateServerOptionsPage);
      const {
        currentPageFirstIndex,
        currentPageLastIndex,
        multipleSelectStatus,
        pageItems
      } = usePageItems(currentPaginationNumber, isMultipleSelectable, isServerSideMode, items, rowsPerPageRef, selectItemsComputed, showIndex, totalItems, totalItemsLength);
      const prevPageEndIndex = vue.computed(() => {
        if (currentPaginationNumber.value === 0)
          return 0;
        return (currentPaginationNumber.value - 1) * rowsPerPageRef.value;
      });
      const {
        expandingItemIndexList,
        updateExpandingItemIndexList,
        clearExpandingItemIndexList
      } = useExpandableRow(pageItems, prevPageEndIndex, emits);
      const {
        fixedHeaders,
        lastFixedColumn,
        fixedColumnsInfos
      } = useFixedColumn(headersForRender);
      const {
        clickRow
      } = useClickRow(clickEventType, isMultipleSelectable, showIndex, emits);
      const contextMenuRow = (item, $event) => {
        if (preventContextMenuRow.value)
          $event.preventDefault();
        emits("contextmenuRow", item, $event);
      };
      const getColStyle = (header) => {
        var _a2;
        const width = (_a2 = header.width) != null ? _a2 : fixedHeaders.value.length ? 100 : null;
        if (width)
          return `width: ${width}px; min-width: ${width}px;`;
        return void 0;
      };
      const getFixedDistance = (column, type = "th") => {
        if (!fixedHeaders.value.length)
          return void 0;
        const columInfo = fixedColumnsInfos.value.find((info) => info.value === column);
        if (columInfo) {
          return `left: ${columInfo.distance}px;z-index: ${type === "th" ? 3 : 1};position: sticky;`;
        }
        return void 0;
      };
      vue.watch(loading, (newVal, oldVal) => {
        if (serverOptionsComputed.value) {
          if (newVal === false && oldVal === true) {
            updateCurrentPaginationNumber(serverOptionsComputed.value.page);
            clearExpandingItemIndexList();
          }
        }
      });
      vue.watch(rowsPerPageRef, (value) => {
        if (!isServerSideMode.value) {
          updatePage(1);
        } else {
          updateServerOptionsRowsPerPage(value);
        }
      });
      vue.watch([searchValue, filterOptions], () => {
        if (!isServerSideMode.value) {
          updatePage(1);
        }
      });
      vue.watch([currentPaginationNumber, clientSortOptions, searchField, searchValue, filterOptions], () => {
        clearExpandingItemIndexList();
      }, { deep: true });
      vue.watch(pageItems, (value) => {
        emits("updatePageItems", value);
      }, { deep: true });
      vue.watch(totalItems, (value) => {
        emits("updateTotalItems", value);
      }, { deep: true });
      expose({
        currentPageFirstIndex,
        currentPageLastIndex,
        clientItemsLength: totalItemsLength,
        maxPaginationNumber,
        currentPaginationNumber,
        isLastPage,
        isFirstPage,
        nextPage,
        prevPage,
        updatePage,
        rowsPerPageOptions: rowsItemsComputed,
        rowsPerPageActiveOption: rowsPerPageRef,
        updateRowsPerPageActiveOption: updateRowsPerPage
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "dataTable",
          ref: dataTable,
          class: vue.normalizeClass(["vue3-easy-data-table", [_ctx.tableClassName]])
        }, [
          vue.createElementVNode("div", {
            ref_key: "tableBody",
            ref: tableBody,
            class: vue.normalizeClass(["vue3-easy-data-table__main", {
              "fixed-header": vue.unref(fixedHeader),
              "fixed-height": vue.unref(tableHeight),
              "show-shadow": showShadow.value,
              "table-fixed": vue.unref(fixedHeaders).length,
              "hoverable": !_ctx.noHover,
              "border-cell": _ctx.borderCell
            }])
          }, [
            vue.createElementVNode("table", { id: vue.unref(tableNodeId) }, [
              vue.createElementVNode("colgroup", null, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(headersForRender), (header, index) => {
                  return vue.openBlock(), vue.createElementBlock("col", {
                    key: index,
                    style: vue.normalizeStyle(getColStyle(header))
                  }, null, 4);
                }), 128))
              ]),
              vue.unref(slots)["customize-headers"] ? vue.renderSlot(_ctx.$slots, "customize-headers", { key: 0 }, void 0, true) : vue.unref(headersForRender).length && !_ctx.hideHeader ? (vue.openBlock(), vue.createElementBlock("thead", {
                key: 1,
                class: vue.normalizeClass(["vue3-easy-data-table__header", [_ctx.headerClassName]])
              }, [
                vue.createElementVNode("tr", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(headersForRender), (header, index) => {
                    return vue.openBlock(), vue.createElementBlock("th", {
                      key: index,
                      class: vue.normalizeClass([{
                        sortable: header.sortable,
                        "none": header.sortable && header.sortType === "none",
                        "desc": header.sortable && header.sortType === "desc",
                        "asc": header.sortable && header.sortType === "asc",
                        "shadow": header.value === vue.unref(lastFixedColumn)
                      }, typeof _ctx.headerItemClassName === "string" ? _ctx.headerItemClassName : _ctx.headerItemClassName(header, index + 1)]),
                      style: vue.normalizeStyle(getFixedDistance(header.value)),
                      onClick: vue.withModifiers(($event) => header.sortable && header.sortType ? vue.unref(updateSortField)(header.value, header.sortType) : null, ["stop"])
                    }, [
                      header.text === "checkbox" ? (vue.openBlock(), vue.createBlock(MultipleSelectCheckBox, {
                        key: vue.unref(multipleSelectStatus),
                        status: vue.unref(multipleSelectStatus),
                        onChange: vue.unref(toggleSelectAll)
                      }, null, 8, ["status", "onChange"])) : (vue.openBlock(), vue.createElementBlock("span", {
                        key: 1,
                        class: vue.normalizeClass(["header", `direction-${vue.unref(headerTextDirection)}`])
                      }, [
                        vue.unref(slots)[`header-${header.value}`] ? vue.renderSlot(_ctx.$slots, `header-${header.value}`, vue.normalizeProps(vue.mergeProps({ key: 0 }, header)), void 0, true) : vue.unref(slots)[`header-${header.value.toLowerCase()}`] ? vue.renderSlot(_ctx.$slots, `header-${header.value.toLowerCase()}`, vue.normalizeProps(vue.mergeProps({ key: 1 }, header)), void 0, true) : vue.unref(slots)["header"] ? vue.renderSlot(_ctx.$slots, "header", vue.normalizeProps(vue.mergeProps({ key: 2 }, header)), void 0, true) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$i, vue.toDisplayString(header.text), 1)),
                        header.sortable ? (vue.openBlock(), vue.createElementBlock("i", {
                          key: header.sortType ? header.sortType : "none",
                          class: vue.normalizeClass(["sortType-icon", { "desc": header.sortType === "desc" }])
                        }, null, 2)) : vue.createCommentVNode("", true),
                        vue.unref(multiSort) && vue.unref(isMultiSorting)(header.value) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$h, vue.toDisplayString(vue.unref(getMultiSortNumber)(header.value)), 1)) : vue.createCommentVNode("", true)
                      ], 2))
                    ], 14, _hoisted_2$i);
                  }), 128))
                ])
              ], 2)) : vue.createCommentVNode("", true),
              vue.unref(ifHasBodySlot) ? vue.renderSlot(_ctx.$slots, "body", vue.normalizeProps(vue.mergeProps({ key: 2 }, vue.unref(pageItems))), void 0, true) : vue.unref(headerColumns).length ? (vue.openBlock(), vue.createElementBlock("tbody", {
                key: 3,
                class: vue.normalizeClass(["vue3-easy-data-table__body", { "row-alternation": _ctx.alternating }])
              }, [
                vue.renderSlot(_ctx.$slots, "body-prepend", vue.normalizeProps(vue.guardReactiveProps({
                  items: vue.unref(pageItems),
                  pagination: {
                    isFirstPage: vue.unref(isFirstPage),
                    isLastPage: vue.unref(isLastPage),
                    currentPaginationNumber: vue.unref(currentPaginationNumber),
                    maxPaginationNumber: vue.unref(maxPaginationNumber),
                    nextPage: vue.unref(nextPage),
                    prevPage: vue.unref(prevPage)
                  },
                  headers: vue.unref(headersForRender)
                })), void 0, true),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(pageItems), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
                    vue.createElementVNode("tr", {
                      class: vue.normalizeClass([
                        { "even-row": (index + 1) % 2 === 0 },
                        typeof _ctx.bodyRowClassName === "string" ? _ctx.bodyRowClassName : _ctx.bodyRowClassName(item, index + 1)
                      ]),
                      onClick: ($event) => {
                        vue.unref(clickRow)(item, "single", $event);
                        _ctx.clickRowToExpand && vue.unref(updateExpandingItemIndexList)(index + vue.unref(prevPageEndIndex), item, $event);
                      },
                      onDblclick: ($event) => {
                        vue.unref(clickRow)(item, "double", $event);
                      },
                      onContextmenu: ($event) => {
                        contextMenuRow(item, $event);
                      }
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(headerColumns), (column, i2) => {
                        return vue.openBlock(), vue.createElementBlock("td", {
                          key: i2,
                          style: vue.normalizeStyle(getFixedDistance(column, "td")),
                          class: vue.normalizeClass([{
                            "shadow": column === vue.unref(lastFixedColumn),
                            "can-expand": column === "expand"
                          }, typeof _ctx.bodyItemClassName === "string" ? _ctx.bodyItemClassName : _ctx.bodyItemClassName(column, index + 1), `direction-${vue.unref(bodyTextDirection)}`]),
                          onClick: ($event) => column === "expand" ? vue.unref(updateExpandingItemIndexList)(index + vue.unref(prevPageEndIndex), item, $event) : null
                        }, [
                          vue.unref(slots)[`item-${column}`] ? vue.renderSlot(_ctx.$slots, `item-${column}`, vue.normalizeProps(vue.mergeProps({ key: 0 }, item)), void 0, true) : vue.unref(slots)[`item-${column.toLowerCase()}`] ? vue.renderSlot(_ctx.$slots, `item-${column.toLowerCase()}`, vue.normalizeProps(vue.mergeProps({ key: 1 }, item)), void 0, true) : column === "expand" ? (vue.openBlock(), vue.createElementBlock("i", {
                            key: 2,
                            class: vue.normalizeClass(["expand-icon", { "expanding": vue.unref(expandingItemIndexList).includes(vue.unref(prevPageEndIndex) + index) }])
                          }, null, 2)) : column === "checkbox" ? (vue.openBlock(), vue.createBlock(SingleSelectCheckBox, {
                            key: 3,
                            checked: item[column],
                            onChange: ($event) => vue.unref(toggleSelectItem)(item)
                          }, null, 8, ["checked", "onChange"])) : vue.unref(slots)["item"] ? vue.renderSlot(_ctx.$slots, "item", vue.normalizeProps(vue.mergeProps({ key: 4 }, { column, item })), void 0, true) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
                            vue.createTextVNode(vue.toDisplayString(vue.unref(generateColumnContent)(column, item)), 1)
                          ], 64))
                        ], 14, _hoisted_6$e);
                      }), 128))
                    ], 42, _hoisted_5$f),
                    vue.unref(ifHasExpandSlot) && vue.unref(expandingItemIndexList).includes(index + vue.unref(prevPageEndIndex)) ? (vue.openBlock(), vue.createElementBlock("tr", {
                      key: 0,
                      class: vue.normalizeClass([
                        { "even-row": (index + 1) % 2 === 0 },
                        typeof _ctx.bodyExpandRowClassName === "string" ? _ctx.bodyExpandRowClassName : _ctx.bodyExpandRowClassName(item, index + 1)
                      ])
                    }, [
                      vue.createElementVNode("td", {
                        colspan: vue.unref(headersForRender).length,
                        class: "expand"
                      }, [
                        item.expandLoading ? (vue.openBlock(), vue.createBlock(LoadingLine, {
                          key: 0,
                          class: "expand-loading"
                        })) : vue.createCommentVNode("", true),
                        vue.renderSlot(_ctx.$slots, "expand", vue.normalizeProps(vue.guardReactiveProps(item)), void 0, true)
                      ], 8, _hoisted_7$c)
                    ], 2)) : vue.createCommentVNode("", true)
                  ], 64);
                }), 128)),
                vue.renderSlot(_ctx.$slots, "body-append", vue.normalizeProps(vue.guardReactiveProps({
                  items: vue.unref(pageItems),
                  pagination: {
                    isFirstPage: vue.unref(isFirstPage),
                    isLastPage: vue.unref(isLastPage),
                    currentPaginationNumber: vue.unref(currentPaginationNumber),
                    maxPaginationNumber: vue.unref(maxPaginationNumber),
                    nextPage: vue.unref(nextPage),
                    prevPage: vue.unref(prevPage),
                    updatePage: vue.unref(updatePage)
                  },
                  headers: vue.unref(headersForRender)
                })), void 0, true)
              ], 2)) : vue.createCommentVNode("", true)
            ], 8, _hoisted_1$j),
            vue.unref(loading) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$a, [
              _hoisted_9$9,
              vue.createElementVNode("div", _hoisted_10$9, [
                vue.unref(ifHasLoadingSlot) ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(Loading, { key: 1 }))
              ])
            ])) : vue.createCommentVNode("", true),
            !vue.unref(pageItems).length && !vue.unref(loading) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11$9, [
              vue.renderSlot(_ctx.$slots, "empty-message", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.emptyMessage), 1)
              ], true)
            ])) : vue.createCommentVNode("", true)
          ], 2),
          !_ctx.hideFooter ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12$9, [
            !_ctx.hideRowsPerPage ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13$9, [
              vue.createTextVNode(vue.toDisplayString(_ctx.rowsPerPageMessage) + " ", 1),
              vue.createVNode(RowsSelector, {
                modelValue: vue.unref(rowsPerPageRef),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(rowsPerPageRef) ? rowsPerPageRef.value = $event : null),
                "rows-items": vue.unref(rowsItemsComputed)
              }, null, 8, ["modelValue", "rows-items"])
            ])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_14$9, vue.toDisplayString(`${vue.unref(currentPageFirstIndex)}–${vue.unref(currentPageLastIndex)}`) + " " + vue.toDisplayString(vue.unref(rowsOfPageSeparatorMessage)) + " " + vue.toDisplayString(vue.unref(totalItemsLength)), 1),
            vue.unref(ifHasPaginationSlot) ? vue.renderSlot(_ctx.$slots, "pagination", vue.normalizeProps(vue.mergeProps({ key: 1 }, {
              isFirstPage: vue.unref(isFirstPage),
              isLastPage: vue.unref(isLastPage),
              currentPaginationNumber: vue.unref(currentPaginationNumber),
              maxPaginationNumber: vue.unref(maxPaginationNumber),
              nextPage: vue.unref(nextPage),
              prevPage: vue.unref(prevPage)
            })), void 0, true) : (vue.openBlock(), vue.createBlock(PaginationArrows, {
              key: 2,
              "is-first-page": vue.unref(isFirstPage),
              "is-last-page": vue.unref(isLastPage),
              onClickNextPage: vue.unref(nextPage),
              onClickPrevPage: vue.unref(prevPage)
            }, vue.createSlots({ _: 2 }, [
              _ctx.buttonsPagination ? {
                name: "buttonsPagination",
                fn: vue.withCtx(() => [
                  vue.createVNode(ButtonsPagination, {
                    "current-pagination-number": vue.unref(currentPaginationNumber),
                    "max-pagination-number": vue.unref(maxPaginationNumber),
                    onUpdatePage: vue.unref(updatePage)
                  }, null, 8, ["current-pagination-number", "max-pagination-number", "onUpdatePage"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["is-first-page", "is-last-page", "onClickNextPage", "onClickPrevPage"]))
          ])) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  var DataTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__scopeId", "data-v-32683533"]]);
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.createApp({}).component("Vue3EasyDataTable", DataTable);
  }
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s3) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s3.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s3.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => {
    return (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  };
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp2(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp2(target, key, result);
    return result;
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")];
    var isAwait = false;
    var method;
    var it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k2) => it[k2] = (x2) => obj[k2](x2);
    } else {
      obj = obj.call(value);
      method = (k2) => it[k2] = (v2) => {
        if (isAwait) {
          isAwait = false;
          if (k2 === "throw")
            throw v2;
          return v2;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x2 = obj[k2](v2);
            if (!(x2 instanceof Object))
              throw TypeError("Object expected");
            resolve(x2);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
      throw x2;
    }, "return" in obj && method("return"), it;
  };
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = globalThis, e$9 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$4 = Symbol(), o$8 = /* @__PURE__ */ new WeakMap();
  let n$6 = class n {
    constructor(t2, e2, o2) {
      if (this._$cssResult$ = true, o2 !== s$4)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
      let t2 = this.o;
      const s3 = this.t;
      if (e$9 && void 0 === t2) {
        const e2 = void 0 !== s3 && 1 === s3.length;
        e2 && (t2 = o$8.get(s3)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$8.set(s3, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$7 = (t2) => new n$6("string" == typeof t2 ? t2 : t2 + "", void 0, s$4), i$3 = (t2, ...e2) => {
    const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s3, o3) => e3 + ((t3) => {
      if (true === t3._$cssResult$)
        return t3.cssText;
      if ("number" == typeof t3)
        return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s3) + t2[o3 + 1], t2[0]);
    return new n$6(o2, t2, s$4);
  }, S$1 = (s3, o2) => {
    if (e$9)
      s3.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
    else
      for (const e2 of o2) {
        const o3 = document.createElement("style"), n3 = t$3.litNonce;
        void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s3.appendChild(o3);
      }
  }, c$3 = e$9 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e2 = "";
    for (const s3 of t3.cssRules)
      e2 += s3.cssText;
    return r$7(e2);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const { is: i$2, defineProperty: e$8, getOwnPropertyDescriptor: r$6, getOwnPropertyNames: h$3, getOwnPropertySymbols: o$7, getPrototypeOf: n$5 } = Object, a$2 = globalThis, c$2 = a$2.trustedTypes, l$3 = c$2 ? c$2.emptyScript : "", p$1 = a$2.reactiveElementPolyfillSupport, d$1 = (t2, s3) => t2, u$2 = { toAttribute(t2, s3) {
    switch (s3) {
      case Boolean:
        t2 = t2 ? l$3 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, s3) {
    let i2 = t2;
    switch (s3) {
      case Boolean:
        i2 = null !== t2;
        break;
      case Number:
        i2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i2 = JSON.parse(t2);
        } catch (t3) {
          i2 = null;
        }
    }
    return i2;
  } }, f$3 = (t2, s3) => !i$2(t2, s3), y$1 = { attribute: true, type: String, converter: u$2, reflect: false, hasChanged: f$3 };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$2.litPropertyMetadata ?? (a$2.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  class b extends HTMLElement {
    static addInitializer(t2) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t2);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t2, s3 = y$1) {
      if (s3.state && (s3.attribute = false), this._$Ei(), this.elementProperties.set(t2, s3), !s3.noAccessor) {
        const i2 = Symbol(), r2 = this.getPropertyDescriptor(t2, i2, s3);
        void 0 !== r2 && e$8(this.prototype, t2, r2);
      }
    }
    static getPropertyDescriptor(t2, s3, i2) {
      const { get: e2, set: h2 } = r$6(this.prototype, t2) ?? { get() {
        return this[s3];
      }, set(t3) {
        this[s3] = t3;
      } };
      return { get() {
        return e2 == null ? void 0 : e2.call(this);
      }, set(s4) {
        const r2 = e2 == null ? void 0 : e2.call(this);
        h2.call(this, s4), this.requestUpdate(t2, r2, i2);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) ?? y$1;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties")))
        return;
      const t2 = n$5(this);
      t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t3 = this.properties, s3 = [...h$3(t3), ...o$7(t3)];
        for (const i2 of s3)
          this.createProperty(i2, t3[i2]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s3 = litPropertyMetadata.get(t2);
        if (void 0 !== s3)
          for (const [t3, i2] of s3)
            this.elementProperties.set(t3, i2);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t3, s3] of this.elementProperties) {
        const i2 = this._$Eu(t3, s3);
        void 0 !== i2 && this._$Eh.set(i2, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s3) {
      const i2 = [];
      if (Array.isArray(s3)) {
        const e2 = new Set(s3.flat(1 / 0).reverse());
        for (const s4 of e2)
          i2.unshift(c$3(s4));
      } else
        void 0 !== s3 && i2.push(c$3(s3));
      return i2;
    }
    static _$Eu(t2, s3) {
      const i2 = s3.attribute;
      return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a2;
      this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
    }
    addController(t2) {
      var _a2;
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
    }
    removeController(t2) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
    }
    _$E_() {
      const t2 = /* @__PURE__ */ new Map(), s3 = this.constructor.elementProperties;
      for (const i2 of s3.keys())
        this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
      t2.size > 0 && (this._$Ep = t2);
    }
    createRenderRoot() {
      const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t2, this.constructor.elementStyles), t2;
    }
    connectedCallback() {
      var _a2;
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
        var _a3;
        return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
      });
    }
    enableUpdating(t2) {
    }
    disconnectedCallback() {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
        var _a3;
        return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
      });
    }
    attributeChangedCallback(t2, s3, i2) {
      this._$AK(t2, i2);
    }
    _$EC(t2, s3) {
      var _a2;
      const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
      if (void 0 !== e2 && true === i2.reflect) {
        const r2 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$2).toAttribute(s3, i2.type);
        this._$Em = t2, null == r2 ? this.removeAttribute(e2) : this.setAttribute(e2, r2), this._$Em = null;
      }
    }
    _$AK(t2, s3) {
      var _a2;
      const i2 = this.constructor, e2 = i2._$Eh.get(t2);
      if (void 0 !== e2 && this._$Em !== e2) {
        const t3 = i2.getPropertyOptions(e2), r2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$2;
        this._$Em = e2, this[e2] = r2.fromAttribute(s3, t3.type), this._$Em = null;
      }
    }
    requestUpdate(t2, s3, i2) {
      if (void 0 !== t2) {
        if (i2 ?? (i2 = this.constructor.getPropertyOptions(t2)), !(i2.hasChanged ?? f$3)(this[t2], s3))
          return;
        this.P(t2, s3, i2);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t2, s3, i2) {
      this._$AL.has(t2) || this._$AL.set(t2, s3), true === i2.reflect && this._$Em !== t2 && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t2);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a2;
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [t4, s4] of this._$Ep)
            this[t4] = s4;
          this._$Ep = void 0;
        }
        const t3 = this.constructor.elementProperties;
        if (t3.size > 0)
          for (const [s4, i2] of t3)
            true !== i2.wrapped || this._$AL.has(s4) || void 0 === this[s4] || this.P(s4, this[s4], i2);
      }
      let t2 = false;
      const s3 = this._$AL;
      try {
        t2 = this.shouldUpdate(s3), t2 ? (this.willUpdate(s3), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
          var _a3;
          return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
        }), this.update(s3)) : this._$EU();
      } catch (s4) {
        throw t2 = false, this._$EU(), s4;
      }
      t2 && this._$AE(s3);
    }
    willUpdate(t2) {
    }
    _$AE(t2) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      this._$Ej && (this._$Ej = this._$Ej.forEach((t3) => this._$EC(t3, this[t3]))), this._$EU();
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  }
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d$1("elementProperties")] = /* @__PURE__ */ new Map(), b[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: b }), (a$2.reactiveElementVersions ?? (a$2.reactiveElementVersions = [])).push("2.0.4");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis, i$1 = t$2.trustedTypes, s$3 = i$1 ? i$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$7 = "$lit$", h$2 = `lit$${(Math.random() + "").slice(9)}$`, o$6 = "?" + h$2, n$4 = `<${o$6}>`, r$5 = document, l$2 = () => r$5.createComment(""), c$1 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a$1 = Array.isArray, u$1 = (t2) => a$1(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), d = "[ 	\n\f\r]", f$2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m$1 = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t2) => (i2, ...s3) => ({ _$litType$: t2, strings: i2, values: s3 }), x = y(1), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), E = r$5.createTreeWalker(r$5, 129);
  function C(t2, i2) {
    if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s$3 ? s$3.createHTML(i2) : i2;
  }
  const P = (t2, i2) => {
    const s3 = t2.length - 1, o2 = [];
    let r2, l2 = 2 === i2 ? "<svg>" : "", c2 = f$2;
    for (let i3 = 0; i3 < s3; i3++) {
      const s4 = t2[i3];
      let a2, u2, d2 = -1, y2 = 0;
      for (; y2 < s4.length && (c2.lastIndex = y2, u2 = c2.exec(s4), null !== u2); )
        y2 = c2.lastIndex, c2 === f$2 ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m$1) : void 0 !== u2[3] && (c2 = m$1) : c2 === m$1 ? ">" === u2[0] ? (c2 = r2 ?? f$2, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m$1 : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m$1 : c2 === v || c2 === _ ? c2 = f$2 : (c2 = m$1, r2 = void 0);
      const x2 = c2 === m$1 && t2[i3 + 1].startsWith("/>") ? " " : "";
      l2 += c2 === f$2 ? s4 + n$4 : d2 >= 0 ? (o2.push(a2), s4.slice(0, d2) + e$7 + s4.slice(d2) + h$2 + x2) : s4 + h$2 + (-2 === d2 ? i3 : x2);
    }
    return [C(t2, l2 + (t2[s3] || "<?>") + (2 === i2 ? "</svg>" : "")), o2];
  };
  class V {
    constructor({ strings: t2, _$litType$: s3 }, n3) {
      let r2;
      this.parts = [];
      let c2 = 0, a2 = 0;
      const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = P(t2, s3);
      if (this.el = V.createElement(f2, n3), E.currentNode = this.el.content, 2 === s3) {
        const t3 = this.el.content.firstChild;
        t3.replaceWith(...t3.childNodes);
      }
      for (; null !== (r2 = E.nextNode()) && d2.length < u2; ) {
        if (1 === r2.nodeType) {
          if (r2.hasAttributes())
            for (const t3 of r2.getAttributeNames())
              if (t3.endsWith(e$7)) {
                const i2 = v2[a2++], s4 = r2.getAttribute(t3).split(h$2), e2 = /([.?@])?(.*)/.exec(i2);
                d2.push({ type: 1, index: c2, name: e2[2], strings: s4, ctor: "." === e2[1] ? k : "?" === e2[1] ? H : "@" === e2[1] ? I : R }), r2.removeAttribute(t3);
              } else
                t3.startsWith(h$2) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
          if ($.test(r2.tagName)) {
            const t3 = r2.textContent.split(h$2), s4 = t3.length - 1;
            if (s4 > 0) {
              r2.textContent = i$1 ? i$1.emptyScript : "";
              for (let i2 = 0; i2 < s4; i2++)
                r2.append(t3[i2], l$2()), E.nextNode(), d2.push({ type: 2, index: ++c2 });
              r2.append(t3[s4], l$2());
            }
          }
        } else if (8 === r2.nodeType)
          if (r2.data === o$6)
            d2.push({ type: 2, index: c2 });
          else {
            let t3 = -1;
            for (; -1 !== (t3 = r2.data.indexOf(h$2, t3 + 1)); )
              d2.push({ type: 7, index: c2 }), t3 += h$2.length - 1;
          }
        c2++;
      }
    }
    static createElement(t2, i2) {
      const s3 = r$5.createElement("template");
      return s3.innerHTML = t2, s3;
    }
  }
  function N(t2, i2, s3 = t2, e2) {
    var _a2, _b;
    if (i2 === w)
      return i2;
    let h2 = void 0 !== e2 ? (_a2 = s3._$Co) == null ? void 0 : _a2[e2] : s3._$Cl;
    const o2 = c$1(i2) ? void 0 : i2._$litDirective$;
    return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s3, e2)), void 0 !== e2 ? (s3._$Co ?? (s3._$Co = []))[e2] = h2 : s3._$Cl = h2), void 0 !== h2 && (i2 = N(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
  }
  class S {
    constructor(t2, i2) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i2 }, parts: s3 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? r$5).importNode(i2, true);
      E.currentNode = e2;
      let h2 = E.nextNode(), o2 = 0, n3 = 0, l2 = s3[0];
      for (; void 0 !== l2; ) {
        if (o2 === l2.index) {
          let i3;
          2 === l2.type ? i3 = new M(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new L(h2, this, t2)), this._$AV.push(i3), l2 = s3[++n3];
        }
        o2 !== (l2 == null ? void 0 : l2.index) && (h2 = E.nextNode(), o2++);
      }
      return E.currentNode = r$5, e2;
    }
    p(t2) {
      let i2 = 0;
      for (const s3 of this._$AV)
        void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t2, s3, i2), i2 += s3.strings.length - 2) : s3._$AI(t2[i2])), i2++;
    }
  }
  class M {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(t2, i2, s3, e2) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s3, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i2 = this._$AM;
      return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i2 = this) {
      t2 = N(this, t2, i2), c$1(t2) ? t2 === T || null == t2 || "" === t2 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t2 !== this._$AH && t2 !== w && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u$1(t2) ? this.k(t2) : this._(t2);
    }
    S(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    T(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.S(t2));
    }
    _(t2) {
      this._$AH !== T && c$1(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$5.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
      var _a2;
      const { values: i2, _$litType$: s3 } = t2, e2 = "number" == typeof s3 ? this._$AC(t2) : (void 0 === s3.el && (s3.el = V.createElement(C(s3.h, s3.h[0]), this.options)), s3);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2)
        this._$AH.p(i2);
      else {
        const t3 = new S(e2, this), s4 = t3.u(this.options);
        t3.p(i2), this.T(s4), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i2 = A.get(t2.strings);
      return void 0 === i2 && A.set(t2.strings, i2 = new V(t2)), i2;
    }
    k(t2) {
      a$1(this._$AH) || (this._$AH = [], this._$AR());
      const i2 = this._$AH;
      let s3, e2 = 0;
      for (const h2 of t2)
        e2 === i2.length ? i2.push(s3 = new M(this.S(l$2()), this.S(l$2()), this, this.options)) : s3 = i2[e2], s3._$AI(h2), e2++;
      e2 < i2.length && (this._$AR(s3 && s3._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
        const i3 = t2.nextSibling;
        t2.remove(), t2 = i3;
      }
    }
    setConnected(t2) {
      var _a2;
      void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
    }
  }
  class R {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t2, i2, s3, e2, h2) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = T;
    }
    _$AI(t2, i2 = this, s3, e2) {
      const h2 = this.strings;
      let o2 = false;
      if (void 0 === h2)
        t2 = N(this, t2, i2, 0), o2 = !c$1(t2) || t2 !== this._$AH && t2 !== w, o2 && (this._$AH = t2);
      else {
        const e3 = t2;
        let n3, r2;
        for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++)
          r2 = N(this, e3[s3 + n3], i2, n3), r2 === w && (r2 = this._$AH[n3]), o2 || (o2 = !c$1(r2) || r2 !== this._$AH[n3]), r2 === T ? t2 = T : t2 !== T && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
      }
      o2 && !e2 && this.j(t2);
    }
    j(t2) {
      t2 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
    }
  }
  class k extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t2) {
      this.element[this.name] = t2 === T ? void 0 : t2;
    }
  }
  class H extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t2) {
      this.element.toggleAttribute(this.name, !!t2 && t2 !== T);
    }
  }
  class I extends R {
    constructor(t2, i2, s3, e2, h2) {
      super(t2, i2, s3, e2, h2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
      if ((t2 = N(this, t2, i2, 0) ?? T) === w)
        return;
      const s3 = this._$AH, e2 = t2 === T && s3 !== T || t2.capture !== s3.capture || t2.once !== s3.once || t2.passive !== s3.passive, h2 = t2 !== T && (s3 === T || e2);
      e2 && this.element.removeEventListener(this.name, this, s3), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      var _a2;
      "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  class L {
    constructor(t2, i2, s3) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s3;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      N(this, t2);
    }
  }
  const Z = t$2.litHtmlPolyfillSupport;
  Z == null ? void 0 : Z(V, M), (t$2.litHtmlVersions ?? (t$2.litHtmlVersions = [])).push("3.1.2");
  const j = (t2, i2, s3) => {
    const e2 = (s3 == null ? void 0 : s3.renderBefore) ?? i2;
    let h2 = e2._$litPart$;
    if (void 0 === h2) {
      const t3 = (s3 == null ? void 0 : s3.renderBefore) ?? null;
      e2._$litPart$ = h2 = new M(i2.insertBefore(l$2(), t3), t3, void 0, s3 ?? {});
    }
    return h2._$AI(t2), h2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  let s$2 = class s extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a2;
      const t2 = super.createRenderRoot();
      return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
    }
    update(t2) {
      const i2 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = j(i2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a2;
      super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
    }
    disconnectedCallback() {
      var _a2;
      super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s$2._$litElement$ = true, s$2["finalized"] = true, (_a = globalThis.litElementHydrateSupport) == null ? void 0 : _a.call(globalThis, { LitElement: s$2 });
  const r$4 = globalThis.litElementPolyfillSupport;
  r$4 == null ? void 0 : r$4({ LitElement: s$2 });
  (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
  var tooltip_styles_default = i$3`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;
  var popup_styles_default = i$3`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
  var component_styles_default = i$3`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$5 = { attribute: true, type: String, converter: u$2, reflect: false, hasChanged: f$3 }, r$3 = (t2 = o$5, e2, r2) => {
    const { kind: n3, metadata: i2 } = r2;
    let s3 = globalThis.litPropertyMetadata.get(i2);
    if (void 0 === s3 && globalThis.litPropertyMetadata.set(i2, s3 = /* @__PURE__ */ new Map()), s3.set(r2.name, t2), "accessor" === n3) {
      const { name: o2 } = r2;
      return { set(r3) {
        const n4 = e2.get.call(this);
        e2.set.call(this, r3), this.requestUpdate(o2, n4, t2);
      }, init(e3) {
        return void 0 !== e3 && this.P(o2, void 0, t2), e3;
      } };
    }
    if ("setter" === n3) {
      const { name: o2 } = r2;
      return function(r3) {
        const n4 = this[o2];
        e2.call(this, r3), this.requestUpdate(o2, n4, t2);
      };
    }
    throw Error("Unsupported decorator location: " + n3);
  };
  function n$3(t2) {
    return (e2, o2) => "object" == typeof o2 ? r$3(t2, e2, o2) : ((t3, e3, o3) => {
      const r2 = e3.hasOwnProperty(o3);
      return e3.constructor.createProperty(o3, r2 ? { ...t3, wrapped: true } : t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
    })(t2, e2, o2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function r$2(r2) {
    return n$3({ ...r2, state: true, attribute: false });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$6 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function e$5(e2, r2) {
    return (n3, s3, i2) => {
      const o2 = (t2) => {
        var _a2;
        return ((_a2 = t2.renderRoot) == null ? void 0 : _a2.querySelector(e2)) ?? null;
      };
      if (r2) {
        const { get: e3, set: r3 } = "object" == typeof s3 ? n3 : i2 ?? (() => {
          const t2 = Symbol();
          return { get() {
            return this[t2];
          }, set(e4) {
            this[t2] = e4;
          } };
        })();
        return e$6(n3, s3, { get() {
          let t2 = e3.call(this);
          return void 0 === t2 && (t2 = o2(this), (null !== t2 || this.hasUpdated) && r3.call(this, t2)), t2;
        } });
      }
      return e$6(n3, s3, { get() {
        return o2(this);
      } });
    };
  }
  var ShoelaceElement = class extends s$2 {
    constructor() {
      super();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        customElements.define(name, class extends elementConstructor {
        }, options);
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
  };
  ShoelaceElement.version = "2.15.0";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n$3()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n$3()
  ], ShoelaceElement.prototype, "lang", 2);
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = (v2) => ({
    x: v2,
    y: v2
  });
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  const oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl)
          return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y: y2
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i2 = 0; i2 < validMiddleware.length; i2++) {
      const {
        name,
        fn
      } = validMiddleware[i2];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x: x2,
        y: y2,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y2 = nextY != null ? nextY : y2;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x2,
            y: y2
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i2 = -1;
      }
    }
    return {
      x: x2,
      y: y2,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y2,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      ...rects.floating,
      x: x2,
      y: y2
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  const arrow$1 = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x: x2,
        y: y2
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  const flip$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  const offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y: y2,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y2 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  const shift$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y: y2,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y3
              } = _ref;
              return {
                x: x3,
                y: y3
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y: y2
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y2
          }
        };
      }
    };
  };
  const size$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle$1(element);
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports)
      return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $2
    } = getCssDimensions(domElement);
    let x2 = ($2 ? round(rect.width) : rect.width) / width;
    let y2 = ($2 ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y2 || !Number.isFinite(y2)) {
      y2 = 1;
    }
    return {
      x: x2,
      y: y2
    };
  }
  const noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y2 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = currentWin.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y2 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y2 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = currentWin.frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y2
    });
  }
  const topLayerSelectors = [":popover-open", ":modal"];
  function isTopLayer(floating) {
    return topLayerSelectors.some((selector) => {
      try {
        return floating.matches(selector);
      } catch (e2) {
        return false;
      }
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y2 = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y2 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const x2 = rect.left + scroll.scrollLeft - offsets.x;
    const y2 = rect.top + scroll.scrollTop - offsets.y;
    return {
      x: x2,
      y: y2,
      width: rect.width,
      height: rect.height
    };
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const window2 = getWindow(element);
    if (!isHTMLElement(element) || isTopLayer(element)) {
      return window2;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(data.floating)
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle$1(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e2) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update2, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update2, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update2);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update2();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update2();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update2();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update2);
        ancestorResize && ancestor.removeEventListener("resize", update2);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const shift = shift$1;
  const flip = flip$1;
  const size = size$1;
  const arrow = arrow$1;
  const computePosition = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$4 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
  class i {
    constructor(t2) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t2, e2, i2) {
      this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
    }
    _$AS(t2, e2) {
      return this.update(t2, e2);
    }
    update(t2, e2) {
      return this.render(...e2);
    }
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$3 = e$4(class extends i {
    constructor(t2) {
      var _a2;
      if (super(t2), t2.type !== t$1.ATTRIBUTE || "class" !== t2.name || ((_a2 = t2.strings) == null ? void 0 : _a2.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
      return " " + Object.keys(t2).filter((s3) => t2[s3]).join(" ") + " ";
    }
    update(s3, [i2]) {
      var _a2, _b;
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s3.strings && (this.nt = new Set(s3.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
        for (const t2 in i2)
          i2[t2] && !((_a2 = this.nt) == null ? void 0 : _a2.has(t2)) && this.st.add(t2);
        return this.render(i2);
      }
      const r2 = s3.element.classList;
      for (const t2 of this.st)
        t2 in i2 || (r2.remove(t2), this.st.delete(t2));
      for (const t2 in i2) {
        const s4 = !!i2[t2];
        s4 === this.st.has(t2) || ((_b = this.nt) == null ? void 0 : _b.has(t2)) || (s4 ? (r2.add(t2), this.st.add(t2)) : (r2.remove(t2), this.st.delete(t2)));
      }
      return w;
    }
  });
  function t(t2) {
    return r$1(t2);
  }
  function o$4(t2) {
    return t2.assignedSlot ? t2.assignedSlot : t2.parentNode instanceof ShadowRoot ? t2.parentNode.host : t2.parentNode;
  }
  function r$1(t2) {
    for (let e2 = t2; e2; e2 = o$4(e2))
      if (e2 instanceof Element && "none" === getComputedStyle(e2).display)
        return null;
    for (let e2 = o$4(t2); e2; e2 = o$4(e2)) {
      if (!(e2 instanceof Element))
        continue;
      const t3 = getComputedStyle(e2);
      if ("contents" !== t3.display) {
        if ("static" !== t3.position || "none" !== t3.filter)
          return e2;
        if ("BODY" === e2.tagName)
          return e2;
      }
    }
    return null;
  }
  function isVirtualElement(e2) {
    return e2 !== null && typeof e2 === "object" && "getBoundingClientRect" in e2 && ("contextElement" in e2 ? e2 instanceof Element : true);
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
      this.hoverBridge = false;
      this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const anchorRect = this.anchorEl.getBoundingClientRect();
          const popupRect = this.popup.getBoundingClientRect();
          const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
          let topLeftX = 0;
          let topLeftY = 0;
          let topRightX = 0;
          let topRightY = 0;
          let bottomLeftX = 0;
          let bottomLeftY = 0;
          let bottomRightX = 0;
          let bottomRightY = 0;
          if (isVertical) {
            if (anchorRect.top < popupRect.top) {
              topLeftX = anchorRect.left;
              topLeftY = anchorRect.bottom;
              topRightX = anchorRect.right;
              topRightY = anchorRect.bottom;
              bottomLeftX = popupRect.left;
              bottomLeftY = popupRect.top;
              bottomRightX = popupRect.right;
              bottomRightY = popupRect.top;
            } else {
              topLeftX = popupRect.left;
              topLeftY = popupRect.bottom;
              topRightX = popupRect.right;
              topRightY = popupRect.bottom;
              bottomLeftX = anchorRect.left;
              bottomLeftY = anchorRect.top;
              bottomRightX = anchorRect.right;
              bottomRightY = anchorRect.top;
            }
          } else {
            if (anchorRect.left < popupRect.left) {
              topLeftX = anchorRect.right;
              topLeftY = anchorRect.top;
              topRightX = popupRect.left;
              topRightY = popupRect.top;
              bottomLeftX = anchorRect.right;
              bottomLeftY = anchorRect.bottom;
              bottomRightX = popupRect.left;
              bottomRightY = popupRect.bottom;
            } else {
              topLeftX = popupRect.right;
              topLeftY = popupRect.top;
              topRightX = anchorRect.left;
              topRightY = anchorRect.top;
              bottomLeftX = popupRect.right;
              bottomLeftY = popupRect.bottom;
              bottomRightX = anchorRect.left;
              bottomRightY = anchorRect.bottom;
            }
          }
          this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
          this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
          this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
          this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
          this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
          this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
          this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
          this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
        }
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl) {
        return;
      }
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent2 = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, t) : platform.getOffsetParent;
      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, platform), {
          getOffsetParent: getOffsetParent2
        })
      }).then(({ x: x2, y: y2, middlewareData, placement }) => {
        const isRtl = getComputedStyle(this).direction === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x2}px`,
          top: `${y2}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      requestAnimationFrame(() => this.updateHoverBridge());
      this.emit("sl-reposition");
    }
    render() {
      return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e$3({
      "popup-hover-bridge": true,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${e$3({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  SlPopup.styles = [component_styles_default, popup_styles_default];
  __decorateClass([
    e$5(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass([
    e$5(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass([
    n$3()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass([
    n$3({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    n$3({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass([
    n$3({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p2) => p2.trim()).filter((p2) => p2 !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    n$3({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    n$3({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    n$3({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass([
    n$3({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    n$3({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    n$3({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass([
    n$3()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass([
    n$3({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    n$3({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);
  __decorateClass([
    n$3({ attribute: "hover-bridge", type: Boolean })
  ], SlPopup.prototype, "hoverBridge", 2);
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function parseDuration(delay) {
    delay = delay.toString().toLowerCase();
    if (delay.indexOf("ms") > -1) {
      return parseFloat(delay);
    }
    if (delay.indexOf("s") > -1) {
      return parseFloat(delay) * 1e3;
    }
    return parseFloat(delay);
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          animation.cancel();
          requestAnimationFrame(resolve);
        });
      })
    );
  }
  const connectedElements = /* @__PURE__ */ new Set();
  const documentElementObserver = new MutationObserver(update);
  const translations = /* @__PURE__ */ new Map();
  let documentDirection = document.documentElement.dir || "ltr";
  let documentLanguage = document.documentElement.lang || navigator.language;
  let fallback;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
  function registerTranslation(...translation2) {
    translation2.map((t2) => {
      const code = t2.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t2));
      } else {
        translations.set(code, t2);
      }
      if (!fallback) {
        fallback = t2;
      }
    });
    update();
  }
  function update() {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  let LocalizeController$1 = class LocalizeController {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a2, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, "-"));
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a2 = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a2;
      const { primary, secondary } = this.getTranslationData((_a2 = options.lang) !== null && _a2 !== void 0 ? _a2 : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;
  var LocalizeController2 = class extends LocalizeController$1 {
  };
  registerTranslation(en_default);
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }
  var SlTooltip = class extends ShoelaceElement {
    constructor() {
      super();
      this.localize = new LocalizeController2(this);
      this.content = "";
      this.placement = "top";
      this.disabled = false;
      this.distance = 8;
      this.open = false;
      this.skidding = 0;
      this.trigger = "hover focus";
      this.hoist = false;
      this.handleBlur = () => {
        if (this.hasTrigger("focus")) {
          this.hide();
        }
      };
      this.handleClick = () => {
        if (this.hasTrigger("click")) {
          if (this.open) {
            this.hide();
          } else {
            this.show();
          }
        }
      };
      this.handleFocus = () => {
        if (this.hasTrigger("focus")) {
          this.show();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          this.hide();
        }
      };
      this.handleMouseOver = () => {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.show(), delay);
        }
      };
      this.handleMouseOut = () => {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
        }
      };
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
    }
    disconnectedCallback() {
      var _a2;
      (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    firstUpdated() {
      this.body.hidden = !this.open;
      if (this.open) {
        this.popup.active = true;
        this.popup.reposition();
      }
    }
    hasTrigger(triggerType) {
      const triggers = this.trigger.split(" ");
      return triggers.includes(triggerType);
    }
    async handleOpenChange() {
      var _a2, _b;
      if (this.open) {
        if (this.disabled) {
          return;
        }
        this.emit("sl-show");
        if ("CloseWatcher" in window) {
          (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
          this.closeWatcher = new CloseWatcher();
          this.closeWatcher.onclose = () => {
            this.hide();
          };
        } else {
          document.addEventListener("keydown", this.handleDocumentKeyDown);
        }
        await stopAnimations(this.body);
        this.body.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.popup.reposition();
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        (_b = this.closeWatcher) == null ? void 0 : _b.destroy();
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.popup.active = false;
        this.body.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    async handleOptionsChange() {
      if (this.hasUpdated) {
        await this.updateComplete;
        this.popup.reposition();
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.open) {
        this.hide();
      }
    }
    /** Shows the tooltip. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the tooltip */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    //
    // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
    // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
    // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
    // element, otherwise positioning is incorrect.
    //
    render() {
      return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e$3({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlTooltip.styles = [component_styles_default, tooltip_styles_default];
  SlTooltip.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e$5("slot:not([name])")
  ], SlTooltip.prototype, "defaultSlot", 2);
  __decorateClass([
    e$5(".tooltip__body")
  ], SlTooltip.prototype, "body", 2);
  __decorateClass([
    e$5("sl-popup")
  ], SlTooltip.prototype, "popup", 2);
  __decorateClass([
    n$3()
  ], SlTooltip.prototype, "content", 2);
  __decorateClass([
    n$3()
  ], SlTooltip.prototype, "placement", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "disabled", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlTooltip.prototype, "distance", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "open", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlTooltip.prototype, "skidding", 2);
  __decorateClass([
    n$3()
  ], SlTooltip.prototype, "trigger", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlTooltip.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlTooltip.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch(["content", "distance", "hoist", "placement", "skidding"])
  ], SlTooltip.prototype, "handleOptionsChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTooltip.prototype, "handleDisabledChange", 1);
  setDefaultAnimation("tooltip.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 150, easing: "ease" }
  });
  setDefaultAnimation("tooltip.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 150, easing: "ease" }
  });
  SlTooltip.define("sl-tooltip");
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var dayjs_min = { exports: {} };
  (function(module, exports) {
    !function(t2, e2) {
      module.exports = e2();
    }(commonjsGlobal, function() {
      var t2 = 1e3, e2 = 6e4, n3 = 36e5, r2 = "millisecond", i2 = "second", s3 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n4 = t3 % 100;
        return "[" + t3 + (e3[(n4 - 20) % 10] || e3[n4] || e3[0]) + "]";
      } }, m2 = function(t3, e3, n4) {
        var r3 = String(t3);
        return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n4) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e3 = -t3.utcOffset(), n4 = Math.abs(e3), r3 = Math.floor(n4 / 60), i3 = n4 % 60;
        return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
      }, m: function t3(e3, n4) {
        if (e3.date() < n4.date())
          return -t3(n4, e3);
        var r3 = 12 * (n4.year() - e3.year()) + (n4.month() - e3.month()), i3 = e3.clone().add(r3, c2), s4 = n4 - i3 < 0, u3 = e3.clone().add(r3 + (s4 ? -1 : 1), c2);
        return +(-(r3 + (n4 - i3) / (s4 ? i3 - u3 : u3 - i3)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c2, y: h2, w: o2, d: a2, D: d2, h: u2, m: s3, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D = {};
      D[g2] = M2;
      var p2 = "$isDayjsObject", S2 = function(t3) {
        return t3 instanceof _2 || !(!t3 || !t3[p2]);
      }, w2 = function t3(e3, n4, r3) {
        var i3;
        if (!e3)
          return g2;
        if ("string" == typeof e3) {
          var s4 = e3.toLowerCase();
          D[s4] && (i3 = s4), n4 && (D[s4] = n4, i3 = s4);
          var u3 = e3.split("-");
          if (!i3 && u3.length > 1)
            return t3(u3[0]);
        } else {
          var a3 = e3.name;
          D[a3] = e3, i3 = a3;
        }
        return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
      }, O = function(t3, e3) {
        if (S2(t3))
          return t3.clone();
        var n4 = "object" == typeof e3 ? e3 : {};
        return n4.date = t3, n4.args = arguments, new _2(n4);
      }, b2 = v2;
      b2.l = w2, b2.i = S2, b2.w = function(t3, e3) {
        return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _2 = function() {
        function M3(t3) {
          this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t3) {
          this.$d = function(t4) {
            var e3 = t4.date, n4 = t4.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r3 = e3.match($2);
              if (r3) {
                var i3 = r3[2] - 1 || 0, s4 = (r3[7] || "0").substring(0, 3);
                return n4 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s4)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s4);
              }
            }
            return new Date(e3);
          }(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e3) {
          var n4 = O(t3);
          return this.startOf(e3) <= n4 && n4 <= this.endOf(e3);
        }, m3.isAfter = function(t3, e3) {
          return O(t3) < this.startOf(e3);
        }, m3.isBefore = function(t3, e3) {
          return this.endOf(e3) < O(t3);
        }, m3.$g = function(t3, e3, n4) {
          return b2.u(t3) ? this[e3] : this.set(n4, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e3) {
          var n4 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
            var i3 = b2.w(n4.$u ? Date.UTC(n4.$y, e4, t4) : new Date(n4.$y, e4, t4), n4);
            return r3 ? i3 : i3.endOf(a2);
          }, $3 = function(t4, e4) {
            return b2.w(n4.toDate()[t4].apply(n4.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n4);
          }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r3 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r3 ? l3(1, M4) : l3(0, M4 + 1);
            case o2:
              var g3 = this.$locale().weekStart || 0, D2 = (y3 < g3 ? y3 + 7 : y3) - g3;
              return l3(r3 ? m4 - D2 : m4 + (6 - D2), M4);
            case a2:
            case d2:
              return $3(v3 + "Hours", 0);
            case u2:
              return $3(v3 + "Minutes", 1);
            case s3:
              return $3(v3 + "Seconds", 2);
            case i2:
              return $3(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e3) {
          var n4, o3 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n4 = {}, n4[a2] = f3 + "Date", n4[d2] = f3 + "Date", n4[c2] = f3 + "Month", n4[h2] = f3 + "FullYear", n4[u2] = f3 + "Hours", n4[s3] = f3 + "Minutes", n4[i2] = f3 + "Seconds", n4[r2] = f3 + "Milliseconds", n4)[o3], $3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
          if (o3 === c2 || o3 === h2) {
            var y3 = this.clone().set(d2, 1);
            y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
          } else
            l3 && this.$d[l3]($3);
          return this.init(), this;
        }, m3.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r3, f3) {
          var d3, l3 = this;
          r3 = Number(r3);
          var $3 = b2.p(f3), y3 = function(t3) {
            var e3 = O(l3);
            return b2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
          };
          if ($3 === c2)
            return this.set(c2, this.$M + r3);
          if ($3 === h2)
            return this.set(h2, this.$y + r3);
          if ($3 === a2)
            return y3(1);
          if ($3 === o2)
            return y3(7);
          var M4 = (d3 = {}, d3[s3] = e2, d3[u2] = n3, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m3.format = function(t3) {
          var e3 = this, n4 = this.$locale();
          if (!this.isValid())
            return n4.invalidDate || l2;
          var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s4 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n4.weekdays, c3 = n4.months, f3 = n4.meridiem, h3 = function(t4, n5, i4, s5) {
            return t4 && (t4[n5] || t4(e3, r3)) || i4[n5].slice(0, s5);
          }, d3 = function(t4) {
            return b2.s(s4 % 12 || 12, t4, "0");
          }, $3 = f3 || function(t4, e4, n5) {
            var r4 = t4 < 12 ? "AM" : "PM";
            return n5 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y2, function(t4, r4) {
            return r4 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b2.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n4.monthsShort, a3, c3, 3);
                case "MMMM":
                  return h3(c3, a3);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h3(n4.weekdaysMin, e3.$W, o3, 2);
                case "ddd":
                  return h3(n4.weekdaysShort, e3.$W, o3, 3);
                case "dddd":
                  return o3[e3.$W];
                case "H":
                  return String(s4);
                case "HH":
                  return b2.s(s4, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $3(s4, u3, true);
                case "A":
                  return $3(s4, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i3;
              }
              return null;
            }(t4) || i3.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r3, d3, l3) {
          var $3, y3 = this, M4 = b2.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D2 = function() {
            return b2.m(y3, m4);
          };
          switch (M4) {
            case h2:
              $3 = D2() / 12;
              break;
            case c2:
              $3 = D2();
              break;
            case f2:
              $3 = D2() / 3;
              break;
            case o2:
              $3 = (g3 - v3) / 6048e5;
              break;
            case a2:
              $3 = (g3 - v3) / 864e5;
              break;
            case u2:
              $3 = g3 / n3;
              break;
            case s3:
              $3 = g3 / e2;
              break;
            case i2:
              $3 = g3 / t2;
              break;
            default:
              $3 = g3;
          }
          return l3 ? $3 : b2.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D[this.$L];
        }, m3.locale = function(t3, e3) {
          if (!t3)
            return this.$L;
          var n4 = this.clone(), r3 = w2(t3, e3, true);
          return r3 && (n4.$L = r3), n4;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k2 = _2.prototype;
      return O.prototype = k2, [["$ms", r2], ["$s", i2], ["$m", s3], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
        k2[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e3) {
        return t3.$i || (t3(e3, _2, O), t3.$i = true), O;
      }, O.locale = w2, O.isDayjs = S2, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D[g2], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min);
  var dayjs_minExports = dayjs_min.exports;
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  const GLOBAL_DEBUG = true;
  function formatDate(dateString, invalidMessage = "Invalid date") {
    const date = dayjs(dateString);
    if (!date.isValid()) {
      return invalidMessage;
    }
    return date.format("DD/MM/YYYY h:mm:ss a");
  }
  const TOOLTIPS = {
    App: {
      loading: {
        content: `Retrieving data from Canvas...`,
        url: "https://djplaner.github.io/canvas-learning-journal/references/software/#loading"
      }
    },
    cljEveryone: {
      for_more: {
        // what is the purpose of the 'everyone' version: overview and create
        content: `Create a new learning journal task (a specifically configured group set) and an overview of the course's current group sets.`,
        url: "https://djplaner.github.io/canvas-learning-journal/reference/software/everyone/"
      }
    },
    cljGroupSet: {
      for_more: {
        // the 'group_set' component allows configure and orchestration of a possible learning journal
        content: `Determine if and how this group set can be used to provide private student learning journals. Click for more.`,
        url: "https://djplaner.github.io/canvas-learning-journal/reference/software/groupset/"
      },
      configure: {
        content: `Design if/how this groupset will work as a learning journal.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      orchestrate: {
        content: `Understanding student contributions to their learning journals and take appropriate action.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljGroupSets: {
      currentGroupSets: {
        // URL should provide more detail on the columns in the table
        content: `Overview of the course's existing group sets, some of which may be usable as learning journals. (i.e. groups and group discussion topics have been created)`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      /*
      name: {
          content: `Name of the existing group set.`,
          url: "https://djplaner.github.io/canvas-learning-journal/"
      }, 
      selfSignup: {
          content: "Whether students can join any group they wish in a group set. Typically not used for a learning journal, especially private learning journals.",
          url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      memberLimit: {
          content: `If self signup is enabled, the maximum number of students who can sign-up for a group.`,
          url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numPrompts: {
          content: `Number of prompts (discussion topics) created for this group set. Prompts are an expected feature of a learning journal to "prompt" student contributions.`,
          url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numGroups: {
          content: `Number of groups that exist already in the group set.`,
          url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numNoGroupStudents: {
          content: `Number of students enrolled in the course who are not members of a group.`,
          url: "https://djplaner.github.io/canvas-learning-journal/"
      }, */
      status: {
        content: `Summary of how well configuration of the group set matches the needs of a learning journal task.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljStatusLearningJournal: {
      privateLearningJournal: {
        content: `Groupset with single student groups and prompts.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      noPrompts: {
        content: `No prompts (groupset discussion topics) created to guide student contributions.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      noGroups: {
        content: `No groups have been created for this groupset.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      studentsWithoutGroup: {
        content: `Some enrolled students are not members of a groups (they do not have a learning journal).`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      multiStudentGroups: {
        content: `Some of the groups have (or could have in the future) more than one student.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljCreateLearningJournal: {
      page: {
        content: `Create a new group set to use for private student learning journals.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      title: {
        content: `Create a new group set to use for private student learning journals.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      name: {
        content: `What will the new learning journal task (aka group set) be named?`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      createStudentGroups: {
        content: `Within the learning journal, should each student have their own private group created? You can always create and modify groups later using Canvas.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      courseOrSections: {
        content: `Should groups be created for all students in the course, or just those belonging to the course sections which you select?`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljStatusGroupSet: {
      titleGroupSetStatus: {
        content: `Status (Canvas configuration) of this group set.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      titleLearningJournalStatus: {
        content: `Status of this group set as a learning journal.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljStatusDiscussions: {
      title: {
        content: `Statistics for each of the group set's discussion topics.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      topicTitle: {
        content: `Title of the parent discussion topic assigned to the group set`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numPrompts: {
        content: `Number of prompts (group specific topics).`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numNoStudentEntries: {
        content: `Number of prompts without student entries`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numNoStaffEntries: {
        content: `Number of prompts without staff entries`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljStatusStudentGroups: {
      title: {
        content: `Overview of student and teacher contributions (entries) to each group's prompts (discussion topics).`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      noStudentEntries: {
        content: `Number of prompts for each group that are missing entries from students. Both in the last 7 days and ever.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      noStaffEntries: {
        content: `Number of prompts for each group that are missing entries from staff. Both in the last 7 days and ever.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljOverviewParticipation: {
      title: {
        content: `Gain an overview of group participation with prompts for the whole groupset.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljPromptParticipationSummary: {
      title: {
        content: `Title of parent discussion topic for all groups.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      topicOverview: {
        content: `Number of groups with the different type of responses (entries) to this discussion topic`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      assignmentOverview: {
        content: `If topic is a graded topic (set as an assignment) summary of relevant assignment details.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      assessable: {
        content: `Whether the discussion topic is assessable.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      pointsPossible: {
        content: `Max points possible for the assignment.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      dueDate: {
        content: `Time/date when the assignment is due.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      needsGrading: {
        content: `Number of submissions requiring grading.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      num0StudentEntries: {
        content: `Number of groups with no student entries for this topic.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      num0StaffEntries: {
        content: `Number of groups with no staff entries for this topic.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      totalStudentEntries: {
        content: `Count of all student entries from all groups.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      totalStaffEntries: {
        content: `Count of all staff entries from all groups.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljPromptParticipationDetails: {
      title: {
        content: `Title of the group specific discussion topic.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      participationByGroup: {
        content: `Summary of each group's participation in the discussion topic.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      statistics: {
        content: `Misc. stats about entries for this topic for this group`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      group: {
        content: `Name and members of each group, with member specific links.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numStudents: {
        content: `Number of students in the group.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      daysSinceLastEntry: {
        content: `Number of days since the last student entry.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      daysUnanswered: {
        content: `Number of days since the last staff entry.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numStudentEntries: {
        content: `Number of responses (entries) from students in this group.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      numStaffEntries: {
        content: `Number of staff entries in this group's prompt.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      entries: {
        content: `Threaded display of all entries this group.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljCreateGroups: {
      button: {
        content: `View details of students without groups and perhaps create groups for them.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      studentsWithoutGroups: {
        content: `View students without groups and select those to create groups for.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    },
    cljCreatePrompt: {
      button: {
        content: `Create a new discussion topic (prompt) for the group set.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      },
      title: {
        content: `Create a new discussion topic (prompt) for the group set.`,
        url: "https://djplaner.github.io/canvas-learning-journal/"
      }
    }
  };
  const DEBUG = false;
  const FILE_NAME$8 = "CanvasApiData.ts";
  const CSRFtoken = function() {
    return decodeURIComponent(
      (document.cookie.match("(^|;) *_csrf_token=([^;]*)") || "")[2]
    );
  };
  const GRAPHQL_QUERY = `
query cljBaseQuery {
    course(id: $courseId) {
      _id
      name
      courseCode
      createdAt
      groupSetsConnection {
        nodes {
          id
          _id
          name
          memberLimit
          selfSignup
          groupsConnection {
            nodes {
              _id
              name
              updatedAt
              membersCount
              canMessage
              createdAt
              membersConnection {
                nodes {
                  _id
                  createdAt
                  user {
                    _id
                    avatarUrl
                    email
                    htmlUrl(courseId: "$courseId")
                    name
                    pronouns
                    shortName
                    sortableName
                    courseRoles(courseId: "$courseId")
                  }
                }
              }
            }
          }
        }
      }
      assignments: assignmentsConnection {
        nodes {
          _id
          assignmentGroup {
            _id
            name
          }
          assignmentGroupId
          courseId
          gradingType
          htmlUrl
          name
          published
          submissionTypes
          discussion {
            _id
            contextName
            title
            message
          }
        }
      }
      students: usersConnection(filter: {enrollmentTypes: StudentEnrollment}) {
        nodes {
          _id
          name
          email
          htmlUrl(courseId: $courseId)
          enrollments(courseId: "$courseId") {
            _id
            section {
              _id
              id
              name
            }
          }
        }
      }
      teachers: usersConnection(filter: {enrollmentTypes: TeacherEnrollment}) {
        nodes {
          _id
          name
          email
          htmlUrl(courseId: $courseId)
        }
      }
    }
  }`;
  let instance;
  class learningJournalStatus {
    // there are groups with more than one student
    /**
     * @constructor
     * @param groupSet object from canvasApiData.groupSets
     * @description Set the public properties of the learningJournalStatus object based
     * on the group set information
     */
    constructor(groupSet) {
      __publicField(this, "privateJournal", false);
      // all groups have one student member and self-signup is disabled
      __publicField(this, "completedConfig", false);
      // groupsCreated && promptsCreated ?? required
      __publicField(this, "promptsCreated", false);
      // there are prompts (discussion topics)
      __publicField(this, "groupsCreated", false);
      // there are groups
      __publicField(this, "selfSignUp", false);
      // self-signup is enabled
      __publicField(this, "studentsWithoutGroup", false);
      // there are students without a group
      __publicField(this, "multiStudentGroups", false);
      if (groupSet.hasOwnProperty("numGroups")) {
        this.groupsCreated = groupSet.numGroups > 0;
        this.promptsCreated = groupSet.numPrompts > 0;
        this.completedConfig = this.groupsCreated && this.promptsCreated;
        this.selfSignUp = groupSet.selfSignup === "enabled";
        this.studentsWithoutGroup = groupSet.numStudentsMembersOfGroups < groupSet.numStudents;
        this.privateJournal = groupSet.numNonPrivateGroups === 0 && this.completedConfig;
        this.multiStudentGroups = groupSet.numNonPrivateGroups > 0 || this.selfSignUp;
      }
    }
  }
  class canvasApiData {
    /*public studentsById: any = {}; // object of students by id
    public teachersById: any = {}; // object of teachers by id
    public discussionTopics: any = {} */
    /**
     * @constructor
     * @description Create a new CanvasCourse object, optional courseId
     */
    constructor() {
      __publicField(this, "id");
      // Canvas course id
      __publicField(this, "name");
      // Canvas course name
      __publicField(this, "hostName", "");
      // The hostname of the Canvas instance
      __publicField(this, "updated", 0);
      // TODO consider moving to a struct to include percent loaded etc
      __publicField(this, "courseCode", "");
      // The course code
      __publicField(this, "createdAt", "");
      // The creation date of the course
      //public groupSets: Object[] = []; // array of group sets in the course
      __publicField(this, "groupSets", []);
      __publicField(this, "groupSetsById", {});
      //public groupSetsById: any = {}; // object of group sets by id
      //public students: Object[] = []; // array of students in the course
      //public teachers: Object[] = []; // array of teachers in the course
      __publicField(this, "students", []);
      __publicField(this, "sections", {});
      __publicField(this, "teachers", []);
      __publicField(this, "studentsById", {});
      __publicField(this, "teachersById", {});
      __publicField(this, "discussionTopics", []);
      //public learningJournalStatus: learningJournalStatus
      __publicField(this, "learningJournalStatus", new learningJournalStatus({}));
      __publicField(this, "promptsByTopicId");
      if (instance) {
        throw new Error("canvasApiData: Cannot create a new instance of a singleton");
      }
      this.hostName = "";
      this.id = -1;
      this.name = "";
      this.groupSets = [];
      this.updated = 0;
      this.promptsByTopicId = {};
      instance = this;
    }
    /**
     * @function parseCurrentURL 
     * @description Get the course ID and hostname from the current URL.
     * @returns {object} An object containing the course ID and hostname.
     */
    parseCurrentURL() {
      const documentUrl2 = new URL(document.URL);
      this.hostName = documentUrl2.origin;
      const courseIdRegex = /\/courses\/(\d+)\//;
      const courseIdMatch = documentUrl2.pathname.match(courseIdRegex);
      if (courseIdMatch) {
        this.id = parseInt(courseIdMatch[1], 10);
      }
    }
    /**
     * @method mightBeLearningJournal
     * @param gsId : string
     * @returns boolean
     * @description identifies if a group set might be a learning journal
     * i.e. if it has both groups and prompts created
     */
    mightBeLearningJournal(gsId) {
      const gsIdNumber = parseInt(gsId);
      const groupSet = this.groupSetsById[gsIdNumber];
      if (groupSet) {
        return groupSet.learningJournalStatus.promptsCreated && groupSet.learningJournalStatus.groupsCreated;
      }
      return false;
    }
    /**
     * @function retrieveGraphQLObject
     * @description Perform a GraphQL query on the Canvas API
     */
    retrieveGraphQLObject(getPromptData) {
      const idString = this.id.toString();
      if (this.id === -1) {
        throw new Error("canvasApiData::retrieveCourseObject: Course ID not set");
      }
      let callUrl = `${this.hostName}/api/graphql`;
      let query = GRAPHQL_QUERY.replaceAll("$courseId", idString);
      const body = JSON.stringify({
        query
      });
      fetch(callUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": CSRFtoken()
        },
        body
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `canvasApiData: retrieveGraphQLObject: error ${response.status}`
          );
        }
        response.json().then((data) => {
          if (data.errors) {
            throw new Error(
              `canvasApiData: retrieveGraphQLObject: error ${data.errors[0].message}`
            );
          }
          this.transformGraphQLResponse(data.data.course);
          this.retrieveDiscussionTopics(idString, getPromptData);
          if (!getPromptData) {
            this.updated += 1;
          }
        });
      });
    }
    /**
     * @method transformGraphQLResponse
     * @param response JSON GraphQL response
     * @description Transform the GraphQL response into a more useful JS course object values
     * - name, courseCode, createdAt are "copied"
     * - response.groupSetsConnection.nodes is 
     *    - "copied" to this.groupSets[] 
     *      - groupsConnections.node member for each group set is "copied" 
     *        to this.groupSets[].groups[]
     *    - also a new property this.groupSetsById is created
     */
    transformGraphQLResponse(response) {
      this.name = response.name;
      this.courseCode = response.courseCode;
      this.createdAt = response.createdAt;
      this.groupSets = response.groupSetsConnection.nodes;
      this.transformStudentsTeachers(response);
      this.groupSetsById = {};
      for (const groupSet of this.groupSets) {
        groupSet.updated = 0;
        this.groupSetsById[groupSet._id] = groupSet;
        groupSet.groups = groupSet.groupsConnection.nodes;
        groupSet.numGroups = groupSet.groups.length;
        if (groupSet.memberLimit === null) {
          groupSet.memberLimit = "n/a";
        }
        if (groupSet.selfSignup === "disabled") {
          groupSet.selfSignup = "X";
        }
        let studentMemberIds = {};
        groupSet.numNonPrivateGroups = 0;
        console.log(`groupSet ${groupSet.name} checking members of groups`);
        for (const group of groupSet.groups) {
          group.members = group.membersConnection.nodes;
          let numStudentMembers = 0;
          for (const member of group.members) {
            if (this.studentsById.hasOwnProperty(member.user._id)) {
              studentMemberIds[member.user._id] = true;
              numStudentMembers += 1;
              console.log(` --- student member ${member.user.name} id ${member.user._id}`);
            }
          }
          if (numStudentMembers > 1) {
            groupSet.numNonPrivateGroups += 1;
          }
        }
        console.log("student members include");
        console.log(studentMemberIds);
        groupSet.numStudentsMembersOfGroups = Object.keys(studentMemberIds).length;
        groupSet.studentsWithoutGroup = {};
        for (const student of this.students) {
          if (!studentMemberIds.hasOwnProperty(student._id)) {
            groupSet.studentsWithoutGroup[student._id] = student;
          }
        }
        console.log("Students without groups");
        console.log(groupSet.studentsWithoutGroup);
        groupSet.numStudents = this.students.length;
        groupSet.numStudentsWithoutGroup = groupSet.numStudents - groupSet.numStudentsMembersOfGroups;
      }
    }
    /**
     * @method transformStudentsTeachers
     * @param response 
     * @description Set up object properties from the list of students and teachers
     * - arrays (students and teachers) from the GraphQL connection nodes
     * - objects (studentsById and teachersById) from the arrays (students and teachers)
     */
    transformStudentsTeachers(response) {
      this.students = response.students.nodes;
      this.teachers = response.teachers.nodes;
      this.studentsById = {};
      for (const student of this.students) {
        let enrollment;
        for (enrollment of student.enrollments) {
          this.sections[enrollment.section._id] = enrollment.section;
        }
        this.studentsById[student._id] = student;
      }
      this.teachersById = {};
      for (const teacher of this.teachers) {
        this.teachersById[teacher._id] = teacher;
      }
    }
    /**
    * @function retrieveDiscussionTopics
    * @param courseId - string version of Canvas course id
    * @description Retrieve the discussion topics for the course via Canvas REST API
    * and then call the transformDiscussionTopics method to process the response and update
    * the course object.
    * 
    * NOTE: Canvas GraphQL API does not appear to support discussion topics, hence REST.
    * This method called after the GraphQL query to get the course object.
    */
    retrieveDiscussionTopics(courseId, getPromptData) {
      const callUrl = `${this.hostName}/api/v1/courses/${courseId}/discussion_topics`;
      fetch(callUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": CSRFtoken()
        }
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `canvasApiData: retrieveDiscussionTopics: error ${response.status}`
          );
        }
        response.json().then((data) => {
          this.transformDiscussionTopics(data);
          if (getPromptData) {
            this.getGroupsResponses();
          }
          this.updated += 1;
        });
      });
    }
    /**
     * @function transformDiscussionTopics
     * @param topics JSON response from Canvas REST api
     * @description Transform the response into a more useful JS object
     * - save the response into this.discussionTopics
     * - for any discussion topic that has a group_category_id, add the discussion topic object to
     *   an array discussionTopics within the matching group set
     * - also create a learningJournalStatus object for each group set
     */
    transformDiscussionTopics(topics) {
      this.discussionTopics = topics;
      for (const topic of this.discussionTopics) {
        if (topic.group_category_id) {
          let groupSet = this.groupSetsById[topic.group_category_id];
          if (groupSet) {
            if (!groupSet.discussionTopics) {
              groupSet.discussionTopics = [];
            }
            groupSet.discussionTopics.push(topic);
          }
        }
      }
      for (const groupSet of this.groupSets) {
        if (groupSet.discussionTopics) {
          groupSet.numPrompts = groupSet.discussionTopics.length;
        } else {
          groupSet.numPrompts = 0;
        }
        groupSet.learningJournalStatus = new learningJournalStatus(groupSet);
        groupSet.groupsById = {};
        for (const group of groupSet.groups) {
          groupSet.groupsById[group._id] = group;
        }
        groupSet.discussionTopicsById = {};
        if (groupSet.discussionTopics) {
          for (const topic of groupSet.discussionTopics) {
            groupSet.discussionTopicsById[topic.id] = topic;
          }
        }
      }
    }
    /**
     * @method getGroupsResponses
     * @description Retrieve all the responses for all the groups in all of the
     * group sets.
     * 
     * Adds a prompts property to each group object. Keyed on the discussion topic Ids 
     * for the group set and containing the Canvas API full topic view for the group's
     * version of the topic.
     * 
     * TODO
     * - Perhaps should include some stats/analysis extra stuff at this stage
     * - The groupset should have properties to handle the loading of all the responses
     *    for showing progress
     * 
     * For each groupset, proceed only if there are discussionTopics
     *  For each group in the groupset
     *    Find each discussion topic find the list of ids for all the group's specific topics
     *    For each of the group's specific topics
     *      Get a Canvas API full topic view
     *      add it to the group.prompts property keyed on the groupset discussion topic
     * 
     * @todo 
     * - maybe add in assignments
     *   
     *   
     */
    async getGroupsResponses() {
      this.calculateGroupsResponseCalls();
      for (const groupSet of this.groupSets) {
        groupSet.updateProgress = 0;
        const progressIncrement = 100 / (groupSet.numGroups * groupSet.numPrompts);
        if (!groupSet.discussionTopics) {
          continue;
        }
        for (const group of groupSet.groups) {
          group.prompts = {};
          let groupTopics = [];
          const groupId = parseInt(group._id);
          for (const topic of groupSet.discussionTopics) {
            let groupTopic = topic.group_topic_children.find((element) => element.group_id === groupId);
            let gtId = "";
            if (groupTopic) {
              gtId = groupTopic.id;
            }
            groupTopics.push({
              topicId: topic.id,
              // link back to parent topic
              groupId,
              groupTopicId: gtId
              // the group's topic
            });
          }
          for (const groupTopic of groupTopics) {
            let data = await this.getResponses(group._id, groupTopic.groupTopicId);
            if (data) {
              data = this.analyseGroupPrompt(data);
              data["id"] = groupTopic.groupTopicId;
            }
            groupSet.updateProgress += progressIncrement;
            group.prompts[groupTopic.topicId] = data;
            if (!groupSet.discussionTopicsById[groupTopic.topicId].hasOwnProperty("promptsByTopicId")) {
              groupSet.discussionTopicsById[groupTopic.topicId].promptsByTopicId = {};
            }
            groupSet.discussionTopicsById[groupTopic.topicId].promptsByTopicId[groupTopic.groupTopicId] = data;
            this.promptsByTopicId[groupTopic.groupTopicId] = data;
            if (!groupSet.discussionTopicsById[groupTopic.topicId].hasOwnProperty("promptsByGroupId")) {
              groupSet.discussionTopicsById[groupTopic.topicId].promptsByGroupId = {};
            }
            groupSet.discussionTopicsById[groupTopic.topicId].promptsByGroupId[groupTopic.groupId] = data;
          }
        }
        this.analyseGroupSetTopics(groupSet._id);
        this.analyseGroupSetGroups(groupSet._id);
        groupSet.updated += 1;
      }
    }
    /**
     * @method analyseGroupSetGroups
     * @param groupSetId string id of the group set we're working on
     * @description Called once all the prompts for a groupset gathered. Analyse contributions
     * to prompts to be organised by groups
     * i.e. for a group, how many prompts don't have contributions etc
     * 
     * Loop through the groupset's groups and generate a stats object for each group
     */
    analyseGroupSetGroups(groupSetId2) {
      const groupSet = this.groupSetsById[groupSetId2];
      groupSet.stats = {
        numNoStudentEntries: 0,
        numNoStaffEntries: 0,
        numStudentEntries: 0,
        numStaffEntries: 0,
        numNoStudentEntriesLast7: 0,
        numNoStaffEntriesLast7: 0,
        lastStaffEntry: "",
        lastStudentEntry: ""
      };
      for (const group of groupSet.groups) {
        group.stats = {
          numNoStudentEntries: 0,
          numNoStaffEntries: 0,
          numStudentEntries: 0,
          numStaffEntries: 0,
          numNoStudentEntriesLast7: 0,
          numNoStaffEntriesLast7: 0,
          lastStaffEntry: "",
          lastStudentEntry: ""
        };
        for (const topicId in group.prompts) {
          const prompt = group.prompts[topicId];
          group.stats.numStudentEntries += prompt.stats.numStudentEntries;
          group.stats.numStaffEntries += prompt.stats.numStaffEntries;
          if (prompt.stats.numStudentEntries === 0) {
            group.stats.numNoStudentEntries += 1;
            group.stats.numNoStudentEntriesLast7 += 1;
          } else {
            if (group.stats.lastStudentEntry === "" || prompt.stats.lastStudentEntry > group.stats.lastStudentEntry) {
              group.stats.lastStudentEntry = prompt.stats.lastStudentEntry;
            }
            if (!this.last7Days(prompt.stats.lastStudentEntry)) {
              group.stats.numNoStudentEntriesLast7 += 1;
            }
          }
          if (prompt.stats.numStaffEntries === 0) {
            group.stats.numNoStaffEntries += 1;
            group.stats.numNoStaffEntriesLast7 += 1;
          } else {
            if (group.stats.lastStaffEntry === "" || prompt.stats.lastStaffEntry > group.stats.lastStaffEntry) {
              group.stats.lastStaffEntry = prompt.stats.lastStaffEntry;
            }
            if (!this.last7Days(prompt.stats.lastStaffEntry)) {
              group.stats.numNoStaffEntriesLast7 += 1;
            }
          }
        }
        groupSet.stats.numNoStudentEntries += group.stats.numNoStudentEntries;
        groupSet.stats.numNoStaffEntries += group.stats.numNoStaffEntries;
        groupSet.stats.numStudentEntries += group.stats.numStudentEntries;
        groupSet.stats.numStaffEntries += group.stats.numStaffEntries;
        groupSet.stats.numNoStudentEntriesLast7 += group.stats.numNoStudentEntriesLast7;
        groupSet.stats.numNoStaffEntriesLast7 += group.stats.numNoStaffEntriesLast7;
        if (groupSet.stats.lastStaffEntry === "" || group.stats.lastStaffEntry > groupSet.stats.lastStaffEntry) {
          groupSet.stats.lastStaffEntry = group.stats.lastStaffEntry;
        }
        if (groupSet.stats.lastStudentEntry === "" || group.stats.lastStudentEntry > groupSet.stats.lastStudentEntry) {
          groupSet.stats.lastStudentEntry = group.stats.lastStudentEntry;
        }
      }
    }
    /**
     * @method last7Days
     * @param dateString 
     * @returns true if the date string was within the last 7 days
     */
    last7Days(dateString) {
      if (dateString === null) {
        return false;
      }
      const sevenDaysAgo = /* @__PURE__ */ new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const lastEntryDate = new Date(dateString);
      return lastEntryDate > sevenDaysAgo;
    }
    /**
     * @method analyseGroupSetTopics
     * @param groupSetId string id of the string we're working on
     * @description Called once all the prompts for a groupset gathered. Analyse contributions
     * to generate stats on when and how many entries have been contributed by students and staff.
     * 
     * Each of the groupSets discussionTopic entries should have a promptsByTopicId object which
     * contains a stats object for each group prompt
     * 
     * - use num[Staff|Student]Entries to calculate numbers of entries
     * - use last[Staff|Student]Entry to calculate the number of prompts that have staff/student
     *   entries ever or in the last 7 days
     */
    analyseGroupSetTopics(groupSetId2) {
      const groupSet = this.groupSetsById[groupSetId2];
      for (const topic of groupSet.discussionTopics) {
        if (!topic.hasOwnProperty("promptsByTopicId")) {
          continue;
        }
        let numStaffEntries = 0;
        let numStudentEntries = 0;
        let numNoStudentEntries = 0;
        let numNoStaffEntries = 0;
        let lastStaffEntry = null;
        let lastStudentEntry = null;
        let numNoStudentEntriesLast7 = 0;
        let numNoStaffEntriesLast7 = 0;
        for (const promptId in topic.promptsByTopicId) {
          const prompt = topic.promptsByTopicId[promptId];
          numStaffEntries += prompt.stats.numStaffEntries;
          numStudentEntries += prompt.stats.numStudentEntries;
          if (prompt.stats.numStudentEntries === 0) {
            numNoStudentEntries += 1;
            numNoStudentEntriesLast7 += 1;
          } else if (!this.last7Days(prompt.stats.lastStudentEntry)) {
            numNoStudentEntriesLast7 += 1;
          }
          if (prompt.stats.numStaffEntries === 0) {
            numNoStaffEntries += 1;
            numNoStaffEntriesLast7 += 1;
          } else if (!this.last7Days(prompt.stats.lastStaffEntry)) {
            numNoStaffEntriesLast7 += 1;
          }
          if (lastStaffEntry === null || prompt.stats.lastStaffEntry > lastStaffEntry) {
            lastStaffEntry = prompt.stats.lastStaffEntry;
          }
          if (lastStudentEntry === null || prompt.stats.lastStudentEntry > lastStudentEntry) {
            lastStudentEntry = prompt.stats.lastStudentEntry;
          }
        }
        topic.stats = {
          numStaffEntries,
          numStudentEntries,
          numNoStudentEntries: numNoStudentEntries || 0,
          numNoStaffEntries,
          lastStaffEntry: lastStaffEntry || "",
          lastStudentEntry: lastStudentEntry || "",
          numNoStudentEntriesLast7,
          numNoStaffEntriesLast7
        };
      }
    }
    /**
     * @method analyseGroupPrompt( data )
     * @param data Canvas API full topic view object 
     * @returns data modified with discussionTopicStats object
     * @description Examines each of the entries in a topic to determine when and how many
     * entries have been contributed by students and staff
     * 
     * - Examine the discussionTopic.participants array to categorise participants as 
     *   staff or students
     *    Done by extracting user_id from the participant arrays and checking existence
     *    in this.teachersById.keys and this.studentsById.keys 
     * - Looping through each entries in discussionTopics.view
     *    - counting num student/staff entries
     *    - tracking when the most recent student/staff entry was made
     * 
     *    
     */
    analyseGroupPrompt(data) {
      data.stats = {
        numStaffEntries: 0,
        numStudentEntries: 0,
        numUnansweredStudentEntries: 0,
        lastStaffEntry: "",
        lastStudentEntry: ""
      };
      let participantType = {};
      let participant;
      for (participant of data.participants) {
        let type = "unknown";
        const staffIds = Object.keys(this.teachersById);
        const studentIds = Object.keys(this.studentsById);
        if (staffIds && staffIds.includes(`${participant.id}`)) {
          type = "staff";
        } else if (studentIds && studentIds.includes(`${participant.id}`)) {
          type = "student";
        }
        participantType[participant.id] = type;
      }
      let entry;
      for (entry of data.view) {
        const type = participantType[entry.user_id];
        if (type === "staff") {
          data.stats.numStaffEntries += 1;
          if (data.stats.lastStaffEntry === null || entry.created_at > data.stats.lastStaffEntry) {
            data.stats.lastStaffEntry = entry.created_at;
          }
        } else if (type === "student") {
          data.stats.numStudentEntries += 1;
          if (data.stats.lastStudentEntry === null || entry.created_at > data.stats.lastStudentEntry) {
            data.stats.lastStudentEntry = entry.created_at;
          }
        }
      }
      return data;
    }
    /**
     * @method calculateGroupsResponseCalls
     * @description Calculate the number of API calls required to 
     *    get all the responses for all the groups
     * @returns The number of API calls required
     */
    calculateGroupsResponseCalls() {
      let numApiCalls = 0;
      for (const groupSet of this.groupSets) {
        numApiCalls += groupSet.numGroups * groupSet.numPrompts;
      }
      return numApiCalls;
    }
    /**
     * @method getResponses
     * @param groupId
     * @param topicId 
     * @description  for the given topic get the full topic view from Canvas API
     * GET /api/v1/courses/:course_id/discussion_topics/:topic_id/view 
     */
    async getResponses(groupId, topicId) {
      this.id.toString();
      const callUrl = `${this.hostName}/api/v1/groups/${groupId}/discussion_topics/${topicId}/view`;
      try {
        const response = await fetch(callUrl, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });
        if (!response.ok) {
          throw new Error(
            `${FILE_NAME$8} getResponses: error ${response.status}`
          );
        }
        const data = await response.json();
        if (DEBUG && GLOBAL_DEBUG)
          ;
        if (!data) {
          throw new Error(`${FILE_NAME$8}:getCourseObject: no data returned`);
          return {};
        }
        return data;
      } catch (error) {
        console.error(`canvasApi:getCourseObject: error ${error}`);
        throw error;
      }
    }
    /**
     * @method getUserDetails
     * @param {Number} userId
     * @description Given a user id search sthe studentsById and teachersById for the
     * user's details
     */
    getUserDetails(userId) {
      let user = this.studentsById[userId];
      if (!user) {
        user = this.teachersById[userId];
      }
      return user;
    }
    /**
     * @method getGroupSetNames
     * @returns {Array} An array of all the group set names in the course
     */
    getGroupSetNames() {
      let groupSetNames = [];
      for (const groupSet of this.groupSets) {
        groupSetNames.push(groupSet.name);
      }
      return groupSetNames;
    }
  }
  let canvasData = vue.reactive(new canvasApiData());
  function getCanvasData(getPromptData = true) {
    if (canvasData.id === -1) {
      canvasData.parseCurrentURL();
      canvasData.retrieveGraphQLObject(getPromptData);
    }
    return canvasData;
  }
  const _hoisted_1$i = /* @__PURE__ */ vue.createElementVNode("link", {
    href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
    rel: "stylesheet"
  }, null, -1);
  const _hoisted_2$h = { class: "clj-learning-journal-status" };
  const _hoisted_3$h = ["href"];
  const _hoisted_4$g = ["href"];
  const _hoisted_5$e = ["href"];
  const _hoisted_6$d = ["href"];
  const _hoisted_7$b = ["href"];
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "cljStatusLearningJournal",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const canvasData2 = getCanvasData();
      const props = __props;
      const privateLJ = vue.ref(false);
      const studentsWithoutGroup = vue.ref(false);
      const noPrompts = vue.ref(false);
      const multiStudentGroups = vue.ref(false);
      const noGroups = vue.ref(false);
      showStuff();
      vue.watch(
        () => canvasData2.updated,
        (updated) => {
          showStuff();
        }
      );
      vue.watch(
        () => props.groupSetId,
        (gsId) => {
          showStuff();
        }
      );
      function showStuff() {
        const groupSet = canvasData2.groupSetsById[props.groupSetId];
        if (groupSet.hasOwnProperty("learningJournalStatus") && groupSet.learningJournalStatus.hasOwnProperty("privateJournal")) {
          privateLJ.value = groupSet.learningJournalStatus.privateJournal;
          studentsWithoutGroup.value = groupSet.learningJournalStatus.studentsWithoutGroup;
          noPrompts.value = !groupSet.learningJournalStatus.promptsCreated;
          multiStudentGroups.value = groupSet.learningJournalStatus.multiStudentGroups;
          noGroups.value = !groupSet.learningJournalStatus.groupsCreated;
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_badge = vue.resolveComponent("sl-badge");
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          _hoisted_1$i,
          vue.createElementVNode("div", _hoisted_2$h, [
            vue.createElementVNode("a", {
              href: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.privateLearningJournal.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.privateLearningJournal.content}`
              }, {
                default: vue.withCtx(() => [
                  privateLJ.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                    key: 0,
                    variant: "success"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Private Learning Journal")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_3$h),
            vue.createElementVNode("a", {
              href: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.studentsWithoutGroup.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.studentsWithoutGroup.content}`
              }, {
                default: vue.withCtx(() => [
                  studentsWithoutGroup.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                    key: 0,
                    variant: "warning"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Students without a group")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_4$g),
            vue.createElementVNode("a", {
              href: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.noPrompts.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.noPrompts.content}`
              }, {
                default: vue.withCtx(() => [
                  noPrompts.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                    key: 0,
                    variant: "warning"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("No prompts")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_5$e),
            vue.createElementVNode("a", {
              href: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.multiStudentGroups.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.multiStudentGroups.content}`
              }, {
                default: vue.withCtx(() => [
                  multiStudentGroups.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                    key: 0,
                    variant: "warning"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Multi-student groups")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_6$d),
            vue.createElementVNode("a", {
              href: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.noGroups.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusLearningJournal.noGroups.content}`
              }, {
                default: vue.withCtx(() => [
                  noGroups.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                    key: 0,
                    variant: "danger"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("No groups")
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_7$b)
          ])
        ], 64);
      };
    }
  });
  const _hoisted_1$h = { class: "clj-missing-groups" };
  const _hoisted_2$g = /* @__PURE__ */ vue.createElementVNode("span", null, "search value: ", -1);
  const _hoisted_3$g = { key: 0 };
  const _hoisted_4$f = ["href"];
  const _hoisted_5$d = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const FILE_NAME$7 = "cljMissingGroups";
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    __name: "cljMissingGroups",
    props: {
      groupSetId: {},
      numGroups: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      const groupSetId2 = vue.ref(props.groupSetId);
      const numGroups = vue.ref(props.numGroups);
      const groupSet = vue.ref(canvasData2.groupSetsById[groupSetId2.value]);
      {
        console.log(`${FILE_NAME$7} groupSetId: ${props.groupSetId} numGroups ${numGroups}`);
        console.log("-----");
      }
      {
        console.log(`${FILE_NAME$7} 2. just called getCanvasCourse`);
        console.log(canvasData2);
      }
      let headers;
      let items;
      const studentsSelected = vue.ref([]);
      const searchField = ["name", "sections"];
      const searchValue = vue.ref("");
      updateMissingGroups();
      function updateMissingGroups() {
        headers = [];
        items = [];
        headers = [
          { text: "Name", value: "name", sortable: true },
          { text: "Email", value: "email" },
          { text: "Profile", value: "profile" },
          { text: "Sections", value: "sections" }
        ];
        let student;
        let id2;
        for ([id2, student] of Object.entries(groupSet.value.studentsWithoutGroup)) {
          let studentData = {
            name: student.name,
            student: student.name,
            htmlUrl: student.htmlUrl,
            studentData: student,
            sections: getStudentSections(student)
          };
          items.push(studentData);
        }
      }
      function getStudentSections(student) {
        let sections = [];
        for (const enrollment of student.enrollments) {
          sections.push(enrollment.section.name);
        }
        return sections.join(", ");
      }
      vue.watch(
        () => [props.groupSetId, props.numGroups],
        (gsId) => {
          {
            console.log(`${FILE_NAME$7} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`);
          }
          groupSetId2.value = props.groupSetId;
          numGroups.value = props.numGroups;
          groupSet.value = canvasData2.groupSetsById[groupSetId2.value];
          updateMissingGroups();
        }
      );
      return (_ctx, _cache) => {
        const _component_EasyDataTable = vue.resolveComponent("EasyDataTable");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, [
          _hoisted_2$g,
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchValue.value = $event)
          }, null, 512), [
            [vue.vModelText, searchValue.value]
          ]),
          vue.createVNode(_component_EasyDataTable, {
            headers: vue.unref(headers),
            items: vue.unref(items),
            "items-selected": studentsSelected.value,
            "onUpdate:itemsSelected": _cache[1] || (_cache[1] = ($event) => studentsSelected.value = $event),
            "search-field": searchField,
            "search-value": searchValue.value,
            alternating: "",
            "border-cell": ""
          }, {
            "item-email": vue.withCtx((item) => [
              item.studentData.email ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$g, [
                vue.createElementVNode("a", {
                  href: `mailto:${item.studentData.email}`
                }, vue.toDisplayString(item.studentData.email), 9, _hoisted_4$f)
              ])) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["headers", "items", "items-selected", "search-value"]),
          _hoisted_5$d,
          vue.createTextVNode(" Field: " + vue.toDisplayString(searchField) + " value " + vue.toDisplayString(searchValue.value), 1)
        ]);
      };
    }
  });
  const _withScopeId$8 = (n3) => (vue.pushScopeId("data-v-2f0b35e4"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$g = { class: "clj-create-group" };
  const _hoisted_2$f = { class: "clj-create-group-button" };
  const _hoisted_3$f = ["href"];
  const _hoisted_4$e = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_5$c = { slot: "label" };
  const _hoisted_6$c = ["href"];
  const _hoisted_7$a = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const FILE_NAME$6 = "cljCreateGroups";
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    __name: "cljCreateGroups",
    props: {
      groupSetId: {},
      numGroups: {}
    },
    setup(__props) {
      const props = __props;
      const numGroups = vue.ref(props.numGroups);
      const groupSetId2 = vue.ref(props.groupSetId);
      {
        console.log(`${FILE_NAME$6} groupSetId: ${props.groupSetId} numGroups: ${numGroups}`);
        console.log(numGroups);
        console.log("-----");
      }
      const canvasData2 = getCanvasData();
      {
        console.log(`${FILE_NAME$6} 2. just called getCanvasCourse`);
        console.log(canvasData2);
      }
      vue.watch(
        () => [props.groupSetId, props.numGroups],
        (gsId) => {
          {
            console.log(`${FILE_NAME$6} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`);
          }
          numGroups.value = props.numGroups;
          groupSetId2.value = props.groupSetId;
        }
      );
      function toggleGroups() {
        const dialog = document.getElementById("clj-missing-groups");
        if (dialog.open) {
          dialog.open = false;
        } else {
          dialog.open = true;
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_button = vue.resolveComponent("sl-button");
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        const _component_sl_dialog = vue.resolveComponent("sl-dialog");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.createElementVNode("div", _hoisted_2$f, [
            vue.createVNode(_component_sl_button, {
              size: "small",
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => toggleGroups())
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" View " + vue.toDisplayString(numGroups.value) + " students missing a group ", 1)
              ]),
              _: 1
            }),
            vue.createTextVNode("   "),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljCreateGroups.button.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljCreateGroups.button.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_4$e
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_3$f)
          ]),
          vue.createVNode(_component_sl_dialog, {
            class: "dialog-overview",
            id: "clj-missing-groups",
            style: { "--width": "75vw" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_5$c, [
                vue.createTextVNode(" Students without groups "),
                vue.createElementVNode("a", {
                  class: "clj-th-help",
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljCreateGroups.studentsWithoutGroups.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljCreateGroups.studentsWithoutGroups.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_7$a
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_6$c)
              ]),
              vue.createVNode(_sfc_main$h, {
                groupSetId: groupSetId2.value,
                numGroups: numGroups.value
              }, null, 8, ["groupSetId", "numGroups"]),
              vue.createVNode(_component_sl_button, {
                slot: "footer",
                variant: "primary",
                onClick: _cache[1] || (_cache[1] = ($event) => toggleGroups())
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Close")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const cljCreateGroups = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-2f0b35e4"]]);
  const _withScopeId$7 = (n3) => (vue.pushScopeId("data-v-60307933"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$f = { class: "clj-create-prompt-button" };
  const _hoisted_2$e = ["href"];
  const _hoisted_3$e = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$d = { class: "clj-create-form" };
  const _hoisted_5$b = { slot: "label" };
  const _hoisted_6$b = ["href"];
  const _hoisted_7$9 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_8$9 = { class: "clj-create-prompt-form" };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "cljCreatePrompt",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      function toggleForm() {
        const dialog = document.getElementById("clj-create-prompt");
        if (dialog.open) {
          dialog.open = false;
        } else {
          dialog.open = true;
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_button = vue.resolveComponent("sl-button");
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        const _component_sl_input = vue.resolveComponent("sl-input");
        const _component_sl_dialog = vue.resolveComponent("sl-dialog");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$f, [
            vue.createVNode(_component_sl_button, {
              size: "small",
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => toggleForm())
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" Create a prompt ")
              ]),
              _: 1
            }),
            vue.createTextVNode("   "),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljCreatePrompt.button.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljCreatePrompt.button.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$e
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_2$e)
          ]),
          vue.createElementVNode("div", _hoisted_4$d, [
            vue.createVNode(_component_sl_dialog, {
              class: "dialog-overview",
              id: "clj-create-prompt"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_5$b, [
                  vue.createTextVNode(" Create a prompt "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljCreatePrompt.title.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljCreatePrompt.title.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_7$9
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_6$b)
                ]),
                vue.createElementVNode("div", _hoisted_8$9, [
                  vue.createVNode(_component_sl_input, {
                    class: "clj-label-on-left",
                    label: "Name",
                    "help-text": "What will the title of the new propmt?"
                  }),
                  vue.createVNode(_component_sl_button, {
                    class: "clj-button",
                    disabled: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Create")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode(_component_sl_button, {
                  slot: "footer",
                  variant: "primary",
                  onClick: _cache[1] || (_cache[1] = ($event) => toggleForm())
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Close")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ], 64);
      };
    }
  });
  const cljCreatePrompt = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-60307933"]]);
  const _hoisted_1$e = { class: "clj-configure" };
  const _hoisted_2$d = ["href"];
  const _hoisted_3$d = { slot: "content" };
  const _hoisted_4$c = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const _hoisted_5$a = { class: "clj-configure-groupsets" };
  const _hoisted_6$a = { key: 0 };
  const _hoisted_7$8 = { key: 1 };
  const _hoisted_8$8 = { class: "clj-data-table" };
  const _hoisted_9$8 = /* @__PURE__ */ vue.createElementVNode("th", null, " Name ", -1);
  const _hoisted_10$8 = /* @__PURE__ */ vue.createElementVNode("th", null, " Self signup ", -1);
  const _hoisted_11$8 = /* @__PURE__ */ vue.createElementVNode("th", null, " Member limit ", -1);
  const _hoisted_12$8 = /* @__PURE__ */ vue.createElementVNode("th", null, "# prompts ", -1);
  const _hoisted_13$8 = /* @__PURE__ */ vue.createElementVNode("th", null, "# of groups ", -1);
  const _hoisted_14$8 = /* @__PURE__ */ vue.createElementVNode("th", null, "# no group students ", -1);
  const _hoisted_15$8 = ["href"];
  const _hoisted_16$8 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1);
  const _hoisted_17$8 = ["href"];
  const _hoisted_18$7 = { class: "clj-center" };
  const _hoisted_19$6 = { class: "clj-center" };
  const _hoisted_20$6 = { class: "clj-center" };
  const _hoisted_21$4 = { key: 0 };
  const _hoisted_22$3 = { key: 1 };
  const _hoisted_23$3 = { class: "clj-center" };
  const _hoisted_24$2 = { class: "clj-center" };
  const _hoisted_25$1 = { key: 0 };
  const _hoisted_26$1 = { key: 1 };
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "cljGroupSets",
    setup(__props) {
      const canvasData2 = getCanvasData();
      const numGroupSets = vue.ref(0);
      const numStudents = vue.ref(0);
      updateDisplay();
      vue.watch(
        () => canvasData2.updated,
        (updated) => {
          updateDisplay();
        }
      );
      function updateDisplay() {
        if (canvasData2.updated) {
          numGroupSets.value = canvasData2.groupSets.length;
          numStudents.value = canvasData2.students.length;
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          vue.createElementVNode("h3", null, [
            vue.createTextVNode("Current groupsets "),
            vue.createElementVNode("a", {
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljGroupSets.currentGroupSets.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_3$d, vue.toDisplayString(vue.unref(TOOLTIPS).cljGroupSets.currentGroupSets.content), 1),
                  _hoisted_4$c
                ]),
                _: 1
              })
            ], 8, _hoisted_2$d)
          ]),
          vue.createElementVNode("div", _hoisted_5$a, [
            numGroupSets.value === 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$a, " No group sets found ")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$8, [
              vue.createElementVNode("table", _hoisted_8$8, [
                vue.createElementVNode("thead", null, [
                  _hoisted_9$8,
                  _hoisted_10$8,
                  _hoisted_11$8,
                  _hoisted_12$8,
                  _hoisted_13$8,
                  _hoisted_14$8,
                  vue.createElementVNode("th", null, [
                    vue.createTextVNode("Learning Journal Status "),
                    vue.createElementVNode("a", {
                      target: "_blank",
                      href: `${vue.unref(TOOLTIPS).cljGroupSets.status.url}`
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        content: `${vue.unref(TOOLTIPS).cljGroupSets.status.content}`
                      }, {
                        default: vue.withCtx(() => [
                          _hoisted_16$8
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ], 8, _hoisted_15$8)
                  ])
                ]),
                vue.createElementVNode("tbody", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(canvasData2).groupSets, (groupSet) => {
                    return vue.openBlock(), vue.createElementBlock("tr", {
                      key: groupSet._id
                    }, [
                      vue.createElementVNode("td", null, [
                        vue.createElementVNode("a", {
                          href: `${vue.unref(canvasData2).hostName}/courses/${vue.unref(canvasData2).id}/groups?open=1#tab-${groupSet._id}`
                        }, vue.toDisplayString(groupSet.name), 9, _hoisted_17$8)
                      ]),
                      vue.createElementVNode("td", _hoisted_18$7, vue.toDisplayString(groupSet.selfSignup), 1),
                      vue.createElementVNode("td", _hoisted_19$6, vue.toDisplayString(groupSet.memberLimit), 1),
                      vue.createElementVNode("td", _hoisted_20$6, [
                        groupSet.numPrompts > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_21$4, vue.toDisplayString(groupSet.numPrompts), 1)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_22$3, [
                          vue.createVNode(cljCreatePrompt, {
                            groupSetId: groupSet._id
                          }, null, 8, ["groupSetId"])
                        ]))
                      ]),
                      vue.createElementVNode("td", _hoisted_23$3, vue.toDisplayString(groupSet.numGroups), 1),
                      vue.createElementVNode("td", _hoisted_24$2, [
                        groupSet.numStudentsWithoutGroup > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_25$1, [
                          vue.createVNode(cljCreateGroups, {
                            groupSetId: groupSet._id,
                            numGroups: groupSet.numStudentsWithoutGroup
                          }, null, 8, ["groupSetId", "numGroups"])
                        ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_26$1, " 0 "))
                      ]),
                      vue.createElementVNode("td", null, [
                        vue.createVNode(_sfc_main$i, {
                          groupSetId: groupSet._id
                        }, null, 8, ["groupSetId"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])
        ]);
      };
    }
  });
  const _withScopeId$6 = (n3) => (vue.pushScopeId("data-v-3d20555e"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$d = { class: "clj-create-form" };
  const _hoisted_2$c = ["href"];
  const _hoisted_3$c = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$b = { slot: "label" };
  const _hoisted_5$9 = ["href"];
  const _hoisted_6$9 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_7$7 = { class: "clj-create-learning-journal-form" };
  const _hoisted_8$7 = { class: "clj-create-group-div" };
  const _hoisted_9$7 = ["href"];
  const _hoisted_10$7 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_11$7 = {
    id: "clj-groupset-name-help",
    slot: "help-text"
  };
  const _hoisted_12$7 = { class: "clj-create-group-div" };
  const _hoisted_13$7 = ["href"];
  const _hoisted_14$7 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_15$7 = {
    key: 0,
    class: "clj-create-group-div"
  };
  const _hoisted_16$7 = ["href"];
  const _hoisted_17$7 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_18$6 = {
    key: 1,
    style: { "opacity": "0.5" }
  };
  const _hoisted_19$5 = ["href"];
  const _hoisted_20$5 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const FILE_NAME$5 = "cljCreateLearningJournal";
  const ALL_STUDENTS = "All students";
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "cljCreateLearningJournal",
    setup(__props) {
      const canvasData2 = getCanvasData();
      {
        console.log(`${FILE_NAME$5} canvas data`);
        console.log(canvasData2);
      }
      const groupSetNames = vue.ref(canvasData2.getGroupSetNames());
      const duplicateGroupsetName = vue.ref(false);
      const newGroupsetName = vue.ref("");
      const sections = vue.ref(canvasData2.sections);
      const createGroups = vue.ref(false);
      const whichStudents = vue.ref(ALL_STUDENTS);
      function toggleForm() {
        const dialog = document.getElementById("clj-create-learning-journal");
        if (dialog.open) {
          dialog.open = false;
        } else {
          dialog.open = true;
        }
      }
      function createLearningJournal() {
        {
          console.log(`${FILE_NAME$5} createGroup`);
        }
      }
      function checkGroupSetName() {
        {
          console.log(`${FILE_NAME$5} checkGroupSetName`);
        }
        const nameElement = document.getElementById("clj-groupset-name");
        if (!nameElement) {
          throw new Error(`${FILE_NAME$5} No group name element`);
        }
        const name = nameElement.value;
        newGroupsetName.value = name;
        const clj = document.getElementById("clj-create-learning-journal");
        if (groupSetNames.value.includes(name) || name === "") {
          if (clj) {
            let button = clj.querySelector("sl-button");
            if (button) {
              button.disabled = true;
            }
          }
          if (name !== "") {
            duplicateGroupsetName.value = true;
          }
        } else {
          if (clj) {
            const button = document.getElementById("clj-create-learning-journal");
            if (button) {
              button.disabled = false;
              duplicateGroupsetName.value = false;
            }
          }
        }
      }
      const checkMenuSelect = (event) => {
        {
          console.log(`${FILE_NAME$5} checkMenuSelect `);
          console.log(event);
        }
        let sections2 = [];
        for (let i2 = 0; i2 < event.target.children.length; i2++) {
          if (event.target.children[i2].checked) {
            sections2.push(event.target.children[i2].value);
          }
        }
        whichStudents.value = sections2.join(", ");
        if (sections2.length === 0) {
          whichStudents.value = ALL_STUDENTS;
        }
      };
      return (_ctx, _cache) => {
        const _component_sl_button = vue.resolveComponent("sl-button");
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        const _component_sl_badge = vue.resolveComponent("sl-badge");
        const _component_sl_input = vue.resolveComponent("sl-input");
        const _component_sl_checkbox = vue.resolveComponent("sl-checkbox");
        const _component_sl_menu_item = vue.resolveComponent("sl-menu-item");
        const _component_sl_menu = vue.resolveComponent("sl-menu");
        const _component_sl_dropdown = vue.resolveComponent("sl-dropdown");
        const _component_sl_dialog = vue.resolveComponent("sl-dialog");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
          vue.createVNode(_component_sl_button, {
            size: "small",
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => toggleForm())
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" Create a Learning Journal task ")
            ]),
            _: 1
          }),
          vue.createElementVNode("a", {
            class: "clj-th-help",
            target: "_blank",
            href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.page.url}`
          }, [
            vue.createVNode(_component_sl_tooltip, {
              content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.page.content}`
            }, {
              default: vue.withCtx(() => [
                _hoisted_3$c
              ]),
              _: 1
            }, 8, ["content"])
          ], 8, _hoisted_2$c),
          vue.createVNode(_component_sl_dialog, {
            class: "dialog-overview",
            id: "clj-create-learning-journal"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_4$b, [
                vue.createTextVNode(" Create a learning journal task "),
                vue.createElementVNode("a", {
                  class: "clj-th-help",
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.title.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.title.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_6$9
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_5$9)
              ]),
              vue.createElementVNode("div", _hoisted_7$7, [
                vue.createElementVNode("div", _hoisted_8$7, [
                  vue.createElementVNode("h3", null, [
                    vue.createTextVNode("Name "),
                    vue.createElementVNode("a", {
                      class: "clj-th-help",
                      target: "_blank",
                      href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.name.url}`
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.name.content}`
                      }, {
                        default: vue.withCtx(() => [
                          _hoisted_10$7
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ], 8, _hoisted_9$7)
                  ]),
                  vue.createVNode(_component_sl_input, {
                    id: "clj-groupset-name",
                    class: "clj-label-on-left",
                    onInput: _cache[1] || (_cache[1] = ($event) => checkGroupSetName()),
                    value: newGroupsetName.value
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("span", _hoisted_11$7, [
                        duplicateGroupsetName.value ? (vue.openBlock(), vue.createBlock(_component_sl_badge, {
                          key: 0,
                          variant: "danger"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" A groupset with that name already exists ")
                          ]),
                          _: 1
                        })) : vue.createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                vue.createElementVNode("div", _hoisted_12$7, [
                  vue.createElementVNode("h3", null, [
                    vue.createTextVNode("Create student groups? "),
                    vue.createElementVNode("a", {
                      class: "clj-th-help",
                      target: "_blank",
                      href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.createStudentGroups.url}`
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.createStudentGroups.content}`
                      }, {
                        default: vue.withCtx(() => [
                          _hoisted_14$7
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ], 8, _hoisted_13$7)
                  ]),
                  vue.createVNode(_component_sl_checkbox, {
                    id: "clj-create-groups",
                    onSlChange: _cache[2] || (_cache[2] = ($event) => createGroups.value = !createGroups.value)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Create a single member group for each student ")
                    ]),
                    _: 1
                  })
                ]),
                createGroups.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15$7, [
                  vue.createElementVNode("h3", null, [
                    vue.createTextVNode("For which students? "),
                    vue.createElementVNode("a", {
                      class: "clj-th-help",
                      target: "_blank",
                      href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.courseOrSections.url}`
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.courseOrSections.content}`
                      }, {
                        default: vue.withCtx(() => [
                          _hoisted_17$7
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ], 8, _hoisted_16$7)
                  ]),
                  vue.createVNode(_component_sl_dropdown, {
                    stayOpenOnSelect: "",
                    hoist: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_sl_button, {
                        slot: "trigger",
                        caret: "",
                        id: "clj-student-choice-button"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(whichStudents.value), 1)
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_sl_menu, {
                        onSlSelect: checkMenuSelect,
                        id: "clj-student-choice-menu"
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sections.value, (section) => {
                            return vue.openBlock(), vue.createBlock(_component_sl_menu_item, {
                              key: section.id,
                              value: section.name,
                              type: "checkbox"
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(section.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_18$6, [
                  vue.createElementVNode("h3", null, [
                    vue.createTextVNode("For which students? "),
                    vue.createElementVNode("a", {
                      class: "clj-th-help",
                      target: "_blank",
                      href: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.courseOrSections.url}`
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        content: `${vue.unref(TOOLTIPS).cljCreateLearningJournal.courseOrSections.content}`
                      }, {
                        default: vue.withCtx(() => [
                          _hoisted_20$5
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ], 8, _hoisted_19$5)
                  ]),
                  vue.createVNode(_component_sl_dropdown, {
                    stayOpenOnSelect: "",
                    hoist: "",
                    disabled: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_sl_button, {
                        slot: "trigger",
                        caret: "",
                        id: "clj-student-choice-button"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(whichStudents.value), 1)
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_sl_menu, {
                        onSlSelect: checkMenuSelect,
                        id: "clj-student-choice-menu"
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sections.value, (section) => {
                            return vue.openBlock(), vue.createBlock(_component_sl_menu_item, {
                              key: section.id,
                              value: section.name,
                              type: "checkbox"
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(section.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]))
              ]),
              vue.createVNode(_component_sl_button, {
                disabled: "",
                variant: "success",
                slot: "footer",
                class: "clj-button",
                onClick: _cache[3] || (_cache[3] = ($event) => createLearningJournal())
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Create Learning Journal")
                ]),
                _: 1
              }),
              vue.createVNode(_component_sl_button, {
                slot: "footer",
                variant: "neutral",
                onClick: _cache[4] || (_cache[4] = ($event) => toggleForm())
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Close")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const cljCreateLearningJournal = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3d20555e"]]);
  const _hoisted_1$c = {
    class: "clj-status",
    id: "clj-eo-button"
  };
  const _hoisted_2$b = ["href"];
  const _hoisted_3$b = { slot: "content" };
  const _hoisted_4$a = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const _hoisted_5$8 = {
    key: 0,
    class: "clj-detail",
    id: "clj-gs-detail"
  };
  const _hoisted_6$8 = {
    key: 1,
    class: "clj-detail",
    id: "clj-gs-detail",
    style: { "display": "none" }
  };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "cljEveryone",
    setup(__props) {
      const configOpen = vue.ref(false);
      {
        const tableElement = document.querySelector("table.roster");
        if (tableElement) {
          tableElement.style.filter = "blur(0.5rem)";
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$c, [
            configOpen.value ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => configOpen.value = !configOpen.value),
              id: "clj-gs-config-switch",
              class: "icon-Solid icon-mini-arrow-down"
            })) : (vue.openBlock(), vue.createElementBlock("i", {
              key: 1,
              onClick: _cache[1] || (_cache[1] = ($event) => configOpen.value = !configOpen.value),
              id: "clj-gs-config-switch",
              class: "icon-Solid icon-mini-arrow-end"
            })),
            vue.createTextVNode(" Canvas Learning Journal "),
            vue.createElementVNode("a", {
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljEveryone.for_more.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_3$b, vue.toDisplayString(vue.unref(TOOLTIPS).cljEveryone.for_more.content), 1),
                  _hoisted_4$a
                ]),
                _: 1
              })
            ], 8, _hoisted_2$b)
          ]),
          configOpen.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$8, [
            vue.createVNode(cljCreateLearningJournal),
            vue.createVNode(_sfc_main$e)
          ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$8, [
            vue.createVNode(cljCreateLearningJournal),
            vue.createVNode(_sfc_main$e)
          ]))
        ], 64);
      };
    }
  });
  var tab_styles_default = i$3`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
  var icon_button_styles_default = i$3`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }
  var icon_styles_default = i$3`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$2 = (o2, t2) => void 0 === t2 ? void 0 !== (o2 == null ? void 0 : o2._$litType$) : (o2 == null ? void 0 : o2._$litType$) === t2, f$1 = (o2) => void 0 === o2.strings, u = {}, m = (o2, t2 = u) => o2._$AH = t2;
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library2) {
      var _a2;
      let fileData;
      if (library2 == null ? void 0 : library2.spriteSheet) {
        this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
        await this.updateComplete;
        const svg = this.shadowRoot.querySelector("[part='svg']");
        if (typeof library2.mutator === "function") {
          library2.mutator(svg);
        }
        return this.svg;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok)
          return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e2) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a2 = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a2.toLowerCase()) !== "svg")
          return CACHEABLE_ERROR;
        if (!parser)
          parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl)
          return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e2) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return {
          url: library2.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a2;
      const { url, fromLibrary } = this.getIconSource();
      const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library2);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e$2(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a2 = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a2.call(library2, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = [component_styles_default, icon_styles_default];
  __decorateClass([
    r$2()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    n$3()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    n$3()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$1 = Symbol.for(""), o$3 = (t2) => {
    if ((t2 == null ? void 0 : t2.r) === e$1)
      return t2 == null ? void 0 : t2._$litStatic$;
  }, s$1 = (t2, ...r2) => ({ _$litStatic$: r2.reduce((r3, e2, o2) => r3 + ((t3) => {
    if (void 0 !== t3._$litStatic$)
      return t3._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t3}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e2) + t2[o2 + 1], t2[0]), r: e$1 }), a = /* @__PURE__ */ new Map(), l$1 = (t2) => (r2, ...e2) => {
    const i2 = e2.length;
    let s3, l2;
    const n3 = [], u2 = [];
    let c2, $2 = 0, f2 = false;
    for (; $2 < i2; ) {
      for (c2 = r2[$2]; $2 < i2 && void 0 !== (l2 = e2[$2], s3 = o$3(l2)); )
        c2 += s3 + r2[++$2], f2 = true;
      $2 !== i2 && u2.push(l2), n3.push(c2), $2++;
    }
    if ($2 === i2 && n3.push(r2[i2]), f2) {
      const t3 = n3.join("$$lit$$");
      void 0 === (r2 = a.get(t3)) && (n3.raw = n3, a.set(t3, r2 = n3)), e2 = u2;
    }
    return t2(r2, ...e2);
  }, n$2 = l$1(x);
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$2 = (o2) => o2 ?? T;
  var SlIconButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.label = "";
      this.disabled = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.href ? true : false;
      const tag = isLink ? s$1`a` : s$1`button`;
      return n$2`
      <${tag}
        part="base"
        class=${e$3({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : "button")}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${o$2(this.name)}
          library=${o$2(this.library)}
          src=${o$2(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
  };
  SlIconButton.styles = [component_styles_default, icon_button_styles_default];
  SlIconButton.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5(".icon-button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass([
    r$2()
  ], SlIconButton.prototype, "hasFocus", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass([
    n$3()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);
  var id$1 = 0;
  var SlTab = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.attrId = ++id$1;
      this.componentId = `sl-tab-${this.attrId}`;
      this.panel = "";
      this.active = false;
      this.closable = false;
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tab");
    }
    handleCloseClick(event) {
      event.stopPropagation();
      this.emit("sl-close");
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus to the tab. */
    focus(options) {
      this.tab.focus(options);
    }
    /** Removes focus from the tab. */
    blur() {
      this.tab.blur();
    }
    render() {
      this.id = this.id.length > 0 ? this.id : this.componentId;
      return x`
      <div
        part="base"
        class=${e$3({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
    }
  };
  SlTab.styles = [component_styles_default, tab_styles_default];
  SlTab.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e$5(".tab")
  ], SlTab.prototype, "tab", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlTab.prototype, "panel", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlTab.prototype, "active", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlTab.prototype, "closable", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlTab.prototype, "disabled", 2);
  __decorateClass([
    watch("active")
  ], SlTab.prototype, "handleActiveChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTab.prototype, "handleDisabledChange", 1);
  SlTab.define("sl-tab");
  var tab_panel_styles_default = i$3`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;
  var id = 0;
  var SlTabPanel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.attrId = ++id;
      this.componentId = `sl-tab-panel-${this.attrId}`;
      this.name = "";
      this.active = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.id = this.id.length > 0 ? this.id : this.componentId;
      this.setAttribute("role", "tabpanel");
    }
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    render() {
      return x`
      <slot
        part="base"
        class=${e$3({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
    }
  };
  SlTabPanel.styles = [component_styles_default, tab_panel_styles_default];
  __decorateClass([
    n$3({ reflect: true })
  ], SlTabPanel.prototype, "name", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlTabPanel.prototype, "active", 2);
  __decorateClass([
    watch("active")
  ], SlTabPanel.prototype, "handleActiveChange", 1);
  SlTabPanel.define("sl-tab-panel");
  var tab_group_styles_default = i$3`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  var locks = /* @__PURE__ */ new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
    if (isNaN(padding) || !padding) {
      return 0;
    }
    return padding;
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.documentElement.classList.contains("sl-scroll-lock")) {
      const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
      document.documentElement.classList.add("sl-scroll-lock");
      document.documentElement.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.documentElement.classList.remove("sl-scroll-lock");
      document.documentElement.style.removeProperty("--sl-scroll-lock-size");
    }
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset2 = getOffset(element, container);
    const offsetTop = offset2.top + container.scrollTop;
    const offsetLeft = offset2.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }
  var SlTabGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.tabs = [];
      this.panels = [];
      this.hasScrollControls = false;
      this.placement = "top";
      this.activation = "auto";
      this.noScrollControls = false;
    }
    connectedCallback() {
      const whenAllDefined = Promise.all([
        customElements.whenDefined("sl-tab"),
        customElements.whenDefined("sl-tab-panel")
      ]);
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => {
        this.repositionIndicator();
        this.updateScrollControls();
      });
      this.mutationObserver = new MutationObserver((mutations) => {
        if (mutations.some((m2) => !["aria-labelledby", "aria-controls"].includes(m2.attributeName))) {
          setTimeout(() => this.setAriaLabels());
        }
        if (mutations.some((m2) => m2.attributeName === "disabled")) {
          this.syncTabsAndPanels();
        }
      });
      this.updateComplete.then(() => {
        this.syncTabsAndPanels();
        this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
        this.resizeObserver.observe(this.nav);
        whenAllDefined.then(() => {
          const intersectionObserver = new IntersectionObserver((entries, observer2) => {
            var _a2;
            if (entries[0].intersectionRatio > 0) {
              this.setAriaLabels();
              this.setActiveTab((_a2 = this.getActiveTab()) != null ? _a2 : this.tabs[0], { emitEvents: false });
              observer2.unobserve(entries[0].target);
            }
          });
          intersectionObserver.observe(this.tabGroup);
        });
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.mutationObserver.disconnect();
      this.resizeObserver.unobserve(this.nav);
    }
    getAllTabs(options = { includeDisabled: true }) {
      const slot = this.shadowRoot.querySelector('slot[name="nav"]');
      return [...slot.assignedElements()].filter((el) => {
        return options.includeDisabled ? el.tagName.toLowerCase() === "sl-tab" : el.tagName.toLowerCase() === "sl-tab" && !el.disabled;
      });
    }
    getAllPanels() {
      return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
    }
    getActiveTab() {
      return this.tabs.find((el) => el.active);
    }
    handleClick(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    handleKeyDown(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (["Enter", " "].includes(event.key)) {
        if (tab !== null) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
          event.preventDefault();
        }
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const activeEl = this.tabs.find((t2) => t2.matches(":focus"));
        const isRtl = this.localize.dir() === "rtl";
        if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
          let index = this.tabs.indexOf(activeEl);
          if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = this.tabs.length - 1;
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
            index--;
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
            index++;
          }
          if (index < 0) {
            index = this.tabs.length - 1;
          }
          if (index > this.tabs.length - 1) {
            index = 0;
          }
          this.tabs[index].focus({ preventScroll: true });
          if (this.activation === "auto") {
            this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
          }
          if (["top", "bottom"].includes(this.placement)) {
            scrollIntoView(this.tabs[index], this.nav, "horizontal");
          }
          event.preventDefault();
        }
      }
    }
    handleScrollToStart() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    handleScrollToEnd() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    setActiveTab(tab, options) {
      options = __spreadValues({
        emitEvents: true,
        scrollBehavior: "auto"
      }, options);
      if (tab !== this.activeTab && !tab.disabled) {
        const previousTab = this.activeTab;
        this.activeTab = tab;
        this.tabs.forEach((el) => el.active = el === this.activeTab);
        this.panels.forEach((el) => {
          var _a2;
          return el.active = el.name === ((_a2 = this.activeTab) == null ? void 0 : _a2.panel);
        });
        this.syncIndicator();
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
        }
        if (options.emitEvents) {
          if (previousTab) {
            this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
          }
          this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
        }
      }
    }
    setAriaLabels() {
      this.tabs.forEach((tab) => {
        const panel = this.panels.find((el) => el.name === tab.panel);
        if (panel) {
          tab.setAttribute("aria-controls", panel.getAttribute("id"));
          panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
        }
      });
    }
    repositionIndicator() {
      const currentTab = this.getActiveTab();
      if (!currentTab) {
        return;
      }
      const width = currentTab.clientWidth;
      const height = currentTab.clientHeight;
      const isRtl = this.localize.dir() === "rtl";
      const allTabs = this.getAllTabs();
      const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
      const offset2 = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth,
          top: previous.top + current.clientHeight
        }),
        { left: 0, top: 0 }
      );
      switch (this.placement) {
        case "top":
        case "bottom":
          this.indicator.style.width = `${width}px`;
          this.indicator.style.height = "auto";
          this.indicator.style.translate = isRtl ? `${-1 * offset2.left}px` : `${offset2.left}px`;
          break;
        case "start":
        case "end":
          this.indicator.style.width = "auto";
          this.indicator.style.height = `${height}px`;
          this.indicator.style.translate = `0 ${offset2.top}px`;
          break;
      }
    }
    // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
    syncTabsAndPanels() {
      this.tabs = this.getAllTabs({ includeDisabled: false });
      this.panels = this.getAllPanels();
      this.syncIndicator();
      this.updateComplete.then(() => this.updateScrollControls());
    }
    updateScrollControls() {
      if (this.noScrollControls) {
        this.hasScrollControls = false;
      } else {
        this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
      }
    }
    syncIndicator() {
      const tab = this.getActiveTab();
      if (tab) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
      }
    }
    /** Shows the specified tab panel. */
    show(panel) {
      const tab = this.tabs.find((el) => el.panel === panel);
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return x`
      <div
        part="base"
        class=${e$3({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
    }
  };
  SlTabGroup.styles = [component_styles_default, tab_group_styles_default];
  SlTabGroup.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e$5(".tab-group")
  ], SlTabGroup.prototype, "tabGroup", 2);
  __decorateClass([
    e$5(".tab-group__body")
  ], SlTabGroup.prototype, "body", 2);
  __decorateClass([
    e$5(".tab-group__nav")
  ], SlTabGroup.prototype, "nav", 2);
  __decorateClass([
    e$5(".tab-group__indicator")
  ], SlTabGroup.prototype, "indicator", 2);
  __decorateClass([
    r$2()
  ], SlTabGroup.prototype, "hasScrollControls", 2);
  __decorateClass([
    n$3()
  ], SlTabGroup.prototype, "placement", 2);
  __decorateClass([
    n$3()
  ], SlTabGroup.prototype, "activation", 2);
  __decorateClass([
    n$3({ attribute: "no-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "noScrollControls", 2);
  __decorateClass([
    watch("noScrollControls", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "updateScrollControls", 1);
  __decorateClass([
    watch("placement", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "syncIndicator", 1);
  SlTabGroup.define("sl-tab-group");
  const _withScopeId$5 = (n3) => (vue.pushScopeId("data-v-ea7c28c0"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$b = { class: "clj-status-group-set" };
  const _hoisted_2$a = { class: "clj-two-column-grid" };
  const _hoisted_3$a = { class: "clj-group-set-info" };
  const _hoisted_4$9 = ["href"];
  const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_6$7 = { class: "clj-data-table" };
  const _hoisted_7$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Name ", -1));
  const _hoisted_8$6 = { class: "clj-center" };
  const _hoisted_9$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Self signup ", -1));
  const _hoisted_10$6 = { class: "clj-center" };
  const _hoisted_11$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Member limit ", -1));
  const _hoisted_12$6 = { class: "clj-center" };
  const _hoisted_13$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", null, " # of groups ", -1));
  const _hoisted_14$6 = { class: "clj-center" };
  const _hoisted_15$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-cell-top" }, " # of prompts ", -1));
  const _hoisted_16$6 = { class: "clj-center" };
  const _hoisted_17$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_18$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("th", null, " # no group students ", -1));
  const _hoisted_19$4 = { class: "clj-center" };
  const _hoisted_20$4 = { key: 0 };
  const _hoisted_21$3 = { key: 1 };
  const _hoisted_22$2 = { class: "clj-learning-journal-info" };
  const _hoisted_23$2 = ["href"];
  const _hoisted_24$1 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "cljStatusGroupSet",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      const numStudents = vue.ref(canvasData2.students.length);
      vue.watch(
        () => canvasData2.updated,
        (updated) => {
          update2();
        }
      );
      vue.watch(
        () => props.groupSetId,
        (gsId) => {
          update2();
        }
      );
      function update2() {
        if (canvasData2.updated) {
          groupSet.value = canvasData2.groupSetsById[props.groupSetId];
          numStudents.value = canvasData2.students.length;
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
          vue.createElementVNode("div", _hoisted_2$a, [
            vue.createElementVNode("div", _hoisted_3$a, [
              vue.createElementVNode("h3", null, [
                vue.createTextVNode(" Group set overview "),
                vue.createElementVNode("a", {
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljStatusGroupSet.titleLearningJournalStatus.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljStatusGroupSet.titleLearningJournalStatus.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_5$7
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_4$9)
              ]),
              vue.createElementVNode("table", _hoisted_6$7, [
                vue.createElementVNode("tbody", null, [
                  vue.createElementVNode("tr", null, [
                    _hoisted_7$6,
                    vue.createElementVNode("td", _hoisted_8$6, vue.toDisplayString(groupSet.value.name), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_9$6,
                    vue.createElementVNode("td", _hoisted_10$6, vue.toDisplayString(groupSet.value.selfSignup), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_11$6,
                    vue.createElementVNode("td", _hoisted_12$6, vue.toDisplayString(groupSet.value.memberLimit), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_13$6,
                    vue.createElementVNode("td", _hoisted_14$6, vue.toDisplayString(groupSet.value.numGroups), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_15$6,
                    vue.createElementVNode("td", _hoisted_16$6, [
                      vue.createTextVNode(vue.toDisplayString(groupSet.value.numPrompts), 1),
                      _hoisted_17$6,
                      vue.createVNode(cljCreatePrompt, {
                        groupSetId: props.groupSetId
                      }, null, 8, ["groupSetId"])
                    ])
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_18$5,
                    vue.createElementVNode("td", _hoisted_19$4, [
                      groupSet.value.numStudentsWithoutGroup > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_20$4, [
                        vue.createVNode(cljCreateGroups, {
                          groupSetId: props.groupSetId,
                          numGroups: groupSet.value.numStudentsWithoutGroup
                        }, null, 8, ["groupSetId", "numGroups"])
                      ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_21$3, "0"))
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_22$2, [
              vue.createElementVNode("h3", null, [
                vue.createTextVNode("Learning Journal Status "),
                vue.createElementVNode("a", {
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljStatusGroupSet.titleLearningJournalStatus.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljStatusGroupSet.titleLearningJournalStatus.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_24$1
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_23$2)
              ]),
              vue.createVNode(_sfc_main$i, {
                groupSetId: props.groupSetId
              }, null, 8, ["groupSetId"])
            ])
          ])
        ]);
      };
    }
  });
  const cljStatusGroupSet = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-ea7c28c0"]]);
  const _withScopeId$4 = (n3) => (vue.pushScopeId("data-v-12d03b1d"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$a = {
    key: 0,
    class: "clj-status-student-groups"
  };
  const _hoisted_2$9 = ["href"];
  const _hoisted_3$9 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$8 = { class: "clj-data-table" };
  const _hoisted_5$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("th", null, null, -1));
  const _hoisted_6$6 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_7$5 = ["href"];
  const _hoisted_8$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_9$5 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_10$5 = ["href"];
  const _hoisted_11$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_12$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("tr", null, [
    /* @__PURE__ */ vue.createElementVNode("th", null, " Group name "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " <7 days "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " <7 days "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever ")
  ], -1));
  const _hoisted_13$5 = { style: { "width": "10rem" } };
  const _hoisted_14$5 = ["href"];
  const _hoisted_15$5 = { class: "clj-center" };
  const _hoisted_16$5 = { class: "clj-center" };
  const _hoisted_17$5 = { class: "clj-center" };
  const _hoisted_18$4 = { class: "clj-center" };
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "cljStatusStudentGroups",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      const promptDataLoaded = vue.ref(false);
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      const isLearningJournal = vue.ref(canvasData2.mightBeLearningJournal(props.groupSetId));
      vue.watch(
        () => props.groupSetId,
        (groupSetId2) => {
          isLearningJournal.value = canvasData2.mightBeLearningJournal(groupSetId2);
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[props.groupSetId].updated,
        (updated) => {
          promptDataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return isLearningJournal.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
          vue.createElementVNode("h3", null, [
            vue.createTextVNode("Group overview "),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.title.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.title.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$9
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_2$9)
          ]),
          vue.createElementVNode("table", _hoisted_4$8, [
            vue.createElementVNode("thead", null, [
              vue.createElementVNode("tr", null, [
                _hoisted_5$6,
                vue.createElementVNode("th", _hoisted_6$6, [
                  vue.createTextVNode("# prompts without student entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.noStudentEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.noStudentEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_8$5
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_7$5)
                ]),
                vue.createElementVNode("th", _hoisted_9$5, [
                  vue.createTextVNode("# prompts without teacher entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.noStaffEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusStudentGroups.noStaffEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_11$5
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_10$5)
                ])
              ]),
              _hoisted_12$5
            ]),
            vue.createElementVNode("tbody", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupSet.value.groups, (group) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  key: group._id
                }, [
                  vue.createElementVNode("td", _hoisted_13$5, [
                    vue.createElementVNode("a", {
                      href: `${vue.unref(canvasData2).hostName}/groups/${group._id}`,
                      target: "_blank"
                    }, vue.toDisplayString(group.name), 9, _hoisted_14$5)
                  ]),
                  vue.createElementVNode("td", _hoisted_15$5, vue.toDisplayString(group.stats.numNoStudentEntriesLast7), 1),
                  vue.createElementVNode("td", _hoisted_16$5, vue.toDisplayString(group.stats.numNoStudentEntries), 1),
                  vue.createElementVNode("td", _hoisted_17$5, vue.toDisplayString(group.stats.numNoStaffEntriesLast7), 1),
                  vue.createElementVNode("td", _hoisted_18$4, vue.toDisplayString(group.stats.numNoStaffEntries), 1)
                ]);
              }), 128))
            ])
          ])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const cljStatusStudentGroups = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-12d03b1d"]]);
  const _withScopeId$3 = (n3) => (vue.pushScopeId("data-v-79398731"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$9 = {
    key: 0,
    class: "clj-status-discussions"
  };
  const _hoisted_2$8 = ["href"];
  const _hoisted_3$8 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$7 = { class: "clj-data-table" };
  const _hoisted_5$5 = ["href"];
  const _hoisted_6$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_7$4 = ["href"];
  const _hoisted_8$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_9$4 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_10$4 = ["href"];
  const _hoisted_11$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_12$4 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_13$4 = ["href"];
  const _hoisted_14$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_15$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("tr", null, [
    /* @__PURE__ */ vue.createElementVNode("th"),
    /* @__PURE__ */ vue.createElementVNode("th"),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " <7 days "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " <7 days "),
    /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever ")
  ], -1));
  const _hoisted_16$4 = ["href"];
  const _hoisted_17$4 = { class: "clj-center" };
  const _hoisted_18$3 = { class: "clj-center" };
  const _hoisted_19$3 = { class: "clj-center" };
  const _hoisted_20$3 = { class: "clj-center" };
  const _hoisted_21$2 = { class: "clj-center" };
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljStatusDiscussions",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const promptDataLoaded = vue.ref(false);
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      const isLearningJournal = vue.ref(canvasData2.mightBeLearningJournal(props.groupSetId));
      vue.watch(
        () => props.groupSetId,
        (groupSetId2) => {
          isLearningJournal.value = canvasData2.mightBeLearningJournal(groupSetId2);
          groupSet.value = canvasData2.groupSetsById[groupSetId2];
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[props.groupSetId].updated,
        (updated) => {
          promptDataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return isLearningJournal.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
          vue.createElementVNode("h3", null, [
            vue.createTextVNode("Discussion topic overview "),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.title.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.title.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$8
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_2$8)
          ]),
          vue.createElementVNode("table", _hoisted_4$7, [
            vue.createElementVNode("thead", null, [
              vue.createElementVNode("tr", null, [
                vue.createElementVNode("th", null, [
                  vue.createTextVNode(" Topic Title "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.topicTitle.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.topicTitle.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_6$5
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_5$5)
                ]),
                vue.createElementVNode("th", null, [
                  vue.createTextVNode(" Num prompts "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numPrompts.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numPrompts.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_8$4
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_7$4)
                ]),
                vue.createElementVNode("th", _hoisted_9$4, [
                  vue.createTextVNode(" # without student entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_11$4
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_10$4)
                ]),
                vue.createElementVNode("th", _hoisted_12$4, [
                  vue.createTextVNode(" # without staff entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStaffEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStaffEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_14$4
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_13$4)
                ])
              ]),
              _hoisted_15$4
            ]),
            vue.createElementVNode("tbody", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupSet.value.discussionTopics, (topic) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  key: topic.id
                }, [
                  vue.createElementVNode("td", null, [
                    vue.createElementVNode("a", {
                      target: "_blank",
                      href: `${vue.unref(canvasData2).hostName}/courses/${vue.unref(canvasData2).id}/discussion_topics/${topic.id}`
                    }, vue.toDisplayString(topic.title), 9, _hoisted_16$4)
                  ]),
                  vue.createElementVNode("td", _hoisted_17$4, vue.toDisplayString(topic.topic_children.length), 1),
                  vue.createElementVNode("td", _hoisted_18$3, vue.toDisplayString(topic.stats.numNoStudentEntriesLast7), 1),
                  vue.createElementVNode("td", _hoisted_19$3, vue.toDisplayString(topic.stats.numNoStudentEntries), 1),
                  vue.createElementVNode("td", _hoisted_20$3, vue.toDisplayString(topic.stats.numNoStaffEntriesLast7), 1),
                  vue.createElementVNode("td", _hoisted_21$2, vue.toDisplayString(topic.stats.numNoStaffEntries), 1)
                ]);
              }), 128))
            ])
          ])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const cljStatusDiscussions = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-79398731"]]);
  const _hoisted_1$8 = { class: "clj-configure" };
  const _hoisted_2$7 = { key: 0 };
  const _hoisted_3$7 = { key: 0 };
  const _hoisted_4$6 = { key: 1 };
  const FILE_NAME$4 = "cljOverview";
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljOverview",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      {
        console.log(`${FILE_NAME$4} TOOLTIPS:`);
        console.log(TOOLTIPS);
      }
      const props = __props;
      const canvasData2 = getCanvasData();
      const groupSetId2 = vue.ref(props.groupSetId);
      const groupSet = vue.ref(canvasData2.groupSetsById[groupSetId2.value]);
      const isLearningJournal = vue.ref(canvasData2.mightBeLearningJournal(groupSetId2.value));
      const updateProgress = vue.ref(canvasData2.groupSetsById[groupSetId2.value].updateProgress);
      const promptDataLoaded = vue.ref(groupSet.value.updated > 0);
      {
        console.log(`${FILE_NAME$4} groupSetId: ${props.groupSetId}`);
      }
      vue.watch(
        () => props.groupSetId,
        (gsId) => {
          {
            console.log(`${FILE_NAME$4} groupSetId: ${gsId}`);
          }
          groupSetId2.value = gsId;
          isLearningJournal.value = canvasData2.mightBeLearningJournal(groupSetId2.value);
          promptDataLoaded.value = canvasData2.groupSetsById[groupSetId2.value].update;
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[groupSetId2.value].updateProgress,
        (progress) => {
          {
            console.log(`${FILE_NAME$4} updateProgress ${progress}`);
          }
          updateProgress.value = progress;
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[groupSetId2.value].updated,
        (updated) => {
          {
            console.log(`${FILE_NAME$4} updated ${updated} groupSetId ${groupSetId2.value}`);
            console.log(canvasData2);
          }
          promptDataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_progress_ring = vue.resolveComponent("sl-progress-ring");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createVNode(cljStatusGroupSet, { groupSetId: groupSetId2.value }, null, 8, ["groupSetId"]),
          isLearningJournal.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$7, [
            promptDataLoaded.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$7, [
              vue.createVNode(cljStatusStudentGroups, { groupSetId: groupSetId2.value }, null, 8, ["groupSetId"]),
              vue.createVNode(cljStatusDiscussions, { groupSetId: groupSetId2.value }, null, 8, ["groupSetId"])
            ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$6, [
              vue.createVNode(_component_sl_progress_ring, {
                value: `${updateProgress.value}`,
                class: "progress-ring-values",
                style: { "--track-width": "0.5rem", "--indicator-width": "1rem", "margin-bottom": ".5rem" }
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("..loading...")
                ]),
                _: 1
              }, 8, ["value"])
            ]))
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const cljOverview = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-e077a626"]]);
  var progress_ring_styles_default = i$3`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;
  var SlProgressRing = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.label = "";
    }
    updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("value")) {
        const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
        const circumference = 2 * Math.PI * radius;
        const offset2 = circumference - this.value / 100 * circumference;
        this.indicatorOffset = `${offset2}px`;
      }
    }
    render() {
      return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
    }
  };
  SlProgressRing.styles = [component_styles_default, progress_ring_styles_default];
  __decorateClass([
    e$5(".progress-ring__indicator")
  ], SlProgressRing.prototype, "indicator", 2);
  __decorateClass([
    r$2()
  ], SlProgressRing.prototype, "indicatorOffset", 2);
  __decorateClass([
    n$3({ type: Number, reflect: true })
  ], SlProgressRing.prototype, "value", 2);
  __decorateClass([
    n$3()
  ], SlProgressRing.prototype, "label", 2);
  SlProgressRing.define("sl-progress-ring");
  const _withScopeId$2 = (n3) => (vue.pushScopeId("data-v-960f421b"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$7 = { class: "clj-status-learning-journal" };
  const _hoisted_2$6 = ["href"];
  const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$5 = { class: "clj-data-table" };
  const _hoisted_5$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("th", null, null, -1));
  const _hoisted_6$4 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_7$3 = ["href"];
  const _hoisted_8$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_9$3 = {
    colspan: "2",
    class: "clj-center"
  };
  const _hoisted_10$3 = ["href"];
  const _hoisted_11$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_12$3 = { class: "clj-center" };
  const _hoisted_13$3 = ["href"];
  const _hoisted_14$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_15$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " < 7 days ", -1));
  const _hoisted_16$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever ", -1));
  const _hoisted_17$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " < 7 days ", -1));
  const _hoisted_18$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-center" }, " ever ", -1));
  const _hoisted_19$2 = { class: "clj-center" };
  const _hoisted_20$2 = { class: "clj-center" };
  const _hoisted_21$1 = { class: "clj-center" };
  const _hoisted_22$1 = { class: "clj-center" };
  const _hoisted_23$1 = { class: "clj-center" };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljOverviewParticipation",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      vue.ref(false);
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      vue.watch(
        () => props.groupSetId,
        (groupSetId2) => {
          groupSet.value = canvasData2.groupSetsById[groupSetId2];
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
          vue.createElementVNode("h3", null, [
            vue.createTextVNode("Participation overview - " + vue.toDisplayString(groupSet.value.name) + " ", 1),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljOverviewParticipation.title.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljOverviewParticipation.title.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$6
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_2$6)
          ]),
          vue.createElementVNode("table", _hoisted_4$5, [
            vue.createElementVNode("thead", null, [
              vue.createElementVNode("tr", null, [
                _hoisted_5$4,
                vue.createElementVNode("th", _hoisted_6$4, [
                  vue.createTextVNode(" # groups without student entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_8$3
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_7$3)
                ]),
                vue.createElementVNode("th", _hoisted_9$3, [
                  vue.createTextVNode(" # groups without staff entries "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numNoStudentEntries.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_11$3
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_10$3)
                ])
              ]),
              vue.createElementVNode("tr", null, [
                vue.createElementVNode("th", _hoisted_12$3, [
                  vue.createTextVNode(" Num prompts "),
                  vue.createElementVNode("a", {
                    class: "clj-th-help",
                    target: "_blank",
                    href: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numPrompts.url}`
                  }, [
                    vue.createVNode(_component_sl_tooltip, {
                      content: `${vue.unref(TOOLTIPS).cljStatusDiscussions.numPrompts.content}`
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_14$3
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 8, _hoisted_13$3)
                ]),
                _hoisted_15$3,
                _hoisted_16$3,
                _hoisted_17$3,
                _hoisted_18$2
              ])
            ]),
            vue.createElementVNode("tbody", null, [
              vue.createElementVNode("tr", null, [
                vue.createElementVNode("td", _hoisted_19$2, vue.toDisplayString(groupSet.value.numPrompts), 1),
                vue.createElementVNode("td", _hoisted_20$2, vue.toDisplayString(groupSet.value.stats.numNoStudentEntriesLast7), 1),
                vue.createElementVNode("td", _hoisted_21$1, vue.toDisplayString(groupSet.value.stats.numNoStudentEntries), 1),
                vue.createElementVNode("td", _hoisted_22$1, vue.toDisplayString(groupSet.value.stats.numNoStaffEntriesLast7), 1),
                vue.createElementVNode("td", _hoisted_23$1, vue.toDisplayString(groupSet.value.stats.numNoStaffEntries), 1)
              ])
            ])
          ])
        ]);
      };
    }
  });
  const cljOverviewParticipation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-960f421b"]]);
  const _hoisted_1$6 = { key: 0 };
  const _hoisted_2$5 = { class: "clj-thread" };
  const _hoisted_3$5 = ["innerHTML"];
  const _hoisted_4$4 = ["href"];
  const _hoisted_5$3 = ["innerHTML"];
  const _hoisted_6$3 = { key: 1 };
  const FILE_NAME$3 = "cljTopicEntries";
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljTopicEntries",
    props: {
      topicId: {},
      groupId: {}
    },
    setup(__props) {
      {
        console.log(`${FILE_NAME$3} TOOLTIPS:`);
        console.log(TOOLTIPS);
      }
      const props = __props;
      const tId = vue.ref(props.topicId);
      const gId = vue.ref(props.groupId);
      const canvasData2 = getCanvasData();
      const entries = vue.ref(canvasData2.promptsByTopicId[tId.value].view);
      function generateEntryReplies(entry) {
        let replyHTML = "";
        if (!entry.hasOwnProperty("replies")) {
          return "";
        }
        for (const reply of entry.replies) {
          let replyReplies = "";
          if (reply.hasOwnProperty("replies") && reply.replies.length > 0) {
            replyReplies = generateEntryReplies(reply);
          }
          const author = userNameAndLink(reply.user_id);
          const created = formatDate(reply.created_at);
          replyHTML += `<li>${author} at ${created} ${replyReplies}</li>`;
        }
        return `<ul>${replyHTML}</ul>`;
      }
      function userNameAndLink(userId) {
        const user = canvasData2.getUserDetails(userId);
        if (user) {
          return `<a target="_blank" href="${user.htmlUrl}">${user.name}</a>`;
        }
        return "Unknown user";
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          entries.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
            vue.createElementVNode("ul", _hoisted_2$5, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(entries.value, (entry) => {
                return vue.openBlock(), vue.createElementBlock("li", {
                  key: entry.id
                }, [
                  vue.createElementVNode("span", {
                    class: "clj-user-name",
                    innerHTML: userNameAndLink(entry.user_id)
                  }, null, 8, _hoisted_3$5),
                  vue.createTextVNode(" at "),
                  vue.createElementVNode("a", {
                    target: "_blank",
                    href: `${vue.unref(canvasData2).hostName}/groups/${gId.value}/discussion_topics/${tId.value}?entry_id=${entry.id}#entry-${entry.id}`
                  }, vue.toDisplayString(vue.unref(formatDate)(entry.created_at)), 9, _hoisted_4$4),
                  vue.createElementVNode("span", {
                    class: "clj-replies",
                    innerHTML: generateEntryReplies(entry)
                  }, null, 8, _hoisted_5$3)
                ]);
              }), 128))
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, " n/a "))
        ]);
      };
    }
  });
  const _withScopeId$1 = (n3) => (vue.pushScopeId("data-v-7f0f9b70"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$5 = { class: "clj-prompt-participation-details" };
  const _hoisted_2$4 = ["href"];
  const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_4$3 = { class: "clj-group-name" };
  const _hoisted_5$2 = { class: "clj-student-forum" };
  const _hoisted_6$2 = { class: "clj-student-avatar" };
  const _hoisted_7$2 = ["href"];
  const _hoisted_8$2 = ["src"];
  const _hoisted_9$2 = ["href"];
  const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_11$2 = { key: 0 };
  const _hoisted_12$2 = ["href"];
  const _hoisted_13$2 = { key: 1 };
  const _hoisted_14$2 = ["href"];
  const _hoisted_15$2 = { class: "clj-entries" };
  const _hoisted_16$2 = { key: 0 };
  const _hoisted_17$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, "No entries yet", -1));
  const _hoisted_18$1 = [
    _hoisted_17$2
  ];
  const _hoisted_19$1 = { key: 1 };
  const _hoisted_20$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createElementVNode("strong", null, "Topic entries")
  ], -1));
  const FILE_NAME$2 = "cljPromptParticipationDetails";
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljPromptParticipationDetails",
    props: {
      groupSetId: {},
      topicId: {}
    },
    setup(__props) {
      {
        console.log(`${FILE_NAME$2} TOOLTIPS:`);
        console.log(TOOLTIPS);
      }
      const props = __props;
      {
        console.log(`${FILE_NAME$2} groupSetId: ${props.groupSetId} topicId: ${props.topicId}`);
      }
      let headers;
      let items;
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[`${props.groupSetId}`]);
      const topicObject = vue.ref(groupSet.value.discussionTopicsById[props.topicId]);
      const promptDataLoaded = vue.ref(canvasData2.groupSetsById[`${props.groupSetId}`].updated);
      updateParticipationTable();
      function getPromptStat(groupId) {
        if (topicObject.value.hasOwnProperty("promptsByGroupId")) {
          return topicObject.value.promptsByGroupId[groupId];
        }
        return {};
      }
      function hasAvatarUrl(user2) {
        return user2.hasOwnProperty("avatarUrl") && user2.avatarUrl !== null;
      }
      function daysSinceLastStudentEntry(groupId) {
        let lastStudentEntry = getPromptStat(groupId).stats.lastStudentEntry;
        if (lastStudentEntry === null) {
          return "";
        }
        let lastDate = dayjs(lastStudentEntry);
        if (lastDate.isValid()) {
          let now = dayjs();
          return `${now.diff(lastDate, "day")}`;
        }
        return "";
      }
      function isUnansweredStudentEntry(groupId) {
        let lastStudentEntry = getPromptStat(groupId).stats.lastStudentEntry;
        let lastStaffEntry = getPromptStat(groupId).stats.lastStaffEntry;
        if (lastStudentEntry !== null && lastStaffEntry !== null) {
          let studentDate = dayjs(lastStudentEntry);
          let staffDate = dayjs(lastStaffEntry);
          if (studentDate.isValid() && staffDate.isValid()) {
            if (staffDate.isBefore(studentDate)) {
              return "Y";
            }
          }
        }
        if (lastStudentEntry !== null && lastStaffEntry === null) {
          return "Y";
        }
        return "N";
      }
      vue.watch(
        () => [props.groupSetId, props.topicId],
        (groupSetId2, topicId) => {
          {
            console.log(`${FILE_NAME$2} groupSetId: ${groupSetId2}`);
          }
          groupSet.value = canvasData2.groupSetsById[`${groupSetId2}`];
          topicObject.value = groupSet.value.discussionTopicsById[`${topicId}`];
          updateParticipationTable();
        }
      );
      vue.watch(
        //() => canvasData.groupSetsById[props.groupSetId].updated,
        () => canvasData2.groupSetsById[groupSet.value._id].updated,
        (updated) => {
          {
            console.log(`groupset updated ${updated}`);
            console.log(canvasData2);
          }
          promptDataLoaded.value = true;
          updateParticipationTable();
        }
      );
      function updateParticipationTable() {
        headers = [
          { text: "Group", value: "groupName" },
          { text: "# students", value: "numStudents", sortable: true },
          { text: "# student entries", value: "numStudentEntries", sortable: true },
          { text: "# staff entries", value: "numStaffEntries", sortable: true },
          { text: "days since last student entry", value: "daysSinceLastStudentEntry", sortable: true },
          { text: "Unanswered student entry", value: "unansweredStudenEntry", sortable: true }
        ];
        items = [];
        if (promptDataLoaded.value) {
          for (const group of groupSet.value.groups) {
            `${group.name} <p>some <strong>random</strong> html</p>`;
            const groupItem = {
              //groupName: groupName,
              group: groupSet.value.groupsById[group._id],
              groupId: group._id,
              numStudents: group.membersCount,
              numStudentEntries: getPromptStat(group._id).stats.numStudentEntries,
              numStaffEntries: getPromptStat(group._id).stats.numStaffEntries,
              daysSinceLastStudentEntry: daysSinceLastStudentEntry(group._id),
              unansweredStudentEntry: isUnansweredStudentEntry(group._id),
              noEntries: false
            };
            groupItem.noEntries = groupItem.numStudentEntries + groupItem.numStaffEntries === 0;
            items.push(groupItem);
          }
        }
      }
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        const _component_EasyDataTable = vue.resolveComponent("EasyDataTable");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("h5", null, [
            vue.createTextVNode("Participation by group "),
            vue.createElementVNode("a", {
              class: "clj-th-help",
              target: "_blank",
              href: `${vue.unref(TOOLTIPS).cljPromptParticipationDetails.participationByGroup.url}`
            }, [
              vue.createVNode(_component_sl_tooltip, {
                content: `${vue.unref(TOOLTIPS).cljPromptParticipationDetails.participationByGroup.content}`
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$4
                ]),
                _: 1
              }, 8, ["content"])
            ], 8, _hoisted_2$4)
          ]),
          vue.createVNode(_component_EasyDataTable, {
            headers: vue.unref(headers),
            items: vue.unref(items),
            alternating: "",
            "border-cell": ""
          }, {
            "item-groupName": vue.withCtx((item) => [
              vue.createElementVNode("div", _hoisted_4$3, "Group: " + vue.toDisplayString(item.group.name), 1),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.group.members, (member) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "clj-student",
                  key: member.user._id
                }, [
                  vue.createElementVNode("div", _hoisted_5$2, [
                    vue.createElementVNode("div", _hoisted_6$2, [
                      vue.createElementVNode("a", {
                        href: `${member.user.htmlUrl}`,
                        target: "_blank"
                      }, [
                        hasAvatarUrl(member.user) ? (vue.openBlock(), vue.createElementBlock("img", {
                          key: 0,
                          src: `${member.user.avatarUrl}`,
                          alt: "Avatar for ${member.user.shortName}",
                          style: { "width": "64px", "height": "64px" }
                        }, null, 8, _hoisted_8$2)) : vue.createCommentVNode("", true)
                      ], 8, _hoisted_7$2)
                    ]),
                    vue.createElementVNode("a", {
                      href: `${member.user.htmlUrl}`,
                      target: "_blank"
                    }, vue.toDisplayString(member.user.shortName), 9, _hoisted_9$2),
                    _hoisted_10$2,
                    topicObject.value.assignment_id !== null ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11$2, [
                      vue.createElementVNode("a", {
                        href: `${vue.unref(canvasData2).hostName}/courses/${vue.unref(canvasData2).id}/gradebook/speed_grader?assignment_id=${topicObject.value.assignment.id}&student_id=${member.user._id}`,
                        target: "_blank"
                      }, " SpeedGrader ", 8, _hoisted_12$2)
                    ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_13$2, "No assignment")),
                    vue.createTextVNode(" | "),
                    vue.createElementVNode("a", {
                      href: `${vue.unref(canvasData2).hostName}/groups/${item.groupId}/discussion_topics/${topicObject.value.promptsByGroupId[item.groupId].id}`,
                      target: "_blank"
                    }, " Forum ", 8, _hoisted_14$2)
                  ])
                ]);
              }), 128))
            ]),
            expand: vue.withCtx((item) => [
              vue.createElementVNode("div", _hoisted_15$2, [
                item.noEntries ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16$2, _hoisted_18$1)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_19$1, [
                  _hoisted_20$1,
                  vue.createVNode(_sfc_main$6, {
                    topicId: topicObject.value.promptsByGroupId[item.groupId].id,
                    groupId: item.groupId
                  }, null, 8, ["topicId", "groupId"])
                ]))
              ])
            ]),
            _: 1
          }, 8, ["headers", "items"])
        ]);
      };
    }
  });
  const cljPromptParticipationDetails = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7f0f9b70"]]);
  const _withScopeId = (n3) => (vue.pushScopeId("data-v-8d865138"), n3 = n3(), vue.popScopeId(), n3);
  const _hoisted_1$4 = { class: "clj-participation-summary" };
  const _hoisted_2$3 = ["href"];
  const _hoisted_3$3 = { class: "clj-row" };
  const _hoisted_4$2 = { class: "clj-col" };
  const _hoisted_5$1 = ["href"];
  const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_7$1 = { class: "clj-data-table" };
  const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Topic title ", -1));
  const _hoisted_9$1 = { class: "clj-center" };
  const _hoisted_10$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, [
    /* @__PURE__ */ vue.createTextVNode(" # 0 student entries "),
    /* @__PURE__ */ vue.createElementVNode("br"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "clj-span-right" }, [
      /* @__PURE__ */ vue.createTextVNode(" < 7 days"),
      /* @__PURE__ */ vue.createElementVNode("br"),
      /* @__PURE__ */ vue.createTextVNode(" ever ")
    ])
  ], -1));
  const _hoisted_11$1 = { class: "clj-right" };
  const _hoisted_12$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_13$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_14$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Total # student entries ", -1));
  const _hoisted_15$1 = { class: "clj-right" };
  const _hoisted_16$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, [
    /* @__PURE__ */ vue.createTextVNode(" # 0 staff entries "),
    /* @__PURE__ */ vue.createElementVNode("br"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "clj-span-right" }, [
      /* @__PURE__ */ vue.createTextVNode(" < 7 days"),
      /* @__PURE__ */ vue.createElementVNode("br"),
      /* @__PURE__ */ vue.createTextVNode(" ever ")
    ])
  ], -1));
  const _hoisted_17$1 = { class: "clj-right" };
  const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Total # staff entries ", -1));
  const _hoisted_21 = { class: "clj-right" };
  const _hoisted_22 = { class: "clj-col" };
  const _hoisted_23 = ["href"];
  const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question clj-small-tooltip" }, null, -1));
  const _hoisted_25 = { class: "clj-data-table clj-fixed" };
  const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "clj-half" }, " Assessable? ", -1));
  const _hoisted_27 = { class: "clj-center clj-half" };
  const _hoisted_28 = { key: 0 };
  const _hoisted_29 = { key: 1 };
  const _hoisted_30 = { key: 0 };
  const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Points possible ", -1));
  const _hoisted_32 = { class: "clj-center" };
  const _hoisted_33 = { key: 1 };
  const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Due date ", -1));
  const _hoisted_35 = { class: "clj-center" };
  const _hoisted_36 = { key: 2 };
  const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("th", null, " Needs grading ", -1));
  const _hoisted_38 = { class: "clj-center" };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljPromptParticipationSummary",
    props: {
      groupSetId: {},
      topicId: {}
    },
    setup(__props) {
      const props = __props;
      const promptDataLoaded = vue.ref(false);
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      const topic = vue.ref(canvasData2.groupSetsById[props.groupSetId].discussionTopicsById[props.topicId]);
      const assignmentExists = vue.ref(topic.value.assignment !== void 0);
      vue.watch(
        () => [props.groupSetId, props.topicId],
        (groupSetId2, topicId) => {
          groupSet.value = canvasData2.groupSetsById[`${groupSetId2}`];
          topic.value = groupSet.value.discussionTopicsById[`${topicId}`];
          assignmentExists.value = topic.value.assignment !== void 0;
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[props.groupSetId].updated,
        (updated) => {
          promptDataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          vue.createElementVNode("h4", null, [
            vue.createTextVNode("Topic: "),
            vue.createElementVNode("a", {
              href: `${topic.value.html_url}`,
              target: "_blank"
            }, vue.toDisplayString(topic.value.title), 9, _hoisted_2$3)
          ]),
          vue.createElementVNode("div", _hoisted_3$3, [
            vue.createElementVNode("div", _hoisted_4$2, [
              vue.createElementVNode("h5", null, [
                vue.createTextVNode("Topic overview "),
                vue.createElementVNode("a", {
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljPromptParticipationSummary.topicOverview.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljPromptParticipationSummary.topicOverview.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_6$1
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_5$1)
              ]),
              vue.createElementVNode("table", _hoisted_7$1, [
                vue.createElementVNode("tbody", null, [
                  vue.createElementVNode("tr", null, [
                    _hoisted_8$1,
                    vue.createElementVNode("td", _hoisted_9$1, vue.toDisplayString(groupSet.value.name), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_10$1,
                    vue.createElementVNode("td", _hoisted_11$1, [
                      vue.createTextVNode("  "),
                      _hoisted_12$1,
                      vue.createTextVNode(" " + vue.toDisplayString(topic.value.stats.numNoStudentEntriesLast7), 1),
                      _hoisted_13$1,
                      vue.createTextVNode(" " + vue.toDisplayString(topic.value.stats.numNoStudentEntries), 1)
                    ])
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_14$1,
                    vue.createElementVNode("td", _hoisted_15$1, vue.toDisplayString(topic.value.stats.numStudentEntries), 1)
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_16$1,
                    vue.createElementVNode("td", _hoisted_17$1, [
                      vue.createTextVNode("  "),
                      _hoisted_18,
                      vue.createTextVNode(" " + vue.toDisplayString(topic.value.stats.numNoStaffEntriesLast7), 1),
                      _hoisted_19,
                      vue.createTextVNode(" " + vue.toDisplayString(topic.value.stats.numNoStaffEntries), 1)
                    ])
                  ]),
                  vue.createElementVNode("tr", null, [
                    _hoisted_20,
                    vue.createElementVNode("td", _hoisted_21, vue.toDisplayString(topic.value.stats.numStaffEntries), 1)
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_22, [
              vue.createElementVNode("h5", null, [
                vue.createTextVNode("Assignment overview "),
                vue.createElementVNode("a", {
                  target: "_blank",
                  href: `${vue.unref(TOOLTIPS).cljPromptParticipationSummary.assignmentOverview.url}`
                }, [
                  vue.createVNode(_component_sl_tooltip, {
                    content: `${vue.unref(TOOLTIPS).cljPromptParticipationSummary.assignmentOverview.content}`
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_24
                    ]),
                    _: 1
                  }, 8, ["content"])
                ], 8, _hoisted_23)
              ]),
              vue.createElementVNode("table", _hoisted_25, [
                vue.createElementVNode("tbody", null, [
                  vue.createElementVNode("tr", null, [
                    _hoisted_26,
                    vue.createElementVNode("td", _hoisted_27, [
                      assignmentExists.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_28, "Yes ")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_29, "No"))
                    ])
                  ]),
                  assignmentExists.value ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_30, [
                    _hoisted_31,
                    vue.createElementVNode("td", _hoisted_32, vue.toDisplayString(topic.value.assignment.points_possible), 1)
                  ])) : vue.createCommentVNode("", true),
                  assignmentExists.value ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_33, [
                    _hoisted_34,
                    vue.createElementVNode("td", _hoisted_35, vue.toDisplayString(vue.unref(formatDate)(topic.value.assignment.due_at, "n/a")), 1)
                  ])) : vue.createCommentVNode("", true),
                  assignmentExists.value ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_36, [
                    _hoisted_37,
                    vue.createElementVNode("td", _hoisted_38, vue.toDisplayString(topic.value.assignment.needs_grading_count), 1)
                  ])) : vue.createCommentVNode("", true)
                ])
              ])
            ])
          ])
        ]);
      };
    }
  });
  const cljPromptParticipationSummary = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8d865138"]]);
  const _hoisted_1$3 = { class: "clj-status-prompts" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljPromptsParticipation",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      vue.watch(
        () => props.groupSetId,
        (groupSetId2) => {
          groupSet.value = canvasData2.groupSetsById[groupSetId2];
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tab = vue.resolveComponent("sl-tab");
        const _component_sl_tab_panel = vue.resolveComponent("sl-tab-panel");
        const _component_sl_tab_group = vue.resolveComponent("sl-tab-group");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
          vue.createElementVNode("h3", null, "Prompts participation - " + vue.toDisplayString(groupSet.value.name), 1),
          vue.createElementVNode("p", null, "Each of the tabs below provides a summary of student and staff participation in each of the " + vue.toDisplayString(groupSet.value.numPrompts) + " prompts for this learning journal.", 1),
          vue.createVNode(_component_sl_tab_group, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupSet.value.discussionTopics, (topic) => {
                return vue.openBlock(), vue.createBlock(_component_sl_tab, {
                  key: "topic.id",
                  slot: "nav",
                  panel: `${topic.title}`
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(topic.title), 1)
                  ]),
                  _: 2
                }, 1032, ["panel"]);
              }), 128)),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupSet.value.discussionTopics, (topic) => {
                return vue.openBlock(), vue.createBlock(_component_sl_tab_panel, {
                  key: "topic.id",
                  name: `${topic.title}`
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(cljPromptParticipationSummary, {
                      groupSetId: groupSet.value._id,
                      topicId: topic.id
                    }, null, 8, ["groupSetId", "topicId"]),
                    vue.createVNode(cljPromptParticipationDetails, {
                      groupSetId: groupSet.value._id,
                      topicId: topic.id
                    }, null, 8, ["groupSetId", "topicId"])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 128))
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const cljPromptsParticipation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bb8e150e"]]);
  const _hoisted_1$2 = { class: "clj-orchestrate" };
  const _hoisted_2$2 = { key: 0 };
  const _hoisted_3$2 = { key: 1 };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljParticipation",
    props: {
      groupSetId: {}
    },
    setup(__props) {
      const props = __props;
      const canvasData2 = getCanvasData();
      const groupSet = vue.ref(canvasData2.groupSetsById[props.groupSetId]);
      const promptDataLoaded = vue.ref(groupSet.value.updated > 0);
      const isLearningJournal = vue.ref(canvasData2.mightBeLearningJournal(props.groupSetId));
      const updateProgress = vue.ref(canvasData2.groupSetsById[props.groupSetId].updateProgress);
      vue.watch(
        () => props.groupSetId,
        (groupSetId2) => {
          isLearningJournal.value = canvasData2.mightBeLearningJournal(groupSetId2);
          groupSet.value = canvasData2.groupSetsById[groupSetId2];
          promptDataLoaded.value = groupSet.value.updated > 0;
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[props.groupSetId].updateProgress,
        (progress) => {
          updateProgress.value = progress;
        }
      );
      vue.watch(
        () => canvasData2.groupSetsById[props.groupSetId].updated,
        (updated) => {
          promptDataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_progress_ring = vue.resolveComponent("sl-progress-ring");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          promptDataLoaded.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$2, [
            vue.createVNode(cljOverviewParticipation, {
              groupSetId: groupSet.value._id
            }, null, 8, ["groupSetId"]),
            vue.createVNode(cljPromptsParticipation, {
              groupSetId: groupSet.value._id
            }, null, 8, ["groupSetId"])
          ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$2, [
            vue.createVNode(_component_sl_progress_ring, {
              value: `${updateProgress.value}`,
              class: "progress-ring-values",
              style: { "--track-width": "0.5rem", "--indicator-width": "1rem", "margin-bottom": ".5rem" }
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("..loading...")
              ]),
              _: 1
            }, 8, ["value"])
          ]))
        ]);
      };
    }
  });
  const cljParticipation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3e33ef53"]]);
  const _hoisted_1$1 = { key: 0 };
  const _hoisted_2$1 = {
    class: "clj-status",
    id: "clj-gs-button"
  };
  const _hoisted_3$1 = ["href"];
  const _hoisted_4$1 = { slot: "content" };
  const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const _hoisted_6 = { key: 1 };
  const _hoisted_7 = {
    class: "clj-status",
    id: "clj-gs-button"
  };
  const _hoisted_8 = ["href"];
  const _hoisted_9 = { slot: "content" };
  const _hoisted_10 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const _hoisted_11 = {
    class: "clj-detail",
    id: "clj-gs-detail"
  };
  const _hoisted_12 = ["href"];
  const _hoisted_13 = { slot: "content" };
  const _hoisted_14 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const _hoisted_15 = ["href"];
  const _hoisted_16 = { slot: "content" };
  const _hoisted_17 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-question" }, null, -1);
  const FILE_NAME$1 = "cljGroupSet";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "cljGroupSet",
    setup(__props) {
      let activeGroup = getActiveGroupSet();
      if (activeGroup === null) {
        console.error(`${FILE_NAME$1}: activeGroup is null couldn't determine groupSetId`);
        throw new Error(`${FILE_NAME$1}: activeGroup is null couldn't determine groupSetId`);
      }
      const groupSetId2 = vue.ref(activeGroup);
      addEventHandlers();
      const canvasData2 = getCanvasData();
      const isLearningJournal = vue.ref(canvasData2.mightBeLearningJournal(groupSetId2.value));
      const urlParams = new URLSearchParams(window.location.search);
      const open = urlParams.get("open");
      const configOpen = vue.ref(open !== null);
      function addEventHandlers() {
        const groupCategoryTabs = document.querySelectorAll("a.group-category-tab-link");
        groupCategoryTabs.forEach((tab) => {
          tab.addEventListener("click", (event) => {
            const href = event.target.getAttribute("href");
            const number = href.split("-")[1];
            groupSetId2.value = number;
            isLearningJournal.value = canvasData2.mightBeLearningJournal(number);
            const groupCatTab = document.querySelector("div#group_categories_tabs");
            const clj = document.querySelector("div#clj");
            if (groupCatTab && clj) {
              let activeTab = groupCatTab.querySelector("div.ui-tabs-panel[aria-expanded=true]");
              if (activeTab) {
                activeTab.prepend(clj);
              }
            }
          });
        });
      }
      function getActiveGroupSet() {
        const activeGroupSet = document.querySelector("div#group_categories_tabs > ul.collectionViewItems > li.ui-tabs-active");
        if (activeGroupSet) {
          const value = activeGroupSet.getAttribute("aria-controls");
          if (value) {
            const number = value.split("-")[1];
            return `${number}`;
          }
        }
        throw new Error(`${FILE_NAME$1}: getActiveGroupSet - activeGroupSet is null`);
      }
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        const _component_sl_tab = vue.resolveComponent("sl-tab");
        const _component_sl_tab_panel = vue.resolveComponent("sl-tab-panel");
        const _component_sl_tab_group = vue.resolveComponent("sl-tab-group");
        return !configOpen.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("i", {
              onClick: _cache[0] || (_cache[0] = ($event) => configOpen.value = !configOpen.value),
              id: "clj-gs-config-switch",
              class: "icon-Solid icon-mini-arrow-end"
            }),
            vue.createTextVNode(" Canvas Learning Journal "),
            vue.createElementVNode("a", {
              target: "_blank",
              href: vue.unref(TOOLTIPS).cljGroupSet.for_more.url
            }, [
              vue.createVNode(_component_sl_tooltip, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_4$1, vue.toDisplayString(vue.unref(TOOLTIPS).cljGroupSet.for_more.content), 1),
                  _hoisted_5
                ]),
                _: 1
              })
            ], 8, _hoisted_3$1)
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
          vue.createElementVNode("div", _hoisted_7, [
            vue.createElementVNode("i", {
              onClick: _cache[1] || (_cache[1] = ($event) => configOpen.value = !configOpen.value),
              id: "clj-gs-config-switch",
              class: "icon-Solid icon-mini-arrow-end"
            }),
            vue.createTextVNode(" Canvas (groupset " + vue.toDisplayString(groupSetId2.value) + ")Learning Journal ", 1),
            vue.createElementVNode("a", {
              target: "_blank",
              href: vue.unref(TOOLTIPS).cljGroupSet.for_more.url
            }, [
              vue.createVNode(_component_sl_tooltip, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_9, vue.toDisplayString(vue.unref(TOOLTIPS).cljGroupSet.for_more.content), 1),
                  _hoisted_10
                ]),
                _: 1
              })
            ], 8, _hoisted_8)
          ]),
          vue.createElementVNode("div", _hoisted_11, [
            vue.createVNode(_component_sl_tab_group, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_sl_tab, {
                  slot: "nav",
                  panel: "clj-configure"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Overview "),
                    vue.createElementVNode("a", {
                      target: "_blank",
                      href: vue.unref(TOOLTIPS).cljGroupSet.configure.url
                    }, [
                      vue.createVNode(_component_sl_tooltip, { hoist: "" }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("div", _hoisted_13, vue.toDisplayString(vue.unref(TOOLTIPS).cljGroupSet.configure.content), 1),
                          vue.createTextVNode("  "),
                          _hoisted_14
                        ]),
                        _: 1
                      })
                    ], 8, _hoisted_12)
                  ]),
                  _: 1
                }),
                isLearningJournal.value ? (vue.openBlock(), vue.createBlock(_component_sl_tab, {
                  key: 0,
                  slot: "nav",
                  panel: "clj-orchestrate"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Participation "),
                    vue.createElementVNode("a", {
                      target: "_blank",
                      href: vue.unref(TOOLTIPS).cljGroupSet.orchestrate.url
                    }, [
                      vue.createVNode(_component_sl_tooltip, {
                        placement: "right-start",
                        hoist: ""
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("div", _hoisted_16, vue.toDisplayString(vue.unref(TOOLTIPS).cljGroupSet.orchestrate.content), 1),
                          vue.createTextVNode("  "),
                          _hoisted_17
                        ]),
                        _: 1
                      })
                    ], 8, _hoisted_15)
                  ]),
                  _: 1
                })) : vue.createCommentVNode("", true),
                vue.createVNode(_component_sl_tab_panel, { name: "clj-configure" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(cljOverview, { groupSetId: groupSetId2.value }, null, 8, ["groupSetId"])
                  ]),
                  _: 1
                }),
                isLearningJournal.value ? (vue.openBlock(), vue.createBlock(_component_sl_tab_panel, {
                  key: 1,
                  name: "clj-orchestrate"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(cljParticipation, { groupSetId: groupSetId2.value }, null, 8, ["groupSetId"])
                  ]),
                  _: 1
                })) : vue.createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ]));
      };
    }
  });
  var badge_styles_default = i$3`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
  var SlBadge = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.variant = "primary";
      this.pill = false;
      this.pulse = false;
    }
    render() {
      return x`
      <span
        part="base"
        class=${e$3({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
    }
  };
  SlBadge.styles = [component_styles_default, badge_styles_default];
  __decorateClass([
    n$3({ reflect: true })
  ], SlBadge.prototype, "variant", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pill", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pulse", 2);
  SlBadge.define("sl-badge");
  var spinner_styles_default = i$3`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;
  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = [component_styles_default, spinner_styles_default];
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      this.handleFormData = (event) => {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        const isButton = this.host.tagName.toLowerCase() === "sl-button";
        if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              event.formData.append(name, val.toString());
            });
          } else {
            event.formData.append(name, value.toString());
          }
        }
      };
      this.handleFormSubmit = (event) => {
        var _a2;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
          (_a2 = formCollections.get(this.form)) == null ? void 0 : _a2.forEach((control) => {
            this.setUserInteracted(control, true);
          });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleFormReset = () => {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
        interactions.set(this.host, []);
      };
      this.handleInteraction = (event) => {
        const emittedEvents = interactions.get(this.host);
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.options.assumeInteractionOn.length) {
          this.setUserInteracted(this.host, true);
        }
      };
      this.checkFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.checkValidity === "function") {
              if (!element.checkValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      this.reportFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.reportValidity === "function") {
              if (!element.reportValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          const formId = input.form;
          if (formId) {
            const root = input.getRootNode();
            const form = root.querySelector(`#${formId}`);
            if (form) {
              return form;
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a2;
          return (_a2 = input.disabled) != null ? _a2 : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
        if (!checkValidityOverloads.has(this.form)) {
          checkValidityOverloads.set(this.form, this.form.checkValidity);
          this.form.checkValidity = () => this.checkFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      if (!this.form)
        return;
      const formCollection = formCollections.get(this.form);
      if (!formCollection) {
        return;
      }
      formCollection.delete(this.host);
      if (formCollection.size <= 0) {
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
        if (checkValidityOverloads.has(this.form)) {
          this.form.checkValidity = checkValidityOverloads.get(this.form);
          checkValidityOverloads.delete(this.form);
        }
        this.form = void 0;
      }
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a2;
      return (_a2 = this.form) != null ? _a2 : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid);
      host.toggleAttribute("data-valid", isValid);
      host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));
  var button_styles_default = i$3`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`;
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }
  var SlButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["click"]
      });
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.invalid = false;
      this.title = "";
      this.variant = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.outline = false;
      this.pill = false;
      this.circle = false;
      this.type = "button";
      this.name = "";
      this.value = "";
      this.href = "";
      this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */
    get validity() {
      if (this.isButton()) {
        return this.button.validity;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      if (this.isButton()) {
        return this.button.validationMessage;
      }
      return "";
    }
    firstUpdated() {
      if (this.isButton()) {
        this.formControlController.updateValidity();
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick() {
      if (this.type === "submit") {
        this.formControlController.submit(this);
      }
      if (this.type === "reset") {
        this.formControlController.reset(this);
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      if (this.isButton()) {
        this.formControlController.setValidity(this.disabled);
      }
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      if (this.isButton()) {
        return this.button.checkValidity();
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (this.isButton()) {
        return this.button.reportValidity();
      }
      return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      if (this.isButton()) {
        this.button.setCustomValidity(message);
        this.formControlController.updateValidity();
      }
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? s$1`a` : s$1`button`;
      return n$2`
      <${tag}
        part="base"
        class=${e$3({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o$2(isLink ? void 0 : this.name)}
        value=${o$2(isLink ? void 0 : this.value)}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink ? this.rel : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n$2` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n$2`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  SlButton.styles = [component_styles_default, button_styles_default];
  SlButton.dependencies = {
    "sl-icon": SlIcon,
    "sl-spinner": SlSpinner
  };
  __decorateClass([
    e$5(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass([
    r$2()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass([
    r$2()
  ], SlButton.prototype, "invalid", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "title", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlButton.prototype, "variant", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "outline", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "type", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "name", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "value", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "href", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "target", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "rel", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "download", 2);
  __decorateClass([
    n$3()
  ], SlButton.prototype, "form", 2);
  __decorateClass([
    n$3({ attribute: "formaction" })
  ], SlButton.prototype, "formAction", 2);
  __decorateClass([
    n$3({ attribute: "formenctype" })
  ], SlButton.prototype, "formEnctype", 2);
  __decorateClass([
    n$3({ attribute: "formmethod" })
  ], SlButton.prototype, "formMethod", 2);
  __decorateClass([
    n$3({ attribute: "formnovalidate", type: Boolean })
  ], SlButton.prototype, "formNoValidate", 2);
  __decorateClass([
    n$3({ attribute: "formtarget" })
  ], SlButton.prototype, "formTarget", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlButton.prototype, "handleDisabledChange", 1);
  SlButton.define("sl-button");
  var input_styles_default = i$3`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;
  var defaultValue = (propertyName = "value") => (proto, key) => {
    const ctor = proto.constructor;
    const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
    ctor.prototype.attributeChangedCallback = function(name, old, value) {
      var _a2;
      const options = ctor.getPropertyOptions(propertyName);
      const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
      if (name === attributeName) {
        const converter = options.converter || u$2;
        const fromAttribute = typeof converter === "function" ? converter : (_a2 = converter == null ? void 0 : converter.fromAttribute) != null ? _a2 : u$2.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name, old, value);
    };
  };
  var form_control_styles_default = i$3`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const l = e$4(class extends i {
    constructor(r2) {
      if (super(r2), r2.type !== t$1.PROPERTY && r2.type !== t$1.ATTRIBUTE && r2.type !== t$1.BOOLEAN_ATTRIBUTE)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!f$1(r2))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(r2) {
      return r2;
    }
    update(i2, [t2]) {
      if (t2 === w || t2 === T)
        return t2;
      const o2 = i2.element, l2 = i2.name;
      if (i2.type === t$1.PROPERTY) {
        if (t2 === o2[l2])
          return w;
      } else if (i2.type === t$1.BOOLEAN_ATTRIBUTE) {
        if (!!t2 === o2.hasAttribute(l2))
          return w;
      } else if (i2.type === t$1.ATTRIBUTE && o2.getAttribute(l2) === t2 + "")
        return w;
      return m(i2), t2;
    }
  });
  var SlInput = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.title = "";
      this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
      this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
      this.type = "text";
      this.name = "";
      this.value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.helpText = "";
      this.clearable = false;
      this.disabled = false;
      this.placeholder = "";
      this.readonly = false;
      this.passwordToggle = false;
      this.passwordVisible = false;
      this.noSpinButtons = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
    }
    //
    // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
    // can be set before the component is rendered.
    //
    /**
     * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
     */
    get valueAsDate() {
      var _a2;
      this.__dateInput.type = this.type;
      this.__dateInput.value = this.value;
      return ((_a2 = this.input) == null ? void 0 : _a2.valueAsDate) || this.__dateInput.valueAsDate;
    }
    set valueAsDate(newValue) {
      this.__dateInput.type = this.type;
      this.__dateInput.valueAsDate = newValue;
      this.value = this.__dateInput.value;
    }
    /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
    get valueAsNumber() {
      var _a2;
      this.__numberInput.value = this.value;
      return ((_a2 = this.input) == null ? void 0 : _a2.valueAsNumber) || this.__numberInput.valueAsNumber;
    }
    set valueAsNumber(newValue) {
      this.__numberInput.valueAsNumber = newValue;
      this.value = this.__numberInput.value;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.emit("sl-change");
    }
    handleClearClick(event) {
      event.preventDefault();
      if (this.value !== "") {
        this.value = "";
        this.emit("sl-clear");
        this.emit("sl-input");
        this.emit("sl-change");
      }
      this.input.focus();
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.formControlController.updateValidity();
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleKeyDown(event) {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier) {
        setTimeout(() => {
          if (!event.defaultPrevented && !event.isComposing) {
            this.formControlController.submit();
          }
        });
      }
    }
    handlePasswordToggle() {
      this.passwordVisible = !this.passwordVisible;
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStepChange() {
      this.input.step = String(this.step);
      this.formControlController.updateValidity();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
    }
    /** Sets focus on the input. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the input. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
      this.input.select();
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode = "preserve") {
      const selectionStart = start != null ? start : this.input.selectionStart;
      const selectionEnd = end != null ? end : this.input.selectionEnd;
      this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    showPicker() {
      if ("showPicker" in HTMLInputElement.prototype) {
        this.input.showPicker();
      }
    }
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp() {
      this.input.stepUp();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown() {
      this.input.stepDown();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && !this.readonly;
      const isClearIconVisible = hasClearIcon && (typeof this.value === "number" || this.value.length > 0);
      return x`
      <div
        part="form-control"
        class=${e$3({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e$3({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${o$2(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o$2(this.placeholder)}
              minlength=${o$2(this.minlength)}
              maxlength=${o$2(this.maxlength)}
              min=${o$2(this.min)}
              max=${o$2(this.max)}
              step=${o$2(this.step)}
              .value=${l(this.value)}
              autocapitalize=${o$2(this.autocapitalize)}
              autocomplete=${o$2(this.autocomplete)}
              autocorrect=${o$2(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o$2(this.pattern)}
              enterkeyhint=${o$2(this.enterkeyhint)}
              inputmode=${o$2(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${isClearIconVisible ? x`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
  SlInput.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5(".input__control")
  ], SlInput.prototype, "input", 2);
  __decorateClass([
    r$2()
  ], SlInput.prototype, "hasFocus", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "title", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlInput.prototype, "type", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "name", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "value", 2);
  __decorateClass([
    defaultValue()
  ], SlInput.prototype, "defaultValue", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlInput.prototype, "size", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlInput.prototype, "filled", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlInput.prototype, "pill", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "label", 2);
  __decorateClass([
    n$3({ attribute: "help-text" })
  ], SlInput.prototype, "helpText", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlInput.prototype, "clearable", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlInput.prototype, "disabled", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "placeholder", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlInput.prototype, "readonly", 2);
  __decorateClass([
    n$3({ attribute: "password-toggle", type: Boolean })
  ], SlInput.prototype, "passwordToggle", 2);
  __decorateClass([
    n$3({ attribute: "password-visible", type: Boolean })
  ], SlInput.prototype, "passwordVisible", 2);
  __decorateClass([
    n$3({ attribute: "no-spin-buttons", type: Boolean })
  ], SlInput.prototype, "noSpinButtons", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlInput.prototype, "form", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlInput.prototype, "required", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "pattern", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlInput.prototype, "minlength", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlInput.prototype, "maxlength", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "min", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "max", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "step", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "autocapitalize", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "autocorrect", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "autocomplete", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlInput.prototype, "autofocus", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "enterkeyhint", 2);
  __decorateClass([
    n$3({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlInput.prototype, "spellcheck", 2);
  __decorateClass([
    n$3()
  ], SlInput.prototype, "inputmode", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("step", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleStepChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleValueChange", 1);
  SlInput.define("sl-input");
  var computedStyleMap = /* @__PURE__ */ new WeakMap();
  function getCachedComputedStyle(el) {
    let computedStyle = computedStyleMap.get(el);
    if (!computedStyle) {
      computedStyle = window.getComputedStyle(el, null);
      computedStyleMap.set(el, computedStyle);
    }
    return computedStyle;
  }
  function isVisible(el) {
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
    }
    const computedStyle = getCachedComputedStyle(el);
    return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
  }
  function isOverflowingAndTabbable(el) {
    const computedStyle = getCachedComputedStyle(el);
    const { overflowY, overflowX } = computedStyle;
    if (overflowY === "scroll" || overflowX === "scroll") {
      return true;
    }
    if (overflowY !== "auto" || overflowX !== "auto") {
      return false;
    }
    const isOverflowingY = el.scrollHeight > el.clientHeight;
    if (isOverflowingY && overflowY === "auto") {
      return true;
    }
    const isOverflowingX = el.scrollWidth > el.clientWidth;
    if (isOverflowingX && overflowX === "auto") {
      return true;
    }
    return false;
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    const tabindex = Number(el.getAttribute("tabindex"));
    const hasTabindex = el.hasAttribute("tabindex");
    if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.closest("[inert]")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!isVisible(el)) {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    const isNativelyTabbable = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "audio",
      "video",
      "summary",
      "iframe"
    ].includes(tag);
    if (isNativelyTabbable) {
      return true;
    }
    return isOverflowingAndTabbable(el);
  }
  function getTabbableBoundary(root) {
    var _a2, _b;
    const tabbableElements = getTabbableElements(root);
    const start = (_a2 = tabbableElements[0]) != null ? _a2 : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return { start, end };
  }
  function getSlottedChildrenOutsideRootElement(slotElement, root) {
    var _a2;
    return ((_a2 = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a2.host) !== root;
  }
  function getTabbableElements(root) {
    const walkedEls = /* @__PURE__ */ new WeakMap();
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert") || el.closest("[inert]")) {
          return;
        }
        if (walkedEls.has(el)) {
          return;
        }
        walkedEls.set(el, true);
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      for (const e2 of el.children) {
        walk(e2);
      }
    }
    walk(root);
    return tabbableElements.sort((a2, b2) => {
      const aTabindex = Number(a2.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b2.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }
  function* activeElements(activeElement = document.activeElement) {
    if (activeElement === null || activeElement === void 0)
      return;
    yield activeElement;
    if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
      yield* __yieldStar(activeElements(activeElement.shadowRoot.activeElement));
    }
  }
  function getDeepestActiveElement() {
    return [...activeElements()].pop();
  }
  var activeModals = [];
  var Modal = class {
    constructor(element) {
      this.tabDirection = "forward";
      this.handleFocusIn = () => {
        if (!this.isActive())
          return;
        this.checkFocus();
      };
      this.handleKeyDown = (event) => {
        var _a2;
        if (event.key !== "Tab" || this.isExternalActivated)
          return;
        if (!this.isActive())
          return;
        const currentActiveElement = getDeepestActiveElement();
        this.previousFocus = currentActiveElement;
        if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
          return;
        }
        if (event.shiftKey) {
          this.tabDirection = "backward";
        } else {
          this.tabDirection = "forward";
        }
        const tabbableElements = getTabbableElements(this.element);
        let currentFocusIndex = tabbableElements.findIndex((el) => el === currentActiveElement);
        this.previousFocus = this.currentFocus;
        const addition = this.tabDirection === "forward" ? 1 : -1;
        while (true) {
          if (currentFocusIndex + addition >= tabbableElements.length) {
            currentFocusIndex = 0;
          } else if (currentFocusIndex + addition < 0) {
            currentFocusIndex = tabbableElements.length - 1;
          } else {
            currentFocusIndex += addition;
          }
          this.previousFocus = this.currentFocus;
          const nextFocus = (
            /** @type {HTMLElement} */
            tabbableElements[currentFocusIndex]
          );
          if (this.tabDirection === "backward") {
            if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
              return;
            }
          }
          if (nextFocus && this.possiblyHasTabbableChildren(nextFocus)) {
            return;
          }
          event.preventDefault();
          this.currentFocus = nextFocus;
          (_a2 = this.currentFocus) == null ? void 0 : _a2.focus({ preventScroll: false });
          const allActiveElements = [...activeElements()];
          if (allActiveElements.includes(this.currentFocus) || !allActiveElements.includes(this.previousFocus)) {
            break;
          }
        }
        setTimeout(() => this.checkFocus());
      };
      this.handleKeyUp = () => {
        this.tabDirection = "forward";
      };
      this.element = element;
      this.elementsWithTabbableControls = ["iframe"];
    }
    /** Activates focus trapping. */
    activate() {
      activeModals.push(this.element);
      document.addEventListener("focusin", this.handleFocusIn);
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
    /** Deactivates focus trapping. */
    deactivate() {
      activeModals = activeModals.filter((modal) => modal !== this.element);
      this.currentFocus = null;
      document.removeEventListener("focusin", this.handleFocusIn);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
    /** Determines if this modal element is currently active or not. */
    isActive() {
      return activeModals[activeModals.length - 1] === this.element;
    }
    /** Activates external modal behavior and temporarily disables focus trapping. */
    activateExternal() {
      this.isExternalActivated = true;
    }
    /** Deactivates external modal behavior and re-enables focus trapping. */
    deactivateExternal() {
      this.isExternalActivated = false;
    }
    checkFocus() {
      if (this.isActive() && !this.isExternalActivated) {
        const tabbableElements = getTabbableElements(this.element);
        if (!this.element.matches(":focus-within")) {
          const start = tabbableElements[0];
          const end = tabbableElements[tabbableElements.length - 1];
          const target = this.tabDirection === "forward" ? start : end;
          if (typeof (target == null ? void 0 : target.focus) === "function") {
            this.currentFocus = target;
            target.focus({ preventScroll: false });
          }
        }
      }
    }
    possiblyHasTabbableChildren(element) {
      return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase()) || element.hasAttribute("controls");
    }
  };
  var dialog_styles_default = i$3`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;
  var SlDialog = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController2(this);
      this.modal = new Modal(this);
      this.open = false;
      this.label = "";
      this.noHeader = false;
      this.handleDocumentKeyDown = (event) => {
        if (event.key === "Escape" && this.modal.isActive() && this.open) {
          event.stopPropagation();
          this.requestClose("keyboard");
        }
      };
    }
    firstUpdated() {
      this.dialog.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      var _a2;
      super.disconnectedCallback();
      this.modal.deactivate();
      unlockBodyScrolling(this);
      (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "dialog.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      var _a2;
      if ("CloseWatcher" in window) {
        (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => this.requestClose("keyboard");
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
    }
    removeOpenListeners() {
      var _a2;
      (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        this.modal.activate();
        lockBodyScrolling(this);
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        this.dialog.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, "dialog.show", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        this.modal.deactivate();
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, "dialog.hide", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.dialog.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        unlockBodyScrolling(this);
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    /** Shows the dialog. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dialog */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e$3({
      dialog: true,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o$2(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o$2(!this.noHeader ? "title" : void 0)}
          tabindex="-1"
        >
          ${!this.noHeader ? x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDialog.styles = [component_styles_default, dialog_styles_default];
  SlDialog.dependencies = {
    "sl-icon-button": SlIconButton
  };
  __decorateClass([
    e$5(".dialog")
  ], SlDialog.prototype, "dialog", 2);
  __decorateClass([
    e$5(".dialog__panel")
  ], SlDialog.prototype, "panel", 2);
  __decorateClass([
    e$5(".dialog__overlay")
  ], SlDialog.prototype, "overlay", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlDialog.prototype, "open", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlDialog.prototype, "label", 2);
  __decorateClass([
    n$3({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDialog.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDialog.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dialog.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });
  SlDialog.define("sl-dialog");
  var checkbox_styles_default = i$3`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;
  var SlCheckbox = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        value: (control) => control.checked ? control.value || "on" : void 0,
        defaultValue: (control) => control.defaultChecked,
        setValue: (control, checked) => control.checked = checked
      });
      this.hasSlotController = new HasSlotController(this, "help-text");
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.size = "medium";
      this.disabled = false;
      this.checked = false;
      this.indeterminate = false;
      this.defaultChecked = false;
      this.form = "";
      this.required = false;
      this.helpText = "";
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleClick() {
      this.checked = !this.checked;
      this.indeterminate = false;
      this.emit("sl-change");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStateChange() {
      this.input.checked = this.checked;
      this.input.indeterminate = this.indeterminate;
      this.formControlController.updateValidity();
    }
    /** Simulates a click on the checkbox. */
    click() {
      this.input.click();
    }
    /** Sets focus on the checkbox. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the checkbox. */
    blur() {
      this.input.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /**
     * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
     * the custom validation message, call this method with an empty string.
     */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return x`
      <div
        class=${e$3({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e$3({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o$2(this.value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? x`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? x`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlCheckbox.styles = [component_styles_default, form_control_styles_default, checkbox_styles_default];
  SlCheckbox.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5('input[type="checkbox"]')
  ], SlCheckbox.prototype, "input", 2);
  __decorateClass([
    r$2()
  ], SlCheckbox.prototype, "hasFocus", 2);
  __decorateClass([
    n$3()
  ], SlCheckbox.prototype, "title", 2);
  __decorateClass([
    n$3()
  ], SlCheckbox.prototype, "name", 2);
  __decorateClass([
    n$3()
  ], SlCheckbox.prototype, "value", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlCheckbox.prototype, "size", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "disabled", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "checked", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "indeterminate", 2);
  __decorateClass([
    defaultValue("checked")
  ], SlCheckbox.prototype, "defaultChecked", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlCheckbox.prototype, "form", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "required", 2);
  __decorateClass([
    n$3({ attribute: "help-text" })
  ], SlCheckbox.prototype, "helpText", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlCheckbox.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
  ], SlCheckbox.prototype, "handleStateChange", 1);
  SlCheckbox.define("sl-checkbox");
  var menu_styles_default = i$3`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;
  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const menuItemTypes = ["menuitem", "menuitemcheckbox"];
      const target = event.composedPath().find((el) => {
        var _a2;
        return menuItemTypes.includes(((_a2 = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a2.call(el, "role")) || "");
      });
      if (!target)
        return;
      const item = target;
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        const item = this.getCurrentItem();
        event.preventDefault();
        event.stopPropagation();
        item == null ? void 0 : item.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          event.stopPropagation();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0) {
            index = items.length - 1;
          }
          if (index > items.length - 1) {
            index = 0;
          }
          this.setCurrentItem(items[index]);
          items[index].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a2;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a2 = item.getAttribute("role")) != null ? _a2 : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i2) => i2.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i2) => {
        i2.setAttribute("tabindex", i2 === item ? "0" : "-1");
      });
    }
    render() {
      return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
  SlMenu.styles = [component_styles_default, menu_styles_default];
  __decorateClass([
    e$5("slot")
  ], SlMenu.prototype, "defaultSlot", 2);
  SlMenu.define("sl-menu");
  var menu_item_styles_default = i$3`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const s2 = (i2, t2) => {
    var _a2;
    const e2 = i2._$AN;
    if (void 0 === e2)
      return false;
    for (const i3 of e2)
      (_a2 = i3._$AO) == null ? void 0 : _a2.call(i3, t2, false), s2(i3, t2);
    return true;
  }, o$1 = (i2) => {
    let t2, e2;
    do {
      if (void 0 === (t2 = i2._$AM))
        break;
      e2 = t2._$AN, e2.delete(i2), i2 = t2;
    } while (0 === (e2 == null ? void 0 : e2.size));
  }, r = (i2) => {
    for (let t2; t2 = i2._$AM; i2 = t2) {
      let e2 = t2._$AN;
      if (void 0 === e2)
        t2._$AN = e2 = /* @__PURE__ */ new Set();
      else if (e2.has(i2))
        break;
      e2.add(i2), c(t2);
    }
  };
  function h$1(i2) {
    void 0 !== this._$AN ? (o$1(this), this._$AM = i2, r(this)) : this._$AM = i2;
  }
  function n$1(i2, t2 = false, e2 = 0) {
    const r2 = this._$AH, h2 = this._$AN;
    if (void 0 !== h2 && 0 !== h2.size)
      if (t2)
        if (Array.isArray(r2))
          for (let i3 = e2; i3 < r2.length; i3++)
            s2(r2[i3], false), o$1(r2[i3]);
        else
          null != r2 && (s2(r2, false), o$1(r2));
      else
        s2(this, i2);
  }
  const c = (i2) => {
    i2.type == t$1.CHILD && (i2._$AP ?? (i2._$AP = n$1), i2._$AQ ?? (i2._$AQ = h$1));
  };
  class f extends i {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i2, t2, e2) {
      super._$AT(i2, t2, e2), r(this), this.isConnected = i2._$AU;
    }
    _$AO(i2, t2 = true) {
      var _a2, _b;
      i2 !== this.isConnected && (this.isConnected = i2, i2 ? (_a2 = this.reconnected) == null ? void 0 : _a2.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), t2 && (s2(this, i2), o$1(this));
    }
    setValue(t2) {
      if (f$1(this._$Ct))
        this._$Ct._$AI(t2, this);
      else {
        const i2 = [...this._$Ct._$AH];
        i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e = () => new h();
  class h {
  }
  const o = /* @__PURE__ */ new WeakMap(), n2 = e$4(class extends f {
    render(i2) {
      return T;
    }
    update(i2, [s3]) {
      var _a2;
      const e2 = s3 !== this.Y;
      return e2 && void 0 !== this.Y && this.rt(void 0), (e2 || this.lt !== this.ct) && (this.Y = s3, this.ht = (_a2 = i2.options) == null ? void 0 : _a2.host, this.rt(this.ct = i2.element)), T;
    }
    rt(t2) {
      if ("function" == typeof this.Y) {
        const i2 = this.ht ?? globalThis;
        let s3 = o.get(i2);
        void 0 === s3 && (s3 = /* @__PURE__ */ new WeakMap(), o.set(i2, s3)), void 0 !== s3.get(this.Y) && this.Y.call(this.ht, void 0), s3.set(this.Y, t2), void 0 !== t2 && this.Y.call(this.ht, t2);
      } else
        this.Y.value = t2;
    }
    get lt() {
      var _a2, _b;
      return "function" == typeof this.Y ? (_a2 = o.get(this.ht ?? globalThis)) == null ? void 0 : _a2.get(this.Y) : (_b = this.Y) == null ? void 0 : _b.value;
    }
    disconnected() {
      this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
      this.rt(this.ct);
    }
  });
  var SubmenuController = class {
    constructor(host, hasSlotController, localize) {
      this.popupRef = e();
      this.enableSubmenuTimer = -1;
      this.isConnected = false;
      this.isPopupConnected = false;
      this.skidding = 0;
      this.submenuOpenDelay = 100;
      this.handleMouseMove = (event) => {
        this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
        this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
      };
      this.handleMouseOver = () => {
        if (this.hasSlotController.test("submenu")) {
          this.enableSubmenu();
        }
      };
      this.handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
          case "Tab":
            this.disableSubmenu();
            break;
          case "ArrowLeft":
            if (event.target !== this.host) {
              event.preventDefault();
              event.stopPropagation();
              this.host.focus();
              this.disableSubmenu();
            }
            break;
          case "ArrowRight":
          case "Enter":
          case " ":
            this.handleSubmenuEntry(event);
            break;
        }
      };
      this.handleClick = (event) => {
        var _a2;
        if (event.target === this.host) {
          event.preventDefault();
          event.stopPropagation();
        } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a2 = event.target.role) == null ? void 0 : _a2.startsWith("menuitem")))) {
          this.disableSubmenu();
        }
      };
      this.handleFocusOut = (event) => {
        if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
          return;
        }
        this.disableSubmenu();
      };
      this.handlePopupMouseover = (event) => {
        event.stopPropagation();
      };
      this.handlePopupReposition = () => {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
        const isRtl = this.localize.dir() === "rtl";
        if (!menu) {
          return;
        }
        const { left, top, width, height } = menu.getBoundingClientRect();
        this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
      };
      (this.host = host).addController(this);
      this.hasSlotController = hasSlotController;
      this.localize = localize;
    }
    hostConnected() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
      }
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
        this.updateSkidding();
      } else {
        this.removeListeners();
      }
    }
    addListeners() {
      if (!this.isConnected) {
        this.host.addEventListener("mousemove", this.handleMouseMove);
        this.host.addEventListener("mouseover", this.handleMouseOver);
        this.host.addEventListener("keydown", this.handleKeyDown);
        this.host.addEventListener("click", this.handleClick);
        this.host.addEventListener("focusout", this.handleFocusOut);
        this.isConnected = true;
      }
      if (!this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = true;
        }
      }
    }
    removeListeners() {
      if (this.isConnected) {
        this.host.removeEventListener("mousemove", this.handleMouseMove);
        this.host.removeEventListener("mouseover", this.handleMouseOver);
        this.host.removeEventListener("keydown", this.handleKeyDown);
        this.host.removeEventListener("click", this.handleClick);
        this.host.removeEventListener("focusout", this.handleFocusOut);
        this.isConnected = false;
      }
      if (this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = false;
        }
      }
    }
    handleSubmenuEntry(event) {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!submenuSlot) {
        console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
        return;
      }
      let menuItems = null;
      for (const elt of submenuSlot.assignedElements()) {
        menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
        if (menuItems.length !== 0) {
          break;
        }
      }
      if (!menuItems || menuItems.length === 0) {
        return;
      }
      menuItems[0].setAttribute("tabindex", "0");
      for (let i2 = 1; i2 !== menuItems.length; ++i2) {
        menuItems[i2].setAttribute("tabindex", "-1");
      }
      if (this.popupRef.value) {
        event.preventDefault();
        event.stopPropagation();
        if (this.popupRef.value.active) {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        } else {
          this.enableSubmenu(false);
          this.host.updateComplete.then(() => {
            if (menuItems[0] instanceof HTMLElement) {
              menuItems[0].focus();
            }
          });
          this.host.requestUpdate();
        }
      }
    }
    setSubmenuState(state) {
      if (this.popupRef.value) {
        if (this.popupRef.value.active !== state) {
          this.popupRef.value.active = state;
          this.host.requestUpdate();
        }
      }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
      if (delay) {
        window.clearTimeout(this.enableSubmenuTimer);
        this.enableSubmenuTimer = window.setTimeout(() => {
          this.setSubmenuState(true);
        }, this.submenuOpenDelay);
      } else {
        this.setSubmenuState(true);
      }
    }
    disableSubmenu() {
      window.clearTimeout(this.enableSubmenuTimer);
      this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
      var _a2;
      if (!((_a2 = this.host.parentElement) == null ? void 0 : _a2.computedStyleMap)) {
        return;
      }
      const styleMap = this.host.parentElement.computedStyleMap();
      const attrs = ["padding-top", "border-top-width", "margin-top"];
      const skidding = attrs.reduce((accumulator, attr) => {
        var _a22;
        const styleValue = (_a22 = styleMap.get(attr)) != null ? _a22 : new CSSUnitValue(0, "px");
        const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
        const pxValue = unitValue.to("px");
        return accumulator - pxValue.value;
      }, 0);
      this.skidding = skidding;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
      const isLtr = this.localize.dir() === "ltr";
      if (!this.isConnected) {
        return x` <slot name="submenu" hidden></slot> `;
      }
      return x`
      <sl-popup
        ${n2(this.popupRef)}
        placement=${isLtr ? "right-start" : "left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
    }
  };
  var SlMenuItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.type = "normal";
      this.checked = false;
      this.value = "";
      this.loading = false;
      this.disabled = false;
      this.localize = new LocalizeController2(this);
      this.hasSlotController = new HasSlotController(this, "submenu");
      this.submenuController = new SubmenuController(this, this.hasSlotController, this.localize);
      this.handleHostClick = (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleMouseOver = (event) => {
        this.focus();
        event.stopPropagation();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("click", this.handleHostClick);
      this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
      this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        this.checked = false;
        console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
        return;
      }
      if (this.type === "checkbox") {
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.removeAttribute("aria-checked");
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.setAttribute("role", "menuitem");
        this.removeAttribute("aria-checked");
      }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel() {
      return getTextContent(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const isSubmenuExpanded = this.submenuController.isExpanded();
      return x`
      <div
        id="anchor"
        part="base"
        class=${e$3({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
  };
  SlMenuItem.styles = [component_styles_default, menu_item_styles_default];
  SlMenuItem.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup,
    "sl-spinner": SlSpinner
  };
  __decorateClass([
    e$5("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass([
    e$5(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
    n$3()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
    n$3()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "loading", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);
  SlMenuItem.define("sl-menu-item");
  var dropdown_styles_default = i$3`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;
  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
      this.sync = void 0;
      this.handleKeyDown = (event) => {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
          this.focusOnTrigger();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        var _a2;
        if (event.key === "Escape" && this.open && !this.closeWatcher) {
          event.stopPropagation();
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a2 = document.activeElement) == null ? void 0 : _a2.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a22, _b, _c;
            const activeElement = ((_a22 = this.containingElement) == null ? void 0 : _a22.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
            if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
            }
          });
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this.containingElement && !path.includes(this.containingElement)) {
          this.hide();
        }
      };
      this.handlePanelSelect = (event) => {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    async handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
            await this.updateComplete;
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      var _a2;
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      if ("CloseWatcher" in window) {
        (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          this.hide();
          this.focusOnTrigger();
        };
      } else {
        this.panel.addEventListener("keydown", this.handleKeyDown);
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      var _a2;
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      (_a2 = this.closeWatcher) == null ? void 0 : _a2.destroy();
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return x`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${o$2(this.sync ? this.sync : void 0)}
        class=${e$3({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlDropdown.styles = [component_styles_default, dropdown_styles_default];
  SlDropdown.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e$5(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass([
    e$5(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    e$5(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    n$3({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    n$3({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    n$3({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    n$3({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    n$3({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    n$3({ reflect: true })
  ], SlDropdown.prototype, "sync", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  SlDropdown.define("sl-dropdown");
  const _hoisted_1 = {
    key: 0,
    class: "clj-status"
  };
  const _hoisted_2 = ["href"];
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon-Solid icon-clock" }, null, -1);
  const _hoisted_4 = {
    key: 1,
    class: "clj-root"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    props: {
      groupSetId: Number
    },
    setup(__props) {
      let props = __props;
      const peoplePage2 = props.groupSetId === null;
      const canvasData2 = getCanvasData(!peoplePage2);
      const dataLoaded = vue.ref(false);
      vue.watch(
        () => canvasData2.updated,
        (updated) => {
          dataLoaded.value = true;
        }
      );
      return (_ctx, _cache) => {
        const _component_sl_tooltip = vue.resolveComponent("sl-tooltip");
        return !dataLoaded.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createTextVNode(" Canvas Learning Journal "),
          vue.createElementVNode("a", {
            target: "_blank",
            href: `${vue.unref(TOOLTIPS).App.loading.url}`
          }, [
            vue.createVNode(_component_sl_tooltip, {
              content: `${vue.unref(TOOLTIPS).App.loading.content}`
            }, {
              default: vue.withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["content"])
          ], 8, _hoisted_2)
        ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
          peoplePage2 ? (vue.openBlock(), vue.createBlock(_sfc_main$c, { key: 0 })) : (vue.openBlock(), vue.createBlock(_sfc_main$1, { key: 1 }))
        ]));
      };
    }
  });
  setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");
  const FILE_NAME = "CLJ main.ts";
  const documentUrl = new URL(document.URL);
  const peoplePage = isPeople();
  const groupSetPage = isGroupSet();
  if (!peoplePage && !groupSetPage) {
    throw new Error("Not on a users or groups page");
  }
  const groupSetId = groupSetPage ? Number(documentUrl.hash.split("-")[1]) : null;
  const observer = new MutationObserver((mutations, obs) => {
    const groupCategoriesTab = document.querySelector("div#group_categories_tabs");
    if (groupCategoriesTab) {
      insertLearningJournalApp(groupCategoriesTab);
    }
  });
  observer.observe(document, { childList: true, subtree: true });
  function insertLearningJournalApp(groupCategoriesTab) {
    const activeTab = groupCategoriesTab.querySelector("div.ui-tabs-panel[aria-expanded=true]");
    if (!activeTab) {
      console.error(`${FILE_NAME} - unable to find active tab`);
      throw new Error("Unable to find active tab");
    }
    observer.disconnect();
    const app = vue.createApp(_sfc_main, { groupSetId });
    app.component("EasyDataTable", DataTable);
    app.mount(
      (() => {
        const appElem = document.createElement("div");
        appElem.id = "clj";
        appElem.style.display = "inline";
        activeTab.prepend(appElem);
        return appElem;
      })()
    );
  }
  function isPeople(documentUrl2) {
    const regex = /https:\/\/.*\/courses\/.*\/users$/;
    return document.URL.match(regex) !== null;
  }
  function isGroupSet(documentUrl2) {
    const regex = /https:\/\/.*\/courses\/.*\/groups.*$/;
    return document.URL.match(regex) !== null;
  }

})(Vue);