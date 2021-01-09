
from typing import NamedTuple, Tuple, List
from itertools import combinations, groupby
import random

class Rank(NamedTuple):
    name: str
    value: str

class Card(NamedTuple):
    rank: Rank
    suit: str

class Player(NamedTuple):
    id: str
    name: str
    stack: int
    hand: Tuple[Card]
    bet: int
    position: int
    sitting_out: bool
    has_folded: bool
    seat_num: int
    is_players_turn: bool

class GameState(NamedTuple):
    name: str
    value: int

class Game(NamedTuple):
    id: str
    name: str
    state: GameState
    big_blind: int
    small_blind: int
    players: Tuple[Player]
    num_seats: int
    pot: int
    deck: Tuple[Card]
