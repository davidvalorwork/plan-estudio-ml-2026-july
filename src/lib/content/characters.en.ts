// English translations of the character-scene mnemonics defined in characters.ts.
// Same 96 conceptId keys, same order, same chain logic (see characters.ts for the
// full explanation of the encadenado / link-method technique). Character and
// franchise proper nouns are kept exactly as written in the source file; only the
// action/explanation prose is translated.

export const characterSceneEn: Record<string, string> = {
  // Phase 0 — Star Wars
  vectores: "Yoda raises his staff and uses the Force to push Obi-Wan Kenobi in a precise direction with an exact magnitude — applying a direct impulse vector to him.",
  matrices: "Obi-Wan spins his lightsaber, and with that spin he TRANSFORMS Luke Skywalker from farmer to combat pilot — rotating him, scaling him, projecting him into a new life.",
  autovalores: "Luke lifts C-3PO out of the swamp with the Force without changing his orientation, only stretching him upward: that direction which doesn't change, applied to 3PO, is the eigenvector.",
  svd: "C-3PO disassembles himself into three pieces (rotate, scale, rotate) and reassembles them directly onto Han Solo, dressing him piece by piece with the complete factorization.",
  derivadas: "Han Solo accelerates the Millennium Falcon and shows Leia the speedometer at the exact instant — the derivative is that rate of change he points out to her.",
  "regla-cadena": "Leia sends her message down a chain (R2 → Obi-Wan → Luke), and the message's final relay ends up landing directly on Darth Vader — the chain of derivatives closes on him.",
  gradiente: "Vader senses through the Force the exact direction of greatest disturbance and advances straight toward R2-D2 — the gradient guides him right to the droid.",
  jacobiano: "R2-D2 projects a hologram with several outputs at once (maps, messages, diagnostics) aimed directly at Emperor Palpatine — all his partial derivatives, directed at him.",
  hessiano: "Palpatine doesn't just sense where power is moving, he senses how it curves — and he uses that curvature to set an exact trap for Chewbacca.",
  distribuciones: "Chewbacca roars with varying probability of reaction, and that random roar is exactly what alerts Boba Fett — a distribution of reactions that Boba has to read.",
  "esperanza-varianza": "Boba Fett calculates the expected value of capturing Qui-Gon Jinn and how much the outcome might vary before accepting the contract on him.",
  bayes: "Qui-Gon updates his belief about Anakin with each new piece of evidence, and presents that already-updated posterior belief directly to Mace Windu.",
  mle: "Mace Windu, looking at Anakin, chooses the explanation that best accounts for ALL the observed evidence about him — maximum likelihood applied to a single suspect.",
  "descenso-gradiente": "Anakin advances step by step, reducing his frustration, getting closer and closer to Padmé, until one step too many makes him fall to the dark side (diverge) in front of her.",
  convexidad: "Padmé negotiates a 'bowl-shaped' (convex) agreement in the Senate that ends up forcing General Grievous to accept the single best possible solution.",
  lagrange: "Grievous fights with 4 lightsabers but under the constraint of using only 2 arms per turn — that same principle of optimizing under a constraint is what, from another world, Ned Stark ends up applying when defending his House with limited resources.",

  // Phase 1 — Game of Thrones
  "regresion-lineal": "Ned Stark draws a straight line of honor and shows it directly to Varys — the simplest, most direct prediction, with no curves or ambiguity.",
  "regresion-logistica": "Varys never gives Cersei a binary answer, he always whispers her a probability between 0 and 1 — the sigmoid output of his information.",
  overfitting: "Cersei memorizes every specific insult she received in King's Landing and builds her revenge list out of them — the same list that Arya later takes and expands with her own.",
  "reg-l1": "Arya crosses names off her list one by one until only the essential ones remain, and hands that already-pruned list — sparse, with most entries at zero — to Sansa.",
  "reg-l2": "Sansa doesn't remove anyone from her circle, but cautiously reduces everyone's influence a little — and applies that same gentle shrinkage to Tyrion's position at court.",
  "validacion-cruzada": "Tyrion tests his strategy across different rotating councils and presents the already-averaged result directly to Tywin.",
  arboles: "Tywin decides at every family fork who inherits what, splitting the tree at the question that best separates power — and the branch that threatens him most ends up pointing to Daenerys.",
  pca: "Daenerys reduces all her titles down to the single direction that explains the most variance about who she is, and projects that condensed direction directly onto Jon Snow.",
  kmeans: "Jon groups wildlings and Night's Watch men around a shared centroid (surviving the winter), and recalculates that centroid to now include Jaime Lannister.",
  "sesgo-varianza": "Jaime, reduced to 'the Kingslayer' (high bias), tells Krillin his own full, ever-shifting story (high variance) — the same dilemma, carried from one world to another.",

  // Phase 2 — Dragon Ball
  perceptron: "Krillin throws a single Kienzan in a straight line directly at Goku — he separates with one linear strike, unable to solve curves like XOR.",
  activaciones: "Goku goes from calm to Super Saiyan in front of Piccolo — without that nonlinear leap, stacking power would just be a linear sum Piccolo could easily anticipate.",
  backprop: "Piccolo corrects Gohan backward through each technique in turn, and that same chained, corrected error ends up being the lesson he teaches Vegeta.",
  sgd: "Vegeta trains against a single opponent at a time, not all at once — updating fast and noisily — and passes that rhythm directly on to Trunks.",
  momentum: "Trunks accumulates the momentum from his earlier time travels and hands that accumulated momentum to Bulma to accelerate her next invention in the same direction.",
  adam: "Bulma combines the momentum from her earlier inventions with an automatic fine-tuning adjustment, and uses that combination to calibrate Gohan's training suit.",
  "init-pesos": "Gohan doesn't start training at zero — Piccolo initializes him with a minimum of skill to break the symmetry of fear, and that initial training is exactly what he later faces Cell with.",
  batchnorm: "Cell normalizes himself by absorbing androids in controlled doses before rescaling his own power, and it's that already-rescaled power he uses to measure himself against Frieza.",
  convolucion: "Frieza scans power levels with the same scanner no matter where on the planet the target is, sliding that same filter across all of Namek.",
  pooling: "Namek condenses whole regions of energy into a single maximum value detected by the scouter, and it's that summarized value that finally gets reported to Whis.",
  rnn: "Whis remembers the entire sequence of events in order to reverse them and narrates that sequence step by step to Beerus, though the further back in the past, the more the detail fades.",
  lstm: "Beerus has a selective memory — deciding what to destroy and what to preserve across eons, with very deliberate forget gates — and deliberately decides to preserve Majin Buu instead of forgetting him.",
  "vanishing-exploding": "Buu multiplies out of control (exploding) or shrinks until he nearly disappears (vanishing), and in one of those transformations he ends up crossing paths with the calculating gaze of Rhaenyra Targaryen.",

  // Phase 3 — House of the Dragon
  "cnn-extrinseca": "Rhaenyra sees the Iron Throne from the outside, as a position in the space of the court, and points out that extrinsic view of power directly to Daemon.",
  "cnn-intrinseca": "Daemon understands power by literally walking across Dragonstone, feeling the actual surface of the terrain, and brings that firsthand knowledge to Viserys.",
  "metodos-espectrales": "Viserys sees the Song of Ice and Fire as an underlying pattern running through the whole family, and entrusts that vision of the complete pattern to Alicent.",
  "laplaciano-grafo": "Alicent maps out who is connected to whom at court and hands that map of connections — her social Laplacian — directly to her father Otto.",
  "atencion-como-conv": "Otto doesn't just watch his nearest neighbor at court — he attends to the ENTIRE council at once, weighing each member by his real influence — and that way of distributing attention is exactly what ends up inspiring, from another world, Naruto Uzumaki.",

  // Phase 4 — Naruto
  "self-attention": "Naruto senses everyone's chakra around him and decides who to pay attention to based on how relevant each one is, and uses exactly that distributed attention to coordinate his own Shadow Clones.",
  "multi-head": "Each shadow clone attends to a different part of the battlefield in parallel, and all those parallel results are concatenated into the final report handed to Kakashi.",
  "pos-encoding-sin": "Kakashi needs the exact ORDER of hand seals for a jutsu, and that precise order is exactly what he later studies when analyzing Itachi's style.",
  rope: "Itachi's Sharingan rotates to read the relative distance between movements, not the absolute position, and he passes that rotated reading of distances on to Jiraiya during his training.",
  "encoder-decoder": "Jiraiya observes the entire world and translates it step by step into the teachings he gives Naruto, who from that point on begins generating his own decisions.",
  "decoder-only": "Naruto generates his next action by looking only at what he already said or did before, without translating from any other source, and announces that already-made decision directly to Sakura.",
  "encoder-only": "Sakura reads a patient's entire medical situation all at once before diagnosing, and uses that same complete reading to detect Orochimaru's manipulation of the patient's body.",
  "layer-norm": "Orochimaru normalizes every body he possesses according to ITS OWN internal proportions, and imposes that same forced normalization on Gaara's body when he tries to possess it.",
  "pre-post-norm": "Gaara arranges his sand BEFORE the blow arrives, instead of rearranging it after impact, and uses that same anticipatory reflex to protect Hinata in battle.",
  residuales: "Hinata keeps her original identity intact while adding newly learned confidence on top of it, and shows that same path of preserved identity to Obito — too late for him.",
  "finetuning-variantes": "Obito rewrites himself almost completely after Madara (like a full SFT), and that near-total rewrite ends up projecting itself as a warning in the mind of Ichigo Kurosaki.",

  // Phase 5 — Bleach
  mdp: "Every one of Ichigo's battles is a state with possible actions (attack, defend, use Bankai) and a reward (saving the soul), and he passes that same decision framework to Rukia before every fight.",
  "funcion-valor": "Rukia evaluates how good each position in the battle is before deciding what to do, and communicates that value evaluation directly to Renji.",
  "funcion-q": "Renji evaluates each specific possible move from his position — Zabimaru versus retreat — and shows that action-by-action evaluation to his captain, Byakuya.",
  bellman: "Byakuya calculates the value of this strike in terms of the immediate damage plus the discounted value of the fight that follows, and reports that recursive calculation directly to Yamamoto.",
  "prog-dinamica": "Yamamoto knows the complete rules of the Soul Society and works out the entire strategy in advance, and imposes that already-solved strategy on Kenpachi Zaraki.",
  "monte-carlo": "Kenpachi only learns how worthwhile it was at the very end of the complete fight, and tells that final result, the moment the battle ends, to Shunsui.",
  "td-learning": "Shunsui adjusts his assessment of the situation at every step, without waiting for the fight to end, and passes that step-by-step update on to Toshiro Hitsugaya.",
  "q-learning": "Toshiro learns the best possible move against his rival even while he himself is exploring a completely different tactic, and teaches that off-policy lesson to Ikkaku.",
  sarsa: "Ikkaku learns from the move HE HIMSELF is actually about to make next, not the ideal one, and shows Orihime exactly that real move, not the ideal one.",
  "policy-gradients": "Orihime directly adjusts her way of casting, reinforcing the gestures that led to successful healings, and teaches that same direct adjustment to Ishida and Chad.",
  "actor-critico": "Ishida (the actor) fires the arrow; Chad (the critic) evaluates how good that decision was, and both report that evaluation to Urahara.",
  dqn: "Urahara keeps a log of past experiments in his shop and trains new techniques by reviewing random samples from that archive, sharing the results with Yoruichi.",
  ppo: "Yoruichi never lets her style change abruptly between training sessions — limited, controlled adjustments — and imposes that same limit on change on Kenpachi before letting him train alone.",
  "self-play": "Kenpachi seeks out ever stronger rivals, including past versions of himself, and that cycle of self-improvement is exactly what Aizen observes and calculates how to surpass.",
  puct: "Aizen combines a deep search of possibilities with an intuition for which path to explore first and an evaluation that doesn't see all the way to the end, and applies exactly that calculated search to Gin's betrayal.",
  nash: "Neither of them can improve his position by betraying the other without the other having already anticipated it — that unstable equilibrium of mutual distrust is the very same one that draws Tosen into joining them.",
  cfr: "Tosen iteratively recalculates how much he regrets past decisions at every point of his betrayal, and confesses that accumulated regret to Grimmjow.",
  exploitability: "Grimmjow measures how easily a perfect rival could exploit his reckless fighting style, and it's precisely Unohana who ends up exploiting that measured weakness.",
  aivat: "Unohana filters out the random noise of each fight to measure a swordsman's REAL skill with fewer fights needed, and applies that same noise filter when evaluating Nel.",
  crn: "Nel compares her two versions (child and adult) under exactly the same combat conditions so the difference is real, and that same controlled experiment is what Aemond Targaryen, from another world, later studies.",

  // Phase 6 — House of the Dragon (cast continued)
  "rg-flow": "Aemond observes how Vhagar's power transforms from one social layer to the next, and explains that flow of transformation to Criston Cole.",
  criticidad: "Criston holds himself at a critical point of loyalty — neither overflowing with fervor nor collapsing into indifference — until an event knocks him out of that equilibrium in front of Rhaenys.",
  "bayesian-nn": "Rhaenys holds a distribution of possible heirs in her mind, not a single certainty, and shares that distribution of possibilities with her husband Corlys.",
  "sparse-models": "Corlys reduces his enormous fleet down to only the essential, sparse routes that actually generate value, discarding the rest to zero, and it's that already-pruned fleet that Larys ends up spying on.",
  "compressed-sensing": "Larys reconstructs the entire court intrigue from just a few scraps of information slipped under the door, and hands that complete reconstruction to Aegon II.",
  "robust-pca": "Aegon II separates the true structure of the realm from the isolated corruption of his councilors, and that same separation between true structure and corrupt noise is the lesson that, from another world, Ahsoka Tano learns.",

  // Phase 7 — Star Wars (other characters, distinct from Phase 0)
  "sft-vs-rlhf": "Ahsoka first learned through direct supervised training from Anakin, and later refined her style with subtler preferences of her own — and it's that already-refined style she passes on to Rey.",
  "reward-modeling": "Rey learns which actions the Force approves of by comparing pairs of past decisions, and teaches Finn to evaluate his own decisions the same comparative way.",
  "preference-modeling": "Finn doesn't score an action from 1 to 10, he picks which of two options he prefers, and presents that simplified binary choice to Poe Dameron.",
  "ml-system-design": "Poe designs the entire mission: intelligence, flight plan, real-time execution, and after-action debrief, and delegates the real-time execution stretch to Lando Calrissian.",
  "on-off-policy": "Lando learns from the policy Han is following while playing his own risky move at the same time, and that same parallel move ends up crossing paths with Kylo Ren's.",
  "exploracion-explotacion": "Kylo exploits his known power most of the time, but occasionally explores the light side, and that occasional doubt pushes him straight into the asteroid field where the Millennium Falcon is flying.",
  "quadratic-attention": "Every asteroid has to be compared against all the others to plot a safe route — with twice as many asteroids, the computation quadruples — and that calculated navigation ends up carrying the crew all the way to Tsunade.",

  // Phase 8 — Naruto (other characters, distinct from Phase 4)
  alphago: "Tsunade combines what she learned from earlier masters with her own judgment refined through practice, and passes that combination of prior data and her own practice on to Might Guy.",
  "alphago-zero": "Guy trains from scratch, without copying anyone's style, only improving against himself over and over, and that pure training from zero is exactly what later inspires Minato.",
  alphazero: "Minato's method is so general that it masters any ninja art with the same principle of speed and precision, and he teaches that same general principle to Shikamaru.",
  "cfr-original": "Shikamaru calculates, move by move, how much he would regret each past decision compared to another possible strategy, and shares that regret calculation with Neji.",
  "deep-cfr": "Neji replaces the exhaustive calculation of every blind spot with an estimate learned by his trained Byakugan, and uses that fast estimate to evaluate Killer Bee.",
  libratus: "Bee is the first to decisively and completely master his Bijuu, setting the precedent that Naruto later follows when leading the Shinobi Alliance.",
  pluribus: "Unlike a 1-on-1 duel, Naruto coordinates against MANY enemies at once, and delegates to Sai the task of objectively evaluating how that multi-way coordination is going.",
  "aivat-paper": "Sai filters out his own absent emotions to objectively evaluate his comrades' true battle performance — and that same objective filter, closing the complete circle of this chain, is what he sends all the way back to Yoda, the very first character of this whole story.",
};
