import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

/**
 * GET /api/notes
 */

app.get("/api/notes", async (req, res) => {
	const notes = await prisma.note.findMany();
	res.json(notes);
});

/**
 * POST /api/notes
 */

app.post("/api/notes", async (req, res) => {
	const { title, content } = req.body;

	if (!title || !content) {
		return res.status(400).send("Title and content are required");
	}

	try {
		const note = await prisma.note.create({
			data: { title, content }
		})
		res.json(note);
	}
	catch (error) {
	console.error(error);
	res.status(500).send("Oops! An error occurred while creating the note");
}

});

/**
 * Update a note by ID
 */


app.put("/api/notes/:id", async (req, res) => {

	const {title, content} = req.body;
	const id = parseInt(req.params.id);

	if (!id || isNaN(id)) {
		return res.status(400).send("ID must be valid number");
	}

	if (!title || !content) {
		return res.status(400).send("Title and content are required");
	}

	try {
		const updatedNote = await prisma.note.update({
			where: { id },
			data: { title, content }
		})
		res.json(updatedNote);

	} catch (error) {
		console.error(error);
		res.status(500).send("Oops! An error occurred while updating the note");
	}
})

/**
 * Delete a note by ID
 */

app.delete("/api/notes/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	if (!id || isNaN(id)) {
		return res.status(400).send("ID must be valid number");
	}

	try {
		await prisma.note.delete({
			where: { id }
		})
		res.json({ message: "Note deleted successfully" });

	} catch (error) {
		console.error(error);
		res.status(500).send("Oops! An error occurred while deleting the note");
	}
}
)



app.listen(4000, () => {
	console.log("Server is running on port localhost:4000");
})