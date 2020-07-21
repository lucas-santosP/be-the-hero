const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });

  const dataOng = {
    name: "ONG in tests",
    email: "contanto@ong.com",
    whatsapp: "32999624159",
    city: "Juiz de fora",
    uf: "MG",
  };
  const dataIncident = {
    title: "Caso teste",
    description: "Descrição do caso teste",
    value: "2500",
  };

  it("should be able to create a new ONG", async () => {
    const response = await createOng();

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should list all ONGs created", async () => {
    const { body: { id } = {} } = await createOng();
    const expectedOngs = [{ ...dataOng, id }];

    const response = await getOngs();

    expect(response.body).toEqual(expect.arrayContaining(expectedOngs));
  });

  it("should list all incidents of the ONG", async () => {
    const responseOng = await createOng();
    const { id: ongId } = responseOng.body;

    const responseIncident = await request(app)
      .post("/incidents")
      .set("Authorization", ongId)
      .send(dataIncident)
      .expect(200);

    const { id: incidentId } = responseIncident.body;

    const responseProfile = await request(app)
      .get("/profile")
      .set("Authorization", ongId)
      .expect(200);

    const expectedIncidents = [
      { ...dataIncident, id: incidentId, ong_id: ongId },
    ];
    expect(responseProfile.body).toEqual(
      expect.arrayContaining(expectedIncidents)
    );
  });

  const createOng = async () =>
    await request(app).post("/ongs").send(dataOng).expect(200);
  const getOngs = async () => await request(app).get("/ongs").expect(200);
});
