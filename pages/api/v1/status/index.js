function status(request, response) {
  response.status(200).json({ chave: "O léo é tipo assim, o cara bixo" });
}

export default status;
