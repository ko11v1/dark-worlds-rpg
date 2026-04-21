import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AchievementItem, AllocateStatsBody, BuyItemBody, BuyItemResponse, CharacterGenResult, CharacterStats, ConfirmCharacterBody, CreateGameSessionBody, FactionData, FactionStatus, GameActionResponse, GameSession, HealthStatus, Inventory, JoinFactionBody, JoinFactionResponse, Journal, NpcEntry, PerformActionBody, SellItemResponse, ShopResponse, UpgradeSkillBody } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new game session
 */
export declare const getCreateGameSessionUrl: () => string;
export declare const createGameSession: (createGameSessionBody: CreateGameSessionBody, options?: RequestInit) => Promise<GameSession>;
export declare const getCreateGameSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGameSession>>, TError, {
        data: BodyType<CreateGameSessionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGameSession>>, TError, {
    data: BodyType<CreateGameSessionBody>;
}, TContext>;
export type CreateGameSessionMutationResult = NonNullable<Awaited<ReturnType<typeof createGameSession>>>;
export type CreateGameSessionMutationBody = BodyType<CreateGameSessionBody>;
export type CreateGameSessionMutationError = ErrorType<unknown>;
/**
 * @summary Create a new game session
 */
export declare const useCreateGameSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGameSession>>, TError, {
        data: BodyType<CreateGameSessionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGameSession>>, TError, {
    data: BodyType<CreateGameSessionBody>;
}, TContext>;
/**
 * @summary List all game sessions
 */
export declare const getListGameSessionsUrl: () => string;
export declare const listGameSessions: (options?: RequestInit) => Promise<GameSession[]>;
export declare const getListGameSessionsQueryKey: () => readonly ["/api/game/session"];
export declare const getListGameSessionsQueryOptions: <TData = Awaited<ReturnType<typeof listGameSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGameSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listGameSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListGameSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof listGameSessions>>>;
export type ListGameSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List all game sessions
 */
export declare function useListGameSessions<TData = Awaited<ReturnType<typeof listGameSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGameSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a game session
 */
export declare const getGetGameSessionUrl: (sessionId: number) => string;
export declare const getGameSession: (sessionId: number, options?: RequestInit) => Promise<GameSession>;
export declare const getGetGameSessionQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}`];
export declare const getGetGameSessionQueryOptions: <TData = Awaited<ReturnType<typeof getGameSession>>, TError = ErrorType<void>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGameSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGameSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGameSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getGameSession>>>;
export type GetGameSessionQueryError = ErrorType<void>;
/**
 * @summary Get a game session
 */
export declare function useGetGameSession<TData = Awaited<ReturnType<typeof getGameSession>>, TError = ErrorType<void>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGameSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Randomly generate a character (race + class) for a session
 */
export declare const getGenerateCharacterUrl: (sessionId: number) => string;
export declare const generateCharacter: (sessionId: number, options?: RequestInit) => Promise<CharacterGenResult>;
export declare const getGenerateCharacterMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCharacter>>, TError, {
        sessionId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateCharacter>>, TError, {
    sessionId: number;
}, TContext>;
export type GenerateCharacterMutationResult = NonNullable<Awaited<ReturnType<typeof generateCharacter>>>;
export type GenerateCharacterMutationError = ErrorType<unknown>;
/**
 * @summary Randomly generate a character (race + class) for a session
 */
export declare const useGenerateCharacter: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCharacter>>, TError, {
        sessionId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateCharacter>>, TError, {
    sessionId: number;
}, TContext>;
/**
 * @summary Confirm character selection and distribute initial stats
 */
export declare const getConfirmCharacterUrl: (sessionId: number) => string;
export declare const confirmCharacter: (sessionId: number, confirmCharacterBody: ConfirmCharacterBody, options?: RequestInit) => Promise<GameSession>;
export declare const getConfirmCharacterMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof confirmCharacter>>, TError, {
        sessionId: number;
        data: BodyType<ConfirmCharacterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof confirmCharacter>>, TError, {
    sessionId: number;
    data: BodyType<ConfirmCharacterBody>;
}, TContext>;
export type ConfirmCharacterMutationResult = NonNullable<Awaited<ReturnType<typeof confirmCharacter>>>;
export type ConfirmCharacterMutationBody = BodyType<ConfirmCharacterBody>;
export type ConfirmCharacterMutationError = ErrorType<unknown>;
/**
 * @summary Confirm character selection and distribute initial stats
 */
export declare const useConfirmCharacter: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof confirmCharacter>>, TError, {
        sessionId: number;
        data: BodyType<ConfirmCharacterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof confirmCharacter>>, TError, {
    sessionId: number;
    data: BodyType<ConfirmCharacterBody>;
}, TContext>;
/**
 * @summary Perform an action in the game (send message, choose option)
 */
export declare const getPerformActionUrl: (sessionId: number) => string;
export declare const performAction: (sessionId: number, performActionBody: PerformActionBody, options?: RequestInit) => Promise<GameActionResponse>;
export declare const getPerformActionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof performAction>>, TError, {
        sessionId: number;
        data: BodyType<PerformActionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof performAction>>, TError, {
    sessionId: number;
    data: BodyType<PerformActionBody>;
}, TContext>;
export type PerformActionMutationResult = NonNullable<Awaited<ReturnType<typeof performAction>>>;
export type PerformActionMutationBody = BodyType<PerformActionBody>;
export type PerformActionMutationError = ErrorType<unknown>;
/**
 * @summary Perform an action in the game (send message, choose option)
 */
export declare const usePerformAction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof performAction>>, TError, {
        sessionId: number;
        data: BodyType<PerformActionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof performAction>>, TError, {
    sessionId: number;
    data: BodyType<PerformActionBody>;
}, TContext>;
/**
 * @summary Get character inventory
 */
export declare const getGetInventoryUrl: (sessionId: number) => string;
export declare const getInventory: (sessionId: number, options?: RequestInit) => Promise<Inventory>;
export declare const getGetInventoryQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/inventory`];
export declare const getGetInventoryQueryOptions: <TData = Awaited<ReturnType<typeof getInventory>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetInventoryQueryResult = NonNullable<Awaited<ReturnType<typeof getInventory>>>;
export type GetInventoryQueryError = ErrorType<unknown>;
/**
 * @summary Get character inventory
 */
