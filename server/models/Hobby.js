import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/hobbies_development"
})

class Hobby {
  constructor({id, name, description}) {
    this.id = id
    this.name = name
    this.description = description
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM hobbies;")

      //get the results
      const hobbyData = result.rows
      const hobbies = hobbyData.map(hobby => new this(hobby))

      return hobbies
    } catch(err) {
      console.log(err)
      throw(err)
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM hobbies WHERE id = $1;", [id])

      //get the results
      const hobbyData = result.rows[0]
      const hobby = new this(hobbyData)

      return hobby
    } catch(err) {
      console.log(err)
      throw(err)
    }
  }

  async save() {
    try {
      const query = "INSERT INTO hobbies (name, description) VALUES ($1, $2) RETURNING id;"
      const result = await pool.query(query, [this.name, this.description])
      // "INSERT INTO hobbies (name, description) VALUES ('Hiking', '') RETURNING id;"

      console.log(result.rows[0])
      
      const newHobbyId = result.rows[0].id
      this.id = newHobbyId
  
      return true
    } catch(err) {
      console.log(err)
      throw(err)
    }
  }
}

export default Hobby
