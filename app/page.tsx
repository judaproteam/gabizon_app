
import { insertPost } from "@/db/post/set";

export default function Home() {
  

  return (
    <form action={insertPost}>
      <input type="date" name="date" required />
      <input type="text" name="title" placeholder="title" required />
      <input type="number" name="time" placeholder="time" required />
      <button type="submit">Send</button>
    </form>
  );
}