export declare function useGetInventory<TData = Awaited<ReturnType<typeof getInventory>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getInventory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get full character stats, skills, and status effects
 */
export declare const getGetCharacterStatsUrl: (sessionId: number) => string;
export declare const getCharacterStats: (sessionId: number, options?: RequestInit) => Promise<CharacterStats>;
export declare const getGetCharacterStatsQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/stats`];
export declare const getGetCharacterStatsQueryOptions: <TData = Awaited<ReturnType<typeof getCharacterStats>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCharacterStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCharacterStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCharacterStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getCharacterStats>>>;
export type GetCharacterStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get full character stats, skills, and status effects
 */
export declare function useGetCharacterStats<TData = Awaited<ReturnType<typeof getCharacterStats>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCharacterStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get quest log and story history
 */
export declare const getGetJournalUrl: (sessionId: number) => string;
export declare const getJournal: (sessionId: number, options?: RequestInit) => Promise<Journal>;
export declare const getGetJournalQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/journal`];
export declare const getGetJournalQueryOptions: <TData = Awaited<ReturnType<typeof getJournal>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJournal>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getJournal>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetJournalQueryResult = NonNullable<Awaited<ReturnType<typeof getJournal>>>;
export type GetJournalQueryError = ErrorType<unknown>;
/**
 * @summary Get quest log and story history
 */
export declare function useGetJournal<TData = Awaited<ReturnType<typeof getJournal>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJournal>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Allocate stat points after leveling up
 */
