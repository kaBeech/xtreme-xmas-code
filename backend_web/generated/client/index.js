
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  serializedId: 'serializedId',
  username: 'username',
  oauthUrl: 'oauthUrl',
  oauthUsername: 'oauthUsername',
  oauthName: 'oauthName',
  oauthAvatarUrl: 'oauthAvatarUrl',
  dateCreated: 'dateCreated',
  numberOfGames: 'numberOfGames'
};

exports.Prisma.PublicProfileScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  userId: 'userId'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  userId: 'userId',
  number: 'number',
  year: 'year',
  name: 'name',
  playerName: 'playerName',
  currentDay: 'currentDay',
  currentDayCompleted: 'currentDayCompleted',
  currentRerollTokens: 'currentRerollTokens',
  rerollTokensSpent: 'rerollTokensSpent',
  rerollTokensSpentDuringPart2Raw: 'rerollTokensSpentDuringPart2Raw',
  part2RerollBonus: 'part2RerollBonus',
  repositoryLink: 'repositoryLink',
  progressSheetLink: 'progressSheetLink',
  isPublic: 'isPublic',
  publicProfileId: 'publicProfileId',
  score: 'score',
  titleId: 'titleId',
  dateCompleted: 'dateCompleted'
};

exports.Prisma.TitleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  minimumScore: 'minimumScore'
};

exports.Prisma.DayScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  userId: 'userId',
  gameNumber: 'gameNumber',
  number: 'number',
  challengeModifierId: 'challengeModifierId',
  modifierOptionId: 'modifierOptionId',
  dateFirstRolled: 'dateFirstRolled',
  part1Completed: 'part1Completed',
  modifierWhenPart1CompletedId: 'modifierWhenPart1CompletedId',
  optionWhenPart1CompletedId: 'optionWhenPart1CompletedId',
  part2Completed: 'part2Completed',
  challengeModifierRerollsUsed: 'challengeModifierRerollsUsed',
  modifierOptionRerollsUsed: 'modifierOptionRerollsUsed',
  rerollTokensSpentDuringPart2: 'rerollTokensSpentDuringPart2',
  score: 'score'
};

exports.Prisma.ChallengeModifierScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  text: 'text',
  hasOptions: 'hasOptions',
  explanatoryUrl: 'explanatoryUrl',
  standard: 'standard',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.ModifierOptionScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  challengeModifierId: 'challengeModifierId',
  name: 'name',
  text: 'text',
  shortText: 'shortText',
  explanatoryUrl: 'explanatoryUrl',
  standard: 'standard',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.ModifierPackScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.UpvoteScalarFieldEnum = {
  id: 'id',
  note: 'note',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  createdById: 'createdById'
};

