import axios from "axios";

class Icons {
  // It's a map {id: url of icon}
  icons = {};

  constructor() {
    this.icons = {}
  }

  async load() {
    this.icons = await axios.get("https://cdn.polv.dev/webdata/tech.json").then(res => res.data);
  }

  getIcons() {
    return this.icons;
  }

  getIcon(id) {
    // icons is a map {id: url of icon}
    return this.icons[id];
  }

  isReady() {
    return this.icons.length > 0;
  }
}

export default new Icons();