function findWinners(matches: [number, number][]): number[][] {
  let maxEl = -Infinity;
  for (const [w, l] of matches) {
    maxEl = Math.max(maxEl, w, l);
  }

  const allPlayers = new Array<number>(maxEl + 1).fill(-1);
  for (const [w, l] of matches) {
    if (allPlayers[w] === -1) {
      allPlayers[w] = 0;
    }

    // check if the given loser, has played before or not
    if (allPlayers[l] === -1) {
      // this person lost 1 game
      allPlayers[l] = 1;
    } else {
      allPlayers[l]++;
    }
  }

  const ans: [number[], number[]] = [[], []];

  for (let i = 1; i <= maxEl; i++) {
    if (allPlayers[i] === -1 || allPlayers[i] > 1) continue;
    ans[allPlayers[i]].push(i);
  }

  return ans;
}