exports.Prisma.DownvoteScalarFieldEnum = {
  id: 'id',
  note: 'note',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  createdById: 'createdById'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  PublicProfile: 'PublicProfile',
  Game: 'Game',
  Title: 'Title',
  Day: 'Day',
  ChallengeModifier: 'ChallengeModifier',
  ModifierOption: 'ModifierOption',
  ModifierPack: 'ModifierPack',
  Upvote: 'Upvote',
  Downvote: 'Downvote'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/qsl/repos/advent-of-code/xtreme-xmas-code/backend_web/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX0RCX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZAogIHNlcmlhbGl6ZWRJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgIEB1bmlxdWUKICB1c2VybmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICBAdW5pcXVlCiAgb2F1dGhVcmwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBvYXV0aFVzZXJuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG9hdXRoTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgb2F1dGhBdmF0YXJVcmwgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBkYXRlQ3JlYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBudW1iZXJPZkdhbWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIENoYWxsZW5nZU1vZGlmaWVyICAgICAgICAgICAgICAgICAgICAgICBDaGFsbGVuZ2VNb2RpZmllcltdCiAgRG93bnZvdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd252b3RlW10KICBHYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVtdCiAgTW9kaWZpZXJPcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyT3B0aW9uW10KICBNb2RpZmllclBhY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJQYWNrW10KICBQdWJsaWNQcm9maWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVibGljUHJvZmlsZVtdCiAgVXB2b3RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwdm90ZVtdCiAgRGVmYXVsdEV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzICAgICAgIENoYWxsZW5nZU1vZGlmaWVyW10gQHJlbGF0aW9uKCJEZWZhdWx0RXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIERlZmF1bHRFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyAgICAgICAgICBNb2RpZmllck9wdGlvbltdICAgIEByZWxhdGlvbigiRGVmYXVsdEV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zIikKICBEZWZhdWx0SW5jbHVkZWRDdXN0b21DaGFsbGVuZ2VNb2RpZmllcnMgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24oIkRlZmF1bHRJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgRGVmYXVsdEluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zICAgIE1vZGlmaWVyT3B0aW9uW10gICAgQHJlbGF0aW9uKCJEZWZhdWx0SW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMiKQp9Cgptb2RlbCBQdWJsaWNQcm9maWxlIHsKICBpZCAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIG5hbWUgICAgICAgIFN0cmluZwogIHVzZXJJZCAgICAgIFN0cmluZwogIEdhbWUgICAgICAgIEdhbWVbXQogIFVzZXIgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBHYW1lIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICBAZGVmYXVsdChub3coKSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgSW50CiAgeWVhciAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHBsYXllck5hbWUgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGN1cnJlbnREYXkgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjdXJyZW50RGF5Q29tcGxldGVkICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGN1cnJlbnRSZXJvbGxUb2tlbnMgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMjQpCiAgcmVyb2xsVG9rZW5zU3BlbnQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHJlcm9sbFRva2Vuc1NwZW50RHVyaW5nUGFydDJSYXcgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBwYXJ0MlJlcm9sbEJvbnVzICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcmVwb3NpdG9yeUxpbmsgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZ3Jlc3NTaGVldExpbmsgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGVmYXVsdCgiL2dhbWUvcHVibGljLyR7aWR9IikKICBpc1B1YmxpYyAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHB1YmxpY1Byb2ZpbGVJZCAgICAgICAgICAgICAgICAgSW50PwogIHNjb3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICB0aXRsZUlkICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBkYXRlQ29tcGxldGVkICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIERheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF5W10KICBEb3dudm90ZSAgICAgICAgICAgICAgICAgICAgICAgIERvd252b3RlW10KICBQdWJsaWNQcm9maWxlICAgICAgICAgICAgICAgICAgIFB1YmxpY1Byb2ZpbGU/IEByZWxhdGlvbihmaWVsZHM6IFtwdWJsaWNQcm9maWxlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFRpdGxlICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3RpdGxlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgVXB2b3RlICAgICAgICAgICAgICAgICAgICAgICAgICBVcHZvdGVbXQp9Cgptb2RlbCBUaXRsZSB7CiAgaWQgICAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgICBTdHJpbmcgQHVuaXF1ZQogIG1pbmltdW1TY29yZSBJbnQKICBHYW1lICAgICAgICAgR2FtZVtdCn0KCm1vZGVsIERheSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZ2FtZUlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50CiAgdXNlcklkICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZ2FtZU51bWJlciAgICAgICAgICAgICAgICAgICAgICAgSW50CiAgbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50CiAgY2hhbGxlbmdlTW9kaWZpZXJJZCAgICAgICAgICAgICAgSW50PwogIG1vZGlmaWVyT3B0aW9uSWQgICAgICAgICAgICAgICAgIEludD8KICBkYXRlRmlyc3RSb2xsZWQgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBwYXJ0MUNvbXBsZXRlZCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBtb2RpZmllcldoZW5QYXJ0MUNvbXBsZXRlZElkICAgICBJbnQ/CiAgb3B0aW9uV2hlblBhcnQxQ29tcGxldGVkSWQgICAgICAgSW50PwogIHBhcnQyQ29tcGxldGVkICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIGNoYWxsZW5nZU1vZGlmaWVyUmVyb2xsc1VzZWQgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBtb2RpZmllck9wdGlvblJlcm9sbHNVc2VkICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcmVyb2xsVG9rZW5zU3BlbnREdXJpbmdQYXJ0MiAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHNjb3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBDaGFsbGVuZ2VNb2RpZmllciAgICAgICAgICAgICAgICBDaGFsbGVuZ2VNb2RpZmllcj8gIEByZWxhdGlvbihmaWVsZHM6IFtjaGFsbGVuZ2VNb2RpZmllcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBHYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtnYW1lSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE1vZGlmaWVyT3B0aW9uICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyT3B0aW9uPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW21vZGlmaWVyT3B0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE1vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkICAgICAgIENoYWxsZW5nZU1vZGlmaWVyPyAgQHJlbGF0aW9uKCJNb2RpZmllcldoZW5QYXJ0MUNvbXBsZXRlZCIsIGZpZWxkczogW21vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE9wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZCAgICAgICAgIE1vZGlmaWVyT3B0aW9uPyAgICAgQHJlbGF0aW9uKCJPcHRpb25XaGVuUGFydDFDb21wbGV0ZWQiLCBmaWVsZHM6IFtvcHRpb25XaGVuUGFydDFDb21wbGV0ZWRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24oIkV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBFbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyBDaGFsbGVuZ2VNb2RpZmllcltdIEByZWxhdGlvbigiSW5jbHVkZWRDdXN0b21DaGFsbGVuZ2VNb2RpZmllcnMiKQp9Cgptb2RlbCBDaGFsbGVuZ2VNb2RpZmllciB7CiAgaWQgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgIERhdGVUaW1lICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAdW5pcXVlCiAgdGV4dCAgICAgICAgICAgICAgICAgU3RyaW5nCiAgaGFzT3B0aW9ucyAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBleHBsYW5hdG9yeVVybCAgICAgICBTdHJpbmc/CiAgc3RhbmRhcmQgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjcmVhdGVkQnlJZCAgICAgICAgICBTdHJpbmc/CiAgaXNQdWJsaWMgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBDcmVhdGVkQnkgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgRGF5ICAgICAgICAgICAgICAgICAgRGF5W10KICBEYXlDb21wbGV0ZWRJblBhcnQxICBEYXlbXSAgICAgICAgICAgIEByZWxhdGlvbigiTW9kaWZpZXJXaGVuUGFydDFDb21wbGV0ZWQiKQogIE1vZGlmaWVyT3B0aW9uICAgICAgIE1vZGlmaWVyT3B0aW9uW10KICBVc2VyRXhjbHVkZWQgICAgICAgICBVc2VyW10gICAgICAgICAgIEByZWxhdGlvbigiRGVmYXVsdEV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBVc2VySW5jbHVkZWQgICAgICAgICBVc2VyW10gICAgICAgICAgIEByZWxhdGlvbigiRGVmYXVsdEluY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBNb2RpZmllclBhY2tFeGNsdWRlZCBEYXlbXSAgICAgICAgICAgIEByZWxhdGlvbigiRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIE1vZGlmaWVyUGFja0luY2x1ZGVkIERheVtdICAgICAgICAgICAgQHJlbGF0aW9uKCJJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCn0KCm1vZGVsIE1vZGlmaWVyT3B0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNoYWxsZW5nZU1vZGlmaWVySWQgICAgICAgICAgIEludAogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICB0ZXh0ICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBzaG9ydFRleHQgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZXhwbGFuYXRvcnlVcmwgICAgICAgICAgICAgICAgU3RyaW5nPwogIHN0YW5kYXJkICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRCeUlkICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBpc1B1YmxpYyAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBEYXkgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXlbXQogIERheUNvbXBsZXRlZEluUGFydDEgICAgICAgICAgIERheVtdICAgICAgICAgICAgIEByZWxhdGlvbigiT3B0aW9uV2hlblBhcnQxQ29tcGxldGVkIikKICBDaGFsbGVuZ2VNb2RpZmllciAgICAgICAgICAgICBDaGFsbGVuZ2VNb2RpZmllciBAcmVsYXRpb24oZmllbGRzOiBbY2hhbGxlbmdlTW9kaWZpZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQ3JlYXRlZEJ5ICAgICAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBVc2VyRXhjbHVkZWQgICAgICAgICAgICAgICAgICBVc2VyW10gICAgICAgICAgICBAcmVsYXRpb24oIkRlZmF1bHRFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyIpCiAgVXNlckluY2x1ZGVkICAgICAgICAgICAgICAgICAgVXNlcltdICAgICAgICAgICAgQHJlbGF0aW9uKCJEZWZhdWx0SW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMiKQogIEV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zICAgICAgIE1vZGlmaWVyUGFja1tdICAgIEByZWxhdGlvbigiRXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIEluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zIE1vZGlmaWVyUGFja1tdICAgIEByZWxhdGlvbigiSW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMiKQp9Cgptb2RlbCBNb2RpZmllclBhY2sgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgIERhdGVUaW1lICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5SWQgICAgIFN0cmluZz8KICBpc1B1YmxpYyAgICAgICAgQm9vbGVhbiAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBDcmVhdGVkQnkgICAgICAgVXNlcj8gICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIEV4Y2x1ZGVkRnJvbURheSBNb2RpZmllck9wdGlvbltdIEByZWxhdGlvbigiRXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIEluY2x1ZGVkSW5EYXkgICBNb2RpZmllck9wdGlvbltdIEByZWxhdGlvbigiSW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMiKQp9Cgptb2RlbCBVcHZvdGUgewogIGlkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm90ZSAgICAgICAgU3RyaW5nPwogIGRhdGVDcmVhdGVkIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGdhbWVJZCAgICAgIEludAogIGNyZWF0ZWRCeUlkIFN0cmluZwogIENyZWF0ZWRCeSAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgR2FtZSAgICAgICAgR2FtZSAgICAgQHJlbGF0aW9uKGZpZWxkczogW2dhbWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIERvd252b3RlIHsKICBpZCAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vdGUgICAgICAgIFN0cmluZwogIGRhdGVDcmVhdGVkIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGdhbWVJZCAgICAgIEludAogIGNyZWF0ZWRCeUlkIFN0cmluZwogIENyZWF0ZWRCeSAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgR2FtZSAgICAgICAgR2FtZSAgICAgQHJlbGF0aW9uKGZpZWxkczogW2dhbWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0K",
  "inlineSchemaHash": "d1e94f182f013b6038a38f3187a3841291b1a343f259ea3e4d00febd37108433"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serializedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthUsername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthAvatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numberOfGames\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPack\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PublicProfile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Game\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDayCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentRerollTokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":24,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2Raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part2RerollBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repositoryLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressSheetLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/game/public/${id}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[\"publicProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Title\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Title\",\"relationName\":\"GameToTitle\",\"relationFromFields\":[\"titleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GameToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Title\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Day\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFirstRolled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part1Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optionWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part2Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DayToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[\"modifierOptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[\"modifierWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OptionWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[\"optionWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ChallengeModifier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasOptions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierOption\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierPack\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedFromDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedInDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Upvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Downvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
