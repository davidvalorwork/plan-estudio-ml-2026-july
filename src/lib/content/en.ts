// Versión en inglés de nombre/lección/ejemplo de cada concepto — para practicar el
// vocabulario tal como aparece en papers/docs/entrevistas reales, y para que el botón de
// audio (Web Speech API, en-US) tenga un texto real que leer. `relation` y `prompt` quedan
// solo en español por ahora (alcance acotado). Redacción propia — no traducción literal de
// ningún libro puntual, son las mismas explicaciones técnicas re-expresadas en inglés.

export type EnContent = { name: string; lesson: string; example: string };

export const en: Record<string, EnContent> = {
  // Fase 0
  vectores: {
    name: "Vectors and vector spaces",
    lesson:
      "A vector is an ordered list of numbers representing a magnitude with direction (or, in ML, a data point with several features). A vector space is the set of all possible vectors of that size, together with two operations that keep you inside the set: adding two vectors, and multiplying a vector by a scalar.",
    example: "v=(3,4) has norm ‖v‖=√(3²+4²)=5. Adding (3,4)+(1,2)=(4,6). Scaling 2·(3,4)=(6,8).",
  },
  matrices: {
    name: "Matrices and operations",
    lesson:
      "A matrix is a table of numbers, but the important part in ML is seeing it as a function: multiplying a vector by a matrix transforms that vector (rotates it, scales it, projects it). A neural network layer, without the activation, is literally a matrix multiplication.",
    example: "The 90° rotation matrix [[0,-1],[1,0]] applied to the vector (1,0) gives (0,1) — it rotated the vector 90° counterclockwise.",
  },
  autovalores: {
    name: "Eigenvalues / eigenvectors",
    lesson:
      "An eigenvector of a matrix is a vector that, when transformed by that matrix, doesn't change direction — it only stretches or shrinks. That stretching factor is the associated eigenvalue. Finding a matrix's eigenvectors means finding the 'natural directions' of the transformation it represents.",
    example: "For A=[[2,0],[0,3]], the eigenvectors are (1,0) and (0,1), with eigenvalues 2 and 3 — A stretches the x-axis by 2 and the y-axis by 3, without rotating either one.",
  },
  svd: {
    name: "Singular Value Decomposition (SVD)",
    lesson:
      "SVD factorizes any matrix (even non-square ones) into three matrices: a rotation, an axis-wise scaling, and another rotation (M = U·Σ·Vᵀ). It's the mathematical basis of PCA, data compression, and recommender systems (matrix factorization).",
    example: "For a matrix that only stretches the x-axis by 3 and leaves y unchanged, Σ = diag(3,1) — the singular values are directly the scaling factors.",
  },
  derivadas: {
    name: "Derivatives",
    lesson:
      "The derivative of a function at a point measures how fast the function's value changes when you slightly change the input — it's the slope of the tangent line. In ML, the derivative of the loss with respect to a parameter tells you which direction and how much to move that parameter to reduce the error.",
    example: "If f(x)=x², f'(x)=2x. At x=3, the slope is 6: the function grows ~6 units for each unit increase in x, locally.",
  },
  "regla-cadena": {
    name: "Chain rule",
    lesson:
      "If a function is the composition of two others (first apply f, then g), the derivative of the whole thing is the product of each part's derivative: (g∘f)'(x) = g'(f(x))·f'(x). Backpropagation is nothing more than applying this rule layer by layer in a neural network.",
    example: "If y=(3x+1)², with u=3x+1 and y=u²: dy/dx = dy/du · du/dx = 2u · 3 = 6(3x+1).",
  },
  gradiente: {
    name: "Gradient",
    lesson:
      "The gradient of a multivariable function is the vector formed by all its partial derivatives. It points in the direction where the function grows fastest — that's why, to minimize a loss, you move in the direction opposite the gradient.",
    example: "For f(x,y)=x²+y², ∇f=(2x,2y). At the point (1,1), the gradient is (2,2) — that's the direction of fastest growth from there.",
  },
  jacobiano: {
    name: "Jacobian matrix",
    lesson:
      "When a function takes several inputs and returns several outputs (not a single number), the Jacobian is the matrix containing all partial derivatives of each output with respect to each input. It's the generalization of the gradient to vector-valued functions.",
    example: "For f(x,y)=(x+y, x·y), the Jacobian is [[1,1],[y,x]] — the first row is the derivatives of x+y, the second of x·y.",
  },
  hessiano: {
    name: "Hessian matrix",
    lesson:
      "The Hessian is the matrix of second derivatives of a function — it tells you how the curvature changes, not just the slope. It's used to determine whether a critical point is a minimum, maximum, or saddle point, and in second-order optimization methods.",
    example: "For f(x,y)=x²+y², the Hessian is [[2,0],[0,2]] — both eigenvalues positive, confirming that (0,0) is a minimum (not a saddle point).",
  },
  distribuciones: {
    name: "Probability distributions",
    lesson:
      "A probability distribution describes how likely each possible value of a random variable is. In ML these show up constantly: the Normal/Gaussian (for noise and weights), the Bernoulli/Binomial (for binary classification), and the Categorical (for multiclass classification, via softmax).",
    example: "Flipping a coin is Bernoulli(p=0.5). Choosing one class out of 10 with softmax produces a Categorical distribution over those 10 options.",
  },
  "esperanza-varianza": {
    name: "Expectation and variance",
    lesson:
      "Expectation (expected value) is the probability-weighted average of a random variable. Variance measures how spread out the values are around that expectation. For independent variables, the variance of a sum is the sum of the variances (unlike expectation, which is always linear).",
    example: "If X and Y are two independent dice (Var=35/12 each), Var(X+Y) = 35/12 + 35/12 = 35/6.",
  },
  bayes: {
    name: "Bayes' theorem",
    lesson:
      "P(A|B) = P(B|A)·P(A) / P(B). It lets you update a prior belief (P(A)) with new evidence (B) to get a posterior belief (P(A|B)). It's the basis of Bayesian inference and classifiers like Naive Bayes.",
    example:
      "A medical test with 99% sensitivity, for a disease with 1% prevalence: P(sick|positive) ends up much lower than 99%, because of the denominator's weight (false positives from the healthy majority).",
  },
  mle: {
    name: "Maximum Likelihood Estimation (MLE)",
    lesson:
      "MLE looks for the model parameters that make the data you actually observed as probable as possible. Minimizing squared error or cross-entropy (the most common ML losses) is, mathematically, doing MLE under a Gaussian or Categorical noise assumption, respectively.",
    example: "If you flip a coin 10 times and get 7 heads, the MLE of p(heads) is 7/10 — the value of p that maximizes the probability of having observed exactly that outcome.",
  },
  "descenso-gradiente": {
    name: "Gradient descent",
    lesson:
      "To minimize a function, you update the parameters by subtracting a fraction (the learning rate) of the gradient: since the gradient points where the function grows, subtracting it moves you toward where it decreases. Repeated many times, it converges to a minimum (local, in deep networks).",
    example: "Minimizing f(x)=x² starting from x=5 with rate 0.1: step 1 → x=5-0.1·10=4; step 2 → x=4-0.1·8=3.2; converges toward x=0.",
  },
  convexidad: {
    name: "Convexity",
    lesson:
      "A function is convex if the line segment joining any two points on its graph always lies above (or on) the curve — it has a 'bowl' shape. If the loss function is convex, any local minimum is also the global minimum, which guarantees that gradient descent converges to the best possible result.",
    example: "f(x)=x² is convex (a single global minimum at 0). f(x)=x⁴-x² is NOT convex: it has two local minima, and gradient descent can get stuck in either one depending on where it starts.",
  },
  lagrange: {
    name: "Lagrange multipliers",
    lesson:
      "They're used to optimize a function subject to a constraint (for example, minimizing error under the condition that the weights sum to 1). An extra variable (the multiplier) is introduced that turns the constrained problem into an unconstrained one, easier to solve with ordinary calculus.",
    example: "Minimizing x²+y² subject to x+y=1: L=x²+y²-λ(x+y-1). Differentiating and setting to zero gives x=y=0.5 as the solution.",
  },

  // Fase 1
  "regresion-lineal": {
    name: "Linear regression",
    lesson:
      "Models the relationship between variables as a line (or hyperplane): prediction = w·x + b. It's fit by minimizing the mean squared error between prediction and actual value, and has both an exact solution (normal equation) and an iterative one via gradient descent.",
    example: "With points (1,2),(2,4),(3,6), the best fit is y=2x (slope 2, intercept 0) — total squared error = 0, a perfect fit.",
  },
  "regresion-logistica": {
    name: "Logistic regression",
    lesson:
      "Despite the name, it's a classification model: it takes the same linear combination w·x + b, but passes it through a sigmoid function to turn it into a probability between 0 and 1. It's trained by minimizing cross-entropy, not squared error.",
    example: "If z=w·x+b=1.5, sigmoid(1.5)≈0.82 — the model predicts an 82% probability of the positive class.",
  },
  overfitting: {
    name: "Overfitting / underfitting",
    lesson:
      "Overfitting is when the model memorizes the noise in the training data and performs poorly on new data (low training error, high validation error). Underfitting is when the model is too simple to capture the real pattern (high error on both). It's detected by comparing the training and validation error curves as training progresses.",
    example: "A degree-15 polynomial fit to 10 points passes through all of them exactly (training error=0) but oscillates wildly between them (high validation error) — textbook overfitting.",
  },
  "reg-l1": {
    name: "L1 regularization",
    lesson:
      "Adds the absolute value of the weights to the loss (λ·Σ|w|). Its characteristic effect is pushing many weights to exactly zero, producing sparse models — it's also used for automatic feature selection.",
    example: "With strong L1, weights like [0.3, 0.0, 0.8, 0.0] are typical — two features ended up at exactly zero, effectively dropped from the model.",
  },
  "reg-l2": {
    name: "L2 regularization",
    lesson:
      "Adds the square of the weights to the loss (λ·Σw²). Unlike L1, it doesn't drive weights to exactly zero — instead it smoothly shrinks them toward small values, reducing the model's variance without fully eliminating any feature.",
    example: "With L2 on the same data, the weights might end up as [0.25, 0.05, 0.6, 0.1] — all shrunk, but none exactly zero.",
  },
  "validacion-cruzada": {
    name: "Cross-validation",
    lesson:
      "In k-fold cross-validation, you split the data into k parts, train k times using k-1 parts, and validate on the remaining one (rotating which part is held out). It gives a more reliable estimate of the model's real error than a single train/test split, especially with little data.",
    example: "With 5-fold CV on 100 data points: you train 5 times with 80 points, validate on the remaining 20 (rotating which ones), and average the error across the 5 runs.",
  },
  arboles: {
    name: "Decision trees",
    lesson:
      "A decision tree splits the data recursively, choosing at each node the feature and threshold that best separate the classes (or reduce the error), using criteria like Gini impurity or information gain. It's the basis of Random Forest and Gradient Boosting.",
    example: "To classify fruits by weight and color, the tree might split first on 'weight > 150g' if that question separates the classes better than asking about color first.",
  },
  pca: {
    name: "Principal Component Analysis (PCA)",
    lesson:
      "PCA finds the directions (principal components) where the data varies the most, and projects the data onto those directions to reduce dimensions while losing as little information as possible. The first principal component is, mathematically, the eigenvector with the largest eigenvalue of the covariance matrix — it maximizes explained variance.",
    example: "In 2D data shaped like an ellipse stretched along a diagonal, the first principal component points along that diagonal; the second is perpendicular to it.",
  },
  kmeans: {
    name: "K-means",
    lesson:
      "K-means groups data into k clusters by iterating two steps: (1) assign each point to the nearest centroid, (2) recompute each centroid as the average of the points assigned to it. It repeats until the centroids stop moving significantly.",
    example: "With k=2: you start with 2 random centroids, assign each point to the nearest one, recompute each centroid as the average of its points, and repeat until they stop changing.",
  },
  "sesgo-varianza": {
    name: "Bias-variance tradeoff",
    lesson:
      "A model's total error breaks down into bias (how poorly the model fits on average, from being too simple) and variance (how much predictions change if you change the training data, from being too complex). Lowering one typically raises the other — regularization and model complexity are the dials that control this.",
    example: "A linear model on data with a real curve has high bias (training error already high). A very deep tree with little data has low bias but high variance (it changes a lot across different training subsets).",
  },

  // Fase 2
  perceptron: {
    name: "Perceptron",
    lesson:
      "The perceptron is the simplest artificial neuron: a weighted sum of inputs plus a bias, passed through a step function. A single perceptron can only separate classes with a straight line (linear boundary) — it can't solve non-linearly-separable problems like XOR, which is why layers need to be stacked.",
    example: "For the AND function (1 only if both inputs are 1), a simple perceptron works. For XOR (1 only if they differ), no straight line separates the classes — the simple perceptron fails.",
  },
  activaciones: {
    name: "Activation functions (ReLU = Rectified Linear Unit / sigmoid / tanh / GELU = Gaussian Error Linear Unit)",
    lesson:
      "Without a nonlinear function between layers, stacking linear layers would still just be one linear transformation. Sigmoid/tanh saturate (their derivative goes to zero) for large inputs, which slows learning in deep networks; ReLU (max(0,x)) doesn't saturate on the positive side, which is why it helps with vanishing gradients. GELU is a smooth version of ReLU used in Transformers.",
    example: "ReLU(-2)=0, ReLU(3)=3. Sigmoid(10)≈0.9999 (already nearly saturated, gradient≈0). tanh(0)=0, tanh(2)≈0.96.",
  },
  backprop: {
    name: "Backpropagation",
    lesson:
      "Backprop computes the gradient of the loss with respect to every weight in the network by applying the chain rule from the output back to the input, reusing intermediate computations — which is why it's far more efficient than computing each derivative separately.",
    example: "With loss L=(y-ŷ)² and ŷ=w·x: dL/dw = dL/dŷ · dŷ/dw = -2(y-ŷ)·x — two chain-rule steps chained together.",
  },
  sgd: {
    name: "Stochastic Gradient Descent (SGD)",
    lesson:
      "'Batch' gradient descent computes the exact gradient using all the data before each step — accurate but slow. SGD (stochastic) updates the weights using just one example (or a mini-batch) per step: the gradient is noisy, but you take many more steps in the same time, and in practice it converges better and generalizes better.",
    example: "With 1000 examples and mini-batches of 32, one epoch does ~31 weight updates, instead of a single update using all 1000 points together.",
  },
  momentum: {
    name: "Momentum",
    lesson:
      "Momentum accumulates a running average of past gradients and uses it to update the weights, instead of just using the current gradient. This dampens zig-zagging on elongated loss surfaces and speeds up convergence in the consistent direction.",
    example: "With β=0.9: v = 0.9·v_previous + current_gradient, and the step is taken with v, not the raw gradient — like a ball picking up speed rolling downhill.",
  },
  adam: {
    name: "Adam optimizer",
    lesson:
      "Adam combines momentum (running average of the gradient) with a per-parameter adaptive learning rate (based on a running average of the squared gradient, like RMSProp). It's the default optimizer in most deep learning projects because it converges quickly without much manual tuning.",
    example: "Adam keeps, for each weight, a running average of the gradient AND a running average of the squared gradient — combining both at each step to decide the size and direction of the update.",
  },
  "init-pesos": {
    name: "Weight initialization",
    lesson:
      "If all weights start at zero, every neuron in a layer computes exactly the same thing and gets the same gradient — the network never breaks that symmetry and can't learn. That's why weights are initialized with small random values (schemes like Xavier/Glorot or He, calibrated to the layer size and activation used).",
    example: "He initialization for ReLU scales the weights by √(2/fan_in) — for a layer with 100 inputs, the initial weights are around ±0.14.",
  },
  batchnorm: {
    name: "Batch normalization",
    lesson:
      "BatchNorm normalizes a layer's activations (subtracts the mean, divides by the standard deviation of the current mini-batch) before passing them to the next layer, then allows rescaling them with learned parameters. It stabilizes and speeds up training by keeping the activation distribution from shifting too much between layers and over the course of training.",
    example: "Mini-batch activations [2,4,6,8] (mean 5, std≈2.24) get normalized to [-1.34,-0.45,0.45,1.34] before being rescaled with the learned parameters.",
  },
  convolucion: {
    name: "Convolution (CNN)",
    lesson:
      "A convolution slides the same small filter (with the same weights) across the whole image, exploiting translational invariance: a pattern (like an edge) can be recognized no matter where it appears in the image, using far fewer parameters than a fully connected layer.",
    example: "A 3x3 edge filter like [[-1,0,1],[-1,0,1],[-1,0,1]] slid across an image highlights sharp horizontal intensity changes (vertical edges).",
  },
  pooling: {
    name: "Pooling",
    lesson:
      "A pooling layer (max-pooling or average-pooling) reduces the spatial size of activation maps by summarizing small regions into a single value. It lowers computational cost and gives some invariance to small translations of the input.",
    example: "Max-pooling 2x2 over [[1,3],[2,4]] gives a single value: 4 (the max of that region).",
  },
  rnn: {
    name: "Recurrent Neural Network (RNN)",
    lesson:
      "An RNN processes a sequence step by step, keeping a hidden state that gets updated at each step and summarizes what's been seen so far. The problem: when backpropagating through many steps (backprop through time), the gradient tends to vanish or explode, so plain RNNs 'forget' dependencies that are far back in the sequence.",
    example: "When processing 'the black cat runs', the hidden state after 'the' combines with 'cat' for the next state, and so on — the information from 'the' gets diluted layer by layer.",
  },
  lstm: {
    name: "LSTM (Long Short-Term Memory)",
    lesson:
      "LSTM adds a 'memory cell' separate from the hidden state, controlled by gates (forget, input, output) that learn when to keep, update, or discard information. That memory path with fewer nonlinear transformations is what mitigates the vanishing gradient of plain RNNs.",
    example: "When reading a long sentence, the forget gate can learn to 'close' when an idea ends and 'open' for the next one, preserving relevant information over many steps without diluting it.",
  },
  "vanishing-exploding": {
    name: "Vanishing / exploding gradient",
    lesson:
      "When backpropagating in a very deep network, the gradient is computed by multiplying many partial derivatives in a chain. If those factors are systematically less than 1, the product tends to zero (vanishing); if greater than 1, it tends to infinity (exploding) — in both cases, the earliest layers barely learn or training becomes unstable.",
    example: "If each layer multiplies the gradient by 0.5 and there are 20 layers, the gradient reaching the first layer is 0.5²⁰ ≈ 0.000001 — practically zero.",
  },

  // Fase 3
  "cnn-extrinseca": {
    name: "Extrinsic CNN (Convolutional Neural Network, on 3D shapes)",
    lesson:
      "'Extrinsic' means the method processes the 3D shape relative to the ambient space it's embedded in (for example, a voxel grid or a point cloud with x,y,z coordinates), rather than working with the surface itself.",
    example: "Representing a 3D chair as a voxel grid (like pixels but in 3D) and applying standard 3D convolutions to it is an extrinsic approach.",
  },
  "cnn-intrinseca": {
    name: "Intrinsic CNN (Convolutional Neural Network)",
    lesson:
      "An intrinsic CNN operates directly on the surface of the shape (the mesh/manifold), using geometric properties native to that surface (geodesic distances, curvature) — it's invariant to how the shape is rotated or embedded in 3D space, unlike extrinsic methods.",
    example: "On a mesh of a human face, measuring distances by 'walking along the surface' (geodesics): the nose and cheek are close in a straight line through the air, but far apart walking across the skin.",
  },
  "metodos-espectrales": {
    name: "Spectral methods on graphs",
    lesson:
      "The graph (or mesh) Laplacian operator is diagonalized to obtain its eigenvalues and eigenvectors — an equivalent of the Fourier transform but for graph-structured data. This allows defining filters/convolutions in the graph's 'frequency domain'.",
    example: "The eigenvectors of a social network graph's Laplacian can be used to detect communities (groups of nodes tightly connected to each other).",
  },
  "laplaciano-grafo": {
    name: "Graph Laplacian",
    lesson:
      "A graph's Laplacian (L = D − A, degree minus adjacency) captures how each node connects to its neighbors. Its eigenvectors generalize Fourier's sine/cosine functions to a graph, and its eigenvalues indicate how 'smooth' or 'oscillating' a pattern is over that structure.",
    example: "For a triangle graph (3 nodes, all connected to each other): L = [[2,-1,-1],[-1,2,-1],[-1,-1,2]] — each node has degree 2 on the diagonal.",
  },
  "atencion-como-conv": {
    name: "Attention as generalized convolution",
    lesson:
      "A convolution is a local operation with shared weights over a grid (each pixel looks at its fixed neighbors). The unifying idea of geometric deep learning is that self-attention is the same class of operation but over a complete graph (every token connected to every other), with weights that are also computed dynamically based on content, not fixed.",
    example: "In a 10-word sentence, self-attention lets the word 'it' attend directly to the word 8 positions back that it refers to — something a small convolution window can't do in a single step.",
  },

  // Fase 4
  "self-attention": {
    name: "Self-attention (Q/K/V)",
    lesson:
      "Each token generates three vectors: Query (what I'm looking for), Key (what I offer), and Value (the content I contribute if attended to). A token's attention toward another is computed by comparing its Query with the other's Key (dot product, scaled by √d and passed through softmax), and the result weights the Values of all tokens.",
    example: "In 'the bank was closed', the token 'bank' compares its Query against the Keys of the other words (high similarity with 'closed') and weighs the Values to disambiguate that it's a financial institution, not a riverbank.",
  },
  "multi-head": {
    name: "Multi-head attention",
    lesson:
      "Instead of computing a single attention, several are computed in parallel ('heads'), each with its own Q/K/V projections, and the results are then concatenated. Each head can learn to attend to a different type of relationship (syntactic, semantic, positional) in parallel.",
    example: "With 8 heads, one might specialize in subject-verb relations and another in pronoun coreference, both computed in parallel over the same input.",
  },
  "pos-encoding-sin": {
    name: "Sinusoidal positional encoding",
    lesson:
      "Self-attention alone doesn't distinguish token order (it's a symmetric operation over the set). Sinusoidal positional encoding adds a vector made of sine/cosine functions of different frequencies to each token, based on its position, to inject that order information.",
    example: "Without positional encoding, 'dog bites man' and 'man bites dog' would produce the same attention representation — the encoding is what distinguishes each word's position.",
  },
  rope: {
    name: "RoPE (Rotary Position Embedding)",
    lesson:
      "RoPE encodes position by rotating the Query/Key vectors as a function of their position, instead of adding a fixed vector. This makes attention naturally depend on the relative distance between tokens, and it generalizes better to longer sequences than seen during training — which is why modern long-context LLMs prefer it.",
    example: "RoPE rotates a token's Query vector by an angle proportional to its position; the attention between two tokens ends up depending on the relative angle between them (the distance), not their absolute positions.",
  },
  "encoder-decoder": {
    name: "Encoder-decoder architecture",
    lesson:
      "The encoder processes the whole input sequence with full self-attention (every token sees every other). The decoder generates the output token by token, with 'masked' self-attention (each token only sees earlier ones) plus a cross-attention layer that queries the encoder's representations.",
    example: "To translate 'the cat' → 'el gato': the encoder processes 'the cat' completely; the decoder generates 'el' by querying the encoder, then 'gato' by seeing 'el' + querying the encoder again.",
  },
  "decoder-only": {
    name: "Decoder-only model (GPT-style)",
    lesson:
      "A decoder-only model drops the encoder entirely: it only has masked self-attention (each token sees only earlier ones) and is trained to predict the next token. That's enough for text generation because it doesn't need to 'translate' from one input sequence to another — it generates directly, conditioned on everything before it.",
    example: "Given 'The sky is', a decoder-only model predicts the next token ('blue') by looking only at the preceding words, and repeats the process token by token.",
  },
  "encoder-only": {
    name: "Encoder-only model (BERT-style)",
    lesson:
      "An encoder-only model uses full self-attention (every token sees every other, including later ones) and is trained on tasks like predicting masked words. It suits comprehension/classification tasks (sentiment analysis, answer extraction) where you have the whole input available at once, not sequential text generation.",
    example: "BERT receives 'the cat [MASK] on the rug' seeing the WHOLE sentence (even what comes after the gap) to predict 'sleeps'.",
  },
  "layer-norm": {
    name: "Layer normalization",
    lesson:
      "Unlike BatchNorm (which normalizes across the batch, per feature), layer norm normalizes across the features, for each individual example. That makes it independent of batch size, which is key for Transformers usually trained on variable-length sequences.",
    example: "For a single token's activation vector [2,4,6,8] (mean 5), layer norm normalizes it using that vector's own mean/std — without looking at what other examples are in the batch.",
  },
  "pre-post-norm": {
    name: "Pre-norm vs. post-norm",
    lesson:
      "In post-norm (the original Transformer paper's architecture), normalization comes after adding the residual connection. In pre-norm, it comes before, inside each sub-block. Pre-norm keeps gradients more stable in very deep networks because the residual path stays 'clean' (not passing through normalization), which prevents training from becoming unstable at many layers.",
    example: "Pre-norm computes x + Attention(Norm(x)); post-norm computes Norm(x + Attention(x)) — the difference looks small but changes stability a lot at 100+ layers.",
  },
  residuales: {
    name: "Residual connections",
    lesson:
      "A residual connection adds a block's input directly to its output (output = input + F(input)), instead of just returning F(input). This gives the gradient a 'shortcut' to flow straight back without passing through every nonlinear transformation, which allows training much deeper networks without the gradient vanishing.",
    example: "If a block learned nothing useful, F(x)≈0 and the output x+F(x)≈x — the network can 'skip' useless blocks instead of losing the gradient through them.",
  },
  "finetuning-variantes": {
    name: "SFT (Supervised Fine-Tuning) / LoRA (Low-Rank Adaptation) / QLoRA (Quantized LoRA) / RLHF (Reinforcement Learning from Human Feedback)",
    lesson:
      "SFT (supervised fine-tuning) retrains all or nearly all of the model's weights with labeled examples. LoRA freezes the original weights and only trains small low-rank matrices added to them — much cheaper in memory. QLoRA does the same but with the base model quantized (lower numerical precision) to cut costs further. RLHF adjusts the model with reinforcement learning using a reward signal learned from human preferences.",
    example: "To adapt a 7B-parameter LLM to a specific domain with a single small GPU, LoRA might train only ~0.1% of the parameters (small matrices) instead of the full 7B.",
  },

  // Fase 5
  mdp: {
    name: "Markov Decision Process (MDP)",
    lesson:
      "An MDP is defined by: a set of states, a set of actions, a transition function (probability of reaching a state given the current state and action), and a reward function. The Markov property says the future depends only on the current state, not on how you got there.",
    example: "In a 4x4 grid: states = the 16 cells; actions = {up,down,left,right}; deterministic transition (moving in that direction); reward = +1 on reaching the goal, 0 otherwise.",
  },
  "funcion-valor": {
    name: "Value function",
    lesson:
      "V(s) estimates the total expected reward (discounted over time) you'll get starting from state s, if you follow a given policy. It's a way to summarize 'how good is it to be in this state' without simulating the whole future every time.",
    example: "In the grid, V(cell next to the goal) is high (close to +1 discounted); V(a far cell) is lower because the reward arrives discounted over many steps.",
  },
  "funcion-q": {
    name: "Action-value function (Q-function)",
    lesson:
      "Q(s,a) estimates the total expected reward if you take action a in state s and follow the policy from then on. Unlike V(s), Q directly tells you which action is best in each state, without needing a model of the transitions.",
    example: "At an intersection where you can go 'straight' or 'turn', Q(state,straight) and Q(state,turn) directly tell you which action yields more future reward, without comparing V of the resulting states.",
  },
  bellman: {
    name: "Bellman equation",
    lesson:
      "Expresses a state's value as the immediate reward plus the discounted value of the next state: V(s) = E[r + γ·V(s')]. It's a recursive relationship — the value of the entire future can be computed in terms of the value 'one step ahead', which is the foundation of nearly every RL algorithm.",
    example: "If you're one step from the goal with reward 10 and γ=0.9: V(s) = 10 + 0.9·V(goal).",
  },
  "prog-dinamica": {
    name: "Dynamic programming",
    lesson:
      "Requires knowing the full MDP model (transition and reward probabilities) to solve the Bellman equation exactly, iterating over all states. Monte Carlo and TD, by contrast, learn purely from experience (simulated or real episodes), without needing that model.",
    example: "With the grid's transition probabilities known, you can solve the system of Bellman equations for the 16 cells directly, without simulating a single episode.",
  },
  "monte-carlo": {
    name: "Monte Carlo methods",
    lesson:
      "Monte Carlo updates a state's value only at the end of a full episode, using the total reward actually obtained from that state onward. It's simple and unbiased, but has to wait for the episode to end and has high variance.",
    example: "You play a full episode of the grid, record the total reward obtained from each visited state, and average those returns over many episodes to estimate V(s).",
  },
  "td-learning": {
    name: "Temporal Difference (TD) learning",
    lesson:
      "TD updates a state's value using the immediate reward plus the current estimate of the next state's value (bootstrapping), without waiting for the episode to end — combining dynamic programming's step-by-step update with Monte Carlo's learning from experience.",
    example: "TD(0): V(s) ← V(s) + α·[r + γ·V(s') − V(s)] — updated as soon as a step is taken, using your own estimate of V(s'), without waiting for the episode's end.",
  },
  "q-learning": {
    name: "Q-learning",
    lesson:
      "Q-learning learns Q(s,a) by updating toward the best possible action in the next state, regardless of which action the agent actually took there (max over a'). That's why it's off-policy: it can learn the optimal policy while behaving in an exploratory/different way.",
    example: "Q(s,a) ← Q(s,a) + α·[r + γ·max_a' Q(s',a') − Q(s,a)] — uses the BEST Q of the next state, regardless of the action actually taken there.",
  },
  sarsa: {
    name: "SARSA (State-Action-Reward-State-Action)",
    lesson:
      "SARSA updates Q(s,a) using the action the agent will actually take next (according to its own policy, including exploration), not the best possible action. That's why it's on-policy — it learns the value of the policy it's actually following, not the optimal one.",
    example: "Q(s,a) ← Q(s,a) + α·[r + γ·Q(s',a') − Q(s,a)] — uses the Q of the action a' that will actually be taken (exploration included), not the maximum possible.",
  },
  "policy-gradients": {
    name: "Policy gradients",
    lesson:
      "Instead of learning values and deriving a policy from them, policy gradients parametrize the policy directly (for example, with a neural network) and adjust its parameters with gradient descent to maximize expected reward — raising the probability of actions that led to good reward.",
    example: "If the action 'right' led to good reward, the probability of choosing 'right' in that state is directly increased, without going through estimating Q or V first.",
  },
  "actor-critico": {
    name: "Actor-critic",
    lesson:
      "The 'actor' is the policy that picks actions; the 'critic' is a value function that evaluates how good that choice was, giving a lower-variance signal than using the full Monte Carlo return. The actor is updated using that critic evaluation instead of waiting for the episode's final outcome.",
    example: "The actor proposes 'go left'; the critic evaluates 'that action is worth +2 more than this state's average' — that advantage is what adjusts the actor.",
  },
  dqn: {
    name: "Deep Q-Networks (DQN)",
    lesson:
      "DQN approximates Q(s,a) with a neural network instead of a table, to handle huge state spaces (like a video game's pixels). The replay buffer stores past transitions and trains on random samples from it (not just the latest one), breaking the temporal correlation between consecutive steps and stabilizing training.",
    example: "To play Breakout from pixels, DQN stores millions of transitions (state,action,reward,next state) and trains on random mini-batches from there, not on the move that just happened.",
  },
  ppo: {
    name: "PPO (Proximal Policy Optimization)",
    lesson:
      "PPO is a policy gradient method that limits ('clips') how much the policy can change on each update relative to the previous policy. This avoids overly large steps that could collapse training, keeping it stable without needing the more complex math of methods like TRPO.",
    example: "If the new policy would want to increase an action's probability 5x, PPO clips it to a range like 1.2x, to avoid a jump that derails training.",
  },
  "self-play": {
    name: "Self-play",
    lesson:
      "The agent trains by playing against versions of itself (past or current). As it improves, its opponent (itself) also improves, automatically generating a curriculum of increasing difficulty without needing a hand-designed external opponent.",
    example: "In pokemon-tcg-ai, the DRSF framework trains FocusNet by playing against earlier versions of itself, instead of a fixed opponent — the challenge scales up automatically with the agent.",
  },
  puct: {
    name: "PUCT search (Predictor + Upper Confidence bound applied to Trees)",
    lesson:
      "PUCT (used in AlphaZero) combines tree search similar to MCTS (Monte Carlo Tree Search) with a neural network that provides two things: a prior policy (which moves to explore first) and a value estimate (so you don't have to simulate to the end of the game). That makes the search much more efficient than pure MCTS with random rollouts.",
    example: "In pokemon-tcg-ai, PUCT search uses FocusNet to suggest which moves to explore first (policy head) and to evaluate positions without playing to the end (value head).",
  },
  nash: {
    name: "Nash equilibrium",
    lesson:
      "A set of strategies (one per player) is a Nash equilibrium if no player can improve their outcome by unilaterally changing their own strategy, given that the others keep theirs. It's the central 'stability' concept in multi-agent game theory.",
    example: "In rock-paper-scissors, playing each option with probability 1/3 is the Nash equilibrium — any fixed strategy other than that can be exploited by the opponent.",
  },
  cfr: {
    name: "CFR (Counterfactual Regret Minimization)",
    lesson:
      "CFR iteratively minimizes 'counterfactual regret' — how much better off a player would have been in the past had they played differently at each decision point, assuming the rest of the game stays the same. Minimizing that accumulated regret converges, on average, to a Nash equilibrium. It's the algorithm family behind the best poker bots (Libratus, Pluribus).",
    example: "In pokemon-tcg-ai, Best Response + deep CFR were used to measure how far the heuristic policy is from the Nash equilibrium — they found a real gap of +0.157 in exploitability.",
  },
  exploitability: {
    name: "Exploitability",
    lesson:
      "Measures how much a perfect opponent (playing the best possible response) could beat your policy by, compared to equilibrium. Zero exploitability means you're playing an exact Nash equilibrium — no one can exploit you.",
    example: "If your policy has an exploitability of 0.15, a perfect opponent would beat you by 0.15 reward units more on average than an equilibrium player would.",
  },
  aivat: {
    name: "AIVAT (agent-evaluation variance-reduction technique — the name comes from the paper's title, not a standard spelled-out acronym)",
    lesson:
      "AIVAT is a variance-reduction technique for evaluating agents in games with a lot of randomness (like poker): it subtracts a 'control variate' computed from the expected value under a model of the game, so the observed result gets cleaned of random noise without biasing the estimate. It lets you compare two agents with far fewer games than you'd need without that correction.",
    example: "In pokemon-tcg-ai, AIVAT-Nash was used to compare two deck variants with far fewer simulated games than would be needed without that variance reduction.",
  },
  crn: {
    name: "Common Random Numbers (CRN)",
    lesson:
      "When comparing two agent variants, CRN uses the exact same sequence of random numbers (same cards, same random events) for both simulations. That way, the observed difference between the two results is due only to the real difference between the agents, not to one of them getting luckier — it drastically reduces the variance of the (paired A/B) comparison.",
    example: "In pokemon-tcg-ai, CRN reduced the standard error (SEM) by 15-20% in real matchup comparisons — the same cards dealt for both variants being compared.",
  },

  // Fase 6
  "rg-flow": {
    name: "RG flow (Renormalization Group flow) / NTK (Neural Tangent Kernel)",
    lesson:
      "Renormalization group flow (borrowed from statistical physics) describes how a network's activation statistics transform layer by layer, as if each layer were a renormalization 'step'. The Neural Tangent Kernel (NTK) describes how the function computed by the network evolves during training, in the limit of very wide networks.",
    example: "In a network with many layers, RG flow describes how the variance of the preactivations (before the nonlinearity) transforms layer by layer, analogous to how a physical system changes scale.",
  },
  criticidad: {
    name: "Criticality (initialization)",
    lesson:
      "A 'critical' initialization is one where the variance of the activations (and the gradient) neither systematically grows nor shrinks as it passes through the layers — it stays stable. Moving away from that critical point is exactly what causes vanishing or exploding gradients in very deep networks.",
    example: "With critical initialization, activation variance stays ~1 at layer 1, layer 50, and layer 100. Off that point, it might drop to 0.0001 by layer 100 (vanishing).",
  },
  "bayesian-nn": {
    name: "Bayesian neural networks",
    lesson:
      "Instead of learning a single optimal value for each weight, the Bayesian approach keeps a probability distribution over possible weights. 'Infinite width' refers to the theoretical result that a network with infinitely many neurons per layer, under random initialization, behaves like a Gaussian Process — a much more analytically tractable mathematical object.",
    example: "An infinitely wide network with random weights behaves, before training, exactly like a Gaussian Process — its behavior can be computed with linear algebra, without training anything.",
  },
  "sparse-models": {
    name: "Sparse models",
    lesson:
      "Finding the sparsest solution (with the fewest nonzero values) that explains the data is, in its exact form, a very hard combinatorial problem (minimizing the ℓ0 norm). It's relaxed to minimizing the ℓ1 norm (sum of absolute values), which is convex and, under certain conditions, gives the same sparse solution you were looking for with ℓ0.",
    example: "From a signal with 1000 values where only 10 are nonzero: solving 'minimize ℓ0' is NP-hard; solving the same problem with ℓ1 (convex) recovers the same sparse solution under reasonable conditions.",
  },
  "compressed-sensing": {
    name: "Compressed sensing",
    lesson:
      "Allows reconstructing a sparse signal from far fewer measurements than classical (Nyquist) sampling dictates, as long as the measurement matrix satisfies the Restricted Isometry Property (RIP): that it approximately preserves distances between sparse vectors, without collapsing them together.",
    example: "An MRI image that's sparse in a certain basis can be reconstructed with far fewer measurements than classical sampling requires, if the measurement matrix satisfies RIP.",
  },
  "robust-pca": {
    name: "Robust PCA",
    lesson:
      "Classical PCA assumes all the data follows the low-dimensional structure — a single corrupted data point can ruin the estimate. Robust PCA decomposes the data matrix into a low-rank part (the real structure) plus a sparse part (outliers/corruptions), recovering both separately.",
    example: "In a surveillance video with a fixed background (low-rank) and a moving person (sparse), robust PCA automatically separates the static background from the moving person.",
  },

  // Fase 7
  "sft-vs-rlhf": {
    name: "SFT (Supervised Fine-Tuning) vs. RLHF (Reinforcement Learning from Human Feedback) vs. DPO (Direct Preference Optimization) vs. GRPO (Group Relative Policy Optimization) vs. RLAIF (Reinforcement Learning from AI Feedback)",
    lesson:
      "SFT trains on (prompt, ideal response) pairs labeled by humans. RLHF trains a reward model from human preferences and then optimizes the model with RL (typically PPO) against that reward. DPO achieves a similar effect to RLHF but optimizes directly over preference pairs, without training a reward model or running RL — simpler and more stable. GRPO avoids needing a separate value network by comparing a group of responses against each other. RLAIF replaces human feedback with feedback from another AI model.",
    example: "To teach the FORMAT of a response, SFT is enough. To fine-tune subtleties of which response people prefer among several equally correct ones, you need preference modeling + DPO or RLHF.",
  },
  "reward-modeling": {
    name: "Reward modeling",
    lesson:
      "A reward model is trained from human comparisons (this response is better than that one) to predict how 'good' a response is according to human preference. That learned signal is then used as the reward to optimize the main model with RL.",
    example: "The reward model is shown 2 responses to the same question labeled 'A was preferred by the human' — it learns to score A higher than B.",
  },
  "preference-modeling": {
    name: "Preference modeling",
    lesson:
      "Instead of asking a human to score a response with a number (hard to calibrate consistently), you ask them to compare two responses and pick which one they prefer. That pairwise preference data is easier to collect reliably and is the typical input for both reward modeling and DPO.",
    example: "Instead of 'rate this response 1 to 10', you ask 'of these two, which do you prefer?' — much more consistent across different human raters.",
  },
  "ml-system-design": {
    name: "ML system design end-to-end",
    lesson:
      "A typical production ML pipeline has 4 stages: data ingestion/preparation, training (including validation and model selection), online inference (serving, with a focus on latency and cost), and monitoring/retraining (detecting model degradation and updating it). In an interview, what's being evaluated is whether you can reason about the trade-offs between stages, not whether you can memorize a diagram.",
    example: "Recommendation system: (1) ingestion = click logs; (2) training = retrain every night; (3) inference = serve in <100ms; (4) monitoring = alert if real CTR (Click-Through Rate) drops relative to offline.",
  },
  "on-off-policy": {
    name: "On-policy vs. off-policy",
    lesson:
      "An on-policy algorithm learns about the policy it's actually using to act (example: SARSA, PPO). An off-policy one can learn about a different policy than the one it uses to explore/act (example: Q-learning, DQN) — which is why it can reuse old experience stored in a replay buffer.",
    example: "SARSA (on-policy) learns about the policy that explores with ε-greedy; Q-learning (off-policy) can learn the optimal policy using data recorded from any past policy.",
  },
  "exploracion-explotacion": {
    name: "Exploration vs. exploitation",
    lesson:
      "Exploiting means taking the action you currently believe is best; exploring means trying other actions to find out if there's something better you don't know about yet. Two common strategies: ε-greedy (exploring randomly a fraction ε of the time) and Thompson sampling (choosing based on a belief distribution over how good each action is, refined by evidence).",
    example: "With ε-greedy and ε=0.1, the agent picks the best known action 90% of the time and a random action the remaining 10%, to keep discovering possibly better options.",
  },
  "quadratic-attention": {
    name: "Quadratic attention complexity",
    lesson:
      "Every token has to compute its attention against every other token in the sequence, so the cost (in time and memory) grows with the square of the sequence length (O(n²)). Doubling the context length quadruples the cost — which is why more efficient attention variants exist (sparse, linear, windowed) for very long contexts.",
    example: "With 1000 tokens, the attention matrix has 1,000,000 entries; with 10,000 tokens (10x more), it has 100,000,000 — the cost multiplied by 100, not 10.",
  },

  // Fase 8 — papers
  alphago: {
    name: "AlphaGo (Silver et al., 2016, Nature)",
    lesson:
      "\"Mastering the game of Go with deep neural networks and tree search.\" Combined, for the first time, a policy network (pretrained on human games, refined with self-play) and a separate value network, guiding a Monte Carlo Tree Search (MCTS). Beat human champion Lee Sedol in 2016.",
    example: "AlphaGo used two separate networks (policy and value), trained in different stages and starting from human data — unlike FocusNet in pokemon-tcg-ai, which combines both heads in a single shared network, trained without human data.",
  },
  "alphago-zero": {
    name: "AlphaGo Zero (Silver et al., 2017, Nature)",
    lesson:
      "\"Mastering the game of Go without human knowledge.\" Eliminated the need for human data entirely — it learned from scratch by playing against itself (pure self-play), using a search guided by a single policy+value network (what we now call PUCT). Surpassed the original AlphaGo.",
    example: "This paper formally introduced the search variant we now call PUCT — the same algorithm family used by pokemon-tcg-ai.",
  },
  alphazero: {
    name: "AlphaZero (Silver et al., 2018, Science)",
    lesson:
      "\"A general reinforcement learning algorithm that masters chess, shogi and Go through self-play.\" Generalized AlphaGo Zero into a single algorithm (with no game-specific knowledge beyond the rules) that mastered chess, shogi, and Go, all trained via pure self-play from scratch.",
    example: "The generic pattern 'neural network (policy+value) + PUCT + self-play' from AlphaZero is exactly what FocusNet + the self-play framework (DRSF) replicate in pokemon-tcg-ai, applied to the Pokémon TCG instead of a classic board game.",
  },
  "cfr-original": {
    name: "CFR (Zinkevich, Johanson, Bowling & Piccione, 2007, NeurIPS)",
    lesson:
      "\"Regret Minimization in Games with Incomplete Information.\" Introduced the CFR algorithm — the first practical technique for approaching a Nash equilibrium in imperfect-information games (like poker) through iterative counterfactual regret minimization.",
    example: "Classical CFR needs to visit and store values for EVERY decision point in the game — infeasible for a game as large as the Pokémon TCG, hence the need for Deep CFR.",
  },
  "deep-cfr": {
    name: "Deep CFR (Brown, Lerer, Gross & Sandholm, 2019, ICML)",
    lesson:
      "\"Deep Counterfactual Regret Minimization.\" Replaces CFR's giant lookup tables with neural networks that approximate the regret values, allowing CFR to be applied to games too large for the tabular version.",
    example: "pokemon-tcg-ai specifically used deep CFR (not tabular CFR) to compute exploitability — precisely because the Pokémon TCG is too large for classical CFR.",
  },
  libratus: {
    name: "Libratus (Brown & Sandholm, 2017/2018, Science)",
    lesson:
      "\"Superhuman AI for heads-up no-limit poker: Libratus beats top professionals.\" First AI to decisively beat human professionals at heads-up no-limit poker (2 players), using large-scale CFR plus a real-time subgame-solving phase during play.",
    example: "Showed that CFR could scale to games with huge information spaces — the direct motivation for trying the same ideas on other complex card games like the Pokémon TCG.",
  },
  pluribus: {
    name: "Pluribus (Brown & Sandholm, 2019, Science)",
    lesson:
      "\"Superhuman AI for multiplayer poker.\" Extended Libratus's ideas to 6-player poker (multi-agent, not just 1-on-1) — much harder because Nash equilibrium theory is weaker with more than 2 players — and still achieved superhuman level with far less compute than Libratus.",
    example: "Relevant to pokemon-tcg-ai because the TCG, like multiplayer poker, doesn't have the clean theoretical guarantees of 2-player games — you can still measure exploitability in practice.",
  },
  "aivat-paper": {
    name: "AIVAT (Burch, Schmid, Moravčík, Bowling et al.)",
    lesson:
      "\"AIVAT: A New Variance Reduction Technique for Agent Evaluation in Imperfect-Information Games.\" Proposes subtracting a control variate (computed from a model of the game) from each game's observed result, to remove much of the noise caused by randomness (the cards dealt) without biasing the estimate of the agent's true performance.",
    example: "It's the technique pokemon-tcg-ai applied as 'AIVAT-Nash' to compare deck variants with far fewer simulated games than would otherwise be needed.",
  },
};
