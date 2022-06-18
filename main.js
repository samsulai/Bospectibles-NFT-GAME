const serverUrl = "https://qrk9heljhv8b.usemoralis.com:2053/server";
const appId = "TZeCc9R3xnjKj843JIWL1qoAJAUHcM9Xpd0oc4qd";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" });
      console.log(user);
      console.log(user.get("ethAddress"));
    } catch (error) {
      console.log(error);
    }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;