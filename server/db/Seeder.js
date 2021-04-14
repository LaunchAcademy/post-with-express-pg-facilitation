import pg from 'pg'
const pool = new pg.Pool({connectionString:"postgres://postgres:password@localhost:5432/hobbies_development"})

class Seeder {
  static async seed() {
    try {
      console.log("starting seed");
      await pool.query("INSERT INTO hobbies(name,description) VALUES($1, $2);", ["Cross Stitching", "Making tons of little x's with a needle and thread to make beautiful (or snarky) patterns"])
      await pool.query("INSERT INTO hobbies(name) VALUES($1);", ['Running'])
      const result = await pool.query("SELECT * FROM hobbies;")
      console.log(result.rows)
      pool.end()
    } catch (error) {
      console.log(`Error: ${error}`)
      pool.end()
    }
  }
}

export default Seeder
