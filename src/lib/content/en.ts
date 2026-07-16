// English version of every concept's name/lesson/example/relation/prompt, plus the
// phase-level title/synthesis in `enPhases` — for practicing the vocabulary as it
// appears in real papers/docs/interviews, for a global ES/EN toggle that switches
// every piece of text in the app, and so the audio button (Web Speech API, en-US)
// has real text to read. Own writing — not a literal translation of any one book,
// these are the same technical explanations re-expressed in English.

export type EnContent = { name: string; lesson: string; example: string; relation: string; prompt: string };

export const en: Record<string, EnContent> = {
  // Fase 0
  vectores: {
    name: "Vectors and vector spaces",
    lesson:
      "A vector is an ordered list of numbers representing a magnitude with direction (or, in ML, a data point with several features). A vector space is the set of all possible vectors of that size, together with two operations that keep you inside the set: adding two vectors, and multiplying a vector by a scalar.",
    example: "v=(3,4) has norm ‖v‖=√(3²+4²)=5. Adding (3,4)+(1,2)=(4,6). Scaling 2·(3,4)=(6,8).",
    relation:
      "The foundation for everything that follows: a row of a matrix, a training example, and a Transformer embedding are all, mathematically, vectors.",
    prompt: "What is a vector space?",
  },
  matrices: {
    name: "Matrices and operations",
    lesson:
      "A matrix is a table of numbers, but the important part in ML is seeing it as a function: multiplying a vector by a matrix transforms that vector (rotates it, scales it, projects it). A neural network layer, without the activation, is literally a matrix multiplication.",
    example: "The 90° rotation matrix [[0,-1],[1,0]] applied to the vector (1,0) gives (0,1) — it rotated the vector 90° counterclockwise.",
    relation:
      "A neural network layer is a matrix multiplication (Phase 2); a full data table is a matrix on which you compute eigenvalues, SVD, or PCA.",
    prompt: "What does a matrix represent as a transformation?",
  },
  autovalores: {
    name: "Eigenvalues / eigenvectors",
    lesson:
      "An eigenvector of a matrix is a vector that, when transformed by that matrix, doesn't change direction — it only stretches or shrinks. That stretching factor is the associated eigenvalue. Finding a matrix's eigenvectors means finding the 'natural directions' of the transformation it represents.",
    example: "For A=[[2,0],[0,3]], the eigenvectors are (1,0) and (0,1), with eigenvalues 2 and 3 — A stretches the x-axis by 2 and the y-axis by 3, without rotating either one.",
    relation:
      "Computing them is the heart of PCA (Phase 1) and of spectral methods on graphs (Phase 3, via the Laplacian).",
    prompt: "What is an eigenvector of a matrix?",
  },
  svd: {
    name: "Singular Value Decomposition (SVD)",
    lesson:
      "SVD factorizes any matrix (even non-square ones) into three matrices: a rotation, an axis-wise scaling, and another rotation (M = U·Σ·Vᵀ). It's the mathematical basis of PCA, data compression, and recommender systems (matrix factorization).",
    example: "For a matrix that only stretches the x-axis by 3 and leaves y unchanged, Σ = diag(3,1) — the singular values are directly the scaling factors.",
    relation:
      "It generalizes eigenvalues to non-square matrices; it's the math behind PCA (Phase 1) and low-rank models (Phase 6).",
    prompt: "What does SVD factorize?",
  },
  derivadas: {
    name: "Derivatives",
    lesson:
      "The derivative of a function at a point measures how fast the function's value changes when you slightly change the input — it's the slope of the tangent line. In ML, the derivative of the loss with respect to a parameter tells you which direction and how much to move that parameter to reduce the error.",
    example: "If f(x)=x², f'(x)=2x. At x=3, the slope is 6: the function grows ~6 units for each unit increase in x, locally.",
    relation:
      "It's the atomic building block of the chain rule, which is itself the atomic building block of backpropagation (Phase 2).",
    prompt: "What does a derivative measure?",
  },
  "regla-cadena": {
    name: "Chain rule",
    lesson:
      "If a function is the composition of two others (first apply f, then g), the derivative of the whole thing is the product of each part's derivative: (g∘f)'(x) = g'(f(x))·f'(x). Backpropagation is nothing more than applying this rule layer by layer in a neural network.",
    example: "If y=(3x+1)², with u=3x+1 and y=u²: dy/dx = dy/du · du/dx = 2u · 3 = 6(3x+1).",
    relation:
      "Applied layer by layer it's literally backpropagation (Phase 2); applied inside self-attention it's how a Transformer gets trained (Phase 4).",
    prompt: "How do you differentiate a composition of functions?",
  },
  gradiente: {
    name: "Gradient",
    lesson:
      "The gradient of a multivariable function is the vector formed by all its partial derivatives. It points in the direction where the function grows fastest — that's why, to minimize a loss, you move in the direction opposite the gradient.",
    example: "For f(x,y)=x²+y², ∇f=(2x,2y). At the point (1,1), the gradient is (2,2) — that's the direction of fastest growth from there.",
    relation:
      "It's what backprop computes (Phase 2), and what gradient descent, SGD, Adam, and even policy gradients in RL (Phase 5) all follow.",
    prompt: "What direction does the gradient point in?",
  },
  jacobiano: {
    name: "Jacobian matrix",
    lesson:
      "When a function takes several inputs and returns several outputs (not a single number), the Jacobian is the matrix containing all partial derivatives of each output with respect to each input. It's the generalization of the gradient to vector-valued functions.",
    example: "For f(x,y)=(x+y, x·y), the Jacobian is [[1,1],[y,x]] — the first row is the derivatives of x+y, the second of x·y.",
    relation:
      "It shows up in the stability analysis of RNNs (Phase 2) and in the theory of critical network initialization (Phase 6).",
    prompt: "What is the Jacobian matrix?",
  },
  hessiano: {
    name: "Hessian matrix",
    lesson:
      "The Hessian is the matrix of second derivatives of a function — it tells you how the curvature changes, not just the slope. It's used to determine whether a critical point is a minimum, maximum, or saddle point, and in second-order optimization methods.",
    example: "For f(x,y)=x²+y², the Hessian is [[2,0],[0,2]] — both eigenvalues positive, confirming that (0,0) is a minimum (not a saddle point).",
    relation:
      "It connects to why some network initializations are 'critical' (Phase 6) — that analysis looks at the curvature of the loss near the start of training.",
    prompt: "What is the Hessian matrix used for?",
  },
  distribuciones: {
    name: "Probability distributions",
    lesson:
      "A probability distribution describes how likely each possible value of a random variable is. In ML these show up constantly: the Normal/Gaussian (for noise and weights), the Bernoulli/Binomial (for binary classification), and the Categorical (for multiclass classification, via softmax).",
    example: "Flipping a coin is Bernoulli(p=0.5). Choosing one class out of 10 with softmax produces a Categorical distribution over those 10 options.",
    relation:
      "The Categorical is the one softmax produces, used in classification (Phase 1), in attention (Phase 4), and in RL policies (Phase 5).",
    prompt: "Name 3 distributions commonly used in ML.",
  },
  "esperanza-varianza": {
    name: "Expectation and variance",
    lesson:
      "Expectation (expected value) is the probability-weighted average of a random variable. Variance measures how spread out the values are around that expectation. For independent variables, the variance of a sum is the sum of the variances (unlike expectation, which is always linear).",
    example: "If X and Y are two independent dice (Var=35/12 each), Var(X+Y) = 35/12 + 35/12 = 35/6.",
    relation:
      "Variance is half of the bias-variance tradeoff (Phase 1), and it's exactly what CRN aims to reduce when comparing RL agents (Phase 5).",
    prompt: "How do you compute the variance of a sum of independent variables?",
  },
  bayes: {
    name: "Bayes' theorem",
    lesson:
      "P(A|B) = P(B|A)·P(A) / P(B). It lets you update a prior belief (P(A)) with new evidence (B) to get a posterior belief (P(A|B)). It's the basis of Bayesian inference and classifiers like Naive Bayes.",
    example:
      "A medical test with 99% sensitivity, for a disease with 1% prevalence: P(sick|positive) ends up much lower than 99%, because of the denominator's weight (false positives from the healthy majority).",
    relation:
      "The basis of Bayesian inference in infinite-width networks (Phase 6) and of probabilistic classifiers in general.",
    prompt: "Write out Bayes' theorem.",
  },
  mle: {
    name: "Maximum Likelihood Estimation (MLE)",
    lesson:
      "MLE looks for the model parameters that make the data you actually observed as probable as possible. Minimizing squared error or cross-entropy (the most common ML losses) is, mathematically, doing MLE under a Gaussian or Categorical noise assumption, respectively.",
    example: "If you flip a coin 10 times and get 7 heads, the MLE of p(heads) is 7/10 — the value of p that maximizes the probability of having observed exactly that outcome.",
    relation:
      "Minimizing cross-entropy (logistic regression in Phase 1, or training a Transformer in Phase 4) is doing MLE under a specific noise assumption.",
    prompt: "What does the maximum likelihood estimator maximize?",
  },
  "descenso-gradiente": {
    name: "Gradient descent",
    lesson:
      "To minimize a function, you update the parameters by subtracting a fraction (the learning rate) of the gradient: since the gradient points where the function grows, subtracting it moves you toward where it decreases. Repeated many times, it converges to a minimum (local, in deep networks).",
    example: "Minimizing f(x)=x² starting from x=5 with rate 0.1: step 1 → x=5-0.1·10=4; step 2 → x=4-0.1·8=3.2; converges toward x=0.",
    relation:
      "It's the training engine behind practically everything that follows: regression (Phase 1), neural networks (Phase 2), and policy gradients (Phase 5).",
    prompt: "Why do you subtract the gradient instead of adding it?",
  },
  convexidad: {
    name: "Convexity",
    lesson:
      "A function is convex if the line segment joining any two points on its graph always lies above (or on) the curve — it has a 'bowl' shape. If the loss function is convex, any local minimum is also the global minimum, which guarantees that gradient descent converges to the best possible result.",
    example: "f(x)=x² is convex (a single global minimum at 0). f(x)=x⁴-x² is NOT convex: it has two local minima, and gradient descent can get stuck in either one depending on where it starts.",
    relation:
      "The loss for linear/logistic regression (Phase 1) is convex; a deep network's loss (Phase 2) generally isn't — which is why initialization (Phase 6) actually matters there.",
    prompt: "What does convexity of a loss function guarantee?",
  },
  lagrange: {
    name: "Lagrange multipliers",
    lesson:
      "They're used to optimize a function subject to a constraint (for example, minimizing error under the condition that the weights sum to 1). An extra variable (the multiplier) is introduced that turns the constrained problem into an unconstrained one, easier to solve with ordinary calculus.",
    example: "Minimizing x²+y² subject to x+y=1: L=x²+y²-λ(x+y-1). Differentiating and setting to zero gives x=y=0.5 as the solution.",
    relation:
      "It shows up when formally deriving PCA's solution (Phase 1, maximizing variance subject to unit norm) and in constrained optimization formulations generally.",
    prompt: "What are Lagrange multipliers used for?",
  },

  // Fase 1
  "regresion-lineal": {
    name: "Linear regression",
    lesson:
      "Models the relationship between variables as a line (or hyperplane): prediction = w·x + b. It's fit by minimizing the mean squared error between prediction and actual value, and has both an exact solution (normal equation) and an iterative one via gradient descent.",
    example: "With points (1,2),(2,4),(3,6), the best fit is y=2x (slope 2, intercept 0) — total squared error = 0, a perfect fit.",
    relation:
      "Mathematically, it's a single-layer neural network with no activation (Phase 2) — the simplest possible case.",
    prompt: "What is the loss function for linear regression?",
  },
  "regresion-logistica": {
    name: "Logistic regression",
    lesson:
      "Despite the name, it's a classification model: it takes the same linear combination w·x + b, but passes it through a sigmoid function to turn it into a probability between 0 and 1. It's trained by minimizing cross-entropy, not squared error.",
    example: "If z=w·x+b=1.5, sigmoid(1.5)≈0.82 — the model predicts an 82% probability of the positive class.",
    relation:
      "Its sigmoid belongs to the same family of activation functions from Phase 2; its cross-entropy is the standard loss for classification in deep learning.",
    prompt: "What activation function does logistic regression use?",
  },
  overfitting: {
    name: "Overfitting / underfitting",
    lesson:
      "Overfitting is when the model memorizes the noise in the training data and performs poorly on new data (low training error, high validation error). Underfitting is when the model is too simple to capture the real pattern (high error on both). It's detected by comparing the training and validation error curves as training progresses.",
    example: "A degree-15 polynomial fit to 10 points passes through all of them exactly (training error=0) but oscillates wildly between them (high validation error) — textbook overfitting.",
    relation:
      "The same concept resurfaces in deep learning (Phase 2, why batchnorm/dropout are used) and in RL (Phase 5, overfitting to a fixed self-play opponent).",
    prompt: "How do you detect overfitting from a validation curve?",
  },
  "reg-l1": {
    name: "L1 regularization",
    lesson:
      "Adds the absolute value of the weights to the loss (λ·Σ|w|). Its characteristic effect is pushing many weights to exactly zero, producing sparse models — it's also used for automatic feature selection.",
    example: "With strong L1, weights like [0.3, 0.0, 0.8, 0.0] are typical — two features ended up at exactly zero, effectively dropped from the model.",
    relation:
      "The same math (the ℓ1 norm) underlies the sparse models and compressed sensing of Phase 6.",
    prompt: "What effect does L1 have on the weights?",
  },
  "reg-l2": {
    name: "L2 regularization",
    lesson:
      "Adds the square of the weights to the loss (λ·Σw²). Unlike L1, it doesn't drive weights to exactly zero — instead it smoothly shrinks them toward small values, reducing the model's variance without fully eliminating any feature.",
    example: "With L2 on the same data, the weights might end up as [0.25, 0.05, 0.6, 0.1] — all shrunk, but none exactly zero.",
    relation:
      "It's mathematically the same thing as 'weight decay' in neural network training (Phase 2).",
    prompt: "What effect does L2 have on the weights?",
  },
  "validacion-cruzada": {
    name: "Cross-validation",
    lesson:
      "In k-fold cross-validation, you split the data into k parts, train k times using k-1 parts, and validate on the remaining one (rotating which part is held out). It gives a more reliable estimate of the model's real error than a single train/test split, especially with little data.",
    example: "With 5-fold CV on 100 data points: you train 5 times with 80 points, validate on the remaining 20 (rotating which ones), and average the error across the 5 runs.",
    relation:
      "The same principle of 'measure on data the model hasn't seen' shows up in the real-evaluation 'replay gate' used in applied RL (Phase 5, your own project).",
    prompt: "What problem does k-fold cross-validation solve?",
  },
  arboles: {
    name: "Decision trees",
    lesson:
      "A decision tree splits the data recursively, choosing at each node the feature and threshold that best separate the classes (or reduce the error), using criteria like Gini impurity or information gain. It's the basis of Random Forest and Gradient Boosting.",
    example: "To classify fruits by weight and color, the tree might split first on 'weight > 150g' if that question separates the classes better than asking about color first.",
    relation:
      "A direct contrast with neural networks (Phase 2): discrete rule-based partitioning vs. continuous feature transformation.",
    prompt: "How does a tree choose where to split a node?",
  },
  pca: {
    name: "Principal Component Analysis (PCA)",
    lesson:
      "PCA finds the directions (principal components) where the data varies the most, and projects the data onto those directions to reduce dimensions while losing as little information as possible. The first principal component is, mathematically, the eigenvector with the largest eigenvalue of the covariance matrix — it maximizes explained variance.",
    example: "In 2D data shaped like an ellipse stretched along a diagonal, the first principal component points along that diagonal; the second is perpendicular to it.",
    relation:
      "It directly uses SVD/eigenvalues (Phase 0); it generalizes to robust PCA (Phase 6) when the data has outliers/corruptions.",
    prompt: "What does the first principal component maximize?",
  },
  kmeans: {
    name: "K-means",
    lesson:
      "K-means groups data into k clusters by iterating two steps: (1) assign each point to the nearest centroid, (2) recompute each centroid as the average of the points assigned to it. It repeats until the centroids stop moving significantly.",
    example: "With k=2: you start with 2 random centroids, assign each point to the nearest one, recompute each centroid as the average of its points, and repeat until they stop changing.",
    relation:
      "An example of unsupervised learning, to contrast with the supervised classification (logistic regression, trees) from this same phase.",
    prompt: "How are the centroids updated in k-means?",
  },
  "sesgo-varianza": {
    name: "Bias-variance tradeoff",
    lesson:
      "A model's total error breaks down into bias (how poorly the model fits on average, from being too simple) and variance (how much predictions change if you change the training data, from being too complex). Lowering one typically raises the other — regularization and model complexity are the dials that control this.",
    example: "A linear model on data with a real curve has high bias (training error already high). A very deep tree with little data has low bias but high variance (it changes a lot across different training subsets).",
    relation:
      "The same tradeoff resurfaces formally in the generalization theory of infinite-width networks (Phase 6, kernel learning).",
    prompt: "What tradeoff does the bias-variance dilemma describe?",
  },

  // Fase 2
  perceptron: {
    name: "Perceptron",
    lesson:
      "The perceptron is the simplest artificial neuron: a weighted sum of inputs plus a bias, passed through a step function. A single perceptron can only separate classes with a straight line (linear boundary) — it can't solve non-linearly-separable problems like XOR, which is why layers need to be stacked.",
    example: "For the AND function (1 only if both inputs are 1), a simple perceptron works. For XOR (1 only if they differ), no straight line separates the classes — the simple perceptron fails.",
    relation:
      "Stacking many of them, with nonlinearities in between, is exactly what produces a deep neural network — the rest of this phase.",
    prompt: "What can't a simple perceptron solve?",
  },
  activaciones: {
    name: "Activation functions (ReLU = Rectified Linear Unit / sigmoid / tanh / GELU = Gaussian Error Linear Unit)",
    lesson:
      "Without a nonlinear function between layers, stacking linear layers would still just be one linear transformation. Sigmoid/tanh saturate (their derivative goes to zero) for large inputs, which slows learning in deep networks; ReLU (max(0,x)) doesn't saturate on the positive side, which is why it helps with vanishing gradients. GELU is a smooth version of ReLU used in Transformers.",
    example: "ReLU(-2)=0, ReLU(3)=3. Sigmoid(10)≈0.9999 (already nearly saturated, gradient≈0). tanh(0)=0, tanh(2)≈0.96.",
    relation:
      "Which one you choose directly affects the criticality of initialization (Phase 6); GELU is the one Transformers use (Phase 4).",
    prompt: "Why does ReLU help with the vanishing gradient?",
  },
  backprop: {
    name: "Backpropagation",
    lesson:
      "Backprop computes the gradient of the loss with respect to every weight in the network by applying the chain rule from the output back to the input, reusing intermediate computations — which is why it's far more efficient than computing each derivative separately.",
    example: "With loss L=(y-ŷ)² and ŷ=w·x: dL/dw = dL/dŷ · dŷ/dw = -2(y-ŷ)·x — two chain-rule steps chained together.",
    relation:
      "It's the chain rule (Phase 0) applied recursively; it's what makes it possible to train both CNNs/RNNs (this phase) and Transformers (Phase 4).",
    prompt: "What mathematical rule does backprop use?",
  },
  sgd: {
    name: "Stochastic Gradient Descent (SGD)",
    lesson:
      "'Batch' gradient descent computes the exact gradient using all the data before each step — accurate but slow. SGD (stochastic) updates the weights using just one example (or a mini-batch) per step: the gradient is noisy, but you take many more steps in the same time, and in practice it converges better and generalizes better.",
    example: "With 1000 examples and mini-batches of 32, one epoch does ~31 weight updates, instead of a single update using all 1000 points together.",
    relation:
      "It's gradient descent (Phase 0) with mini-batch noise; its version applied to a policy network is policy gradients (Phase 5).",
    prompt: "How does SGD differ from batch gradient descent?",
  },
  momentum: {
    name: "Momentum",
    lesson:
      "Momentum accumulates a running average of past gradients and uses it to update the weights, instead of just using the current gradient. This dampens zig-zagging on elongated loss surfaces and speeds up convergence in the consistent direction.",
    example: "With β=0.9: v = 0.9·v_previous + current_gradient, and the step is taken with v, not the raw gradient — like a ball picking up speed rolling downhill.",
    relation:
      "It's a component of Adam (next concept); conceptually similar to why PPO (Phase 5) avoids abrupt jumps in the policy.",
    prompt: "What problem of SGD does momentum address?",
  },
  adam: {
    name: "Adam optimizer",
    lesson:
      "Adam combines momentum (running average of the gradient) with a per-parameter adaptive learning rate (based on a running average of the squared gradient, like RMSProp). It's the default optimizer in most deep learning projects because it converges quickly without much manual tuning.",
    example: "Adam keeps, for each weight, a running average of the gradient AND a running average of the squared gradient — combining both at each step to decide the size and direction of the update.",
    relation:
      "The default optimizer for CNNs/RNNs (this phase) as well as Transformers (Phase 4) and policy networks in RL (Phase 5).",
    prompt: "What does the Adam optimizer combine?",
  },
  "init-pesos": {
    name: "Weight initialization",
    lesson:
      "If all weights start at zero, every neuron in a layer computes exactly the same thing and gets the same gradient — the network never breaks that symmetry and can't learn. That's why weights are initialized with small random values (schemes like Xavier/Glorot or He, calibrated to the layer size and activation used).",
    example: "He initialization for ReLU scales the weights by √(2/fan_in) — for a layer with 100 inputs, the initial weights are around ±0.14.",
    relation:
      "This connects directly to 'criticality' (Phase 6): the ideal initialization is the one that keeps variance stable from layer to layer.",
    prompt: "Why aren't weights initialized to zero?",
  },
  batchnorm: {
    name: "Batch normalization",
    lesson:
      "BatchNorm normalizes a layer's activations (subtracts the mean, divides by the standard deviation of the current mini-batch) before passing them to the next layer, then allows rescaling them with learned parameters. It stabilizes and speeds up training by keeping the activation distribution from shifting too much between layers and over the course of training.",
    example: "Mini-batch activations [2,4,6,8] (mean 5, std≈2.24) get normalized to [-1.34,-0.45,0.45,1.34] before being rescaled with the learned parameters.",
    relation:
      "A direct contrast with layer norm (Phase 4), which solves the same problem but normalizes per example instead of per batch.",
    prompt: "What does BatchNorm normalize, and at what point in the network?",
  },
  convolucion: {
    name: "Convolution (CNN)",
    lesson:
      "A convolution slides the same small filter (with the same weights) across the whole image, exploiting translational invariance: a pattern (like an edge) can be recognized no matter where it appears in the image, using far fewer parameters than a fully connected layer.",
    example: "A 3x3 edge filter like [[-1,0,1],[-1,0,1],[-1,0,1]] slid across an image highlights sharp horizontal intensity changes (vertical edges).",
    relation:
      "It's the 'grid' case of the general idea behind geometric deep learning (Phase 3): a local operation with shared weights.",
    prompt: "What invariance does convolution exploit?",
  },
  pooling: {
    name: "Pooling",
    lesson:
      "A pooling layer (max-pooling or average-pooling) reduces the spatial size of activation maps by summarizing small regions into a single value. It lowers computational cost and gives some invariance to small translations of the input.",
    example: "Max-pooling 2x2 over [[1,3],[2,4]] gives a single value: 4 (the max of that region).",
    relation:
      "An example of how CNNs gain invariance — contrast it with Transformers (Phase 4), which don't have this and need positional encoding instead.",
    prompt: "What does a pooling layer accomplish?",
  },
  rnn: {
    name: "Recurrent Neural Network (RNN)",
    lesson:
      "An RNN processes a sequence step by step, keeping a hidden state that gets updated at each step and summarizes what's been seen so far. The problem: when backpropagating through many steps (backprop through time), the gradient tends to vanish or explode, so plain RNNs 'forget' dependencies that are far back in the sequence.",
    example: "When processing 'the black cat runs', the hidden state after 'the' combines with 'cat' for the next state, and so on — the information from 'the' gets diluted layer by layer.",
    relation:
      "It contrasts directly with self-attention (Phase 4): the RNN processes sequentially, attention processes everything in parallel.",
    prompt: "What limitation do plain RNNs have with long sequences?",
  },
  lstm: {
    name: "LSTM (Long Short-Term Memory)",
    lesson:
      "LSTM adds a 'memory cell' separate from the hidden state, controlled by gates (forget, input, output) that learn when to keep, update, or discard information. That memory path with fewer nonlinear transformations is what mitigates the vanishing gradient of plain RNNs.",
    example: "When reading a long sentence, the forget gate can learn to 'close' when an idea ends and 'open' for the next one, preserving relevant information over many steps without diluting it.",
    relation:
      "It solves the same problem (vanishing gradient) that residual connections solve in very deep networks (Phase 4).",
    prompt: "What mechanism does LSTM use to mitigate the vanishing gradient?",
  },
  "vanishing-exploding": {
    name: "Vanishing / exploding gradient",
    lesson:
      "When backpropagating in a very deep network, the gradient is computed by multiplying many partial derivatives in a chain. If those factors are systematically less than 1, the product tends to zero (vanishing); if greater than 1, it tends to infinity (exploding) — in both cases, the earliest layers barely learn or training becomes unstable.",
    example: "If each layer multiplies the gradient by 0.5 and there are 20 layers, the gradient reaching the first layer is 0.5²⁰ ≈ 0.000001 — practically zero.",
    relation:
      "The same phenomenon gets analyzed formally through 'criticality' in Phase 6 (network initialization theory).",
    prompt: "Why does the vanishing gradient happen in deep networks?",
  },

  // Fase 3
  "cnn-extrinseca": {
    name: "Extrinsic CNN (Convolutional Neural Network, on 3D shapes)",
    lesson:
      "'Extrinsic' means the method processes the 3D shape relative to the ambient space it's embedded in (for example, a voxel grid or a point cloud with x,y,z coordinates), rather than working with the surface itself.",
    example: "Representing a 3D chair as a voxel grid (like pixels but in 3D) and applying standard 3D convolutions to it is an extrinsic approach.",
    relation:
      "A special case of the general geometric deep learning framework, which also covers grids (CNN, Phase 2) and complete graphs (attention, Phase 4).",
    prompt: "What does 'extrinsic' mean in this context?",
  },
  "cnn-intrinseca": {
    name: "Intrinsic CNN (Convolutional Neural Network)",
    lesson:
      "An intrinsic CNN operates directly on the surface of the shape (the mesh/manifold), using geometric properties native to that surface (geodesic distances, curvature) — it's invariant to how the shape is rotated or embedded in 3D space, unlike extrinsic methods.",
    example: "On a mesh of a human face, measuring distances by 'walking along the surface' (geodesics): the nose and cheek are close in a straight line through the air, but far apart walking across the skin.",
    relation:
      "It uses the graph/mesh Laplacian (later in this phase) to define operations invariant to the shape.",
    prompt: "What distinguishes an intrinsic CNN from an extrinsic one?",
  },
  "metodos-espectrales": {
    name: "Spectral methods on graphs",
    lesson:
      "The graph (or mesh) Laplacian operator is diagonalized to obtain its eigenvalues and eigenvectors — an equivalent of the Fourier transform but for graph-structured data. This allows defining filters/convolutions in the graph's 'frequency domain'.",
    example: "The eigenvectors of a social network graph's Laplacian can be used to detect communities (groups of nodes tightly connected to each other).",
    relation:
      "It directly uses the eigenvalues/eigenvectors from Phase 0, applied to a graph instead of an arbitrary matrix.",
    prompt: "What operator gets diagonalized in spectral methods?",
  },
  "laplaciano-grafo": {
    name: "Graph Laplacian",
    lesson:
      "A graph's Laplacian (L = D − A, degree minus adjacency) captures how each node connects to its neighbors. Its eigenvectors generalize Fourier's sine/cosine functions to a graph, and its eigenvalues indicate how 'smooth' or 'oscillating' a pattern is over that structure.",
    example: "For a triangle graph (3 nodes, all connected to each other): L = [[2,-1,-1],[-1,2,-1],[-1,-1,2]] — each node has degree 2 on the diagonal.",
    relation:
      "Its eigenvectors are the basis of spectral methods; conceptually it's the bridge toward thinking of attention (Phase 4) as an operation over a graph.",
    prompt: "What information does a graph's Laplacian capture?",
  },
  "atencion-como-conv": {
    name: "Attention as generalized convolution",
    lesson:
      "A convolution is a local operation with shared weights over a grid (each pixel looks at its fixed neighbors). The unifying idea of geometric deep learning is that self-attention is the same class of operation but over a complete graph (every token connected to every other), with weights that are also computed dynamically based on content, not fixed.",
    example: "In a 10-word sentence, self-attention lets the word 'it' attend directly to the word 8 positions back that it refers to — something a small convolution window can't do in a single step.",
    relation:
      "It's the direct bridge to self-attention in Phase 4 — the same idea of a 'local operation with shared weights,' generalized to the extreme.",
    prompt: "What structure does attention 'convolve' over?",
  },

  // Fase 4
  "self-attention": {
    name: "Self-attention (Q/K/V)",
    lesson:
      "Each token generates three vectors: Query (what I'm looking for), Key (what I offer), and Value (the content I contribute if attended to). A token's attention toward another is computed by comparing its Query with the other's Key (dot product, scaled by √d and passed through softmax), and the result weights the Values of all tokens.",
    example: "In 'the bank was closed', the token 'bank' compares its Query against the Keys of the other words (high similarity with 'closed') and weighs the Values to disambiguate that it's a financial institution, not a riverbank.",
    relation:
      "It generalizes convolution (Phase 2/3) to a complete graph; its softmax belongs to the same family of functions used in logistic regression (Phase 1) and RL policies (Phase 5).",
    prompt: "What do Query, Key, and Value represent?",
  },
  "multi-head": {
    name: "Multi-head attention",
    lesson:
      "Instead of computing a single attention, several are computed in parallel ('heads'), each with its own Q/K/V projections, and the results are then concatenated. Each head can learn to attend to a different type of relationship (syntactic, semantic, positional) in parallel.",
    example: "With 8 heads, one might specialize in subject-verb relations and another in pronoun coreference, both computed in parallel over the same input.",
    relation:
      "A direct extension of self-attention; conceptually similar to having several filters in parallel in a convolutional layer (Phase 2).",
    prompt: "Why use several attention heads instead of one?",
  },
  "pos-encoding-sin": {
    name: "Sinusoidal positional encoding",
    lesson:
      "Self-attention alone doesn't distinguish token order (it's a symmetric operation over the set). Sinusoidal positional encoding adds a vector made of sine/cosine functions of different frequencies to each token, based on its position, to inject that order information.",
    example: "Without positional encoding, 'dog bites man' and 'man bites dog' would produce the same attention representation — the encoding is what distinguishes each word's position.",
    relation:
      "It solves a problem that RNNs (Phase 2) don't have, since order comes for free there through sequential recurrence.",
    prompt: "Why does a Transformer need positional encoding?",
  },
  rope: {
    name: "RoPE (Rotary Position Embedding)",
    lesson:
      "RoPE encodes position by rotating the Query/Key vectors as a function of their position, instead of adding a fixed vector. This makes attention naturally depend on the relative distance between tokens, and it generalizes better to longer sequences than seen during training — which is why modern long-context LLMs prefer it.",
    example: "RoPE rotates a token's Query vector by an angle proportional to its position; the attention between two tokens ends up depending on the relative angle between them (the distance), not their absolute positions.",
    relation:
      "An evolution of sinusoidal positional encoding — today the standard in almost every modern decoder-only LLM.",
    prompt: "What advantage does RoPE have over the original sinusoidal encoding?",
  },
  "encoder-decoder": {
    name: "Encoder-decoder architecture",
    lesson:
      "The encoder processes the whole input sequence with full self-attention (every token sees every other). The decoder generates the output token by token, with 'masked' self-attention (each token only sees earlier ones) plus a cross-attention layer that queries the encoder's representations.",
    example: "To translate 'the cat' → 'el gato': the encoder processes 'the cat' completely; the decoder generates 'el' by querying the encoder, then 'gato' by seeing 'el' + querying the encoder again.",
    relation:
      "It generalizes the pre-Transformer idea of encoder-decoder RNNs (sequence to sequence), replacing recurrence with attention.",
    prompt: "What makes the decoder different from the encoder?",
  },
  "decoder-only": {
    name: "Decoder-only model (GPT-style)",
    lesson:
      "A decoder-only model drops the encoder entirely: it only has masked self-attention (each token sees only earlier ones) and is trained to predict the next token. That's enough for text generation because it doesn't need to 'translate' from one input sequence to another — it generates directly, conditioned on everything before it.",
    example: "Given 'The sky is', a decoder-only model predicts the next token ('blue') by looking only at the preceding words, and repeats the process token by token.",
    relation:
      "It's the architecture that gets fine-tuned with RLHF/PPO (Phase 5) to produce conversational assistants.",
    prompt: "Why is a decoder-only model enough for text generation?",
  },
  "encoder-only": {
    name: "Encoder-only model (BERT-style)",
    lesson:
      "An encoder-only model uses full self-attention (every token sees every other, including later ones) and is trained on tasks like predicting masked words. It suits comprehension/classification tasks (sentiment analysis, answer extraction) where you have the whole input available at once, not sequential text generation.",
    example: "BERT receives 'the cat [MASK] on the rug' seeing the WHOLE sentence (even what comes after the gap) to predict 'sleeps'.",
    relation:
      "A direct contrast with decoder-only: it sees the whole sequence at once, which is why it doesn't work for generating text token by token.",
    prompt: "What tasks is an encoder-only model best suited for?",
  },
  "layer-norm": {
    name: "Layer normalization",
    lesson:
      "Unlike BatchNorm (which normalizes across the batch, per feature), layer norm normalizes across the features, for each individual example. That makes it independent of batch size, which is key for Transformers usually trained on variable-length sequences.",
    example: "For a single token's activation vector [2,4,6,8] (mean 5), layer norm normalizes it using that vector's own mean/std — without looking at what other examples are in the batch.",
    relation:
      "It replaces batchnorm (Phase 2) in Transformers, precisely because it doesn't depend on batch size.",
    prompt: "What does layer norm normalize, unlike batch norm?",
  },
  "pre-post-norm": {
    name: "Pre-norm vs. post-norm",
    lesson:
      "In post-norm (the original Transformer paper's architecture), normalization comes after adding the residual connection. In pre-norm, it comes before, inside each sub-block. Pre-norm keeps gradients more stable in very deep networks because the residual path stays 'clean' (not passing through normalization), which prevents training from becoming unstable at many layers.",
    example: "Pre-norm computes x + Attention(Norm(x)); post-norm computes Norm(x + Attention(x)) — the difference looks small but changes stability a lot at 100+ layers.",
    relation:
      "It interacts directly with residual connections (next concept) — analyzed with mathematical rigor in Phase 6 (Residual Learning).",
    prompt: "Why does pre-norm help in very deep networks?",
  },
  residuales: {
    name: "Residual connections",
    lesson:
      "A residual connection adds a block's input directly to its output (output = input + F(input)), instead of just returning F(input). This gives the gradient a 'shortcut' to flow straight back without passing through every nonlinear transformation, which allows training much deeper networks without the gradient vanishing.",
    example: "If a block learned nothing useful, F(x)≈0 and the output x+F(x)≈x — the network can 'skip' useless blocks instead of losing the gradient through them.",
    relation:
      "The same mechanism as in ResNets (Phase 2, implicitly); its rigorous mathematical analysis lives in Phase 6 (Residual Learning, Roberts & Yaida).",
    prompt: "What problem do residual connections solve?",
  },
  "finetuning-variantes": {
    name: "SFT (Supervised Fine-Tuning) / LoRA (Low-Rank Adaptation) / QLoRA (Quantized LoRA) / RLHF (Reinforcement Learning from Human Feedback)",
    lesson:
      "SFT (supervised fine-tuning) retrains all or nearly all of the model's weights with labeled examples. LoRA freezes the original weights and only trains small low-rank matrices added to them — much cheaper in memory. QLoRA does the same but with the base model quantized (lower numerical precision) to cut costs further. RLHF adjusts the model with reinforcement learning using a reward signal learned from human preferences.",
    example: "To adapt a 7B-parameter LLM to a specific domain with a single small GPU, LoRA might train only ~0.1% of the parameters (small matrices) instead of the full 7B.",
    relation:
      "RLHF connects directly to all of Phase 5 (policy gradients, PPO) — it's RL applied to fine-tuning an already-trained Transformer.",
    prompt: "When would you choose LoRA over full fine-tuning?",
  },

  // Fase 5
  mdp: {
    name: "Markov Decision Process (MDP)",
    lesson:
      "An MDP is defined by: a set of states, a set of actions, a transition function (probability of reaching a state given the current state and action), and a reward function. The Markov property says the future depends only on the current state, not on how you got there.",
    example: "In a 4x4 grid: states = the 16 cells; actions = {up,down,left,right}; deterministic transition (moving in that direction); reward = +1 on reaching the goal, 0 otherwise.",
    relation:
      "The base framework on which Q-learning, policy gradients, and everything else in this phase is built.",
    prompt: "What components define an MDP?",
  },
  "funcion-valor": {
    name: "Value function",
    lesson:
      "V(s) estimates the total expected reward (discounted over time) you'll get starting from state s, if you follow a given policy. It's a way to summarize 'how good is it to be in this state' without simulating the whole future every time.",
    example: "In the grid, V(cell next to the goal) is high (close to +1 discounted); V(a far cell) is lower because the reward arrives discounted over many steps.",
    relation:
      "It relates to Q (next concept): V(s) is, essentially, the expected value of Q over the actions the policy would take.",
    prompt: "What does a state's value function measure?",
  },
  "funcion-q": {
    name: "Action-value function (Q-function)",
    lesson:
      "Q(s,a) estimates the total expected reward if you take action a in state s and follow the policy from then on. Unlike V(s), Q directly tells you which action is best in each state, without needing a model of the transitions.",
    example: "At an intersection where you can go 'straight' or 'turn', Q(state,straight) and Q(state,turn) directly tell you which action yields more future reward, without comparing V of the resulting states.",
    relation:
      "It's what Q-learning and DQN learn; its neural-network version is exactly deep learning (Phase 2) applied to RL.",
    prompt: "How does Q differ from the value function V?",
  },
  bellman: {
    name: "Bellman equation",
    lesson:
      "Expresses a state's value as the immediate reward plus the discounted value of the next state: V(s) = E[r + γ·V(s')]. It's a recursive relationship — the value of the entire future can be computed in terms of the value 'one step ahead', which is the foundation of nearly every RL algorithm.",
    example: "If you're one step from the goal with reward 10 and γ=0.9: V(s) = 10 + 0.9·V(goal).",
    relation:
      "The equation behind dynamic programming, Q-learning, SARSA, and DQN — everything else in this phase is just a different way of solving it.",
    prompt: "What recursive relationship does the Bellman equation express?",
  },
  "prog-dinamica": {
    name: "Dynamic programming",
    lesson:
      "Requires knowing the full MDP model (transition and reward probabilities) to solve the Bellman equation exactly, iterating over all states. Monte Carlo and TD, by contrast, learn purely from experience (simulated or real episodes), without needing that model.",
    example: "With the grid's transition probabilities known, you can solve the system of Bellman equations for the 16 cells directly, without simulating a single episode.",
    relation:
      "It requires the full MDP model; Monte Carlo and TD (next concepts) are the alternatives when you don't have it.",
    prompt: "What does dynamic programming require that Monte Carlo doesn't?",
  },
  "monte-carlo": {
    name: "Monte Carlo methods",
    lesson:
      "Monte Carlo updates a state's value only at the end of a full episode, using the total reward actually obtained from that state onward. It's simple and unbiased, but has to wait for the episode to end and has high variance.",
    example: "You play a full episode of the grid, record the total reward obtained from each visited state, and average those returns over many episodes to estimate V(s).",
    relation:
      "It combines with TD (next concept) to yield modern methods; compare it with how self-play (later on) generates those training episodes.",
    prompt: "When does Monte Carlo update a state's value?",
  },
  "td-learning": {
    name: "Temporal Difference (TD) learning",
    lesson:
      "TD updates a state's value using the immediate reward plus the current estimate of the next state's value (bootstrapping), without waiting for the episode to end — combining dynamic programming's step-by-step update with Monte Carlo's learning from experience.",
    example: "TD(0): V(s) ← V(s) + α·[r + γ·V(s') − V(s)] — updated as soon as a step is taken, using your own estimate of V(s'), without waiting for the episode's end.",
    relation:
      "It's the foundation of Q-learning and SARSA (next two concepts) — both are TD variants applied to the Q-function.",
    prompt: "What does TD combine from Monte Carlo and dynamic programming?",
  },
  "q-learning": {
    name: "Q-learning",
    lesson:
      "Q-learning learns Q(s,a) by updating toward the best possible action in the next state, regardless of which action the agent actually took there (max over a'). That's why it's off-policy: it can learn the optimal policy while behaving in an exploratory/different way.",
    example: "Q(s,a) ← Q(s,a) + α·[r + γ·max_a' Q(s',a') − Q(s,a)] — uses the BEST Q of the next state, regardless of the action actually taken there.",
    relation:
      "Being off-policy, it can be combined with a replay buffer (see DQN, later) — something an on-policy algorithm like SARSA can't do as directly.",
    prompt: "Is Q-learning on-policy or off-policy?",
  },
  sarsa: {
    name: "SARSA (State-Action-Reward-State-Action)",
    lesson:
      "SARSA updates Q(s,a) using the action the agent will actually take next (according to its own policy, including exploration), not the best possible action. That's why it's on-policy — it learns the value of the policy it's actually following, not the optimal one.",
    example: "Q(s,a) ← Q(s,a) + α·[r + γ·Q(s',a') − Q(s,a)] — uses the Q of the action a' that will actually be taken (exploration included), not the maximum possible.",
    relation:
      "A direct contrast with Q-learning; PPO (later in this phase) is also on-policy, for the same structural reason.",
    prompt: "How does SARSA differ from Q-learning?",
  },
  "policy-gradients": {
    name: "Policy gradients",
    lesson:
      "Instead of learning values and deriving a policy from them, policy gradients parametrize the policy directly (for example, with a neural network) and adjust its parameters with gradient descent to maximize expected reward — raising the probability of actions that led to good reward.",
    example: "If the action 'right' led to good reward, the probability of choosing 'right' in that state is directly increased, without going through estimating Q or V first.",
    relation:
      "It's the foundation of actor-critic and PPO (next concepts); it uses the same gradient descent from Phase 0/2, but applied to a policy network.",
    prompt: "What gets optimized directly in policy gradients?",
  },
  "actor-critico": {
    name: "Actor-critic",
    lesson:
      "The 'actor' is the policy that picks actions; the 'critic' is a value function that evaluates how good that choice was, giving a lower-variance signal than using the full Monte Carlo return. The actor is updated using that critic evaluation instead of waiting for the episode's final outcome.",
    example: "The actor proposes 'go left'; the critic evaluates 'that action is worth +2 more than this state's average' — that advantage is what adjusts the actor.",
    relation:
      "It combines policy gradients with a value function (Q or V, earlier concepts) — the critic directly reuses Bellman/TD from this same phase.",
    prompt: "What role does the 'critic' play?",
  },
  dqn: {
    name: "Deep Q-Networks (DQN)",
    lesson:
      "DQN approximates Q(s,a) with a neural network instead of a table, to handle huge state spaces (like a video game's pixels). The replay buffer stores past transitions and trains on random samples from it (not just the latest one), breaking the temporal correlation between consecutive steps and stabilizing training.",
    example: "To play Breakout from pixels, DQN stores millions of transitions (state,action,reward,next state) and trains on random mini-batches from there, not on the move that just happened.",
    relation:
      "It applies deep learning (Phase 2) to Q-learning; the replay buffer works precisely because Q-learning is off-policy.",
    prompt: "What is the replay buffer for in DQN?",
  },
  ppo: {
    name: "PPO (Proximal Policy Optimization)",
    lesson:
      "PPO is a policy gradient method that limits ('clips') how much the policy can change on each update relative to the previous policy. This avoids overly large steps that could collapse training, keeping it stable without needing the more complex math of methods like TRPO.",
    example: "If the new policy would want to increase an action's probability 5x, PPO clips it to a range like 1.2x, to avoid a jump that derails training.",
    relation:
      "The algorithm behind RLHF (Phase 4) — this is how modern LLMs get fine-tuned with human feedback.",
    prompt: "What does PPO limit in order to stabilize training?",
  },
  "self-play": {
    name: "Self-play",
    lesson:
      "The agent trains by playing against versions of itself (past or current). As it improves, its opponent (itself) also improves, automatically generating a curriculum of increasing difficulty without needing a hand-designed external opponent.",
    example: "In pokemon-tcg-ai, the DRSF framework trains FocusNet by playing against earlier versions of itself, instead of a fixed opponent — the challenge scales up automatically with the agent.",
    relation:
      "It's used together with PUCT (next concept) in pokemon-tcg-ai to train without a hand-designed external opponent.",
    prompt: "Why does self-play generate an automatic curriculum?",
  },
  puct: {
    name: "PUCT search (Predictor + Upper Confidence bound applied to Trees)",
    lesson:
      "PUCT (used in AlphaZero) combines tree search similar to MCTS (Monte Carlo Tree Search) with a neural network that provides two things: a prior policy (which moves to explore first) and a value estimate (so you don't have to simulate to the end of the game). That makes the search much more efficient than pure MCTS with random rollouts.",
    example: "In pokemon-tcg-ai, PUCT search uses FocusNet to suggest which moves to explore first (policy head) and to evaluate positions without playing to the end (value head).",
    relation:
      "It combines deep learning (Phase 2, the network provides policy+value) with tree search — the technical core of your pokemon-tcg-ai project.",
    prompt: "What does PUCT combine (unlike pure MCTS)?",
  },
  nash: {
    name: "Nash equilibrium",
    lesson:
      "A set of strategies (one per player) is a Nash equilibrium if no player can improve their outcome by unilaterally changing their own strategy, given that the others keep theirs. It's the central 'stability' concept in multi-agent game theory.",
    example: "In rock-paper-scissors, playing each option with probability 1/3 is the Nash equilibrium — any fixed strategy other than that can be exploited by the opponent.",
    relation:
      "It's the target that CFR (next concept) iteratively works toward, and that exploitability (later on) measures how far you are from reaching.",
    prompt: "What condition defines a Nash equilibrium?",
  },
  cfr: {
    name: "CFR (Counterfactual Regret Minimization)",
    lesson:
      "CFR iteratively minimizes 'counterfactual regret' — how much better off a player would have been in the past had they played differently at each decision point, assuming the rest of the game stays the same. Minimizing that accumulated regret converges, on average, to a Nash equilibrium. It's the algorithm family behind the best poker bots (Libratus, Pluribus).",
    example: "In pokemon-tcg-ai, Best Response + deep CFR were used to measure how far the heuristic policy is from the Nash equilibrium — they found a real gap of +0.157 in exploitability.",
    relation:
      "A tool for approaching Nash equilibrium; in your project it was used together with Best Response to measure the real gap to Nash.",
    prompt: "What does CFR iteratively minimize?",
  },
  exploitability: {
    name: "Exploitability",
    lesson:
      "Measures how much a perfect opponent (playing the best possible response) could beat your policy by, compared to equilibrium. Zero exploitability means you're playing an exact Nash equilibrium — no one can exploit you.",
    example: "If your policy has an exploitability of 0.15, a perfect opponent would beat you by 0.15 reward units more on average than an equilibrium player would.",
    relation:
      "The metric that summarizes whether CFR/Nash was reached; it was used in your project to confirm where the heuristic agent falls short.",
    prompt: "What does a policy's exploitability measure?",
  },
  aivat: {
    name: "AIVAT (agent-evaluation variance-reduction technique — the name comes from the paper's title, not a standard spelled-out acronym)",
    lesson:
      "AIVAT is a variance-reduction technique for evaluating agents in games with a lot of randomness (like poker): it subtracts a 'control variate' computed from the expected value under a model of the game, so the observed result gets cleaned of random noise without biasing the estimate. It lets you compare two agents with far fewer games than you'd need without that correction.",
    example: "In pokemon-tcg-ai, AIVAT-Nash was used to compare two deck variants with far fewer simulated games than would be needed without that variance reduction.",
    relation:
      "It relies on CRN (next concept) and a model of the game to clean out noise when comparing agents.",
    prompt: "What is AIVAT used for in agent evaluation?",
  },
  crn: {
    name: "Common Random Numbers (CRN)",
    lesson:
      "When comparing two agent variants, CRN uses the exact same sequence of random numbers (same cards, same random events) for both simulations. That way, the observed difference between the two results is due only to the real difference between the agents, not to one of them getting luckier — it drastically reduces the variance of the (paired A/B) comparison.",
    example: "In pokemon-tcg-ai, CRN reduced the standard error (SEM) by 15-20% in real matchup comparisons — the same cards dealt for both variants being compared.",
    relation:
      "It's used together with AIVAT to evaluate agent variants with fewer games — the statistical basis of any serious A/B comparison in RL.",
    prompt: "Why does CRN reduce variance when comparing two variants?",
  },

  // Fase 6
  "rg-flow": {
    name: "RG flow (Renormalization Group flow) / NTK (Neural Tangent Kernel)",
    lesson:
      "Renormalization group flow (borrowed from statistical physics) describes how a network's activation statistics transform layer by layer, as if each layer were a renormalization 'step'. The Neural Tangent Kernel (NTK) describes how the function computed by the network evolves during training, in the limit of very wide networks.",
    example: "In a network with many layers, RG flow describes how the variance of the preactivations (before the nonlinearity) transforms layer by layer, analogous to how a physical system changes scale.",
    relation:
      "It formally explains why 'critical' initialization (next concept) avoids vanishing/exploding gradients — the rigorous version of a problem already seen in Phase 2.",
    prompt: "What does renormalization group flow describe in networks?",
  },
  criticidad: {
    name: "Criticality (initialization)",
    lesson:
      "A 'critical' initialization is one where the variance of the activations (and the gradient) neither systematically grows nor shrinks as it passes through the layers — it stays stable. Moving away from that critical point is exactly what causes vanishing or exploding gradients in very deep networks.",
    example: "With critical initialization, activation variance stays ~1 at layer 1, layer 50, and layer 100. Off that point, it might drop to 0.0001 by layer 100 (vanishing).",
    relation:
      "It's the formal version, with field-theory math, of the practical rule from Phase 2: 'don't initialize the weights to zero.'",
    prompt: "Why does critical initialization prevent exploding/vanishing gradients?",
  },
  "bayesian-nn": {
    name: "Bayesian neural networks",
    lesson:
      "Instead of learning a single optimal value for each weight, the Bayesian approach keeps a probability distribution over possible weights. 'Infinite width' refers to the theoretical result that a network with infinitely many neurons per layer, under random initialization, behaves like a Gaussian Process — a much more analytically tractable mathematical object.",
    example: "An infinitely wide network with random weights behaves, before training, exactly like a Gaussian Process — its behavior can be computed with linear algebra, without training anything.",
    relation:
      "It connects the probability/Bayes material from Phase 0 to neural networks; the infinite-width limit is what makes that analysis tractable.",
    prompt: "What does 'infinite width' mean in this context?",
  },
  "sparse-models": {
    name: "Sparse models",
    lesson:
      "Finding the sparsest solution (with the fewest nonzero values) that explains the data is, in its exact form, a very hard combinatorial problem (minimizing the ℓ0 norm). It's relaxed to minimizing the ℓ1 norm (sum of absolute values), which is convex and, under certain conditions, gives the same sparse solution you were looking for with ℓ0.",
    example: "From a signal with 1000 values where only 10 are nonzero: solving 'minimize ℓ0' is NP-hard; solving the same problem with ℓ1 (convex) recovers the same sparse solution under reasonable conditions.",
    relation:
      "It uses the same ℓ0→ℓ1 relaxation as L1 regularization from Phase 1, but applied to signal recovery instead of preventing overfitting.",
    prompt: "Which norm gets relaxed from ℓ0 to ℓ1 in sparse recovery?",
  },
  "compressed-sensing": {
    name: "Compressed sensing",
    lesson:
      "Allows reconstructing a sparse signal from far fewer measurements than classical (Nyquist) sampling dictates, as long as the measurement matrix satisfies the Restricted Isometry Property (RIP): that it approximately preserves distances between sparse vectors, without collapsing them together.",
    example: "An MRI image that's sparse in a certain basis can be reconstructed with far fewer measurements than classical sampling requires, if the measurement matrix satisfies RIP.",
    relation:
      "It applies sparse models (previous concept) to the concrete problem of reconstructing signals from few measurements.",
    prompt: "What property must a matrix satisfy to guarantee recovery (RIP)?",
  },
  "robust-pca": {
    name: "Robust PCA",
    lesson:
      "Classical PCA assumes all the data follows the low-dimensional structure — a single corrupted data point can ruin the estimate. Robust PCA decomposes the data matrix into a low-rank part (the real structure) plus a sparse part (outliers/corruptions), recovering both separately.",
    example: "In a surveillance video with a fixed background (low-rank) and a moving person (sparse), robust PCA automatically separates the static background from the moving person.",
    relation:
      "It generalizes PCA from Phase 1 by combining low-rank + sparse — the two central ideas of this same phase, in a single method.",
    prompt: "What does robust PCA decompose, unlike classical PCA?",
  },

  // Fase 7
  "sft-vs-rlhf": {
    name: "SFT (Supervised Fine-Tuning) vs. RLHF (Reinforcement Learning from Human Feedback) vs. DPO (Direct Preference Optimization) vs. GRPO (Group Relative Policy Optimization) vs. RLAIF (Reinforcement Learning from AI Feedback)",
    lesson:
      "SFT trains on (prompt, ideal response) pairs labeled by humans. RLHF trains a reward model from human preferences and then optimizes the model with RL (typically PPO) against that reward. DPO achieves a similar effect to RLHF but optimizes directly over preference pairs, without training a reward model or running RL — simpler and more stable. GRPO avoids needing a separate value network by comparing a group of responses against each other. RLAIF replaces human feedback with feedback from another AI model.",
    example: "To teach the FORMAT of a response, SFT is enough. To fine-tune subtleties of which response people prefer among several equally correct ones, you need preference modeling + DPO or RLHF.",
    relation:
      "RLHF is exactly PPO (Phase 5) applied to a Transformer (Phase 4); DPO achieves a similar effect without actually running RL.",
    prompt: "When would you prefer DPO over classic RLHF?",
  },
  "reward-modeling": {
    name: "Reward modeling",
    lesson:
      "A reward model is trained from human comparisons (this response is better than that one) to predict how 'good' a response is according to human preference. That learned signal is then used as the reward to optimize the main model with RL.",
    example: "The reward model is shown 2 responses to the same question labeled 'A was preferred by the human' — it learns to score A higher than B.",
    relation:
      "It's the first step of RLHF (Phase 5/4) — without a good reward model, PPO has nothing to optimize against.",
    prompt: "What does a reward model learn?",
  },
  "preference-modeling": {
    name: "Preference modeling",
    lesson:
      "Instead of asking a human to score a response with a number (hard to calibrate consistently), you ask them to compare two responses and pick which one they prefer. That pairwise preference data is easier to collect reliably and is the typical input for both reward modeling and DPO.",
    example: "Instead of 'rate this response 1 to 10', you ask 'of these two, which do you prefer?' — much more consistent across different human raters.",
    relation:
      "The input data for both reward modeling (previous concept) and DPO (within SFT vs. RLHF).",
    prompt: "What kind of training data does preference modeling use?",
  },
  "ml-system-design": {
    name: "ML system design end-to-end",
    lesson:
      "A typical production ML pipeline has 4 stages: data ingestion/preparation, training (including validation and model selection), online inference (serving, with a focus on latency and cost), and monitoring/retraining (detecting model degradation and updating it). In an interview, what's being evaluated is whether you can reason about the trade-offs between stages, not whether you can memorize a diagram.",
    example: "Recommendation system: (1) ingestion = click logs; (2) training = retrain every night; (3) inference = serve in <100ms; (4) monitoring = alert if real CTR (Click-Through Rate) drops relative to offline.",
    relation:
      "It applies to anything built in the earlier phases — a CNN, Transformer, or RL agent all need this same pipeline to reach production.",
    prompt: "Name the 4 stages of a production ML pipeline.",
  },
  "on-off-policy": {
    name: "On-policy vs. off-policy",
    lesson:
      "An on-policy algorithm learns about the policy it's actually using to act (example: SARSA, PPO). An off-policy one can learn about a different policy than the one it uses to explore/act (example: Q-learning, DQN) — which is why it can reuse old experience stored in a replay buffer.",
    example: "SARSA (on-policy) learns about the policy that explores with ε-greedy; Q-learning (off-policy) can learn the optimal policy using data recorded from any past policy.",
    relation:
      "The same Q-learning (off) vs. SARSA (on) distinction from Phase 5, now framed as a typical interview question.",
    prompt: "Give an example of an on-policy algorithm and an off-policy one.",
  },
  "exploracion-explotacion": {
    name: "Exploration vs. exploitation",
    lesson:
      "Exploiting means taking the action you currently believe is best; exploring means trying other actions to find out if there's something better you don't know about yet. Two common strategies: ε-greedy (exploring randomly a fraction ε of the time) and Thompson sampling (choosing based on a belief distribution over how good each action is, refined by evidence).",
    example: "With ε-greedy and ε=0.1, the agent picks the best known action 90% of the time and a random action the remaining 10%, to keep discovering possibly better options.",
    relation:
      "The same dilemma that ε-greedy addresses in Q-learning and that policy noise addresses in policy gradients (Phase 5).",
    prompt: "Name 2 strategies for handling this tradeoff.",
  },
  "quadratic-attention": {
    name: "Quadratic attention complexity",
    lesson:
      "Every token has to compute its attention against every other token in the sequence, so the cost (in time and memory) grows with the square of the sequence length (O(n²)). Doubling the context length quadruples the cost — which is why more efficient attention variants exist (sparse, linear, windowed) for very long contexts.",
    example: "With 1000 tokens, the attention matrix has 1,000,000 entries; with 10,000 tokens (10x more), it has 100,000,000 — the cost multiplied by 100, not 10.",
    relation:
      "A direct limitation of self-attention (Phase 4) — the reason efficient attention variants exist for long context.",
    prompt: "Why does attention scale poorly with long sequences?",
  },

  // Fase 8 — papers
  alphago: {
    name: "AlphaGo (Silver et al., 2016, Nature)",
    lesson:
      "\"Mastering the game of Go with deep neural networks and tree search.\" Combined, for the first time, a policy network (pretrained on human games, refined with self-play) and a separate value network, guiding a Monte Carlo Tree Search (MCTS). Beat human champion Lee Sedol in 2016.",
    example: "AlphaGo used two separate networks (policy and value), trained in different stages and starting from human data — unlike FocusNet in pokemon-tcg-ai, which combines both heads in a single shared network, trained without human data.",
    relation:
      "It's the direct ancestor of AlphaGo Zero and AlphaZero (next concepts), and of the policy+value architecture FocusNet uses in your project (Phase 5).",
    prompt: "What two networks did AlphaGo combine, and what data did it start training from?",
  },
  "alphago-zero": {
    name: "AlphaGo Zero (Silver et al., 2017, Nature)",
    lesson:
      "\"Mastering the game of Go without human knowledge.\" Eliminated the need for human data entirely — it learned from scratch by playing against itself (pure self-play), using a search guided by a single policy+value network (what we now call PUCT). Surpassed the original AlphaGo.",
    example: "This paper formally introduced the search variant we now call PUCT — the same algorithm family used by pokemon-tcg-ai.",
    relation:
      "It introduces exactly the PUCT + self-play algorithm you already studied in Phase 5, now with its original source.",
    prompt: "What did AlphaGo Zero eliminate compared to the original AlphaGo?",
  },
  alphazero: {
    name: "AlphaZero (Silver et al., 2018, Science)",
    lesson:
      "\"A general reinforcement learning algorithm that masters chess, shogi and Go through self-play.\" Generalized AlphaGo Zero into a single algorithm (with no game-specific knowledge beyond the rules) that mastered chess, shogi, and Go, all trained via pure self-play from scratch.",
    example: "The generic pattern 'neural network (policy+value) + PUCT + self-play' from AlphaZero is exactly what FocusNet + the self-play framework (DRSF) replicate in pokemon-tcg-ai, applied to the Pokémon TCG instead of a classic board game.",
    relation:
      "It's the paper that formalizes the general pattern your project adapts to the Pokémon TCG.",
    prompt: "What did AlphaZero generalize compared to AlphaGo Zero?",
  },
  "cfr-original": {
    name: "CFR (Zinkevich, Johanson, Bowling & Piccione, 2007, NeurIPS)",
    lesson:
      "\"Regret Minimization in Games with Incomplete Information.\" Introduced the CFR algorithm — the first practical technique for approaching a Nash equilibrium in imperfect-information games (like poker) through iterative counterfactual regret minimization.",
    example: "Classical CFR needs to visit and store values for EVERY decision point in the game — infeasible for a game as large as the Pokémon TCG, hence the need for Deep CFR.",
    relation:
      "It's the original paper behind the CFR concept you already saw in Phase 5 — there you applied it, here you learn where it came from.",
    prompt: "What problem did the original CFR solve for the first time?",
  },
  "deep-cfr": {
    name: "Deep CFR (Brown, Lerer, Gross & Sandholm, 2019, ICML)",
    lesson:
      "\"Deep Counterfactual Regret Minimization.\" Replaces CFR's giant lookup tables with neural networks that approximate the regret values, allowing CFR to be applied to games too large for the tabular version.",
    example: "pokemon-tcg-ai specifically used deep CFR (not tabular CFR) to compute exploitability — precisely because the Pokémon TCG is too large for classical CFR.",
    relation:
      "It's the scalable version of CFR your project actually used — Phase 5 already showed you the concrete result (a +0.157 gap in exploitability).",
    prompt: "What does Deep CFR replace compared to classic tabular CFR?",
  },
  libratus: {
    name: "Libratus (Brown & Sandholm, 2017/2018, Science)",
    lesson:
      "\"Superhuman AI for heads-up no-limit poker: Libratus beats top professionals.\" First AI to decisively beat human professionals at heads-up no-limit poker (2 players), using large-scale CFR plus a real-time subgame-solving phase during play.",
    example: "Showed that CFR could scale to games with huge information spaces — the direct motivation for trying the same ideas on other complex card games like the Pokémon TCG.",
    relation:
      "It's one of two milestones (along with Pluribus) that demonstrated CFR works at superhuman scale — the motivation for using CFR in your project.",
    prompt: "What did Libratus achieve for the first time?",
  },
  pluribus: {
    name: "Pluribus (Brown & Sandholm, 2019, Science)",
    lesson:
      "\"Superhuman AI for multiplayer poker.\" Extended Libratus's ideas to 6-player poker (multi-agent, not just 1-on-1) — much harder because Nash equilibrium theory is weaker with more than 2 players — and still achieved superhuman level with far less compute than Libratus.",
    example: "Relevant to pokemon-tcg-ai because the TCG, like multiplayer poker, doesn't have the clean theoretical guarantees of 2-player games — you can still measure exploitability in practice.",
    relation:
      "It extends Libratus's ideas to more than 2 players — a reminder that Nash equilibrium (Phase 5) is a harder target to guarantee the more players there are.",
    prompt: "Why was Pluribus harder to achieve than Libratus?",
  },
  "aivat-paper": {
    name: "AIVAT (Burch, Schmid, Moravčík, Bowling et al.)",
    lesson:
      "\"AIVAT: A New Variance Reduction Technique for Agent Evaluation in Imperfect-Information Games.\" Proposes subtracting a control variate (computed from a model of the game) from each game's observed result, to remove much of the noise caused by randomness (the cards dealt) without biasing the estimate of the agent's true performance.",
    example: "It's the technique pokemon-tcg-ai applied as 'AIVAT-Nash' to compare deck variants with far fewer simulated games than would otherwise be needed.",
    relation:
      "It's the paper behind AIVAT, which you already saw in Phase 5 — together with CRN, the real statistical basis for how your project was evaluated.",
    prompt: "What does AIVAT subtract from a game's observed result, and why?",
  },
};

