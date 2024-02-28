<?php 
class Solution {

    
    function twoSum($nums, $target) {
        $count = count($nums);
    for ($i = 0; $i < $count; $i++) {
        for ($j = $i + 1; $j < $count; $j++) {
            if ($nums[$i] + $nums[$j] == $target) {
                return [$i, $j];
            }
        }
    }
    return null;
    }
}
?>