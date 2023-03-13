/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(ien, iex, energy, experience) {
    let cnt = 0
    const len = energy.length
    for (let i = 0; i < len; i ++) {
        if (ien <= energy[i]) {
            cnt += energy[i] - ien + 1
            ien += cnt
        }
        if (iex <= experience[i]) {
            cnt += experience[i] - iex + 1
            iex += cnt
        }
        console.log('cnt: ', cnt)
        ien -= energy[i]
        iex += experience[i]
        console.log(ien, iex)
    }
    return cnt
};

arr1 = [1, 4, 3, 2]
arr2 = [2, 6, 3, 1]
console.log(minNumberOfHours(5,3,arr1, arr2));