export const enPhases: Record<string, { title: string; synthesis: string }> = {
  "fase-0": {
    title: "Foundational math",
    synthesis:
      "In practice, these concepts combine like this: you represent data as vectors/matrices, define a loss function (often derived from MLE under a probability distribution), compute its gradient (derivatives + chain rule), and use gradient descent to minimize it — checking with the Hessian/convexity whether that minimum is trustworthy. All of this is the engine behind every ML model that comes after.",
  },
  "fase-1": {
    title: "Classical ML",
    synthesis:
      "The typical flow: you choose a model (linear/logistic regression or trees), train it by minimizing its loss, and use regularization (L1/L2) + cross-validation to control the bias-variance tradeoff and avoid overfitting. PCA/k-means are the tools for when you don't have labels (unsupervised learning).",
  },
  "fase-2": {
    title: "Neural Networks / Deep Learning",
    synthesis:
      "A network is trained like this: you initialize the weights (without breaking symmetry), run a forward pass through layers + nonlinear activations (convolution/pooling for images, or RNN/LSTM for sequences), compute the loss, run backprop (the chain rule) to get gradients, and update the weights with SGD/Adam — using batchnorm and watching out for vanishing/exploding gradients so this works across many layers.",
  },
  "fase-3": {
    title: "Geometric Deep Learning / GNNs",
    synthesis:
      "The idea running through this whole phase: you take a local operation with shared weights (like convolution) and generalize it to non-Euclidean structures (3D meshes, graphs) using the Laplacian/spectral methods — laying the conceptual groundwork for understanding attention as the most general case of all (a complete graph).",
  },
  "fase-4": {
    title: "Transformers",
    synthesis:
      "A Transformer combines: multi-head self-attention (with positional encoding/RoPE to know the order) + residual connections + layer norm (in pre-norm or post-norm), stacked many times, in an encoder-decoder, decoder-only, or encoder-only architecture depending on the task. After pretraining, it's fine-tuned with SFT/LoRA/RLHF depending on how subtle the desired behavior is.",
  },
  "fase-5": {
    title: "Reinforcement Learning",
    synthesis:
      "The full RL cycle: you define the MDP, and learn V/Q by solving Bellman — with dynamic programming if you know the model, or with Monte Carlo/TD if you learn from experience (off-policy Q-learning, on-policy SARSA). With large spaces, you approximate Q with a network (DQN) or parametrize the policy directly (policy gradients, actor-critic, PPO). In multi-agent games, self-play + search (PUCT) generate the opponent, and Nash/CFR/exploitability/AIVAT/CRN are the tools for measuring how good your policy really is — exactly the combo your pokemon-tcg-ai project uses.",
  },
  "fase-6": {
    title: "Advanced electives",
    synthesis:
      "These electives share one question: why does deep learning work? RG flow/criticality explain initialization; Bayesian learning explains generalization in the infinite-width limit; sparse models/compressed sensing/robust PCA explain why high-dimensional data usually has exploitable low-dimensional structure.",
  },
  "fase-7": {
    title: "Interview preparation",
    synthesis:
      "In an interview, these concepts combine into design questions: you'll be asked to choose between SFT/DPO/RLHF/GRPO depending on the goal, to explain the end-to-end ML pipeline, and to handle on/off-policy and exploration/exploitation vocabulary fluently — not to recite isolated definitions.",
  },
  "fase-8": {
    title: "The papers behind pokemon-tcg-ai",
    synthesis:
      "This phase isn't new theory — it's the real paper lineage behind the techniques you already used in Phase 5. AlphaGo → AlphaGo Zero → AlphaZero established the 'policy+value network + PUCT + self-play' pattern. In parallel, CFR → Deep CFR → Libratus → Pluribus established how to approach a Nash equilibrium in imperfect-information games at real scale. AIVAT is the evaluation piece that connects both worlds. pokemon-tcg-ai combines ideas from both families: AlphaZero's architecture (FocusNet + PUCT) for playing, and the CFR/AIVAT family's tools for measuring how close to equilibrium it is.",
  },
};
