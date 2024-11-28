export default class SaySomething {
  message: string
  //初期化
  constructor(message: string) {
    this.message = message
  }
  //publicはJSでは出来なくて、TSで実現された記法。他の静的型付けでも使える記法。
  //下は関数
  public sayText(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
