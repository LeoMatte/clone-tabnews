import database from "../../../../infra/database.js";
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result);
  response.status(200).json({ chave: "O léo é tipo assim, o cara bixo" });
}

export default status;
