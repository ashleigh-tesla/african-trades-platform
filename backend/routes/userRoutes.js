router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});
