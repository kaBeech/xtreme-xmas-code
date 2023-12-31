import { Game, Title } from "../generated/client/deno/index.d.ts";

interface GameControllerState {
  game: Game;
}

export const GameController = (
  game: Game,
) => {
  const state = {
    game,
  };

  return {
    ...nextDayStarter(state),
    ...currentDayCompleter(state),
    ...currentRerollTokensAdjuster(state),
    ...rerollTokenSpender(state),
    ...nameSetter(state),
    ...playerNameSetter(state),
    ...repositoryLinkSetter(state),
    ...progressSheetLinkSetter(state),
    ...publicStatusSetter(state),
    ...repositoryLinkSetter(state),
  };
};

const nextDayStarter = (state: GameControllerState) => ({
  startNextDay: () => {
    if (state.game.currentDay === 25) {
      throw new Error("It's already Christmas (Day 25)!!!");
    }
    if (state.game.currentDay !== 0 && !state.game.currentDayCompleted) {
      throw new Error(
        `Day ${state.game.currentDay} has not been completed yet`,
      );
    }
    state.game.currentDay += 1;
    currentDayCompletionStatusSetter(state).setCurrentDayCompletionStatus(
      false,
    );
    return state.game;
  },
});

const currentDayCompletionStatusSetter = (state: GameControllerState) => ({
  setCurrentDayCompletionStatus: (completed: boolean) => {
    state.game.currentDayCompleted = completed;
    return state.game;
  },
});

const titleAwarder = (state: GameControllerState) => ({
  awardTitle: (titles: Title[]) => {
    const sortedTitles = titles.sort((a, b) => b.minimumScore - a.minimumScore);
    for (let i = 0; state.game.titleId === null; i++) {
      if (state.game.score >= sortedTitles[i].minimumScore) {
        state.game.titleId = sortedTitles[i].id;
      }
    }
    return state.game;
  },
});

const currentDayCompleter = (state: GameControllerState) => ({
  completeCurrentDay: (part2RerollBonus: number, titles: Title[]) => {
    if (state.game.currentDayCompleted === true) {
      throw new Error(
        `Current day (${state.game.currentDay}) already completed`,
      );
    }
    state.game.part2RerollBonus += part2RerollBonus;
    state.game = currentDayCompletionStatusSetter(state)
      .setCurrentDayCompletionStatus(true);
    scoreCalculator(state).calculateScore();
    if (state.game.currentDay === 25) {
      gameCompleter(state).completeGame(titles);
    }
    return state.game;
  },
});

const gameCompleter = (state: GameControllerState) => ({
  completeGame: (titles: Title[]) => {
    if (state.game.dateCompleted) {
      throw new Error(
        `Game (${state.game.name}) already completed`,
      );
    }
    if (!state.game.currentDayCompleted) {
      throw new Error(
        `Current Day not yet completed`,
      );
    }
    if (state.game.currentDay !== 25) {
      throw new Error(
        `Current Day (${state.game.currentDay}) not yet Christmas (Day 25)`,
      );
    }
    state.game.dateCompleted = new Date();
    scoreCalculator(state).calculateScore();
    titleAwarder(state).awardTitle(titles);
    return state.game;
  },
});

const currentRerollTokensAdjuster = (state: GameControllerState) => ({
  adjustCurrentRerollTokens: (amount: number) => {
    state.game.currentRerollTokens += amount;
    scoreCalculator(state).calculateScore();
    return state.game;
  },
});

const rerollTokenSpender = (state: GameControllerState) => ({
  spendRerollTokens: (
    amount: number,
  ) => {
    currentRerollTokensAdjuster(state).adjustCurrentRerollTokens(-amount);
    state.game.rerollTokensSpent += amount;
    return state.game;
  },
});

const nameSetter = (state: GameControllerState) => ({
  setName: (newName: string) => {
    if (newName.length > 24) {
      throw new Error("Name cannot be longer than 24 characters");
    }
    if (newName.length < 1) {
      throw new Error("Name cannot be empty");
    }
    state.game.name = newName;
    return state.game;
  },
});

const playerNameSetter = (state: GameControllerState) => ({
  setPlayerName: (newPlayerName: string) => {
    if (newPlayerName.length > 24) {
      throw new Error("Player name cannot be longer than 24 characters");
    }
    if (newPlayerName.length < 1) {
      throw new Error("Player name cannot be empty");
    }
    state.game.playerName = newPlayerName;
    return state.game;
  },
});

const repositoryLinkSetter = (state: GameControllerState) => ({
  setRepositoryLink: (newRepositoryLink: string) => {
    if (newRepositoryLink.length > 255) {
      throw new Error("Repository link cannot be longer than 255 characters");
    }
    state.game.repositoryLink = newRepositoryLink;
    return state.game;
  },
});

const progressSheetLinkSetter = (state: GameControllerState) => ({
  setProgressSheetLink: (newProgressSheetLink: string) => {
    if (newProgressSheetLink.length > 255) {
      throw new Error(
        "Progress sheet link cannot be longer than 255 characters",
      );
    }
    state.game.progressSheetLink = newProgressSheetLink;
    return state.game;
  },
});

const publicStatusSetter = (state: GameControllerState) => ({
  setPublicStatus: (isPublic: boolean) => {
    state.game.isPublic = isPublic;
    return state.game;
  },
});

const scoreCalculator = (state: GameControllerState) => ({
  calculateScore: () => {
    const part2RerollBonus = state.game.part2RerollBonus;
    state.game.score = 10 * state.game.currentRerollTokens + part2RerollBonus;
    return state.game.score;
  },
});
