const nums = [1,2,3,4,5,6,7,8,9,10]

for (let i in nums) {
if (i ==5) {
    break
}
    console.log(`i = ${nums[i]}`)

}

for ( j in nums) {
    if (j ==5) {
        continue
    }
    console.log(`j = ${nums[j]}`)
    
    }