export declare const getAllocateStatsUrl: (sessionId: number) => string;
export declare const allocateStats: (sessionId: number, allocateStatsBody: AllocateStatsBody, options?: RequestInit) => Promise<CharacterStats>;
export declare const getAllocateStatsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof allocateStats>>, TError, {
        sessionId: number;
        data: BodyType<AllocateStatsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof allocateStats>>, TError, {
    sessionId: number;
    data: BodyType<AllocateStatsBody>;
}, TContext>;
export type AllocateStatsMutationResult = NonNullable<Awaited<ReturnType<typeof allocateStats>>>;
export type AllocateStatsMutationBody = BodyType<AllocateStatsBody>;
export type AllocateStatsMutationError = ErrorType<unknown>;
/**
 * @summary Allocate stat points after leveling up
 */
export declare const useAllocateStats: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof allocateStats>>, TError, {
        sessionId: number;
        data: BodyType<AllocateStatsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof allocateStats>>, TError, {
    sessionId: number;
    data: BodyType<AllocateStatsBody>;
}, TContext>;
export declare const getGetAchievementsUrl: (sessionId: number) => string;
export declare const getAchievements: (sessionId: number, options?: RequestInit) => Promise<AchievementItem[]>;
export declare const getGetAchievementsQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/achievements`];
export declare const getGetAchievementsQueryOptions: <TData = Awaited<ReturnType<typeof getAchievements>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAchievements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAchievements>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAchievementsQueryResult = NonNullable<Awaited<ReturnType<typeof getAchievements>>>;
export type GetAchievementsQueryError = ErrorType<unknown>;
export declare function useGetAchievements<TData = Awaited<ReturnType<typeof getAchievements>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAchievements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export declare const getGetAllFactionsUrl: () => string;
export declare const getAllFactions: (options?: RequestInit) => Promise<FactionData[]>;
export declare const getGetAllFactionsQueryKey: () => readonly ["/api/factions"];
export declare const getGetAllFactionsQueryOptions: <TData = Awaited<ReturnType<typeof getAllFactions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAllFactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllFactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export declare function useGetAllFactions<TData = Awaited<ReturnType<typeof getAllFactions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAllFactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export declare const getGetFactionStatusUrl: (sessionId: number) => string;
export declare const getFactionStatus: (sessionId: number, options?: RequestInit) => Promise<FactionStatus>;
export declare const getGetFactionStatusQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/faction`];
export declare const getGetFactionStatusQueryOptions: <TData = Awaited<ReturnType<typeof getFactionStatus>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFactionStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFactionStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export declare function useGetFactionStatus<TData = Awaited<ReturnType<typeof getFactionStatus>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFactionStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export declare const joinFaction: (sessionId: number, data: BodyType<JoinFactionBody>, options?: RequestInit) => Promise<JoinFactionResponse>;
export declare const getJoinFactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof joinFaction>>, TError, {
        sessionId: number;
        data: BodyType<JoinFactionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof joinFaction>>, TError, {
    sessionId: number;
    data: BodyType<JoinFactionBody>;
}, TContext>;
export declare function useJoinFaction<TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof joinFaction>>, TError, {
        sessionId: number;
        data: BodyType<JoinFactionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<Awaited<ReturnType<typeof joinFaction>>, TError, {
    sessionId: number;
    data: BodyType<JoinFactionBody>;
}, TContext>;
export declare const getGetNpcsUrl: (sessionId: number) => string;
export declare const getNpcs: (sessionId: number, options?: RequestInit) => Promise<NpcEntry[]>;
export declare const getGetNpcsQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/npcs`];
export declare const getGetNpcsQueryOptions: <TData = Awaited<ReturnType<typeof getNpcs>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNpcs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getNpcs>>, TError, TData> & {
    queryKey: QueryKey;
};
export declare function useGetNpcs<TData = Awaited<ReturnType<typeof getNpcs>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNpcs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export declare const getGetShopUrl: (sessionId: number) => string;
export declare const getShop: (sessionId: number, options?: RequestInit) => Promise<ShopResponse>;
export declare const getGetShopQueryKey: (sessionId: number) => readonly [`/api/game/session/${number}/shop`];
export declare const getGetShopQueryOptions: <TData = Awaited<ReturnType<typeof getShop>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getShop>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getShop>>, TError, TData> & {
    queryKey: QueryKey;
};
export declare function useGetShop<TData = Awaited<ReturnType<typeof getShop>>, TError = ErrorType<unknown>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getShop>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export declare const buyItem: (sessionId: number, data: BodyType<BuyItemBody>, options?: RequestInit) => Promise<BuyItemResponse>;
export declare const getBuyItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof buyItem>>, TError, {
        sessionId: number;
        data: BodyType<BuyItemBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof buyItem>>, TError, {
    sessionId: number;
    data: BodyType<BuyItemBody>;
}, TContext>;
export declare function useBuyItem<TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof buyItem>>, TError, {
        sessionId: number;
        data: BodyType<BuyItemBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<Awaited<ReturnType<typeof buyItem>>, TError, {
    sessionId: number;
    data: BodyType<BuyItemBody>;
}, TContext>;
export declare const sellItem: (sessionId: number, itemId: number, options?: RequestInit) => Promise<SellItemResponse>;
export declare const getSellItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sellItem>>, TError, {
        sessionId: number;
        itemId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sellItem>>, TError, {
    sessionId: number;
    itemId: number;
}, TContext>;
export declare function useSellItem<TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sellItem>>, TError, {
        sessionId: number;
        itemId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<Awaited<ReturnType<typeof sellItem>>, TError, {
    sessionId: number;
    itemId: number;
}, TContext>;
export declare const upgradeSkill: (sessionId: number, data: BodyType<UpgradeSkillBody>, options?: RequestInit) => Promise<CharacterStats>;
export declare const getUpgradeSkillMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upgradeSkill>>, TError, {
        sessionId: number;
        data: BodyType<UpgradeSkillBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upgradeSkill>>, TError, {
    sessionId: number;
    data: BodyType<UpgradeSkillBody>;
}, TContext>;
export declare function useUpgradeSkill<TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upgradeSkill>>, TError, {
        sessionId: number;
        data: BodyType<UpgradeSkillBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}): UseMutationResult<Awaited<ReturnType<typeof upgradeSkill>>, TError, {
    sessionId: number;
    data: BodyType<UpgradeSkillBody>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map