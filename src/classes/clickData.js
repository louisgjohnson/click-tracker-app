class ClickData {
  constructor(data) {
    this.setData(data);
  }

  setData({ x, y, color }) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

export default ClickData;
