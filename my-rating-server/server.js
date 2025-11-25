const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create DB
const db = new sqlite3.Database("./ratings.db");

// Create table if not existing
db.run(`
  CREATE TABLE IF NOT EXISTS ratings (
    detective_id TEXT PRIMARY KEY,
    total INTEGER DEFAULT 0,
    count INTEGER DEFAULT 0
  )
`);

// Get rating for a detective
app.get("/rating/:id", (req, res) => {
  const id = req.params.id;

  db.get(
    "SELECT total, count FROM ratings WHERE detective_id = ?",
    [id],
    (err, row) => {
      if (err) return res.json({ error: err.message });

      if (!row) return res.json({ total: 0, count: 0 });

      res.json(row);
    }
  );
});

// Submit a rating
app.post("/rating", (req, res) => {
  const { detective_id, rating } = req.body;

  db.run(
    `
    INSERT INTO ratings (detective_id, total, count)
    VALUES (?, ?, ?)
    ON CONFLICT(detective_id)
    DO UPDATE SET
      total = total + ?,
      count = count + 1
    `,
    [detective_id, rating, rating, rating],
    err => {
      if (err) return res.json({ error: err.message });

      // Return updated rating
      db.get(
        "SELECT total, count FROM ratings WHERE detective_id = ?",
        [detective_id],
        (err2, row) => {
          res.json(row);
        }
      );
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
