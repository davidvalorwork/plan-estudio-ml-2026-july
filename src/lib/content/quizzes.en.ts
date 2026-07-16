// English translations of the multiple-choice quiz questions in quizzes.ts.
// Structure, key set, array lengths, option counts, option order, and correctIndex
// values are kept identical to the Spanish source — only the strings are translated.

import type { QuizQuestion } from "./quizzes";

export const quizzesEn: Record<string, QuizQuestion[]> = {
  // ---------- PHASE 0 ----------
  vectores: [
    { question: "What is a vector space?", options: ["A set of vectors closed under addition and scalar multiplication", "Any set of real numbers", "A set of square matrices only", "A space with a single fixed dimension"], correctIndex: 0 },
    { question: "What is the norm of the vector (3,4)?", options: ["5", "7", "12", "25"], correctIndex: 0 },
    { question: "Which operation does not guarantee staying within the same vector space?", options: ["The product of two vectors with each other", "The sum of two vectors", "Multiplication by a scalar", "The subtraction of two vectors"], correctIndex: 0 },
  ],
  matrices: [
    { question: "What does a matrix do when multiplying a vector?", options: ["It transforms it (rotates, scales, or projects it)", "It always converts it into a scalar", "It can only add it to another vector", "It doesn't affect it, only copies it"], correctIndex: 0 },
    { question: "A neural network layer without activation is equivalent to:", options: ["A matrix multiplication", "A nonlinear activation function", "A decision tree", "A probability distribution"], correctIndex: 0 },
    { question: "Which matrix applied to (1,0) gives (0,1)?", options: ["The 90° rotation matrix", "The identity matrix", "The zero matrix", "The matrix that scales by 2"], correctIndex: 0 },
  ],
  autovalores: [
    { question: "What characterizes an eigenvector of a matrix?", options: ["When transformed, it doesn't change direction, it only gets scaled", "It always has norm 1", "It is perpendicular to all other vectors", "It only exists for symmetric matrices"], correctIndex: 0 },
    { question: "For A=[[2,0],[0,3]], what is the eigenvalue associated with (1,0)?", options: ["2", "3", "1", "0"], correctIndex: 0 },
    { question: "What are eigenvalues used for in ML?", options: ["To find the principal directions of variance in PCA", "To compute cross-entropy", "To initialize weights at zero", "To define the activation function"], correctIndex: 0 },
  ],
  svd: [
    { question: "What does SVD factorize a matrix into?", options: ["Into a rotation, a scaling, and another rotation (U·Σ·Vᵀ)", "Into the sum of two triangular matrices", "Into the product of the matrix by its inverse", "Into a single diagonal matrix"], correctIndex: 0 },
    { question: "What do the singular values (Σ) represent?", options: ["The scale factors in each direction", "The rotation angles", "The determinant of the matrix", "The number of rows of the matrix"], correctIndex: 0 },
    { question: "Which of these techniques uses SVD as its mathematical basis?", options: ["PCA", "K-means", "Logistic regression", "Decision trees"], correctIndex: 0 },
  ],
  derivadas: [
    { question: "What does the derivative of a function at a point measure?", options: ["The instantaneous rate of change (slope of the tangent line)", "The maximum value of the function", "The area under the curve", "The average of the function over an interval"], correctIndex: 0 },
    { question: "If f(x)=x², what is f'(3)?", options: ["6", "9", "3", "2"], correctIndex: 0 },
    { question: "In ML, the derivative of the loss with respect to a parameter is used to:", options: ["Know in which direction and by how much to move that parameter", "Compute the model's accuracy", "Define the network's architecture", "Choose the batch size"], correctIndex: 0 },
  ],
  "regla-cadena": [
    { question: "What does the chain rule state?", options: ["The derivative of a composition is the product of the derivatives of each part", "The derivative of a sum is the sum of the derivatives", "The derivative of a product is the product of the derivatives", "The derivative of a constant is the constant itself"], correctIndex: 0 },
    { question: "Backpropagation applies the chain rule:", options: ["Layer by layer, from the output toward the input", "Only in the first layer of the network", "Without needing any derivative calculations", "Only in convolutional networks"], correctIndex: 0 },
    { question: "If y=(3x+1)², what is dy/dx?", options: ["6(3x+1)", "2(3x+1)", "3(3x+1)²", "9x+1"], correctIndex: 0 },
  ],
  gradiente: [
    { question: "Which direction does the gradient of a function point toward?", options: ["Toward the direction of steepest ascent", "Toward the direction of steepest descent", "Always toward the origin", "It is always perpendicular to the function"], correctIndex: 0 },
    { question: "For f(x,y)=x²+y², what is ∇f at the point (1,1)?", options: ["(2,2)", "(1,1)", "(2,0)", "(0,2)"], correctIndex: 0 },
    { question: "Why is the gradient subtracted in gradient descent?", options: ["Because it points toward where the function increases, and we want to move toward where it decreases", "Because adding it always diverges", "It's an arbitrary convention with no mathematical reason", "Because the gradient is always negative"], correctIndex: 0 },
  ],
  jacobiano: [
    { question: "What is the Jacobian matrix?", options: ["All the partial derivatives of each output with respect to each input, for vector-valued functions", "The matrix of second derivatives of a scalar function", "A matrix that is always diagonal", "The gradient vector of a scalar function"], correctIndex: 0 },
    { question: "The Jacobian generalizes the gradient for:", options: ["Functions with multiple outputs", "Functions with a single input and output", "Symmetric matrices only", "Constant functions"], correctIndex: 0 },
    { question: "In what deep learning context does Jacobian analysis appear?", options: ["RNN stability", "L1 regularization", "K-means", "Cross-validation"], correctIndex: 0 },
  ],
  hessiano: [
    { question: "What does the Hessian matrix measure?", options: ["The second derivatives (how curvature changes)", "The first derivative of a vector-valued function", "The value of the function at a point", "The distance between two points"], correctIndex: 0 },
    { question: "What is the Hessian used for in optimization?", options: ["To determine whether a critical point is a minimum, maximum, or saddle point", "To always compute the optimal learning rate", "To normalize the input data", "To choose the number of layers in a network"], correctIndex: 0 },
    { question: "If the Hessian at a point has all positive eigenvalues, that point is:", options: ["A local minimum", "A local maximum", "A saddle point", "An inflection point"], correctIndex: 0 },
  ],
  distribuciones: [
    { question: "Which distribution models a binary event like flipping a coin?", options: ["Bernoulli", "Normal", "Categorical", "Continuous uniform"], correctIndex: 0 },
    { question: "Which distribution does the softmax function typically produce?", options: ["Categorical", "Bernoulli", "Gaussian", "Exponential"], correctIndex: 0 },
    { question: "Which distribution is commonly used to model noise in a network's weights?", options: ["Normal/Gaussian", "Bernoulli", "Categorical", "Negative binomial"], correctIndex: 0 },
  ],
  "esperanza-varianza": [
    { question: "For two independent variables X and Y, Var(X+Y) is:", options: ["Var(X) + Var(Y)", "Var(X) · Var(Y)", "√(Var(X) + Var(Y))", "Var(X) − Var(Y)"], correctIndex: 0 },
    { question: "What is the expected value of a random variable?", options: ["The probability-weighted average of its possible values", "The most frequent value (mode)", "The maximum possible value", "The square root of the variance"], correctIndex: 0 },
    { question: "Does the linearity of expectation, E[X+Y]=E[X]+E[Y], require X and Y to be independent?", options: ["No, it always holds, whether they're independent or not", "Yes, independence is always required", "Only if both are Gaussian", "Only if they have the same variance"], correctIndex: 0 },
  ],
  bayes: [
    { question: "Bayes' theorem is written as:", options: ["P(A|B) = P(B|A)·P(A) / P(B)", "P(A|B) = P(A)·P(B)", "P(A|B) = P(B) / P(A)", "P(A|B) = P(A) − P(B|A)"], correctIndex: 0 },
    { question: "In Bayes' theorem, P(A) is known as:", options: ["The prior", "The likelihood", "The evidence", "The posterior"], correctIndex: 0 },
    { question: "With a low-prevalence disease and a highly sensitive test, P(sick|positive) tends to be:", options: ["Much lower than one would intuitively expect", "Always equal to the test's sensitivity", "Always 100%", "Independent of prevalence"], correctIndex: 0 },
  ],
  mle: [
    { question: "What does the maximum likelihood estimator (MLE) maximize?", options: ["The probability of having observed the actual data, given the model", "The number of parameters in the model", "The model's variance", "The validation error directly"], correctIndex: 0 },
    { question: "Minimizing mean squared error is equivalent to MLE under the assumption of:", options: ["Gaussian noise", "Bernoulli noise", "Total absence of noise", "Discrete uniform noise"], correctIndex: 0 },
    { question: "If you flip a coin 10 times and get 7 heads, what is the MLE of p(heads)?", options: ["0.7", "0.5", "1.0", "0.3"], correctIndex: 0 },
  ],
  "descenso-gradiente": [
    { question: "What does gradient descent update at each step?", options: ["The parameters, by subtracting a fraction of the gradient", "The training data", "The network's architecture", "The dataset labels"], correctIndex: 0 },
    { question: "What does the learning rate represent in gradient descent?", options: ["The fraction of the gradient subtracted at each step", "The total number of epochs", "The size of the dataset", "The number of layers in the network"], correctIndex: 0 },
    { question: "A learning rate that is too high tends to cause:", options: ["Training to diverge or oscillate without converging", "Always faster convergence, with no risk", "The gradient to stop being computed", "The network to automatically become convex"], correctIndex: 0 },
  ],
  convexidad: [
    { question: "What does it guarantee for a loss function to be convex?", options: ["That any local minimum is also the global minimum", "That the function has multiple equally good minima", "That gradient descent never converges", "That the function has no derivative"], correctIndex: 0 },
    { question: "Which of these functions is convex?", options: ["f(x)=x²", "f(x)=x⁴−x²", "f(x)=sin(x)", "f(x)=−x²"], correctIndex: 0 },
    { question: "The loss of a deep neural network is typically:", options: ["Non-convex, with possibly multiple local minima", "Always convex, like linear regression", "A constant function", "Always concave"], correctIndex: 0 },
  ],
  lagrange: [
    { question: "What are Lagrange multipliers used for?", options: ["To optimize a function subject to a constraint", "To compute second-order derivatives only", "To normalize input data", "To initialize a network's weights"], correctIndex: 0 },
    { question: "When using Lagrange, what is introduced to handle the constraint?", options: ["An extra variable (the multiplier)", "A new neural network layer", "A new dataset", "An additional activation function"], correctIndex: 0 },
    { question: "Minimizing x²+y² subject to x+y=1, the solution with Lagrange is:", options: ["x=y=0.5", "x=1, y=0", "x=0, y=0", "x=y=1"], correctIndex: 0 },
  ],

  // ---------- PHASE 1 ----------
  "regresion-lineal": [
    { question: "What loss function does linear regression typically use?", options: ["Mean squared error", "Cross-entropy", "ℓ0 norm", "KL divergence"], correctIndex: 0 },
    { question: "What form does linear regression assume for the relationship between variables?", options: ["A line or hyperplane (w·x+b)", "A sigmoid curve", "A partition tree", "A categorical distribution"], correctIndex: 0 },
    { question: "Besides the iterative gradient-based solution, linear regression has:", options: ["An exact solution (normal equation)", "Only an approximate solution via Monte Carlo", "A solution exclusively via neural networks", "No closed-form solution"], correctIndex: 0 },
  ],
  "regresion-logistica": [
    { question: "What function does logistic regression use to produce a probability?", options: ["Sigmoid", "ReLU", "Softmax for more than 2 classes only", "Identity"], correctIndex: 0 },
    { question: "What loss is minimized when training logistic regression?", options: ["Cross-entropy", "Mean squared error", "The ℓ2 norm of the weights only", "Variance of the predictions"], correctIndex: 0 },
    { question: "If z=w·x+b=1.5, sigmoid(1.5) is approximately:", options: ["0.82", "0.50", "1.50", "0.18"], correctIndex: 0 },
  ],
  overfitting: [
    { question: "How does overfitting appear in the error curves?", options: ["Low training error, high validation error", "High error on both sets", "Low error on both sets", "Validation error lower than training error"], correctIndex: 0 },
    { question: "Underfitting occurs when the model is:", options: ["Too simple to capture the real pattern", "Too complex and memorizes noise", "Perfectly calibrated", "Trained with too much data"], correctIndex: 0 },
    { question: "A degree-15 polynomial that passes exactly through 10 training points but oscillates between them is a case of:", options: ["Overfitting", "Underfitting", "Perfect convexity", "Optimal regularization"], correctIndex: 0 },
  ],
  "reg-l1": [
    { question: "What characteristic effect does L1 regularization have on the weights?", options: ["It pushes many weights exactly to zero", "It shrinks them smoothly without reaching zero", "It multiplies them all by 2", "It doesn't affect the weights, only the bias"], correctIndex: 0 },
    { question: "What norm does L1 penalize?", options: ["The sum of the absolute values of the weights", "The sum of the squares of the weights", "The maximum of the weights", "The number of layers"], correctIndex: 0 },
    { question: "L1 is especially useful for:", options: ["Automatic feature selection", "Always speeding up convergence", "Eliminating the need for validation data", "Increasing the model's variance"], correctIndex: 0 },
  ],
  "reg-l2": [
    { question: "What effect does L2 have on the weights, unlike L1?", options: ["It shrinks them smoothly without driving them exactly to zero", "It drives them exactly to zero", "It leaves them completely unchanged", "It flips their sign"], correctIndex: 0 },
    { question: "What norm does L2 penalize?", options: ["The sum of the squares of the weights", "The sum of the absolute values", "The number of nonzero weights", "The mean of the weights"], correctIndex: 0 },
    { question: "In deep learning, L2 is commonly known as:", options: ["Weight decay", "Batch normalization", "Dropout", "Early stopping"], correctIndex: 0 },
  ],
  "validacion-cruzada": [
    { question: "What problem does k-fold cross-validation solve?", options: ["Giving a more reliable estimate of the true error than a single train/test split", "Eliminating the need for test data", "Speeding up model training", "Reducing the number of model parameters"], correctIndex: 0 },
    { question: "In 5-fold CV, how many times is the model trained?", options: ["5", "1", "10", "k squared"], correctIndex: 0 },
    { question: "In each fold of k-fold CV, what is used for validation?", options: ["The part that was not used for training in that fold", "The entire dataset", "Always just the first 10% of the data", "Randomly generated synthetic data"], correctIndex: 0 },
  ],
  arboles: [
    { question: "With what criterion does a decision tree choose where to split a node?", options: ["Gini impurity or information gain", "The average of all the features", "A random number at each node", "The alphabetical order of the features"], correctIndex: 0 },
    { question: "Which ensemble method is based on decision trees?", options: ["Random Forest", "K-means", "PCA", "Logistic regression"], correctIndex: 0 },
    { question: "A decision tree separates classes through:", options: ["Discrete partitions/rules over the features", "A continuous linear transformation", "A joint probability distribution", "A single global straight line"], correctIndex: 0 },
  ],
  pca: [
    { question: "What does the first principal component maximize?", options: ["The explained variance of the projected data", "The number of clusters", "Cross-entropy", "The reconstruction error without reducing dimensions"], correctIndex: 0 },
    { question: "Mathematically, the first principal component is:", options: ["The eigenvector with the largest eigenvalue of the covariance matrix", "The eigenvector with the smallest eigenvalue", "The mean of all the data", "The median of each feature"], correctIndex: 0 },
    { question: "PCA is typically used to:", options: ["Reduce dimensions while losing as little information as possible", "Increase the number of features", "Classify labeled data", "Generate new synthetic data"], correctIndex: 0 },
  ],
  kmeans: [
    { question: "How is a centroid updated in k-means?", options: ["As the average of the points assigned to it", "As the point closest to the origin", "By adding 1 at each iteration", "It's never updated after initialization"], correctIndex: 0 },
    { question: "K-means is a learning algorithm that is:", options: ["Unsupervised", "Supervised", "Reinforcement-based", "Necessarily semi-supervised"], correctIndex: 0 },
    { question: "When does k-means iteration stop?", options: ["When the centroids stop moving significantly", "Always after exactly 1 iteration", "When the cross-validation error is zero", "Never, it's an infinite process"], correctIndex: 0 },
  ],
  "sesgo-varianza": [
    { question: "What does the bias-variance dilemma describe?", options: ["That lowering bias typically raises variance and vice versa", "That bias and variance always decrease together", "That variance doesn't depend on the training data", "That bias only exists in neural networks"], correctIndex: 0 },
    { question: "A model too simple for the real pattern has:", options: ["High bias", "High variance only", "Bias and variance equal to zero", "Only high variance, never bias"], correctIndex: 0 },
    { question: "A very deep tree trained on little data tends to have:", options: ["Low bias but high variance", "High bias and low variance", "Neither bias nor variance", "Always identical bias and variance"], correctIndex: 0 },
  ],

  // ---------- PHASE 2 ----------
  perceptron: [
    { question: "Which problem can a simple perceptron NOT solve?", options: ["XOR (not linearly separable)", "AND", "OR", "Any problem with a linear boundary"], correctIndex: 0 },
    { question: "A simple perceptron separates classes using:", options: ["A linear boundary (a straight line)", "An arbitrary curve", "A decision tree", "A Gaussian distribution"], correctIndex: 0 },
    { question: "What component does a perceptron have besides the weights?", options: ["A bias and a step function", "Only a covariance matrix", "A mandatory pooling layer", "An attention mechanism"], correctIndex: 0 },
  ],
  activaciones: [
    { question: "Why does ReLU help with vanishing gradient, unlike sigmoid?", options: ["It doesn't saturate on the positive side", "It always returns negative values", "It has no derivative anywhere", "It is identical to the identity function over its entire domain"], correctIndex: 0 },
    { question: "Which activation is a smooth version of ReLU used in Transformers?", options: ["GELU", "Sigmoid", "Step function", "Identity"], correctIndex: 0 },
    { question: "Without nonlinear activation functions between layers, a deep network would be equivalent to:", options: ["A single linear transformation", "An exponentially more powerful network", "A full attention mechanism", "A decision tree"], correctIndex: 0 },
  ],
  backprop: [
    { question: "What mathematical rule does backpropagation use?", options: ["The chain rule", "Bayes' theorem", "SVD decomposition", "The Bellman equation"], correctIndex: 0 },
    { question: "Backprop computes the gradient with respect to the weights:", options: ["From the output toward the input, reusing intermediate computations", "Only for the last layer of the network", "Without using any derivatives", "Only in networks with no hidden layers"], correctIndex: 0 },
    { question: "With L=(y−ŷ)² and ŷ=w·x, dL/dw is:", options: ["−2(y−ŷ)·x", "2(y−ŷ)", "−x", "(y−ŷ)²"], correctIndex: 0 },
  ],
  sgd: [
    { question: "How does SGD differ from batch gradient descent?", options: ["It updates the weights using one example or a mini-batch, not the whole dataset", "It never updates the weights", "It requires computing the Hessian at every step", "It only works with categorical data"], correctIndex: 0 },
    { question: "With 1000 examples and mini-batches of 32, one epoch performs approximately:", options: ["31 weight updates", "1 weight update", "1000 weight updates", "32 full epochs"], correctIndex: 0 },
    { question: "The gradient estimated by SGD, compared to the exact batch gradient, is:", options: ["Noisier, but allows many more steps in the same amount of time", "Always identical", "Impossible to compute", "Only valid for linear regression"], correctIndex: 0 },
  ],
  momentum: [
    { question: "What SGD problem does momentum address?", options: ["Zig-zagging on elongated loss surfaces", "Lack of training data", "Overfitting exclusively", "The need to normalize the data"], correctIndex: 0 },
    { question: "Momentum accumulates:", options: ["A moving average of the previous gradients", "Only the gradient of the current step", "The total mean squared error", "The number of epochs elapsed"], correctIndex: 0 },
    { question: "With β=0.9, the momentum update is:", options: ["v = 0.9·v_previous + current_gradient", "v = current_gradient only", "v = 0.9 · current_loss", "v = current_weight − previous_weight"], correctIndex: 0 },
  ],
  adam: [
    { question: "What does the Adam optimizer combine?", options: ["Momentum and a per-parameter adaptive learning rate", "Only pure batch gradient descent", "Only L2 regularization", "Only random hyperparameter search"], correctIndex: 0 },
    { question: "Adam maintains, for each weight, a moving average of:", options: ["The gradient and the squared gradient", "Only the total loss", "Only the epoch number", "Only the initial learning rate"], correctIndex: 0 },
    { question: "Why is Adam popular as a default optimizer?", options: ["It converges quickly without much manual tuning", "It is the only optimizer that exists", "It requires computing the full Hessian", "It only works with a batch size of 1"], correctIndex: 0 },
  ],
  "init-pesos": [
    { question: "Why aren't a network's weights initialized to zero?", options: ["All neurons in a layer would compute the same thing and symmetry would never break", "Because zero is not a valid floating-point number", "Because the network would automatically become convex", "Because it would increase the size of the dataset"], correctIndex: 0 },
    { question: "He initialization is calibrated specifically for:", options: ["Networks with ReLU activation", "Networks with no activation at all", "Decision trees", "K-means"], correctIndex: 0 },
    { question: "Initialization schemes like Xavier/He are calibrated based on:", options: ["The size of the layer and the activation used", "The number of training epochs", "The amount of validation data", "The color of the dataset labels"], correctIndex: 0 },
  ],
  batchnorm: [
    { question: "What does BatchNorm normalize?", options: ["A layer's activations, using the mini-batch's mean/standard deviation", "Only the raw input data, before training", "The number of model parameters", "The optimizer's learning rate"], correctIndex: 0 },
    { question: "BatchNorm helps stabilize training because:", options: ["It prevents the distribution of activations from shifting too much between layers", "It completely eliminates the need for a loss function", "It turns the network into a decision tree", "It artificially increases the size of the dataset"], correctIndex: 0 },
    { question: "Unlike layer norm, BatchNorm normalizes:", options: ["Across the batch, for each feature", "Across the features, for each individual example", "Only the last layer of the network", "Only the weights, never the activations"], correctIndex: 0 },
  ],
  convolucion: [
    { question: "What invariance does convolution exploit?", options: ["Translational invariance (a pattern is recognized in any position)", "Invariance to batch scale", "Invariance to the temporal order of a sequence", "Invariance to the language of the text"], correctIndex: 0 },
    { question: "A convolution uses, compared to a fully connected layer:", options: ["Far fewer parameters, thanks to weight sharing", "Exactly the same parameters", "Always more parameters", "No trainable parameters at all"], correctIndex: 0 },
    { question: "A 3x3 edge filter slid over an image is used to:", options: ["Highlight abrupt changes in intensity (edges)", "Increase the image's resolution", "Directly classify the image without any further layers", "Perfectly remove noise"], correctIndex: 0 },
  ],
  pooling: [
    { question: "What does a pooling layer achieve?", options: ["It reduces the spatial size by summarizing regions into a single value", "It increases the number of trainable parameters", "It completely replaces convolutional layers", "It normalizes the network's weights"], correctIndex: 0 },
    { question: "2x2 max-pooling over [[1,3],[2,4]] gives:", options: ["4", "10", "2.5", "1"], correctIndex: 0 },
    { question: "Pooling gives a degree of invariance to:", options: ["Small translations of the input", "Changes in the learning rate", "The number of classes in the problem", "The type of optimizer used"], correctIndex: 0 },
  ],
  rnn: [
    { question: "What limitation do simple RNNs have with long sequences?", options: ["The gradient tends to vanish or explode over many steps", "They cannot process text under any circumstances", "They only accept one input at a time, with no sequence", "They have no hidden state at all"], correctIndex: 0 },
    { question: "An RNN maintains, across time, a:", options: ["Hidden state that summarizes what has been seen so far", "Fixed covariance matrix", "Decision tree for each step", "Constant uniform distribution"], correctIndex: 0 },
    { question: "Training an RNN across many steps is called:", options: ["Backpropagation through time", "Forward propagation only", "Recurrent k-fold", "Temporal batch normalization"], correctIndex: 0 },
  ],
  lstm: [
    { question: "What mechanism does LSTM use to mitigate the vanishing gradient?", options: ["A memory cell controlled by gates", "Completely eliminating the hidden state", "Using only convolutions instead of recurrence", "Ignoring the first steps of the sequence"], correctIndex: 0 },
    { question: "How many main types of gates does a classic LSTM have?", options: ["3 (forget, input, output)", "1 (output only)", "5", "0, it doesn't use gates"], correctIndex: 0 },
    { question: "An LSTM's forget gate decides:", options: ["What information to discard from memory", "How many layers the network will have", "The value of the learning rate", "The training batch size"], correctIndex: 0 },
  ],
  "vanishing-exploding": [
    { question: "Why does vanishing gradient occur in very deep networks?", options: ["Many factors <1 get multiplied together in the chain of derivatives", "Weights are always initialized to 1", "The Adam optimizer causes it directly", "It only occurs in convolutional layers"], correctIndex: 0 },
    { question: "If each layer multiplies the gradient by 0.5 and there are 20 layers, the gradient at the first layer is approximately:", options: ["0.000001 (practically zero)", "0.5", "10", "1"], correctIndex: 0 },
    { question: "Exploding gradient occurs when the factors multiplied in the chain are:", options: ["Systematically greater than 1", "Systematically less than 1", "Always exactly 1", "Always negative"], correctIndex: 0 },
  ],

  // ---------- PHASE 3 ----------
  "cnn-extrinseca": [
    { question: "What does it mean for a method to be 'extrinsic' for 3D shapes?", options: ["It processes the shape in relation to the ambient space it is embedded in", "It processes the shape only by looking at its internal surface", "It completely ignores the x,y,z coordinates", "It only works with 2D shapes"], correctIndex: 0 },
    { question: "An example of an extrinsic representation is:", options: ["A voxel grid", "A mesh with geodesic distances", "The surface Laplacian", "An intrinsic curvature"], correctIndex: 0 },
    { question: "Extrinsic methods, unlike intrinsic ones, depend on:", options: ["How the shape is embedded/oriented in space", "Only the topology of the surface", "The number of vertices in the mesh", "The amount of training data"], correctIndex: 0 },
  ],
  "cnn-intrinseca": [
    { question: "What distinguishes an intrinsic CNN from an extrinsic one?", options: ["It operates on the surface using its own geometric properties (geodesics, curvature)", "It only works with 2D images", "It completely ignores the shape of the data", "It necessarily requires a voxel grid"], correctIndex: 0 },
    { question: "An intrinsic CNN is invariant to:", options: ["How the shape is rotated or embedded in 3D", "The number of layers in the network", "The training batch size", "The learning rate used"], correctIndex: 0 },
    { question: "Measuring distances by 'walking along the surface' is called:", options: ["Geodesic distance", "Euclidean distance", "Hamming distance", "Mahalanobis distance"], correctIndex: 0 },
  ],
  "metodos-espectrales": [
    { question: "Which operator is diagonalized in spectral methods over graphs?", options: ["The graph Laplacian", "The confusion matrix", "The Jacobian matrix", "The covariance matrix of the weights"], correctIndex: 0 },
    { question: "Spectral methods are, for graphs, the equivalent of:", options: ["The Fourier transform", "The chain rule", "Bayes' theorem", "Gradient descent"], correctIndex: 0 },
    { question: "The eigenvectors of a social graph's Laplacian can be used to:", options: ["Detect communities of nodes that are highly connected to each other", "Compute the training loss", "Define the learning rate", "Normalize a CNN's weights"], correctIndex: 0 },
  ],
  "laplaciano-grafo": [
    { question: "How is a graph's Laplacian defined?", options: ["L = D − A (degree minus adjacency)", "L = A · Aᵀ", "L = D + A", "L = A⁻¹"], correctIndex: 0 },
    { question: "The Laplacian's eigenvalues indicate:", options: ["How 'smooth' or 'oscillating' a pattern is over the graph", "The total number of nodes", "The number of edges in the graph", "The maximum degree of a node"], correctIndex: 0 },
    { question: "For a triangle graph (3 nodes, all connected), the Laplacian has on its diagonal:", options: ["2 (the degree of each node)", "3", "0", "1"], correctIndex: 0 },
  ],
  "atencion-como-conv": [
    { question: "What structure does self-attention conceptually 'convolve' over?", options: ["A complete graph (every token connected to every other)", "Only a fixed grid of nearby neighbors", "No structure at all, it's completely random", "Only the first and last token"], correctIndex: 0 },
    { question: "Unlike convolution, attention weights are computed:", options: ["Dynamically based on content", "Fixed before training", "Always at zero", "Only once per dataset"], correctIndex: 0 },
    { question: "This unifying idea belongs to the field of:", options: ["Geometric deep learning", "Dynamic programming", "Game theory", "Compressed sensing"], correctIndex: 0 },
  ],

  // ---------- PHASE 4 ----------
  "self-attention": [
    { question: "What do Query, Key, and Value represent in self-attention?", options: ["What I'm looking for, what I offer, and the content I contribute if attended to", "Three different convolutional layers", "Three different loss functions", "Three different optimizers"], correctIndex: 0 },
    { question: "Attention between two tokens is computed by comparing:", options: ["One's Query with the other's Key", "Only their absolute positions", "The size of the vocabulary", "The number of layers in the model"], correctIndex: 0 },
    { question: "The Query·Key dot product is typically scaled by:", options: ["√d (the square root of the dimension)", "The total number of tokens", "The learning rate", "The batch size"], correctIndex: 0 },
  ],
  "multi-head": [
    { question: "Why use several attention heads instead of just one?", options: ["Each head can learn to attend to a different type of relationship in parallel", "To reduce the total number of parameters in the model", "Because a single head cannot use softmax", "To eliminate the need for positional encoding"], correctIndex: 0 },
    { question: "Each attention head has:", options: ["Its own Q/K/V projections", "Exactly the same weights as the other heads", "A different loss function", "A different optimizer"], correctIndex: 0 },
    { question: "The results from the different heads are ultimately:", options: ["Concatenated", "Always averaged", "Discarded, keeping all but one", "Multiplied together"], correctIndex: 0 },
  ],
  "pos-encoding-sin": [
    { question: "Why does a Transformer need positional encoding?", options: ["Because self-attention alone does not distinguish the order of the tokens", "Because CNNs have no convolutions", "Because softmax mathematically requires it", "Because it reduces the number of parameters"], correctIndex: 0 },
    { question: "Sinusoidal positional encoding uses functions of:", options: ["Sine and cosine at different frequencies depending on position", "Only fixed random numbers", "Only the ReLU function", "Only the untransformed token index"], correctIndex: 0 },
    { question: "Without positional encoding, 'dog bites man' and 'man bites dog':", options: ["Would produce the same attention representation", "Would always be perfectly distinguished", "Could not be tokenized", "Would require two different models"], correctIndex: 0 },
  ],
  rope: [
    { question: "How does RoPE encode position?", options: ["By rotating the Query/Key vectors according to their position", "By adding a fixed random vector", "By completely removing positional information", "By using only the untransformed absolute index"], correctIndex: 0 },
    { question: "Attention with RoPE ends up depending on:", options: ["The relative distance between tokens", "Only the absolute position of the first token", "The size of the vocabulary", "The number of layers in the model"], correctIndex: 0 },
    { question: "Why do modern long-context LLMs prefer RoPE over the original sinusoidal encoding?", options: ["It generalizes better to sequences longer than those seen during training", "It's slower but always more precise", "It eliminates the need for multi-head attention", "It requires fewer Transformer layers"], correctIndex: 0 },
  ],
  "encoder-decoder": [
    { question: "What makes the decoder different from the encoder in this architecture?", options: ["It uses masked self-attention and cross-attention toward the encoder", "The decoder uses no attention at all", "The encoder generates text token by token", "There is no real difference"], correctIndex: 0 },
    { question: "The encoder processes the input sequence with:", options: ["Full self-attention (every token sees every other)", "Only 1D convolutions", "Masked self-attention only", "No form of attention"], correctIndex: 0 },
    { question: "The decoder's cross-attention queries:", options: ["The representations generated by the encoder", "Only the future tokens of the output", "The optimizer's weights", "The entire unprocessed vocabulary"], correctIndex: 0 },
  ],
  "decoder-only": [
    { question: "Why is a decoder-only model enough to generate text?", options: ["It generates directly, conditioned on everything that came before, without 'translating' from another sequence", "Because it uses no form of attention", "Because it always sees the full sequence, including the future", "Because it doesn't need to be trained on data"], correctIndex: 0 },
    { question: "A decoder-only model uses:", options: ["Masked self-attention (each token sees only the previous ones)", "Only cross-attention toward an external encoder", "Full self-attention with no mask at all", "No form of attention"], correctIndex: 0 },
    { question: "GPT is a typical example of the architecture:", options: ["Decoder-only", "Encoder-only", "Classic encoder-decoder", "Purely convolutional"], correctIndex: 0 },
  ],
  "encoder-only": [
    { question: "For which tasks is an encoder-only model like BERT suited?", options: ["Understanding/classification with the entire input available at once", "Sequential text generation token by token", "Translation with output longer than the input", "No NLP task at all"], correctIndex: 0 },
    { question: "An encoder-only model can see, for a given token:", options: ["All other tokens, including those that come after it", "Only the tokens before it", "No other token", "Only the first token of the sequence"], correctIndex: 0 },
    { question: "BERT is typically trained by predicting:", options: ["Masked words within the sentence", "Only the next token of a sequence", "Image classification labels", "Rewards from an RL environment"], correctIndex: 0 },
  ],
  "layer-norm": [
    { question: "What does layer norm normalize, unlike batch norm?", options: ["Across the features, for each individual example", "Across the batch, for each feature", "Only the weights of the first layer", "It never normalizes anything, it only rescales"], correctIndex: 0 },
    { question: "Layer norm is independent of:", options: ["The batch size", "The number of features in the example", "The Transformer architecture entirely", "The value of the learning rate"], correctIndex: 0 },
    { question: "Why is this key for Transformers?", options: ["They are typically trained with variable-length sequences", "Because Transformers never use mini-batches", "Because it eliminates the need for attention", "Because it reduces the model's vocabulary"], correctIndex: 0 },
  ],
  "pre-post-norm": [
    { question: "Why does pre-norm help in very deep networks?", options: ["The residual path stays 'clean', without passing through normalization", "Because it completely eliminates residual connections", "Because it uses fewer parameters than post-norm", "Because it requires no normalization at all"], correctIndex: 0 },
    { question: "In post-norm, normalization is applied:", options: ["After adding the residual connection", "Before any sub-block", "It is never applied in post-norm", "Only in the last layer of the model"], correctIndex: 0 },
    { question: "Pre-norm computes a block's output as:", options: ["x + Attention(Norm(x))", "Norm(x + Attention(x))", "Norm(x) only, without a residual", "Attention(x) with no residual sum at all"], correctIndex: 0 },
  ],
  residuales: [
    { question: "What problem do residual connections solve?", options: ["They let the gradient flow directly backward without passing through every nonlinearity", "They completely eliminate the need for backpropagation", "They reduce the number of layers needed to just one", "They replace the loss function"], correctIndex: 0 },
    { question: "A residual connection computes a block's output as:", options: ["input + F(input)", "F(input) only", "input − F(input)", "F(input) · input"], correctIndex: 0 },
    { question: "If a residual block learned nothing useful (F(x)≈0), the output is approximately:", options: ["Equal to the input x", "Always zero", "Double the input", "Undefined"], correctIndex: 0 },
  ],
  "finetuning-variantes": [
    { question: "What characterizes LoRA compared to full fine-tuning (SFT)?", options: ["It freezes the original weights and only trains small low-rank matrices", "It retrains absolutely all of the model's weights", "It requires no training data at all", "It is only used for models with fewer than 1 million parameters"], correctIndex: 0 },
    { question: "QLoRA differs from LoRA in that:", options: ["The base model is quantized (lower numerical precision)", "It doesn't use low-rank matrices at all", "It requires retraining the entire model", "It only works without a GPU"], correctIndex: 0 },
    { question: "RLHF fine-tunes a model using:", options: ["Reinforcement learning with a reward learned from human preferences", "Only labeled examples (prompt, ideal response)", "Only additional L2 regularization", "Compressed sensing over the weights"], correctIndex: 0 },
  ],

  // ---------- PHASE 5 ----------
  mdp: [
    { question: "What components define an MDP?", options: ["States, actions, a transition function, and a reward function", "Only states and a neural network", "Only actions and a learning rate", "A set of quiz questions"], correctIndex: 0 },
    { question: "The Markov property states that the future depends on:", options: ["Only the current state, not on how it was reached", "The entire history of past states", "Only the first action taken", "Nothing, it's completely random"], correctIndex: 0 },
    { question: "In an MDP, the transition function describes:", options: ["The probability of reaching a state given the current state and action", "The expected value of the total reward", "Only the number of possible actions", "The architecture of the policy network"], correctIndex: 0 },
  ],
  "funcion-valor": [
    { question: "What does the value function V(s) measure?", options: ["The expected total (discounted) reward from state s while following a policy", "The exact optimal action in each state", "The number of episodes needed to converge", "The transition probability between states"], correctIndex: 0 },
    { question: "V(s) lets you summarize 'how good a state is' without:", options: ["Simulating the entire future every time", "Defining any policy", "Using the Bellman equation", "Knowing the possible actions"], correctIndex: 0 },
    { question: "A state close to the goal, compared to a distant one, typically has:", options: ["A higher V(s) value", "Always a lower V(s) value", "The same V(s) value regardless of distance", "An undefined V(s) value"], correctIndex: 0 },
  ],
  "funcion-q": [
    { question: "How does Q(s,a) differ from V(s)?", options: ["Q evaluates a specific action, without needing a model of the transitions", "Q only exists in single-player games", "Q and V are exactly the same", "Q completely ignores the reward"], correctIndex: 0 },
    { question: "Q(s,a) tells you directly:", options: ["Which action is best to take in each state", "The total number of states in the MDP", "The optimal learning rate", "The size of the replay buffer"], correctIndex: 0 },
    { question: "Learning Q instead of just V is especially useful when:", options: ["You don't have a model of the environment's transitions", "You always know the complete MDP model", "The action space has only one option", "The environment is completely deterministic and known"], correctIndex: 0 },
  ],
  bellman: [
    { question: "What recursive relationship does the Bellman equation express?", options: ["V(s) = immediate reward + discounted value of the next state", "V(s) = sum of all future rewards without discounting", "V(s) = number of possible actions", "V(s) = probability of the episode succeeding"], correctIndex: 0 },
    { question: "If you are one step from the goal (reward 10) with γ=0.9, V(s) is:", options: ["10 + 0.9·V(goal)", "10 · 0.9", "10 − 0.9", "0.9 only"], correctIndex: 0 },
    { question: "The Bellman equation is the foundation of:", options: ["Almost all RL algorithms (DP, Q-learning, TD, etc.)", "Only Monte Carlo methods", "Only convolutional neural networks", "Only Nash equilibrium"], correctIndex: 0 },
  ],
  "prog-dinamica": [
    { question: "What does dynamic programming require that Monte Carlo does not need?", options: ["Knowing the complete MDP model (transitions and rewards)", "A mandatory replay buffer", "A deep neural network", "An environment with continuous rewards"], correctIndex: 0 },
    { question: "Dynamic programming solves Bellman:", options: ["Exactly, by iterating over all states", "Only approximately, through sampling", "Without needing any equation", "Only for a single state at a time, without generalizing"], correctIndex: 0 },
    { question: "Monte Carlo and TD, unlike dynamic programming, learn:", options: ["Only from experience (episodes), without the complete model", "Only if the complete MDP model is known", "Without needing any episode of experience", "Only in deterministic environments"], correctIndex: 0 },
  ],
  "monte-carlo": [
    { question: "When does Monte Carlo update a state's value?", options: ["At the end of a complete episode", "At each individual step, without waiting for the end", "Before the episode begins", "Never, it's a purely theoretical method"], correctIndex: 0 },
    { question: "Monte Carlo, compared to TD, has:", options: ["Higher variance but is simple and unbiased", "Always lower variance", "Systematic bias but low variance", "No variance at all"], correctIndex: 0 },
    { question: "Monte Carlo estimates V(s) using:", options: ["The total return actually obtained from that state onward", "Only the reward of the first step", "A learned estimate of the next state (bootstrapping)", "The complete transition model"], correctIndex: 0 },
  ],
  "td-learning": [
    { question: "What does temporal difference (TD) learning combine?", options: ["DP's step-by-step update with Monte Carlo's learning from experience", "Only elements of Monte Carlo, nothing from dynamic programming", "Only elements of dynamic programming, nothing from experience", "Backpropagation with L1 regularization"], correctIndex: 0 },
    { question: "TD(0) updates V(s) using:", options: ["The immediate reward plus the estimate of V(s') (bootstrapping)", "Only the total return of the complete episode", "The complete transition and reward model", "No estimation at all, only fixed values"], correctIndex: 0 },
    { question: "Unlike Monte Carlo, TD does not need to:", options: ["Wait for the episode to end in order to update", "Have any kind of reward", "Have a defined initial state", "Have a behavior policy"], correctIndex: 0 },
  ],
  "q-learning": [
    { question: "Is Q-learning on-policy or off-policy?", options: ["Off-policy", "On-policy", "Neither, it's supervised", "It depends on the batch size"], correctIndex: 0 },
    { question: "Q-learning updates using:", options: ["max_a' Q(s',a'), the best possible action of the next state", "The action the agent will actually take next", "An average of all possible actions", "Only the immediate reward, without considering the future"], correctIndex: 0 },
    { question: "Being off-policy allows Q-learning to:", options: ["Learn the optimal policy while behaving in a different, exploratory way", "Learn only if it never explores", "Completely ignore the reward received", "Work only with a single-state space"], correctIndex: 0 },
  ],
  sarsa: [
    { question: "How does SARSA differ from Q-learning?", options: ["It uses the action the agent will actually take, not the best possible one", "SARSA doesn't use the Bellman equation at all", "SARSA is always off-policy, just like Q-learning", "SARSA doesn't require any policy"], correctIndex: 0 },
    { question: "SARSA is an algorithm that is:", options: ["On-policy", "Off-policy", "Not based on TD", "Exclusive to card games"], correctIndex: 0 },
    { question: "SARSA learns the value of:", options: ["The policy it is actually following (including exploration)", "A policy completely different from the one it uses to act", "Only the theoretical optimal policy, ignoring actual exploration", "No policy, only the raw reward"], correctIndex: 0 },
  ],
  "policy-gradients": [
    { question: "What is directly optimized in policy gradients?", options: ["The policy's parameters, to maximize expected reward", "Only the value function V(s)", "Only the tabular Q(s,a) function", "The size of the replay buffer"], correctIndex: 0 },
    { question: "Policy gradients increases the probability of:", options: ["Actions that led to good reward", "All actions equally, without distinction", "Only the first action of the episode", "Actions with lower reward, to explore more"], correctIndex: 0 },
    { question: "Unlike Q-learning, policy gradients parametrizes:", options: ["The policy directly (for example, with a neural network)", "Only a table of Q values", "Only the environment's transition model", "The Hessian of the loss"], correctIndex: 0 },
  ],
  "actor-critico": [
    { question: "What role does the 'critic' play in actor-critic?", options: ["It evaluates how good the action chosen by the actor was, with lower variance than Monte Carlo", "It directly chooses the actions to take", "It generates the environment's training data", "It computes the optimal learning rate"], correctIndex: 0 },
    { question: "The actor in this scheme is:", options: ["The policy that chooses the actions", "The value function that evaluates the state", "The Adam optimizer used for training", "The replay buffer of past transitions"], correctIndex: 0 },
    { question: "Using the critic instead of only the Monte Carlo return gives:", options: ["An update signal with lower variance", "Always a signal with higher variance", "A mandatory deterministic policy", "A purely off-policy algorithm"], correctIndex: 0 },
  ],
  dqn: [
    { question: "What is the replay buffer used for in DQN?", options: ["Training on random samples of past transitions, breaking temporal correlation", "Storing only the last observed transition", "Completely replacing the neural network", "Directly computing the Nash equilibrium"], correctIndex: 0 },
    { question: "DQN approximates Q(s,a) using:", options: ["A neural network, to handle enormous state spaces", "An exhaustive table of all possible states", "Only exact dynamic programming", "A simple decision tree"], correctIndex: 0 },
    { question: "Training on random mini-batches from the replay buffer, instead of the last move, helps to:", options: ["Stabilize training", "Artificially increase the reward", "Eliminate the need for a neural network", "Make the algorithm on-policy"], correctIndex: 0 },
  ],
  ppo: [
    { question: "What does PPO limit to stabilize training?", options: ["How much the policy can change at each update, relative to the previous one", "The total number of training episodes", "The size of the replay buffer", "The number of layers in the value network"], correctIndex: 0 },
    { question: "PPO avoids using the more complex math of methods like:", options: ["TRPO", "Tabular Q-learning", "K-means", "PCA"], correctIndex: 0 },
    { question: "PPO is commonly used to fine-tune LLMs at the stage of:", options: ["RLHF", "Initial pre-training from scratch", "Vocabulary tokenization", "Data cross-validation"], correctIndex: 0 },
  ],
  "self-play": [
    { question: "Why does self-play generate an automatic difficulty curriculum?", options: ["The opponent (itself) improves at the same pace as the agent", "Because the opponent is always an expert human", "Because the difficulty is manually set for each episode", "Because it eliminates the need for any training"], correctIndex: 0 },
    { question: "Self-play avoids the need for:", options: ["A hand-designed external opponent", "Any reward function", "Any type of tree search", "Training data altogether"], correctIndex: 0 },
    { question: "In pokemon-tcg-ai, self-play was implemented via:", options: ["The DRSF framework, training against earlier versions of the agent", "A fixed dataset of human games only", "A tabular Q-learning table", "5-fold cross-validation"], correctIndex: 0 },
  ],
  puct: [
    { question: "What does PUCT combine, unlike pure MCTS?", options: ["Tree search with a network that provides a prior policy and value estimate", "Only random simulations until the end of the game", "Only exact dynamic programming", "Only a genetic algorithm"], correctIndex: 0 },
    { question: "The 'prior policy' in PUCT is used to:", options: ["Decide which moves to explore first", "Compute the episode's final reward", "Completely replace tree search", "Normalize the network's weights"], correctIndex: 0 },
    { question: "PUCT is the search algorithm used in:", options: ["AlphaZero and pokemon-tcg-ai", "Only in classic dynamic programming algorithms", "Only in logistic regression", "Only in encoder-only models"], correctIndex: 0 },
  ],
  nash: [
    { question: "What condition defines a Nash equilibrium?", options: ["No player can improve by unilaterally changing only their own strategy", "All players must use the exact same strategy", "It only exists in single-player games", "It requires the game to have no randomness"], correctIndex: 0 },
    { question: "In rock-paper-scissors, the Nash equilibrium is:", options: ["Playing each option with probability 1/3", "Always playing rock", "Always playing the option that won the previous round", "There is no Nash equilibrium in this game"], correctIndex: 0 },
    { question: "Nash equilibrium is the central stability concept in:", options: ["Multi-agent game theory", "Convolutional neural networks", "L1/L2 regularization", "Cross-validation"], correctIndex: 0 },
  ],
  cfr: [
    { question: "What does CFR iteratively minimize?", options: ["Accumulated counterfactual regret", "The number of model parameters", "The size of the training dataset", "The optimizer's learning rate"], correctIndex: 0 },
    { question: "Minimizing regret in CFR converges, on average, to:", options: ["A Nash equilibrium", "An optimally trained neural network", "A perfect decision tree", "A uniform distribution over actions"], correctIndex: 0 },
    { question: "CFR is the family of algorithms behind:", options: ["Libratus and Pluribus (poker bots)", "AlphaGo only", "Logistic regression", "K-means"], correctIndex: 0 },
  ],
  exploitability: [
    { question: "What does a policy's exploitability measure?", options: ["How much a perfect opponent could beat it by, compared to equilibrium", "The number of games played", "The model's training speed", "The size of the search tree"], correctIndex: 0 },
    { question: "An exploitability of zero means:", options: ["An exact Nash equilibrium is being played", "The agent lost every game", "The model has not been trained at all", "The agent plays completely at random"], correctIndex: 0 },
    { question: "In pokemon-tcg-ai, an exploitability gap was found of:", options: ["+0.157", "0", "+15.7", "-1.0"], correctIndex: 0 },
  ],
  aivat: [
    { question: "What is AIVAT used for in agent evaluation?", options: ["To reduce variance when measuring performance in games with a lot of randomness", "To directly train the policy network", "To compute a graph's Laplacian", "To initialize a network's weights"], correctIndex: 0 },
    { question: "AIVAT subtracts from the observed outcome:", options: ["A control variate based on a model of the game", "The total number of games played", "The learning rate", "The number of players"], correctIndex: 0 },
    { question: "Using AIVAT allows comparing two agents with:", options: ["Far fewer games than would be needed without that correction", "Twice the number of games needed", "Just a single game, regardless of noise", "No real game data at all"], correctIndex: 0 },
  ],
  crn: [
    { question: "Why does CRN reduce variance when comparing two agent variants?", options: ["It uses the same sequence of random numbers for both simulations", "It artificially increases the number of games", "It completely eliminates randomness from the game", "It changes the game's rules for each variant"], correctIndex: 0 },
    { question: "CRN is a technique for:", options: ["Paired A/B comparison", "Tree search", "Weight regularization", "Neural network initialization"], correctIndex: 0 },
    { question: "In pokemon-tcg-ai, CRN reduced the standard error (SEM) by:", options: ["15-20%", "0%", "90-95%", "1-2%"], correctIndex: 0 },
  ],

  // ---------- PHASE 6 ----------
  "rg-flow": [
    { question: "What field does the idea of renormalization group flow (RG flow) come from?", options: ["Statistical physics", "Game theory", "Basic linear algebra", "Classical Bayesian statistics"], correctIndex: 0 },
    { question: "The NTK (Neural Tangent Kernel) describes:", options: ["How the network's function evolves during training, in very wide networks", "The optimal number of layers for a network", "The exact architecture of a Transformer", "The backpropagation algorithm itself"], correctIndex: 0 },
    { question: "RG flow describes how, layer by layer, the following are transformed:", options: ["The statistics of the network's activations", "Only the optimizer's hyperparameters", "The size of the training dataset", "The number of classes in the problem"], correctIndex: 0 },
  ],
  criticidad: [
    { question: "What characterizes a 'critical' initialization?", options: ["The variance of activations/gradients stays stable layer to layer", "The weights are always initialized to zero", "The network has no hidden layers", "The model cannot be trained at all"], correctIndex: 0 },
    { question: "Moving away from the critical initialization point typically causes:", options: ["Vanishing or exploding gradients", "Always higher automatic accuracy", "Lower memory usage", "Guaranteed instantaneous convergence"], correctIndex: 0 },
    { question: "The study of criticality belongs to the analysis of:", options: ["The initialization of deep neural networks", "L1 regularization only", "Decision trees", "Nash equilibrium"], correctIndex: 0 },
  ],
  "bayesian-nn": [
    { question: "What does the Bayesian approach maintain instead of a single optimal value per weight?", options: ["A probability distribution over the possible weights", "A single fixed value determined by MLE", "No value at all, the weights are discarded", "Only the average of all possible weights, without variance"], correctIndex: 0 },
    { question: "The 'infinite width' result says that a very wide network with random initialization behaves like:", options: ["A Gaussian Process", "A decision tree", "A discrete uniform distribution", "A completely deterministic network with no variance"], correctIndex: 0 },
    { question: "This result is useful because:", options: ["It makes the analysis much more mathematically tractable", "It eliminates the need to train any network", "It reduces the number of parameters to zero", "It only applies to networks with a single neuron"], correctIndex: 0 },
  ],
  "sparse-models": [
    { question: "Which norm is relaxed from ℓ0 to ℓ1 in sparse recovery?", options: ["The norm that counts nonzero values, relaxed to the sum of absolute values", "The standard Euclidean norm", "The infinity norm (maximum value)", "The Frobenius norm of a matrix"], correctIndex: 0 },
    { question: "Minimizing the ℓ0 norm exactly is, in general:", options: ["A very hard combinatorial problem (NP-hard)", "Always a trivial problem to solve", "Equivalent to k-means", "Only possible with neural networks"], correctIndex: 0 },
    { question: "The relaxation to ℓ1 is attractive because:", options: ["It is convex and, under reasonable conditions, gives the same sparse solution", "It never converges to any solution", "It eliminates the need for training data", "It only works in two dimensions"], correctIndex: 0 },
  ],
  "compressed-sensing": [
    { question: "What property must a measurement matrix satisfy to guarantee recovery (RIP)?", options: ["Approximately preserve the distances between sparse vectors", "Always be a square matrix", "Have a determinant equal to zero", "Be exclusively diagonal"], correctIndex: 0 },
    { question: "Compressed sensing allows reconstructing a sparse signal with:", options: ["Far fewer measurements than classic Nyquist sampling", "Exactly double the measurements of Nyquist", "Only if the signal is not sparse at all", "Only with manually labeled data"], correctIndex: 0 },
    { question: "A typical example of a compressed sensing application is:", options: ["MRI image reconstruction", "Text classification with Transformers", "Reinforcement learning in video games", "Community detection in graphs"], correctIndex: 0 },
  ],
  "robust-pca": [
    { question: "What does robust PCA decompose into, unlike classic PCA?", options: ["A low-rank part and a sparse part (outliers)", "Only the mean and variance of the data", "Only the eigenvalues of the covariance matrix", "The dataset's class labels"], correctIndex: 0 },
    { question: "Classic PCA is vulnerable to:", options: ["A single corrupted data point that can ruin the estimate", "Only having too little data", "Having no low-dimensional structure at all", "Using too few principal components"], correctIndex: 0 },
    { question: "In a surveillance video, robust PCA would separate:", options: ["The static background (low-rank) from the moving person (sparse)", "Only the red pixels from the blue ones", "The video's audio", "The video file's metadata"], correctIndex: 0 },
  ],

  // ---------- PHASE 7 ----------
  "sft-vs-rlhf": [
    { question: "When would you prefer DPO over classic RLHF?", options: ["When you want a similar effect without training a reward model or running full RL", "When you have no human preference data at all", "When the model needs no adjustment after pre-training", "When you only have a single training example in total"], correctIndex: 0 },
    { question: "GRPO avoids needing:", options: ["A separate value network, by comparing a group of responses against each other", "Any type of reward", "Human preference data", "The pre-trained base model"], correctIndex: 0 },
    { question: "RLAIF replaces human feedback with:", options: ["Feedback generated by another AI model", "No feedback at all", "Only hand-written rules", "Random synthetic data with no evaluation"], correctIndex: 0 },
  ],
  "reward-modeling": [
    { question: "What does a reward model learn?", options: ["To predict how 'good' a response is according to human preference", "To generate text directly like a normal LLM", "To classify images into categories", "To solve exact Bellman equations"], correctIndex: 0 },
    { question: "The reward model is typically trained from:", options: ["Human comparisons between pairs of responses", "Only text with no labels at all", "Labeled image data", "The base model's source code"], correctIndex: 0 },
    { question: "The signal learned by the reward model is then used to:", options: ["Optimize the main model with RL", "Completely replace the main model", "Automatically label the pre-training dataset", "Compute the accuracy of an image classifier"], correctIndex: 0 },
  ],
  "preference-modeling": [
    { question: "What type of data does preference modeling use?", options: ["Pairwise comparisons of which response is preferred", "Absolute numeric scores from 1 to 10", "Only text with no human evaluation at all", "Images labeled by category"], correctIndex: 0 },
    { question: "Why are pairwise comparisons preferred over scoring with a number?", options: ["They are easier to collect consistently across evaluators", "They require fewer human annotators overall", "They eliminate the need for any data", "They are mathematically identical to scoring with a number"], correctIndex: 0 },
    { question: "Preference data is the typical input for:", options: ["Reward modeling and DPO", "Only for image classification", "Only for PCA", "Only for K-means"], correctIndex: 0 },
  ],
  "ml-system-design": [
    { question: "What are the 4 typical stages of an ML pipeline in production?", options: ["Data ingestion, training, online inference, monitoring/retraining", "Only training and nothing else", "Only inference, with no prior training at all", "Tokenization, embeddings, attention, softmax"], correctIndex: 0 },
    { question: "In an ML system design interview, what is evaluated most is:", options: ["Whether you can reason about the trade-offs between stages (latency, cost, etc.)", "Whether you've memorized an exact diagram", "Whether you know the exact syntax of a specific framework", "Whether you can solve a differential equation on the whiteboard"], correctIndex: 0 },
    { question: "Monitoring in production mainly serves to:", options: ["Detect model degradation and decide when to retrain", "Artificially increase the reported accuracy", "Completely replace the training stage", "Eliminate the need for inference logs"], correctIndex: 0 },
  ],
  "on-off-policy": [
    { question: "Give an example of an on-policy algorithm and an off-policy one, respectively:", options: ["SARSA (on-policy) and Q-learning (off-policy)", "Q-learning (on-policy) and SARSA (off-policy)", "PCA (on-policy) and K-means (off-policy)", "None of the RL algorithms are on-policy or off-policy"], correctIndex: 0 },
    { question: "An off-policy algorithm can reuse old experience thanks to:", options: ["Learning about a policy different from the one used to act", "Learning exclusively about the current policy", "Not requiring any policy at all", "Being limited to a single training episode"], correctIndex: 0 },
    { question: "PPO is an algorithm typically considered:", options: ["On-policy", "Pure off-policy like Q-learning", "Neither on-policy nor off-policy, it's supervised", "Exclusive to deterministic games"], correctIndex: 0 },
  ],
  "exploracion-explotacion": [
    { question: "Name 2 strategies for handling the exploration-exploitation trade-off:", options: ["ε-greedy and Thompson sampling", "PCA and K-means", "Backpropagation and batch normalization", "SVD and L1 regularization"], correctIndex: 0 },
    { question: "With ε-greedy and ε=0.1, the agent chooses a random action:", options: ["10% of the time", "90% of the time", "100% of the time", "Never, it always exploits"], correctIndex: 0 },
    { question: "Exploiting means:", options: ["Taking the action currently believed to be best", "Trying new actions to discover if there's something better", "Completely ignoring the reward received", "Training a neural network from scratch"], correctIndex: 0 },
  ],
  "quadratic-attention": [
    { question: "Why does attention scale poorly with long sequences?", options: ["The cost grows with the square of the sequence length (O(n²))", "The cost grows linearly with the length", "The cost is constant regardless of length", "The cost decreases as the sequence grows"], correctIndex: 0 },
    { question: "Doubling the context length in standard attention multiplies the cost by:", options: ["4 (quadruples)", "2 (doubles)", "1 (unchanged)", "8"], correctIndex: 0 },
    { question: "What kinds of variants exist to tackle this problem for long contexts?", options: ["Sparse, linear, or windowed attention", "Only increasing the number of convolutional layers", "Only using additional batch normalization", "Completely removing the attention mechanism"], correctIndex: 0 },
  ],

  // ---------- PHASE 8 ----------
  alphago: [
    { question: "What did AlphaGo combine for the first time?", options: ["A policy network and a value network guiding MCTS", "Only tabular CFR", "Only a simple decision tree", "Only hand-written rules"], correctIndex: 0 },
    { question: "AlphaGo was initially trained on:", options: ["Human games, later refined with self-play", "Only pure self-play, with no human data at all", "Only randomly generated synthetic data", "No training at all, fixed rules"], correctIndex: 0 },
    { question: "AlphaGo defeated a human champion in the game of:", options: ["Go", "Chess", "Shogi", "Heads-up poker"], correctIndex: 0 },
  ],
  "alphago-zero": [
    { question: "What did AlphaGo Zero eliminate compared to the original AlphaGo?", options: ["The need for human data, learning through pure self-play", "The value network entirely", "Tree search entirely", "The game of Go, switching to chess"], correctIndex: 0 },
    { question: "AlphaGo Zero formally introduced the search variant now called:", options: ["PUCT", "CFR", "SARSA", "Tabular Q-learning"], correctIndex: 0 },
    { question: "AlphaGo Zero, compared to AlphaGo, ended up being:", options: ["Stronger than the original version", "Weaker than the original version", "Exactly as strong", "Unable to play without human data"], correctIndex: 0 },
  ],
  alphazero: [
    { question: "What did AlphaZero generalize compared to AlphaGo Zero?", options: ["A single algorithm that masters several games (chess, shogi, Go)", "Only improvements specific to the game of Go", "The exclusive use of CFR instead of PUCT", "The complete elimination of self-play"], correctIndex: 0 },
    { question: "AlphaZero is trained, across all its games, through:", options: ["Pure self-play from scratch, without human data", "Human data exclusively, without self-play", "Rules hand-written by experts", "Exhaustive tabular CFR"], correctIndex: 0 },
    { question: "AlphaZero's 'policy+value network + PUCT + self-play' pattern is replicated in pokemon-tcg-ai by:", options: ["FocusNet + the self-play framework (DRSF)", "Only a simple decision tree", "Only deck cross-validation", "Only L2 regularization of the weights"], correctIndex: 0 },
  ],
  "cfr-original": [
    { question: "What problem did the original CFR (2007) solve for the first time?", options: ["Approaching a Nash equilibrium in imperfect-information games", "Training deep convolutional networks", "Solving the XOR problem with a simple perceptron", "Efficiently computing a matrix's SVD"], correctIndex: 0 },
    { question: "Classic CFR needs, for every decision point in the game, to:", options: ["Visit it and store values for all of them, which doesn't scale to large games", "Completely ignore it", "Use only a neural network with no table at all", "Nothing, it's solved in a single matrix operation"], correctIndex: 0 },
    { question: "The scalability limitation of tabular CFR directly motivated the creation of:", options: ["Deep CFR", "AlphaGo", "Robust PCA", "Batch normalization"], correctIndex: 0 },
  ],
  "deep-cfr": [
    { question: "What does Deep CFR replace relative to classic tabular CFR?", options: ["The giant tables, using neural networks that approximate the regret values", "The very concept of counterfactual regret", "The need for any type of training", "Nash equilibrium as the final objective"], correctIndex: 0 },
    { question: "Deep CFR makes it possible to apply CFR to:", options: ["Games too large for the tabular version", "Only games with fewer than 10 possible states", "Only completely deterministic games", "Only single-player games"], correctIndex: 0 },
    { question: "In pokemon-tcg-ai, Deep CFR was used specifically to:", options: ["Compute the exploitability of the heuristic policy", "Train the main policy network from scratch", "Completely replace PUCT", "Generate the deck's cards"], correctIndex: 0 },
  ],
  libratus: [
    { question: "What did Libratus achieve for the first time?", options: ["Decisively beating human professionals at heads-up no-limit poker", "Beating a human Go champion", "Solving the vanishing gradient problem", "Training the first Transformer in history"], correctIndex: 0 },
    { question: "Libratus combined large-scale CFR with:", options: ["A real-time solving phase during the game", "A convolutional network for processing images", "Exact dynamic programming with no approximations", "K-means for clustering poker hands"], correctIndex: 0 },
    { question: "Libratus specifically played the poker variant:", options: ["Heads-up no-limit (2 players)", "6-person multiplayer", "5-card draw poker", "Blackjack"], correctIndex: 0 },
  ],
  pluribus: [
    { question: "Why was Pluribus harder to achieve than Libratus?", options: ["Nash equilibrium theory is weaker with more than 2 players", "Because it couldn't use any form of CFR", "Because it required far more compute than Libratus", "Because multiplayer poker has no randomness at all"], correctIndex: 0 },
    { question: "Pluribus played poker with:", options: ["6 players (multiplayer)", "Only 2 players (heads-up)", "A single player against the system", "No players at all, only simulations"], correctIndex: 0 },
    { question: "Compared to Libratus, Pluribus achieved superhuman level with:", options: ["Far less compute", "Exactly the same amount of compute", "Vastly more compute", "Without needing any prior training"], correctIndex: 0 },
  ],
  "aivat-paper": [
    { question: "What does the AIVAT paper propose?", options: ["Subtracting a control variate based on a model of the game to reduce variance", "Training a policy neural network from scratch", "Replacing Nash equilibrium with another objective", "Completely eliminating randomness from a game"], correctIndex: 0 },
    { question: "AIVAT is designed especially for games with:", options: ["A lot of chance/randomness (like poker)", "Zero random elements", "A single player and no rewards", "Rules that change every game"], correctIndex: 0 },
    { question: "pokemon-tcg-ai applied this technique under the name:", options: ["AIVAT-Nash", "Deep-AIVAT", "CFR-Lite", "PUCT-Var"], correctIndex: 0 },
  ],
};

export function quizForEn(conceptId: string): QuizQuestion[] {
  return quizzesEn[conceptId] ?? [];
}
