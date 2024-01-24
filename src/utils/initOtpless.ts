export const initOTPless = (callback: Function) => {
  const otplessInit = Reflect.get(window, 'otplessInit')

  const loadScript = () => {
    const isScriptLoaded = document.getElementById('otplessIdScript')
    if (isScriptLoaded) return

    const script = document.createElement('script')
    script.src = 'https://otpless.com/auth.js'
    script.id = 'otplessIdScript'
    script.setAttribute('cid', 'YOUR_CID')
    document.body.appendChild(script)
  }

  console.log("Calling function:", otplessInit ? "otplessInit()" : "loadScript()");
  otplessInit ? otplessInit() : loadScript()

  Reflect.set(window, 'otpless', callback)
}
