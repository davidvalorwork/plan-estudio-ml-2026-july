// Preguntas de selección simple (multiple choice) para el quiz — al menos 3 por concepto,
// 4 opciones cada una, con distractores plausibles (no obviamente descartables) para que
// el quiz realmente exija entender el concepto, no solo reconocer la respuesta correcta.

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const quizzes: Record<string, QuizQuestion[]> = {
  // ---------- FASE 0 ----------
  vectores: [
    { question: "¿Qué es un espacio vectorial?", options: ["Un conjunto de vectores cerrado bajo suma y multiplicación por escalar", "Cualquier conjunto de números reales", "Un conjunto de matrices cuadradas únicamente", "Un espacio con una sola dimensión fija"], correctIndex: 0 },
    { question: "¿Cuál es la norma del vector (3,4)?", options: ["5", "7", "12", "25"], correctIndex: 0 },
    { question: "¿Qué operación no garantiza quedarte dentro del mismo espacio vectorial?", options: ["El producto de dos vectores entre sí", "La suma de dos vectores", "La multiplicación por un escalar", "La resta de dos vectores"], correctIndex: 0 },
  ],
  matrices: [
    { question: "¿Qué hace una matriz al multiplicar a un vector?", options: ["Lo transforma (rota, escala o proyecta)", "Lo convierte siempre en un escalar", "Solo puede sumarlo a otro vector", "No lo afecta, solo lo copia"], correctIndex: 0 },
    { question: "Una capa de red neuronal sin activación equivale a:", options: ["Una multiplicación de matrices", "Una función de activación no lineal", "Un árbol de decisión", "Una distribución de probabilidad"], correctIndex: 0 },
    { question: "¿Qué matriz aplicada a (1,0) da (0,1)?", options: ["La matriz de rotación de 90°", "La matriz identidad", "La matriz cero", "La matriz de escalado por 2"], correctIndex: 0 },
  ],
  autovalores: [
    { question: "¿Qué caracteriza a un autovector de una matriz?", options: ["Al transformarlo, no cambia de dirección, solo se escala", "Siempre tiene norma 1", "Es perpendicular a todos los demás vectores", "Solo existe en matrices simétricas"], correctIndex: 0 },
    { question: "Para A=[[2,0],[0,3]], ¿cuál es el autovalor asociado a (1,0)?", options: ["2", "3", "1", "0"], correctIndex: 0 },
    { question: "¿Para qué se usan los autovalores en ML?", options: ["Para encontrar direcciones principales de varianza en PCA", "Para calcular la entropía cruzada", "Para inicializar pesos en cero", "Para definir la función de activación"], correctIndex: 0 },
  ],
  svd: [
    { question: "¿En qué factoriza la SVD una matriz?", options: ["En rotación, escalado y otra rotación (U·Σ·Vᵀ)", "En suma de dos matrices triangulares", "En el producto de la matriz por su inversa", "En una única matriz diagonal"], correctIndex: 0 },
    { question: "¿Qué representan los valores singulares (Σ)?", options: ["Los factores de escala en cada dirección", "Los ángulos de rotación", "El determinante de la matriz", "El número de filas de la matriz"], correctIndex: 0 },
    { question: "¿Cuál de estas técnicas usa la SVD como base matemática?", options: ["PCA", "K-means", "Regresión logística", "Árboles de decisión"], correctIndex: 0 },
  ],
  derivadas: [
    { question: "¿Qué mide la derivada de una función en un punto?", options: ["La tasa de cambio instantánea (pendiente de la tangente)", "El valor máximo de la función", "El área bajo la curva", "El promedio de la función en un intervalo"], correctIndex: 0 },
    { question: "Si f(x)=x², ¿cuánto vale f'(3)?", options: ["6", "9", "3", "2"], correctIndex: 0 },
    { question: "En ML, la derivada de la pérdida respecto a un parámetro sirve para:", options: ["Saber hacia dónde y cuánto mover ese parámetro", "Calcular la exactitud del modelo", "Definir la arquitectura de la red", "Elegir el tamaño del batch"], correctIndex: 0 },
  ],
  "regla-cadena": [
    { question: "¿Qué establece la regla de la cadena?", options: ["La derivada de una composición es el producto de las derivadas de cada parte", "La derivada de una suma es la suma de las derivadas", "La derivada de un producto es el producto de las derivadas", "La derivada de una constante es la constante misma"], correctIndex: 0 },
    { question: "Backpropagation aplica la regla de la cadena:", options: ["Capa por capa, desde la salida hacia la entrada", "Solo en la primera capa de la red", "Sin necesitar ningún cálculo de derivadas", "Únicamente en redes convolucionales"], correctIndex: 0 },
    { question: "Si y=(3x+1)², ¿cuánto vale dy/dx?", options: ["6(3x+1)", "2(3x+1)", "3(3x+1)²", "9x+1"], correctIndex: 0 },
  ],
  gradiente: [
    { question: "¿Hacia dónde apunta el gradiente de una función?", options: ["Hacia la dirección de máximo crecimiento", "Hacia la dirección de máximo decrecimiento", "Siempre hacia el origen", "Es perpendicular a la función siempre"], correctIndex: 0 },
    { question: "Para f(x,y)=x²+y², ¿cuál es ∇f en el punto (1,1)?", options: ["(2,2)", "(1,1)", "(2,0)", "(0,2)"], correctIndex: 0 },
    { question: "¿Por qué en descenso de gradiente se resta el gradiente?", options: ["Porque apunta hacia donde la función crece, y queremos ir hacia donde decrece", "Porque sumarlo siempre diverge", "Es una convención arbitraria sin razón matemática", "Porque el gradiente siempre es negativo"], correctIndex: 0 },
  ],
  jacobiano: [
    { question: "¿Qué es la matriz Jacobiana?", options: ["Todas las derivadas parciales de cada salida respecto a cada entrada, para funciones vectoriales", "La matriz de segundas derivadas de una función escalar", "Una matriz que siempre es diagonal", "El vector gradiente de una función escalar"], correctIndex: 0 },
    { question: "El Jacobiano generaliza al gradiente para:", options: ["Funciones con varias salidas", "Funciones con una sola entrada y salida", "Matrices simétricas únicamente", "Funciones constantes"], correctIndex: 0 },
    { question: "¿En qué contexto de deep learning aparece el análisis del Jacobiano?", options: ["Estabilidad de RNNs", "Regularización L1", "K-means", "Validación cruzada"], correctIndex: 0 },
  ],
  hessiano: [
    { question: "¿Qué mide la matriz Hessiana?", options: ["Las segundas derivadas (cómo cambia la curvatura)", "La primera derivada de una función vectorial", "El valor de la función en un punto", "La distancia entre dos puntos"], correctIndex: 0 },
    { question: "¿Para qué sirve el Hessiano en optimización?", options: ["Para saber si un punto crítico es mínimo, máximo o silla", "Para calcular la tasa de aprendizaje óptima siempre", "Para normalizar los datos de entrada", "Para elegir el número de capas de una red"], correctIndex: 0 },
    { question: "Si el Hessiano en un punto tiene todos los autovalores positivos, ese punto es:", options: ["Un mínimo local", "Un máximo local", "Un punto de silla", "Un punto de inflexión"], correctIndex: 0 },
  ],
  distribuciones: [
    { question: "¿Qué distribución modela un evento binario como lanzar una moneda?", options: ["Bernoulli", "Normal", "Categórica", "Uniforme continua"], correctIndex: 0 },
    { question: "¿Qué distribución produce típicamente la función softmax?", options: ["Categórica", "Bernoulli", "Gaussiana", "Exponencial"], correctIndex: 0 },
    { question: "¿Qué distribución se usa comúnmente para modelar el ruido en los pesos de una red?", options: ["Normal/Gaussiana", "Bernoulli", "Categórica", "Binomial negativa"], correctIndex: 0 },
  ],
  "esperanza-varianza": [
    { question: "Para dos variables independientes X e Y, Var(X+Y) es:", options: ["Var(X) + Var(Y)", "Var(X) · Var(Y)", "√(Var(X) + Var(Y))", "Var(X) − Var(Y)"], correctIndex: 0 },
    { question: "¿Qué es la esperanza de una variable aleatoria?", options: ["El promedio ponderado por probabilidad de sus valores posibles", "El valor más frecuente (moda)", "El valor máximo posible", "La raíz cuadrada de la varianza"], correctIndex: 0 },
    { question: "¿La linealidad de la esperanza, E[X+Y]=E[X]+E[Y], requiere que X e Y sean independientes?", options: ["No, vale siempre, sean independientes o no", "Sí, siempre se requiere independencia", "Solo si ambas son Gaussianas", "Solo si tienen la misma varianza"], correctIndex: 0 },
  ],
  bayes: [
    { question: "El teorema de Bayes se escribe como:", options: ["P(A|B) = P(B|A)·P(A) / P(B)", "P(A|B) = P(A)·P(B)", "P(A|B) = P(B) / P(A)", "P(A|B) = P(A) − P(B|A)"], correctIndex: 0 },
    { question: "En el teorema de Bayes, P(A) se conoce como:", options: ["El prior", "La verosimilitud", "La evidencia", "El posterior"], correctIndex: 0 },
    { question: "Con una enfermedad de baja prevalencia y un test de alta sensibilidad, P(enfermo|positivo) suele ser:", options: ["Mucho menor de lo que uno esperaría intuitivamente", "Siempre igual a la sensibilidad del test", "Siempre 100%", "Independiente de la prevalencia"], correctIndex: 0 },
  ],
  mle: [
    { question: "¿Qué maximiza el estimador de máxima verosimilitud (MLE)?", options: ["La probabilidad de haber observado los datos reales, dado el modelo", "El número de parámetros del modelo", "La varianza del modelo", "El error de validación directamente"], correctIndex: 0 },
    { question: "Minimizar el error cuadrático medio equivale a MLE bajo el supuesto de:", options: ["Ruido Gaussiano", "Ruido Bernoulli", "Ausencia total de ruido", "Ruido uniforme discreto"], correctIndex: 0 },
    { question: "Si tirás una moneda 10 veces y salen 7 caras, ¿cuál es el MLE de p(cara)?", options: ["0.7", "0.5", "1.0", "0.3"], correctIndex: 0 },
  ],
  "descenso-gradiente": [
    { question: "¿Qué actualiza el descenso de gradiente en cada paso?", options: ["Los parámetros, restando una fracción del gradiente", "Los datos de entrenamiento", "La arquitectura de la red", "Las etiquetas del dataset"], correctIndex: 0 },
    { question: "¿Qué representa la tasa de aprendizaje en descenso de gradiente?", options: ["La fracción del gradiente que se resta en cada paso", "El número total de épocas", "El tamaño del dataset", "La cantidad de capas de la red"], correctIndex: 0 },
    { question: "Una tasa de aprendizaje demasiado alta suele causar:", options: ["Que el entrenamiento diverja u oscile sin converger", "Convergencia más rápida siempre, sin riesgo", "Que el gradiente deje de calcularse", "Que la red se vuelva automáticamente convexa"], correctIndex: 0 },
  ],
  convexidad: [
    { question: "¿Qué garantiza que una función de pérdida sea convexa?", options: ["Que cualquier mínimo local sea también el mínimo global", "Que la función tenga múltiples mínimos igual de buenos", "Que el descenso de gradiente nunca converja", "Que la función no tenga derivada"], correctIndex: 0 },
    { question: "¿Cuál de estas funciones es convexa?", options: ["f(x)=x²", "f(x)=x⁴−x²", "f(x)=sin(x)", "f(x)=−x²"], correctIndex: 0 },
    { question: "La pérdida de una red neuronal profunda típicamente es:", options: ["No convexa, con posibles múltiples mínimos locales", "Siempre convexa, como la regresión lineal", "Una función constante", "Siempre cóncava"], correctIndex: 0 },
  ],
  lagrange: [
    { question: "¿Para qué se usan los multiplicadores de Lagrange?", options: ["Para optimizar una función sujeta a una restricción", "Para calcular derivadas de segundo orden únicamente", "Para normalizar datos de entrada", "Para inicializar pesos de una red"], correctIndex: 0 },
    { question: "Al usar Lagrange, ¿qué se introduce para manejar la restricción?", options: ["Una variable extra (el multiplicador)", "Una nueva capa de red neuronal", "Un nuevo conjunto de datos", "Una función de activación adicional"], correctIndex: 0 },
    { question: "Minimizando x²+y² sujeto a x+y=1, la solución con Lagrange es:", options: ["x=y=0.5", "x=1, y=0", "x=0, y=0", "x=y=1"], correctIndex: 0 },
  ],

  // ---------- FASE 1 ----------
  "regresion-lineal": [
    { question: "¿Qué función de pérdida usa típicamente la regresión lineal?", options: ["Error cuadrático medio", "Entropía cruzada", "Norma ℓ0", "Divergencia KL"], correctIndex: 0 },
    { question: "¿Qué forma asume la regresión lineal para la relación entre variables?", options: ["Una línea o hiperplano (w·x+b)", "Una curva sigmoide", "Un árbol de particiones", "Una distribución categórica"], correctIndex: 0 },
    { question: "Además de la solución iterativa por gradiente, la regresión lineal tiene:", options: ["Una solución exacta (ecuación normal)", "Solo solución aproximada por Monte Carlo", "Solución exclusivamente vía redes neuronales", "Ninguna solución cerrada"], correctIndex: 0 },
  ],
  "regresion-logistica": [
    { question: "¿Qué función usa la regresión logística para producir una probabilidad?", options: ["Sigmoide", "ReLU", "Softmax de más de 2 clases únicamente", "Identidad"], correctIndex: 0 },
    { question: "¿Qué pérdida se minimiza al entrenar regresión logística?", options: ["Entropía cruzada", "Error cuadrático medio", "Norma ℓ2 de los pesos únicamente", "Varianza de las predicciones"], correctIndex: 0 },
    { question: "Si z=w·x+b=1.5, sigmoid(1.5) es aproximadamente:", options: ["0.82", "0.50", "1.50", "0.18"], correctIndex: 0 },
  ],
  overfitting: [
    { question: "¿Cómo se ve el overfitting en las curvas de error?", options: ["Error de entrenamiento bajo, error de validación alto", "Error alto en ambos conjuntos", "Error bajo en ambos conjuntos", "Error de validación menor que el de entrenamiento"], correctIndex: 0 },
    { question: "El underfitting ocurre cuando el modelo es:", options: ["Demasiado simple para capturar el patrón real", "Demasiado complejo y memoriza ruido", "Perfectamente calibrado", "Entrenado con demasiados datos"], correctIndex: 0 },
    { question: "Un polinomio de grado 15 que pasa exactamente por 10 puntos de entrenamiento pero oscila entre ellos es un caso de:", options: ["Overfitting", "Underfitting", "Convexidad perfecta", "Regularización óptima"], correctIndex: 0 },
  ],
  "reg-l1": [
    { question: "¿Qué efecto característico tiene la regularización L1 sobre los pesos?", options: ["Empuja muchos pesos exactamente a cero", "Los encoge suavemente sin llegar a cero", "Los multiplica todos por 2", "No afecta a los pesos, solo al sesgo"], correctIndex: 0 },
    { question: "¿Qué norma penaliza L1?", options: ["La suma de los valores absolutos de los pesos", "La suma de los cuadrados de los pesos", "El máximo de los pesos", "El número de capas"], correctIndex: 0 },
    { question: "L1 es útil especialmente para:", options: ["Selección automática de features", "Acelerar la convergencia siempre", "Eliminar la necesidad de datos de validación", "Aumentar la varianza del modelo"], correctIndex: 0 },
  ],
  "reg-l2": [
    { question: "¿Qué efecto tiene L2 sobre los pesos, a diferencia de L1?", options: ["Los encoge suavemente sin llevarlos a cero exacto", "Los lleva exactamente a cero", "Los deja completamente sin cambios", "Los invierte de signo"], correctIndex: 0 },
    { question: "¿Qué norma penaliza L2?", options: ["La suma de los cuadrados de los pesos", "La suma de los valores absolutos", "El número de pesos distintos de cero", "La media de los pesos"], correctIndex: 0 },
    { question: "En deep learning, L2 se conoce comúnmente como:", options: ["Weight decay", "Batch normalization", "Dropout", "Early stopping"], correctIndex: 0 },
  ],
  "validacion-cruzada": [
    { question: "¿Qué problema resuelve k-fold cross-validation?", options: ["Dar una estimación más confiable del error real que una sola partición train/test", "Eliminar la necesidad de datos de test", "Acelerar el entrenamiento del modelo", "Reducir el número de parámetros del modelo"], correctIndex: 0 },
    { question: "En 5-fold CV, ¿cuántas veces se entrena el modelo?", options: ["5", "1", "10", "k al cuadrado"], correctIndex: 0 },
    { question: "En cada fold de k-fold CV, ¿qué se usa para validar?", options: ["La parte que no se usó para entrenar en ese fold", "Todo el dataset completo", "Solo el primer 10% de los datos siempre", "Datos sintéticos generados al azar"], correctIndex: 0 },
  ],
  arboles: [
    { question: "¿Con qué criterio elige un árbol de decisión dónde partir un nodo?", options: ["Impureza de Gini o ganancia de información", "El promedio de todas las features", "Un número aleatorio en cada nodo", "El orden alfabético de las features"], correctIndex: 0 },
    { question: "¿Qué método de ensamble se basa en árboles de decisión?", options: ["Random Forest", "K-means", "PCA", "Regresión logística"], correctIndex: 0 },
    { question: "Un árbol de decisión separa las clases mediante:", options: ["Particiones/reglas discretas sobre las features", "Una transformación lineal continua", "Una distribución de probabilidad conjunta", "Una única línea recta global"], correctIndex: 0 },
  ],
  pca: [
    { question: "¿Qué maximiza la primera componente principal?", options: ["La varianza explicada de los datos proyectados", "El número de clusters", "La entropía cruzada", "El error de reconstrucción sin reducir dimensiones"], correctIndex: 0 },
    { question: "Matemáticamente, la primera componente principal es:", options: ["El autovector con mayor autovalor de la matriz de covarianza", "El autovector con menor autovalor", "La media de todos los datos", "La mediana de cada feature"], correctIndex: 0 },
    { question: "PCA se usa típicamente para:", options: ["Reducir dimensiones perdiendo la menor información posible", "Aumentar el número de features", "Clasificar datos etiquetados", "Generar nuevos datos sintéticos"], correctIndex: 0 },
  ],
  kmeans: [
    { question: "¿Cómo se actualiza un centroide en k-means?", options: ["Como el promedio de los puntos asignados a él", "Como el punto más cercano al origen", "Sumando 1 en cada iteración", "Nunca se actualiza tras la inicialización"], correctIndex: 0 },
    { question: "K-means es un algoritmo de aprendizaje:", options: ["No supervisado", "Supervisado", "Por refuerzo", "Semi-supervisado obligatoriamente"], correctIndex: 0 },
    { question: "¿Cuándo se detiene la iteración de k-means?", options: ["Cuando los centroides dejan de moverse significativamente", "Después de exactamente 1 iteración siempre", "Cuando el error de validación cruzada es cero", "Nunca, es un proceso infinito"], correctIndex: 0 },
  ],
  "sesgo-varianza": [
    { question: "¿Qué describe el dilema sesgo-varianza?", options: ["Que bajar el sesgo típicamente sube la varianza y viceversa", "Que sesgo y varianza siempre bajan juntos", "Que la varianza no depende de los datos de entrenamiento", "Que el sesgo solo existe en redes neuronales"], correctIndex: 0 },
    { question: "Un modelo demasiado simple para el patrón real tiene:", options: ["Alto sesgo", "Alta varianza únicamente", "Sesgo y varianza igual a cero", "Solo alta varianza, nunca sesgo"], correctIndex: 0 },
    { question: "Un árbol muy profundo entrenado con pocos datos suele tener:", options: ["Baja sesgo pero alta varianza", "Alto sesgo y baja varianza", "Ni sesgo ni varianza", "Sesgo y varianza idénticos siempre"], correctIndex: 0 },
  ],

  // ---------- FASE 2 ----------
  perceptron: [
    { question: "¿Qué problema NO puede resolver un perceptrón simple?", options: ["XOR (no linealmente separable)", "AND", "OR", "Cualquier problema con frontera lineal"], correctIndex: 0 },
    { question: "Un perceptrón simple separa clases usando:", options: ["Una frontera lineal (una línea recta)", "Una curva arbitraria", "Un árbol de decisiones", "Una distribución Gaussiana"], correctIndex: 0 },
    { question: "¿Qué componente tiene un perceptrón además de los pesos?", options: ["Un sesgo (bias) y una función escalón", "Solo una matriz de covarianza", "Una capa de pooling obligatoria", "Un mecanismo de atención"], correctIndex: 0 },
  ],
  activaciones: [
    { question: "¿Por qué ReLU ayuda con el vanishing gradient, a diferencia de sigmoid?", options: ["No se satura del lado positivo", "Siempre devuelve valores negativos", "No tiene derivada en ningún punto", "Es idéntica a la función identidad en todo su dominio"], correctIndex: 0 },
    { question: "¿Qué activación es una versión suave de ReLU usada en Transformers?", options: ["GELU", "Sigmoid", "Escalón", "Identidad"], correctIndex: 0 },
    { question: "Sin funciones de activación no lineales entre capas, una red profunda equivaldría a:", options: ["Una sola transformación lineal", "Una red exponencialmente más potente", "Un mecanismo de atención completo", "Un árbol de decisión"], correctIndex: 0 },
  ],
  backprop: [
    { question: "¿Qué regla matemática usa backpropagation?", options: ["La regla de la cadena", "El teorema de Bayes", "La descomposición SVD", "La ecuación de Bellman"], correctIndex: 0 },
    { question: "Backprop calcula el gradiente respecto a los pesos:", options: ["Desde la salida hacia la entrada, reutilizando cálculos intermedios", "Solo para la última capa de la red", "Sin usar ninguna derivada", "Únicamente en redes sin capas ocultas"], correctIndex: 0 },
    { question: "Con L=(y−ŷ)² y ŷ=w·x, dL/dw es:", options: ["−2(y−ŷ)·x", "2(y−ŷ)", "−x", "(y−ŷ)²"], correctIndex: 0 },
  ],
  sgd: [
    { question: "¿En qué se diferencia SGD del descenso de gradiente batch?", options: ["Actualiza los pesos con un ejemplo o mini-batch, no con todo el dataset", "Nunca actualiza los pesos", "Requiere calcular el Hessiano en cada paso", "Solo funciona con datos categóricos"], correctIndex: 0 },
    { question: "Con 1000 ejemplos y mini-batches de 32, una época hace aproximadamente:", options: ["31 actualizaciones de pesos", "1 actualización de pesos", "1000 actualizaciones de pesos", "32 épocas completas"], correctIndex: 0 },
    { question: "El gradiente estimado por SGD, comparado con el gradiente batch exacto, es:", options: ["Más ruidoso, pero permite muchos más pasos en el mismo tiempo", "Idéntico siempre", "Imposible de calcular", "Solo válido para regresión lineal"], correctIndex: 0 },
  ],
  momentum: [
    { question: "¿Qué problema de SGD ataca el momentum?", options: ["El zig-zagueo en superficies de pérdida alargadas", "La falta de datos de entrenamiento", "El overfitting exclusivamente", "La necesidad de normalizar los datos"], correctIndex: 0 },
    { question: "Momentum acumula:", options: ["Un promedio móvil de los gradientes anteriores", "Solo el gradiente del paso actual", "El error cuadrático medio total", "El número de épocas transcurridas"], correctIndex: 0 },
    { question: "Con β=0.9, la actualización de momentum es:", options: ["v = 0.9·v_anterior + gradiente_actual", "v = gradiente_actual únicamente", "v = 0.9 · pérdida_actual", "v = peso_actual − peso_anterior"], correctIndex: 0 },
  ],
  adam: [
    { question: "¿Qué combina el optimizador Adam?", options: ["Momentum y una tasa de aprendizaje adaptativa por parámetro", "Solo descenso de gradiente batch puro", "Únicamente regularización L2", "Solo búsqueda aleatoria de hiperparámetros"], correctIndex: 0 },
    { question: "Adam mantiene, para cada peso, un promedio móvil de:", options: ["El gradiente y el gradiente al cuadrado", "Solo la pérdida total", "Solo el número de la época", "Solo la tasa de aprendizaje inicial"], correctIndex: 0 },
    { question: "¿Por qué Adam es popular como optimizador por defecto?", options: ["Converge rápido sin mucho ajuste manual", "Es el único optimizador que existe", "Requiere calcular el Hessiano completo", "Solo funciona con batch size de 1"], correctIndex: 0 },
  ],
  "init-pesos": [
    { question: "¿Por qué no se inicializan los pesos de una red en cero?", options: ["Todas las neuronas de una capa calcularían lo mismo y no se rompería la simetría", "Porque cero no es un número válido en punto flotante", "Porque la red se volvería automáticamente convexa", "Porque aumentaría el tamaño del dataset"], correctIndex: 0 },
    { question: "La inicialización He está calibrada especialmente para:", options: ["Redes con activación ReLU", "Redes sin ninguna activación", "Árboles de decisión", "K-means"], correctIndex: 0 },
    { question: "Los esquemas de inicialización como Xavier/He se calibran según:", options: ["El tamaño de la capa y la activación usada", "El número de épocas de entrenamiento", "La cantidad de datos de validación", "El color de las etiquetas del dataset"], correctIndex: 0 },
  ],
  batchnorm: [
    { question: "¿Qué normaliza BatchNorm?", options: ["Las activaciones de una capa, usando media/desviación del mini-batch", "Los datos crudos de entrada únicamente, antes de entrenar", "El número de parámetros del modelo", "La tasa de aprendizaje del optimizador"], correctIndex: 0 },
    { question: "BatchNorm ayuda a estabilizar el entrenamiento porque:", options: ["Evita que la distribución de activaciones cambie demasiado entre capas", "Elimina por completo la necesidad de una función de pérdida", "Convierte la red en un árbol de decisión", "Aumenta artificialmente el tamaño del dataset"], correctIndex: 0 },
    { question: "A diferencia de layer norm, BatchNorm normaliza:", options: ["A través del batch, por cada feature", "A través de las features, por cada ejemplo individual", "Solo la última capa de la red", "Solo los pesos, nunca las activaciones"], correctIndex: 0 },
  ],
  convolucion: [
    { question: "¿Qué invarianza explota la convolución?", options: ["La invarianza traslacional (un patrón se reconoce en cualquier posición)", "La invarianza a la escala del batch", "La invarianza al orden temporal de una secuencia", "La invarianza al idioma del texto"], correctIndex: 0 },
    { question: "Una convolución usa, comparado con una capa totalmente conectada:", options: ["Muchos menos parámetros, gracias a compartir pesos", "Exactamente los mismos parámetros", "Más parámetros siempre", "Ningún parámetro entrenable"], correctIndex: 0 },
    { question: "Un filtro de bordes 3x3 deslizado sobre una imagen sirve para:", options: ["Resaltar cambios bruscos de intensidad (bordes)", "Aumentar la resolución de la imagen", "Clasificar directamente la imagen sin más capas", "Eliminar el ruido de forma perfecta"], correctIndex: 0 },
  ],
  pooling: [
    { question: "¿Qué logra una capa de pooling?", options: ["Reduce el tamaño espacial resumiendo regiones en un solo valor", "Aumenta el número de parámetros entrenables", "Reemplaza por completo a las capas convolucionales", "Normaliza los pesos de la red"], correctIndex: 0 },
    { question: "Max-pooling 2x2 sobre [[1,3],[2,4]] da:", options: ["4", "10", "2.5", "1"], correctIndex: 0 },
    { question: "El pooling da cierta invarianza a:", options: ["Pequeñas traslaciones de la entrada", "Cambios en la tasa de aprendizaje", "El número de clases del problema", "El tipo de optimizador usado"], correctIndex: 0 },
  ],
  rnn: [
    { question: "¿Qué limitación tienen las RNN simples con secuencias largas?", options: ["El gradiente tiende a desvanecerse o explotar con muchos pasos", "No pueden procesar texto en ningún caso", "Solo aceptan una entrada por vez, sin secuencia", "No tienen ningún estado oculto"], correctIndex: 0 },
    { question: "Una RNN mantiene, a través del tiempo, un(a):", options: ["Estado oculto que resume lo visto hasta el momento", "Matriz de covarianza fija", "Árbol de decisión por cada paso", "Distribución uniforme constante"], correctIndex: 0 },
    { question: "El entrenamiento de una RNN a través de muchos pasos se llama:", options: ["Backpropagation through time", "Forward propagation only", "K-fold recurrente", "Batch normalization temporal"], correctIndex: 0 },
  ],
  lstm: [
    { question: "¿Qué mecanismo usa LSTM para mitigar el vanishing gradient?", options: ["Una celda de memoria controlada por compuertas", "Eliminar por completo el estado oculto", "Usar solo convoluciones en vez de recurrencia", "Ignorar los primeros pasos de la secuencia"], correctIndex: 0 },
    { question: "¿Cuántos tipos principales de compuertas tiene una LSTM clásica?", options: ["3 (olvido, entrada, salida)", "1 (solo de salida)", "5", "0, no usa compuertas"], correctIndex: 0 },
    { question: "La compuerta de olvido de una LSTM decide:", options: ["Qué información descartar de la memoria", "Cuántas capas tendrá la red", "El valor de la tasa de aprendizaje", "El tamaño del batch de entrenamiento"], correctIndex: 0 },
  ],
  "vanishing-exploding": [
    { question: "¿Por qué ocurre el vanishing gradient en redes muy profundas?", options: ["Se multiplican muchos factores <1 en la cadena de derivadas", "Los pesos siempre se inicializan en 1", "El optimizador Adam lo causa directamente", "Solo ocurre en capas convolucionales"], correctIndex: 0 },
    { question: "Si cada capa multiplica el gradiente por 0.5 y hay 20 capas, el gradiente en la primera capa es aproximadamente:", options: ["0.000001 (prácticamente cero)", "0.5", "10", "1"], correctIndex: 0 },
    { question: "El exploding gradient ocurre cuando los factores multiplicados en la cadena son:", options: ["Sistemáticamente mayores a 1", "Sistemáticamente menores a 1", "Siempre exactamente 1", "Siempre negativos"], correctIndex: 0 },
  ],

  // ---------- FASE 3 ----------
  "cnn-extrinseca": [
    { question: "¿Qué significa que un método sea 'extrínseco' para formas 3D?", options: ["Procesa la forma en relación al espacio ambiente donde está embebida", "Procesa la forma solo mirando su superficie interna", "Ignora completamente las coordenadas x,y,z", "Solo funciona con formas 2D"], correctIndex: 0 },
    { question: "Un ejemplo de representación extrínseca es:", options: ["Una grilla de vóxeles", "Una malla con distancias geodésicas", "El Laplaciano de la superficie", "Una curvatura intrínseca"], correctIndex: 0 },
    { question: "Los métodos extrínsecos, a diferencia de los intrínsecos, dependen de:", options: ["Cómo la forma está embebida/orientada en el espacio", "Únicamente la topología de la superficie", "El número de vértices de la malla", "La cantidad de datos de entrenamiento"], correctIndex: 0 },
  ],
  "cnn-intrinseca": [
    { question: "¿Qué diferencia a una CNN intrínseca de una extrínseca?", options: ["Opera sobre la superficie usando propiedades geométricas propias (geodésicas, curvatura)", "Solo funciona con imágenes 2D", "Ignora por completo la forma de los datos", "Requiere una grilla de vóxeles obligatoriamente"], correctIndex: 0 },
    { question: "Una CNN intrínseca es invariante a:", options: ["Cómo la forma está rotada o embebida en 3D", "El número de capas de la red", "El tamaño del batch de entrenamiento", "La tasa de aprendizaje usada"], correctIndex: 0 },
    { question: "Medir distancias 'caminando sobre la superficie' se llama:", options: ["Distancia geodésica", "Distancia euclidiana", "Distancia de Hamming", "Distancia de Mahalanobis"], correctIndex: 0 },
  ],
  "metodos-espectrales": [
    { question: "¿Qué operador se diagonaliza en los métodos espectrales sobre grafos?", options: ["El Laplaciano del grafo", "La matriz de confusión", "La matriz Jacobiana", "La matriz de covarianza de los pesos"], correctIndex: 0 },
    { question: "Los métodos espectrales son un equivalente, para grafos, de:", options: ["La transformada de Fourier", "La regla de la cadena", "El teorema de Bayes", "El descenso de gradiente"], correctIndex: 0 },
    { question: "Los autovectores del Laplaciano de un grafo social pueden usarse para:", options: ["Detectar comunidades de nodos muy conectados entre sí", "Calcular la pérdida de entrenamiento", "Definir la tasa de aprendizaje", "Normalizar los pesos de una CNN"], correctIndex: 0 },
  ],
  "laplaciano-grafo": [
    { question: "¿Cómo se define el Laplaciano de un grafo?", options: ["L = D − A (grado menos adyacencia)", "L = A · Aᵀ", "L = D + A", "L = A⁻¹"], correctIndex: 0 },
    { question: "Los autovalores del Laplaciano indican:", options: ["Qué tan 'suave' u 'oscilante' es un patrón sobre el grafo", "El número total de nodos", "La cantidad de aristas del grafo", "El grado máximo de un nodo"], correctIndex: 0 },
    { question: "Para un grafo triángulo (3 nodos, todos conectados), el Laplaciano tiene en la diagonal:", options: ["2 (el grado de cada nodo)", "3", "0", "1"], correctIndex: 0 },
  ],
  "atencion-como-conv": [
    { question: "¿Sobre qué estructura 'convoluciona' conceptualmente la self-attention?", options: ["Un grafo completo (todos los tokens conectados con todos)", "Solo una grilla fija de vecinos cercanos", "Ningún tipo de estructura, es completamente aleatoria", "Solo el primer y el último token"], correctIndex: 0 },
    { question: "A diferencia de la convolución, los pesos de la atención se calculan:", options: ["Dinámicamente según el contenido", "De forma fija antes de entrenar", "Siempre en cero", "Solo una vez por dataset"], correctIndex: 0 },
    { question: "Esta idea unificadora pertenece al campo de:", options: ["Deep learning geométrico", "Programación dinámica", "Teoría de juegos", "Compressed sensing"], correctIndex: 0 },
  ],

  // ---------- FASE 4 ----------
  "self-attention": [
    { question: "¿Qué representan Query, Key y Value en self-attention?", options: ["Qué busco, qué ofrezco, y el contenido que aporto si me prestan atención", "Tres capas convolucionales distintas", "Tres funciones de pérdida distintas", "Tres optimizadores distintos"], correctIndex: 0 },
    { question: "La atención entre dos tokens se calcula comparando:", options: ["La Query de uno con la Key del otro", "Solo sus posiciones absolutas", "El tamaño del vocabulario", "La cantidad de capas del modelo"], correctIndex: 0 },
    { question: "El producto punto Query·Key se escala típicamente por:", options: ["√d (raíz de la dimensión)", "El número total de tokens", "La tasa de aprendizaje", "El tamaño del batch"], correctIndex: 0 },
  ],
  "multi-head": [
    { question: "¿Por qué usar varias cabezas de atención en vez de una sola?", options: ["Cada cabeza puede aprender a atender un tipo distinto de relación en paralelo", "Para reducir el número total de parámetros del modelo", "Porque una sola cabeza no puede usar softmax", "Para eliminar la necesidad de positional encoding"], correctIndex: 0 },
    { question: "Cada cabeza de atención tiene:", options: ["Sus propias proyecciones de Q/K/V", "Exactamente los mismos pesos que las demás cabezas", "Una función de pérdida distinta", "Un optimizador distinto"], correctIndex: 0 },
    { question: "Los resultados de las distintas cabezas finalmente se:", options: ["Concatenan", "Promedian siempre", "Descartan menos uno", "Multiplican entre sí"], correctIndex: 0 },
  ],
  "pos-encoding-sin": [
    { question: "¿Por qué un Transformer necesita codificación posicional?", options: ["Porque self-attention por sí sola no distingue el orden de los tokens", "Porque las CNN no tienen convoluciones", "Porque el softmax lo requiere matemáticamente", "Porque reduce el número de parámetros"], correctIndex: 0 },
    { question: "El encoding posicional sinusoidal usa funciones de:", options: ["Seno y coseno de distinta frecuencia según la posición", "Solo números aleatorios fijos", "Solo la función ReLU", "Solo el índice del token sin transformar"], correctIndex: 0 },
    { question: "Sin codificación posicional, 'perro muerde hombre' y 'hombre muerde perro':", options: ["Generarían la misma representación de atención", "Siempre se distinguirían perfectamente", "No podrían tokenizarse", "Requerirían dos modelos distintos"], correctIndex: 0 },
  ],
  rope: [
    { question: "¿Cómo codifica la posición RoPE?", options: ["Rotando los vectores Query/Key según su posición", "Sumando un vector aleatorio fijo", "Eliminando la información de posición por completo", "Usando solo el índice absoluto sin transformar"], correctIndex: 0 },
    { question: "La atención con RoPE termina dependiendo de:", options: ["La distancia relativa entre tokens", "Solo la posición absoluta del primer token", "El tamaño del vocabulario", "El número de capas del modelo"], correctIndex: 0 },
    { question: "¿Por qué los LLMs modernos de contexto largo prefieren RoPE sobre el encoding sinusoidal original?", options: ["Generaliza mejor a secuencias más largas que las vistas en entrenamiento", "Es más lento pero más preciso siempre", "Elimina la necesidad de atención multi-cabeza", "Requiere menos capas de Transformer"], correctIndex: 0 },
  ],
  "encoder-decoder": [
    { question: "¿Qué hace distinto al decoder del encoder en esta arquitectura?", options: ["Usa self-attention enmascarada y atención cruzada hacia el encoder", "El decoder no usa ninguna atención", "El encoder genera texto token por token", "No hay ninguna diferencia real"], correctIndex: 0 },
    { question: "El encoder procesa la secuencia de entrada con:", options: ["Self-attention completa (cada token ve a todos)", "Solo convoluciones 1D", "Self-attention enmascarada únicamente", "Ninguna forma de atención"], correctIndex: 0 },
    { question: "La atención cruzada del decoder consulta:", options: ["Las representaciones generadas por el encoder", "Solo los tokens futuros de la salida", "Los pesos del optimizador", "El vocabulario completo sin procesar"], correctIndex: 0 },
  ],
  "decoder-only": [
    { question: "¿Por qué un modelo decoder-only basta para generar texto?", options: ["Genera directamente, condicionado en todo lo anterior, sin 'traducir' de otra secuencia", "Porque no usa ningún tipo de atención", "Porque siempre ve la secuencia completa, incluso el futuro", "Porque no necesita entrenarse con datos"], correctIndex: 0 },
    { question: "Un modelo decoder-only usa:", options: ["Self-attention enmascarada (cada token ve solo los anteriores)", "Solo atención cruzada hacia un encoder externo", "Self-attention completa sin ninguna máscara", "Ninguna forma de atención"], correctIndex: 0 },
    { question: "GPT es un ejemplo típico de arquitectura:", options: ["Decoder-only", "Encoder-only", "Encoder-decoder clásica", "Puramente convolucional"], correctIndex: 0 },
  ],
  "encoder-only": [
    { question: "¿Para qué tareas conviene un modelo encoder-only como BERT?", options: ["Comprensión/clasificación con toda la entrada disponible de una vez", "Generación de texto secuencial token por token", "Traducción con salida más larga que la entrada", "Ninguna tarea de NLP"], correctIndex: 0 },
    { question: "Un modelo encoder-only puede ver, para un token dado:", options: ["Todos los demás tokens, incluso los que vienen después", "Solo los tokens anteriores a él", "Ningún otro token", "Solo el primer token de la secuencia"], correctIndex: 0 },
    { question: "BERT se entrena típicamente prediciendo:", options: ["Palabras enmascaradas dentro de la oración", "Solo el siguiente token de una secuencia", "Etiquetas de clasificación de imágenes", "Recompensas de un entorno de RL"], correctIndex: 0 },
  ],
  "layer-norm": [
    { question: "¿Qué normaliza layer norm, a diferencia de batch norm?", options: ["A través de las features, por cada ejemplo individual", "A través del batch, por cada feature", "Solo los pesos de la primera capa", "Nunca normaliza nada, solo reescala"], correctIndex: 0 },
    { question: "Layer norm es independiente de:", options: ["El tamaño del batch", "El número de features del ejemplo", "La arquitectura Transformer por completo", "El valor de la tasa de aprendizaje"], correctIndex: 0 },
    { question: "¿Por qué esto es clave para Transformers?", options: ["Suelen entrenarse con secuencias de longitud variable", "Porque los Transformers no usan mini-batches nunca", "Porque elimina la necesidad de atención", "Porque reduce el vocabulario del modelo"], correctIndex: 0 },
  ],
  "pre-post-norm": [
    { question: "¿Por qué pre-norm ayuda en redes muy profundas?", options: ["El camino residual queda 'limpio', sin pasar por la normalización", "Porque elimina por completo las conexiones residuales", "Porque usa menos parámetros que post-norm", "Porque no requiere ningún tipo de normalización"], correctIndex: 0 },
    { question: "En post-norm, la normalización se aplica:", options: ["Después de sumar la conexión residual", "Antes de cualquier sub-bloque", "Nunca se aplica en post-norm", "Solo en la última capa del modelo"], correctIndex: 0 },
    { question: "Pre-norm calcula la salida de un bloque como:", options: ["x + Atención(Norm(x))", "Norm(x + Atención(x))", "Norm(x) únicamente, sin residual", "Atención(x) sin ninguna suma residual"], correctIndex: 0 },
  ],
  residuales: [
    { question: "¿Qué problema resuelven las conexiones residuales?", options: ["Permiten que el gradiente fluya directo hacia atrás sin atravesar todas las no linealidades", "Eliminan por completo la necesidad de backpropagation", "Reducen el número de capas necesarias a una sola", "Sustituyen a la función de pérdida"], correctIndex: 0 },
    { question: "Una conexión residual calcula la salida de un bloque como:", options: ["entrada + F(entrada)", "F(entrada) únicamente", "entrada − F(entrada)", "F(entrada) · entrada"], correctIndex: 0 },
    { question: "Si un bloque residual no aprendió nada útil (F(x)≈0), la salida es aproximadamente:", options: ["Igual a la entrada x", "Siempre cero", "El doble de la entrada", "Indefinida"], correctIndex: 0 },
  ],
  "finetuning-variantes": [
    { question: "¿Qué caracteriza a LoRA frente al fine-tuning completo (SFT)?", options: ["Congela los pesos originales y solo entrena matrices pequeñas de bajo rango", "Reentrena absolutamente todos los pesos del modelo", "No requiere ningún dato de entrenamiento", "Solo se usa para modelos de menos de 1 millón de parámetros"], correctIndex: 0 },
    { question: "QLoRA se diferencia de LoRA en que:", options: ["El modelo base está cuantizado (menor precisión numérica)", "No usa matrices de bajo rango en absoluto", "Requiere reentrenar el modelo completo", "Solo funciona sin GPU"], correctIndex: 0 },
    { question: "RLHF ajusta un modelo usando:", options: ["Aprendizaje por refuerzo con una recompensa aprendida de preferencias humanas", "Únicamente ejemplos etiquetados (prompt, respuesta ideal)", "Solo regularización L2 adicional", "Compressed sensing sobre los pesos"], correctIndex: 0 },
  ],

  // ---------- FASE 5 ----------
  mdp: [
    { question: "¿Qué componentes definen un MDP?", options: ["Estados, acciones, función de transición y función de recompensa", "Solo estados y una red neuronal", "Solo acciones y una tasa de aprendizaje", "Un conjunto de preguntas de quiz"], correctIndex: 0 },
    { question: "La propiedad de Markov establece que el futuro depende de:", options: ["Solo el estado actual, no de cómo se llegó a él", "Toda la historia completa de estados pasados", "Únicamente la primera acción tomada", "Nada, es completamente aleatorio"], correctIndex: 0 },
    { question: "En un MDP, la función de transición describe:", options: ["La probabilidad de llegar a un estado dado el estado y acción actuales", "El valor esperado de la recompensa total", "El número de acciones posibles únicamente", "La arquitectura de la red de política"], correctIndex: 0 },
  ],
  "funcion-valor": [
    { question: "¿Qué mide la función de valor V(s)?", options: ["La recompensa total esperada (descontada) desde el estado s siguiendo una política", "La acción óptima exacta en cada estado", "El número de episodios necesarios para converger", "La probabilidad de transición entre estados"], correctIndex: 0 },
    { question: "V(s) te permite resumir 'qué tan bueno es un estado' sin:", options: ["Simular todo el futuro cada vez", "Definir ninguna política", "Usar la ecuación de Bellman", "Conocer las acciones posibles"], correctIndex: 0 },
    { question: "Un estado cercano a la meta, comparado con uno lejano, típicamente tiene:", options: ["Un valor V(s) más alto", "Un valor V(s) más bajo siempre", "Un valor V(s) igual sin importar la distancia", "Un valor V(s) indefinido"], correctIndex: 0 },
  ],
  "funcion-q": [
    { question: "¿En qué se diferencia Q(s,a) de V(s)?", options: ["Q evalúa una acción específica, sin necesitar un modelo de las transiciones", "Q solo existe en juegos de un jugador", "Q y V son exactamente lo mismo", "Q ignora completamente la recompensa"], correctIndex: 0 },
    { question: "Q(s,a) te dice directamente:", options: ["Qué acción conviene tomar en cada estado", "El número total de estados del MDP", "La tasa de aprendizaje óptima", "El tamaño del replay buffer"], correctIndex: 0 },
    { question: "Aprender Q en vez de solo V es especialmente útil cuando:", options: ["No tenés un modelo de las transiciones del entorno", "Siempre conocés el modelo completo del MDP", "El espacio de acciones tiene una sola opción", "El entorno es completamente determinístico y conocido"], correctIndex: 0 },
  ],
  bellman: [
    { question: "¿Qué relación recursiva expresa la ecuación de Bellman?", options: ["V(s) = recompensa inmediata + valor descontado del siguiente estado", "V(s) = suma de todas las recompensas futuras sin descuento", "V(s) = número de acciones posibles", "V(s) = probabilidad de éxito del episodio"], correctIndex: 0 },
    { question: "Si estás a un paso de la meta (recompensa 10) con γ=0.9, V(s) es:", options: ["10 + 0.9·V(meta)", "10 · 0.9", "10 − 0.9", "0.9 solamente"], correctIndex: 0 },
    { question: "La ecuación de Bellman es la base de:", options: ["Casi todos los algoritmos de RL (DP, Q-learning, TD, etc.)", "Solo los métodos de Monte Carlo", "Solo las redes neuronales convolucionales", "Solo el equilibrio de Nash"], correctIndex: 0 },
  ],
  "prog-dinamica": [
    { question: "¿Qué requiere la programación dinámica que Monte Carlo no necesita?", options: ["Conocer el modelo completo del MDP (transiciones y recompensas)", "Un replay buffer obligatorio", "Una red neuronal profunda", "Un entorno con recompensas continuas"], correctIndex: 0 },
    { question: "La programación dinámica resuelve Bellman:", options: ["Exactamente, iterando sobre todos los estados", "Solo de forma aproximada con muestreo", "Sin necesitar ninguna ecuación", "Únicamente para un solo estado a la vez, sin generalizar"], correctIndex: 0 },
    { question: "Monte Carlo y TD, a diferencia de programación dinámica, aprenden:", options: ["Solo a partir de experiencia (episodios), sin el modelo completo", "Solo si se conoce el modelo completo del MDP", "Sin necesitar ningún episodio de experiencia", "Únicamente en entornos determinísticos"], correctIndex: 0 },
  ],
  "monte-carlo": [
    { question: "¿Cuándo actualiza Monte Carlo el valor de un estado?", options: ["Al final de un episodio completo", "En cada paso individual, sin esperar el final", "Antes de empezar el episodio", "Nunca, es un método puramente teórico"], correctIndex: 0 },
    { question: "Monte Carlo, comparado con TD, tiene:", options: ["Mayor varianza pero es simple y sin sesgo", "Menor varianza siempre", "Sesgo sistemático pero baja varianza", "Ninguna varianza en absoluto"], correctIndex: 0 },
    { question: "Monte Carlo estima V(s) usando:", options: ["El retorno total realmente obtenido desde ese estado en adelante", "Solo la recompensa del primer paso", "Una estimación aprendida del siguiente estado (bootstrapping)", "El modelo completo de transiciones"], correctIndex: 0 },
  ],
  "td-learning": [
    { question: "¿Qué combina el aprendizaje por diferencias temporales (TD)?", options: ["La actualización paso a paso de DP con el aprendizaje por experiencia de Monte Carlo", "Solo elementos de Monte Carlo, nada de programación dinámica", "Solo elementos de programación dinámica, nada de experiencia", "Backpropagation con regularización L1"], correctIndex: 0 },
    { question: "TD(0) actualiza V(s) usando:", options: ["La recompensa inmediata más la estimación de V(s') (bootstrapping)", "Solo el retorno total del episodio completo", "El modelo completo de transición y recompensa", "Ningún tipo de estimación, solo valores fijos"], correctIndex: 0 },
    { question: "A diferencia de Monte Carlo, TD no necesita:", options: ["Esperar a que termine el episodio para actualizar", "Ningún tipo de recompensa", "Un estado inicial definido", "Una política de comportamiento"], correctIndex: 0 },
  ],
  "q-learning": [
    { question: "¿Q-learning es on-policy u off-policy?", options: ["Off-policy", "On-policy", "Ninguno de los dos, es supervisado", "Depende del tamaño del batch"], correctIndex: 0 },
    { question: "Q-learning actualiza usando:", options: ["max_a' Q(s',a'), la mejor acción posible del siguiente estado", "La acción que el agente realmente va a tomar a continuación", "Un promedio de todas las acciones posibles", "Solo la recompensa inmediata, sin considerar el futuro"], correctIndex: 0 },
    { question: "Ser off-policy le permite a Q-learning:", options: ["Aprender la política óptima mientras se comporta de forma exploratoria distinta", "Aprender únicamente si nunca explora", "Ignorar por completo la recompensa recibida", "Funcionar solo con un espacio de un único estado"], correctIndex: 0 },
  ],
  sarsa: [
    { question: "¿En qué se diferencia SARSA de Q-learning?", options: ["Usa la acción que realmente va a tomar el agente, no la mejor posible", "SARSA no usa la ecuación de Bellman en absoluto", "SARSA es siempre off-policy, igual que Q-learning", "SARSA no requiere ninguna política"], correctIndex: 0 },
    { question: "SARSA es un algoritmo:", options: ["On-policy", "Off-policy", "No basado en TD", "Exclusivo de juegos de cartas"], correctIndex: 0 },
    { question: "SARSA aprende el valor de:", options: ["La política que efectivamente está siguiendo (con exploración incluida)", "Una política completamente distinta a la que usa para actuar", "Solo la política óptima teórica, ignorando la exploración real", "Ninguna política, solo la recompensa cruda"], correctIndex: 0 },
  ],
  "policy-gradients": [
    { question: "¿Qué se optimiza directamente en policy gradients?", options: ["Los parámetros de la política, para maximizar la recompensa esperada", "Solo la función de valor V(s)", "Solo la función Q(s,a) tabular", "El tamaño del replay buffer"], correctIndex: 0 },
    { question: "Policy gradients sube la probabilidad de:", options: ["Las acciones que llevaron a buena recompensa", "Todas las acciones por igual, sin distinción", "Solo la primera acción del episodio", "Las acciones con menor recompensa, para explorar más"], correctIndex: 0 },
    { question: "A diferencia de Q-learning, policy gradients parametriza:", options: ["La política directamente (por ejemplo, con una red neuronal)", "Solo una tabla de valores Q", "Únicamente el modelo de transición del entorno", "El Hessiano de la pérdida"], correctIndex: 0 },
  ],
  "actor-critico": [
    { question: "¿Qué rol cumple el 'crítico' en actor-crítico?", options: ["Evalúa qué tan buena fue la acción elegida por el actor, con menor varianza que Monte Carlo", "Elige directamente las acciones a tomar", "Genera los datos de entrenamiento del entorno", "Calcula la tasa de aprendizaje óptima"], correctIndex: 0 },
    { question: "El actor en este esquema es:", options: ["La política que elige las acciones", "La función de valor que evalúa el estado", "El optimizador Adam usado para entrenar", "El replay buffer de transiciones pasadas"], correctIndex: 0 },
    { question: "Usar el crítico en vez de solo el retorno de Monte Carlo da:", options: ["Una señal de actualización con menor varianza", "Una señal con mayor varianza siempre", "Una política determinística obligatoria", "Un algoritmo puramente off-policy"], correctIndex: 0 },
  ],
  dqn: [
    { question: "¿Para qué sirve el replay buffer en DQN?", options: ["Entrenar con muestras aleatorias de transiciones pasadas, rompiendo correlación temporal", "Almacenar solo la última transición observada", "Reemplazar por completo a la red neuronal", "Calcular directamente el equilibrio de Nash"], correctIndex: 0 },
    { question: "DQN aproxima Q(s,a) usando:", options: ["Una red neuronal, para manejar espacios de estados enormes", "Una tabla exhaustiva de todos los estados posibles", "Solo programación dinámica exacta", "Un árbol de decisión simple"], correctIndex: 0 },
    { question: "Entrenar con mini-batches aleatorios del replay buffer, en vez de la última jugada, ayuda a:", options: ["Estabilizar el entrenamiento", "Aumentar artificialmente la recompensa", "Eliminar la necesidad de una red neuronal", "Hacer el algoritmo on-policy"], correctIndex: 0 },
  ],
  ppo: [
    { question: "¿Qué limita PPO para estabilizar el entrenamiento?", options: ["Cuánto puede cambiar la política en cada actualización, respecto a la anterior", "El número total de episodios de entrenamiento", "El tamaño del replay buffer", "La cantidad de capas de la red de valor"], correctIndex: 0 },
    { question: "PPO evita usar la matemática más compleja de métodos como:", options: ["TRPO", "Q-learning tabular", "K-means", "PCA"], correctIndex: 0 },
    { question: "PPO se usa comúnmente para ajustar LLMs en la etapa de:", options: ["RLHF", "Pre-entrenamiento inicial desde cero", "Tokenización del vocabulario", "Validación cruzada de datos"], correctIndex: 0 },
  ],
  "self-play": [
    { question: "¿Por qué el self-play genera un currículum de dificultad automático?", options: ["El oponente (uno mismo) mejora al mismo ritmo que el agente", "Porque el oponente es siempre un humano experto", "Porque la dificultad se fija manualmente en cada episodio", "Porque elimina la necesidad de cualquier entrenamiento"], correctIndex: 0 },
    { question: "El self-play evita la necesidad de:", options: ["Un oponente externo diseñado a mano", "Cualquier función de recompensa", "Cualquier tipo de búsqueda en árbol", "Datos de entrenamiento por completo"], correctIndex: 0 },
    { question: "En pokemon-tcg-ai, el self-play se implementó mediante:", options: ["El framework DRSF, entrenando contra versiones anteriores del agente", "Un dataset fijo de partidas humanas únicamente", "Una tabla de Q-learning tabular", "Validación cruzada de 5 folds"], correctIndex: 0 },
  ],
  puct: [
    { question: "¿Qué combina PUCT, a diferencia de MCTS puro?", options: ["Búsqueda en árbol con una red que da política previa y estimación de valor", "Solo simulaciones aleatorias hasta el final del juego", "Únicamente programación dinámica exacta", "Solo un algoritmo genético"], correctIndex: 0 },
    { question: "La 'política previa' en PUCT sirve para:", options: ["Decidir qué jugadas explorar primero", "Calcular la recompensa final del episodio", "Sustituir por completo a la búsqueda en árbol", "Normalizar los pesos de la red"], correctIndex: 0 },
    { question: "PUCT es el algoritmo de búsqueda usado en:", options: ["AlphaZero y en pokemon-tcg-ai", "Solo en algoritmos de programación dinámica clásicos", "Solo en regresión logística", "Solo en modelos encoder-only"], correctIndex: 0 },
  ],
  nash: [
    { question: "¿Qué condición define un equilibrio de Nash?", options: ["Ningún jugador puede mejorar cambiando solo su propia estrategia", "Todos los jugadores deben usar la misma estrategia exacta", "Solo existe en juegos de un único jugador", "Requiere que el juego no tenga azar"], correctIndex: 0 },
    { question: "En piedra-papel-tijera, el equilibrio de Nash es:", options: ["Jugar cada opción con probabilidad 1/3", "Jugar siempre piedra", "Jugar siempre la opción que ganó la ronda anterior", "No existe un equilibrio de Nash en este juego"], correctIndex: 0 },
    { question: "El equilibrio de Nash es el concepto central de estabilidad en:", options: ["Teoría de juegos multi-agente", "Redes neuronales convolucionales", "Regularización L1/L2", "Validación cruzada"], correctIndex: 0 },
  ],
  cfr: [
    { question: "¿Qué minimiza CFR iterativamente?", options: ["El arrepentimiento contrafactual acumulado", "El número de parámetros del modelo", "El tamaño del dataset de entrenamiento", "La tasa de aprendizaje del optimizador"], correctIndex: 0 },
    { question: "Minimizar el arrepentimiento en CFR converge, en promedio, a:", options: ["Un equilibrio de Nash", "Una red neuronal óptima entrenada", "Un árbol de decisión perfecto", "Una distribución uniforme de acciones"], correctIndex: 0 },
    { question: "CFR es la familia de algoritmos detrás de:", options: ["Libratus y Pluribus (bots de póker)", "AlphaGo únicamente", "Regresión logística", "K-means"], correctIndex: 0 },
  ],
  exploitability: [
    { question: "¿Qué mide la exploitability de una política?", options: ["Cuánto podría ganarle un oponente perfecto, comparado con el equilibrio", "El número de partidas jugadas", "La velocidad de entrenamiento del modelo", "El tamaño del árbol de búsqueda"], correctIndex: 0 },
    { question: "Una exploitability de cero significa:", options: ["Se está jugando un equilibrio de Nash exacto", "El agente perdió todas las partidas", "El modelo no ha sido entrenado en absoluto", "El agente juega completamente al azar"], correctIndex: 0 },
    { question: "En pokemon-tcg-ai, se encontró un gap de exploitability de:", options: ["+0.157", "0", "+15.7", "-1.0"], correctIndex: 0 },
  ],
  aivat: [
    { question: "¿Para qué se usa AIVAT en evaluación de agentes?", options: ["Para reducir la varianza al medir el desempeño en juegos con mucho azar", "Para entrenar la red de política directamente", "Para calcular el Laplaciano de un grafo", "Para inicializar los pesos de una red"], correctIndex: 0 },
    { question: "AIVAT resta al resultado observado:", options: ["Una variable de control basada en un modelo del juego", "El total de partidas jugadas", "La tasa de aprendizaje", "El número de jugadores"], correctIndex: 0 },
    { question: "Usar AIVAT permite comparar dos agentes con:", options: ["Muchas menos partidas de las que harían falta sin esa corrección", "El doble de partidas necesarias", "Solo una partida, sin importar el ruido", "Ningún dato de partidas reales"], correctIndex: 0 },
  ],
  crn: [
    { question: "¿Por qué CRN reduce la varianza al comparar dos variantes de agente?", options: ["Usa la misma secuencia de números aleatorios para ambas simulaciones", "Aumenta artificialmente el número de partidas", "Elimina por completo el azar del juego", "Cambia las reglas del juego para cada variante"], correctIndex: 0 },
    { question: "CRN es una técnica de:", options: ["Comparación A/B pareada", "Búsqueda en árbol", "Regularización de pesos", "Inicialización de redes neuronales"], correctIndex: 0 },
    { question: "En pokemon-tcg-ai, CRN redujo el error estándar (SEM) en:", options: ["15-20%", "0%", "90-95%", "1-2%"], correctIndex: 0 },
  ],

  // ---------- FASE 6 ----------
  "rg-flow": [
    { question: "¿De qué campo viene la idea de flujo de grupo de renormalización (RG flow)?", options: ["Física estadística", "Teoría de juegos", "Álgebra lineal básica", "Estadística bayesiana clásica"], correctIndex: 0 },
    { question: "El NTK (Neural Tangent Kernel) describe:", options: ["Cómo evoluciona la función de la red durante el entrenamiento, en redes muy anchas", "El número de capas óptimo de una red", "La arquitectura exacta de un Transformer", "El algoritmo de backpropagation en sí mismo"], correctIndex: 0 },
    { question: "RG flow describe cómo se transforman, capa a capa:", options: ["Las estadísticas de las activaciones de la red", "Solo los hiperparámetros del optimizador", "El tamaño del dataset de entrenamiento", "El número de clases del problema"], correctIndex: 0 },
  ],
  criticidad: [
    { question: "¿Qué caracteriza a una inicialización 'crítica'?", options: ["La varianza de activaciones/gradiente se mantiene estable capa a capa", "Los pesos se inicializan siempre en cero", "La red no tiene ninguna capa oculta", "El modelo no puede entrenarse en absoluto"], correctIndex: 0 },
    { question: "Alejarse del punto crítico de inicialización causa típicamente:", options: ["Vanishing o exploding gradients", "Mayor precisión automática siempre", "Menor uso de memoria", "Convergencia instantánea garantizada"], correctIndex: 0 },
    { question: "El estudio de la criticidad pertenece al análisis de:", options: ["La inicialización de redes neuronales profundas", "La regularización L1 únicamente", "Los árboles de decisión", "El equilibrio de Nash"], correctIndex: 0 },
  ],
  "bayesian-nn": [
    { question: "¿Qué mantiene el enfoque bayesiano en vez de un solo valor óptimo por peso?", options: ["Una distribución de probabilidad sobre los pesos posibles", "Un único valor fijo determinado por MLE", "Ningún valor, los pesos se descartan", "Solo el promedio de todos los pesos posibles, sin varianza"], correctIndex: 0 },
    { question: "El resultado del 'ancho infinito' dice que una red muy ancha con inicialización aleatoria se comporta como:", options: ["Un Proceso Gaussiano", "Un árbol de decisión", "Una distribución uniforme discreta", "Una red completamente determinística sin varianza"], correctIndex: 0 },
    { question: "Este resultado es útil porque:", options: ["Hace el análisis mucho más tratable matemáticamente", "Elimina la necesidad de entrenar cualquier red", "Reduce a cero el número de parámetros", "Solo aplica a redes con una sola neurona"], correctIndex: 0 },
  ],
  "sparse-models": [
    { question: "¿Qué norma se relaja de ℓ0 a ℓ1 en recuperación dispersa?", options: ["La norma que cuenta valores no-cero, relajada a la suma de valores absolutos", "La norma euclidiana estándar", "La norma infinita (máximo valor)", "La norma de Frobenius de una matriz"], correctIndex: 0 },
    { question: "Minimizar la norma ℓ0 exactamente es, en general:", options: ["Un problema combinatorio muy difícil (NP-duro)", "Un problema trivial de resolver siempre", "Equivalente a k-means", "Solo posible con redes neuronales"], correctIndex: 0 },
    { question: "La relajación a ℓ1 es atractiva porque:", options: ["Es convexa y, bajo condiciones razonables, da la misma solución dispersa", "Nunca converge a ninguna solución", "Elimina la necesidad de datos de entrenamiento", "Solo funciona en dos dimensiones"], correctIndex: 0 },
  ],
  "compressed-sensing": [
    { question: "¿Qué propiedad debe cumplir una matriz de medición para garantizar recuperación (RIP)?", options: ["Preservar aproximadamente las distancias entre vectores dispersos", "Ser siempre una matriz cuadrada", "Tener determinante igual a cero", "Ser diagonal exclusivamente"], correctIndex: 0 },
    { question: "Compressed sensing permite reconstruir una señal dispersa con:", options: ["Muchas menos mediciones que el muestreo clásico de Nyquist", "Exactamente el doble de mediciones que Nyquist", "Solo si la señal no es dispersa en absoluto", "Solo con datos etiquetados manualmente"], correctIndex: 0 },
    { question: "Un ejemplo típico de aplicación de compressed sensing es:", options: ["Reconstrucción de imágenes de resonancia magnética", "Clasificación de texto con Transformers", "Aprendizaje por refuerzo en videojuegos", "Detección de comunidades en grafos"], correctIndex: 0 },
  ],
  "robust-pca": [
    { question: "¿Qué descompone la PCA robusta, a diferencia de la PCA clásica?", options: ["Una parte de bajo rango y una parte dispersa (outliers)", "Solo la media y la varianza de los datos", "Únicamente los autovalores de la matriz de covarianza", "Las etiquetas de clase del dataset"], correctIndex: 0 },
    { question: "La PCA clásica es vulnerable a:", options: ["Un solo dato corrupto que puede arruinar la estimación", "Tener demasiados pocos datos únicamente", "No tener ninguna estructura de baja dimensión", "Usar demasiadas pocas componentes principales"], correctIndex: 0 },
    { question: "En un video de vigilancia, la PCA robusta separaría:", options: ["El fondo estático (bajo rango) de la persona en movimiento (dispersa)", "Solo los píxeles rojos de los azules", "El audio del video", "Los metadatos del archivo de video"], correctIndex: 0 },
  ],

  // ---------- FASE 7 ----------
  "sft-vs-rlhf": [
    { question: "¿Cuándo preferirías DPO sobre RLHF clásico?", options: ["Cuando querés un efecto similar sin entrenar un modelo de recompensa ni correr RL completo", "Cuando no tenés ningún dato de preferencias humanas", "Cuando el modelo no necesita ningún ajuste posterior al preentrenamiento", "Cuando solo tenés un ejemplo de entrenamiento en total"], correctIndex: 0 },
    { question: "GRPO evita necesitar:", options: ["Una red de valor separada, comparando un grupo de respuestas entre sí", "Cualquier tipo de recompensa", "Datos de preferencias humanas", "El modelo base preentrenado"], correctIndex: 0 },
    { question: "RLAIF reemplaza el feedback humano por:", options: ["Feedback generado por otro modelo de IA", "Ningún tipo de feedback en absoluto", "Solo reglas escritas a mano", "Datos sintéticos aleatorios sin evaluación"], correctIndex: 0 },
  ],
  "reward-modeling": [
    { question: "¿Qué aprende un modelo de recompensa?", options: ["A predecir qué tan 'buena' es una respuesta según preferencia humana", "A generar texto directamente como un LLM normal", "A clasificar imágenes en categorías", "A resolver ecuaciones de Bellman exactas"], correctIndex: 0 },
    { question: "El modelo de recompensa se entrena típicamente a partir de:", options: ["Comparaciones humanas entre pares de respuestas", "Solo texto sin ninguna etiqueta", "Datos de imágenes etiquetadas", "El código fuente del modelo base"], correctIndex: 0 },
    { question: "La señal aprendida por el modelo de recompensa se usa después para:", options: ["Optimizar el modelo principal con RL", "Reemplazar por completo al modelo principal", "Etiquetar automáticamente el dataset de pre-entrenamiento", "Calcular la exactitud de un clasificador de imágenes"], correctIndex: 0 },
  ],
  "preference-modeling": [
    { question: "¿Qué tipo de dato usa preference modeling?", options: ["Comparaciones par-a-par de qué respuesta se prefiere", "Puntuaciones numéricas absolutas del 1 al 10", "Solo texto sin ninguna evaluación humana", "Imágenes etiquetadas por categoría"], correctIndex: 0 },
    { question: "¿Por qué se prefieren las comparaciones par-a-par sobre puntuar con un número?", options: ["Son más fáciles de recolectar de forma consistente entre evaluadores", "Requieren menos anotadores humanos en total", "Eliminan la necesidad de cualquier dato", "Son matemáticamente idénticas a puntuar con un número"], correctIndex: 0 },
    { question: "El dato de preferencia es la entrada típica para:", options: ["Reward modeling y DPO", "Solo para clasificación de imágenes", "Solo para PCA", "Solo para K-means"], correctIndex: 0 },
  ],
  "ml-system-design": [
    { question: "¿Cuáles son las 4 etapas típicas de un pipeline de ML en producción?", options: ["Ingesta de datos, entrenamiento, inferencia online, monitoreo/reentrenamiento", "Solo entrenamiento y nada más", "Solo inferencia, sin ningún entrenamiento previo", "Tokenización, embeddings, atención, softmax"], correctIndex: 0 },
    { question: "En una entrevista de ML system design, lo que más se evalúa es:", options: ["Que sepas razonar los trade-offs entre etapas (latencia, costo, etc.)", "Que memorices un diagrama exacto de memoria", "Que sepas la sintaxis exacta de un framework específico", "Que resuelvas una ecuación diferencial en el pizarrón"], correctIndex: 0 },
    { question: "El monitoreo en producción sirve principalmente para:", options: ["Detectar degradación del modelo y decidir cuándo reentrenar", "Aumentar artificialmente la exactitud reportada", "Reemplazar la etapa de entrenamiento por completo", "Eliminar la necesidad de logs de inferencia"], correctIndex: 0 },
  ],
  "on-off-policy": [
    { question: "Dá un ejemplo de algoritmo on-policy y uno off-policy respectivamente:", options: ["SARSA (on-policy) y Q-learning (off-policy)", "Q-learning (on-policy) y SARSA (off-policy)", "PCA (on-policy) y K-means (off-policy)", "Ninguno de los algoritmos de RL es on-policy ni off-policy"], correctIndex: 0 },
    { question: "Un algoritmo off-policy puede reutilizar experiencia vieja gracias a:", options: ["Aprender sobre una política distinta a la que usa para actuar", "Aprender exclusivamente sobre la política actual", "No requerir ninguna política en absoluto", "Estar limitado a un solo episodio de entrenamiento"], correctIndex: 0 },
    { question: "PPO es un algoritmo típicamente considerado:", options: ["On-policy", "Off-policy puro como Q-learning", "Ni on-policy ni off-policy, es supervisado", "Exclusivo de juegos determinísticos"], correctIndex: 0 },
  ],
  "exploracion-explotacion": [
    { question: "Nombrá 2 estrategias para manejar el trade-off exploración-explotación:", options: ["ε-greedy y muestreo de Thompson", "PCA y K-means", "Backpropagation y batch normalization", "SVD y regularización L1"], correctIndex: 0 },
    { question: "Con ε-greedy y ε=0.1, el agente elige una acción al azar:", options: ["El 10% de las veces", "El 90% de las veces", "El 100% de las veces", "Nunca, siempre explota"], correctIndex: 0 },
    { question: "Explotar significa:", options: ["Tomar la acción que hoy se cree que es mejor", "Probar acciones nuevas para descubrir si hay algo mejor", "Ignorar por completo la recompensa recibida", "Entrenar una red neuronal desde cero"], correctIndex: 0 },
  ],
  "quadratic-attention": [
    { question: "¿Por qué la atención escala mal con secuencias largas?", options: ["El costo crece con el cuadrado de la longitud de la secuencia (O(n²))", "El costo crece linealmente con la longitud", "El costo es constante sin importar la longitud", "El costo decrece a medida que la secuencia crece"], correctIndex: 0 },
    { question: "Duplicar el largo del contexto en atención estándar multiplica el costo por:", options: ["4 (cuadruplica)", "2 (se duplica)", "1 (no cambia)", "8"], correctIndex: 0 },
    { question: "¿Qué tipo de variantes existen para atacar este problema en contextos largos?", options: ["Atención dispersa, lineal o con ventanas", "Solo aumentar el número de capas convolucionales", "Solo usar batch normalization adicional", "Eliminar por completo el mecanismo de atención"], correctIndex: 0 },
  ],

  // ---------- FASE 8 ----------
  alphago: [
    { question: "¿Qué combinó AlphaGo por primera vez?", options: ["Una red de política y una red de valor guiando MCTS", "Solo CFR tabular", "Solo un árbol de decisión simple", "Únicamente reglas escritas a mano"], correctIndex: 0 },
    { question: "AlphaGo se entrenó inicialmente con:", options: ["Partidas humanas, refinadas después con self-play", "Solo self-play puro, sin ningún dato humano", "Solo datos sintéticos generados al azar", "Ningún tipo de entrenamiento, reglas fijas"], correctIndex: 0 },
    { question: "AlphaGo venció a un campeón humano en el juego de:", options: ["Go", "Ajedrez", "Shogi", "Póker heads-up"], correctIndex: 0 },
  ],
  "alphago-zero": [
    { question: "¿Qué eliminó AlphaGo Zero respecto a AlphaGo original?", options: ["La necesidad de datos humanos, aprendiendo con self-play puro", "La red de valor por completo", "La búsqueda en árbol por completo", "El juego de Go, cambiando a ajedrez"], correctIndex: 0 },
    { question: "AlphaGo Zero introdujo formalmente la variante de búsqueda hoy llamada:", options: ["PUCT", "CFR", "SARSA", "Q-learning tabular"], correctIndex: 0 },
    { question: "AlphaGo Zero, comparado con AlphaGo, terminó siendo:", options: ["Más fuerte que la versión original", "Más débil que la versión original", "Exactamente igual de fuerte", "Incapaz de jugar sin datos humanos"], correctIndex: 0 },
  ],
  alphazero: [
    { question: "¿Qué generalizó AlphaZero respecto a AlphaGo Zero?", options: ["Un único algoritmo que domina varios juegos (ajedrez, shogi, Go)", "Solo mejoras específicas para el juego de Go", "El uso exclusivo de CFR en vez de PUCT", "La eliminación completa del self-play"], correctIndex: 0 },
    { question: "AlphaZero se entrena, en todos sus juegos, mediante:", options: ["Self-play puro desde cero, sin datos humanos", "Datos humanos exclusivamente, sin self-play", "Reglas escritas a mano por expertos", "CFR tabular exhaustivo"], correctIndex: 0 },
    { question: "El patrón 'red política+valor + PUCT + self-play' de AlphaZero es replicado en pokemon-tcg-ai por:", options: ["FocusNet + el framework de self-play (DRSF)", "Solo un árbol de decisión simple", "Solo validación cruzada de mazos", "Solo regularización L2 de los pesos"], correctIndex: 0 },
  ],
  "cfr-original": [
    { question: "¿Qué problema resolvió por primera vez el CFR original (2007)?", options: ["Acercarse a un equilibrio de Nash en juegos de información imperfecta", "Entrenar redes convolucionales profundas", "Resolver el problema XOR con un perceptrón simple", "Calcular la SVD de una matriz eficientemente"], correctIndex: 0 },
    { question: "CFR clásico necesita, para cada punto de decisión del juego:", options: ["Recorrerlo y guardar valores para todos ellos, lo cual no escala a juegos grandes", "Ignorarlo por completo", "Usar solo una red neuronal sin ninguna tabla", "Nada, se resuelve en una sola operación matricial"], correctIndex: 0 },
    { question: "La limitación de escalabilidad del CFR tabular motivó directamente la creación de:", options: ["Deep CFR", "AlphaGo", "PCA robusta", "Batch normalization"], correctIndex: 0 },
  ],
  "deep-cfr": [
    { question: "¿Qué reemplaza Deep CFR respecto al CFR tabular clásico?", options: ["Las tablas gigantes, usando redes neuronales que aproximan los valores de arrepentimiento", "El propio concepto de arrepentimiento contrafactual", "La necesidad de cualquier tipo de entrenamiento", "El equilibrio de Nash como objetivo final"], correctIndex: 0 },
    { question: "Deep CFR permite aplicar CFR a:", options: ["Juegos demasiado grandes para la versión tabular", "Solo juegos con menos de 10 estados posibles", "Solo juegos completamente determinísticos", "Solo juegos de un único jugador"], correctIndex: 0 },
    { question: "En pokemon-tcg-ai, Deep CFR se usó específicamente para:", options: ["Calcular la exploitability de la política heurística", "Entrenar la red de política principal desde cero", "Reemplazar completamente a PUCT", "Generar las cartas del mazo"], correctIndex: 0 },
  ],
  libratus: [
    { question: "¿Qué logró Libratus por primera vez?", options: ["Vencer decisivamente a profesionales humanos en póker heads-up no-limit", "Vencer a un campeón humano de Go", "Resolver el problema de vanishing gradient", "Entrenar el primer Transformer de la historia"], correctIndex: 0 },
    { question: "Libratus combinó CFR a gran escala con:", options: ["Una fase de resolución en tiempo real durante la partida", "Una red convolucional para procesar imágenes", "Programación dinámica exacta sin aproximaciones", "K-means para agrupar las manos de póker"], correctIndex: 0 },
    { question: "Libratus jugó específicamente la variante de póker:", options: ["Heads-up no-limit (2 jugadores)", "Multijugador de 6 personas", "Póker cerrado de 5 cartas", "Blackjack"], correctIndex: 0 },
  ],
  pluribus: [
    { question: "¿Por qué Pluribus fue más difícil de lograr que Libratus?", options: ["La teoría del equilibrio de Nash es más débil con más de 2 jugadores", "Porque no podía usar ningún tipo de CFR", "Porque requería mucho más cómputo que Libratus", "Porque el póker multijugador no tiene ningún tipo de azar"], correctIndex: 0 },
    { question: "Pluribus jugó póker con:", options: ["6 jugadores (multijugador)", "Solo 2 jugadores (heads-up)", "Un único jugador contra el sistema", "Ningún jugador, solo simulaciones"], correctIndex: 0 },
    { question: "Comparado con Libratus, Pluribus logró nivel superhumano con:", options: ["Mucho menos cómputo", "Exactamente el mismo cómputo", "Muchísimo más cómputo", "Sin necesitar ningún entrenamiento previo"], correctIndex: 0 },
  ],
  "aivat-paper": [
    { question: "¿Qué propone el paper de AIVAT?", options: ["Restar una variable de control basada en un modelo del juego para reducir varianza", "Entrenar una red neuronal de política desde cero", "Reemplazar el equilibrio de Nash por otro objetivo", "Eliminar por completo el azar de un juego"], correctIndex: 0 },
    { question: "AIVAT está diseñado especialmente para juegos con:", options: ["Mucho azar/aleatoriedad (como el póker)", "Cero elementos aleatorios", "Un único jugador y sin recompensas", "Reglas que cambian en cada partida"], correctIndex: 0 },
    { question: "pokemon-tcg-ai aplicó esta técnica bajo el nombre de:", options: ["AIVAT-Nash", "Deep-AIVAT", "CFR-Lite", "PUCT-Var"], correctIndex: 0 },
  ],
};

export function quizFor(conceptId: string): QuizQuestion[] {
  return quizzes[conceptId] ?? [];
}
