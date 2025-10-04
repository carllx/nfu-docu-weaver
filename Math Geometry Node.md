1. **Lorenz 吸引子**：经典的混沌模型，展示了混沌现象的复杂性和对初始条件的敏感性。
    
2. **Hénon-like 吸引子**：在三维 Hénon 映射中发现的一类吸引子，表现出丰富的动态行为[6](https://www.researchgate.net/publication/263979733_THREE-DIMENSIONAL_HENON-LIKE_MAPS_AND_WILD_LORENZ-LIKE_ATTRACTORS)。
    
3. **Lotka-Volterra 吸引子**：基于分数导数的三维 Lotka-Volterra 模型研究，提供了新的动态特性[4](https://www.sciencedirect.com/science/article/abs/pii/S0378475423001428)。
    
4. **随机吸引子**：研究三维随机系统中的吸引子和不变测度，提供了关于随机动态的洞见[5](https://www.aimsciences.org/article/doi/10.3934/dcdss.2023002)。
    
5. **伪超双曲吸引子**：探讨了一类新型的奇异伪超双曲吸引子，展示了复杂的拓扑结构[[1899 Nikola Tesla - Everything Is Light]](https://arxiv.org/pdf/1510.02252)。

1. **Lorenz Attractor**: A classic chaos model that demonstrates the complexity of chaotic phenomena and sensitivity to initial conditions.

2. **Hénon-like Attractor**: A class of attractors discovered in three-dimensional Hénon mapping, exhibiting rich dynamic behaviors.

3. **Lotka-Volterra Attractor**: Research on three-dimensional Lotka-Volterra model based on fractional derivatives, providing new dynamic characteristics.

4. **Random Attractor**: Study of attractors and invariant measures in three-dimensional random systems, providing insights into stochastic dynamics.

5. **Pseudo-hyperbolic Attractor**: Explores a new type of singular pseudo-hyperbolic attractor, demonstrating complex topological structures.
![150|](https://i.imgur.com/1xNbF4w.webp)





---


![|200](https://miro.medium.com/v2/resize:fit:1200/0*WcFAUaxttDKU6Izb.jpeg)
```
研究市场中不同资产的动态关系。
```
(Source:  [medium.com: 3D Chaotic Attractors in C++. The attractor is the system that is… | by Markus Buchholz | Medium](https://markus-x-buchholz.medium.com/3d-chaotic-attractors-in-c-c8112ac147cc))
这个公式代表一个非线性动态系统，它由三个微分方程组成，分别描述了变量 $x$、$y$ 和 $z$ 随时间变化的速率。具体为：

<math><semantics><mrow><mo>{</mo><mtable><mtr><mtd><mstyle><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mi>a</mi><mo>⋅</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>y</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>z</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mi>a</mi><mo>⋅</mo><mi>y</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>z</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>x</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle><mrow><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mi>a</mi><mo>⋅</mo><mi>z</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo>⋅</mo><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mstyle></mtd></mtr></mtable></mrow><annotation>\begin{cases} \frac{dx}{dt} = -a \cdot x - 4 \cdot y - 4 \cdot z - y^2 \\ \frac{dy}{dt} = -a \cdot y - 4 \cdot z - 4 \cdot x - z^2 \\ \frac{dz}{dt} = -a \cdot z - 4 \cdot x - 4 \cdot y - x^2 \end{cases}</annotation></semantics></math>⎩<svg><path></path></svg>⎨<svg><path></path></svg>⎧​dtdx​=−a⋅x−4⋅y−4⋅z−y2dtdy​=−a⋅y−4⋅z−4⋅x−z2dtdz​=−a⋅z−4⋅x−4⋅y−x2​

### 各个部分的解释：

1. **变量的含义**：
    
   $x  、y  、 z$ ：通常代表系统中的状态变量，可能与某种物理量、人口数量或其他动态系统状态相关。
    $a$ ：可能是一个参数，用于调节系统的行为。
2. **形式**：
    
    - 每个方程右侧的项包含线性和非线性部分，这使得系统动态较为复杂。
    - 例如，项 $-a \cdot x$ 表示 $ x $ 对其自身的负反馈，而 $ -4 \cdot y $、$ -4 \cdot z $ 表示 $ y $ 和 $ z $ 对 $ x $ 的影响。
3. **动力学特性**：
    
    - 这些方程的解决方法通常涉及数值模拟，因为非线性项（如 $ y2 $ 和 $ x2 $）可能导致复杂的行为，如震荡或混沌。
    - 系统可能会表现出平衡点的存在，这些平衡点是当所有导数为零时的 $ (x, y, z) $ 组合。

### 应用实例：

此类方程在多个领域中都有应用，例如：

- **生态模型**：描述种群间的相互作用。
- **物理系统**：模拟粒子间的相互作用或电路行为。
- **经济模型**：研究市场中不同资产的动态关系。

总体来说，这组方程体现了系统随时间变化的动态特性，揭示了各状态变量之间的相互影响。