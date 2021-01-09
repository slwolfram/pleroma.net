from pleromanet.poker.model import *


def state_to_dict(state: GameState) -> dict:
    return state._asdict()

def state_from_dict(state_dict: dict) -> GameState:
    state_values = []
    for k in GameState._fields:
        if k not in state_dict:
            raise Exception(f"state dict is missing required attribute \"{k}\"")
        else:
            state_values.append(state_dict[k])
    return GameState(*tuple(state_values))


def rank_to_dict(rank: Rank) -> dict:
    return rank._asdict()

def rank_from_dict(rank_dict: dict) -> Rank:
    rank_values = []
    for k in Rank._fields:
        if k not in rank_dict:
            raise Exception(f"rank dict is missing required attribute \"{k}\"")
        else:
            rank_values.append(rank_dict[k])
    return Rank(*tuple(rank_values))

def card_to_dict(card: Card) -> dict:
    card_dict = {}
    for k in Card._fields:
        value = getattr(card, k)
        if k == 'rank':
            card_dict[k] = rank_to_dict(value)
        else:
            card_dict[k] = value
    return card_dict

def card_from_dict(card_dict: dict) -> Card:
    card_values = []
    for k in Card._fields:
        if k not in card_dict:
            raise Exception(f"card dict is missing required attribute \"{k}\"")
        if k == 'rank':
            card_values.append(rank_from_dict(card_dict[k]))
        else:
            card_values.append(card_dict[k])
    return Card(*tuple(card_values))

def player_to_dict(player: Player) -> dict:
    player_dict = {}
    for k in Player._fields:
        value = getattr(player, k)
        if k == 'hand':
            player_dict[k] = ([card_to_dict(c) for c in value] if value else None)
        else:
            player_dict[k] = value
    return player_dict

def player_from_dict(player_dict: dict) -> Player:
    player_values = []
    for k in Player._fields:
        if k not in player_dict:
            raise Exception(f"player dict is missing required attribute \"{k}\"")
        elif k == 'hand':
            hand = (tuple(card_from_dict(c) for c in player_dict[k])
                    if player_dict[k] else
                    None)
            player_values.append(hand)
        else:
            player_values.append(player_dict[k])
    return Player(*tuple(player_values))

def game_to_dict(game: Game) -> dict:
    game_dict = {}
    for k in Game._fields:
        value = getattr(game, k)
        if k == 'players':
            game_dict[k] = [player_to_dict(p) for p in value]
        elif k == 'deck':
            game_dict[k] = [card_to_dict(c) for c in value]
        elif k == 'state':
            game_dict[k] = state_to_dict(value)
        else:
            game_dict[k] = value
    return game_dict

def game_from_dict(game_dict: dict) -> Game:
    game_values = []
    for k in Game._fields:
        if k not in game_dict:
            raise Exception(f"game dict is missing required attribute \"{k}\"")
        elif k == 'players':
            players = tuple(player_from_dict(p) for p in game_dict[k])
            game_values.append(players)
        elif k == 'deck':
            deck = tuple(card_from_dict(c) for c in game_dict[k])
            game_values.append(deck)
        elif k == 'state':
            game_values.append(state_from_dict(game_dict[k]))
        else:
            game_values.append(game_dict[k])
    return Game(*tuple(game_values))
