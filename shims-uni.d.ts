/// <reference types='@dcloudio/types' />
import 'vue'

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {

  }
}
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}