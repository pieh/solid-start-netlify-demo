import { createAsync, cache } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

const getHelloWorld = cache(async () => {
  "use server";
  console.log("we are fetching from server");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "hello-world";
}, "users");

export const route = {
  load: () => getHelloWorld(),
};

export default function Home() {
  const helloWorld = createAsync(() => getHelloWorld());

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <pre>{helloWorld()}</pre>
    </main>
  );
}
