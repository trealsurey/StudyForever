# 刷题笔记

## [LRU](https://leetcode-cn.com/problems/lru-cache/)

用到队列

## DP ☆

> ref: https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/

首先，动态规划问题的一般形式就是求最值。动态规划其实是运筹学的一种最优化方法，只不过在计算机问题上应用比较多，比如说让你求**最长**递增子序列呀，**最小**编辑距离呀等等。

既然是要求最值，核心问题是什么呢？求解动态规划的核心问题是**穷举**。首先，动态规划的穷举有点特别，因为这类问题存在**重叠子问题**，如果暴力穷举的话效率会极其低下，所以需要**备忘录或者DP table**来优化穷举过程，避免不必要的计算。而且，动态规划问题一定会具备**最优子结构** ，才能通过子问题的最值得到原问题的最值。另外，虽然动态规划的核心思想就是穷举求最值，但是问题可以千变万化，穷举所有可行解其实并不是一件容易的事，只有列出正确的**状态转移方程** 才能正确地穷举。

以上提到的重叠子问题、最优子结构、状态转移方程就是动态规划三要素。根据下面的思路框架来构建状态转移方程

**明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义**

```java
# 初始化 base case
dp[0][0][...] = base
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```

- [斐波那契数列](https://leetcode-cn.com/problems/fibonacci-number/comments/)：**替换法nb**，空间复杂度O(1)
- [凑零钱问题](https://leetcode-cn.com/problems/coin-change/)：找到最优子结构
  
