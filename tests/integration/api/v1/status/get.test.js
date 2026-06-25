test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.dependencies.database.version).toBeDefined();
  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // Retorna versão do Postgres
  expect(typeof responseBody.dependencies.database.version).toBe("string");
  expect(responseBody.dependencies.database.version).toEqual("16.13");
  console.log(
    "Versão do postgres: " + responseBody.dependencies.database.version,
  );

  //Retorna máximo de conexões ao banco de dados
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  console.log(
    "Máximo de conexões: " + responseBody.dependencies.database.max_connections,
  );

  //Retorna usuários ativos:
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
  console.log(
    "Usuários ativos: " + responseBody.dependencies.database.opened_connections,
  );
});
