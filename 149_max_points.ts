const slope = (x1: number, y1: number, x2: number, y2: number) => {
  return (y2 - y1) / (x2 - x1);
};

const onSameLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
) => {
  const m1 = slope(x1, y1, x2, y2);
  const m2 = slope(x1, y1, x3, y3);

  return m1 === m2;
};

function maxPoints(points: number[][]): number {
  let maxNum = 1;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      let num = 2;
      for (let k = 0; k < points.length; k++) {
        if (k === i || k === j) continue;
        const [x3, y3] = points[k];
        if (onSameLine(x1, y1, x2, y2, x3, y3)) {
          num++;
        }
      }
      maxNum = Math.max(maxNum, num);
    }
  }

  return maxNum;
}
