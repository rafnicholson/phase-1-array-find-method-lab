// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(season => season.result === 'W');
    if (winningYear) {
        return winningYear.year;
    } else {
        return undefined;
    }
}