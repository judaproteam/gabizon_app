<<<<<<< Updated upstream
export default function Home() {
  return <div></div>
=======
"use client";

import { insertLesson } from "@/db/lessons/set";

export default function Home() {
  async function sendToServer(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const timeValue = formData.get("time");
    const lessonData = {
      date: formData.get("date"),
      title: formData.get("title"),
      time: timeValue ? parseInt(String(timeValue), 10) : 0,
    };

    console.log("Time Value:", timeValue);
    console.log("Lesson Data:", lessonData);

    await insertLesson(lessonData);
  }

  return (
    <form onSubmit={sendToServer}>
      <input type="date" name="date" required />
      <input type="text" name="title" placeholder="title" required />
      <input type="number" name="time" placeholder="time" required />
      <button type="submit">Send</button>
    </form>
  );
>>>>>>> Stashed changes
}
