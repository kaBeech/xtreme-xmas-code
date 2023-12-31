import { State } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getUserByIdWithRelations } from "../../db.ts";

export const getDay = async (
  ctx: RouterContext<
    "/game/:gameNumber/day/:dayNumber",
    {
      gameNumber: string;
    } & {
      dayNumber: string;
    } & Record<string | number, string | undefined>,
    State
  >,
) => {
  const { gameNumber, dayNumber } = ctx.params;
  const userId = ctx.state.session.get("userId") as string;
  const userData = await getUserByIdWithRelations(userId);
  ctx.response.body = userData.Game.find((game) => game.number === +gameNumber)!
    .Day.find((day) => day.number === +dayNumber);
};
