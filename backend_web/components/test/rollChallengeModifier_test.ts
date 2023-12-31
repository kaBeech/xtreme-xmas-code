import { assertEquals } from "https://deno.land/std@0.197.0/assert/mod.ts";
import { rollChallengeModifier } from "../rollChallengeModifier.ts";
import { exampleChallengeModifiers } from "./exampleObjects.ts";

Deno.test("Rolling returns a ChallengeModifier", () => {
  const result = rollChallengeModifier(exampleChallengeModifiers);
  assertEquals(typeof result.id, "number");
  assertEquals(typeof result.name, "string");
  assertEquals(typeof result.text, "string");
  assertEquals(typeof result.hasOptions, "boolean");
});
