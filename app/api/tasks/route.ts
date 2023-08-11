import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import Tarea from "@/models/tareas";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const { titulo, creado, completed, author, email } = await request.json();
    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        const tarea = new Tarea({
            titulo,
            creado,
            completed,
            author: userFound._id,
        });
        const tareaUser = await tarea.save();
        return NextResponse.json({ message: "Tarea agregada con exito" });
    } catch (error) {
        console.log(error);
    }
}

export async function GET(response: Response) {
    await connectDB();
    try {
        const tareas = await Tarea.find({});
        return NextResponse.json({ tareas });
    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    try {
        await connectDB();
        let tareaDeleted = await Tarea.findByIdAndDelete(id).exec();
        if (!tareaDeleted) throw Error("No se encontro la tarea");
        return NextResponse.json({ msg: "Tarea eliminada" });
    } catch (error) {
        console.log(error);
    }
}

export async function PUT(request: Request) {
    const { tarea, completed } = await request.json();

    let tareaUpdate = { ...tarea, completed: !tarea.completed };

    console.log(tarea);

    try {
        await connectDB();
        let task = await Tarea.findOneAndUpdate(
            { _id: tarea._id },
            tareaUpdate,
            {
                new: true,
            }
        );
        console.log(task);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
    }
}
