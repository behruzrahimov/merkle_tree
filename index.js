const { MerkleTree } = require("merkletreejs");
const SHA256 = require("sha256");
const leaves = ["a", "b", "c"].map((x) => SHA256(x));
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString("hex");
console.log("Leaves:", leaves);
console.log("Tree:", tree.toString());
console.log({ root });
leaves.map((e, i) => {
  const positionalHexProof = tree.verify(
    tree.getPositionalHexProof(e, i),
    e,
    root
  );
  console.log(`Verify ${i + 1}:`, positionalHexProof);
});
leaves.map((e, i) => {
  console.log(
    `PositionalHexProof ${i + 1}`,
    tree.getPositionalHexProof(e, i),
    "\n"
  );
});
