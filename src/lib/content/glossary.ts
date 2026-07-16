// Diccionario inglés-español de los términos técnicos usados en el plan. La mayoría de
// este campo se estudia y se lee en inglés (papers, docs, entrevistas) — esto es para
// tener a mano la traducción/equivalente en español de cada término, no una traducción
// literal palabra por palabra sino la que realmente se usa en el campo.

export type GlossaryEntry = {
  conceptId: string;
  en: string;
  es: string;
};

export const glossary: GlossaryEntry[] = [
  // Fase 0 — Matemática base
  { conceptId: "vectores", en: "Vector / vector space", es: "Vector / espacio vectorial" },
  { conceptId: "matrices", en: "Matrix", es: "Matriz" },
  { conceptId: "autovalores", en: "Eigenvalue / eigenvector", es: "Autovalor / autovector (o valor/vector propio)" },
  { conceptId: "svd", en: "Singular Value Decomposition (SVD)", es: "Descomposición en valores singulares" },
  { conceptId: "derivadas", en: "Derivative", es: "Derivada" },
  { conceptId: "regla-cadena", en: "Chain rule", es: "Regla de la cadena" },
  { conceptId: "gradiente", en: "Gradient", es: "Gradiente" },
  { conceptId: "jacobiano", en: "Jacobian matrix", es: "Matriz Jacobiana" },
  { conceptId: "hessiano", en: "Hessian matrix", es: "Matriz Hessiana" },
  { conceptId: "distribuciones", en: "Probability distribution", es: "Distribución de probabilidad" },
  { conceptId: "esperanza-varianza", en: "Expectation / variance", es: "Esperanza (valor esperado) / varianza" },
  { conceptId: "bayes", en: "Bayes' theorem", es: "Teorema de Bayes" },
  { conceptId: "mle", en: "Maximum Likelihood Estimation (MLE)", es: "Estimación de máxima verosimilitud" },
  { conceptId: "descenso-gradiente", en: "Gradient descent", es: "Descenso de gradiente" },
  { conceptId: "convexidad", en: "Convexity", es: "Convexidad" },
  { conceptId: "lagrange", en: "Lagrange multipliers", es: "Multiplicadores de Lagrange" },

  // Fase 1 — ML clásico
  { conceptId: "regresion-lineal", en: "Linear regression", es: "Regresión lineal" },
  { conceptId: "regresion-logistica", en: "Logistic regression", es: "Regresión logística" },
  { conceptId: "overfitting", en: "Overfitting / underfitting", es: "Sobreajuste / subajuste" },
  { conceptId: "reg-l1", en: "L1 regularization (Lasso)", es: "Regularización L1" },
  { conceptId: "reg-l2", en: "L2 regularization (Ridge)", es: "Regularización L2" },
  { conceptId: "validacion-cruzada", en: "Cross-validation", es: "Validación cruzada" },
  { conceptId: "arboles", en: "Decision tree", es: "Árbol de decisión" },
  { conceptId: "pca", en: "Principal Component Analysis (PCA)", es: "Análisis de componentes principales" },
  { conceptId: "kmeans", en: "K-means clustering", es: "Agrupamiento k-means" },
  { conceptId: "sesgo-varianza", en: "Bias-variance tradeoff", es: "Compromiso sesgo-varianza" },

  // Fase 2 — Deep Learning
  { conceptId: "perceptron", en: "Perceptron", es: "Perceptrón" },
  { conceptId: "activaciones", en: "Activation function", es: "Función de activación" },
  { conceptId: "backprop", en: "Backpropagation", es: "Retropropagación" },
  { conceptId: "sgd", en: "Stochastic Gradient Descent (SGD)", es: "Descenso de gradiente estocástico" },
  { conceptId: "momentum", en: "Momentum", es: "Momento (se usa igual, 'momentum', en español técnico)" },
  { conceptId: "adam", en: "Adam optimizer", es: "Optimizador Adam" },
  { conceptId: "init-pesos", en: "Weight initialization", es: "Inicialización de pesos" },
  { conceptId: "batchnorm", en: "Batch normalization", es: "Normalización por lotes" },
  { conceptId: "convolucion", en: "Convolution", es: "Convolución" },
  { conceptId: "pooling", en: "Pooling", es: "Agrupamiento (se usa igual, 'pooling', en español técnico)" },
  { conceptId: "rnn", en: "Recurrent Neural Network (RNN)", es: "Red neuronal recurrente" },
  { conceptId: "lstm", en: "Long Short-Term Memory (LSTM)", es: "Memoria a largo-corto plazo" },
  { conceptId: "vanishing-exploding", en: "Vanishing / exploding gradient", es: "Desvanecimiento / explosión del gradiente" },

  // Fase 3 — Deep learning geométrico
  { conceptId: "cnn-extrinseca", en: "Extrinsic CNN", es: "CNN extrínseca" },
  { conceptId: "cnn-intrinseca", en: "Intrinsic CNN", es: "CNN intrínseca" },
  { conceptId: "metodos-espectrales", en: "Spectral methods", es: "Métodos espectrales" },
  { conceptId: "laplaciano-grafo", en: "Graph Laplacian", es: "Laplaciano de grafo" },
  { conceptId: "atencion-como-conv", en: "Attention as generalized convolution", es: "Atención como convolución generalizada" },

  // Fase 4 — Transformers
  { conceptId: "self-attention", en: "Self-attention", es: "Autoatención" },
  { conceptId: "multi-head", en: "Multi-head attention", es: "Atención multi-cabeza" },
  { conceptId: "pos-encoding-sin", en: "Sinusoidal positional encoding", es: "Codificación posicional sinusoidal" },
  { conceptId: "rope", en: "Rotary Position Embedding (RoPE)", es: "Embeddings posicionales rotatorios" },
  { conceptId: "encoder-decoder", en: "Encoder-decoder architecture", es: "Arquitectura codificador-decodificador" },
  { conceptId: "decoder-only", en: "Decoder-only model", es: "Modelo solo-decodificador" },
  { conceptId: "encoder-only", en: "Encoder-only model", es: "Modelo solo-codificador" },
  { conceptId: "layer-norm", en: "Layer normalization", es: "Normalización de capa" },
  { conceptId: "pre-post-norm", en: "Pre-norm vs. post-norm", es: "Pre-normalización vs. post-normalización" },
  { conceptId: "residuales", en: "Residual (skip) connections", es: "Conexiones residuales" },
  { conceptId: "finetuning-variantes", en: "Fine-tuning (SFT / LoRA / QLoRA / RLHF)", es: "Ajuste fino" },

  // Fase 5 — Reinforcement Learning
  { conceptId: "mdp", en: "Markov Decision Process (MDP)", es: "Proceso de decisión de Markov" },
  { conceptId: "funcion-valor", en: "Value function", es: "Función de valor" },
  { conceptId: "funcion-q", en: "Action-value function (Q-function)", es: "Función de valor-acción (función Q)" },
  { conceptId: "bellman", en: "Bellman equation", es: "Ecuación de Bellman" },
  { conceptId: "prog-dinamica", en: "Dynamic programming", es: "Programación dinámica" },
  { conceptId: "monte-carlo", en: "Monte Carlo methods", es: "Métodos de Monte Carlo" },
  { conceptId: "td-learning", en: "Temporal Difference (TD) learning", es: "Aprendizaje por diferencias temporales" },
  { conceptId: "q-learning", en: "Q-learning", es: "Q-learning (se usa igual en español técnico)" },
  { conceptId: "sarsa", en: "SARSA", es: "SARSA (se usa igual en español técnico)" },
  { conceptId: "policy-gradients", en: "Policy gradients", es: "Gradientes de política" },
  { conceptId: "actor-critico", en: "Actor-critic", es: "Actor-crítico" },
  { conceptId: "dqn", en: "Deep Q-Network (DQN)", es: "Red Q profunda" },
  { conceptId: "ppo", en: "Proximal Policy Optimization (PPO)", es: "Optimización de política próxima" },
  { conceptId: "self-play", en: "Self-play", es: "Auto-juego (se usa igual, 'self-play', en español técnico)" },
  { conceptId: "puct", en: "PUCT search", es: "Búsqueda PUCT" },
  { conceptId: "nash", en: "Nash equilibrium", es: "Equilibrio de Nash" },
  { conceptId: "cfr", en: "Counterfactual Regret Minimization (CFR)", es: "Minimización de arrepentimiento contrafactual" },
  { conceptId: "exploitability", en: "Exploitability", es: "Explotabilidad" },
  { conceptId: "aivat", en: "AIVAT", es: "AIVAT (sigla, se usa igual en español)" },
  { conceptId: "crn", en: "Common Random Numbers (CRN)", es: "Números aleatorios comunes" },

  // Fase 6 — Electivos avanzados
  { conceptId: "rg-flow", en: "Renormalization Group (RG) flow / Neural Tangent Kernel (NTK)", es: "Flujo de grupo de renormalización / núcleo tangente neuronal" },
  { conceptId: "criticidad", en: "Criticality", es: "Criticidad" },
  { conceptId: "bayesian-nn", en: "Bayesian neural networks", es: "Redes neuronales bayesianas" },
  { conceptId: "sparse-models", en: "Sparse models", es: "Modelos dispersos" },
  { conceptId: "compressed-sensing", en: "Compressed sensing", es: "Muestreo comprimido" },
  { conceptId: "robust-pca", en: "Robust PCA", es: "PCA robusta" },

  // Fase 7 — Preparación de entrevistas
  { conceptId: "sft-vs-rlhf", en: "SFT / RLHF / DPO / GRPO / RLAIF", es: "(siglas — se usan igual en español técnico)" },
  { conceptId: "reward-modeling", en: "Reward modeling", es: "Modelado de recompensa" },
  { conceptId: "preference-modeling", en: "Preference modeling", es: "Modelado de preferencias" },
  { conceptId: "ml-system-design", en: "ML system design", es: "Diseño de sistemas de ML" },
  { conceptId: "on-off-policy", en: "On-policy / off-policy", es: "Dentro de política / fuera de política" },
  { conceptId: "exploracion-explotacion", en: "Exploration vs. exploitation", es: "Exploración vs. explotación" },
  { conceptId: "quadratic-attention", en: "Quadratic attention complexity", es: "Complejidad cuadrática de la atención" },

  // Fase 8 — Papers (nombres propios, no se traducen)
  { conceptId: "alphago", en: "AlphaGo", es: "AlphaGo (nombre propio, no se traduce)" },
  { conceptId: "alphago-zero", en: "AlphaGo Zero", es: "AlphaGo Zero (nombre propio, no se traduce)" },
  { conceptId: "alphazero", en: "AlphaZero", es: "AlphaZero (nombre propio, no se traduce)" },
  { conceptId: "cfr-original", en: "CFR (original paper)", es: "CFR (paper original)" },
  { conceptId: "deep-cfr", en: "Deep CFR", es: "Deep CFR (nombre propio, no se traduce)" },
  { conceptId: "libratus", en: "Libratus", es: "Libratus (nombre propio, no se traduce)" },
  { conceptId: "pluribus", en: "Pluribus", es: "Pluribus (nombre propio, no se traduce)" },
  { conceptId: "aivat-paper", en: "AIVAT (paper)", es: "AIVAT (paper)" },
];

export function glossaryFor(conceptId: string): GlossaryEntry | undefined {
  return glossary.find((g) => g.conceptId === conceptId);
}
