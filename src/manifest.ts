import packageJson from "../package.json";
import { ManifestType } from "@src/manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  name: "History tracker",
  version: packageJson.version,
  description: packageJson.description,
  author: packageJson.author,
  options_page: "src/pages/options/index.html",
  action: {
    default_title: "History tracker",
    default_popup: "src/pages/popup/index.html",
    default_icon: {
      "128": "icon128.png",
      "48": "icon48.png",
      "32": "icon32.png",
      "16": "icon16.png",
    },
  },
  icons: {
    "128": "icon128.png",
    "48": "icon48.png",
    "32": "icon32.png",
    "16": "icon16.png",
  },
  permissions: ["fontSettings", "tabs", "history", "storage", "sessions"],
  web_accessible_resources: [
    {
      resources: ["icon128.png"],
      matches: ["*://*/*"],
    },
  ],
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'",
  },
  incognito: "not_allowed",
  commands: {
    _execute_browser_action: {
      suggested_key: {
        default: "Ctrl+Shift+H",
        mac: "MacCtrl+Shift+H",
      },
      description: "History tracker",
    },
  },
};

export default manifest;
