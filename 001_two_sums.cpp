/**
* * Question Link: https://leetcode.com/problems/two-sum/
* * Sample Input:  nums = [2,7,11,15], target = 9
* * Sample Output: Output: [0,1]
*/

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int sum = 0;
        vector<int> ans;
        for ( int i=0; i<nums.size(); i++){
            for ( int j=i+1; j<nums.size(); j++ ){
                if ( (nums[i]+nums[j]) == target){
                    ans.push_back(i);
                    ans.push_back(j);
                }
            }
        }
        return ans;
    }
};