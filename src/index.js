import UI from "./modules/ui";
import "./style.css";

//check browser local storage capacity

let storage;
function isStorageAvailable(type) {
  try {
    storage = window[type];
    storage.setItem("x", "x");
    storage.removeItem("x");
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
}
export let storageAvailability = isStorageAvailable("localStorage");
export { storage };

//initiate UI
document.addEventListener("DOMContentLoaded", UI.init());
